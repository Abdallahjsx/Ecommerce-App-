import { useEffect, useState } from "react";
import { Box, Typography, useTheme, Stack } from "@mui/material";
import Image from "next/image";
import QuantityCounter from "./QuantityCounter";
import ReviewsSection from "./ReviewsSection";
import { ProductDetails } from "../types";
import { ProductColorSize, AvailableSize } from "@/types";
import Gradient_Button from "@/components/ui/gradientButton/Gradient_Button";

export default function ProductInfoSection({ product }: { product: ProductDetails }) {
  const theme = useTheme();

  const [selectedColor, setSelectedColor] = useState<ProductColorSize | null>(null);
  const [selectedSize, setSelectedSize] = useState<AvailableSize | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product.availableColors && product.availableColors.length > 0) {
      const firstColor = product.availableColors[0];
      setSelectedColor(firstColor);
      if (firstColor.availableSizes && firstColor.availableSizes.length > 0) {
        setSelectedSize(firstColor.availableSizes[0]);
      } else {
        setSelectedSize(null);
      }
      setQuantity(1);
    }
  }, [product]);

  const handleColorClick = (color: ProductColorSize) => {
    setSelectedColor(color);
    if (color.availableSizes && color.availableSizes.length > 0) {
      setSelectedSize(color.availableSizes[0]);
    } else {
      setSelectedSize(null);
    }
    setQuantity(1);
  };

  const handleSizeClick = (size: AvailableSize) => {
    setSelectedSize(size);
    setQuantity(1);
  };

  // const handleAdd = () => {
  //   if (selectedColor && selectedSize && quantity > 0) {
  //     // Logic for adding to cart
  //     alert(`Added to Cart: ${product.name} - ${selectedColor.name}, Size: ${selectedSize.size}, Quantity: ${quantity}`);
  //   }
  // };

  const colorBoxStyle = (isSelected: boolean) => ({
    width: "31px",
    height: "29px",
    boxShadow: isSelected
      ? `0px 0px 0px 2px ${theme.tokens.backgroundColors.main}, 0px 0px 0px 4px ${theme.palette.primary.main}`
      : "0px 4px 10px rgba(0,0,0,0.25)",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    }
  });

  const sizeBoxStyle = (isSelected: boolean) => ({
    width: { xs: "40px", md: "31px" },
    height: { xs: "36px", md: "29px" },
    borderRadius: "20px",
    backgroundColor: isSelected ? theme.palette.primary.main : theme.tokens.mainColors.white,
    color: isSelected ? theme.tokens.mainColors.white : theme.tokens.typographyColors.body,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
    cursor: "pointer",
    transition: "all 0.2s ease",
    border: `1px solid ${isSelected ? theme.palette.primary.main : "transparent"}`,
    "&:hover": {
      borderColor: theme.palette.primary.main,
    }
  });

  const textStyle = (isSelected: boolean) => ({
    fontFamily: "var(--font-inter)",
    fontWeight: isSelected ? 600 : 500,
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0.1px",
  });

  return (
    <Box sx={{ width: "100%", maxWidth: { xs: "100%", md: "616px" } }}>
      {/* Product Title and Favorite */}
      <Box sx={{ width: "100%", display: "flex", alignItems: "center", gap: "21px" }}>
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
          {product.name}
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
        {product.price}
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
          color: {selectedColor?.name || ""}
        </Typography>

        <Box
          sx={{
            gap: "11px",
            display: "flex",
            mt: "4px",
            flexWrap: "wrap",
            pb: 1, // Add some padding for the selection rings
          }}
        >
          {product.availableColors.map((color) => (
            <Box
              key={color.id}
              onClick={() => handleColorClick(color)}
              sx={{
                ...colorBoxStyle(selectedColor?.id === color.id),
                backgroundColor: color.hexCode,
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
          {(selectedColor?.availableSizes || []).map((size) => (
            <Box
              key={size.id}
              sx={sizeBoxStyle(selectedSize?.id === size.id)}
              onClick={() => handleSizeClick(size)}
            >
              <Typography sx={textStyle(selectedSize?.id === size.id)}>{size.size}</Typography>
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
          Quantity {selectedSize ? `(${selectedSize.quantity} available)` : ""}
        </Typography>
        {/* <QuantityCounter
          max={selectedSize?.quantity || 0}
          value={quantity}
          onChange={setQuantity}
        /> */}
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
          {product.description}
        </Typography>
        <ReviewsSection review={product.reviewsSummary} />
      </Box>
    </Box>
  )
}