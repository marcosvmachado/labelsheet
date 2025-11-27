import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
    images: {
      remotePatterns: [
        { hostname: 'www.google.com.br' }
      ]
    }
  
};

export default nextConfig;
