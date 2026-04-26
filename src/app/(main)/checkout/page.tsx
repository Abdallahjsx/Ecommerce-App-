"use client";

import { Box, Typography } from "@mui/material";
import AddressCard from "@/features/checkout/components/AddressCard";
import CartCard from "@/features/checkout/components/CartCard";
import CheckoutForm from "@/features/checkout/components/CheckoutForm";
import PaymentMethods from "@/features/checkout/components/PaymentMethods";
import OrderSummary from "@/features/checkout/components/OrderSummary";
import GuaranteeCard from "@/features/checkout/components/GuaranteeCard";

export default function CheckoutPage() {
  return (
    <Box
      sx={{
        maxWidth: "1184px",
        margin: "0 auto",
        padding: { xs: "16px", md: "24px" },
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "repeat(12, 1fr)",
        },
        columnGap: { md: "40px" },
        rowGap: "32px",
      }}
    >
      <Box
        sx={{
          gridColumn: {
            xs: "span 12",
            md: "span 7",
          },
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Manrope",
              fontWeight: 900,
              fontSize: { xs: "22px", md: "30px" },
              color: "#040C3C",
            }}
          >
            Deliver to
          </Typography>

          <Box
            component="span"
            sx={{
              fontWeight: 700,
              fontSize: "14px",
              textTransform: "uppercase",
              color: "#006874",
              cursor: "pointer",
            }}
          >
            ADD NEW
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "24px",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <AddressCard />
          </Box>

          <Box sx={{ flex: 1 }}>
            <CartCard />
          </Box>
        </Box>

        <CheckoutForm />
        <PaymentMethods />
      </Box>

      <Box
        sx={{
          gridColumn: {
            xs: "span 12",
            md: "span 5",
          },
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          alignItems: {
            xs: "stretch",
            md: "flex-end",
          },
        }}
      >
        <OrderSummary />
        <GuaranteeCard />
      </Box>
    </Box>
  );
}
