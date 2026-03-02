"use client";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import RatingStars from "../ratingStars/RatingStars";

interface CommentProps {
  userName: string;
  rating: number;
  comment: string;
  date?: string;
}

export default function Comment({
  userName,
  rating,
  comment,
  date,
}: CommentProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        gap: { xs: 1.5, sm: 2 },
        width: "100%",
      }}
    >
      {/* Content */}
      <Box sx={{ flex: 1 }}>
        {/* User Name */}
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 700,
            fontSize: { xs: "14px", sm: "16px" },
            lineHeight: "20px",
            letterSpacing: "-0.16px",
            color: theme.tokens.mainColors.primary,
          }}
        >
          {userName}
        </Typography>

        {/* Rating */}
        <Box sx={{ mt: 1 }}>
          <RatingStars rating={rating} />
        </Box>

        {/* Comment Text */}
        <Typography
          sx={{
            mt: 1.5,
            fontFamily: "Inter",
            fontWeight: 700,
            fontSize: { xs: "14px", sm: "15px" },
            lineHeight: "140%",
            letterSpacing: "0.5px",
            color: theme.tokens.typographyColors.inactive,
          }}
        >
          {comment}
        </Typography>

        {/* Date */}
        <Typography
          sx={{
            mt: 1,
            fontSize: "12px",
            color: theme.tokens.typographyColors.inactive,
          }}
        >
            {date}
        </Typography>
      </Box>
    </Box>
  );
}