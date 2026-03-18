"use client";

import { Gradient_Button } from "@/components/ui/gradientButton";
import { Button, Typography, IconButton, Rating } from "@mui/material";
import { Box, Stack } from "@mui/material";
import { HeartIcon, StarIcon, OfferIcon } from "../../../features/brandProfile/Icons";
export type Product = {
  id?: string;
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
}
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
}: Product) {
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

      {/* Product Image Container */}
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
          sx={{ mb: { xs: 1, md: 1.5 } }}
        >
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <StarIcon
              sx={{ fontSize: { xs: "12px", md: "14px" }, color: "#47C0D2" }}
            />
            <Typography
              sx={{
                fontSize: { xs: "10px", md: "12px" },
                color: "#1B2351",
                fontWeight: 500,
              }}
            >
              {rating.toFixed(1)}{" "}
              <span style={{ color: "rgba(27, 35, 81, 0.5)" }}>
                ({reviewsCount})
              </span>
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

        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ mb: { xs: 1.5, md: 2 } }}
        >
          <Typography
            sx={{
              fontSize: { xs: "18px", md: "22px" },
              fontWeight: 800,
              color: "#1B2351",
            }}
          >
            ${price}
          </Typography>
          {hasDiscount && originalPrice && (
            <Typography
              sx={{
                fontSize: { xs: "12px", md: "14px" },
                color: "rgba(27, 35, 81, 0.4)",
                textDecoration: "line-through",
              }}
            >
              ${originalPrice}
            </Typography>
          )}
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center">
          <Gradient_Button
            variant="primary"
            sx={{
              flexGrow: 1,
              borderRadius: "8px",
              py: { xs: 0.5, md: 1 },
              fontSize: { xs: "12px", md: "14px" },
              fontWeight: 600,
              textTransform: "none",
              height: { xs: "32px", md: "40px" },
              "& .MuiTypography-root": {
                fontSize: { xs: "12px !important", md: "14px !important" },
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "inherit",
                fontWeight: "inherit",
                color: "inherit",
              }}
            >
              + Add To Cart
            </Typography>
          </Gradient_Button>

          <IconButton
            sx={{
              border: "1px solid #F3F4F6",
              borderRadius: "8px",
              p: { xs: 0.5, md: 1 },
              width: { xs: "32px", md: "40px" },
              height: { xs: "32px", md: "40px" },
              "& svg": {
                width: { xs: 16, md: 20 },
                height: { xs: 16, md: 20 },
              },
            }}
          >
            <HeartIcon />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
}
