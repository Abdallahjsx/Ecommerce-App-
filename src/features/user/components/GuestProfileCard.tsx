"use client";
import Image from "next/image";
import { Box, Typography, useTheme } from "@mui/material";
import Gradient_Button from "@/components/ui/gradientButton/Gradient_Button";
import { useRouter } from "next/navigation";

const GuestProfileCard = () => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Box
      sx={{
        width: "407px",
        height: "384px",
        pt: "24px",
        pb: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: "16px",
        borderRadius: "16px",
        background: theme.tokens.backgroundColors.main,
        boxShadow: `
          0px 2px 4px -2px rgba(16, 24, 40, 0.1),
          0px 4px 6px -1px rgba(16, 24, 40, 0.1)
        `,
        overflow: "hidden",
        // "&::before": {
        //   content: '""',
        //   position: "absolute",
        //   inset: 0,
        //   borderRadius: "16px",
        //   padding: "1px",
        //   background: `linear-gradient(180deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
        //   WebkitMask:
        //     "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        //   mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        //   WebkitMaskComposite: "xor",
        //   maskComposite: "exclude",
        //   pointerEvents: "none",
        // },
        position: "absolute",
        right: "0px",
        top: "50px",
      }}
    >
      {/* 🔹 الخلفية */}
      <Image
        src="/assets/images/ellipse.png"
        alt="ellipse background"
        width={306}
        height={306}
        style={{
          position: "absolute",
          top: "-140px",
          right: "-60px",
          objectFit: "contain",
          opacity: 0.8,
          zIndex: 0,
        }}
      />

      {/* 🔹 المحتوى */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          px: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "16px",
        }}
      >
        {/* العنوان */}
        <Typography
          sx={{
            fontFamily: theme.typography.titleMedium.fontFamily,
            fontWeight: theme.typography.titleMedium.fontWeight,
            fontSize: theme.typography.titleMedium.fontSize,
            lineHeight: theme.typography.titleMedium.lineHeight,
            color: theme.tokens.typographyColors.title,
          }}
        >
          Sign In
        </Typography>

        {/* Sign Up Button */}
        <Gradient_Button variant="outline" size="authLarge" onClick={() => router.push("/register")} >
          Sign up
        </Gradient_Button>

        {/* Log In Button */}
        <Gradient_Button variant="primary" size="authLarge" onClick={() => router.push("/login")}>
          Log in
        </Gradient_Button>

        {/* 🔹 Separator Line */}
        <Box
          sx={{
            position: "absolute",
            bottom: "-40px",
            left: 0,
            width: "100%",
            height: "0px",
            border: `1px solid ${theme.tokens.separatingColors.separator}`,
            opacity: 1,
          }}
        />
      </Box>

      {/* 🔹 Personal Information */}
      <Box
        sx={{
          mt: "64px",
          mb: "-18px",
          px: "24px",
          py: "12px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <Box
          sx={{
            width: 24,
            height: 24,
            opacity: 1,
            flexShrink: 0,
          }}
        >
          <Image
            src="/assets/icons/person-icon.svg"
            alt="personal info"
            width={24}
            height={24}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Box>

        <Typography
          sx={{
            fontFamily: theme.typography.bodyMedium.fontFamily,
            fontWeight: theme.typography.bodyMedium.fontWeight,
            fontSize: theme.typography.bodyMedium.fontSize,
            lineHeight: theme.typography.bodyMedium.lineHeight,
            color: theme.tokens.typographyColors.body,
          }}
        >
          Personal information
        </Typography>
      </Box>

      {/* 🔹 Favorites + Night mode + Switch */}
      <Box
        sx={{
          px: "24px",
          py: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* الجزء اليسار: الأيقونة + النص */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Image
            src="/assets/icons/favorite-icon.svg"
            alt="favorites"
            width={24}
            height={24}
          />
          <Typography
            sx={{
              fontFamily: theme.typography.bodyMedium.fontFamily,
              fontWeight: theme.typography.bodyMedium.fontWeight,
              fontSize: theme.typography.bodyMedium.fontSize,
              lineHeight: theme.typography.bodyMedium.lineHeight,
              color: theme.tokens.typographyColors.body,
            }}
          >
            Favorites
          </Typography>
        </Box>

        {/* الجزء اليمين: أيقونة القمر + السويتش */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Image
            src="/assets/icons/dark-mode-icon.svg"
            alt="dark mode"
            width={30}
            height={30}
          />
          <Image
            src="/assets/icons/switch-icon.svg"
            alt="toggle"
            width={30}
            height={30}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default GuestProfileCard;
