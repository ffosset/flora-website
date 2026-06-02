# Flora Fosset — personal site (Astro scaffold)

Structure-first scaffold. Layout + i18n plumbing are done; copy is placeholder.

## Run it
```bash
npm install
npm run dev      # http://localhost:4321  (also /fr/ and /es/)
npm run build    # static output in dist/
```

## How it's organized
- `src/i18n/en.js` — **source of truth**. All text lives here.
- `src/i18n/fr.js`, `es.js` — stubs with identical keys. Empty strings auto-fall back to English.
- `src/i18n/index.js` — the fallback helper. Don't hardcode text in components; always read from `t`.
- `src/styles/tokens.css` — **design tokens** (fonts, colors, spacing). Replace placeholders with your Figma values.
- `src/components/` — Hero, WhatIDo, Work (with soft-sort), About (+experience, values, contact).
- `src/pages/` — `index.astro` (en), `fr/`, `es/`.

## Sections
1. Hero
2. What I do / how I work
3. Selected work (soft sorting: highlight matches, dim the rest — nothing removed)
4. About me (bio + experience strip + values + contact)

## To finish
1. Drop your real Figma fonts/colors/spacing into `tokens.css`.
2. Finalize English copy in `en.js`.
3. Translate `fr.js` / `es.js` last.
