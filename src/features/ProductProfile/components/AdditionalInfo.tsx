"use client";
import { Box, Typography, useTheme } from "@mui/material";

/* ========= Column Component ========= */
function InfoColumn() {
   const theme = useTheme(); 
  return (
    <Box
      sx={{
         width: {
          xs: "100%",
          md: 306,
        },
        display: "flex",
        flexDirection: "column",
          pr: {
          xs: 0,
          md: 2.5,
        },
      }}
    >
      {/* Sizing */}
      <Typography
        sx={{
          fontFamily: "var(--font-inter)",
          fontWeight: 600,
           fontSize: {
            xs: "18px",
            md: "20px",
          },
          lineHeight: "140%",
          letterSpacing: "0.2px",
          color: "#000",
        }}
      >
        Sizing
      </Typography>

      <Typography
        sx={{
          fontFamily: "var(--font-inter)",
          fontWeight: 400,
          fontSize: "15px",
          lineHeight: "140%",
          letterSpacing: "0.2px",
          mt: 1.5,
          whiteSpace: "nowrap",
        }}
      >
        Available Sizes: "39, 40, 41, 42, 43, 44" 
      </Typography>

      <Typography
        sx={{
          fontFamily: "var(--font-inter)",
          fontWeight: 400,
          fontSize: "15px",
          lineHeight: "140%",
          letterSpacing: "0.2px",
          mt: 0.5,
        }}
      >
        Heel Height: 3
      </Typography>

      {/* Material */}
      <Typography
        sx={{
          fontFamily: "Inter",
          fontWeight: 600,
          fontSize: {
            xs: "18px",
            md: "20px",
          },
          lineHeight: "140%",
          letterSpacing: "0.2px",
          mt: 2,
        }}
      >
        Material
      </Typography>

      {/* Waterproof */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mt: 1,
        }}
      >
        <Typography
          sx={{
            fontFamily: "var(--font-inter)",
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: "140%",
            letterSpacing: "0.2px",
          }}
        >
          Waterproof:
        </Typography>

        <Box
          component="img"
          src="/assets/icons/waterproof-check-icon.svg"
          alt="check"
          sx={{ width: 15, height: 15 }}
        />
      </Box>

      {/* Upper Material */}
      <Typography
        sx={{
          fontFamily: "var(--font-inter)",
          fontWeight: 400,
          fontSize: "15px",
          lineHeight: "140%",
          letterSpacing: "0.2px",
          mt: 1,
        }}
      >
        Upper Material: "Mesh Fabric"
      </Typography>

      {/* Inner bristle */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mt: 1,
        }}
      >
        <Typography
          sx={{
            fontFamily: "var(--font-inter)",
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: "140%",
            letterSpacing: "0.2px",
          }}
        >
          Inner bristle color:
        </Typography>

        <Box
          component="img"
          src="/assets/icons/inner-bristle-icon.svg"
          alt="inner bristle"
          sx={{ width: 15, height: 15 }}
        />
      </Box>
    </Box>
  );
}

/* ========= Main Component ========= */
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
          <InfoColumn />
        </Box>

        {/* Right Column */}
        <InfoColumn />
      </Box>
    </Box>
  );
}