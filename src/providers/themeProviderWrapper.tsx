"use client"
import { theme } from "../config/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";

export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
      <CssBaseline />
    </>
  );
}
