import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://fosset.co',
  i18n: {
    // English is the source of truth. French and Spanish are translation stubs.
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es'],
    routing: {
      // Default locale (en) is served at the root with no /en/ prefix.
      // fr and es are served at /fr/ and /es/.
      prefixDefaultLocale: false,
    },
  },
});
