import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    styledComponents: true, // this enables SSR + displayName + better debugging
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "saathiorg.kumo-labs.com", // ← your domain
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
