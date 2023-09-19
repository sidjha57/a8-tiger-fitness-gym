/** @type {import('next').NextConfig} */


const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  images: {
    domains: ["cdn.shopify.com", "media.giphy.com", "apis.google.com"],
  },
});
