import { createTheme } from "@mui/material/styles";
import { TokensColorType } from "@/types";
import React from "react";

declare module "@mui/material/styles" {
  interface Theme {
    tokens: TokensColorType & {
      buttons: {
        borderRadius: string;
        boxShadow: string;
        textColor: string;
        disabledBg: string;
        disabledText: string;
      };
      inputs: {
        width: string;
        height: string;
        borderRadius: string;
        boxShadow: string;
        fontSize: string;
        padding: string;
        label: {
          width: string;
          height: string;
          fontFamily: string;
          fontWeight: number;
          fontSize: string;
          lineHeight: string;
          color: string;
        };
        error: {
          width: string;
          height: string;
          fontFamily: string;
          fontWeight: number;
          fontSize: string;
          lineHeight: string;
          borderRadius: string;
        };
      };
      icons: {
        eye: { width: number; height: number };
        calendar: { width: number; height: number };
      };
      alerts?: {
        successBox?: Record<string, any>;
        successMessage?: Record<string, any>;
        successIcon?: Record<string, any>;
        successLine?: Record<string, any>;
        infoBox?: Record<string, any>;
        infoMessage?: Record<string, any>;
        infoLine?: Record<string, any>;
        errorBox?: Record<string, any>;
        errorMessage?: Record<string, any>;
        errorIcon?: Record<string, any>;
        errorLine?: Record<string, any>;
        warningBox?: Record<string, any>; // ✅ Added
        warningMessage?: Record<string, any>; // ✅ Added
        warningIcon?: Record<string, any>; // ✅ Added
        warningLine?: Record<string, any>; // ✅ Added
      };
    };
    gradients: {
      primary: string;
      primaryHover: string;
      primaryPressed: string;
    };
    buttonSizes: {
      small: { width: string; height: string; typography: "bodyMedium" };
      medium: { width: string; height: string; typography: "bodyMedium" };
      large: { width: string; height: string; typography: "bodyMedium" };
    };
    buttonVariants: {
      outline: {
        border: string;
        color: string;
        hoverBg: string;
        activeBg: string;
      };
      text: {
        color: string;
        hoverDecoration: string;
      };
    };
  }

  interface ThemeOptions {
    tokens?: Theme["tokens"];
    gradients?: Theme["gradients"];
    buttonSizes?: Theme["buttonSizes"];
    buttonVariants?: Theme["buttonVariants"];
  }

  interface Palette {
    gradients: {
      primary: string;
      primaryHover: string;
      primaryPressed: string;
    };
  }

  interface PaletteOptions {
    gradients?: {
      primary?: string;
      primaryHover?: string;
      primaryPressed?: string;
    };
  }

  interface TypographyVariants {
    titleLarge: React.CSSProperties;
    titleMedium: React.CSSProperties;
    titleSmall: React.CSSProperties;
    bodyLarge: React.CSSProperties;
    bodyMedium: React.CSSProperties;
    captionLarge: React.CSSProperties;
    captionMedium: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    titleLarge?: React.CSSProperties;
    titleMedium?: React.CSSProperties;
    titleSmall?: React.CSSProperties;
    titleSpecial?: React.CSSProperties;
    bodyLarge?: React.CSSProperties;
    bodyMedium?: React.CSSProperties;
    captionLarge?: React.CSSProperties;
    captionMedium?: React.CSSProperties;
    link?: React.CSSProperties;
    captionSmall?: React.CSSProperties;
    appDownload?: React.CSSProperties;
    navCol?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    titleLarge: true;
    titleMedium: true;
    titleSmall: true;
    titleSpecial: true;
    bodyLarge: true;
    bodyMedium: true;
    captionLarge: true;
    captionMedium: true;
    link: true;
    captionSmall: true;
    appDownload: true;
    navCol: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: { main: "#1B2351" },
    secondary: { main: "#47C0D2" },
    info: { main: "#136EBF" },
    success: { main: "#10B981" },
    warning: { main: "#F59E0B" },
    error: { main: "#EF4444" },
    gradients: {
      primary: "linear-gradient(90deg, #1B2351 0%, #47C0D2 100%)",
      primaryHover: "linear-gradient(83.97deg, #1B2351 2.66%, #47C0D2 84.67%)",
      primaryPressed: "linear-gradient(2.74deg, #000C53 -21.31%, #309DAD 107.53%)",
    },
  },

