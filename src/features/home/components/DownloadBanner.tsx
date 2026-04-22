"use client";

import {
  Box,
  Typography,
  Stack,
  Container,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { AppleIcon, PlayIcon } from "./icons/icons";

export default function DownloadBanner() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#000B2A",
            borderRadius: { xs: "32px", md: "48px" },
            overflow: { xs: "visible", md: "hidden" },
            position: "relative",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            p: { xs: 4, md: 8 },
            gap: { xs: 6, md: 0 },
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
                sx={{
                  width: 18,
                  height: 18,
                  filter:
                    "invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)",
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  color: "#47C0D2",
                  fontWeight: 800,

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
                fontWeight: 400,
                fontSize: { xs: "36px", md: "48px" },
                lineHeight: { xs: "40px", md: "48px" },
                fontFamily: "var(--font-manrope)",
                mt: 3,
                letterSpacing: "-1.2px",
              }}
            >
              Bring the{" "}
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(90deg, #1B2351 0%, #47C0D2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline",
                  fontWeight: 400,
                  fontSize: "inherit",
                  lineHeight: "100%",
                  letterSpacing: "0px",
                }}
              >
                Alluvo Reels
              </Box>{" "}
              Experience To <br />
              Your Phone
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "18px",
                fontWeight: 400,

                my: 6,
                maxWidth: "480px",
              }}
            >
              Shop smarter with our immersive video feed. Discover new products
              through creators you love and checkout in seconds.
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
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0px 12px 24px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <AppleIcon />
                <Box>
                  <Typography
                    sx={{
                      color: "#040C3C",
                      fontSize: "10px",
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    DOWNLOAD ON THE
                  </Typography>
                  <Typography
                    sx={{
                      color: "#040C3C",
                      fontSize: "20px",
                      fontWeight: 800,
                      lineHeight: 1.2,
                    }}
                  >
                    App Store
                  </Typography>
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
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0px 12px 24px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <PlayIcon />
                <Box>
                  <Typography
                    sx={{
                      color: "#040C3C",
                      fontSize: "10px",
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    GET IT ON
                  </Typography>
                  <Typography
                    sx={{
                      color: "#040C3C",
                      fontSize: "20px",
                      fontWeight: 800,
                      lineHeight: 1.2,
                    }}
                  >
                    Google Play
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Box>

          {/* Phone Images Mockup */}
          <Box
            sx={{
              position: { xs: "relative", md: "absolute" },
              right: { xs: 0, md: 20, lg: -10 },
              bottom: { xs: -20, md: -60, lg: 20 },
              width: { xs: "100%", md: "600px" },
              height: { xs: "400px", md: "500px" },
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
                "&:hover": { transform: "scale(1.05) rotate(-2deg)" },
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
