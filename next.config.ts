import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // This is the key line for manual uploads
  images: {
    unoptimized: true, // Required for static exports
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
