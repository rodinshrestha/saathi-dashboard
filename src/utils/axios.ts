"use client";
import axios from "axios";

import { ACCESS_TOKEN } from "@/constant/token.constant";

import { getCookie, removeCookie } from "./cookie";

const publicAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // if you use cookies/auth tokens
});

publicAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

const authAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/",
  timeout: 10000, // 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // if you use cookies/auth tokens
});

authAxios.interceptors.request.use(
  (config) => {
    // Example: attach token if available
    const token = getCookie(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

authAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    // Optional: handle global errors
    if (error.response?.status === 401) {
      removeCookie(ACCESS_TOKEN);
      // window.location.reload();
      // handle logout or redirect logic
    }
    return Promise.reject(error);
  }
);

export { authAxios, publicAxios };
