/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/steindigital" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/steindigital/" : "",
};

module.exports = nextConfig;
