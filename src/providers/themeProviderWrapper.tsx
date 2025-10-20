"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "@/config/theme";
import { ToasterProvider } from "@/providers/ToasterProvider"; // ✅ أصلحنا مسار الاستيراد كمان

// ✅ استيراد مكونات الـ DatePicker
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* ✅ أضفنا LocalizationProvider هنا فقط */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ToasterProvider>{children}</ToasterProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

