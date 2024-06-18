/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'www.gutenberg.org',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
      },
    ],
  },
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
