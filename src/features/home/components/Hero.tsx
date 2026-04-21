"use client";

import { Box, Typography, Stack, Container } from "@mui/material";
import Gradient_Button from "@/components/ui/gradientButton/Gradient_Button";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "800px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        px: { xs: 2 },
        backgroundImage: 'url("/assets/images/heroImage.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay for Text Readability */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(90deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.6) 40%, rgba(255, 255, 255, 0) 100%)",
          zIndex: 1,
        }}
      />

      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            width: { xs: "100%", md: "660px" },
            height: { xs: "auto", md: "540px" },
            maxWidth: "800px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "16px",
            textAlign: "left",
          }}
        >
          {/* Label */}
          <Typography
            variant="overline"
            sx={{
              fontFamily: "var(--font-plus-jakarta)",
              fontWeight: 600,
              fontSize: "14px",
              color: "#47C0D2",
              mb: -1,
            }}
          >
            NEW SEASON ARRIVAL
          </Typography>

          {/* Header */}
          <Typography
            variant="h1"
            sx={{
              fontFamily: "var(--font-manrope)",
              fontWeight: 400,
              fontSize: { xs: "48px", md: "90px" },
              color: "#1B2351",
              mb: 0,
            }}
          >
            All Your <br />
            <span style={{ color: "#47C0D2" }}>Favorites</span> <br />
            In One Place
          </Typography>

          {/* Subtext */}
          <Typography
            variant="body1"
            sx={{
              fontFamily: "var(--font-plus-jakarta)",
              fontWeight: 400,
              fontSize: "18px",
              color: "rgba(70, 70, 79, 1)",
              maxWidth: "100%",
            }}
          >
            Discover the digital boutique where high-end fashion meets social
            discovery. Curated by experts, chosen by you.
          </Typography>

          <Box sx={{ mt: 2 }}>
            <Gradient_Button
              variant="primary"
              sx={{
                width: "280px",
                height: "56px",
                px: 4,
                fontSize: "14px",
                fontWeight: 600,
                borderRadius: "4px",
                backgroundColor: "#1B2351",
                backgroundImage: "none",
                color: "#FFFFFF",
                letterSpacing: "1px",
                textTransform: "uppercase",
                mx: 0,
                "&:hover": {
                  backgroundColor: "#2a356b",
                },
              }}
              onClick={() => router.push("/shop")}
            >
              Explore Collection
            </Gradient_Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
