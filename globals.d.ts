import { routing } from '@/i18n/routing';
import { formats } from '@/i18n/request';
import { MessagesRU } from '@/i18n/messages/ru';
import { MessagesEn } from '@/i18n/messages/en';


declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof MessagesRU/* | typeof MessagesEn*/;
    Formats: typeof formats;
  }
}

declare module '*.css' {
  const classes: { [key: string]: string };
  export default classes;
}
