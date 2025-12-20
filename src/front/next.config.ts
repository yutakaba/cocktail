import type { NextConfig } from 'next';
import withLinaria from 'next-with-linaria';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // swcMinifyは現在のNext.jsではデフォルトのため削除（警告対策）
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.thecocktaildb.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
}

export default withLinaria(nextConfig);