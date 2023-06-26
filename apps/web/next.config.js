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
  webpack(config) {
    config.module.rules.push({
      /* Processing rules for SVG */
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
