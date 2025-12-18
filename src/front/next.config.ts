import withLinaria from 'next-with-linaria';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  // ★ ここに画像設定を追加
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
} as const

//ToDo: anyの使用をなくす
export default withLinaria(config as any);