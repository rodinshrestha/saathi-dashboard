import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    styledComponents: true, // this enables SSR + displayName + better debugging
  },
};

export default nextConfig;
