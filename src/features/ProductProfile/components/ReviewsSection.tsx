"use client";
import { Box, Typography, useTheme } from "@mui/material";
import RatingStars from "@/components/ui/ratingStars/RatingStars";

export default function ReviewsSection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "656px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        opacity: 1,
        mt: "15px",
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          width: { xs: "100%", md: "656px" },
          fontFamily: "var(--font-inter)",
          fontWeight: 500,
          fontSize: { xs: "16px", md: "18px" },
          lineHeight: "140%",
          letterSpacing: "0.2px",
          color: "#223263",
          display: "flex",
          alignItems: "center",
        }}
      >
        Product Reviews
      </Typography>

      {/* Box تحت العنوان */}
      <Box
        sx={{
          width: { xs: "100%", md: "314px" },
          display: "flex",
          justifyContent: "space-between",
          opacity: 1,
          mt: "8px",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          gap: { xs: "6px", md: 0 },
        }}
      >
        {/* Rating Star component */}
        <RatingStars rating={4} />
        
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            opacity: 1,
          }}
        >
          {/* الرقم */}
          <Typography
            sx={{
              fontFamily: "var(--font-poppins)",
              fontWeight: 700,
              fontSize: { xs: "15px", md: "17px" },
              lineHeight: "150%",
              letterSpacing: "0.5px",
              color: "#9098B1",
            }}
          >
            4.5
          </Typography>

          {/* عدد الريفيوز */}
          <Typography
            sx={{
              fontFamily: "var(--font-poppins)",
              fontWeight: 400,
              fontSize: { xs: "14px", md: "15px" },
              lineHeight: "150%",
              letterSpacing: "0.5px",
              color: "#9098B1",
              whiteSpace: "nowrap",
            }}
          >
            (5 Review)
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}