"use client";

import {
  Box,
  Typography,
  Stack,
  Skeleton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useProducts } from "../../products/hooks/useProducts";
import FavoriteCard from "./cards/FavoriteCard";
import Link from "next/link";
import { Container } from "@mui/system";

/* ================= SECTION ================= */
export default function FavoritesSection() {
  const { data: products, loading } = useProducts({ HaveOffer: true, PageSize: 3 });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  if (loading) {
    return (
      <Box sx={{ py: 12, display: "flex", justifyContent: "center" }}>
        <Skeleton
          variant="rectangular"
          width={900}
          height={500}
          sx={{ borderRadius: "12px" }}
        />
      </Box>
    );
  }

  return (
    <Box sx={{ py: 15, backgroundColor: "#FCFAF2" }}>
      <Container maxWidth="lg">
        {/* Header - Perfectly Centered */}
        <Stack
          spacing={2}
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ mb: 12 }}
          width={"100%"}
        >
          <Typography 
          width={"100%"}
          textAlign={"center"}
            variant="h2" 
            sx={{ 
              color: "#040C3C", 
              fontWeight: 800, 
              fontSize: { xs: "36px", md: "48px" },
              fontFamily: "var(--font-manrope)",
              letterSpacing: "-0.5px"
            }}
          >
            Our Favorites
          </Typography>
          <Typography 
          width={"100%"}  
          textAlign={"center"}   
            sx={{ 
              color: "rgba(4, 12, 60, 0.5)", 
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: 1.6,
              textAlign: 'center'
            }}
            
          >
            Hand-picked by our editorial team for exceptional quality and timeless design.
          </Typography>
        </Stack>

        {/* Products Grid - Using native CSS Grid via Box for better control */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, 1fr)",
            },
            gap: isMobile ? 8 : 6,
            justifyItems: "center",
            alignItems: "start",
          }}
        >
          {products?.slice(0, 3).map((product: any, idx: number) => (
            <Box
              key={product.id}
              sx={{
                width: "100%",
                // Stagger: Low - High - Low pattern (High is center)
                transform: !isMobile && (idx === 0 || idx === 2) ? "translateY(40px)" : "none",
                transition: "transform 0.5s ease"
              }}
            >
              <FavoriteCard
                id={product.id}
                name={product.name}
                brand={product.category?.name || "Essentials"}
                price={product.discountedPrice || product.price}
                imageUrl={product.mediaUrl}
              />
            </Box>
          ))}
        </Box>

        {/* View All Button */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: { xs: 8, md: 14 } }}>
          <Link href="/shop" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                px: 6,
                py: 2,
                border: "1.5px solid #040C3C",
                borderRadius: "14px",
                backgroundColor: "transparent",
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": { 
                  backgroundColor: "#040C3C", 
                  "& .btn-text": { color: "white" },
                  transform: "translateY(-2px)" 
                }
              }}
            >
              <Typography 
                className="btn-text"
                sx={{ 
                  color: "#040C3C", 
                  fontWeight: 800, 
                  fontSize: "12px", 
                  letterSpacing: "1.5px",
                  fontFamily: "var(--font-manrope)",
                  transition: "color 0.3s ease"
                }}
              >
                DISCOVER THE COLLECTION
              </Typography>
            </Box>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
