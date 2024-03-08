/** @type {import('next').NextConfig} */
const bundleAnalyzer = require("@next/bundle-analyzer");

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const moduleExports = withBundleAnalyzer({
  reactStrictMode: false,
});

module.exports = moduleExports;
