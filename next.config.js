const nextTranslate = require('next-translate');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  env: {},
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = nextTranslate(withBundleAnalyzer(nextConfig));
