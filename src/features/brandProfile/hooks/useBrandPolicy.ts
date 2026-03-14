"use client";

import { useState, useEffect } from "react";
import { getBrandPolicy } from "../services";

export function useBrandPolicy(id: number) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPolicy() {
      try {
        setLoading(true);
        const response = await getBrandPolicy(id);
        if (response.success) {
          setData(response.data);
        } else {
          setError(response.message?.en || "Failed to fetch policy");
        }
      } catch (err: any) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchPolicy();
    }
  }, [id]);

  return { data, loading, error };
}
