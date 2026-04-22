"use client";
import Image from "next/image";
import { Box, Typography, useTheme } from "@mui/material";
import { logoutUser } from "@/features/user/services/userService";
import { useDispatch } from "react-redux";
import { clearToken } from "@/Redux/slices/authSlice";
import { useRouter } from "next/navigation";
import { useUser } from "../hooks/useUser";
import { Avatar } from "@mui/material";


export default function UserCard({ setUserCard }: { setUserCard: (value: boolean) => void }) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, loading } = useUser();

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
        top: "50px",
        right: "0px",
        overflow: "hidden",
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

      {/* Profile Image (Avatar) */}
      <Box
        sx={{
          position: "absolute",
          top: "24px",
          right: "24px",
          zIndex: 2,
        }}
      >
        <Avatar
          src={user?.profileImageUrl || "/assets/images/user-img.png"}
          sx={{
            width: 80,
            height: 80,
            border: `2px solid ${theme.palette.background.paper}`,
            boxShadow: theme.shadows[2],
          }}
        />
      </Box>


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
          {loading ? "Loading..." : user ? `${user.firstName} ${user.lastName}` : "Welcome"}
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
            {user?.phoneNumber || ""}
          </Typography>

          <Typography
            onClick={() => {
              router.push("/myProfile");
              setUserCard?.(false);
            }}
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
          { icon: "person-icon.svg", text: "Personal information", to: '/myProfile' },
          { icon: "orders-icon.svg", text: "My Orders", to: '/orders' },
          { icon: "favorite-icon.svg", text: "Favorites", to: '/wishlist' },
        ].map((item, i) => (
          <Box
            onClick={() => {
              router.push(item.to);
              setUserCard(false);
            }}

            key={i}
            sx={{
              px: "24px",
              py: "24px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              borderRadius: "16px",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: theme.tokens.backgroundColors.uploadBg,
                cursor: "pointer",
              },
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
          // "&:hover": {
          //   backgroundColor: theme.tokens.backgroundColors.danger,
          //   cursor: "pointer",
          // }
          
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
