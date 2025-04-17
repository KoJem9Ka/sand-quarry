export const config = {
  domain: new URL('https://sandbiz.ru'),
  email: 'admin@sandbiz.ru',
  isProd: process.env.NODE_ENV === 'production',
  isDev: process.env.NODE_ENV === 'development',
  base: process.env.BASE_PATH as string || '/',
};
