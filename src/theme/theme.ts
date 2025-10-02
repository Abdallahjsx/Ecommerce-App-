// src/theme/theme.ts
export const theme = {
  typography: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
  },
  button: {
    borderRadius: "10px",
    boxShadow: "0px 4px 4px 0px #00000040",
    sizes: {
      small: { width: 127, height: 32, fontSize: 14 },
      medium: { width: 135, height: 40, fontSize: 16 },
      large: { width: 207, height: 40, fontSize: 18 },
    },
    gradient: {
      default: "linear-gradient(90deg, #1B2351 0%, #47C0D2 100%)",
      hover: "linear-gradient(83.97deg, #1B2351 2.66%, #47C0D2 84.67%)",
      pressed: "linear-gradient(2.74deg, #000C53 -21.31%, #309DAD 107.53%)",
    },
    variants: {
      default: {
        default: "linear-gradient(90deg, #1B2351 0%, #47C0D2 100%)",
        hover: "linear-gradient(83.97deg, #1B2351 2.66%, #47C0D2 84.67%)",
        pressed: "linear-gradient(2.74deg, #000C53 -21.31%, #309DAD 107.53%)",
      },
      variant1: {
        default: "#FFFFFF",
        hover: "#F2F4F7",
        pressed: "#E5E7EB",
      },
      variant2: {
        default: "#1B2351",
        hover: "#162048",
        pressed: "#0F1638",
      },
    },
  },
};
