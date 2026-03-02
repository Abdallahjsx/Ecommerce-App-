"use client";

import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface YouMightAlsoLikeCardProps {
  image: string;
  title: string;
  price: string;
}

export default function YouMightAlsoLikeCard({
  image,
  title,
  price,
}: YouMightAlsoLikeCardProps) {
    const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%", 
        maxWidth: 141,
        backgroundColor: theme.tokens.mainColors.white,
        border: "1px solid #EBF0FF",
        borderRadius: theme.tokens.buttons.borderRadius,
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        alignItems: "center",
      }}
    >
      {/* Image */}
      <Box
        sx={{
          position: "relative",
          width: { xs: 90, sm: 109 },
          height: { xs: 90, sm: 109 },
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>

      {/* Title */}
      <Typography
        sx={{
          width: "100%",
          maxWidth: 109,
          fontFamily: "Inter",
          fontWeight: 700,
          fontSize: "12px",
          lineHeight: "150%",
          letterSpacing: "0.5px",
          color: theme.palette.primary.main,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {title}
      </Typography>

      {/* Price */}
      <Typography
        sx={{
          width: "100%",
          maxWidth: 103,
          fontFamily: "Inter",
          fontWeight: 700,
          fontSize: "12px",
          lineHeight: "180%",
          letterSpacing: "0.5px",
          color: "#4B5563",
          whiteSpace: "nowrap",      
          overflow: "hidden",        
          textOverflow: "ellipsis",
        }}
      >
        {price}
      </Typography>
    </Box>
  );
}