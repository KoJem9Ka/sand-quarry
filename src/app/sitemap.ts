import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { config } from '@/backbone/config';

export const dynamic = 'force-static';
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [{ path: '', priority: 1.0 }];

  return routes.flatMap((route) => routing.locales.map((locale) => {
      const url = new URL(`${locale}${route.path}`, config.domain).href;

      return {
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route.priority,
        alternates: {
          languages: {
            'ru': new URL(`ru${route.path}`, config.domain).href,
            'en': new URL(`en${route.path}`, config.domain).href,
          },
        },
      };
    }),
  );
}
