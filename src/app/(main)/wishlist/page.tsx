"use client";

import { Box, Container, Typography, useTheme } from "@mui/material";
import BackgroundShapeImage from "@/components/ui/BackgroundShape/BackgroundShapeImage";
import EmptyWishlist from "@/features/wishlist/components/EmptyWishlist";
import WishlistProductCard from "@/components/ui/cards/WishlistProductCard";
import { useWishlist } from "@/features/wishlist/hooks/useWishlist.hook";
import { useToggleToWishlist } from "@/features/wishlist/hooks/useToggleToWishlist.hook";
import { WishlistItem } from "@/features/wishlist/types";
import Gradient_Button from "@/components/ui/gradientButton/Gradient_Button";
import { useToaster } from "@/providers/ToasterProvider";
import { useEffect } from "react"; // ✅ جديد
import { useAppSelector } from "@/Redux/store";
import { redirect } from "next/navigation";


export default function WishlistPage() {
  const theme = useTheme();
  const { showToast } = useToaster();

  const {
    data: wishlistProducts = [],
    isLoading,
    isError,
    refetch,
  } = useWishlist();

  const { mutate: toggleWishlist, isPending } = useToggleToWishlist();

  // ✅ toast هنا بدل JSX
  useEffect(() => {
    if (isError) {
      showToast("Failed to load wishlist", "error");
    }
  }, [isError, showToast]);

  const token = useAppSelector((state) => state.auth.token);

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

        {/* ✅ Loading */}
        {isLoading && <Typography>Loading...</Typography>}

        {/* ❌ Error */}
        {isError && (
          <Box textAlign="center" mt={5}>
            <Typography mb={2}>Something went wrong</Typography>

            <Gradient_Button onClick={() => refetch()}>
              Retry
            </Gradient_Button>
          </Box>
        )}

        {/* ✅ Data */}
        {!isLoading && !isError && (
          <>
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
                {wishlistProducts.map((product: WishlistItem) => (
                  <WishlistProductCard
                    key={product.id}
                    product={product}
                    onRemove={() => toggleWishlist(Number(product.productId))}
                    disabled={isPending}
                  />
                ))}
              </Box>
            )}
          </>
        )}
      </Container>
    </Box>
  );
}