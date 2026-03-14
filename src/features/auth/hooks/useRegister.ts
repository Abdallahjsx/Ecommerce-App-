"use client";
import { register } from "../services/auth";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export function useRegister() {
  const [errorMessage, setErrorMessage] = useState("");
  const mutation = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      console.log(
        "SUCCESS 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🐦‍🔥🐦‍🔥🐦‍🔥🐦‍🔥🐦‍🔥🐦‍🔥🐦‍🔥🐦‍🔥🐦‍🔥🐦‍🔥🐦‍🔥🐦‍🔥🐦‍🔥🐦‍🔥👩‍🚒👩‍🚒👩‍🚒",
      );
      console.log(data);
      setErrorMessage("");
    },
    onError: (res) => {
      const error = JSON.parse(res.message);
      setErrorMessage(
        error?.errors?.[0]?.en ??
          error?.message?.en ??
          "حدث خطأ ما. يرجى المحاولة لاحقًا.",
      );
    },
  });
  console.log(errorMessage);
  return { ...mutation, errorMessage };
}
