"use client";

import { Box, Container, Grid, Typography, Stack, Breadcrumbs, Link as MuiLink, Skeleton } from "@mui/material";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ShopCard from "@/components/ui/cards/ShopCard";
import { useProducts } from "@/features/products/hooks/useProducts";
import BackgroundShapeImage from "@/components/ui/BackgroundShape/BackgroundShapeImage";
import { Gradient_Button } from "@/components/ui/gradientButton";

function ProductsContent() {
  const searchParams = useSearchParams();
  const haveOffer = searchParams.get("HaveOffer") === "true";
  const category = searchParams.get("Category");

  const { data: products, loading, error, meta, loadMore, fetchingNextPage } = useProducts({
    HaveOffer: haveOffer,
    Category: category || undefined,
    PageSize: 10
  });

  return (
    <Box sx={{ position: "relative", minHeight: "100vh", py: 4 }}>
      <BackgroundShapeImage />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Breadcrumbs */}
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 4 }}>
          <Link href="/" passHref legacyBehavior>
            <MuiLink underline="hover" color="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
              Home
            </MuiLink>
          </Link>
          <Typography color="text.primary">Products</Typography>
        </Breadcrumbs>

        {/* Title Section */}
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 6 }}>
          <Box>
            <Typography variant="h3" sx={{ fontWeight: 900, color: "#1B2351" }}>
              {haveOffer ? "Special Offers" : "All Products"}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mt: 1 }}>
              {haveOffer
                ? "Don't miss out on our best deals and discounts."
                : "Explore our curated collection of premium products."}
            </Typography>
          </Box>
        </Stack>

        {/* Products Grid */}
        {loading && products.length === 0 ? (
          <Grid container spacing={3}>
            {Array.from({ length: 8 }).map((_, i) => (
              <Grid key={i} size={{ xs: 6, sm: 4, md: 3 }}>
                <Skeleton variant="rectangular" width="100%" height={350} sx={{ borderRadius: "16px" }} />
              </Grid>
            ))}
          </Grid>
        ) : error ? (
          <Box sx={{ py: 10, textAlign: "center" }}>
            <Typography color="error" variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Oops! Something went wrong.
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
              We're having trouble loading the products right now. This might be due to a temporary server issue.
            </Typography>
            <Link href="/" passHref style={{ textDecoration: 'none' }}>
              <Gradient_Button variant="primary" sx={{ px: 4, height: 48 }}>
                Back to Home
              </Gradient_Button>
            </Link>
          </Box>
        ) : products.length === 0 ? (
          <Box sx={{ py: 10, textAlign: "center" }}>
            <Typography variant="h5" color="text.secondary">No products found matching your criteria.</Typography>
          </Box>
        ) : (
          <>
            <Grid container spacing={3}>
              {products.map((product, idx) => (
                <Grid key={`${product.id}-${idx}`} size={{ xs: 6, sm: 4, md: 3 }}>
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
                    isInWishlist={false}
                    // onAddToWishlist={(e: any) => { console.log(e) }}
                    viewMode="grid"
                    isLoggedIn={true}
                  />
                </Grid>
              ))}
            </Grid>

            {/* Load More Section */}
            {meta?.hasNextPage && (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
                <Gradient_Button
                  variant="primary"
                  onClick={loadMore}
                  disabled={fetchingNextPage}
                  sx={{ px: 6, height: 52, minWidth: 240 }}
                >
                  {fetchingNextPage ? "Loading More..." : "Load More Products"}
                </Gradient_Button>
              </Box>
            )}
          </>
        )}
      </Container>
    </Box>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<Box sx={{ minHeight: "100vh", display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Skeleton variant="rectangular" width="100%" height="100%" /></Box>}>
      <ProductsContent />
    </Suspense>
  );
}
