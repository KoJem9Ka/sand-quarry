// noinspection HtmlRequiredTitleElement

import type { Metadata, Viewport } from 'next';
import type { PropsWithChildren } from 'react';
import localFont from 'next/font/local';
import { config } from '@/backbone/config';
import { YandexMetrics } from '@/app/[locale]/YandexMetrics';
import { AppConfig, hasLocale, NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
// @ts-expect-error ???
import '@/app/globals.css';


const Geologica = localFont({
  src: '../../../public/fonts/Geologica-VariableFont_CRSV,SHRP,slnt,wght.ttf',
  preload: true,
  weight: '100 900',
  display: 'block',
});

export async function generateMetadata({ params }: Readonly<{ params: Promise<{ locale: AppConfig['Locale'] }> }>): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    metadataBase: config.domain,
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: locale === 'ru' ? config.domain.href : new URL(locale, config.domain).href,
      languages: {
        'ru': new URL('ru', config.domain).href,
        'en': new URL('en', config.domain).href,
        'x-default': new URL('ru', config.domain).href,
      },
    },
    openGraph: {
      type: 'website',
      locale,
      url: config.domain,
      title: t('title'),
      description: t('description'),
      siteName: t('title'),
      images: {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: t('description'),
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
    applicationName: t('title'),
    appleWebApp: { capable: true, title: t('title'), statusBarStyle: 'default' },
    formatDetection: { telephone: true, date: true, address: true, email: true, url: true },
    robots: { index: true, follow: true },
  };
}


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default async function RootLayout(
  { children, params }: Readonly<PropsWithChildren<{ params: Promise<{ locale: string }> }>>,
) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  return (
    <html lang={locale} className={Geologica.className}>
    <head>
      <YandexMetrics/>
    </head>
    <body>
    <NextIntlClientProvider>
      {children}
    </NextIntlClientProvider>
    </body>
    </html>
  );
}
