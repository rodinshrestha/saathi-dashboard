export const getConvertedDate = (date: Date | null) => {
  if (!date) {
    console.error("Date cannot be null");
    return;
  }

  return date.toISOString().split("T")[0];
};
