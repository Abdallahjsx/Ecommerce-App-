"use client";
import Image from "next/image";
import { Box, Typography, useTheme } from "@mui/material";
import { logoutUser } from "@/features/user/services/userService";
import { useDispatch } from "react-redux";
import { clearToken } from "@/Redux/slices/authSlice";
import { useRouter } from "next/navigation";
export default function LoggedInProfileCard() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await logoutUser(); // استدعاء الـ endpoint
    } catch (error) {
      console.log("Logout failed:", error);
    }

    dispatch(clearToken()); // مسح token من redux

    if (typeof window !== "undefined") {
      localStorage.removeItem("token"); // مسح token من localStorage
    }

    router.push("/home");
  };

  return (
    <Box
      sx={{
        position: "absolute",
        width: "407px",
        height: "384px",
        pt: "24px",
        pb: "16px",
        borderRadius: "16px",
        background: theme.tokens.backgroundColors.main,
        boxShadow: `
          0px 2px 4px -2px rgba(16, 24, 40, 0.1),
          0px 4px 6px -1px rgba(16, 24, 40, 0.1)
        `,
        top: "80px",
        right: "80px",
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
        // position: "absolute",
        // right: "0px",
        // top: "50px",
      }}
    >
      {/* الخلفية */}
      <Image
        src="/assets/images/ellipse.png"
        alt="ellipse background"
        width={306}
        height={306}
        style={{
          position: "absolute",
          top: "-120px",
          right: "-60px",
          objectFit: "contain",
          opacity: 0.8,
          zIndex: 0,
        }}
      />

      {/* محتوى البروفايل */}
      <Box
        sx={{
          position: "absolute",
          top: "26px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "323px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          zIndex: 2,
        }}
      >
        {/* الاسم */}
        <Typography
          sx={{
            ...theme.typography.bodyMedium,
            color: theme.tokens.typographyColors.body,
            fontWeight: 500,
            textAlign: "left",
          }}
        >
          Abd Al Rehman
        </Typography>

        {/* الرقم + Edit */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              ...theme.typography.bodyMedium,
              color: theme.tokens.typographyColors.body,
              fontWeight: 400,
            }}
          >
            01205990923
          </Typography>

          <Typography
            sx={{
              fontFamily: "Font Type, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              textDecoration: "underline",
              color: "#3E548D",
              cursor: "pointer",
              "&:hover": { opacity: 0.8 },
            }}
          >
            Edit
          </Typography>
        </Box>
      </Box>

      {/* الخط الفاصل الأول */}
      <Box
        sx={{
          position: "absolute",
          top: "95px",
          left: 0,
          width: "407px",
          height: "0px",
          border: `1px solid ${theme.tokens.separatingColors.separator}`,
          opacity: 1,
        }}
      />

      {/* Personal info + My Orders + Favorites */}
      <Box
        sx={{
          position: "absolute",
          top: "110px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "407px",
          height: "168px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {[
          { icon: "person-icon.svg", text: "Personal information" },
          { icon: "orders-icon.svg", text: "My Orders" },
          { icon: "favorite-icon.svg", text: "Favorites" },
        ].map((item, i) => (
          <Box
            key={i}
            sx={{
              px: "24px",
              py: i === 1 ? "12px" : "24px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <Image
              src={`/assets/icons/${item.icon}`}
              alt={item.text}
              width={24}
              height={24}
            />
            <Typography
              sx={{
                fontFamily: theme.typography.bodyMedium.fontFamily,
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                color: theme.tokens.typographyColors.body,
              }}
            >
              {item.text}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* الخط الفاصل الثاني */}
      <Box
        sx={{
          position: "absolute",
          top: "305px",
          left: 0,
          width: "407px",
          height: "0px",
          border: `1px solid ${theme.tokens.separatingColors.separator}`,
          opacity: 1,
        }}
      />

      {/* Log Out + أيقونات اليمين */}
      <Box
        sx={{
          position: "absolute",
          top: "320px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "407px",
          px: "24px",
          py: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* الشمال: اللوج أوت */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            cursor: "pointer",
          }}
          onClick={handleLogout} // <<< 4) هنا فقط ضفت onClick
        >
          <Image
            src="/assets/icons/log-out-icon.svg"
            alt="logout"
            width={24}
            height={24}
          />
          <Typography
            sx={{
              fontFamily: theme.typography.bodyMedium.fontFamily,
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              color: theme.tokens.typographyColors.body,
            }}
          >
            Log Out
          </Typography>
        </Box>

        {/* اليمين */}
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
}
