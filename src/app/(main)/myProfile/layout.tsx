import BgSvg from "@/features/Profile/components/BgSvg";
import Header from "@/features/Profile/components/Header";
import { Box } from "@mui/material";
import GuardedLayout from "@/components/layout/guardedLayout";

export default function MyProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GuardedLayout>
      <Box sx={{
        backgroundColor: "rgba(246, 243, 236, 1)",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background Elements */}
        <Box
          sx={{ position: "absolute", right: 0, top: 0, zIndex: 0, opacity: 0.6 }}
        >
          <BgSvg />
        </Box>

        <Box sx={{ position: "relative", zIndex: 1, px: { xs: 2, md: "100px" } }}>
          <Box
            sx={{
              mx: "auto",
              pt: { xs: 4, md: "20px" },
              pb: { xs: 2, md: 3 },
            }}
          >
            <Header />
          </Box>

          <Box
            sx={{
              mx: "auto",
              pb: 5,
            }}
          >
            {children}
          </Box>
        </Box>

      </Box>
    </GuardedLayout>
  );
}
