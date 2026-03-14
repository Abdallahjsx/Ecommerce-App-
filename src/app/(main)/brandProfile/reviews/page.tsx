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
import React, { useState, useEffect } from "react";
import { useBrandReviews } from "@/features/brandProfile/hooks/useBrandReviews";
import {
  toggleLikeToReview,
  toggleDisLikeToReview,
} from "@/features/brandProfile/services";
import { useToaster } from "@/providers/ToasterProvider";

export default function Reviews() {
  const { showToast } = useToaster();
  const { data: apiReviews, loading } = useBrandReviews(1);
  const [reviews, setReviews] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [rating, setRating] = useState(5);

  const fakeReviews = [
    {
      id: 101,
      name: "Ahmed Ali",
      date: "Oct 12, 2023",
      content: "Great product, really liked it!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=1",
      likes: 12,
      dislikes: 1,
      isLike: false,
      isDislike: false,
    },
    {
      id: 102,
      name: "Sara Mohamed",
      date: "Oct 15, 2023",
      content: "Fast delivery and high quality.",
      rating: 4,
      avatar: "https://i.pravatar.cc/150?u=2",
      likes: 8,
      dislikes: 0,
      isLike: true,
      isDislike: false,
    },
    {
      id: 103,
      name: "John Doe",
      date: "Oct 18, 2023",
      content: "Not bad, but could be better.",
      rating: 3,
      avatar: "https://i.pravatar.cc/150?u=3",
      likes: 5,
      dislikes: 2,
      isLike: false,
      isDislike: true,
    },
    {
      id: 104,
      name: "Mona Hassan",
      date: "Oct 20, 2023",
      content: "Excellent service and friendly support.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=4",
      likes: 20,
      dislikes: 0,
      isLike: false,
      isDislike: false,
    },
    {
      id: 105,
      name: "Omar Khaled",
      date: "Oct 22, 2023",
      content: "The material is very comfortable.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=5",
      likes: 15,
      dislikes: 1,
      isLike: false,
      isDislike: false,
    },
    {
      id: 106,
      name: "Layla Ibrahem",
      date: "Oct 25, 2023",
      content: "Worth the price. Buying again!",
      rating: 4,
      avatar: "https://i.pravatar.cc/150?u=6",
      likes: 10,
      dislikes: 0,
      isLike: false,
      isDislike: false,
    },
    {
      id: 107,
      name: "Youssef Zeyad",
      date: "Oct 28, 2023",
      content: "Standard quality, nothing special.",
      rating: 3,
      avatar: "https://i.pravatar.cc/150?u=7",
      likes: 3,
      dislikes: 1,
      isLike: false,
      isDislike: false,
    },
    {
      id: 108,
      name: "Nouran Ali",
      date: "Nov 01, 2023",
      content: "Amazing experience from start to finish.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=8",
      likes: 25,
      dislikes: 0,
      isLike: true,
      isDislike: false,
    },
  ];

  useEffect(() => {
    const apiMapped =
      apiReviews?.map((rev: any) => ({
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
      })) || [];

    // Combine and duplicate fake data to ensure scrolling effect
    const totalReviews = [...apiMapped];
    for (let i = 0; i < 5; i++) {
      totalReviews.push(...fakeReviews);
    }

    setReviews(totalReviews);
  }, [apiReviews, loading]);

  const handleLike = async (reviewId: number) => {
    setReviews((prev) =>
      prev.map((r) =>
        r.id === reviewId
          ? {
              ...r,
              isLike: !r.isLike,
              likes: !r.isLike ? r.likes + 1 : r.likes - 1,
              isDislike: !r.isLike ? false : r.isDislike,
              dislikes: !r.isLike && r.isDislike ? r.dislikes - 1 : r.dislikes,
            }
          : r,
      ),
    );
    try {
      await toggleLikeToReview(reviewId, true);
    } catch (err: any) {
      showToast(err.message || "Action failed", "error");
    }
  };

  const handleDislike = async (reviewId: number) => {
    setReviews((prev) =>
      prev.map((r) =>
        r.id === reviewId
          ? {
              ...r,
              isDislike: !r.isDislike,
              dislikes: !r.isDislike ? r.dislikes + 1 : r.dislikes - 1,
              isLike: !r.isDislike ? false : r.isLike,
              likes: !r.isDislike && r.isLike ? r.likes - 1 : r.likes,
            }
          : r,
      ),
    );
    try {
      await toggleDisLikeToReview(reviewId, true);
    } catch (err: any) {
      showToast(err.message || "Action failed", "error");
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "visible",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "nowrap",
          gap: 4,
          alignItems: "center",
          py: 8,
          px: 2,
          overflowX: "auto",
          "&::-webkit-scrollbar": { display: "none" },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {loading
          ? [1, 2, 3, 4].map((i) => (
              <Box key={i} sx={{ flexShrink: 0 }}>
                <Skeleton
                  variant="rectangular"
                  width={318}
                  height={288}
                  sx={{ borderRadius: "8px" }}
                />
              </Box>
            ))
          : reviews.map((review, index) => (
              <Box
                key={`${review.id}-${index}`}
                onClick={() => setActiveIndex(index)}
                sx={{
                  flexShrink: 0,
                  cursor: "pointer",
                  opacity: activeIndex === index ? 1 : 0.7,
                  transform:
                    activeIndex === index
                      ? "translateY(-25px) scale(1.05)"
                      : "translateY(0) scale(1)",
                  transition:
                    "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
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
            ))}
      </Box>

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
