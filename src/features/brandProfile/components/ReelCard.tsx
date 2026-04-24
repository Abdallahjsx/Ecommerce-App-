"use client";

import { Box, Typography, Stack, Avatar } from "@mui/material";


interface ReelCardProps {
  title: string;
  thumbnailUrl: string;
  numOfWatches: number;
  numOfLikes: number;
  brandName?: string;
  brandLogo?: string;
  description?: string;
}

export default function ReelCard({
  title,
  thumbnailUrl,
  numOfWatches,
  numOfLikes,
  brandName,
  brandLogo,
  description,
}: ReelCardProps) {
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: "24px", 
        overflow: "hidden",
        width: "100%",
        pt: "160%", 
        backgroundColor: "#0F172A",
        cursor: "pointer",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.02)",
          "& .overlay": {
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          },
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

      {/* Brand Header Overlay */}
      {(brandName || brandLogo) && (
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            zIndex: 2,
            backgroundColor: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(8px)",
            borderRadius: "20px",
            px: 1.5,
            py: 0.5,
            border: "1px solid rgba(255,255,255,0.2)"
          }}
        >
          <Avatar 
            src={brandLogo} 
            sx={{ width: 18, height: 18, fontSize: "10px", bgcolor: "white", color: "#000" }}
          >
            {brandName?.charAt(0)}
          </Avatar>
          <Typography variant="caption" sx={{ color: "white", fontWeight: 700, fontSize: "10px" }}>
            {brandName}
          </Typography>
        </Stack>
      )}

      {/* Bottom Content Overlay */}
      <Box
        className="overlay"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          pt: 1, 
          pb: 3,
          px: 2,
          background: "linear-gradient(transparent, rgba(0,0,0,0.9))",
          transition: "background-color 0.3s ease",
        }}
      >
        <Stack spacing={1}>
          {/* Title & Description */}
          <Box>
            <Typography
              sx={{
                color: "white",
                fontWeight: 800,
                fontSize: "14px",
                lineHeight: 1.2,
                mb: 0.5
              }}
            >
              {title}
            </Typography>
            {description && (
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "11px",
                  fontWeight: 500,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  lineHeight: 1.3
                }}
              >
                {description}
              </Typography>
            )}
          </Box>

         
        </Stack>
      </Box>
    </Box>
  );
}
