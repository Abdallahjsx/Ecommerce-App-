"use client";

import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";

type OrderStatusBarProps = {
  status: number; // current status index (0 = Preparing, 1 = Packed, 2 = Shipped)
};

// positions of the steps on the status bar
const positions = [23.52, 253.09, 488.95];

export default function OrderStatusBar({ status }: OrderStatusBarProps) {
  const theme = useTheme();

  // gradient used for the active part of the bar
  const gradient = `linear-gradient(90deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`;

  // define each step with its label and color
  const steps = [
    { id: "preparing", label: "Preparing", color: theme.palette.secondary.main },
    { id: "packed", label: "Packed", color: gradient },
    { id: "shipped", label: "Shipped", color: theme.palette.primary.main },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "510px",
          position: "relative",
          transformOrigin: "top center",
          transform: {
            xs: "scale(0.7)", // smaller on extra small screens
            sm: "scale(0.85)", // slightly bigger on small screens
            md: "scale(1)", // full size on medium+ screens
          },
        }}
      >
        {/* background image for the status bar */}
        <Image
          src="/assets/icons/Union.svg"
          alt="status background"
          width={510}
          height={47}
          style={{ width: "100%", height: "auto", display: "block" }}
        />

        {/* draw the progress segments between steps */}
        {steps.slice(0, -1).map((_, index) => {
          const activeSegment = index < status; // check if this segment is active

          return (
            <Box
              key={index}
              sx={{
                position: "absolute",
                border: "2px solid #FFFFFF",
                top: "50%",
                left: `${positions[index] - 3}px`,
                width: `${positions[index + 1] - positions[index] + 6}px`,
                height: "12.386px",
                background: activeSegment ? gradient : "#FFFFFF", // fill active segments
                backgroundSize: "510px 100%",
                backgroundPosition: `-${positions[index]}px 0`,
                borderRadius: "999px",
                boxShadow: "0px 3px 6px 0px #00000029",
                transform: "translateY(-50%)",
                zIndex: 1,
              }}
            />
          );
        })}

        {/* draw the step circles and labels */}
        {steps.map((step, index) => {
          const active = index <= status; // check if step is active
          const color = step.color;

          return (
            <Box
              key={step.id}
              sx={{
                position: "absolute",
                top: "50%",
                left: `${positions[index]}px`,
                transform: "translate(-50%, -27%)",
                textAlign: "center",
                zIndex: 2,
              }}
            >
              {/* step circle */}
              <Box
                sx={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  border: "2px solid #fff",
                  boxShadow: "0 3px 6px rgba(0,0,0,0.16)",
                  background: active ? color : "#fff", // fill if active
                  backgroundSize: step.label === "Packed" ? "510px 100%" : "auto",
                  backgroundPosition:
                    step.label === "Packed" ? `-${positions[index]}px 0` : "initial",
                  mx: "auto",
                  position: "relative",
                  zIndex: 2,

                  // small line under the circle
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: "48.8%",
                    height: "10.386px",
                    left: index === 0 ? "50%" : "-4px",
                    right: index === steps.length - 1 ? "50%" : "-4px",
                    background: active ? color : "#fff",
                    backgroundSize: step.label === "Packed" ? "510px 100%" : "auto",
                    backgroundPosition:
                      step.label === "Packed" ? `-${positions[index]}px 0` : "initial",
                    transform: "translateY(-50%)",
                    borderRadius: "5px",
                    zIndex: 3,
                  },
                }}
              />

              {/* step label */}
              <Typography
                variant="inputLabel"
                sx={{
                  marginTop: "12px",
                  display: "block",
                  letterSpacing: "-0.13px",
                  fontSize: "16px",
                  ...(active
                    ? step.label === "Packed"
                      ? {
                          background: gradient,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }
                      : { color }
                    : { color: "#999" }),
                }}
              >
                {step.label}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}