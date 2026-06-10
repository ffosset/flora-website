// i18n helper.
// useTranslations(locale) returns a dictionary for that locale, with any
// empty/missing value automatically falling back to English. This lets fr/es
// ship as stubs without showing blank text on the page.

import en from './en.js';
import fr from './fr.js';
import es from './es.js';

export const languages = {
  en: 'English',
  fr: 'Français',
  es: 'Español',
};

export const defaultLang = 'en';

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
  return deepFallback(dictionaries[lang], dictionaries[defaultLang]);
}

// Get the locale from an Astro URL pathname (/fr/... or /es/...).
// Accounts for a configured base path (e.g. /flora-website/fr/ on GitHub Pages).
export function getLocaleFromUrl(url) {
  // BASE_URL has no trailing slash (e.g. '/flora-website'); strip defensively
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
