/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.anytimeastro.com' },
      { protocol: 'https', hostname: 'wpcontent.anytimeastro.com' },
    ],
  },
};

module.exports = nextConfig;
