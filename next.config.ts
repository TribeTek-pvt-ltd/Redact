import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["picsum.photos"], // <-- allow Picsum
  },
  /* config options here */
};

export default nextConfig;
