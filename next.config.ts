import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // strictMode: true,
  // experimental: {
  //   ppr: 'incremental',
  // },

  // assetPrefix: process.env.NODE_ENV === 'development' ? 'http://172.16.5.205:3000' : '',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thirdwx.qlogo.cn',
        port: '',
        pathname: '/mmopen/**',
      },
    ],
  },
};

export default nextConfig;
