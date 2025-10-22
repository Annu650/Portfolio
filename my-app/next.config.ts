// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // disable Turbopack, fallback to Webpack
  },
  output: "standalone",
};

module.exports = nextConfig;
