/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.WP_IMAGES_URL],
    unoptimized: process.env.WP_IMAGES_UNOPTIMIZE === "true" ? true : false,
    
  },
};

module.exports = nextConfig;
