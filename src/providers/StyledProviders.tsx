"use client";

import React from "react";

import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "@/theme/globalStyles";
import { createTheme } from "@/theme/theme";
import { isDarkMode } from "@/utils/get-mode";

type ThemeContextType = {
  toggleTheme: () => void;
  isDark: boolean;
};

const ThemeContext = React.createContext<ThemeContextType>({
  toggleTheme: () => {},
  isDark: false,
});

export const useTheme = () => React.useContext(ThemeContext);

type Props = {
  children: React.ReactNode;
};

export default function StyledProviders({ children }: Props) {
  const [isDark, setIsDark] = React.useState(
    // window.matchMedia("(prefers-color-scheme: dark)").matches
    isDarkMode() || false
  );

  const toggleTheme = () => setIsDark((prev) => !prev);

  const theme = createTheme(isDark ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
