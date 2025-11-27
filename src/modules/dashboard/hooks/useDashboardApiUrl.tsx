"use client";

import { useSearchParams } from "next/navigation";

const useDashboardApiUrl = () => {
  const searchParams = useSearchParams();

  const allParams = Object.fromEntries(searchParams.entries());

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { tab, program, ...rest } = allParams || {};

  const param = Object.entries(rest).reduce((acc, [key, value]) => {
    if (!key || !value) {
      return acc;
    }

    return acc + `&${key}=${value}`;
  }, "");

  const getDashboardAPiUrl = (key: string) => {
    if (!Object.keys(allParams).length) {
      return `/dashboard?program=${key}`;
    }

    return `/dashboard?program=${key}${param}`;
  };

  const getInitialDashboardApiUrl = (key: string) => {
    return `/dashboard?program=${key}`;
  };

  return { getDashboardAPiUrl, getInitialDashboardApiUrl };
};

export default useDashboardApiUrl;
