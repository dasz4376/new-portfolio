import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
    root: __dirname,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://new-portfolio-muddy-feather-9100.fly.dev/:path*",
      },
    ];
  },
};

export default nextConfig;
