"use client";

import { Box, Typography, Avatar, Stack, Grid } from "@mui/material";
import { StarIcon, LikeIcon, DislikeIcon } from "../../../features/brandProfile/Icons";
import React from "react";

interface ReviewCardProps {
  name: string;
  date: string;
  content: string;
  rating: number;
  avatar?: string;
  likes?: number;
  dislikes?: number;
  isLike?: boolean;
  isDislike?: boolean;
  isActive?: boolean;
  onLike?: () => void;
  onDislike?: () => void;
}

export default function ReviewCard({
  name,
  date,
  content,
  rating,
  avatar,
  likes,
  dislikes,
  isLike = false,
  isDislike = false,
  isActive = false,
  onLike,
  onDislike,
}: ReviewCardProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#F4F3F0",
        borderRadius: "8px",
        p: "32px 16px",
        width: "318px",
        height: "288px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "all 0.3s ease",
        transform: isActive ? "scale(1.08) translateY(-10px)" : "scale(1)",
        boxShadow: isActive
          ? "0px 10px 30px rgba(0, 0, 0, 0.1)"
          : "0px 4px 12px rgba(0, 0, 0, 0.03)",
        border: isActive
          ? "1px solid rgba(27, 35, 81, 0.2)"
          : "1px solid rgba(27, 35, 81, 0.05)",
        position: "relative",
        boxSizing: "border-box",
        direction: "ltr",
        textAlign: "left",
      }}
    >
      <Box>
        {/* Rating */}
        <Stack direction="row" spacing={0.5} sx={{ mb: 2 }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon
              key={star}
              fill={star <= rating ? "#47C0D2" : "#D1D5DB"}
              sx={{ width: 16, height: 16 }}
            />
          ))}
        </Stack>

        {/* Content */}
        <Typography
          sx={{
            color: "#1B2351",
            fontSize: isActive ? "16px" : "14px",
            lineHeight: 1.6,
            fontWeight: 500,
            mb: 3,
            display: "-webkit-box",
            WebkitLineClamp: 5,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {content}
        </Typography>
      </Box>

      {/* Footer */}
      <Stack
        direction="row"
        alignItems="flex-end"
        justifyContent="space-between"
        sx={{ mt: "auto" }}
      >
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Avatar
            src={avatar}
            sx={{
              width: 40,
              height: 40,
              border: "2px solid white",
              boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
            }}
          />
          <Box>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#1B2351",
                lineHeight: 1.2,
              }}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                fontSize: "11px",
                color: "rgba(27, 35, 81, 0.5)",
                fontWeight: 500,
              }}
            >
              {date}
            </Typography>
          </Box>
        </Stack>

        {(likes !== undefined || dislikes !== undefined) && (
          <Stack direction="row" spacing={2}>
            <Stack
              direction="row"
              spacing={0.5}
              alignItems="center"
              onClick={(e) => {
                e.stopPropagation();
                onLike?.();
              }}
              sx={{ cursor: "pointer" }}
            >
              <Typography
                sx={{
                  fontSize: "11px",
                  color: isLike ? "#47C0D2" : "rgba(27, 35, 81, 0.6)",
                  fontWeight: 600,
                }}
              >
                {likes || 0}
              </Typography>
              <LikeIcon
                sx={{
                  width: 14,
                  height: 14,
                  "& path": {
                    stroke: isLike ? "#47C0D2" : "rgba(27, 35, 81, 0.4)",
                    fill: isLike ? "#47C0D2" : "transparent",
                  },
                }}
              />
            </Stack>
            <Stack
              direction="row"
              spacing={0.5}
              alignItems="center"
              onClick={(e) => {
                e.stopPropagation();
                onDislike?.();
              }}
              sx={{ cursor: "pointer" }}
            >
              <Typography
                sx={{
                  fontSize: "11px",
                  color: isDislike ? "#CC0000" : "rgba(27, 35, 81, 0.6)",
                  fontWeight: 600,
                }}
              >
                {dislikes || 0}
              </Typography>
              <DislikeIcon
                sx={{
                  width: 14,
                  height: 14,
                  "& path": {
                    stroke: isDislike ? "#CC0000" : "rgba(27, 35, 81, 0.4)",
                    fill: isDislike ? "#CC0000" : "transparent",
                  },
                }}
              />
            </Stack>
          </Stack>
        )}
      </Stack>
    </Box>
  );
}
