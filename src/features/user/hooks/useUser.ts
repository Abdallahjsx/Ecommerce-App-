"use client";
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "@/Redux/hooks";


export function useUser() {
  const token = useAppSelector((s: any) => s.auth?.token);

  // لو مفيش توكن، رجّعي User = null ومتشغليش الـ API
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["user", token],
    enabled: !!token, 
    retry: false,
  });

  

  return {
    token,
    loading: isLoading,
    error: error ? (error as any)?.response?.data?.message?.en : null,
    refresh: refetch,
    isLoggedIn: !!token,
  };
}





