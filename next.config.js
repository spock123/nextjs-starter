const nextTranslate = require('next-translate');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  env: {},
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withPWA(nextTranslate(withBundleAnalyzer(nextConfig)));
