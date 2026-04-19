"use client";

import { Box, Typography, Stack, IconButton, Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import RatingStars from "../../../components/ui/ratingStars/RatingStars";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { Review } from "../hooks/useBrandReviews";
import { useState } from "react";
import { toggleLikeToReview, toggleDisLikeToReview } from "../services";

interface ReviewItemProps {
  review: Review;
}

export default function ReviewItem({ review }: ReviewItemProps) {
  const theme = useTheme();
  const [likes, setLikes] = useState(review.numOfLikes);
  const [dislikes, setDislikes] = useState(review.numOfDislikes);
  const [isLiked, setIsLiked] = useState(review.isLike);
  const [isDisliked, setIsDisliked] = useState(review.isDislike);

  const handleLike = async () => {
    try {
      const nextState = !isLiked;
      await toggleLikeToReview(review.reviewId, nextState);
      setIsLiked(nextState);
      setLikes(prev => nextState ? prev + 1 : prev - 1);
      if (nextState && isDisliked) {
        setIsDisliked(false);
        setDislikes(prev => prev - 1);
      }
    } catch (err) {
      console.error("Failed to like review", err);
    }
  };

  const handleDislike = async () => {
    try {
      const nextState = !isDisliked;
      await toggleDisLikeToReview(review.reviewId, nextState);
      setIsDisliked(nextState);
      setDislikes(prev => nextState ? prev + 1 : prev - 1);
      if (nextState && isLiked) {
        setIsLiked(false);
        setLikes(prev => prev - 1);
      }
    } catch (err) {
      console.error("Failed to dislike review", err);
    }
  };

  return (
    <Box
      sx={{
        p: 3,
        borderRadius: "16px",
        backgroundColor: "white",
        border: "1px solid rgba(0,0,0,0.05)",
        width: "100%",
      }}
    >
      <Stack direction="row" spacing={2} alignItems="flex-start">
        <Avatar
          src={review.userImageUrl}
          alt={review.userDisplayName}
          sx={{ width: 48, height: 48 }}
        />
        <Box sx={{ flex: 1 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "#1B2351" }}>
              {review.userDisplayName}
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              {new Date(review.createdAt).toLocaleDateString()}
            </Typography>
          </Stack>
          
          <Box sx={{ my: 1 }}>
            <RatingStars rating={review.rating} />
          </Box>

          <Typography
            variant="body2"
            sx={{
              color: "#4B5563",
              lineHeight: 1.6,
              mt: 1.5,
              mb: 2,
            }}
          >
            {review.comment}
          </Typography>

          <Stack direction="row" spacing={3}>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <IconButton size="small" onClick={handleLike} color={isLiked ? "primary" : "default"}>
                <ThumbUpIcon sx={{ fontSize: 18 }} />
              </IconButton>
              <Typography variant="caption" sx={{ fontWeight: 600 }}>
                {likes}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <IconButton size="small" onClick={handleDislike} color={isDisliked ? "error" : "default"}>
                <ThumbDownIcon sx={{ fontSize: 18 }} />
              </IconButton>
              <Typography variant="caption" sx={{ fontWeight: 600 }}>
                {dislikes}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
