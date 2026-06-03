import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site to `out/` for Cloudflare Pages.
  output: "export",
  // Static export has no image optimization server, so serve images as-is.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
