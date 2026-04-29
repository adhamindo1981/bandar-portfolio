import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';
import path from 'path';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve('.'),
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raed.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.raed.net',
        pathname: '/**',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
