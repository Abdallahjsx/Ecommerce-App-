"use client";

import { Box, Typography, Stack, Container, Skeleton } from "@mui/material";
import ReelCard from "../../brandProfile/components/ReelCard";
import { useBrandReels } from "../../brandProfile/hooks/useBrandReels";

export default function ReelsSection() {
  const { data: reels, loading, error } = useBrandReels(1); // Using Brand 1 as placeholder for featured reels

  return (
    <Box sx={{ py: 8, backgroundColor: "#000B2A" }}>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: 6 }}
        >
          <Box>
            <Typography variant="caption" sx={{ color: "#47C0D2", fontWeight: 700, letterSpacing: "1px" }}>
              DISCOVER NEW STYLES
            </Typography>
            <Typography variant="h3" sx={{ color: "white", fontWeight: 900 }}>
              Watch Reels
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "#47C0D2",
              fontWeight: 700,
              textDecoration: "underline",
              cursor: "pointer",
              "&:hover": { opacity: 0.8 }
            }}
          >
            VIEW ALL REELS
          </Typography>
        </Stack>

        <Stack
          direction="row"
          spacing={3}
          sx={{
            overflowX: "auto",
            pb: 2,
            "&::-webkit-scrollbar": { display: "none" },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <Box key={i} sx={{ minWidth: "280px" }}>
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={420}
                  sx={{ borderRadius: "16px", bgcolor: "rgba(255,255,255,0.05)" }}
                />
              </Box>
            ))
          ) : error ? (
            <Typography color="error">Failed to load reels</Typography>
          ) : (
            reels.map((reel) => (
              <Box key={reel.reelId} sx={{ minWidth: "280px" }}>
                <ReelCard
                  title={reel.title}
                  thumbnailUrl={reel.thumbnailUrl}
                  numOfWatches={reel.numOfWatches}
                  numOfLikes={reel.numOfLikes}
                />
              </Box>
            ))
          )}
        </Stack>
      </Container>
    </Box>
  );
}
