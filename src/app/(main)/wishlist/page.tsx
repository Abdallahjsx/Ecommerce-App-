"use client";

import { Box, Container, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import BackgroundShapeImage from "@/components/ui/BackgroundShape/BackgroundShapeImage";
import EmptyWishlist from "@/features/wishlist/components/EmptyWishlist";
import WishlistProductCard from "@/components/ui/cards/WishlistProductCard";

export default function WishlistPage() {
  const theme = useTheme();

  // ✅ بقت State بدل ما كانت ثابتة
  const [wishlistProducts, setWishlistProducts] = useState([
    {
      id: 1,
      name: "Ultraboost Light Running Shoes",
      category: "Running Shoes",
      image: "/assets/images/Light Running Shoes.png",
    },
    {
      id: 2,
      name: "Ultraboost Light Running Shoes",
      category: "Running Shoes",
      image: "/assets/images/Light Running Shoes.png",
    },
    {
      id: 3,
      name: "Ultraboost Light Running Shoes",
      category: "Running Shoes",
      image: "/assets/images/Light Running Shoes.png",
    },
    {
      id: 4,
      name: "Ultraboost Light Running Shoes",
      category: "Running Shoes",
      image: "/assets/images/Light Running Shoes.png",
    },
    {
      id: 5,
      name: "Ultraboost Light Running Shoes",
      category: "Running Shoes",
      image: "/assets/images/Light Running Shoes.png",
    },
    {
      id: 6,
      name: "Ultraboost Light Running Shoes",
      category: "Running Shoes",
      image: "/assets/images/Light Running Shoes.png",
    },
    {
      id: 7,
      name: "Ultraboost Light Running Shoes",
      category: "Running Shoes",
      image: "/assets/images/Light Running Shoes.png",
    },
  ]);

  // ✅ دي اللي بتشيل المنتج لما نضغط الهارت
  const handleRemove = (id: number) => {
    setWishlistProducts((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        backgroundColor: theme.tokens.backgroundColors.main,
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <BackgroundShapeImage />

      <Container
        maxWidth="xl"
        sx={{
          minHeight: "100vh",
          padding: { xs: 2, md: 4 },
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            width: "249px",
            height: "77px",
            fontFamily: "Inter",
            fontWeight: 600,
            fontSize: "64px",
            lineHeight: "100%",
            marginTop: "22px",
            marginLeft: { xs: 0, md: "39px" },
            marginBottom: "45px",
            background: theme.palette.gradients.primary,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Wishlist
        </Typography>

        {/* Condition */}
        {wishlistProducts.length === 0 ? (
          <EmptyWishlist />
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {wishlistProducts.map((product) => (
              <WishlistProductCard
                key={product.id}
                product={product}
                onRemove={handleRemove}   // 👈 ده المهم
              />
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}