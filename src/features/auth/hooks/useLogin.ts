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
      // ✅ التعديل بس هنا
      if (typeof window !== "undefined") {
        localStorage.setItem("token", data.data.token);
      }

      dispatch(setToken(data.data.token));
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
    //   if (
    //     pathname.startsWith("/cart") ||
    //     pathname.startsWith("/wishlist") ||
    //     pathname.startsWith("/orders")
    //   ) {
    //     router.replace("/home");
    //   }
      dispatch(clearToken());
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
