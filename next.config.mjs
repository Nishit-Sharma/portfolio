import MillionLint from '@million/lint';
import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      resolveAlias: {
        './Sample.js': './app/Sample.tsx',
        canvas: './empty-module.ts'
      }
    }
  },
  images: {
    domains: ['nishitsharma.vercel.app'],
  },
  webpack: (config, options) => {
    config.resolve.alias.canvas = false;
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts', '.tsx']
    };
    config.module.rules.push({
      test: /\.(pdf)$/,
      type: "asset/resource"
    });
    return config;
  }
};

const withPWAConfig = withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

export default MillionLint.next({
  rsc: true
})(withPWAConfig(nextConfig));