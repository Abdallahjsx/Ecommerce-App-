"use client";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";

type OrderDetailsCardProps = {
  image: string;
  name: string;
  brand?: string;
  color?: string;
  size?: string;
  units: number;
  price: number;
};

export default function OrderDetailsCard({
  image,
  name,
  brand,
  color,
  size,
  units,
  price,
}: OrderDetailsCardProps) {
  const theme = useTheme();

  const gradientText = {
    background: theme.palette.gradients.primary,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const primaryColor = theme.tokens.mainColors.primary;

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "343px",
        minHeight: { xs: "100px", sm: "104px" },
        backgroundColor: theme.tokens.mainColors.white,
        borderRadius: theme.tokens.buttons.borderRadius,
        boxShadow: "0px 1px 25px rgba(0,0,0,0.08)",
        display: "flex",
        alignItems: "center",
        gap: { xs: "10px", sm: "12px" },
      }}
    >
      {/* Image */}
      <Box
        sx={{
          width: "104px",
          height: "104px",
          position: "relative",
          flexShrink: 0,
        }}
      >
        <Image src={image} alt={name} fill style={{ objectFit: "cover" }} />
      </Box>

      {/* Info */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Box>
          {/* Name */}
          <Typography
            variant="inputLabel"
            sx={{
              display: "block",
              fontSize: { xs: "14px", sm: "16px" },
              textAlign: "left",
              color: primaryColor,
            }}
          >
            {name}
          </Typography>

          {/* Brand */}
          {brand && (
            <Typography
              variant="inputLabel"
              sx={{
                ...gradientText,
                fontSize: { xs: "10px", sm: "11px" },
                width: "fit-content",
                display: "block",
                lineHeight: 1.4,
                mt: brand ? "2px" : 0
              }}
            >
              {brand}
            </Typography>
          )}

          {/* Color + Size */}
          {(color || size) && (
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                mt: color || size ? "6px" : 0,
                flexWrap: "wrap",
              }}
            >
              {color && (
                <Typography
                  variant="inputLabel"
                  sx={{
                    display: "flex",
                    gap: "4px",
                    fontSize: { xs: "10px", sm: "11px" },
                  }}
                >
                  <Box component="span" sx={gradientText}>
                    Color:
                  </Box>

                  <Box component="span" sx={{ color: primaryColor }}>
                    {color}
                  </Box>
                </Typography>
              )}

              {size && (
                <Typography
                  variant="inputLabel"
                  sx={{
                    display: "flex",
                    gap: "4px",
                    fontSize: { xs: "10px", sm: "11px" },
                  }}
                >
                  <Box component="span" sx={gradientText}>
                    Size:
                  </Box>

                  <Box component="span" sx={{ color: primaryColor }}>
                    {size}
                  </Box>
                </Typography>
              )}
            </Box>
          )}
        </Box>

        {/* Bottom */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: "7px",
          }}
        >
          <Typography
            variant="inputLabel"
            sx={{
              display: "flex",
              gap: "4px",
              fontSize: { xs: "10px", sm: "11px" },
            }}
          >
            <Box component="span" sx={gradientText}>
              Units:
            </Box>

            <Box component="span" sx={{ color: primaryColor }}>
              {units}
            </Box>
          </Typography>

          <Typography
            variant="link"
            sx={{
              textAlign: "left",
              color: primaryColor,
              fontSize: { xs: "12px", sm: "14px" },
              mr: { xs: "12px", sm: "18px" },
              textDecoration: "none",
            }}
          >
            {price}$
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}