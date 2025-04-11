const config = {
  plugins: [
    '@tailwindcss/postcss',
    'autoprefixer',
    'postcss-flexbugs-fixes',
    ...(process.env.NODE_ENV === 'production' ? ['cssnano'] : []),
    // [
    //   'postcss-preset-env',
    //   {
    //     'autoprefixer': {
    //       'flexbox': 'no-2009',
    //     },
    //     'stage': 3,
    //     'features': {
    //       'custom-properties': false,
    //     },
    //   },
    // ],
    // ['@fullhuman/postcss-purgecss', {
    //   content: ["./src/components/**/*.{js,jsx,ts,tsx}"],
    //   defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    //   safelist: ['html', 'body'],
    // }],
  ],
};

export default config;
