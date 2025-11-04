import Cookies from "js-cookie";

export const setCookie = (tokenKey: string, token: string) => {
  if (!tokenKey || !token) {
    throw new Error("token key and token both are required to save the token");
  }

  Cookies.set(tokenKey, token, {
    expires: 365, // 365days i.e 1year
    secure: true,
  });
};

export const getCookie = (tokenKey: string) => {
  if (!tokenKey) {
    throw new Error("Token key cannot be empty");
  }

  return Cookies.get(tokenKey);
};

export const removeCookie = (tokenKey: string) => {
  if (!tokenKey) {
    throw new Error("Token key cannot be empty");
  }

  Cookies.remove(tokenKey);
};
