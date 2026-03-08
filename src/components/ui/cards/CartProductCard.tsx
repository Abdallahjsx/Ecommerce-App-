"use client";

import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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

type CartProductCardProps = {
  product: CartProduct;
  onDelete: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
};

export default function CartProductCard({
  product,
  onDelete,
  onIncrease,
  onDecrease,
}: CartProductCardProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", sm: "680px" },
        height: { xs: "auto", sm: "152px" },
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: "10px",
        marginLeft: { xs: 0, sm: "39px" },
        borderRadius: "4px",
        border: `1px solid ${theme.tokens.separatingColors.border}`,
        padding: "16px",
        position: "relative",
        background:
          "linear-gradient(90deg, rgba(27, 35, 81, 0.08) 0%, rgba(71, 192, 210, 0.08) 100%)",
      }}
    >
      {/* Delete - Desktop */}
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          width: "35px",
          height: "35px",
          borderRadius: "50%",
          backgroundColor: theme.tokens.mainColors.white,
          alignItems: "center",
          justifyContent: "center",
          boxShadow: theme.tokens.buttons.boxShadow,
          position: "absolute",
          top: "10px",
          right: "15px",
          cursor: "pointer",
        }}
        onClick={onDelete}
      >
        <Box
          component="img"
          src="/assets/icons/delete-icon.svg"
          alt="delete"
          sx={{ width: "15px", height: "15px" }}
        />
      </Box>

      {/* Image */}
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

      {/* Details */}
      <Box
        sx={{
          width: { xs: "100%", sm: "328px" },
          flex: { xs: 1, sm: "unset" },
          minWidth: { xs: 0, sm: "auto" },
          flexShrink: 0,
          height: "auto",
          marginLeft: { xs: 0, sm: "8px" },
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
            textOverflow: "ellipsis",
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
            marginTop: "8px",
          }}
        >
          {product.category}
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "12px",
            marginTop: "8px",
            flexWrap: "wrap",
          }}
        >
          <Typography sx={{ display: "flex", gap: "4px", fontSize: "11px" }}>
            <Box
              component="span"
              sx={{
                background: theme.palette.gradients.primary,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Size:
            </Box>
            <Box component="span" sx={{ color: theme.tokens.mainColors.primary }}>
              {product.size}
            </Box>
          </Typography>

          <Typography sx={{ display: "flex", gap: "4px", fontSize: "11px" }}>
            <Box
              component="span"
              sx={{
                background: theme.palette.gradients.primary,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Color:
            </Box>
            <Box component="span" sx={{ color: theme.tokens.mainColors.primary }}>
              {product.color}
            </Box>
          </Typography>
        </Box>

        {/* Rating + Price */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "flex-start", sm: "space-between" },
            alignItems: { xs: "flex-start", sm: "center" },
            marginTop: "8px",
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

          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "24px",
              color: "#1E1E1E",
              marginTop: { xs: "4px", sm: 0 },
            }}
          >
            ${product.price * product.quantity}
          </Typography>
        </Box>

        {/* Quantity Mobile */}
        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
            alignItems: "center",
            gap: "12px",
            marginTop: "12px",
            width: "100%",
          }}
        >
          <Box
            component="img"
            src="/assets/icons/plus-icon.svg"
            alt="plus"
            onClick={onIncrease}
            sx={{ width: "20px", height: "20px", cursor: "pointer" }}
          />

          <Box
            sx={{
              width: "25px",
              height: "25px",
              borderRadius: "50%",
              background: theme.tokens.mainColors.white,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography>{product.quantity}</Typography>
          </Box>

          <Box
            component="img"
            src="/assets/icons/minus-icon.svg"
            alt="minus"
            onClick={onDecrease}
            sx={{ width: "20px", height: "20px", cursor: "pointer" }}
          />

          <Box
            onClick={onDelete}
            sx={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              backgroundColor: theme.tokens.mainColors.white,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: theme.tokens.buttons.boxShadow,
              cursor: "pointer",
              marginLeft: "auto",
            }}
          >
            <Box
              component="img"
              src="/assets/icons/delete-icon.svg"
              alt="delete"
              sx={{ width: "14px", height: "14px" }}
            />
          </Box>
        </Box>
      </Box>

      {/* Quantity Desktop */}
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          position: "absolute",
          top: "70px",
          right: "15px",
          width: "89px",
          flexDirection: "row",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Box
          component="img"
          src="/assets/icons/plus-icon.svg"
          alt="plus"
          onClick={onIncrease}
          sx={{ width: "20px", height: "20px", cursor: "pointer" }}
        />

        <Box
          sx={{
            width: "25px",
            height: "25px",
            borderRadius: "50%",
            background: theme.tokens.mainColors.white,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography>{product.quantity}</Typography>
        </Box>

        <Box
          component="img"
          src="/assets/icons/minus-icon.svg"
          alt="minus"
          onClick={onDecrease}
          sx={{ width: "20px", height: "20px", cursor: "pointer" }}
        />
      </Box>
    </Box>
  );
}