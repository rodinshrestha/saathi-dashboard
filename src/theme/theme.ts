import { darkPrimaryColor, lightPrimaryColor } from "./color";

import { theme } from ".";

export const createTheme = (mode: "light" | "dark") => ({
  ...theme,
  color: {
    ...theme.color,
    ...(mode === "light" ? lightPrimaryColor : darkPrimaryColor),
  },
});

export type ThemeType = ReturnType<typeof createTheme>;
