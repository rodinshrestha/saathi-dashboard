"use client";

import React from "react";

import { ThemeProvider } from "styled-components";

import { createTheme } from "@/theme/theme";

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
    false
  );

  const toggleTheme = () => setIsDark((prev) => !prev);

  const theme = createTheme(isDark ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
