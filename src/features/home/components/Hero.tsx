"use client";

import { Box, Typography, Stack, Container } from "@mui/material";
import Gradient_Button from "@/components/ui/gradientButton/Gradient_Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "auto", md: "600px" },
        backgroundColor: "#F7F8F7",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 0 },
      }}
    >
      {/* Background Shapes */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          background: "linear-gradient(225deg, rgba(71, 192, 210, 0.1) 0%, rgba(27, 35, 81, 0.05) 100%)",
          zIndex: 0,
          clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Text Content */}
          <Box sx={{ maxWidth: { xs: "100%", md: "550px" }, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "40px", md: "80px" },
                fontWeight: 900,
                color: "#1B2351",
                lineHeight: 1.1,
                mb: 3,
                fontFamily: "inherit",
              }}
            >
              All Your <br />
              <Typography
                component="span"
                sx={{
                  fontSize: "inherit",
                  fontWeight: "inherit",
                  color: "#47C0D2",
                }}
              >
                Favorites
              </Typography> <br />
              In One Place
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                color: "rgba(27, 35, 81, 0.7)",
                fontSize: "18px",
                lineHeight: 1.6,
                mb: 6,
                maxWidth: "450px",
                mx: { xs: "auto", md: 0 },
              }}
            >
              Our platform turns shopping into an experience you’ll enjoy. Discover products you love, explore exciting offers.
            </Typography>

            <Gradient_Button
              variant="primary"
              sx={{
                height: "60px",
                px: 6,
                fontSize: "18px",
                fontWeight: 700,
                borderRadius: "12px",
                background: "linear-gradient(90deg, #1B2351 0%, #47C0D2 100%)",
                mb:2,
                mx: { xs: "auto", md: 0 },
              }}
              onClick={() => router.push("/shop")}
            >
              Explore More
            </Gradient_Button>
          </Box>

          {/* Hero Image */}
          <Box
            sx={{
              display:{xs:"none",md:"block"},
              width: { xs: "50%", md: "500px" },
              height: { xs: "300px", md: "500px" },
              position: "relative",
              borderRadius: "32px",
              overflow: "hidden",
              boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
            }}
          >
            <Image
              src="/assets/images/heroImage.jpeg"
              alt="Lifestyle"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
