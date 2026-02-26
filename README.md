# Float Into Wellness — Website

Website for Float Into Wellness, a wellness spa offering flotation tank therapy, infrared sauna, salt room, and holistic healing services in Woodbridge, NJ.

**Live site:** https://www.floatintowellness.com

## Tech Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3
- Wouter (lightweight routing)
- Radix UI + Lucide React
- Deployed on Netlify

## Local Development

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

## Build

```bash
npm run build
```

Output goes to `dist/`. Netlify runs this automatically on push to main.

## Deployment

Netlify auto-deploys on push to `main`:
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18 (set in `netlify.toml`)

All SPA routes fall back to `index.html` via the redirect rule in `netlify.toml`.

## Project Structure

```
├── index.html              # Entry HTML with full SEO meta tags and JSON-LD schema
├── netlify.toml            # Netlify config (build, SPA redirect, www redirect, Node 18)
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build configuration
├── public/
│   ├── _headers            # Netlify security + cache headers
│   ├── favicon.png
│   ├── apple-touch-icon.png
│   ├── robots.txt
│   └── sitemap.xml
└── src/
    ├── main.tsx            # App entry point
    ├── App.tsx             # Root component with routing
    ├── index.css           # Global styles and CSS variables
    ├── assets/             # Image assets (logos)
    │   ├── float-into-wellness-logo.jpg
    │   └── float-into-wellness-hero-logo.jpg
    ├── components/
    │   ├── navigation.tsx  # Sticky nav with mobile menu and ARIA labels
    │   ├── footer.tsx      # 4-column footer: NAP, quick links, hours, sister brands
    │   └── ui/             # UI primitives (button, card, toast, tooltip)
    ├── hooks/              # Custom hooks (use-toast)
    ├── lib/                # Utilities (cn helper)
    └── pages/
        ├── float-into-wellness.tsx  # Main landing page (Hero, Services, About, Contact)
        └── not-found.tsx            # 404 page
```

## Content Updates

### Services
Edit the `services` array in `src/pages/float-into-wellness.tsx`.

### Business Hours / Address / Phone
Update the footer in `src/components/footer.tsx`.

### SEO / Meta Tags
Edit `index.html` — update `<title>`, `<meta name="description">`, Open Graph tags, and the JSON-LD schema block.

### Contact Form (Google Forms)
The contact section embeds a Google Form. To swap it, replace the `src` URL in `src/pages/float-into-wellness.tsx` (look for the `<iframe>` in the contact section).

### Booking Link (Calendly)
Search for `PLACEHOLDER_FLOAT_INTO_WELLNESS` in `src/pages/float-into-wellness.tsx` and `src/components/navigation.tsx`. Replace with the actual Calendly booking URL.

### Sister Brand Links
Edit `src/components/footer.tsx` — update the "Sister Brands" column URLs and descriptions.

## Environment Variables

None required for the static frontend.

## SEO

- Full meta tags, Open Graph, and Twitter Card in `index.html`
- JSON-LD `DaySpa` schema (Google Rich Results)
- `robots.txt` and `sitemap.xml` in `public/`
- Security and cache headers via `public/_headers`
- www → non-www redirect in `netlify.toml`

## Sister Brands

- [Want A Smoothie](https://www.wantasmoothie.com) — Fresh smoothies & healthy food
- [Bounce Back Fitness](https://www.bouncebackfit.com) — Corrective & functional training
- [Cre8 Balance](https://www.cre8balance.com) — Cannabis wellness & dispensary
