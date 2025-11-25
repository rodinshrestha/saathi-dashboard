export const getLocalStorage = (key: string) => {
  if (typeof window === "undefined") return;
  if (!key) {
    throw Error("key cannot be empty");
  }

  return localStorage.getItem(key);
};

export const setLocalStorage = (key: string, value: string) => {
  if (!key || !value) {
    throw new Error("Key or value cannot be empty");
  }

  localStorage.setItem(key, value);
};
