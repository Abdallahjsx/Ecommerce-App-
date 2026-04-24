"use client";

import { Gradient_Button } from "@/components/ui/gradientButton";
import { Typography, IconButton } from "@mui/material";
import { Box, Stack } from "@mui/material";
import {
  StarIcon,
  OfferIcon,
  OutlineHeartIcon,
  FilledHeartIcon,
} from "../../../features/brandProfile/Icons";
import { Product } from "./ShopCard";
import { useToggleToWishlist } from "@/features/wishlist/hooks/useToggleToWishlist.hook";
import { useWishlist } from "@/features/wishlist/hooks/useWishlist.hook"; // ✅ جديد
import { useRouter } from "next/navigation";

export default function ListedShopCard({
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
  id,
  onAddToCart,
}: Product & { onAddToCart: () => void }) {
  const router = useRouter();

  // ✅ mutation
  const { mutate: toggleToWishlist, isPending } = useToggleToWishlist();

  // ✅ global wishlist
  const { data: wishlist = [] } = useWishlist();

  // ✅ تحديد حالة القلب
  const isLiked = wishlist.some((item) => item.productId === Number(id));

  return (
    <Box
      sx={{
        backgroundColor: "#E7E9E5",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.05)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        position: "relative",
        border: "1px solid rgba(0, 0, 0, 0.03)",
        px: 1,
        cursor: "pointer",
      }}
      onClick={() => router.push(`/products/${id}`)}
    >
      {(hasDiscount || isSale) && (
        <Box
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            zIndex: 2,
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
              }}
            >
              Sale
            </Box>
          ) : (
            <Box sx={{ position: "relative" }}>
              <OfferIcon sx={{ width: 65, height: 60 }} />
              <Typography
                sx={{
                  position: "absolute",
                  top: "45%",
                  left: "50%",
                  transform: "translate(-50%, -50%) rotate(31deg)",
                  color: "white",
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                {discount}
              </Typography>
            </Box>
          )}
        </Box>
      )}

      <Box
        sx={{
          width: { xs: "120px", sm: "180px", md: "220px" },
          minWidth: { xs: "120px", sm: "180px", md: "220px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
      >
        <img
          src={imageUrl}
          alt={name}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Box>

      <Box sx={{ p: { xs: 1.5, md: 3 }, flexGrow: 1 }}>
        <Typography sx={{ fontWeight: 700 }}>{name}</Typography>
        <Typography sx={{ fontStyle: "italic" }}>{category}</Typography>

        <Stack direction="row" spacing={2}>
          <Stack direction="row" spacing={0.5}>
            <StarIcon />
            <Typography>
              {rating.toFixed(1)} ({reviewsCount})
            </Typography>
          </Stack>

          <Typography color={status === "In Stock" ? "green" : "red"}>
            {status}
          </Typography>
        </Stack>
      </Box>

      <Stack flexGrow={1}>
        <Stack direction="row-reverse" spacing={1}>
          <Typography>${price}</Typography>
          {hasDiscount && originalPrice && (
            <Typography sx={{ textDecoration: "line-through" }}>
              ${originalPrice}
            </Typography>
          )}
        </Stack>

        <Stack direction="row" spacing={2}>
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

          <Gradient_Button
            onClick={(e) => {
              e?.stopPropagation?.();
              onAddToCart();
            }}
          >
            + Add To Cart
          </Gradient_Button>
        </Stack>
      </Stack>
    </Box>
  );
}
