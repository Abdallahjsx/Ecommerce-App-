"use client"
import { login } from "../services/auth";
import { useMutation } from "@tanstack/react-query";
import { useAppDispatch } from "@/Redux/store";
import { setToken } from "@/Redux/slices/authSlice";

export function useLogin() {
    const dispatch = useAppDispatch(); 

  return useMutation({
        mutationFn:login,

        onSuccess:(data)=>{
            console.log("responnse  success and data is ")

            // ✅ التعديل بس هنا
            if (typeof window !== "undefined") {
                localStorage.setItem("token", data.data.token);
            }

            dispatch(setToken(data.data.token));
        },

        onError:(error:any)=>{
            console.log(error.response.data?.message.en)
        }
    })
}