import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Option 1: Allow all domains (wildcard not officially supported, so use remotePatterns instead)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // match any domain
      },
    ],
  },
};

export default nextConfig;
