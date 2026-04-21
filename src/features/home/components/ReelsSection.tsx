"use client";

import { Box, Typography, Stack, Container, Skeleton } from "@mui/material";
import ReelCard from "../../brandProfile/components/ReelCard";
import { useBrandReels } from "../../brandProfile/hooks/useBrandReels";

export default function ReelsSection() {
  const { data: reels, loading, error } = useBrandReels(1); // Using Brand 1 as placeholder for featured reels

  return (
    <Box sx={{ py: 12, backgroundColor: "#000B2A", overflow: "hidden" }}>
      <Container maxWidth="xl">
        <Stack
          direction="row"
          alignItems="flex-end"
          justifyContent="space-between"
          sx={{ mb: 10 }}
        >
          <Box>
            <Typography variant="caption" sx={{ color: "#47C0D2", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
              DISCOVER NEW STYLES
            </Typography>
            <Typography variant="h3" sx={{ color: "white", fontWeight: 900, fontSize: { xs: "36px", md: "48px" }, mt: 1 }}>
              Watch Reels
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "#47C0D2",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "1px",
              cursor: "pointer",
              "&:hover": { opacity: 0.8 },
              mb: 1
            }}
          >
            VIEW ALL REELS
          </Typography>
        </Stack>

        <Stack
          direction="row"
          spacing={4}
          sx={{
            overflowX: "auto",
            pb: 12, // Extra padding for staggered offset
            "&::-webkit-scrollbar": { display: "none" },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            alignItems: "flex-start",
          }}
        >
          {loading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <Box 
                key={i} 
                sx={{ 
                  minWidth: "280px",
                  transform: i % 2 === 1 ? "translateY(60px)" : "none"
                }}
              >
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={450}
                  sx={{ borderRadius: "24px", bgcolor: "rgba(255,255,255,0.05)" }}
                />
              </Box>
            ))
          ) : error ? (
            <Typography color="error">Failed to load reels</Typography>
          ) : (
            reels.map((reel, index) => (
              <Box 
                key={reel.reelId} 
                sx={{ 
                  minWidth: "280px",
                  // Staggered layout: every second item is moved down
                  transform: index % 2 === 1 ? "translateY(60px)" : "none",
                  transition: "transform 0.5s ease"
                }}
              >
                <ReelCard
                  title={reel.title}
                  thumbnailUrl={reel.thumbnailUrl}
                  numOfWatches={reel.numOfWatches}
                  numOfLikes={reel.numOfLikes}
                  brandName="NIKE"
                  brandLogo="/assets/images/brands/nike.png"
                  description="Experience the next level of performance and comfort with our latest collection."
                />
              </Box>
            ))
          )}
        </Stack>
      </Container>
    </Box>
  );
}



