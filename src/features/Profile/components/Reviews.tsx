"use client";

import { Box, Typography, Stack, Paper, IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import StarRateIcon from "@mui/icons-material/StarRate";

const MyReviewCard = ({ id, product, date, rating, content }: { id: number; product: string; date: string; rating: number; content: string }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        mb: 2,
        borderRadius: "16px",
        backgroundColor: "#F0F9FA",
        border: "1px solid rgba(71, 192, 210, 0.1)",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 1 }}>
        <Box>
          <Typography variant="body1" fontWeight={700} color="primary">
            {product}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            Reviewed on {date}
          </Typography>
        </Box>
        <IconButton size="small" sx={{ color: "#EF4444" }}>
          <DeleteOutlineIcon fontSize="small" />
        </IconButton>
      </Stack>

      <Stack direction="row" spacing={0.5} sx={{ mb: 1.5 }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <StarRateIcon
            key={star}
            sx={{
              fontSize: 20,
              color: star <= rating ? "#47C0D2" : "#D1D5DB",
            }}
          />
        ))}
      </Stack>

      <Typography variant="body2" sx={{ color: "#1B2351", lineHeight: 1.6 }}>
        {content}
      </Typography>
    </Paper>
  );
};

const Reviews = () => {
  const myReviews = [
    {
      id: 1,
      product: "Alluvo Premium Mask",
      date: "April 10, 2026",
      rating: 5,
      content: "This product changed my skin routine forever! The texture is amazing and I can see real results after just a week.",
    },
    {
      id: 2,
      product: "Skin Glow Serum",
      date: "March 22, 2026",
      rating: 4,
      content: "Very good serum, but the delivery took a bit longer than expected. The product itself is high quality though.",
    },
  ];

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 2, px: { xs: 2, sm: 0 } }}>
      <Typography variant="h6" color="primary" fontWeight={700} sx={{ mb: 3 }}>
        My Reviews
      </Typography>
      
      {myReviews.map((review) => (
        <MyReviewCard key={review.id} {...review} />
      ))}
    </Box>
  );
};

export default Reviews;