import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eu.christianlouboutin.com',
      },

      {
        protocol: 'https',
        hostname: 'us.christianlouboutin.com',
      },

      {
        protocol: 'https',
        hostname: "res.cloudinary.com"
      }
    ],
  }
};

export default nextConfig;
