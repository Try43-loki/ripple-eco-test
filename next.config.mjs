/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

export default nextConfig;
