"use client";

import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type WishlistProduct = {
  id: number;
  name: string;
  category: string;
  image: string;
};

type Props = {
  product: WishlistProduct;
  onRemove: (id: number) => void;
};

export default function WishlistProductCard({ product, onRemove }: Props) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", sm: "860px" },
        height: { xs: "auto", sm: "152px" },
        display: "flex",
        flexDirection: { xs: "column", sm: "row" }, 
        alignItems: { xs: "center", sm: "flex-start" },
        gap: "10px",
        mx: "auto",
        mr: { xs: 0, sm: 20 },
        borderRadius: "4px",
        border: `1px solid ${theme.tokens.separatingColors.border}`,
        padding: "16px",
        position: "relative",
        background:
          "linear-gradient(90deg, rgba(27, 35, 81, 0.08) 0%, rgba(71, 192, 210, 0.08) 100%)",
      }}
    >
      {/* Love icon */}
      <Box
        component="img"
        src="/assets/icons/Love-icon.svg"
        alt="love"
        onClick={() => onRemove(product.id)}
        sx={{
          width: 28,
          height: 28,
          position: "absolute",
          top: 16,
          right: 16,
          cursor: "pointer",
        }}
      />

      {/* Add to cart icon */}
      <Box
        component="img"
        src="/assets/icons/Add-to-cart-icon.svg"
        alt="add-to-cart"
        sx={{
          width: 29,
          height: 25,
          position: "absolute",
          bottom: 16,
          right: 16,
          cursor: "pointer",
        }}
      />

      {/* Product image */}
      <Box
        component="img"
        src={product.image}
        alt={product.name}
        sx={{
          width: { xs: "100px", sm: "120px" },
          height: { xs: "100px", sm: "120px" },
          objectFit: "contain",
          flexShrink: 0,
        }}
      />

      {/* Product details */}
      <Box
        sx={{
          width: { xs: "100%", sm: "328px" },
          flex: { xs: 1, sm: "unset" },
          minWidth: 0,
          flexShrink: 0,
          height: "auto",
          marginLeft: { xs: 0, sm: "8px" },
          textAlign: { xs: "center", sm: "left" }, // 👈 عشان يبقى شكله مظبوط في الموبايل
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: { xs: "16px", sm: "20px" },
            lineHeight: "24px",
            letterSpacing: "0.5px",
            color: "#1E1E1E",
            whiteSpace: "nowrap",
            overflow: "hidden", // 👈 عشان ellipsis تشتغل
            textOverflow: "ellipsis",
            marginTop: { xs: "10px", sm: "19px" },
          }}
        >
          {product.name}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 300,
            fontSize: "15px",
            lineHeight: "24px",
            letterSpacing: "0.5px",
            color: "#1E1E1E",
            fontStyle: "italic",
            marginTop: "4px",
          }}
        >
          {product.category}
        </Typography>

        {/* Rating */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "center", sm: "space-between" },
            alignItems: "center",
            marginTop: "12px",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Box
              component="img"
              src="/assets/icons/star-icon.svg"
              alt="star"
              sx={{ width: "18px", height: "18px" }}
            />
            <Typography sx={{ fontSize: "12px" }}>
              5.0 (10 Reviews)
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}