/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/test',
        destination: '/projects/meta-financial-analysis',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
