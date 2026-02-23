export const config = {
  domain: new URL('https://sandbiz.ru'),
  contacts: {
    // email: 'admin@sandbiz.ru',
    // telegram: 'https://t.me/inndigga',
    // whatsapp: 'https://wa.me/79053333774',
    email: 'zotsviktor4@mail.ru',
    telegram: 'https://t.me/Atei467',
    whatsapp: 'https://wa.me/79252114677',
  },
  isProd: process.env.NODE_ENV === 'production',
  isDev: process.env.NODE_ENV === 'development',
  isGutHubPages: process.env.NEXT_PUBLIC_BUILD_FOR === 'github',
  base: process.env.BASE_PATH as string || '/',
};
