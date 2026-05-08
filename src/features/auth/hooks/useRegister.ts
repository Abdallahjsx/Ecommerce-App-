"use client";
import { register } from "../services/auth";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export function useRegister(callBackOnSuccess: () => void) {
  const [errorMessage, setErrorMessage] = useState("");
  const mutation = useMutation({
    mutationFn: register,
    onSuccess: () => {
      setErrorMessage("");
      callBackOnSuccess();
    },
    onError: (error: any) => {
      if (error) {
        setErrorMessage(
          error?.response?.data?.errors[0]?.en ?? error?.response?.data?.message?.en,
        );
      }
    },
  });
  console.log(errorMessage);
  return { ...mutation, errorMessage };
}
