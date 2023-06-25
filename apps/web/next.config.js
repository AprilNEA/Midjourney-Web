/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.midjourney.com",
        pathname: "/**/*.png",
      },
      {
        protocol: "https",
        hostname: "*.discord.com",
        port: "443",
      },
    ],
  },
};

module.exports = nextConfig;
