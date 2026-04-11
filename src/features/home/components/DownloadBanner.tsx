"use client";

import { Box, Typography, Stack, Container } from "@mui/material";
import Image from "next/image";

export default function DownloadBanner() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#000B2A",
            borderRadius: "48px",
            overflow: "hidden",
            position: "relative",
            minHeight: { xs: "600px", md: "520px" },
            display: "flex",
            alignItems: "center",
            p: { xs: 4, md: 8 },
          }}
        >
          {/* Text Content */}
          <Box sx={{ maxWidth: { xs: "100%", md: "600px" }, zIndex: 2 }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                px: 2,
                py: 1,
                borderRadius: "12px",
                backgroundColor: "rgba(71, 192, 210, 0.1)",
                border: "1px solid rgba(71, 192, 210, 0.2)",
                mb: 4,
              }}
            >
              <Box
                component="img"
                src="/assets/icons/Shop.svg"
                sx={{ width: 18, height: 18, filter: "invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)" }}
              />
              <Typography
                variant="caption"
                sx={{
                  color: "#47C0D2",
                  fontWeight: 800,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  fontSize: "11px",
                }}
              >
                New App Experience
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontWeight: 800,
                fontSize: { xs: "36px", md: "56px" },
                lineHeight: 1.1,
                mb: 3,
                letterSpacing: "-1px",
              }}
            >
              Bring the <Typography component="span" sx={{ fontSize: "inherit", fontWeight: "inherit", color: "#47C0D2" }}>Alluvo Reels</Typography> Experience To Your Phone
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "18px",
                lineHeight: 1.6,
                mb: 6,
                maxWidth: "480px",
              }}
            >
              Shop smarter with our immersive video feed. Discover new products through creators you love and checkout in seconds.
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
              {/* App Store Button */}
              <Box
                sx={{
                  backgroundColor: "white",
                  px: 3,
                  py: 1.5,
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": { transform: "translateY(-4px)", boxShadow: "0px 12px 24px rgba(0,0,0,0.2)" }
                }}
              >
                <Box component="img" src="/assets/icons/facebook-icon.svg" sx={{ width: 32, height: 32, filter: "brightness(0)" }} /> {/* Placeholder icon */}
                <Box>
                  <Typography sx={{ color: "black", fontSize: "10px", fontWeight: 700, lineHeight: 1 }}>DOWNLOAD ON THE</Typography>
                  <Typography sx={{ color: "black", fontSize: "20px", fontWeight: 800, lineHeight: 1.2 }}>App Store</Typography>
                </Box>
              </Box>

              {/* Google Play Button */}
              <Box
                sx={{
                  backgroundColor: "white",
                  px: 3,
                  py: 1.5,
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": { transform: "translateY(-4px)", boxShadow: "0px 12px 24px rgba(0,0,0,0.2)" }
                }}
              >
                <Box component="img" src="/assets/icons/web-icon.svg" sx={{ width: 32, height: 32 }} /> {/* Placeholder icon */}
                <Box>
                  <Typography sx={{ color: "black", fontSize: "10px", fontWeight: 700, lineHeight: 1 }}>GET IT ON</Typography>
                  <Typography sx={{ color: "black", fontSize: "20px", fontWeight: 800, lineHeight: 1.2 }}>Google Play</Typography>
                </Box>
              </Box>
            </Stack>
          </Box>

          {/* Phone Images Mockup */}
          <Box
            sx={{
              position: "absolute",
              right: { xs: -20, md: 20, lg: -10 },
              bottom: { xs: -50, md: -60, lg: 20 },
              width: { xs: "350px", md: "600px" },
              height: { xs: "450px", md: "500px" },
              zIndex: 1,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                transition: "all 0.5s ease",
                "&:hover": { transform: "scale(1.05) rotate(-2deg)" }
              }}
            >
              <Image
                src="/assets/images/image.png"
                alt="Alluvo Reels App"
                fill
                style={{
                  objectFit: "contain",
                  filter: "drop-shadow(0px 20px 40px rgba(0,0,0,0.4))",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
