/**
 * List of colors which depends in dark / light mode
 */
export const lightPrimaryColor = {
  backgroundColor: {
    highContrast: "#F5F6FA",
  },
  text: {
    highContrast: "#252525",
    lowContrast: "#717182",
  },
  borderColor: {
    highContrast: "#0000001a",
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
    highContrast: "#000",
  },
  text: {
    highContrast: "#FAFAFA",
    lowContrast: "#A9A9A9",
  },
  borderColor: {
    highContrast: "#FFFFFF1A",
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
  },
  green: {
    100: "#10b981",
  },
  orange: {
    100: "#FF6B35",
  },
  yellow: {
    100: "#FFD93D",
  },
};
