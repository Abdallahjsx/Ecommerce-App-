"use client";

import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import BackgroundShapeImage from "@/components/ui/BackgroundShape/BackgroundShapeImage";
import OrderDetailsSection from "@/features/orderDetails/components/OrderDetailsSection";

export default function OrderHeader() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        backgroundColor: theme.tokens.backgroundColors.light,
        overflow: "hidden",
      }}
    >
      <BackgroundShapeImage />

      <OrderDetailsSection />

      <Container
        maxWidth={false}
        sx={{
          width: "100%",
          maxWidth: "1300px",
          minHeight: "1053px",
          padding: { xs: "16px", md: "24px" },
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <Box
          sx={{
             width: "100%",
            maxWidth: "1297px",
            height: "auto",
            position: "absolute",
            mt: { xs: "40px", md: "50px" },
            left: "35px",
            gap: "7px",
            opacity: 1,
          }}
        >
          <Typography
            variant="bodyMedium"
            sx={{
              width: "100%",
              maxWidth: "407px",
              fontSize: { xs: "40px", md: "64px" },
              fontWeight: 600,
              background: theme.palette.gradients.primary,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Order Details
          </Typography>

          <Box
            sx={{
              width: "100%",
              maxWidth: "139px",
              height: "auto",
              gap: "8px",
              display: "flex",
              alignItems: "center",
              mt: { xs: "6px", md: "10px" },
              opacity: 1,
            }}
          >
            <Typography
              variant="inputLabel"
              sx={{
                fontWeight: 700,
                color: theme.palette.primary.main,
                fontSize: { xs: "12px", md: "14px" },
              }}
            >
              Order
            </Typography>

            <Typography
              variant="inputLabel"
              sx={{
                fontWeight: 500,
                color: "#E1E1E1",
                fontSize: { xs: "12px", md: "14px" },
              }}
            >
              /
            </Typography>

            <Typography
              variant="inputLabel"
              sx={{
                fontWeight: 500,
                color: "#868686",
                fontSize: { xs: "12px", md: "14px" },
              }}
            >
              #OD54y67f
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}