"use client";

import { Box, Typography, useTheme } from "@mui/material";
import Gradient_Button from "@/components/ui/gradientButton/Gradient_Button";

export default function EmptyWishlist() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: { xs: 6, md: 10 },
        gap: 3,
      }}
    >
      {/* image */}
      <Box
        component="img"
        src="/assets/images/EmptyWishlist.png"
        alt="Empty Wishlist"
        sx={{
          width: { xs: "250px", md: "auto" },
        }}
      />

      {/* text */}
      <Typography
        sx={{
          width: { xs: "100%", md: "443px" },
          fontWeight: 400,
          fontSize: { xs: "24px", md: "40px" },
          textAlign: "center",
          color: theme.tokens.mainColors.primary,
        }}
      >
        your wishlist is empty 
      </Typography>

      {/* button */}
      <Box
        sx={{
          width: { xs: "100%", md: "443px" },
        }}
      >
        <Gradient_Button
          variant="primary"
          sx={{
            width: "100%",
            height: { xs: "56px", md: "70px" },
            borderRadius: theme.tokens.buttons.borderRadius,
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: "16px", md: "20px" },
              color: theme.tokens.buttons.textColor,
            }}
          >
            Shopping Now
          </Typography>
        </Gradient_Button>
      </Box>
    </Box>
  );
}