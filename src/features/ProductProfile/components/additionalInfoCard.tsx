import { Box, Typography, useTheme } from "@mui/material";
import { ProductDetails } from "../types";
export default function InfoColumn({ product }: { product: ProductDetails }) {
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