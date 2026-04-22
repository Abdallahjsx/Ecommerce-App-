"use client";

import ReviewItem from "@/features/brandProfile/components/ReviewItem";
import { useBrandReviews } from "@/features/brandProfile/hooks/useBrandReviews";
import { Box, Typography, CircularProgress, Stack } from "@mui/material";
import React from "react";
import { useParams } from "next/navigation";

export default function Reviews() {
  const params = useParams();
  const id = Number(params.id);
  const { data: reviews, loading, error } = useBrandReviews(id);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
        <CircularProgress color="secondary" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ py: 4, textAlign: "center" }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  if (reviews.length === 0) {
    return (
      <Box sx={{ width: "100%", textAlign: "center", py: 4 }}>
        <Typography color="text.secondary">
          No reviews for this brand yet.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 2 }}>
      <Stack spacing={3}>
        {reviews.map((review: any) => (
          <ReviewItem key={review.reviewId} review={review} />
        ))}
      </Stack>
    </Box>
  );
}
