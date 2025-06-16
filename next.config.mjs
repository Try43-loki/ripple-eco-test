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
      {
        source: "/organizer",
        destination: "/organizer/overview",
        permanent: false, // Set to true if this should be a 308 Permanent Redirect
      },
    ];
  },
  env: {
    // NEXT_APIURL: "http://34.101.52.71:8883/api/v1",
    // NEXT_APIURL: "http://192.168.42.98:8883/api/v1",
    NEXT_APIURL: "https://ripple-api.kshrd.app/api/v1",
  },
};

export default nextConfig;
