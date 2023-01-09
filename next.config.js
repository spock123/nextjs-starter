/* eslint-disable @typescript-eslint/no-var-requires */

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
});

const plugins = [];

if (process.env.ANALYZE === 'true') {
  // only load dependency if env `ANALYZE` was set
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true
  });

  plugins.push(withBundleAnalyzer);
}

plugins.push(withPWA);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  }
};

module.exports = () => plugins.reduce((acc, next) => next(acc), nextConfig);

/*

const nextTranslate = require('next-translate');
const runtimeCaching = require('next-pwa/cache');

const plugins = [];

// Service worker configuration
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
});

if (process.env.ANALYZE === 'true') {
  // only load dependency if env `ANALYZE` was set
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true
  });
  plugins.push(withBundleAnalyzer);
}

plugins.push(withPWA);


/** @type {import('next').NextConfig} */
/*
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  appDir: true,
  productionBrowserSourceMaps: false,
  env: {},
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
  },
  images: {
    domains: ['images.dog.ceo']
  },
  experimental: {
    appDir: true
  }
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});
module.exports = withPWA(nextTranslate(withBundleAnalyzer(nextConfig)));
*/
