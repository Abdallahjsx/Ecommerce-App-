"use client";

import { Box, Typography } from "@mui/material";

export default function OrderSummary() {
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

      <Box
        sx={{
          width: "100%",
          display: "flex",
          gap: { xs: "12px", md: "16px" },
          paddingY: "8px",
        }}
      >
        <Box
          component="img"
          src="/assets/images/Running Shoe.png"
          alt="product"
          sx={{
            width: { xs: "80px", md: "96px" },
            height: { xs: "80px", md: "96px" },
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
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: "24px",
              color: "#040C3C",
            }}
          >
            Ultraboost Light Running Shoes
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
            Size: 42 • Color: Cloud White
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                fontSize: "12px",
                color: "#46464F",
                fontWeight: 700,
              }}
            >
              Qty: 1
            </Typography>

            <Typography
              sx={{
                fontWeight: 900,
                fontSize: { xs: "14px", md: "16px" },
                color: "#040C3C",
              }}
            >
              EGP 5000.00
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "#E5E5E5",
        }}
      />

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
            defaultValue="SAVE20"
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

          <Box
            component="button"
            sx={{
              height: "44px",
              padding: "0 24px",
              borderRadius: "8px",
              backgroundColor: "#040C3C",
              border: "none",
              cursor: "pointer",
              fontWeight: 700,
              fontSize: "12px",
              textTransform: "uppercase",
              color: "#FFFFFF",
              width: { xs: "100%", sm: "auto" },
            }}
          >
            Apply
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography color="#46464F">Subtotal</Typography>
          <Typography fontWeight={600}>EGP 5000.00</Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography color="#46464F">Shipping</Typography>
          <Typography fontWeight={700}>EGP 50.00</Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography color="#46464F">Tax</Typography>
          <Typography sx={{ opacity: 0.7 }}>EGP 250.00</Typography>
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
            EGP 5300.00
          </Typography>
        </Box>
      </Box>

      <Box
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
      </Box>

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

