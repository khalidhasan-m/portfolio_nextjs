/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Local /public images need no remote config.
    // remotePatterns reserved if you later load external screenshots.
    remotePatterns: [],
  },
};

module.exports = nextConfig;
