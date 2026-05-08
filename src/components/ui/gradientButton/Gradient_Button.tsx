"use client";

import { Button, Typography, useTheme } from "@mui/material";
import { TypographyProps } from "@mui/material/Typography";
import { SxProps, Theme } from "@mui/material";
import { borderRadius, padding, shadows } from "@mui/system";

type ButtonSize = "small" | "medium" | "large" | "authLarge";
type ButtonVariant = "primary" | "outline" | "text" | "gray" | "gradientBorder" | "regular";
type ButtonState = "primary" | "danger";



interface GradientButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement> | undefined) => void;
  type?: "button" | "submit" | "reset";
  sx?: SxProps<Theme>;
  state?: ButtonState;
}

export default function Gradient_Button({
  size = "medium",
  variant = "primary",
  disabled = false,
  children,
  onClick,
  type = "button",
  state = "primary",
  sx,
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
    // padding: "6px 11px"
  };

  let styles = {};

  if (variant === "primary") {
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
        background: isDanger
          ? "linear-gradient(90deg, #892727 0%, #EF4444 100%)"
          : theme.tokens.buttons.disabledBg,
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
  if (variant === "gray") {
    styles = {
      background: 'linear-gradient(90deg, #ABADB6 0%, #ABADB6 100%)',
      color: "#FFFFFF",
      boxShadow: theme.tokens.buttons.boxShadow,

      "&:hover": {
        background: theme.palette.gradients.grayHover,
      },

      "&:active": {
        background: theme.palette.gradients.grayPressed,
        transform: "translateY(1px)",
      },

      "&.Mui-disabled": {
        background: theme.tokens.buttons.disabledBg,
        color: theme.tokens.buttons.disabledText,
      },
    };
  }
  if (variant === "gradientBorder") {
    styles = {
      background: "transparent",
      color: theme.buttonVariants.outline.color,
      border: "2px solid transparent",
      position: "relative",
      borderRadius: "4px",
      padding: "20px 16px !important",
      "&::before": {
        content: '""',
        position: "absolute",
        inset: "-2px",
        borderRadius: "inherit",
        padding: "2px",
        background: `linear-gradient(180deg, ${theme.tokens.mainColors.primary} 0%, ${theme.tokens.mainColors.secondary} 100%)`,
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        pointerEvents: "none",
      },
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
        "&::before": {
          display: "none",
        },
      },
    };
  }
  if (variant === "regular") {
    styles = {
      background: "transparent",
      border: "none",
      color: theme.buttonVariants.text.color,
      "&:hover": {
        background: theme.buttonVariants.outline.hoverBg,
        border: "none",
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
      sx={{ ...baseStyle, ...styles, width: "100%", ...sx }}
    >
      {typeof children === "string" ? (
        <Typography variant={typography as TypographyProps["variant"]}>
          {children}
        </Typography>
      ) : (
        children
      )}
    </Button>
  );
}
