"use client";
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "@/Redux/hooks";
import { getUserInfo } from "../services/userService";
import { User, ApiResponse } from "../types";

export function useUser() {
  const token = useAppSelector((s: any) => s.auth?.token); 

  // لو مفيش توكن، رجّعي User = null ومتشغليش الـ API
  const { data, error, isLoading, refetch } = useQuery<ApiResponse<User>>({
    queryKey: ["user", token],
    queryFn: () => getUserInfo(),
    enabled: !!token, 
    retry: false,
  });

  return {
    user: data?.data || null,
    token,
    loading: isLoading,
    error: error ? (error as any)?.response?.data?.message?.en : null,
    refresh: refetch,
    isLoggedIn: !!token,
  };
}






