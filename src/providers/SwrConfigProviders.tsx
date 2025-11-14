"use client";

import { SWRConfig } from "swr";

import { fetcher } from "@/lib/fetcher";

export function SwrConfigProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SWRConfig
      value={{
        fetcher,
        dedupingInterval: 0, // always fetch fresh
        revalidateOnFocus: true, // refetch on tab focus
        revalidateOnReconnect: true, // refetch on network reconnect
      }}
    >
      {children}
    </SWRConfig>
  );
}
