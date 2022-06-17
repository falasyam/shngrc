const { default: build } = require("next/dist/build");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/photo',
        destination: '/',
        permanent: true,
      },
      {
        source: '/video',
        destination: '/',
        permanent: true,
      },
    ]
  },
};

/** module.exports = nextConfig */
