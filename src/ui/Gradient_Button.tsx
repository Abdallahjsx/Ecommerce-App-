"use client";

import React from "react";
import { useTheme } from "@/theme/ThemeContext";

type ButtonSize = "small" | "medium" | "large";
type ButtonVariant = "default" | "variant1" | "variant2";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  variant = "default",
  children,
  ...props
}) => {
  const theme = useTheme();
  const sizeStyles = theme.button.sizes[size];

  const defaultBg = "linear-gradient(90deg, #1B2351 0%, #47C0D2 100%)";
  const hoverBg = "linear-gradient(83.97deg, #1B2351 2.66%, #47C0D2 84.67%)";
  const pressedBg = "linear-gradient(2.74deg, #000C53 -21.31%, #309DAD 107.53%)";

  return (
    <button
      {...props}
      style={{
        width: sizeStyles.width,
        height: sizeStyles.height,
        fontSize: sizeStyles.fontSize,
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.fontWeight,
        borderRadius: theme.button.borderRadius,
        boxShadow: theme.button.boxShadow,
        background: defaultBg,
        color: "#FFFFFF",
        cursor: props.disabled ? "not-allowed" : "pointer",
        border: "none",
        outline: "none",
        transition: "all 0.3s ease",
        opacity: props.disabled ? 0.6 : 1,
        margin: "10px", // تباعد بين الأزرار
      }}
      onMouseEnter={(e) => {
        if (!props.disabled) e.currentTarget.style.background = hoverBg;
      }}
      onMouseLeave={(e) => {
        if (!props.disabled) e.currentTarget.style.background = defaultBg;
      }}
      onMouseDown={(e) => {
        if (!props.disabled) e.currentTarget.style.background = pressedBg;
      }}
      onMouseUp={(e) => {
        if (!props.disabled) e.currentTarget.style.background = hoverBg;
      }}
    >
      {children}
    </button>
  );
};

export default Button;