  tokens: {
    mainColors: {
      primary: "#1B2351",
      secondary: "#47C0D2",
      white: "#FEFEFE",
      black: "#000814",
    },
    backgroundColors: {
      main: "#F6F3EC",
      light: "#F5F5F5",
      heavy: "#50546E",
      bottomSheet: "#FFFFFF",
      success: "#EDFFF6",
      info: "#DDEEFD",
      warning: "#FEF3C7",
      danger: "#FEE2E2",
      uploadBg: "#EBEBEB",
    },
    typographyColors: {
      title: "#383644",
      subtitle: "#535456",
      body: "#30343C",
      hint: "#ABADB6",
      link: "#3E548D",
      success: "#10B981",
      info: "#4A90E2",
      warning: "#F59E0B",
      danger: "#EF4444",
      secondary: "#FE6239",
      inactive: "#919193",
    },
    buttonsColors: {
      primary: "#1B2351",
      secondary: "#47C0D2",
      label: "#666666",
      bgInactive: "#EBEBEB",
      primaryHover: "#4D26A0",
      primaryPressed: "#000C53",
      primaryDisabled: "#838AB2",
      secondaryHover: "#3BB0C1",
      secondaryPressed: "#CC482A",
      secondaryDisabled: "#9FDDE6",
    },
    inputsColors: {
      background: "#ffffff",
      border: "#D0D5DD",
      label: "#1B2351",
      placeholder: "#667085",
      inactiveText: "#98A1B2",
    },
    iconsColors: {
      primary: "#1B2351",
      secondary: "#47C0D2",
      light: "#CDD5DF",
      gray: "#6F7073",
      success: "#10B981",
      warning: "#F59E0B",
      danger: "#EF4444",
    },
    separatingColors: {
      border: "#D0D5DD",
      separator: "#D2D3D4",
    },
    buttons: {
      borderRadius: "8px",
      boxShadow: "0px 4px 4px 0px #00000040",
      textColor: "#FFFFFF",
      disabledBg: "#838AB2",
      disabledText: "#AAAAAA",
    },
    inputs: {
      width: "340px",
      height: "52px",
      borderRadius: "8px",
      boxShadow: "0px 4px 4px 0px #00000040",
      fontSize: "16px",
      padding: "16px",
      label: {
        width: "340px",
        height: "20px",
        fontFamily: "Inter, sans-serif",
        fontWeight: 400,
        fontSize: "13px",
        lineHeight: "100%",
        color: "#1B2351",
      },
      error: {
        width: "340px",
        height: "24px",
        fontFamily: "Inter, sans-serif",
        fontWeight: 400,
        fontSize: "10px",
        lineHeight: "24px",
        borderRadius: "4px",
      },
    },
    icons: {
      eye: { width: 20, height: 20 },
      calendar: { width: 14, height: 13 },
    },
/////                    <rejected>                     ////////
    alerts: {
      successBox: {
        width: "300px",
        height: "56px",
        top: "144px",
        left: "20px",
        gap: "10px",
        angle: "0deg",
        opacity: 1,
        borderRadius: "8px",
        padding: "16px",
        background: "#EDFFF6",
        boxShadow: "0px 1px 2px -1px #1018281A, 0px 1px 3px 0px #1018281A",
      },
      successMessage: {
        fontSize: 16,
        fontWeight: 500,
        lineHeight: "24px",
        color: "#10B981",
      },
      successLine: {
        width: "100%",
        height: "3px",
        backgroundColor: "#10B981",
      },
      infoBox: {
        width: "300px",
        height: "56px",
        top: "144px",
        left: "20px",
        gap: "10px",
        angle: "0deg",
        opacity: 1,
        borderRadius: "8px",
        padding: "16px",
        background: "#DDEEFD",
        boxShadow: "0px 1px 2px -1px #1018281A, 0px 1px 3px 0px #1018281A",
      },
      infoMessage: {
        fontSize: 16,
        fontWeight: 500,
        lineHeight: "24px",
        color: "#4A90E2",
      },
      infoLine: {
        width: "100%",
        height: "3px",
        backgroundColor: "#4A90E2",
      },

      // ✅ Error Alert
      errorBox: {
        width: "300px",
        height: "56px",
        top: "144px",
        left: "20px",
        gap: "10px",
        opacity: 1,
        borderRadius: "8px",
        padding: "16px",
        background: "var(--Colors-Background-Danger, #FEE2E2)",
        boxShadow: "0px 1px 2px -1px #1018281A, 0px 1px 3px 0px #1018281A",
        animationTimingFunction: "cubic-bezier(0, 0, 1, 0.46)",
        animationDuration: "3000ms",
      },
      errorMessage: {
        width: "194px",
        height: "24px",
        fontFamily: "Inter, sans-serif",
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0%",
        color: "var(--Colors-Text-Danger, #EF4444)",
      },
      errorIcon: {
        width: "24px",
        height: "24px",
        opacity: 1,
        color: "#EF4444",
      },
      errorLine: {
        width: "300px",
        height: "0px",
        border: "3px solid var(--Colors-Icon-Danger, #EF4444)",
        opacity: 1,
      },

      // ✅ Warning Alert (New)
      warningBox: {
        width: "300px",
        height: "56px",
        top: "144px",
        left: "20px",
        gap: "10px",
        opacity: 1,
        borderRadius: "8px",
        padding: "16px",
        background: "var(--Colors-Background-Warning, #FEF3C7)",
        boxShadow: "0px 1px 2px -1px #1018281A, 0px 1px 3px 0px #1018281A",
      },
      warningMessage: {
        width: "221px",
        height: "24px",
        fontFamily: "Inter, sans-serif",
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0%",
        color: "var(--Colors-Text-Warning, #F59E0B)",
      },
      warningIcon: {
        width: "24px",
        height: "24px",
        opacity: 1,
        color: "#F59E0B",
      },
      warningLine: {
        width: "300px",
        height: "0px",
        border: "3px solid var(--Colors-Icon-Warning, #F59E0B)",
        opacity: 1,
      },
    },
  },
  /////                     </rejected>                      ////////

