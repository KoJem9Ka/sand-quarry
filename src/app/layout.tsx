import type { PropsWithChildren } from 'react';
import { generateMetadata as generateMetadataWithLocale } from '@/app/[locale]/layout';
import type { Metadata } from 'next';


export async function generateMetadata(): Promise<Metadata> {
  return generateMetadataWithLocale({ params: Promise.resolve({ locale: 'ru' }) });
}

export default function RootLayout({ children }: PropsWithChildren) {
  return children;
}
