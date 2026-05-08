"use client";

import React, { useState, useEffect } from "react";
import EmailStep from "./components/emailStep";
import NewPasswordStep from "./components/NewPasswordStep";
import { useAppSelector, useAppDispatch } from "@/Redux/store";
import { setVerifiedUser, setEmail } from "@/Redux/slices/otpVerificationSlice";

export default function PasswordReset() {
  const { verifiedUser, email } = useAppSelector((state) => state.otpVerification);
  const dispatch = useAppDispatch();

  return (
    <>
      {!verifiedUser ? (
        <EmailStep />
      ) : (
        <NewPasswordStep />
      )}
    </>
  );
}
