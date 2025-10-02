"use client";

import React, { createContext, useContext } from "react";
import { theme } from "./theme";

const ThemeContext = createContext(theme);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
