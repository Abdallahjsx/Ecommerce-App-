"use client";

import { Box, Typography, CircularProgress } from "@mui/material";
import React from "react";
import { useBrandPolicy } from "@/features/brandProfile/hooks/useBrandPolicy";
import { Gradient_Button } from "@/components/ui/gradientButton";
import { Stack } from "@mui/system";

export default function Policy() {
  const { data, loading, error } = useBrandPolicy(1);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
        <CircularProgress sx={{ color: "#47C0D2" }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ py: 10, textAlign: "center" }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  const htmlContent = data?.returnPolicyAsHtml || "";

  return (
    <Box
      sx={{
        pb: { xs: 4, md: 8 },
        pt: 1,
        px: { xs: 0, md: 0 }, // Parent layout handles px on desktop/mobile now
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        zIndex: 1,
        fontFamily: "'Inter', sans-serif",
        // Styling the injected HTML
        "& h1": {
          fontSize: { xs: "18px", md: "24px" },
          fontWeight: 700,
          color: "#1B2351",
          lineHeight: "1.2",
          mb: { xs: 1.5, md: 3 },
          fontFamily: "'Inter', sans-serif",
        },
        "& p": {
          fontSize: { xs: "12px", md: "15px" },
          lineHeight: "1.6",
          color: "#4B5563",
          fontWeight: 400,
          mb: { xs: 1.5, md: 2 },
          fontFamily: "'Inter', sans-serif",
        },
        "& div": {
          fontSize: { xs: "14px", md: "18px" },
          fontWeight: 700,
          color: "#1B2351",
          mt: { xs: 1.5, md: 2 },
          mb: 0.5,
          lineHeight: "1.3",
          fontFamily: "'Inter', sans-serif",
        },
        "& ul": {
          listStyleType: "disc",
          pl: 3,
          p: 0,
          mt: 1.5,
          display: "flex",
          flexDirection: "column",
          gap: { xs: 1, md: 1.5 },
        },
        "& li": {
          fontSize: { xs: "12px", md: "14px" },
          fontWeight: 400,
          lineHeight: "1.4",
          fontFamily: "'Inter', sans-serif",
          color: "#000000",
          "&::marker": {
            color: "#000000",
          },
        },
        "& span": {
          fontWeight: 700,
          color: "#1B2351",
        },
        "& a": {
          color: "#47C0D2",
          textDecoration: "none",
          fontWeight: 600,
          borderBottom: "1px solid transparent",
          transition: "all 0.2s",
          "&:hover": {
            color: "#1B2351",
            borderBottomColor: "#1B2351",
          },
        },
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <Stack alignSelf="center">
        <Gradient_Button
          variant="primary"
          sx={{
            width: { xs: "159px", md: "411px" },
            height: { xs: "43px", md: "86px" },
            borderRadius: "8px",
            fontSize: { xs: "14px", md: "24px" },
            fontWeight: 700,
            mt: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 0,
            "& .MuiTypography-root": { color: "white" },
          }}
        >
          <Typography
            sx={{
              color: "white !important",
              mt:1.5,
            }}
          >
            Report & Block
          </Typography>
        </Gradient_Button>
      </Stack>
    </Box>
  );
}
