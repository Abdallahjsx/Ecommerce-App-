"use client";

import { Box, Typography } from "@mui/material";

export default function GuaranteeCard() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "456px",
        display: "flex",
        gap: "16px",
        padding: "20px",
        borderRadius: "12px",
        border: "1px solid #E5E5E5",
        backgroundColor: "#0068741A",
        alignItems: { xs: "flex-start", md: "center" },
      }}
    >
      <Box
        sx={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          backgroundColor: "#006874",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Box
          component="img"
          src="/assets/icons/Background.svg"
          alt="icon"
          sx={{
            width: "24px",
            height: "24px",
          }}
        />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <Typography
          sx={{
            fontWeight: 700,
            color: "#006874",
            fontSize: "14px",
          }}
        >
          Editorial Guarantee
        </Typography>

        <Typography
          sx={{
            fontSize: "12px",
            color: "#46464F",
          }}
        >
          30-day hassle-free returns on all curated collections.
        </Typography>
      </Box>
    </Box>
  );
}