"use client";

import Link from "next/link";
import { Box, Tabs, Tab, Stack } from "@mui/material";
import { gradientTextStyleTab } from "@/app/(main)/brandProfile/style";
import ReelOlderPopular from "./ReelOlderPopular";

interface BrandTabsProps {
  activeTabIndex: number;
  pathname: string;
  selected: "Older" | "Popular";
  setSelected: (value: "Older" | "Popular") => void;
}

const tabsData = [
  {
    label: "Reels",
    href: "/brandProfile/reels",
    icon: "/assets/icons/Reel.svg",
  },
  {
    label: "Shop",
    href: "/brandProfile/shop",
    icon: "/assets/icons/Shop.svg",
  },
  {
    label: "Offers",
    href: "/brandProfile/offers",
    icon: "/assets/icons/offer.svg",
  },
  {
    label: "Reviews",
    href: "/brandProfile/reviews",
    icon: "/assets/icons/Reviews.svg",
  },
  {
    label: "Policy",
    href: "/brandProfile/policy",
    icon: "/assets/icons/Policy.svg",
  },
];

export default function BrandTabs({
  activeTabIndex,
  pathname,
  selected,
  setSelected,
}: BrandTabsProps) {
  return (
    <Box sx={{ mt: 8 }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "center", md: "center" }}
        justifyContent="space-between"
        spacing={3}
      >
        <Tabs
          value={activeTabIndex !== -1 ? activeTabIndex : 0}
          textColor="secondary"
          indicatorColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            flexGrow: 1,
            width: "100%",
            "& .MuiTabs-flexContainer": {
              justifyContent: { xs: "center", md: "flex-start" },
            },
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: "bold",
              minWidth: { xs: 50, md: 100 },
            },
          }}
        >
          {tabsData.map((tab, index) => (
            <Tab
              key={index}
              component={Link}
              href={tab.href}
              sx={gradientTextStyleTab}
              label={
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box
                    component="img"
                    src={tab.icon}
                    alt={tab.label}
                    sx={{
                      width: { xs: 24, md: 20 },
                      height: { xs: 24, md: 20 },
                    }}
                  />
                  <Box
                    component="span"
                    sx={{ display: { xs: "none", md: "inline" } }}
                  >
                    {tab.label}
                  </Box>
                </Box>
              }
            />
          ))}
        </Tabs>

        {pathname === "/brandProfile/reels" && (
          <Box
            sx={{
              width: { xs: "100%", md: "auto" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ReelOlderPopular selected={selected} setSelected={setSelected} />
          </Box>
        )}
      </Stack>
    </Box>
  );
}
