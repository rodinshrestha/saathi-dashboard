import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    styledComponents: true, // this enables SSR + displayName + better debugging
  },
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)", // or "/api/:path*" if you want only API routes
  //       headers: [
  //         {
  //           key: "Content-Security-Policy",
  //           value: `
  //             default-src 'self';
  //             script-src 'self';
  //             style-src 'self' 'unsafe-inline';
  //             img-src 'self' data:;
  //             connect-src 'self' https://saathi.kumo-labs.com;
  //             font-src 'self';
  //           `.replace(/\s{2,}/g, " "),
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
