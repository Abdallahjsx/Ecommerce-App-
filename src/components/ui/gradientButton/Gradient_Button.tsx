"use client";

import { Button, Typography, useTheme } from "@mui/material";
import { TypographyProps } from "@mui/material/Typography";
import { SxProps, Theme } from "@mui/material";

type ButtonSize = "small" | "medium" | "large" | "authLarge";
type ButtonVariant = "primary" | "outline" | "text";
type ButtonState = "primary" | "danger"; // ✅ الحالة الجديدة

interface GradientButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  sx?: SxProps<Theme>;
  state?: ButtonState; // ✅ أضفنا الـ prop الجديدة
}

export default function Gradient_Button({
  size = "medium",
  variant = "primary",
  disabled = false,
  children,
  onClick,
  type = "button",
  state = "primary", // ✅ افتراضيًا primary
}: GradientButtonProps) {
  const theme = useTheme();

  const { width, height, typography } = theme.buttonSizes[size];

  const baseStyle = {
    width,
    height,
    borderRadius: theme.tokens.buttons.borderRadius,
    fontFamily: theme.typography.bodyMedium.fontFamily,
    fontWeight: theme.typography.bodyMedium.fontWeight,
    fontSize: theme.typography.bodyMedium.fontSize,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    textTransform: "none" as const,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.6 : 1,
  };

  let styles = {};

  if (variant === "primary") {
    // ✅ لو الحالة danger غيّر الألوان فقط
    const isDanger = state === "danger";
    styles = {
      color: theme.tokens.buttons.textColor,
      background: isDanger
        ? "linear-gradient(90deg, #EF4444 0%, #892727 100%)"
        : theme.palette.gradients.primary,
      boxShadow: theme.tokens.buttons.boxShadow,
      "&:hover": {
        background: isDanger
          ? "linear-gradient(90deg, #ff5c5c 0%, #a23232 100%)"
          : theme.palette.gradients.primaryHover,
      },
      "&:active": {
        background: isDanger
          ? "linear-gradient(90deg, #cc3333 0%, #661f1f 100%)"
          : theme.palette.gradients.primaryPressed,
        transform: "translateY(1px)",
        boxShadow: "0px 2px 2px 0px #00000040",
      },
      "&.Mui-disabled": {
        background: theme.tokens.buttons.disabledBg,
        color: theme.tokens.buttons.disabledText,
        boxShadow: "none",
      },
    };
  }

  if (variant === "outline") {
    styles = {
      background: "transparent",
      border: theme.buttonVariants.outline.border,
      color: theme.buttonVariants.outline.color,
      "&:hover": {
        background: theme.buttonVariants.outline.hoverBg,
      },
      "&:active": {
        background: theme.buttonVariants.outline.activeBg,
      },
      "&.Mui-disabled": {
        border: theme.buttonVariants.outline.border,
        color: theme.tokens.buttons.disabledText,
        background: "transparent",
      },
    };
  }

  if (variant === "text") {
    styles = {
      background: "transparent",
      border: "none",
      color: theme.buttonVariants.text.color,
      "&:hover": {
        textDecoration: theme.buttonVariants.text.hoverDecoration,
      },
      "&.Mui-disabled": {
        color: theme.tokens.buttons.disabledText,
      },
    };
  }

  return (
    <Button
      disableRipple
      disabled={disabled}
      onClick={onClick}
      type={type}
      sx={{ ...baseStyle, ...styles, width: "100%" }}
    >
      <Typography variant={typography as TypographyProps["variant"]}>
        {children}
      </Typography>
    </Button>
  );
}
