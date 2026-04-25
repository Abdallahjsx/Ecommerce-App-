"use client";

import { Box, Typography } from "@mui/material";

export default function AddressCard() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "auto", md: "196px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: { xs: "16px", md: "24px" },
        borderRadius: "12px",
        border: "2px solid #006874",
        boxSizing: "border-box",
        gap: "16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
          }}
        >
          <Box
            sx={{
              width: "fit-content",
              backgroundColor: "#78EAFD",
              padding: "4px 12px",
              borderRadius: "9999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 600,
                color: "#040C3C",
              }}
            >
              DEFAULT
            </Typography>
          </Box>

          <Typography
            sx={{
              fontFamily: "Liberation Sans",
              fontWeight: 700,
              fontSize: { xs: "16px", md: "18px" },
              lineHeight: "28px",
              color: "#1C1C18",
            }}
          >
            Home
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xs: "18px", md: "20px" },
            height: { xs: "18px", md: "20px" },
            backgroundColor: "#006874",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path
              d="M20 6L9 17L4 12"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Liberation Sans",
            fontWeight: 400,
            fontSize: { xs: "13px", md: "14px" },
            lineHeight: "22px",
            color: "#46464F",
          }}
        >
          24th Avenue, Building 12
        </Typography>

        <Typography
          sx={{
            fontFamily: "Liberation Sans",
            fontWeight: 400,
            fontSize: { xs: "13px", md: "14px" },
            lineHeight: "22px",
            color: "#46464F",
          }}
        >
          Maadi, Cairo, Egypt
        </Typography>

        <Typography
          sx={{
            fontFamily: "Liberation Sans",
            fontWeight: 400,
            fontSize: { xs: "13px", md: "14px" },
            lineHeight: "20px",
            color: "#46464F",
          }}
        >
          +20 100 123 4567
        </Typography>
      </Box>
    </Box>
  );
}