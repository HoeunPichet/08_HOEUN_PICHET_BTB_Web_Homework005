/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.pinimg.com"], // Add your external image domains here
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://nextjs-homework005.vercel.app/api/:path*", // Proxy to backend
      },
    ];
  },
};

export default nextConfig;
