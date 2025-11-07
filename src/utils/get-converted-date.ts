export const getConvertedDate = (date: string | Date | null) => {
  if (!date) {
    console.error("Date cannot be null");
    return;
  }

  if (typeof date === "string") {
    return date;
  }

  return (date as Date).toISOString().split("T")[0];
};
