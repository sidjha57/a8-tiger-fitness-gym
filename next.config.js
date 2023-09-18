/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
    domains: ["cdn.shopify.com"],
  },
};

module.exports = nextConfig;
