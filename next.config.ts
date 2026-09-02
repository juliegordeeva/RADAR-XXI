import type { NextConfig } from "next";

const onGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: onGitHubPages ? "/RADAR-XXI" : "",
};

export default nextConfig;
