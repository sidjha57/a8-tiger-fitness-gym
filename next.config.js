/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.shopify.com", "media.giphy.com"],
  },
};

module.exports = nextConfig;
