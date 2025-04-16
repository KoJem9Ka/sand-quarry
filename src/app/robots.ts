import type { MetadataRoute } from 'next';
import { config } from '@/backbone/config';


export const dynamic = 'force-static';
export const revalidate = false;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: new URL('sitemap.xml', config.domain).href,//'https://sandbiz.ru/sitemap.xml',
  };
}
