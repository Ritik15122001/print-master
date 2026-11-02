# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page static site for a print shop (React 19 + Vite 8 + Tailwind CSS v4, ESM). No backend, no router, no state library, no test/lint/typecheck tooling. It is a React rebuild of a reference static HTML file and must match it pixel-for-pixel.

## Commands

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # static output in dist/ — the only automated check; there is no test/lint/typecheck command
npm run preview   # serve dist/ locally
```

Don't invent lint/test commands — none exist. Verify changes with `npm run build` plus a visual pass via `npm run dev`.

## Architecture

`src/App.jsx` renders every section in order (Hero → ServicesTicker → Services → Portfolio → FeaturedProjects → Clients → About → Process → Contact) and owns the only cross-section state: `filter` (portfolio category) and `presetService` (pre-selected quote service), passed down via callbacks so a service card's "See work" / "Request quote" can drive the portfolio filter or pre-fill the contact form. Content is data-driven from `src/data/*.js` (portfolio, services, featuredProjects, clients, navigation); brand copy/contact info comes from `src/config/siteConfig.js`.

Global anchor-scroll handling lives in one `click` listener in `App.jsx` that routes `a[href^="#"]` through `scrollToSection()` (`src/utils/scroll.js`, 80px header offset, `history.replaceState`) — don't add per-component scroll handlers or CSS `scroll-margin`.

### WhatsApp / contact gating

`src/config/siteConfig.js` holds phone/email/`whatsappNumber` placeholders. Validators there and `isWhatsAppConfigured()` in `src/utils/whatsapp.js` return null/`#contact` fallbacks until real values are set — everything auto-switches on once a real number is set. Never hardcode `wa.me`/`tel:`/`mailto:` links in components; always go through these helpers. `whatsappNumber` must be digits only (no `+`, spaces, dashes) — a `+` prefix silently disables WhatsApp links.

`ContactSection`/`ContactForm` must call `openWhatsApp()` synchronously inside the submit handler (not after an `await`) or the popup gets blocked. The form must not reset on submit, and the UI must never claim the enquiry was delivered. One handler serves both "Send to Press" and "Send on WhatsApp".

### Styling

Tailwind v4 is configured via the `@tailwindcss/vite` plugin and the `@theme inline` block in `src/styles/index.css` — there is intentionally no `tailwind.config.js`/`postcss.config.js`; don't create one. Design tokens live in `:root`/`@theme` in `index.css`. Custom print-shop effects (crop marks, halftone, CMYK plates, ticker, lightbox) live in `src/styles/components.css`, hand-copied from the reference HTML — don't refactor them into utilities or swap in replacements without matching the reference pixel-for-pixel.

Breakpoints are non-default, mirroring the reference's max-width queries: `sm` 560px, `md` 860px, `lg` 1100px.

### Build/deploy

`vite.config.js` sets `base: './'` — keep asset paths relative so `dist/` keeps working when served from a subfolder.

## Content editing locations

Read `README.md` before changing content — it lists where portfolio items, services, featured projects, client logos, hero images, and the logo live, plus the launch checklist for `siteConfig.js` (phone/email/WhatsApp number/address/siteUrl) and notes on which assets are still placeholders.
