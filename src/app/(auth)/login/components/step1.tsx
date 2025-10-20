import React from "react";
import { Typography, Box } from "@mui/material";
import { Gradient_Button } from "@/components/ui/gradientButton";
export default function PickRole({ setStep }: { setStep: () => void }) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "60px",
        paddingBottom: "260px",
      }}
    >
      <Box>
        <Typography
          fontSize={"35px"}
          color="primary"
          sx={{
            fontFamily: "var(--font-cinzel)",
            textAlign: "center",
            padding: "0px",
            marginTop: ["60px", "60px", "50px"],
          }}
        >
          start as
        </Typography>
        <Typography variant="inputLabel" fontSize={"15px"} color="#666666">
          Pick your role to continue
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          flexDirection: "column",
          paddingTop: "10px",
          width: ["80%", "80%", "60%"],
        }}
      >
        <Gradient_Button
          size="large"
          variant="outline"
          onClick={() => {
            setStep();
          }}
        >
          Brand
        </Gradient_Button>
        <Gradient_Button
          size="large"
          variant="primary"
          onClick={() => {
            setStep();
          }}
        >
          Customer
        </Gradient_Button>
      </Box>
    </Box>
  );
}
