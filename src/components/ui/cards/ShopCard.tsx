"use client";

import { Gradient_Button } from "@/components/ui/gradientButton";
import { Button, Typography, IconButton, Rating } from "@mui/material";
import { Box, Stack } from "@mui/material";
import { useToggleToWishlist } from "@/features/wishlist/hooks/useToggleToWishlist.hook";
import { useWishlist } from "@/features/wishlist/hooks/useWishlist.hook";
import {
  OutlineHeartIcon,
  FilledHeartIcon,
  StarIcon,
  OfferIcon,
} from "../../../features/brandProfile/Icons";
import { useRouter } from "next/navigation";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  reviewsCount?: number;
  imageUrl: string;
  status?: "In Stock" | "Out of Stock";
  discount?: string;
  hasDiscount?: boolean;
  isSale?: boolean;
  isInWishlist?: boolean;
};

export default function ShopCard({
  name,
  category,
  price,
  originalPrice,
  rating = 5.0,
  reviewsCount = 0,
  imageUrl,
  status = "In Stock",
  discount,
  hasDiscount = false,
  isSale = false,
  isInWishlist,
  id,
  onAddToCart,
}: Product & { onAddToCart: () => void }) {
  const router = useRouter();

  // ✅ mutation
  const { mutate: toggleToWishlist, isPending } = useToggleToWishlist();

  // ✅ wishlist data
  const { data: wishlist = [] } = useWishlist();

  // ✅ liked state from cache
  const isLiked = wishlist.some((item) => item.productId === Number(id));

  return (
    <Box
      sx={{
        backgroundColor: "#E7E9E5",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.05)",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        position: "relative",
        border: "1px solid rgba(0, 0, 0, 0.03)",
        cursor: "pointer",
      }}
      onClick={() => {
        router.push(`/products/${id}`);
      }}
    >
      {/* Badge */}
      {(hasDiscount || isSale) && (
        <Box
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isSale && !discount ? (
            <Box
              sx={{
                backgroundColor: "#47C0D2",
                color: "white",
                padding: "4px 12px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: 600,
                boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                mr: 2.5,
                mt: 2.5,
              }}
            >
              Sale
            </Box>
          ) : (
            <Box sx={{ position: "relative" }}>
              <OfferIcon
                sx={{ width: 65, height: 60, transform: "scaleX(-1)" }}
              />
              <Typography
                sx={{
                  position: "absolute",
                  top: "45%",
                  left: "50%",
                  transform: "translate(-50%, -50%) rotate(31deg)",
                  color: "white",
                  fontSize: "12px",
                  fontWeight: 700,
                  pointerEvents: "none",
                }}
              >
                {discount}
              </Typography>
            </Box>
          )}
        </Box>
      )}

      {/* Image */}
      <Box
        sx={{
          width: "100%",
          pt: "85%",
          position: "relative",
          backgroundColor: "#E7E9E5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={imageUrl}
          alt={name}
          style={{
            position: "absolute",
            top: "5%",
            left: "5%",
            width: "90%",
            height: "90%",
            objectFit: "contain",
          }}
        />
      </Box>

      {/* Content */}
      <Box sx={{ p: { xs: 1.5, md: 2 } }}>
        <Typography
          sx={{
            color: "#1B2351",
            fontWeight: 700,
            fontSize: { xs: "13px", md: "15px" },
            mb: 0.5,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {name}
        </Typography>

        <Typography
          sx={{
            color: "rgba(27, 35, 81, 0.6)",
            fontSize: { xs: "11px", md: "13px" },
            fontStyle: "italic",
            mb: { xs: 1, md: 1.5 },
          }}
        >
          {category}
        </Typography>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <StarIcon
              sx={{ fontSize: { xs: "12px", md: "14px" }, color: "#47C0D2" }}
            />
            <Typography sx={{ fontSize: { xs: "10px", md: "12px" } }}>
              {rating.toFixed(1)} ({reviewsCount})
            </Typography>
          </Stack>

          <Typography
            sx={{
              fontSize: { xs: "9px", md: "11px" },
              fontWeight: 700,
              color: status === "In Stock" ? "#47C0D2" : "#EF4444",
            }}
          >
            {status}
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography sx={{ fontWeight: 800 }}>${price}</Typography>
          {hasDiscount && originalPrice && (
            <Typography sx={{ textDecoration: "line-through" }}>
              ${originalPrice}
            </Typography>
          )}
        </Stack>

        <Stack direction="row" spacing={1}>
          <Gradient_Button
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              onAddToCart();
            }}
          >
            + Add To Cart
          </Gradient_Button>

          {/* ❤️ Wishlist */}
          <IconButton
            disabled={isPending}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              if (!isPending) toggleToWishlist(Number(id));
            }}
          >
            {isLiked ? <FilledHeartIcon /> : <OutlineHeartIcon />}
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
}