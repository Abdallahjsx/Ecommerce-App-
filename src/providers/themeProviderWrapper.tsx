"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "@/config/theme";
import { ToasterProvider } from "@//providers/ToasterProvider";

export default function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToasterProvider>{children}</ToasterProvider>
    </ThemeProvider>
  );
}

