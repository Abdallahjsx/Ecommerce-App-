"use client";

import { Box, Typography, Stack } from "@mui/material";
import { useRouter } from "next/navigation";

interface FavoriteCardProps {
  id: string;
  name: string;
  price: number;
  brand: string;
  imageUrl: string;
}

export default function FavoriteCard({
  id,
  name,
  price,
  brand,
  imageUrl,
}: FavoriteCardProps) {
  const router = useRouter();

  return (
    <Box
      onClick={() => router.push(`/products/${id}`)}
      sx={{
        cursor: "pointer",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
        "&:hover": {
          "& .card-image": {
            transform: "scale(1.01)",
          },
        },
      }}
    >
      {/* Image */}
      <Box
        className="card-image"
        sx={{
          width: "100%",
          borderRadius: "32px",
          overflow: "hidden",
          backgroundColor: "#F4F4F4",
          aspectRatio: "3/4",
          mb: 2,
          transition: "all 0.3s ease",
        }}
      >
        <img
          src={imageUrl}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Text Content - Row-based as per latest image */}
      <Box sx={{ mt: 2.5, px: 0.5 }}>
        {/* Row 1: Name and Price */}
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: "18px",
              color: "#040C3C",
              fontFamily: "var(--font-manrope)",
              lineHeight: 1.2,
              flex: 1,
              pr: 2
            }}
          >
            {name}
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 800,
              color: "#006874",
              fontFamily: "var(--font-manrope)",
              whiteSpace: "nowrap"
            }}
          >
            ${price.toFixed(2)}
          </Typography>
        </Stack>

        {/* Row 2: Brand */}
        <Typography
          sx={{
            fontSize: "14px",
            color: "rgba(4, 12, 60, 0.5)",
            fontWeight: 500,
            mt: 0.5
          }}
        >
          {brand}
        </Typography>
      </Box>
    </Box>
  );
}
