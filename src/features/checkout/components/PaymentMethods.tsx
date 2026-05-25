"use client";

import { Box, Typography } from "@mui/material";

export default function PaymentMethods({ paymentMethod, setPaymentMethod, disabled }: { paymentMethod: number; setPaymentMethod: (paymentMethod: number) => void, disabled: boolean }) {
  const imagesArray = ["/assets/images/Banque_Misr.svg", "/assets/images/Banque_du_caire_Logo.svg", "/assets/images/National_Bank_of_Egypt.svg"]
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "664px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Manrope",
          fontWeight: 800,
          fontSize: { xs: "22px", md: "30px" },
          color: "#040C3C",
        }}
      >
        Payment methods
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: "12px",
          border: "1px solid #E0E0E0",
          padding: "16px",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px", flexGrow: 1 }}>
            <input disabled={disabled} type="radio" name="payment" checked={paymentMethod === 1} onChange={() => setPaymentMethod(1)} />
            <Typography>Credit / Debit Card</Typography>
          </Box>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", gap: "12px", width: "40%", justifyContent: "flex-end" }}>
          {imagesArray.map((image, index) => (
            <Box key={index} component="img" src={image} sx={{ width: "30%", height: "100%", objectFit: "contain" }} />
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: "12px",
          border: "1px solid #E0E0E0",
          padding: "16px",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <input disabled={disabled} type="radio" name="payment" checked={paymentMethod === 3} onChange={() => setPaymentMethod(3)} />
          <Typography>Cash on Delivery</Typography>
        </Box>

        <Box component="img" src="/assets/icons/Cash-icon.svg" sx={{ width: "20px" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: "12px",
          border: "1px solid #E0E0E0",
          padding: "16px",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <input disabled={disabled} type="radio" name="wallet" checked={paymentMethod === 2} onChange={() => setPaymentMethod(2)} />
          <Typography>Wallet</Typography>
        </Box>

        {/* <Box component="img" src="/assets/icons/Cash-icon.svg" sx={{ width: "20px" }} /> */}
      </Box>
    </Box>
  );
}