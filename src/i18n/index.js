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
export function getLocaleFromUrl(url) {
  const [, maybeLocale] = url.pathname.split('/');
  if (maybeLocale in languages) return maybeLocale;
  return defaultLang;
}
