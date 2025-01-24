/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      POSTGRES_URL: process.env.POSTGRES_URL,
      // 다른 환경변수들...
    }
  };
  
export default nextConfig;
