/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // Disables custom turbopack behavior; keeps it compatible with Webpack fallback
    rules: {},
  },
  outputFileTracingRoot: __dirname,
  output: "standalone",
};

module.exports = nextConfig;
