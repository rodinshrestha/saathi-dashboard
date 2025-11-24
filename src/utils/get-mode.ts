import { getCookie } from "./cookie";

export const isDarkMode = () => {
  if (typeof window === "undefined") return;

  return getCookie("mode") === "dark";
};
