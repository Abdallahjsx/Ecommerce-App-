"use client";

import { Box, Typography, Button } from "@mui/material";
import { CartProduct } from "@/features/cart/types";
import { CircularProgress } from "@mui/material";
import type { OrderSummaryType, OrderSummaryProduct } from "../types";
import { mapToSize } from "@/libs/helpers/mapping";
import { useState } from "react";
export default function OrderSummary({ isLoading, handleSubmitOrder, orderSummary, disabled, discountCode, setDiscountCode, handleAddOrderSummary }: { isLoading: boolean, handleSubmitOrder: () => void, orderSummary: OrderSummaryType, disabled: boolean, discountCode: string, setDiscountCode: (discountCode: string) => void, handleAddOrderSummary: () => void }) {
  function mapPaymentMethod(paymentMethod: string) {
    if (paymentMethod === "CashOnDelivery") {
      return "Cash On Delivery"
    } else {
      return paymentMethod;
    }
  }
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "456px",
        padding: { xs: "16px", md: "24px" },
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        backgroundColor: "#FFFFFF",
        border: "1px solid #E5E5E5",
        borderRadius: "12px",
        boxSizing: "border-box",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Manrope",
          fontWeight: 800,
          fontSize: { xs: "20px", md: "24px" },
          lineHeight: "32px",
          letterSpacing: "-0.6px",
          textTransform: "uppercase",
          color: "#040C3C",
        }}
      >
        Order Summary
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {orderSummary?.items?.map((product) => (
          <Box key={product.productId}>
            <ProductItem product={product} />
            <Box
              sx={{
                width: "100%",
                height: "1px",
                backgroundColor: "#E5E5E5",
                mt: "12px"
              }}
            />
          </Box>
        ))}
      </Box>



      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Typography
          sx={{
            fontSize: "10px",
            letterSpacing: "1px",
            textTransform: "uppercase",
            color: "#46464F",
            fontWeight: 700,
          }}
        >
          Discount Code
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "8px",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box
            component="input"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            sx={{
              flex: 1,
              height: "44px",
              borderRadius: "8px",
              padding: "12px 16px",
              border: "1px solid #E5E5E5",
              fontSize: "14px",
              backgroundColor: "#F6F3EC",
              outline: "none",
            }}
          />

          <Button variant="contained" sx={{ padding: "12px 24px", borderRadius: "8px" }} disabled={isLoading || disabled || discountCode?.trim() === ""} onClick={() => handleAddOrderSummary()}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "14px",
                color: "#FFFFFF",
                textTransform: "uppercase",
              }}
            >
              Apply
            </Typography>
          </Button>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography color="#46464F">Subtotal</Typography>
          <Typography fontWeight={600}>EGP {orderSummary?.summary?.subTotal}</Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography color="#46464F">Shipping</Typography>
          <Typography fontWeight={700}>EGP {orderSummary?.summary?.shippingPrice}</Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography color="#46464F">Discount Amount</Typography>
          <Typography sx={{ opacity: 0.7 }}>EGP {orderSummary?.summary?.discountAmount}</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography color="#46464F">Payment Method</Typography>
          <Typography sx={{ opacity: 0.7 }}>{mapPaymentMethod(orderSummary?.summary?.paymentMethod)}</Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "#E5E5E5",
          }}
        />

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontWeight: 700, fontSize: "16px" }}>
            Total
          </Typography>

          <Typography sx={{ fontWeight: 900, fontSize: "18px" }}>
            EGP {orderSummary?.summary.total}
          </Typography>
        </Box>
      </Box>

      {/* <Box
        component="button"
        sx={{
          width: "100%",
          height: "56px",
          borderRadius: "8px",
          background: "linear-gradient(90deg, #040C3C 0%, #1B2351 100%)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "14px",
            color: "#FFFFFF",
            textTransform: "uppercase",
          }}
        >
          PAY NOW
        </Typography>
      </Box> */}
      <Button variant="contained" sx={{ height: "56px", borderRadius: "8px", ".&:disabled": { backgroundColor: "primary.main" } }} onClick={handleSubmitOrder}
        disabled={isLoading || disabled}
      >
        {isLoading ? <CircularProgress size={"24px"} sx={{ color: "white" }} /> : <Typography

          sx={{
            fontWeight: 700,
            fontSize: "14px",
            color: "#FFFFFF",
            textTransform: "uppercase",
          }}
        >
          {orderSummary?.summary?.paymentMethod === "CashOnDelivery" ? "CONFIRM ORDER" : "PAY NOW"}
        </Typography>}
      </Button>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        <Box
          component="img"
          src="/assets/icons/lock-icon.svg"
          sx={{ width: "10px", opacity: 0.6 }}
        />

        <Typography
          sx={{
            fontSize: "10px",
            letterSpacing: "1px",
            textTransform: "uppercase",
            color: "rgba(70,70,79,0.6)",
            fontWeight: 700,
          }}
        >
          Secure Encrypted Checkout
        </Typography>
      </Box>
    </Box>
  );
}

function ProductItem({ product }: { product: OrderSummaryProduct }) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        gap: "16px",
      }}
    >
      <Box
        component="img"
        src={`${"https://dev.api.alluvo.life"}/${product.productImages?.[0]}`}
        sx={{
          width: "96px",
          height: "96px",
          borderRadius: "8px",
          objectFit: "cover",
        }}
      />

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Liberation Sans",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#040C3C",
          }}
        >
          {product?.productName}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Liberation Sans",
            fontWeight: 400,
            fontSize: "12px",
            letterSpacing: "1px",
            textTransform: "uppercase",
            color: "#46464F",
          }}
        >
          Size: {mapToSize(product.size)} • Color: {product.color}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#46464F",
              fontWeight: 700,
            }}
          >
            Qty: {product.quantity}
          </Typography>

          <Typography
            sx={{
              fontWeight: 900,
              fontSize: "16px",
              color: "#040C3C",
            }}
          >
            EGP {product.totalItemPrice}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

