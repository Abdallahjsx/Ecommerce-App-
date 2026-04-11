"use client";

import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import OrderStatusBar from "@/features/orderDetails/components/OrderStatusBar";
import OrderDetailsCard from "@/components/ui/cards/OrderDetailsCard";
import OrderInformation from "@/features/orderDetails/components/OrderInformation";

export default function OrderDetailsSection() {
  const theme = useTheme();

  const orderItems = [
    {
      image: "/assets/images/pullover1.png",
      name: "Pullover",
      brand: "Mango",
      color: "Gray",
      size: "L",
      units: 1,
      price: 51,
    },
    {
      image: "/assets/images/pullover2.png",
      name: "Pullover",
      brand: "Mango",
      color: "Gray",
      size: "L",
      units: 1,
      price: 51,
    },
    {
      image: "/assets/images/pullover3.png",
      name: "Pullover",
      brand: "Mango",
      color: "Gray",
      size: "L",
      units: 1,
      price: 51,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "632px",
        position: "absolute",
        mt: { xs: "120px", md: "230px" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(90deg, rgba(27, 35, 81, 0.09) 0%, rgba(71, 192, 210, 0.09) 100%)",
      }}
    >
      <Box
        sx={{
            width: "100%",
          maxWidth: "755px",
          display: "flex",
          flexDirection: "column",
          gap: { xs: "30px", md: "50px" }
        }}
      >
        <Box
          sx={{
            width: "510px",
            height: "74.45px",
            alignSelf: "center",
          }}
        >
          <OrderStatusBar status={1} />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap"
              }}
            >
              <Typography
                variant="inputLabel"
                sx={{ color: theme.palette.primary.main, fontWeight: 500, fontSize: { xs: "16px", md: "19px" } }}
              >
                {orderItems.length} items
              </Typography>

              <Typography
                variant="inputLabel"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "16px", md: "19px" },
                  color: theme.palette.primary.main,
                }}
              >
                Shipped
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap" 
              }}
            >
              <Box sx={{ display: "flex", gap: "6px", flexWrap: "wrap"  }}>
                <Typography
                  variant="inputLabel"
                  sx={{ color: theme.tokens.typographyColors.hint, fontSize: { xs: "13px", md: "15px" }, }}
                >
                  Tracking number:
                </Typography>

                <Typography
                  variant="inputLabel"
                  sx={{ color: theme.palette.primary.main, fontSize: { xs: "13px", md: "15px" }, }}
                >
                  IW3475453455
                </Typography>
              </Box>

              <Typography
                variant="inputLabel"
                sx={{ color: theme.tokens.typographyColors.hint, fontSize: { xs: "13px", md: "15px" }, }}
              >
                05-10-2025
              </Typography>
            </Box>
          </Box>

          {/* Content */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: { xs: "30px", lg: "40px" },
              alignItems: "flex-start",
            }}
          >
            {/* Left Side */}
            <Box
              sx={{
                width: "100%",
                maxWidth: { lg: "755px" },
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                mt: { xs: "10px", md: "20px" } 
              }}
            >
              {orderItems.map((item, index) => (
                <OrderDetailsCard
                  key={index}
                  image={item.image}
                  name={item.name}
                  brand={item.brand}
                  color={item.color}
                  size={item.size}
                  units={item.units}
                  price={item.price}
                />
              ))}
            </Box>

            {/* Right Side */}
            <Box sx={{ mt: { xs: "10px", lg: "60px" } }}>
              <OrderInformation />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
