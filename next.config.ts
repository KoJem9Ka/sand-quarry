import type { NextConfig } from 'next';


// const isDev = process.env.NODE_ENV === 'development';
// const isProd = !isDev;

// const basePath = isProd ? '/emirocks' : undefined;

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // basePath,
  // env: { BASE_PATH: basePath },
};

export default nextConfig;
