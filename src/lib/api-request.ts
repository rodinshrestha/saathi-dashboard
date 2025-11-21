"use server";
import { cookies } from "next/headers";

import { ACCESS_TOKEN } from "@/constant/token.constant";

export const apiRequest = async (url: `/${string}`) => {
  const baseURL = process.env.NEXT_PUBLIC_API_URL;

  if (!baseURL) {
    throw new Error(".env file not found ");
  }

  const token = (await cookies()).get(ACCESS_TOKEN)?.value;

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
