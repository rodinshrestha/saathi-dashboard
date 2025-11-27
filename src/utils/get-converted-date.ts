export const getConvertedDate = (date: string | Date | null) => {
  if (!date) {
    return "";
  }

  if (typeof date === "string") {
    return date;
  }

  return (date as Date).toISOString().split("T")[0];
};

export const formatDateToYMD = (isoString: string) => {
  if (!isoString) return "";

  return new Date(isoString).toISOString().split("T")[0];
};

//yyyy-MM-dd (e.g 2025-Apr-27)
export const getCurrentDate = () => {
  const today = new Date();

  const yyyy = today.getFullYear();
  const monthAbbr = today.toLocaleString("en-US", { month: "short" });
  const dd = String(today.getDate()).padStart(2, "0");

  return `${yyyy}-${monthAbbr}-${dd}`;
};
