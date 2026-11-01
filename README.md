# Print Master — static website (React + Vite + Tailwind CSS v4)

A React rebuild of `index-press-proof (1).html` that matches the reference visually. It is a fully static site with no backend. Every quote request opens WhatsApp with the message already filled in.

## Commands

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # static output in dist/
npm run preview   # serve dist/ locally
```

Deploy the `dist/` folder to Vercel, Netlify, GitHub Pages or any static host. `base: './'` is set, so it also works from a subfolder.

## ⚠️ Before launch: `src/config/siteConfig.js`

| Key | Status |
| --- | --- |
| `whatsappNumber` | **Set: `919999724935`.** Verified it is the WhatsApp Business account ("Print Master.com" profile). |
| `phone` / `phone2` | **Set: `+91 99997 24935`, `+91 85277 87449`.** |
| `email` | **Set: `printmaster.com@gmail.com`.** |
| `address` | **Set: 123 Aggarwal Tower, I.P. Extension, New Delhi - 110092.** |
| `siteUrl` | `https://printmasterdelhi.com` (from the logo wording). Verify the domain is live before launch. |

## Content you can replace

- **Portfolio items** → `src/data/portfolio.js` and `public/images/work/` (16 mock composites made from real client logos — presentation plates, social/browser mocks, totes, hoarding pastes. Replace with genuine work photography as it becomes available)
- **Services** (10 swatch cards with photos, colours, icons) → `src/data/services.js` (photo URLs in the `IMG` map — Unsplash/Pexels free licenses, verified subjects)
- **Featured spec sheets** → `src/data/featuredProjects.js`
- **Client logos** → `src/data/clients.js`. All 12 slots currently stand in with the Print Master roundel from `public/images/clients/` — swap each entry for a real client logo file when approved.
- **Hero images** → `HERO_IMAGES` in `src/components/sections/HeroSection.jsx`
- **Logo** → `src/assets/images/logo.png` (shown next to the wordmark in `src/components/layout/Header.jsx`)

## Missing business assets

- The client logos: all 12 wall slots reuse the Print Master logo as a stopgap. Real client artwork is still needed.
- The portfolio tiles are Python-built presentation composites of real client logos, not photos of delivered print work. Replace them with real photography from the company profile when supplied.
- The client logos are real: all 17 client files (`public/client/*.jpeg` originals) were cut to transparent PNGs in `public/images/clients/`. The neon "R" studio name still needs confirmation.
- The logo is in place (`src/assets/images/logo.png`, transparent PNG cut from the supplied artwork — also used as the favicon via `public/images/logo.png`).

## Notes

- Styling: Tailwind utilities handle layout and typography. `src/styles/components.css` keeps the CSS values copied from the reference for effects such as crop marks, halftone, CMYK plates, the ticker, the lightbox and the mobile bar. Tailwind v4 is set up through `@tailwindcss/vite` and `@theme` in `src/styles/index.css`, so there is no `tailwind.config.js` or `postcss.config.js`.
- Breakpoints follow the reference's max-width queries: `max-sm` ≤560px, `max-md` ≤860px, `max-lg` ≤1100px.
- Form: one submit handler serves both "Send to Press" and "Send on WhatsApp". It validates the fields, builds the message and calls `window.open` synchronously so popup blockers don't stop it. The form is not reset. It never claims the enquiry was delivered.
- Fixes compared with the reference: the mobile menu is no longer trapped inside the blurred header after you scroll; horizontal overflow is clipped on mobile; and the floating WhatsApp button hides while the quote form is on screen.
- This is a single-page Vite app. There is no server-side rendering or pre-rendering.
