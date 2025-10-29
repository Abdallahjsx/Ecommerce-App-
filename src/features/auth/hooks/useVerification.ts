"use client"
import { useMutation } from "@tanstack/react-query"
import { verification } from "../services/auth"
import { AxiosError } from "axios";
import { useAppDispatch } from "@/Redux/store";
import { setToken } from "@/Redux/slices/authSlice";
export default function useVerificaion() {
     const dispatch = useAppDispatch();
return useMutation({
    mutationFn:  verification,  
    onSuccess: (data) => {
    dispatch(setToken(data.data.token));

    },onError:(error:any)=>{
        console.log(error.response.data)
    }
})
}
