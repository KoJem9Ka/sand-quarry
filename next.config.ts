import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';


// const isDev = process.env.NODE_ENV === 'development';
// const isProd = !isDev;

const isGithubPages = process.env.NEXT_PUBLIC_BUILD_FOR === 'github';
const basePath = isGithubPages ? '/sand-quarry' : undefined;

console.log(`NextJS mode for ${isGithubPages ? 'GitHub Pages' : process.env.NODE_ENV} with basePath="${basePath}"`);

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath,
  env: { BASE_PATH: basePath },
} as const satisfies NextConfig;

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
