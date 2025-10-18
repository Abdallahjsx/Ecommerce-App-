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
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: t.palette.gradients.primary,
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
        className="layout-register-box"
        sx={{
          zIndex: 1,
          minWidth: ["100%", "100%", "45%"],
          minHeight: ["100%", "100%", "62%"],
          backgroundColor: t.tokens.backgroundColors.main,
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
