import type { NextConfig } from "next";

const isStaticExport = process.env.OUTPUT_MODE === "export";

// GitHub Pages project site: https://nikitakozemyaka.github.io/Text-adventure/
const basePath =
  process.env.BASE_PATH !== undefined
    ? process.env.BASE_PATH
    : isStaticExport
      ? "/Text-adventure"
      : "";

const nextConfig: NextConfig = {
  output: isStaticExport ? "export" : undefined,

  ...(basePath && {
    basePath,
    assetPrefix: basePath,
  }),

  ...(isStaticExport && {
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
  }),
  allowedDevOrigins: ["*"],

  devIndicators: false,
  poweredByHeader: false,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    serverSourceMaps: false,
    turbopackSourceMaps: false,
  }
};

export default nextConfig;
