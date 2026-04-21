"use client";

import { Box, Typography, Stack, Container } from "@mui/material";

const categories = [
  { name: "Fashion", image: "/assets/images/Fasion.png" },
  { name: "Shoes", image: "/assets/images/Shoes1.png" },
  { name: "Makeup", image: "/assets/images/Woman Bag.png" },
  { name: "Candles", image: "/assets/images/Candel.png" },
  { name: "Living", image: "/assets/images/Jewelry.png" }, 
];

export default function CategoriesSection() {
  return (
    <Box sx={{ py: 10, backgroundColor: "white" }}>
      <Container maxWidth="lg">
        {/* Left-aligned Header with Custom Underline */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{
              color: "#040C3C", // Navy color from design
              fontWeight: 800,
              fontFamily: "var(--font-manrope)",
              fontSize: { xs: "28px", md: "38px" },
              letterSpacing: "-0.5px",
            }}
          >
            Explore Categories
          </Typography>
          <Box
            sx={{
              width: 38,
              height: 4,
              backgroundColor: "#47C0D2",
              mt: 1.5,
              borderRadius: "2px",
            }}
          />
        </Box>

        {/* Categories Grid/Row */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={{ xs: 2, md: 4 }}
          sx={{
            overflowX: "auto",
            pb: 2,
            "&::-webkit-scrollbar": { display: "none" },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {categories.map((cat, idx) => (
            <Stack
              key={idx}
              alignItems="center"
              spacing={2.5}
              sx={{
                minWidth: { xs: "120px", md: "180px" },
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  "& .cat-image": { 
                    borderColor: "#47C0D2", 
                    borderWidth: "2px"
                  },
                },
              }}
            >
              <Box
                className="cat-image"
                sx={{
                  width: { xs: 110, md: 176 },
                  height: { xs: 110, md: 176 },
                  borderRadius: "50%",
                  backgroundColor: "#F1EEE7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  border: "2px solid transparent", // Set base border to avoid jumping
                }}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Typography
                className="cat-label"
                sx={{
                  fontWeight: 800,
                  color: "#040C3C",
                  fontSize: { xs: "14px", md: "16px" },
                  textAlign: "center",
                }}
              >
                {cat.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
