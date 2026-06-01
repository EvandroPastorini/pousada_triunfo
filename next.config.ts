import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost", "192.168.1.93"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
