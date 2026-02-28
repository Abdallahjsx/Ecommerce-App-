"use client";

import {
  Box,
  Typography,
  Stack,
  TextField,
  InputAdornment,
  IconButton,
  Skeleton,
} from "@mui/material";
import ReviewCard from "@/features/brandProfile/components/ReviewCard";
import { SendIcon, StarIcon } from "@/features/brandProfile/Icons";
import React, { useState, useRef, useEffect } from "react";
import { useBrandReviews } from "@/features/brandProfile/hooks/useBrandReviews";
import {
  toggleLikeToReview,
  toggleDisLikeToReview,
} from "@/features/brandProfile/services";
import { useToaster } from "@/providers/ToasterProvider";

export default function Reviews() {
  const { showToast } = useToaster();
  const { data: apiReviews, loading, error } = useBrandReviews(1);
  const [reviews, setReviews] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [rating, setRating] = useState(5);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Sync state with API data
  useEffect(() => {
    if (apiReviews && apiReviews.length > 0) {
      const mappedReviews = apiReviews.map((rev: any) => ({
        id: rev.reviewId,
        name: rev.userDisplayName,
        date: new Date(rev.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        content: rev.comment,
        rating: rev.rating,
        avatar: rev.userImageUrl,
        likes: rev.numOfLikes,
        dislikes: rev.numOfDislikes,
        isLike: rev.isLike,
        isDislike: rev.isDislike,
      }));
      setReviews(mappedReviews);
    }
  }, [apiReviews]);

  const handleLike = async (reviewId: number) => {
    const review = reviews.find((r) => r.id === reviewId);
    if (!review) return;

    const newIsLike = !review.isLike;
    // Optimistic Update
    setReviews((prev) =>
      prev.map((r) =>
        r.id === reviewId
          ? {
              ...r,
              isLike: newIsLike,
              likes: newIsLike ? r.likes + 1 : r.likes - 1,
              // If liking, remove dislike if present
              isDislike: newIsLike ? false : r.isDislike,
              dislikes: newIsLike && r.isDislike ? r.dislikes - 1 : r.dislikes,
            }
          : r,
      ),
    );

    try {
      const res = await toggleLikeToReview(reviewId, newIsLike);
      if (!res.success) {
        throw new Error(res.message?.en || "Failed to toggle like");
      }
    } catch (err: any) {
      showToast(err.message || "Unauthorized - please sign in", "error");
      // Rollback
      setReviews(
        apiReviews.map((rev: any) => ({
          id: rev.reviewId,
          name: rev.userDisplayName,
          date: new Date(rev.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          content: rev.comment,
          rating: rev.rating,
          avatar: rev.userImageUrl,
          likes: rev.numOfLikes,
          dislikes: rev.numOfDislikes,
          isLike: rev.isLike,
          isDislike: rev.isDislike,
        })),
      );
    }
  };

  const handleDislike = async (reviewId: number) => {
    const review = reviews.find((r) => r.id === reviewId);
    if (!review) return;

    const newIsDislike = !review.isDislike;
    // Optimistic Update
    setReviews((prev) =>
      prev.map((r) =>
        r.id === reviewId
          ? {
              ...r,
              isDislike: newIsDislike,
              dislikes: newIsDislike ? r.dislikes + 1 : r.dislikes - 1,
              // If disliking, remove like if present
              isLike: newIsDislike ? false : r.isLike,
              likes: newIsDislike && r.isLike ? r.likes - 1 : r.likes,
            }
          : r,
      ),
    );

    try {
      const res = await toggleDisLikeToReview(reviewId, newIsDislike);
      if (!res.success) {
        throw new Error(res.message?.en || "Failed to toggle dislike");
      }
    } catch (err: any) {
      showToast(err.message || "Unauthorized - please sign in", "error");
      // Rollback
      setReviews(
        apiReviews.map((rev: any) => ({
          id: rev.reviewId,
          name: rev.userDisplayName,
          date: new Date(rev.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          content: rev.comment,
          rating: rev.rating,
          avatar: rev.userImageUrl,
          likes: rev.numOfLikes,
          dislikes: rev.numOfDislikes,
          isLike: rev.isLike,
          isDislike: rev.isDislike,
        })),
      );
    }
  };

  // Extended reviews for circular effect
  const extendedReviews =
    reviews.length > 0 ? [...reviews, ...reviews, ...reviews] : [];
  const [isJumping, setIsJumping] = useState(false);

  // Initialize activeIndex at the start of the second set
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "visible", // Changed to visible
      }}
    >
      {/* Reviews Static Row */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap", // Allow items to wrap
          gap: 4, // Spacing between cards
          alignItems: "center",
          py: 8,
          px: 2,
        }}
      >
        {loading ? (
          [1, 2, 3, 4].map((i) => (
            <Box key={i} sx={{ flexShrink: 0 }}>
              <Skeleton
                variant="rectangular"
                width={318}
                height={288}
                sx={{ borderRadius: "8px" }}
              />
            </Box>
          ))
        ) : error ? (
          <Typography color="error" sx={{ textAlign: "center", py: 4 }}>
            {error}
          </Typography>
        ) : reviews.length === 0 ? (
          <Typography
            color="text.secondary"
            sx={{ textAlign: "center", py: 4 }}
          >
            No reviews yet.
          </Typography>
        ) : (
          reviews.map((review, index) => (
            <Box
              key={review.id}
              onClick={() => setActiveIndex(index)}
              sx={{
                flexShrink: 0,
                cursor: "pointer",
                opacity: activeIndex === index ? 1 : 0.7,
                transform:
                  activeIndex === index
                    ? "translateY(-25px) scale(1.05)"
                    : "translateY(0) scale(1)",
                transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                zIndex: activeIndex === index ? 10 : 1,
              }}
            >
              <ReviewCard
                name={review.name}
                date={review.date}
                content={review.content}
                rating={review.rating}
                avatar={review.avatar}
                isActive={activeIndex === index}
                likes={review.likes}
                dislikes={review.dislikes}
                isLike={review.isLike}
                isDislike={review.isDislike}
                onLike={() => handleLike(review.id)}
                onDislike={() => handleDislike(review.id)}
              />
            </Box>
          ))
        )}
      </Box>

      {/* Add Review Interaction Bar */}
      <Stack
        sx={{
          mt: 4,
          mb: 6,
          backgroundColor: "#FFF",
          borderRadius: { xs: "20px", md: "100px" },
          p: { xs: "20px", md: "10px 24px" },
          width: { xs: "94%", md: "60%" },
          boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.05)",
          border: "1px solid rgba(220, 220, 220, 0.4)",
        }}
        spacing={{ xs: 2, md: 0 }}
        alignItems="center"
        direction={{ xs: "column", md: "row" }}
      >
        <Stack
          direction="row"
          spacing={0.5}
          justifyContent="center"
          width={{ xs: "100%", md: "auto" }}
        >
          {[1, 2, 3, 4, 5].map((star) => (
            <IconButton
              key={star}
              onClick={() => setRating(star)}
              sx={{ p: 0.5 }}
            >
              <StarIcon fill={star <= rating ? "#47C0D2" : "#D1D5DB"} />
            </IconButton>
          ))}
        </Stack>

        <TextField
          fullWidth
          variant="standard"
          placeholder="Add Review..."
          InputProps={{
            disableUnderline: true,
            sx: {
              fontWeight: 500,
              fontSize: { xs: "16px", md: "18px" },
              color: "#666",
              ml: { xs: 0, md: 2 },
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton sx={{ color: "#1B2351" }}>
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Box>
  );
}
