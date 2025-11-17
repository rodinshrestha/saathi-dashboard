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
