import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  exports : {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:5001/:path*', // Endpoint local
        },
      ];
    },
  }
};

export default nextConfig;
