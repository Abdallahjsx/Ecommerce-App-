"use client";
import React from "react";
import LoggedInProfileCard from "./LoggedInProfileCard";
import GuestProfileCard from "./GuestProfileCard";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
export default function UserCard() {
  const token = useSelector((state: RootState) => state.auth.token);
  if (token) {
    return <LoggedInProfileCard />;
  } else {
    // return <GuestProfileCard />;
  }
}
