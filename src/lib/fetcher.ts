import { ACCESS_TOKEN } from "@/constant/token.constant";
import { getCookie } from "@/utils/cookie";

export const fetcher = async (url: `/${string}`) => {
  const baseURL = process.env.NEXT_PUBLIC_API_URL;

  if (!baseURL) {
    throw new Error(".env file not found ");
  }

  const token = getCookie(ACCESS_TOKEN);
  const res = await fetch(`${baseURL}${url}`, {
    next: { revalidate: 0 },
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }); // always fresh

  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};
