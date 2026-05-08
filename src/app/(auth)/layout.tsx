"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";
import Shape from "../../../public/assets/images/background-shape.png";
import AlluvoLogo from "@/components/ui/AlluvoLogo/AlluvoLogo";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const t = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: t.palette.gradients.primary,
        overflowX: "hidden",
      }}
    >
      <Box
        component={"img"}
        src={Shape.src}
        sx={{
          display: ["none", "none", "block"],
          width: "100%",
          height: "100%",
          position: "absolute",
          right: "0px",
          overflow: "hidden",
          pointerEvents: "none",

        }}
      ></Box>
      <Box
        sx={{
          zIndex: 1,
          minWidth: ["100vw", "100vw", "40vw"],
          backgroundColor: t.tokens.backgroundColors.main,
          margin: ["0px", "0px", "35px"],
          borderRadius: ["0px", "0px", "13px"],
          display: "flex",
          justifyContent: "center",
          overflow: "auto",
          minHeight: ["100vh", "100vh", "auto"],

        }}
      >
        <Box sx={{
          width: "100%", display: "flex",
          flexDirection: "column",
          gap: ["70px", "20px", "0px"],
        }}>
          <AlluvoLogo />
          {children}
        </Box>
      </Box>
    </Box>
  );
}
