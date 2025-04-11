import type { Metadata, Viewport } from 'next';
import type { PropsWithChildren } from 'react';
import localFont from 'next/font/local';
import { config } from '@/backbone/config';
import { YandexMetrics } from '@/app/YandexMetrics';
// @ts-expect-error ???
import '@/app/globals.css';


const Geologica = localFont({
  src: '../../public/fonts/Geologica-VariableFont_CRSV,SHRP,slnt,wght.ttf',
  preload: true,
  weight: '100 900',
  display: 'block',
});

export const metadata: Metadata = {
  metadataBase: config.domain,
  title: 'Песчаный карьер',
  description: 'Продается новый крупнейший песчаный карьер России',
  alternates: { canonical: config.domain, languages: { 'x-default': '/', 'ru': '/' } },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: config.domain,
    title: 'Ипотека ОАЭ повысит доход от инвестиций в 3 раза',
    description: 'Оформим за 3 месяца «под ключ» с юридической гарантией',
    siteName: 'EMIROCKS',
    images: {
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Ипотека ОАЭ',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    // other: [{ rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#ffffff' }],
  },
  applicationName: 'EMIROCKS',
  appleWebApp: { capable: true, title: 'EMIROCKS', statusBarStyle: 'default' },
  formatDetection: { telephone: true, date: true, address: true, email: true, url: true },
  robots: { index: true, follow: true },
  keywords: 'ипотека ОАЭ, недвижимость Дубай, золотая виза, инвестиции в ОАЭ, доходность недвижимости, ипотечное кредитование, Эмираты',
  category: 'finance',
  classification: 'real estate, mortgage, investment',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="ru" className={Geologica.className}>
      <head>
        <YandexMetrics/>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
