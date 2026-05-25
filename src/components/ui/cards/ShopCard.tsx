"use client";

import { Gradient_Button } from "@/components/ui/gradientButton";
import { Button, Typography, IconButton, Rating } from "@mui/material";
import { Box, Stack } from "@mui/material";
import { useToggleToWishlist } from "@/features/wishlist/hooks/useToggleToWishlist.hook";
import { useWishlist } from "@/features/wishlist/hooks/useWishlist.hook";
import Tooltip from "@mui/material/Tooltip";
import { CartIcon } from "@/iconsComponents/all";
import {
  OutlineHeartIcon,
  FilledHeartIcon,
  StarIcon,
  OfferIcon,
} from "../../../features/brandProfile/Icons";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material";

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
  viewMode,
  isLoggedIn
}: Product & { onAddToCart: () => void, viewMode: "grid" | "list", isLoggedIn: boolean }) {

  const router = useRouter();

  // ✅ mutation
  const { mutate: toggleToWishlist, isPending } = useToggleToWishlist();
  function handleToggleWishlist(e: React.MouseEvent) {
    e.stopPropagation();
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }
    toggleToWishlist(Number(id));
  }
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "#e7eae615",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.05)",
        display: "flex",
        flexDirection: viewMode === "grid" ? "column" : "row",
        width: "100%",
        position: "relative",
        cursor: "pointer",
        border: `1px solid ${theme.tokens.separatingColors.border}`,
        background:
          "linear-gradient(90deg, rgba(27, 35, 81, 0.08) 0%, rgba(71, 192, 210, 0.08) 100%)",
      }}
      onClick={() => {
        router.push(`/products/${id}`);
      }}
    >
      {/* Badge */}


      {/* Image */}
      <Box
        sx={{
          width: viewMode === "grid" ? "100%" : "25%",
          // pt: "85%",
          position: "relative",
          // backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={imageUrl}
          alt={name}
          width={250}
          height={viewMode === "grid" ? 250 : 200}
          style={{ width: "100%", }}
        />
        <Box sx={{ position: "absolute", bottom: viewMode === "grid" ? -15 : "50%", right: viewMode === "grid" ? "50%" : -18, transform: viewMode === "grid" ? "translateX(50%)" : "translateY(50%)", background: "linear-gradient(135deg, #1B2351 0%, #47C0D2 70%), #FFFFFF", borderRadius: "50%", padding: "10px", width: "fit-content", height: "fit-content", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={(e: React.MouseEvent | any) => {
          e.stopPropagation();
          onAddToCart();
        }}>
          <Tooltip title="Add to Cart">
            <span style={{ width: "18px", height: "18px" }}>
              <CartIcon width={"18"} height={"18"} />
            </span>
          </Tooltip>
        </Box>
        {(hasDiscount || isSale) && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: viewMode === "grid" ? "0" : "",
              left: viewMode === "grid" ? "" : "0",
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
                <Box sx={{ rotate: viewMode === "grid" ? "0deg" : "305deg" }}>
                  <OfferIcon
                    sx={{ width: 20, height: 20, }}
                  />
                </Box>
                <Typography

                  sx={{
                    position: "absolute",
                    top: "45%",
                    left: "50%",
                    transform: `translate(-50%, -50%) rotate(${viewMode === "grid" ? "31deg" : "-25deg"})`,
                    color: "white",
                    fontSize: "18px",
                    fontWeight: 500,
                    pointerEvents: "none",
                    fontFamily: "var(--font-cinzel)"

                  }}
                >
                  {discount}
                </Typography>
              </Box>
            )}
          </Box>
        )}
      </Box>

      {/* Content */}
      <Box sx={{ p: viewMode == "list" ? { xs: 3.5, md: 5 } : { xs: 1.5, md: 2 }, width: "100%" }}>
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

          <Typography
            sx={{
              fontSize: { xs: "9px", md: "11px" },
              fontWeight: 700,
              color: status === "In Stock" ? "#47C0D2" : "#EF4444",
            }}
          >
            {status}
          </Typography>
          {viewMode == "list" && <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
            {hasDiscount && originalPrice && (
              <Typography sx={{ textDecoration: "line-through", fontSize: { xs: "11px", md: "13px" }, color: "rgba(27, 35, 81, 0.6)" }}>
                ${originalPrice}
              </Typography>
            )}
            <Typography sx={{ fontWeight: 800, fontSize: { xs: "16px", md: "20px" } }}>${price}</Typography>

          </Box>}
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
          {viewMode == "grid" && <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
            <Typography sx={{ fontWeight: 800 }}>${price}</Typography>
            {hasDiscount && originalPrice && (
              <Typography sx={{ textDecoration: "line-through" }}>
                ${originalPrice}
              </Typography>
            )}
          </Box>}
          {/* ❤️ Wishlist */}
          {viewMode === "grid" && <IconButton
            sx={{
              backgroundColor: "#e7eae669",
              borderRadius: "5px",
              width: "fit-content",
              height: "fit-content",
              padding: "4px",
              "&:hover": {
                backgroundColor: "#e7eae669",
              }
            }}
            disabled={isPending}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              if (!isPending) handleToggleWishlist(e);
            }}
          >
            {isInWishlist ? <FilledHeartIcon /> : <OutlineHeartIcon />}
          </IconButton>}

        </Stack>

        <Stack direction="row" spacing={1} justifyContent="space-between" alignItems="center" width={"100%"} >
          <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
            <Rating
              name="read-only"
              size="small"
              value={rating}
              readOnly
            />
            <Typography sx={{ fontSize: { xs: "10px", md: "12px" }, fontWeight: 600 }}>
              {rating.toFixed(1)}
            </Typography>
            <Typography sx={{ fontSize: { xs: "10px", md: "12px" }, fontWeight: 600 }}>
              ({reviewsCount})
            </Typography>
          </Box>
          {viewMode === "list" && <IconButton
            sx={{
              backgroundColor: "#e7eae669",
              borderRadius: "5px",
              width: "fit-content",
              height: "fit-content",
              padding: "4px",
              "&:hover": {
                backgroundColor: "#e7eae669",
              }
            }}
            disabled={isPending}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              if (!isPending) handleToggleWishlist(e);
            }}
          >
            {isInWishlist ? <FilledHeartIcon /> : <OutlineHeartIcon />}
          </IconButton>}




        </Stack>
      </Box>
    </Box >
  );
}
