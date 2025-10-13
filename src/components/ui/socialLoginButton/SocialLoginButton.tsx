"use client";
import React from "react";
import { useTheme } from "@mui/material";
import { StaticImageData } from "next/image";
import { Button, Box, Typography } from "@mui/material";

export default function SocialLoginButton({
  social,
  label,
}: {
  social: StaticImageData;
  label: string;
}) {
  const t = useTheme();
  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: "white",
        border: `1px soldi ${t.tokens.separatingColors.border}`,
        borderRadius: "12px",
        boxShadow: "0px 4px 4px 0px #00000040",
        mb:"10px"
      }}
    >
      <Box component={"img"} src={social.src}></Box>
      <Typography
        sx={{ marginLeft: "12px", textTransform: "none" }}
        variant="lato"
        color={"black"}
      >
        {label}
      </Typography>
    </Button>
  );
}