  typography: {
    fontFamily: "Poppins,Inter,Cinzel_Decorative",
    titleLarge: { fontFamily: "var(--font-poppins)", fontSize: 36, fontWeight: 700, lineHeight: 1.2 },
    titleMedium: { fontFamily: "var(--font-poppins)", fontSize: 28, fontWeight: 600, lineHeight: 1.2 },
    titleSmall: { fontFamily: "var(--font-poppins)", fontSize: 24, fontWeight: 600, lineHeight: 1.2 },
    titleSpecial:{ fontFamily: "var(--font-cinzel)", fontSize: 24, fontWeight: 400, background: "linear-gradient(90deg, #1B2351 0%, #47C0D2 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", textShadow: "0px 4px 4px #00000040" },
    bodyLarge: { fontFamily: "var(--font-poppins)", fontSize: 32, fontWeight: 700, lineHeight: 1.2 },
    bodyMedium: { fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 500, lineHeight: "100%", textAlign: "center" },
    captionLarge: { fontFamily: "var(--font-poppins)", fontSize: 24, fontWeight: 700, lineHeight: 1.2 },
    captionMedium: { fontFamily: "var(--font-poppins)", fontSize: 12, fontWeight: 600, lineHeight: 1.2 },
    captionSmall: { fontFamily: "var(--font-poppins)", fontSize: 8, fontWeight: 400, lineHeight: 1.2, color:"black" },
    link:{fontFamily: "var(--font-inter)", fontSize:16,fontWeight:500,cursor:"pointer"},
  },

  buttonSizes: {
    small: { width: "127px", height: "32px", typography: "bodyMedium" },
    medium: { width: "135px", height: "40px", typography: "bodyMedium" },
    large: { width: "207px", height: "40px", typography: "bodyMedium" },
  },

  buttonVariants: {
    outline: {
      border: "1px solid #1B2351",
      color: "#1B2351",
      hoverBg: "rgba(27,35,81,0.08)",
      activeBg: "rgba(27,35,81,0.16)",
    },
    text: {
      color: "#1B2351",
      hoverDecoration: "underline",
    },
  },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          width: theme.tokens.inputs.width,
          "& .MuiOutlinedInput-root": {
            height: theme.tokens.inputs.height,
            borderRadius: theme.tokens.inputs.borderRadius,
            backgroundColor: theme.tokens.inputsColors.background,
            boxShadow: theme.tokens.inputs.boxShadow,
            "& fieldset": {
              borderColor: theme.tokens.inputsColors.border,
            },
            "&:hover fieldset": {
              borderColor: theme.palette.primary.main,
            },
            "&.Mui-focused fieldset": {
              borderColor: theme.palette.primary.main,
              boxShadow: "0px 4px 8px rgba(27,35,81,0.4)",
            },
            "& input": {
              padding: theme.tokens.inputs.padding,
              fontSize: theme.tokens.inputs.fontSize,
              fontFamily: theme.typography.fontFamily,
              color: theme.tokens.typographyColors.body,
            },
            "& input::placeholder": {
              color: theme.tokens.inputsColors.placeholder,
              opacity: 1,
            },
          },
          "& .MuiInputLabel-root": {
            width: theme.tokens.inputs.label.width,
            height: theme.tokens.inputs.label.height,
            fontFamily: theme.tokens.inputs.label.fontFamily,
            fontWeight: theme.tokens.inputs.label.fontWeight,
            fontSize: theme.tokens.inputs.label.fontSize,
            lineHeight: theme.tokens.inputs.label.lineHeight,
            color: theme.tokens.inputs.label.color,
            marginBottom: theme.spacing(0.5),
          },
          "& .MuiFormHelperText-root": {
            width: theme.tokens.inputs.error.width,
            height: theme.tokens.inputs.error.height,
            fontFamily: theme.tokens.inputs.error.fontFamily,
            fontWeight: theme.tokens.inputs.error.fontWeight,
            fontSize: theme.tokens.inputs.error.fontSize,
            lineHeight: theme.tokens.inputs.error.lineHeight,
            color: theme.palette.error.main,
          },
        }),
      },
    },
  },
});
