import { useMutation } from "@tanstack/react-query";
import { forgetPasswordEmail, resetNewPassword } from "../services/auth";
import { useState } from "react";
export function useForgetPasswordEmail(callBackOnSuccess?: () => void) {
  const [errorMessage, setErrorMessage] = useState("");
  const mutation = useMutation({
    mutationFn: (email: string) => forgetPasswordEmail(email),
    onSuccess: () => {
      setErrorMessage("");
      if (callBackOnSuccess) callBackOnSuccess();
    },
    onError: (error: any) => {
      setErrorMessage(
        error?.response?.data?.errors[0]?.en ??
          error?.response?.data?.message?.en,
      );
    },
  });
  return { ...mutation, errorMessage };
}

export function useResetNewPassword(callBackOnSuccess?: () => void) {
  const [errorMessage, setErrorMessage] = useState("");
  const mutation = useMutation({
    mutationFn: (password: string) => resetNewPassword(password),
    onSuccess: () => {
      setErrorMessage("");
      if (callBackOnSuccess) callBackOnSuccess();
    },
    onError: (error: any) => {
      setErrorMessage(
        error?.response?.data?.errors[0]?.en ??
          error?.response?.data?.message?.en,
      );
    },
  });
  return { ...mutation, errorMessage };
}
