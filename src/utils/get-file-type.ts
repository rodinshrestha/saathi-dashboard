export const getFileType = (filetype: string) => {
  if (!filetype) return "";

  const extension = filetype.split("/");

  return extension[0];
};
