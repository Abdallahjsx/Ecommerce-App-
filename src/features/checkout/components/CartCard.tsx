"use client";

import { Box, Typography } from "@mui/material";

export default function CartCard() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        minHeight: "197px",
        backgroundColor: "#d5d4d152",
        border: "1px solid #c7c5d0a9",
        borderRadius: "12px",
        padding: "24px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
   
      <Typography
        sx={{
          fontFamily: "Liberation Sans",
          fontWeight: 700,
          fontSize: "10px",
          lineHeight: "15px",
          letterSpacing: "1px",
          textTransform: "uppercase",
          color: "#46464F",
        }}
      >
        OFFICE
      </Typography>

      
      <Box
        sx={{
          width: "274px",
          height: "40.6px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Liberation Sans",
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "28px",
            color: "#1C1C18",
          }}
        >
          Workspace
        </Typography>
      </Box>

      
      <Box
        sx={{
          width: "274px",
          height: "46px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Liberation Sans",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "22.75px",
            color: "#46464F",
          }}
        >
          Smart Village, Building B4
        </Typography>

        <Typography
          sx={{
            fontFamily: "Liberation Sans",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "22.75px",
            color: "#46464F",
          }}
        >
          Giza, Egypt
        </Typography>
      </Box>

      
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
      
      </Box>
    </Box>
  );
}