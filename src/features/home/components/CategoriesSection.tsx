"use client";

import { Box, Typography, Stack, Container, Avatar } from "@mui/material";

const categories = [
  { name: "Fashion", image: "/assets/images/Fasion.png" },
  { name: "Shoes", image: "/assets/images/Shoes1.png" },
  { name: "Makeup", image: "/assets/images/Woman Bag.png" },
  { name: "Candles", image: "/assets/images/Candel.png" },
  { name: "Jewelry", image: "/assets/images/Jewelry.png" },
  { name: "Perfume", image: "/assets/images/Perfume.png" },
];

export default function CategoriesSection() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            color: "#1B2351",
            fontWeight: 800,
            mb: 6,
            textAlign: "center",
            textDecoration: "underline",
            textDecorationColor: "#47C0D2",
            textUnderlineOffset: "10px",
          }}
        >
          Explore Categories
        </Typography>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 2, md: 6 }}
          sx={{ flexWrap: "wrap", gap: 3 }}
        >
          {categories.map((cat, idx) => (
            <Stack key={idx} alignItems="center" spacing={2} sx={{ cursor: "pointer", "&:hover": { transform: "scale(1.05)" }, transition: "transform 0.3s ease" }}>
              <Box
                sx={{
                  width: { xs: 80, md: 150 },
                  height: { xs: 80, md: 150 },
                  borderRadius: "50%",
                  backgroundColor: "#E7E9E5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.05)",
                  border: "4px solid white",
                }}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Typography variant="body2" sx={{ fontWeight: 700, color: "#1B2351" }}>
                {cat.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
