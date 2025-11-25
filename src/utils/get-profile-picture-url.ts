export const getProfilePictureUrl = (data: File | string) => {
  if (typeof data === "string") {
    return data;
  }

  return URL.createObjectURL(data);
};
