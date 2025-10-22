/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: { rules: {} },
  eslint: {
    ignoreDuringBuilds: true, // ← ignores lint errors/warnings
  },
  outputFileTracingRoot: __dirname,
  output: "standalone",
};

module.exports = nextConfig;
