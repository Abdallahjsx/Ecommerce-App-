"use client";

import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";

export default function OrderInformation() {
  const theme = useTheme();

  const infoItems = [
    {
      label: "Shipping Address:",
      value: "3 Newbridge Court ,Chino Hills, CA 91709, United States",
    },
    {
      label: "Payment method:",
      value: "**** **** **** 3947",
      icon: "/assets/icons/mastercard-icon.svg",
    },
    {
      label: "Delivery method:",
      value: "FedEx, 3 days, 15$",
    },
    {
      label: "Discount:",
      value: "10%, Personal promo code",
      valueWidth: "180px",
    },
    {
      label: "Total Amount:",
      value: "133$",
      valueWidth: "31px",
    },
  ];

  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          md: "346px",
        },
        height: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="bodyMedium"
        sx={{
          fontSize: "20px",
          color: theme.tokens.mainColors.primary,
          textAlign: "left",
        }}
      >
        Order information
      </Typography>

      <Box
        sx={{
          mt: {
            xs: "24px",
            md: "48px",
          },
          display: "flex",
          flexDirection: "column",
          gap: "22px",
        }}
      >
        {infoItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <Typography
              variant="inputLabel"
              sx={{
                minWidth: "125px",
                fontSize: "14px",
                color: theme.tokens.typographyColors.inactive,
                whiteSpace: "nowrap",
              }}
            >
              {item.label}
            </Typography>

            {item.icon && (
              <Image
                src={item.icon}
                alt="card"
                width={32}
                height={25}
              />
            )}

            <Typography
              variant="inputLabel"
              sx={{
                color: theme.tokens.mainColors.primary,
                fontSize: "14px",
                ml: item.icon ? "8px" : "0",
                flex: 1,
                width: item.valueWidth || "auto",
                fontWeight: 500,
              }}
            >
              {item.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}