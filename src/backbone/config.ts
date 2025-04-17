export const config = {
  domain: new URL('https://sandbiz.ru'),
  email: 'admin@sandbiz.ru',
  isProd: process.env.NODE_ENV === 'production',
  isDev: process.env.NODE_ENV === 'development',
  isGutHubPages: process.env.NEXT_PUBLIC_BUILD_FOR === 'github',
  base: process.env.BASE_PATH as string || '/',
};
