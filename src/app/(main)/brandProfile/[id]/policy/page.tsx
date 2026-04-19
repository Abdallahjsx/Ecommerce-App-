"use client";

import { useBrandPolicy } from "@/features/brandProfile/hooks/useBrandPolicy";
import { Box, Typography, Skeleton, Stack, Paper } from "@mui/material";
import React from "react";
import { useParams } from "next/navigation";

export default function Policy() {
  const params = useParams();
  const id = Number(params.id);
  const { data, loading, error } = useBrandPolicy(id);

  if (error) {
    return (
      <Box sx={{ py: 4, textAlign: "center" }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 2 }}>
      {loading ? (
        <Stack spacing={2}>
          <Skeleton variant="rectangular" height={100} sx={{ borderRadius: "12px" }} />
          <Skeleton variant="rectangular" height={200} sx={{ borderRadius: "12px" }} />
        </Stack>
      ) : (
        <Stack spacing={3}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: "16px",
              backgroundColor: "white",
              border: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            <Typography variant="h5" color="primary" sx={{ mb: 2, fontWeight: 700 }}>
              Brand Policy
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#4B5563",
                lineHeight: 1.8,
                whiteSpace: "pre-wrap",
              }}
            >
              {data?.policyDescription || "No policy details provided by this brand."}
            </Typography>
          </Paper>

          {data?.returnPolicy && (
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: "16px",
                backgroundColor: "white",
                border: "1px solid rgba(0,0,0,0.05)",
              }}
            >
              <Typography variant="h6" color="primary" sx={{ mb: 1, fontWeight: 700 }}>
                Return Policy
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#4B5563",
                  lineHeight: 1.8,
                }}
              >
                {data.returnPolicy}
              </Typography>
            </Paper>
          )}
        </Stack>
      )}
    </Box>
  );
}
