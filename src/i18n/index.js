// i18n helper.
// useTranslations(locale) returns a dictionary for that locale, with any
// empty/missing value automatically falling back to English (the source of
// truth for copy), so a missing string never shows as blank text.

import en from './en.js';
import fr from './fr.js';
import es from './es.js';

export const languages = {
  en: 'English',
  fr: 'Français',
  es: 'Español',
};

// French is the default locale: served at the site root with no /fr/ prefix.
export const defaultLang = 'fr';
// English is the fallback dictionary for any empty/missing string.
const fallbackLang = 'en';

const dictionaries = { en, fr, es };

// Deep-merge a locale dict over English so empty strings fall back to English.
function deepFallback(locale, fallback) {
  if (Array.isArray(fallback)) {
    return fallback.map((item, i) =>
      deepFallback(locale?.[i], item)
    );
  }
  if (fallback && typeof fallback === 'object') {
    const out = {};
    for (const key of Object.keys(fallback)) {
      out[key] = deepFallback(locale?.[key], fallback[key]);
    }
    return out;
  }
  // Primitive: use locale value only if it's a non-empty string; else fallback.
  if (typeof locale === 'string' && locale.trim() !== '') return locale;
  if (typeof locale === 'number' || typeof locale === 'boolean') return locale;
  return fallback;
}

export function useTranslations(locale) {
  const lang = dictionaries[locale] ? locale : defaultLang;
  return deepFallback(dictionaries[lang], dictionaries[fallbackLang]);
}

// Get the locale from an Astro URL pathname (/en/... or /es/...; root = fr).
// Accounts for a configured base path (none now: the site is served at '/').
export function getLocaleFromUrl(url) {
  // Config base is '/', so BASE_URL is '/'; strip the trailing slash defensively
  // so this works whether or not one is present. '' for a root deploy.
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  let path = url.pathname;
  if (base && path.startsWith(base)) {
    path = path.slice(base.length); // drop the base, keep the leading slash
  }
  const [, maybeLocale] = path.split('/');
  if (maybeLocale in languages) return maybeLocale;
  return defaultLang;
}

// Site-relative URL for `path` ('' = home, 'privacy/') in `locale`. The default
// locale has no prefix; others live under /<locale>/.
export function localizedPath(locale, path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return locale === defaultLang ? `${base}/${path}` : `${base}/${locale}/${path}`;
}
