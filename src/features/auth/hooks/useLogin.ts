"use client";
import { login, logout } from "../services/auth";
import { useMutation } from "@tanstack/react-query";
import { useAppDispatch } from "@/Redux/store";
import { setToken } from "@/Redux/slices/authSlice";
import { useState } from "react";
import { clearToken } from "@/Redux/slices/authSlice";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export function useLogin() {
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState("");

  const mutation = useMutation({
    mutationFn: login,

    onSuccess: (data) => {
      setErrorMessage("");

      dispatch(setToken(data.data.token));
      document.cookie = `token=${data.data.token}; path=/; max-age=86400`;
    },

    onError: (error: any) => {
      setErrorMessage(
        error?.response?.data?.errors?.[0]?.en ??
          error?.response?.data?.message?.en,
      );
    },
  });
  return { ...mutation, errorMessage };
}
export function useLogout() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const [errorMessage, setErrorMessage] = useState("");

  const mutation = useMutation({
    mutationFn: logout,

    onSuccess: () => {
      setErrorMessage("");

      dispatch(clearToken());
      document.cookie = `token=; path=/; max-age=0`;

    },

    onError: (error: any) => {
      setErrorMessage(
        error?.response?.data?.errors?.[0]?.en ??
          error?.response?.data?.message?.en,
      );
    },
  });
  return { ...mutation, errorMessage };
}
