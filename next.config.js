/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/about-us/index": { page: "/about-us" },
      "/all-skills/index": { page: "/all-skills" },
      "/contacts/index": { page: "/contacts" },
      "/contract/index": { page: "/contract" },
    };
  },
};

module.exports = nextConfig;
