import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Exec photos are served from the Sanity image CDN.
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io", pathname: "/images/**" },
    ],
  },
};

export default nextConfig;
