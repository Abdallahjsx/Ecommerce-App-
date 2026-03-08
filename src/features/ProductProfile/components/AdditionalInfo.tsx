"use client";
import { Box, Typography, useTheme } from "@mui/material";
import AdditionalInfoCard from "./additionalInfoCard";
export default function AdditionalInfo() {
  const theme = useTheme();  
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1348px",
        borderBottom: `1px solid ${theme.tokens.separatingColors.border}`,
        mt: 4,
        pb: 4,
      }}
    >
      <Typography
        sx={{
          fontFamily: "var(--font-inter)",
          fontWeight: 700,
          fontSize: "24px",
          lineHeight: "140%",
          letterSpacing: "0.2px",
          color: theme.palette.primary.main,
        }}
      >
        Additional information
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: {
            xs: 4,
            md: 2,
          },
          mt: 2,
        }}
      >
        {/* Left Column with border */}
        <Box sx={{
            borderRight: {
              xs: "none",
              md: `1px solid ${theme.tokens.separatingColors.border}`,
            },
            borderBottom: {
              xs: `1px solid ${theme.tokens.separatingColors.border}`,
              md: "none",
            },
            pr: {
              xs: 0,
              md: 0.5,
            },
            pb: {
              xs: 3,
              md: 0,
            },
          }}>
          <AdditionalInfoCard />
        </Box>

        {/* Right Column */}
        <AdditionalInfoCard />
      </Box>
    </Box>
  );
}