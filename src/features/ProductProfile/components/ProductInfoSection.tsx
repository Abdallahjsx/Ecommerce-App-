"use client";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import QuantityCounter from "./QuantityCounter"; 
import ReviewsSection from "./ReviewsSection";

export default function ProductInfoSection() {
  const theme = useTheme();
  const colors = ["#FFFFFF", "#678E28", "#F40000", "#000000"];
  const colorBoxStyle = {
    width: "31px",
    height: "29px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.25)",
    borderRadius: "50%",
    cursor: "pointer",
  };

  const sizes = ["XL", "M", "L", "XXL"];
  const sizeBoxStyle = {
    width: { xs: "40px", md: "31px" },
    height: { xs: "36px", md: "29px" },
    borderRadius: "50%",
    backgroundColor: theme.tokens.mainColors.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
    cursor: "pointer",
  };
  const textStyle = {
    fontFamily: "var(--font-inter)",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0.1px",
    color: theme.tokens.typographyColors.body,
  };

  return (
    <Box sx={{ width: "100%", maxWidth: { xs: "100%", md: "616px" } }}>
      {/* Product Title and Favorite */}
      <Box sx={{width: "100%", display: "flex", alignItems: "center", gap: "21px" }}>
        <Typography
          sx={{
            fontFamily: "var(--font-inter)",
            fontWeight: 700,
            fontSize: { xs: "18px", md: "24px" },
            lineHeight: "140%",
            letterSpacing: "0.2px",
            color: theme.palette.primary.main,
          }}
        >
          Nike Air Zoom Pegasus 36 Miami
        </Typography>

        <Box sx={{ marginTop: { xs: "0px", md: "-5px" } }}>
          <Image
            src="/assets/icons/Add-Favorite-Icon.svg"
            alt="favorite"
            width={24}
            height={24}
            style={{ objectFit: "contain", cursor: "pointer" }}
            onClick={() => {
              alert("Added to Favorites!");
            }}
          />
        </Box>
      </Box>

      {/* Price */}
      <Typography
        sx={{
          fontFamily: "var(--font-inter)",
          fontWeight: 500,
          fontSize: { xs: "20px", md: "24px" },
          color: "#4B5563",
        }}
      >
        LE 2500.00 EGP
      </Typography>

      {/* Color Selector */}
      <Box
        sx={{
          width: { xs: "100%", md: "161px" },
          gap: "8px",
          display: "flex",
          flexDirection: "column",
          mt: "10px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "var(--font-inter)",
            fontWeight: 500,
            fontSize: { xs: "16px", md: "18px" },
            lineHeight: "20px",
            letterSpacing: "0.1px",
            color: theme.palette.primary.main,
          }}
        >
          color:
        </Typography>

        <Box
          sx={{
            gap: "11px",
            display: "flex",
            mt: "4px",
            flexWrap: "wrap",
          }}
        >
          {colors.map((color, index) => (
            <Box
              key={index}
              sx={{
                ...colorBoxStyle,
                backgroundColor: color,
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Size Selector */}
      <Box
        sx={{
          width: { xs: "100%", md: "160px" },
          gap: "8px",
          display: "flex",
          borderRadius: "5px",
          flexDirection: "column",
          mt: "20px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "var(--font-inter)",
            fontWeight: 500,
            fontSize: { xs: "16px", md: "18px" },
            lineHeight: "20px",
            letterSpacing: "0.1px",
            color: theme.palette.primary.main,
          }}
        >
          Size:
        </Typography>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            gap: "8px", 
            mt: "4px",
            flexWrap: "wrap",
          }}
        >
          {sizes.map((size, index) => (
            <Box key={index} sx={sizeBoxStyle}>
              <Typography sx={textStyle}>{size}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Quantity Counter */}
      <Box
        sx={{
          mt: "20px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "var(--font-inter)",
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "140%",
            letterSpacing: "0.2px",
            color: theme.palette.primary.main,
          }}
        >
          Quantity
        </Typography>
        <QuantityCounter />
      </Box>

      {/* Description Section */}
      <Box
        sx={{
          width: { xs: "100%", md: "616px" },
          mt: "20px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "var(--font-inter)",
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "140%",
            letterSpacing: "0.2px",
            color: "#223263",
          }}
        >
          Description:
        </Typography>

        <Typography
          sx={{
            fontFamily: "var(--font-inter)",
            fontWeight: 400,
            fontSize: { xs: "14px", md: "16px" },
            lineHeight: "140%",
            letterSpacing: "0.2px",
            color: "#8C8C8C",
          }}
        >
          Nike Air Zoom Pegasus 36 Miami delivers lightweight comfort and responsive cushioning. With breathable mesh and a bold Miami-inspired design, it’s perfect for running or everyday wear.
        </Typography>
        <ReviewsSection />
      </Box>
    </Box>
  );
}