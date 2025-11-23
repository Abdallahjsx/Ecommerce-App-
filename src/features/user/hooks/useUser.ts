import { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "@/Redux/hooks";
import type { User } from "../types";
import { getProfile } from "../services/userService";

export default function useUser() {
  const token = useAppSelector((s: any) => s.auth?.token as string | null);

  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(() => true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    if (!token) {
      setUser(null);
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await getProfile(token);

      if (res.data?.data) {
        setUser(res.data.data);
      } else {
        setUser(null);
        setError("Failed to load profile");
      }
    } catch (err: any) {
      setUser(null);
      setError(err?.message ?? "Failed to load profile");
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  return { user, token, loading, error, refresh, isLoggedIn: !!token };
}



