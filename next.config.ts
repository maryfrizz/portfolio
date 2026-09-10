import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages serves the generated `out` directory as static files.
  output: "export",
  trailingSlash: true,
  // The default Next.js image optimizer needs a Node.js server. Cloudflare
  // Pages can serve the source assets directly instead.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
