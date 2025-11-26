export const getNameShell = (str: string) => {
  if (!str) return "-";

  const parts = str.trim().split(/\s+/); // split by spaces

  if (parts.length === 0 || !parts[0]) return "";

  // Only first name provided → return just first letter
  if (parts.length === 1) {
    return parts[0][0];
  }

  // Full name → first letter of first + first letter of last
  const first = parts[0][0];
  const last = parts[parts.length - 1][0];

  return first + last;
};
