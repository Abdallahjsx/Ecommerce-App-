"use client";

import { Box, Typography, Stack } from "@mui/material";
import { EyeIcon, HeartIcon } from "../Icons";

interface ReelCardProps {
  title: string;
  thumbnailUrl: string;
  views: number;
  likes: number;
}

export default function ReelCard({
  title,
  thumbnailUrl,
  views,
  likes,
}: ReelCardProps) {
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: "16px",
        overflow: "hidden",
        width: "100%",
        pt: "150%",
        backgroundColor: "#f0f0f0",
        cursor: "pointer",
        "&:hover .overlay": {
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <Box
        component="img"
        src={thumbnailUrl}
        alt={title}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Overlay for stats */}
      <Box
        className="overlay"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          p: 2,
          background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
          transition: "background-color 0.3s ease",
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <Stack direction="row" spacing={0.5} alignItems="center">
            <EyeIcon sx={{ color: "white", fontSize: 16 }} />
            <Typography
              variant="body2"
              sx={{ color: "white", fontWeight: 600 }}
            >
              {views}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <HeartIcon
              sx={{
                width: 16,
                height: 16,
                "& path": { fill: "white", stroke: "white" },
              }}
              fill="white"
            />
            <Typography
              variant="body2"
              sx={{ color: "white", fontWeight: 600 }}
            >
              {likes}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
