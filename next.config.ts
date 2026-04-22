import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "vibe.filesafe.space" },
      { hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
