const { withContentlayer } = require('next-contentlayer');


/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    async redirects() {
        return [
          {
            source: '/rsc-integration',
            destination: 'https://github.com/reactjs/server-components-demo/commit/37f20f98ce21a4ca3f29d66fd77d08e95c6fd003',
            permanent: true,
          },
        ]
      },
};

module.exports = withContentlayer(nextConfig);
