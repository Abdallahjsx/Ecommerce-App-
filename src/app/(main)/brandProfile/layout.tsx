"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import BgSvg from "@/features/brandProfile/components/BgSvg";
import Header from "@/features/brandProfile/components/Header";
import { Box } from "@mui/material";
import { useState } from "react";
import BrandTabs from "@/features/brandProfile/components/BrandTabs";
import BGSVGRight from "@/features/brandProfile/components/BGSVGRight";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [selected, setSelected] = useState<"Older" | "Popular">("Popular");

  const tabRoutes = [
    "/brandProfile/reels",
    "/brandProfile/shop",
    "/brandProfile/offers",
    "/brandProfile/reviews",
    "/brandProfile/policy",
  ];

  const activeTabIndex = tabRoutes.indexOf(pathname);

  return (
    <Box
      sx={{
        backgroundColor: "rgba(246, 243, 236, 1)",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{ position: "absolute", right: 0, top: 0, zIndex: 0, opacity: 0.6 }}
      >
        <BgSvg />
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-10%)",
          zIndex: 0,
          opacity: 0.6,
        }}
      >
        <BGSVGRight />
      </Box>

      <Box sx={{ position: "relative", zIndex: 1, px: { xs: 2, md: "100px" } }}>
        <Box
          sx={{
            mx: "auto",
            pt: { xs: 4, md: "80px" },
            pb: { xs: 2, md: 3 },
          }}
        >
          <Header />
          <BrandTabs
            activeTabIndex={activeTabIndex}
            pathname={pathname}
            selected={selected}
            setSelected={setSelected}
          />
        </Box>

        <Box
          sx={{
            mx: "auto",
            pb: 5,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
