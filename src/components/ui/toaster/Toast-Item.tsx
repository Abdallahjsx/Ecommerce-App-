"use client";
import React from "react";
import Image from "next/image";
import { Snackbar, Alert, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { keyframes } from '@mui/system'; // ✅ استدعاء keyframes

interface ToastProps {
  open: boolean;
  onClose: () => void;
  message: string;
  type?: "success" | "info" | "error" | "warning"; // ✅ أضفنا نوع التحذير
}

// ✅ تعريف Keyframes للخط السفلي (progress bar)
const progressBar = keyframes`
  0% { transform: scaleX(0); transform-origin: left; }
  100% { transform: scaleX(1); transform-origin: left; }
`;

export default function ToastItem({
  open,
  onClose,
  message,
  type = "success",
}: ToastProps) {
  const theme = useTheme();

  const isSuccess = type === "success";
  const isInfo = type === "info";
  const isError = type === "error";
  const isWarning = type === "warning";

  const bgColor = isSuccess
    ? theme.tokens?.backgroundColors?.success || "#EDFFF6"
    : isInfo
    ? theme.tokens?.backgroundColors?.info || "#DDEEFD"
    : isError
    ? theme.tokens?.alerts?.errorBox?.background ||
      "var(--Colors-Background-Danger, #FEE2E2)"
    : theme.tokens?.backgroundColors?.warning ||
      "var(--Colors-Background-Warning, #FEF3C7)";

  const textColor = isSuccess
    ? theme.tokens?.typographyColors?.success || "#10B981"
    : isInfo
    ? theme.tokens?.typographyColors?.info || "#4A90E2"
    : isError
    ? theme.tokens?.alerts?.errorMessage?.color ||
      "var(--Colors-Text-Danger, #EF4444)"
    : theme.tokens?.typographyColors?.warning ||
      "var(--Colors-Text-Warning, #F59E0B)";

  const lineColor = isSuccess
    ? theme.tokens?.alerts?.successLine?.color || "#10B981"
    : isInfo
    ? theme.tokens?.alerts?.infoLine?.color || "#4A90E2"
    : isError
    ? theme.tokens?.alerts?.errorLine?.borderColor ||
      "var(--Colors-Icon-Danger, #EF4444)"
    : "var(--Colors-Icon-Warning, #F59E0B)";

  const iconSrc = isSuccess
    ? "/assets/icons/success-icon.svg"
    : isInfo
    ? "/assets/icons/info-icon.svg"
    : isError
    ? "/assets/icons/error-icon.svg"
    : "/assets/icons/warning-icon.svg";

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Box sx={{ position: "relative", display: "inline-block" }}>
        <Alert
          sx={{
            width:
              (isSuccess
                ? theme.tokens?.alerts?.successBox?.width
                : isInfo
                ? theme.tokens?.alerts?.infoBox?.width
                : isError
                ? theme.tokens?.alerts?.errorBox?.width
                : theme.tokens?.alerts?.warningBox?.width) || 300,
            height:
              (isSuccess
                ? theme.tokens?.alerts?.successBox?.height
                : isInfo
                ? theme.tokens?.alerts?.infoBox?.height
                : isError
                ? theme.tokens?.alerts?.errorBox?.height
                : theme.tokens?.alerts?.warningBox?.height) || 56,
            borderRadius: theme.tokens?.buttons?.borderRadius || "8px",
            padding:
              (isSuccess
                ? theme.tokens?.alerts?.successBox?.padding
                : isInfo
                ? theme.tokens?.alerts?.infoBox?.padding
                : isError
                ? theme.tokens?.alerts?.errorBox?.padding
                : theme.tokens?.alerts?.warningBox?.padding) || "16px",
            background: bgColor,
            boxShadow:
              (isSuccess
                ? theme.tokens?.alerts?.successBox?.boxShadow
                : isInfo
                ? theme.tokens?.alerts?.infoBox?.boxShadow
                : isError
                ? theme.tokens?.alerts?.errorBox?.boxShadow
                : theme.tokens?.alerts?.warningBox?.boxShadow) ||
              "0px 1px 2px -1px #1018281A, 0px 1px 3px 0px #1018281A",
            display: "flex",
            alignItems: "center",
            gap:
              (isSuccess
                ? theme.tokens?.alerts?.successBox?.gap
                : isInfo
                ? theme.tokens?.alerts?.infoBox?.gap
                : isError
                ? theme.tokens?.alerts?.errorBox?.gap
                : theme.tokens?.alerts?.warningBox?.gap) || "10px",
            fontSize:
              (isSuccess
                ? theme.tokens?.alerts?.successMessage?.fontSize
                : isInfo
                ? theme.tokens?.alerts?.infoMessage?.fontSize
                : isError
                ? theme.tokens?.alerts?.errorMessage?.fontSize
                : theme.tokens?.alerts?.warningMessage?.fontSize) || 16,
            fontWeight:
              (isSuccess
                ? theme.tokens?.alerts?.successMessage?.fontWeight
                : isInfo
                ? theme.tokens?.alerts?.infoMessage?.fontWeight
                : isError
                ? theme.tokens?.alerts?.errorMessage?.fontWeight
                : theme.tokens?.alerts?.warningMessage?.fontWeight) || 500,
            color: textColor,
            position: "relative",
            overflow: "hidden",
          }}
          icon={
            <Image
              src={iconSrc}
              alt={
                isSuccess
                  ? "Success icon"
                  : isInfo
                  ? "Info icon"
                  : isError
                  ? "Error icon"
                  : "Warning icon"
              }
              width={24}
              height={24}
            />
          }
        >
          {message}

          {/* ✅ الخط السفلي مع الأنيميشن */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "3px",
              backgroundColor: lineColor,
              borderRadius: "0 0 8px 8px",
              transform: "scaleX(0)",
              animation: `${progressBar} 3000ms ease-out 300ms 2 forwards`,
            }}
          />
        </Alert>
      </Box>
    </Snackbar>
  );
}

