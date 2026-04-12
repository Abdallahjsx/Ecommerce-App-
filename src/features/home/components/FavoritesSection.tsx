"use client";

import { Box, Typography, Stack, Container, Grid, Skeleton } from "@mui/material";
import ShopCard from "../../../components/ui/cards/ShopCard";
import { useProducts } from "../../products/hooks/useProducts";
import Link from "next/link";

export default function FavoritesSection() {
  const { data: products, loading } = useProducts({ PageSize: 4 });

  if (loading) {
    return (
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Skeleton variant="text" width={250} height={50} sx={{ mx: "auto", mb: 2 }} />
          <Skeleton variant="text" width={400} height={20} sx={{ mx: "auto", mb: 6 }} />
          <Grid container spacing={4}>
            {[1, 2, 3, 4].map((i) => (
              <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
                <Skeleton variant="rectangular" width="100%" height={320} sx={{ borderRadius: "16px" }} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            color: "#1B2351",
            fontWeight: 900,
            mb: 2,
            textAlign: "center",
          }}
        >
          Our <Typography component="span" sx={{ fontSize: "inherit", fontWeight: "inherit", color: "#47C0D2" }}>Favorites</Typography>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "rgba(27, 35, 81, 0.6)",
            textAlign: "center",
            mb: 6,
            maxWidth: "600px",
            mx: "auto"
          }}
        >
          Explore items that our customers love the most. Handpicked for quality and style.
        </Typography>

        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid key={product.id} size={{ xs: 12, sm: 6, md: 3 }}>
              <ShopCard
                id={product.id}
                name={product.name}
                category={product.category.name}
                price={product.discountedPrice || product.price}
                originalPrice={product.price}
                imageUrl={product.mediaUrl}
                rating={product.reviewsSummary.averageRating}
                reviewsCount={product.reviewsSummary.totalReviews}
                hasDiscount={product.haveOffer}
                discount={`-${product.discountPercentage}%`}
                onAddToCart={() => { }}
              />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
          <Link href="/products" style={{ textDecoration: "none", width: "100%", maxWidth: "400px" }}>
            <Box
              sx={{
                width: "100%",
                py: 2,
                border: "2px solid #47C0D2",
                borderRadius: "16px",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": { backgroundColor: "rgba(71, 192, 210, 0.05)", transform: "translateY(-4px)" }
              }}
            >
              <Typography sx={{ color: "#47C0D2", fontWeight: 800, letterSpacing: "1px" }}>
                VIEW ALL PRODUCTS
              </Typography>
            </Box>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
