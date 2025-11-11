/**
 * List of colors which depends in dark / light mode
 */
export const lightPrimaryColor = {
  backgroundColor: {
    highContrast: "#F3F3F5",
    lowContrast: "#fff",
  },
  hoverBgColor: {
    highContrast: "#F3F3F5",
  },
  skeletonBgColor: {
    highContrast: "#F3F3F5",
    lowContrast: "#fff",
  },
  cardBgColor: {
    highContrast: "#fff",
  },
  textColor: {
    highContrast: "#0A0A0A",
    lowContrast: "#717182",
  },
  borderColor: {
    highContrast: "#0000001a",
  },
  outlineColor: {
    highContrast: "#5A5A5A80",
  },
  boxShadow:
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px",
};

/**
 * It must have all the properties define in the light color
 * And value must not be blank else it break the dark mode.
 */
export const darkPrimaryColor: typeof lightPrimaryColor = {
  backgroundColor: {
    highContrast: "#101828",
    lowContrast: "#101828",
  },
  hoverBgColor: {
    highContrast: "#ffffff08",
  },
  skeletonBgColor: {
    highContrast: "#A9A9A9",
    lowContrast: "#999999",
  },
  cardBgColor: {
    highContrast: "#ffffff08",
  },
  textColor: {
    highContrast: "#FAFAFA",
    lowContrast: "#A9A9A9",
  },
  borderColor: {
    highContrast: "#1d2939",
  },
  outlineColor: {
    highContrast: "#5A5A5A80",
  },
  boxShadow:
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
};

/**
 * Rest of other colors
 */
export const color = {
  blue: {
    100: "#3A86FF",
    200: "#2F6FD1",
    300: "#3b82f6",
  },
  green: {
    100: "#10b981",
    200: "#0A7B43",
    300: "#06532E",
    400: "#008236",
  },
  orange: {
    100: "#FF6B35",
    200: "#d4183de6",
  },
  yellow: {
    100: "#FFD93D",
  },
  white: {
    100: "#fff",
    200: "#f3f3f3",
  },
  grey: {
    100: "#A0AEC0",
    200: "#e9ebef",
    300: "#ececf0",
  },
  red: {
    100: "#D4183D",
  },
  black: {
    100: "#0A0A0A",
    200: "#000",
    300: "#333",
  },
};
