import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Deployed to GitHub Pages on the custom apex domain, served at the root.
  site: 'https://fosset.co',
  base: '/',
  integrations: [
    // Keep the old /fr/ redirect stubs out of the sitemap.
    sitemap({ filter: (page) => !/\/fr\//.test(new URL(page).pathname) }),
  ],
  // French moved from /fr/ to the root (Sept 2026). GitHub Pages can't send
  // server 301s, so Astro emits meta-refresh pages with a canonical link to
  // the new URL, which Google treats as a permanent redirect.
  redirects: {
    '/fr': '/',
    '/fr/privacy': '/privacy/',
  },
  i18n: {
    // French is the default (most clients are French-speaking). English stays
    // the source of truth for copy and the fallback for missing strings.
    defaultLocale: 'fr',
    locales: ['en', 'fr', 'es'],
    routing: {
      // Default locale (fr) is served at the root with no /fr/ prefix.
      // en and es are served at /en/ and /es/.
      prefixDefaultLocale: false,
    },
  },
});
