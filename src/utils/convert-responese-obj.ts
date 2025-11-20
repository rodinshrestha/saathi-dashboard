export const convertResponseObj = (obj: { [Key: string]: unknown }) => {
  if (Object(obj).key === 0) {
    throw Error("Object cannot be empty");
  }

  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (!value) {
      return { ...acc, [key]: null };
    }

    return { ...acc, [key]: value };
  }, {});
};
