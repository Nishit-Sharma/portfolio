import MillionLint from '@million/lint';

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  turbopack: {},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  webpack: (config) => {
    // Ensure optional 'canvas' dependency is stubbed out for server bundles if present
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

export default MillionLint.next({
  rsc: true,
})(nextConfig);