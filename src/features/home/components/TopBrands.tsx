"use client";

import { Box, Typography, Stack, Container, Paper } from "@mui/material";

const brands = [
  { name: "Mastercard", logo: "/assets/images/brands/mastercard.png" },
  { name: "Adidas", logo: "/assets/images/brands/adidas.png" },
  { name: "Nike", logo: "/assets/images/brands/nike.png" },
  { name: "Gucci", logo: "/assets/images/brands/gucci.png" },
  { name: "LV", logo: "/assets/images/brands/lv.png" },
  { name: "Puma", logo: "/assets/images/brands/puma.png" },
  { name: "Apple", logo: "/assets/images/brands/apple.png" },
];

export default function TopBrands() {
  return (
    <Container maxWidth="xl" sx={{ py: 22 }}>
      <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 600,fontSize:'24px', color: "#1B2351", whiteSpace: "nowrap" }}>
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
              width: "191px",
              height: "74px",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#FCFAF2",
              gap: "12px",
              borderRadius: "16px",
              border: "1px solid #E5E7EB",
              padding: "16px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              flexShrink: 0,
              "&:hover": {
                borderColor: "#47C0D2",
              },
            }}
          >
            {/* Logo Placeholder */}
            <Box
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                backgroundColor: "#e0e2e6ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
              }}
            >
              <Box sx={{ width: "24px", height: "24px", backgroundColor: "#1B2351", opacity: 0.2, borderRadius: "50%" }} />
            </Box>

            <Typography
              sx={{
                fontFamily: "var(--font-manrope)",
                fontWeight: 600,
                fontSize: "18x",
                lineHeight: "32px",
                letterSpacing: "-0.6px",
                color: "rgba(4, 12, 60, 1)",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
            >
              {brand.name}
            </Typography>
          </Paper>
        ))}
      </Stack>
    </Container>
  );
}
