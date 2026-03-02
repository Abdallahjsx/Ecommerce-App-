"use client";

import Image from "next/image";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface RatingStarsProps {
  rating: number;
}

export default function RatingStars({ rating }: RatingStarsProps) {
  const theme = useTheme();

  const totalStars = 5;
  const safeRating = Math.max(0, Math.min(5, Math.floor(rating)));

  return (
    <Box
      display="flex"
      gap={{ xs: 0.5, sm: 1 }}
      role="img"
      aria-label={`Rating: ${safeRating} out of 5`}
    >
      {Array.from({ length: totalStars }).map((_, index) => {
        const isFilled = index < safeRating;

        return (
          <Box
            key={index}
            sx={{
              position: "relative",
              width: { xs: 18, sm: 22, md: 27 },
              height: { xs: 18, sm: 22, md: 27 },
            }}
          >
            <Image
              src="/assets/icons/star-rate-icon.svg"
              alt=""
              fill
              style={{
                objectFit: "contain",
                filter: isFilled
                  ? "none"
                  : `brightness(0) saturate(100%) opacity(0.3)`,
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
}