/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/buy/index": { page: "/buy" },
      "/contacts/index": { page: "/contacts" },
      "/contract/index": { page: "/contract" },
    };
  },
};

module.exports = nextConfig;
