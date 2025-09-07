/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["localhost"],
  },
  // Enable static exports if needed for deployment
  // output: 'export',
  // trailingSlash: true,
};

module.exports = nextConfig;
