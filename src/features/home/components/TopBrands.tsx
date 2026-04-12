"use client";

import { Box, Typography, Stack, Container, Paper } from "@mui/material";

const brands = [
  "Mastercard",
  "Adidas",
  "Nike",
  "Gucci",
  "Louis Vuitton",
  "Puma",
  "Apple",
];

export default function TopBrands() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 800, color: "#1B2351", whiteSpace: "nowrap" }}>
          Top Brands
        </Typography>
        <Box sx={{ height: "2px", width: "100%", backgroundColor: "#F3F4F6" }} />
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        sx={{
          overflowX: "auto",
          pb: 2,
          "&::-webkit-scrollbar": { display: "none" },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {brands.map((brand, idx) => (
          <Paper
            key={idx}
            elevation={0}
            sx={{
              px: 4,
              py: 1,
              borderRadius: "100px",
              backgroundColor: "#F3F4F6",
              border: "1px solid transparent",
              cursor: "pointer",
              transition: "all 0.3s ease",
              flexShrink: 0,
              "&:hover": {
                backgroundColor: "white",
                borderColor: "#47C0D2",
                boxShadow: "0px 10px 20px rgba(71, 192, 210, 0.1)",
                transform: "translateY(2px)",
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                color: "#1B2351",
                whiteSpace: "nowrap",
                fontSize: "14px",
              }}
            >
              {brand}
            </Typography>
          </Paper>
        ))}
      </Stack>
    </Container>
  );
}
