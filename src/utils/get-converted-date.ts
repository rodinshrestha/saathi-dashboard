export const getConvertedDate = (date: string | Date | null) => {
  if (!date) {
    return "";
  }

  if (typeof date === "string") {
    return date;
  }

  return (date as Date).toISOString().split("T")[0];
};
