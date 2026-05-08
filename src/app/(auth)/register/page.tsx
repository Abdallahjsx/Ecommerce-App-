"use client";
import UserInfo from "./components/userInfo";
import Interests from "./components/interests";
import { useAppSelector } from "@/Redux/store";

export default function RegisterPage() {
  const step = useAppSelector((state) => state.otpVerification.step);
  if (step == 1) {
    return <UserInfo />
  }
  else if (step == 2) {
    return <Interests />
  }
}