"use client";

import { Grid, Box, Skeleton, Typography } from "@mui/material";
import React from "react";
import { useBrandReels } from "@/features/brandProfile/hooks/useBrandReels";
import ReelCard from "@/features/brandProfile/components/ReelCard";
import { useParams } from "next/navigation";

export default function ReelsPage() {
  const params = useParams();
  const id = Number(params.id);
  const { data: reels, loading, error } = useBrandReels(id);

  if (error) {
    return (
      <Box sx={{ py: 4, textAlign: "center" }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 4 }}>
      <Grid container spacing={3}>
        {loading
          ? Array.from({ length: 15 }).map((_, i) => (
              <Grid key={i} size={{ xs: 4, sm: 6, md: 4, lg: 3, xl: 2.4 }}>
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  sx={{ pt: "150%", borderRadius: "12px" }}
                />
              </Grid>
            ))
          : reels.map((reel: any) => (
              <Grid
                key={reel.reelId}
                size={{ xs: 4, sm: 6, md: 4, lg: 3, xl: 2.4 }}
              >
                <ReelCard
                  title={reel.title}
                  thumbnailUrl={reel.thumbnailUrl}
                  numOfWatches={reel.numOfWatches}
                  numOfLikes={reel.numOfLikes}
                />
              </Grid>
            ))}
      </Grid>
    </Box>
  );
}
