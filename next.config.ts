import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';


const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const basePath = isProd ? '/sand-quarry' : undefined;

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath,
  env: { BASE_PATH: basePath },
} as const satisfies NextConfig;

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
