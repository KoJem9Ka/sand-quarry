export const config = {
  domain: new URL('https://sandquarry.ru'), // TODO
  isProd: process.env.NODE_ENV === 'production',
  isDev: process.env.NODE_ENV === 'development',
  base: process.env.BASE_PATH as string || '/',
};
