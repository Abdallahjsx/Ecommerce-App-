"use client";

import { Box } from "@mui/material";
import Hero from "@/features/home/components/Hero";
import TopBrands from "@/features/home/components/TopBrands";
import OffersSection from "@/features/home/components/OffersSection";
import ReelsSection from "@/features/home/components/ReelsSection";
import CategoriesSection from "@/features/home/components/CategoriesSection";
import FavoritesSection from "@/features/home/components/FavoritesSection";
import DownloadBanner from "@/features/home/components/DownloadBanner";
import { useEffect } from "react";
import { useAppDispatch } from "@/Redux/store";
import { setStep } from "@/Redux/slices/otpVerificationSlice";

export default function HomePage() {
  // reset the register page 
  const dispatch = useAppDispatch()
  useEffect(() => {
    return () => {
      dispatch(setStep(1))
    }
  }, [])
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      <Hero />
      <TopBrands />
      <OffersSection />
      <ReelsSection />
      <CategoriesSection />
      <FavoritesSection />
      <DownloadBanner />
    </Box>
  );
}
