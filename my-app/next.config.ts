/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // use an empty object instead of "false" to disable custom Turbopack rules safely
    turbo: {
      rules: {},
    },
  },
  // helps with Vercel and monorepo detection warnings
  outputFileTracingRoot: __dirname,
  output: "standalone",
};

module.exports = nextConfig;
