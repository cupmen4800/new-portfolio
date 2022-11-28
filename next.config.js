/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com']
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
  },
  trailingSlash: true,
}

module.exports = nextConfig;
