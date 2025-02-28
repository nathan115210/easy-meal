import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { protocol: "https", hostname: "*" },
      //TODO: Remove the following line to after get the connected with SQLite
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  experimental: {
    ppr: "incremental",
  },
  // Add the following configuration to trust localhost
  env: {
    AUTH_TRUSTED_HOSTS: "localhost",
  },
};

export default nextConfig;
