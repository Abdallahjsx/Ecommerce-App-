"use client";
import { Box } from "@mui/material";
import { useTheme, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { useUser } from "@/features/user/hooks/useUser";
import { useState, useEffect } from "react";

const optionsList: any = [
  { name: "Home", icon: "/assets/icons/home-icon.svg" },
  { name: "Shop", icon: "/assets/icons/shop-icon.svg" },
  { name: "Reels", icon: "/assets/icons/reels-icon.svg" },
  { name: "Orders", icon: "/assets/icons/cart-icon.svg" },
  { name: "Favorites", icon: "/assets/icons/heart-icon.svg" },
  { name: "Contact Us", icon: "/assets/icons/phone-icon.svg" },
  { name: "FAQs", icon: "/assets/icons/question-mark-icon.svg" },
];

export default function SideBarList({
  shown,

}: {
  shown: boolean;

}) {
  const [mounted, setMounted] = useState(false);
  const t = useTheme();
  const router = useRouter();
  const { isLoggedIn } = useUser();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <Box
      sx={{
        display: { xs: "block", md: "none" },
        position: "fixed",
        left: `${shown ? "0px" : "-100vw"}`,
        zIndex: -11,
        top: "70px",
        bottom: "-20px",
        backdropFilter: "brightness(0.8)",
        transition: "all 0.5s ease",
        width: "100vw",
      }}
    >
      <Box
        sx={{
          padding: "6px 20px 153px 12px",
          // display: { xs: "flex", lg: "none" },
          flexDirection: "column",
          overflowY: "scroll",
          scrollbarWidth: "none",
          height: "110vh",
          width: "290px",
          backgroundColor: t.tokens.backgroundColors.main,
        }}
      >
        {!isLoggedIn && (
          <div
            style={{
              padding: "9px 0px",
              marginBottom: "10px",

              width: "100%",
            }}
          >
            <Typography variant="link" fontSize={14} color="black">
              Login for more personalized experience
            </Typography>
            <div
              style={{
                padding: "0px",
                display: "flex",
                flexDirection: "column",
                gap: 9,
                marginTop: 16,
              }}
            >
              <Button
                sx={{ bgcolor: t.palette.primary.main, borderRadius: "8px" }}
                onClick={() => {
                  router.push("/login");
                }}
              >
                <Typography variant="link" fontSize={14} color="white">
                  Login
                </Typography>
              </Button>
              <Button
                sx={{ bgcolor: "white", borderRadius: "8px" }}
                onClick={() => {
                  router.push("/register");
                }}
              >
                <Typography
                  variant="link"
                  component={"a"}
                  href="/register"
                  fontSize={14}
                  color="primary"
                >
                  Register
                </Typography>
              </Button>
            </div>
          </div>
        )}
        <Box
          sx={{
            padding: "10px 10px 10px 0px",
            display: "flex",
            flexDirection: "column",
            marginBottom: "10px",
          }}
        >
          {optionsList.map((op: any, index: number) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                gap: "12px",
                padding: "20px 0px",
                justifyContent: "flex-start",
                // alignItems:"center"
              }}
            >
              <img src={op.icon} alt={op.name} />
              <Typography variant="link" color="primary">
                {op.name}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box>
          <Typography
            fontSize={16}
            variant="titleSpecial"
            color="priamry"
            sx={{ marginBottom: "16px" }}
          >
            GET THE APP
          </Typography>
          <div style={{ display: "flex", gap: "8px" }}>
            <Button style={{ padding: "0px" }}>
              <img src={"/assets/images/button-appstore.png"} alt="" />
            </Button>
            <Button>
              <img src={"/assets/images/button-playstore.png"} alt="" />
            </Button>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
