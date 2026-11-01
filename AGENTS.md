# AGENTS.md

Single-page static site: React 19 + Vite 8 + Tailwind CSS v4, ESM (`"type": "module"`). No backend, no router, no state library, no test/lint/typecheck tooling. `README.md` has the content-editing locations and launch checklist — read it before changing content.

## Verification

No test framework exists. `npm run build` is the only automated check (plus `npm run dev` for a visual pass). Don't invent lint/test commands.

## Tailwind v4 — no config files

Tailwind is configured via the `@tailwindcss/vite` plugin and the `@theme inline` block in `src/styles/index.css`. There is intentionally no `tailwind.config.js` or `postcss.config.js` — don't create one. Design tokens live in `:root` / `@theme` in `index.css`; custom print-shop effects (crop marks, halftone, CMYK plates, ticker, lightbox) live in `src/styles/components.css`, hand-copied from the reference HTML to match it visually — don't "refactor" them into utilities or drop in replacements without matching the reference pixel-for-pixel.

Breakpoints are non-default: `sm` 560px, `md` 860px, `lg` 1100px (they mirror the reference's max-width queries).

## WhatsApp / contact gating

`src/config/siteConfig.js` holds phone/email/`whatsappNumber` placeholders. Until they're real, derived validators in that file and `isWhatsAppConfigured()` in `src/utils/whatsapp.js` return null/`#contact` fallbacks — everything auto-switches on once a real number is set. Do not hardcode `wa.me`/`tel:`/`mailto:` links in components.

`whatsappNumber` must be digits only, no `+`, spaces, or dashes (validated by regex in both files — a `+` prefix silently disables WhatsApp links).

## Form submit constraint

`ContactSection`/`ContactForm` must call `openWhatsApp()` synchronously inside the submit handler — `window.open` in an async callback gets popup-blocked. The form must not reset on submit, and the UI must never claim the enquiry was delivered. One handler serves both "Send to Press" and "Send on WhatsApp" buttons.

## Scroll behavior

Anchor scrolling is handled globally: one `click` listener in `src/App.jsx` routes `a[href^="#"]` through `scrollToSection()` (`src/utils/scroll.js`), which applies an 80px header offset and edits history via `replaceState`. Don't add per-component scroll handlers or CSS `scroll-margin` alternatives.

## Build/deploy

`vite.config.js` sets `base: './'` — keep asset paths relative; the built `dist/` must keep working when served from a subfolder.

## Architecture in one line

`App.jsx` renders all sections in order and wires cross-section interaction with callbacks (service card → portfolio filter / pre-selected quote service) — data comes from `src/data/*.js`, brand copy/config from `siteConfig.js`.
