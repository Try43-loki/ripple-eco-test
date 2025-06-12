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
    NEXT_APIURL: "https://ripple-api.kshrd.app/api/v1",
  },
};

export default nextConfig;
