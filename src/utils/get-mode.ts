export const isDarkMode = () => {
  if (typeof window === "undefined") return;

  return localStorage.getItem("mode") === "dark";
};
