// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // disable Turbopack, fallback to Webpack
  },
};

module.exports = nextConfig;
