"use client";

import { Box, Typography } from "@mui/material";

export default function PaymentMethods() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "664px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Manrope",
          fontWeight: 800,
          fontSize: { xs: "22px", md: "30px" },
          color: "#040C3C",
        }}
      >
        Payment methods
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: "12px",
          border: "1px solid #E0E0E0",
          padding: "16px",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <input type="radio" name="payment" />
          <Typography>Credit / Debit Card</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: "12px",
          border: "1px solid #E0E0E0",
          padding: "16px",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <input type="radio" name="payment" />
          <Typography>Cash on Delivery</Typography>
        </Box>

        <Box component="img" src="/assets/icons/Cash-icon.svg" sx={{ width: "20px" }} />
      </Box>
    </Box>
  );
}