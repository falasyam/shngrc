const { default: build } = require("next/dist/build");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  distDir: "build",
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      "/": { page: "/" },
    };
  },
};

/** module.exports = nextConfig */
