"use client";

import { Box, Container, Typography, useTheme } from "@mui/material";
import BackgroundShapeImage from "@/components/ui/BackgroundShape/BackgroundShapeImage";
import CartProductCard from "@/features/cart/components/CartProductCard";
import EmptyCart from "@/features/cart/components/EmptyCart";
import Gradient_Button from "@/components/ui/gradientButton/Gradient_Button";
import { useState } from "react";

type CartProduct = {
  id: number;
  name: string;
  category: string;
  size: string;
  color: string;
  price: number;
  image: string;
  quantity: number;
};

export default function CartPage() {
  const theme = useTheme();

  const [cartItems, setCartItems] = useState<CartProduct[]>([
    {
      id: 1,
      name: "Ultraboost Light Running Shoes",
      category: "Running Shoes",
      size: "L",
      color: "Gray",
      price: 200,
      image: "/assets/images/Light Running Shoes.png",
      quantity: 1,
    },
    {
      id: 2,
      name: "Ultraboost Light Running Shoes",
      category: "Running Shoes",
      size: "L",
      color: "Gray",
      price: 200,
      image: "/assets/images/Light Running Shoes.png",
      quantity: 1,
    },
    {
      id: 3,
      name: "Ultraboost Light Running Shoes",
      category: "Running Shoes",
      size: "L",
      color: "Gray",
      price: 200,
      image: "/assets/images/Light Running Shoes.png",
      quantity: 1,
    },
    {
      id: 4,
      name: "Ultraboost Light Running Shoes",
      category: "Running Shoes",
      size: "L",
      color: "Gray",
      price: 200,
      image: "/assets/images/Light Running Shoes.png",
      quantity: 1,
    },
  ]);

  const handleDelete = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleIncrease = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecrease = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity > 1 ? item.quantity - 1 : 1,
            }
          : item
      )
    );
  };

  const total = cartItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        backgroundColor: theme.tokens.backgroundColors.main,
        overflow: "hidden",
      }}
    >
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
        <Typography
          sx={{
            width: "136px",
            height: "77px",
            fontFamily: "Inter",
            fontWeight: 600,
            fontSize: "64px",
            lineHeight: "100%",
            marginTop: "22px",
            marginLeft: { xs: 0, md: "39px" },
            marginBottom: "30px",
            background: theme.palette.gradients.primary,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Cart
        </Typography>

        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", lg: "row" },
              alignItems: "flex-start",
              gap: 4,
            }}
          >
            {/* Products */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              {cartItems.map((item) => (
                <CartProductCard
                  key={item.id}
                  product={item}
                  onDelete={() => handleDelete(item.id)}
                  onIncrease={() => handleIncrease(item.id)}
                  onDecrease={() => handleDecrease(item.id)}
                />
              ))}
            </Box>

            {/* Summary */}
            <Box
              sx={{
                mt: { xs: 4, lg: 38 },
                display: "flex",
                justifyContent: { xs: "center", lg: "flex-end" },
                ml: { xs: 0, lg: 15 },
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", sm: "457px" },
                  borderRadius: theme.tokens.buttons.borderRadius,
                  pr: "20px",
                  pl: "20px",
                  pt: { xs: 3, lg: 0 },
                  pb: { xs: 3, lg: 0 },
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 2,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "24px",
                    letterSpacing: "0.2px",
                    color: theme.tokens.mainColors.primary,
                    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <Box component="span" sx={{ fontWeight: 700, mr: "8px" }}>
                    Total
                  </Box>
                  <Box component="span" sx={{ fontWeight: 600 }}>
                    {total} EGP
                  </Box>
                </Typography>

                <Gradient_Button
                  variant="primary"
                  sx={{
                    width: { xs: "150px", sm: "179px" },
                    height: { xs: "44px", sm: "48px" },
                    borderRadius: theme.tokens.buttons.borderRadius,
                    boxShadow: theme.tokens.buttons.boxShadow,
                  }}
                >
                  checkout
                </Gradient_Button>
              </Box>
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
}