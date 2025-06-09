/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "100mb",
    },
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: false, // Set to true if this should be a 308 Permanent Redirect
      },
    ];
  },
  env: {
    NEXT_APIURL: "http://34.101.213.159:8883/api/v1",
  },
};

export default nextConfig;
