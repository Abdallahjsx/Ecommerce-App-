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
        minHeight: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: t.palette.gradients.primary,
        overflow: "hidden",
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
          minWidth: ["100vw", "100vw", "42vw"],
          minHeight: ["100vh", "100vh", "58vh"],
          backgroundColor: t.tokens.backgroundColors.main,
          margin: ["0px", "0px", "35px"],
          borderRadius: ["0px", "13px", "13px"],
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div style={{ width: "100%" }}>
          <AlluvoLogo />
          {children}
        </div>
      </Box>
    </Box>
  );
}
