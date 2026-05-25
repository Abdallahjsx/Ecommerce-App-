"use client";
import { useState, useEffect } from "react";
import { useToaster } from "@/providers/ToasterProvider";
import { Box, Container, Typography, useTheme } from "@mui/material";
import BackgroundShapeImage from "@/components/ui/BackgroundShape/BackgroundShapeImage";
import CartProductCard from "@/components/ui/cards/CartProductCard";
import EmptyCart from "@/features/cart/components/EmptyCart";
import Gradient_Button from "@/components/ui/gradientButton/Gradient_Button";
import ConfirmationModal from "@/components/ui/dialog/confirmationModal";
import { useAppSelector } from "@/Redux/store";
import { useRouter } from "next/navigation";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCart, updateCart, clearCart } from "@/features/cart/services";

export default function CartPage() {
  const theme = useTheme();
  const { showToast } = useToaster();
  const queryClient = useQueryClient();
  const router = useRouter();
  const token = useAppSelector((state) => state.authAlluvo.token);


  const [openClearModal, setOpenClearModal] = useState(false);

  // 🔹 GET Cart
  const { data, isLoading, isError } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  // ✅ mapping (رجعنا data.data + fallback)
  const cartItems =
    (data?.data?.cartItems ?? []).map((item: any) => ({
      productId: item.productId,
      name: item.productName,
      category: "",
      size: item.size,
      color: item.color,
      price: item.productPrice,
      image: item.productMediaUrls[0],
      quantity: item.quantity,
    }));

  // 🔥 UPDATE Cart (Optimistic)
  const updateMutation = useMutation({
    mutationFn: updateCart,

    onMutate: async (newData: any) => {
      await queryClient.cancelQueries({ queryKey: ["cart"] });

      const previousCart = queryClient.getQueryData(["cart"]);

      queryClient.setQueryData(["cart"], (old: any) => {
        if (!old) return old;

        const updatedItems = (old.data?.cartItems ?? [])
          .map((item: any) => {
            const updated = newData.find(
              (x: any) =>
                x.productId === item.productId &&
                x.color === item.color &&
                x.size === item.size
            );

            if (!updated) return item;

            return {
              ...item,
              quantity: updated.quantity,
            };
          })
          .filter((item: any) => item.quantity > 0);

        return {
          ...old,
          data: {
            ...old.data,
            cartItems: updatedItems,
          },
        };
      });

      return { previousCart };
    },

    onError: (_err, _newData, context) => {
      if (context?.previousCart) {
        queryClient.setQueryData(["cart"], context.previousCart);
      }
      showToast("Something went wrong", "error");
    },

    onSuccess: () => {
      showToast("Cart updated", "success");
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  // 🔥 CLEAR Cart (Optimistic)
  const clearCartMutation = useMutation({
    mutationFn: clearCart,

    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ["cart"] });

      const previousCart = queryClient.getQueryData(["cart"]);

      queryClient.setQueryData(["cart"], (old: any) => {
        if (!old) return old;

        return {
          ...old,
          data: {
            ...old.data,
            cartItems: [],
          },
        };
      });

      return { previousCart };
    },

    onError: (_err, _data, context) => {
      if (context?.previousCart) {
        queryClient.setQueryData(["cart"], context.previousCart);
      }
      showToast("Failed to clear cart", "error");
    },

    onSuccess: () => {
      showToast("Cart cleared successfully", "success");
      setOpenClearModal(false);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  // ➕ Increase
  const handleIncrease = (item: any) => {
    if (updateMutation.isPending) return;

    updateMutation.mutate([
      {
        productId: item.productId,
        quantity: item.quantity + 1,
        change: 0,
        color: item.color,
        size: item.size,
      },
    ]);
  };

  // ➖ Decrease
  const handleDecrease = (item: any) => {
    if (item.quantity === 1 || updateMutation.isPending) return;

    updateMutation.mutate([
      {
        productId: item.productId,
        quantity: item.quantity - 1,
        change: 0,
        color: item.color,
        size: item.size,
      },
    ]);
  };

  // ❌ Remove
  const handleDelete = (item: any) => {
    if (updateMutation.isPending) return;

    updateMutation.mutate([
      {
        productId: item.productId,
        quantity: 0,
        change: 0,
        color: item.color,
        size: item.size,
      },
    ]);
  };

  // ✅ total
  const total = cartItems.reduce(
    (acc: number, item: any) => acc + item.price * item.quantity,
    0
  );


  // ✅ loading
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // ✅ error يظهر بس لو فعلاً مفيش data
  if (isError && !data?.data) {
    return <div>Failed to load cart</div>;
  }

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
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              {cartItems.map((item: any) => (
                <CartProductCard
                  key={item.productId}
                  product={item}
                  onDelete={() => handleDelete(item)}
                  onIncrease={() => handleIncrease(item)}
                  onDecrease={() => handleDecrease(item)}
                  disabled={
                    updateMutation.isPending || clearCartMutation.isPending
                  }
                />
              ))}
            </Box>

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
                  pl: "30px",
                  pt: { xs: 3, lg: 0 },
                  pb: { xs: 3, lg: 0 },
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  whiteSpace: "nowrap",
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
                  <Box component="span" sx={{ fontWeight: 700, mr: "14px" }}>
                    Total
                  </Box>
                  <Box component="span" sx={{ fontWeight: 600 }}>
                    {total} EGP
                  </Box>
                </Typography>

                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  <Box sx={{ width: "150px", height: "48px" }}>
                    <Gradient_Button sx={{ width: "100%", height: "100%" }} onClick={() => { router.push("/checkout") }}>
                      checkout
                    </Gradient_Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Container>

      <ConfirmationModal
        open={openClearModal}
        onClose={() => setOpenClearModal(false)}
        onConfirm={() => clearCartMutation.mutate()}
        isPending={clearCartMutation.isPending}
        message="Clear Cart"
        subMessage="You are about to remove all items from your cart."
        actionLabel="Clear"
        isPendingLabel="Clearing Cart..."
      />
    </Box>
  );
}
