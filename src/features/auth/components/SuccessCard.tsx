"use client";

import { Box, Typography, Paper } from "@mui/material";
import Image from "next/image";
import Gradient_Button from "../../../components/ui/gradientButton/Gradient_Button"; // تأكد من المسار الصحيح
import { useRouter } from "next/navigation";


export default function SuccessCard() {
  const router = useRouter();

  return (
    <Box
      sx={{
        // backdropFilter: "blur(3px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "blur(3px)",
        width: "100vw",
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          backgroundColor: "#FEFEFE",
          width: 480,
          borderRadius: 4,
          p: "50px",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: 140,
              width: 140,
              borderRadius: "50%",
              backgroundColor: "#B4DBE180",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <Image
              src="/assets/images/verification-success.png"
              alt="Verification Success"
              width={200}
              height={200}
              style={{ objectFit: "contain" }}
            />
          </Box>

          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: 16,
              color: "#1B2351",
            }}
          >
            Account Created Successfully
          </Typography>
          <Box sx={{width:"60%"}}>
            <Gradient_Button onClick={() => router.push("/home")}>
              Home
            </Gradient_Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
