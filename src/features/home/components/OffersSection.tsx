"use client";

import { Box, Typography, Stack, Container, Grid, Skeleton } from "@mui/material";
import Gradient_Button from "@/components/ui/gradientButton/Gradient_Button";
import ShopCard from "../../../components/ui/cards/ShopCard";
import { useProducts } from "../../products/hooks/useProducts";
import Link from "next/link";

export default function OffersSection() {
  const { data: products, loading } = useProducts({ HaveOffer: true, PageSize: 3 });

  if (loading) {
    return (
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{ mb: 6 }}>
            <Skeleton variant="text" width={250} height={50} />
          </Stack>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Skeleton variant="rectangular" width="100%" height={400} sx={{ borderRadius: "24px" }} />
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Grid container spacing={3}>
                <Grid size={{ xs: 6 }}>
                  <Skeleton variant="rectangular" width="100%" height={320} sx={{ borderRadius: "16px" }} />
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <Skeleton variant="rectangular" width="100%" height={320} sx={{ borderRadius: "16px" }} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }

  const featuredProduct = products[0];
  const sideProducts = products.slice(1);

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{ mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 900, color: "#1B2351", textAlign: "center" }}>
            Todays <Typography component="span" sx={{ fontSize: "inherit", fontWeight: "inherit", color: "#47C0D2" }}>Offers</Typography>
          </Typography>
        </Stack>

        <Grid container spacing={4} alignItems="stretch">
          {/* Main Large Offer Banner */}
          {featuredProduct && (
            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  minHeight: { xs: "320px", md: "400px" },
                  position: "relative",
                  borderRadius: "24px",
                  overflow: "hidden",
                  background: "linear-gradient(135deg, #1B2351 0%, #000000 100%)",
                  display: "flex",
                  alignItems: "center",
                  p: { xs: 3, md: 6 },
                }}
              >
                <Box sx={{ zIndex: 1, position: "relative", maxWidth: { xs: "100%", md: "350px" } }}>
                  <Typography
                    variant="h2"
                    sx={{
                      color: "white",
                      fontWeight: 900,
                      mb: 1,
                      fontSize: { xs: "40px", md: "64px" }
                    }}
                  >
                    {featuredProduct.discountPercentage}% OFF
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#47C0D2",
                      fontWeight: 700,
                      mb: 1,
                      fontSize: { xs: "18px", md: "24px" }
                    }}
                  >
                    {featuredProduct.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      mb: 4,
                      fontSize: { xs: "14px", md: "16px" },
                      maxWidth: { xs: "250px", md: "100%" }
                    }}
                  >
                    {featuredProduct.description.substring(0, 80)}...
                  </Typography>
                  <Link href={`/products/${featuredProduct.id}`} style={{ textDecoration: "none" }}>
                    <Gradient_Button
                      variant="primary"
                      sx={{
                        borderRadius: "8px",
                        px: 4,
                        height: "48px",
                        fontSize: "14px",
                        fontWeight: 700,
                      }}
                    >
                      GET YOUR OFFER NOW
                    </Gradient_Button>
                  </Link>
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    right: { xs: 10, md: -20 },
                    bottom: { xs: 20, md: -30 },
                    width: { xs: "200px", md: "350px" },
                    height: { xs: "200px", md: "350px" },
                    opacity: 0.9,
                    zIndex: 0,
                    display: { xs: "block", md: "none", lg: "block" },
                  }}
                >
                  {/* <Image
                    src={featuredProduct.mediaUrl}
                    alt={featuredProduct.name}
                    fill
                    style={{ objectFit: "contain", filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.5))" }}
                  /> */}
                </Box>
              </Box>
            </Grid>
          )}

          {/* Secondary Individual Offers */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={4} sx={{ height: "100%" }} justifyContent="space-between">
              <Grid container spacing={3}>
                {sideProducts.map((product) => (
                  <Grid key={product.id} size={{ xs: 6, md: 6 }}>
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

            </Stack>
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
          <Link href="/shop" style={{ textDecoration: "none", width: "100%", maxWidth: "400px" }}>
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
