import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Deployed to GitHub Pages on the custom apex domain, served at the root.
  site: 'https://fosset.co',
  base: '/',
  integrations: [sitemap()],
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
