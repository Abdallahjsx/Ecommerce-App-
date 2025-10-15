"use client";

import { Box, Typography } from "@mui/material";
import NavBar from "@/components/layout/navbar/NavBar";
import Footer from "@/components/layout/footer/Footer";
import BackgroundShapeImage from "@/components/ui/backgroundShapeImage/BackgroundShapeImage";
import { useTheme } from "@mui/material";
export default function NotFoundPage() {
  const t = useTheme();
  return (
    <>
      <NavBar />
      <main
        style={{
          height: "100%",
          backgroundColor: t.tokens.backgroundColors.main,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* ===== NAVBAR ===== */}
        {/* ===== BACKGROUND SHAPE ===== */}
        <BackgroundShapeImage /> {/* ✅ الشكل الجديد هنا */}
        {/* ===== MAIN CONTENT ===== */}
        <Box
          sx={{
            position: "relative",
            flex: 1,
            margin: { xs: "100px auto", md: "180px auto" },
            width: { xs: "80%", sm: "400px", md: "498px" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          {/* ===== IMAGE CIRCLE ===== */}
          <Box
            sx={{
              width: { xs: "280px", sm: "350px", md: "498px" },
              height: { xs: "280px", sm: "350px", md: "498px" },
              borderRadius: "50%",
              padding: "2px",
              background: "linear-gradient(180deg, #47C0D2 0%, #1B2351 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 3,
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/assets/images/NOT-Found.png"
                alt="Not Found"
                width={498}
                height={498}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>

          {/* ===== TEXTS ===== */}
          <Typography
            sx={{
              fontFamily: "Cinzel Decorative",
              fontWeight: 700,
              fontSize: { xs: "28px", md: "36px" },
              lineHeight: "48px",
              color: "#111827",
            }}
          >
            Oops!
          </Typography>

          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: "24px",
              color: "#212C2B",
              mt: 1,
              maxWidth: "498px",
            }}
          >
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </Typography>
        </Box>
        {/* ===== FOOTER ===== */}
      </main>
      <Footer />
    </>
  );
}
