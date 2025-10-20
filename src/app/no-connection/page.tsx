"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import NavBar from "@/components/layout/navbar/NavBar";
import Footer from "@/components/layout/footer/Footer";
import BackgroundShapeImage from "../../components/ui/BackgroundShape/BackgroundShapeImage";
 // ✅ نفس شكل الخلفية المستخدم في باقي الصفحات
import { useTheme } from "@mui/material";

export default function NoConnectionPage() {
  const t = useTheme();
  return (
    <>
      <NavBar />
      <main
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: t.tokens.backgroundColors.main,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        {/* ===== NAVBAR ===== */}
        {/* <NavBar /> */}
        {/* ===== BACKGROUND SHAPE ===== */}
        <BackgroundShapeImage /> {/* ✅ الشكل الخلفي */}
        {/* ===== MAIN CONTENT ===== */}
        <Box
          sx={{
            position: "relative",
            flex: 1,
            margin: { xs: "100px auto", md: "150px auto" },
            width: { xs: "80%", sm: "400px", md: "550px" },
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
              width: { xs: "260px", sm: "320px", md: "431px" }, // ✅ متجاوبة
              height: { xs: "260px", sm: "320px", md: "431px" }, // ✅ متجاوبة
              borderRadius: "50%", // ✅ دايرة كاملة
              padding: "2px",
              background: "linear-gradient(180deg, #47C0D2 0%, #1B2351 100%)", // ✅ الإطار المتدرج
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
                src="/assets/images/No-connection.png"
                alt="No Internet Connection"
                width={431}
                height={431}
                style={{
                  borderRadius: "50%",
                  objectFit: "contain",
                  width: "100%",
                  height: "100%",
                }}
                // priority
              />
            </Box>
          </Box>

          {/* ===== TEXTS ===== */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "550px",
              gap: "8px",
              opacity: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              marginTop: "-20px",
              px: { xs: 2, sm: 0 }, // ✅ Padding للموبايل
            }}
          >
            <Typography
              sx={{
                fontFamily: "Cinzel Decorative",
                fontWeight: 700,
                fontSize: { xs: "26px", sm: "32px", md: "36px" }, // ✅ متجاوب
                lineHeight: { xs: "36px", md: "48px" },
                color: "#111827",
                whiteSpace: "nowrap",
              }}
            >
              No internet Connection
            </Typography>

            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: { xs: "14px", sm: "15px", md: "16px" }, // ✅ متجاوب
                lineHeight: "24px",
                color: "#212C2B",
                maxWidth: "500px",
              }}
            >
              Please ensure you are connected to a stable Wi-Fi network or
              cellular data to continue.
            </Typography>
          </Box>
        </Box>
        {/* ===== FOOTER ===== */}
        {/* <Footer /> */}
      </main>
      <Footer />
    </>
  );
}
