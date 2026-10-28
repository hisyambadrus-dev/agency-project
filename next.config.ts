import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: isGithubActions ? "export" : undefined,
  basePath: isGithubActions ? "/agency-project" : "",
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;

