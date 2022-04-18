// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  images: {
    domains: ['cdn.itaphoa.com', 'mio-app-dev.s3.ap-southeast-1.amazonaws.com'],
  },
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
    swcMinify: true,
    experimental: {
      urlImports: ['https://cdn.skypack.dev'],
      outputStandalone: true,
    },
  },
};

module.exports = withNx(nextConfig);
