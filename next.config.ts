import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enforces React strict mode

  // Custom Webpack configuration (optional, only if necessary)
  webpack(config, { isServer }) {
    // Modify server-side Webpack config if necessary
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },

  // Optional: Disable ESLint during builds (only if necessary)
  eslint: {
    ignoreDuringBuilds: true, // Optional: Disable ESLint during build
  },

  // Image configuration (adjust if you're using external images)
  images: {
    domains: ['yourdomain.com'], // Allow external domains for images
  },
};

export default nextConfig;
