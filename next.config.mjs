import MillionLint from '@million/lint';
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      resolveAlias: {
        // Turbopack does not support standard ESM import paths yet
        './Sample.js': './app/Sample.tsx',
        /**
         * Critical: prevents " ⨯ ./node_modules/canvas/build/Release/canvas.node
         * Module parse failed: Unexpected character '�' (1:0)" error
         */
        canvas: './empty-module.ts'
      }
    }
  },
  webpack: (config, options) => {
    output: "standalone",
    /**
     * Critical: prevents " ⨯ ./node_modules/canvas/build/Release/canvas.node
     * Module parse failed: Unexpected character '�' (1:0)" error
     */
    config.resolve.alias.canvas = false;

    // You may not need this, it's just to support moduleResolution: 'node16'
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
  rsc: true
})(nextConfig);