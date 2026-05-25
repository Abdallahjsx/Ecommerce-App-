"use client";

import ShopCard from "@/components/ui/cards/ShopCard";
import { Grid, Box, Skeleton, Typography } from "@mui/material";
import React from "react";
import { useBrandProducts } from "@/features/brandProfile/hooks/useBrandProducts";
import { useParams } from "next/navigation";

export default function Offers() {
  const params = useParams();
  const id = Number(params.id);
  const { data: allProducts, loading, error } = useBrandProducts(id);
  const products = allProducts.filter((p) => p.haveOffer);

  if (error) {
    return (
      <Box sx={{ py: 4, textAlign: "center" }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 4 }}>
      <Grid container spacing={3}>
        {loading ? (
          [1, 2, 3, 4].map((i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <Skeleton
                variant="rectangular"
                width="100%"
                height={400}
                sx={{ borderRadius: "16px" }}
              />
            </Grid>
          ))
        ) : products.length === 0 ? (
          <Box sx={{ width: "100%", textAlign: "center", py: 4 }}>
            <Typography color="text.secondary">
              No offers available at the moment.
            </Typography>
          </Box>
        ) : (
          products.map((product: any) => (
            <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <ShopCard
                id={product.id}
                name={product.name}
                category={product.category?.name || "Product"}
                price={product.discountedPrice || product.price}
                originalPrice={product.price}
                imageUrl={product.mediaUrl}
                rating={product.reviewsSummary?.averageRating || 0}
                reviewsCount={product.reviewsSummary?.totalReviews || 0}
                status={
                  product.stockStatus === "InStock"
                    ? "In Stock"
                    : "Out of Stock"
                }
                hasDiscount={product.haveOffer}
                isSale={product.haveOffer}
                onAddToCart={() => { }}
                discount={
                  product.discountPercentage
                    ? `${product.discountPercentage}%`
                    : ""
                }
                isInWishlist={false}
                // onAddToWishlist={(e: any) => { console.log(e) }}
                viewMode="grid"
                isLoggedIn={true}


              />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
}
