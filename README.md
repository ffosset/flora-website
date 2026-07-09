# fosset.co

Source for [fosset.co](https://fosset.co), my portfolio. Trilingual, single-page,
static, no tracking.

Public because the interesting part isn't the code, it's the decisions.

---

## Stack

- **[Astro](https://astro.build)** — static output, no server, no client framework
- **GitHub Actions → GitHub Pages**, custom domain
- Fonts self-hosted
- No analytics, no cookies, no third-party requests

Three locales: `en` (source of truth), `fr`, `es`. English is authored first; the other
two are translations, not parallel originals.

---

## Decisions worth stealing

### The result metric slot hides itself

Every project card has a slot for an outcome number. Some of my projects have real
outcome data. Some don't.

The rule: **the slot renders only if a metric exists. It is never filled with something
invented, softened, or rounded up from nothing.** Cards without a metric are visibly
shorter. That asymmetry is the honest state of a freelance portfolio, and I show it
rather than manufacture parity.

If you take one thing from this repo, take this.

### Cards lead with the problem, not the client

The idle state of a card leads with the problem the project solved. Client and sector
are secondary. The reveal state carries the metric, a compressed role line, and the
live link.

A portfolio that leads with logos sells access to a past client. One that leads with
problems sells the thing you actually do.

### Nothing consequential lives in a hover state

Reveal states carry supporting detail only. Anything a visitor needs in order to decide
something is visible at rest. On touch devices, hover-only copy is copy that half your
visitors never read.

---

## Running it

```bash
[[pm]] install
[[pm]] run dev      # localhost:4321
[[pm]] run build    # → dist/
```

[[Node constraint, if any]]

Copy lives in [[path]]. Design tokens in [[path]]. Translations in [[path]].

---

## Licence

Split, deliberately.

- **Code** — [[MIT]]. Fork it, ship it. See `LICENSE`.
- **Content** — all rights reserved. Project write-ups, About copy, translations,
  photographs, and the cats are not licensed for reuse. See `LICENSE-CONTENT`.

The decisions above are ideas. Ideas aren't licensable. Use them.

---

Flora Fosset — [flora@fosset.co](mailto:flora@fosset.co) · [fosset.co](https://fosset.co)
