import { defineRouting } from 'next-intl/routing';

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
  }
}

export const routing = defineRouting({
  locales: ['en', 'de'],
  defaultLocale: 'en',
  localeCookie: false,
});
