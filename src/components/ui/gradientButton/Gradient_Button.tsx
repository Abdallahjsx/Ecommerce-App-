"use client";

import { Button, Typography, useTheme } from "@mui/material";
import { TypographyProps } from "@mui/material/Typography";

type ButtonSize = "small" | "medium" | "large";
type ButtonVariant = "primary" | "outline" | "text";

interface GradientButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Gradient_Button({
  size = "medium",
  variant = "primary",
  disabled = false,
  children,
  onClick,
}: GradientButtonProps) {
  const theme = useTheme();

  //جاي كله من theme
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
  };

  let styles = {};

  if (variant === "primary") {
    styles = {
      color: theme.tokens.buttons.textColor,
      background: theme.palette.gradients.primary,
      boxShadow: theme.tokens.buttons.boxShadow,
      "&:hover": {
        background: theme.palette.gradients.primaryHover,
      },
      "&:active": {
        background: theme.palette.gradients.primaryPressed,
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
      sx={{ ...baseStyle, ...styles }}
    >
      <Typography variant={typography as TypographyProps["variant"]}>
        {children}
      </Typography>
    </Button>
  );
}
