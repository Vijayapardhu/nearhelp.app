import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel handles Next.js natively - no static export needed
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
