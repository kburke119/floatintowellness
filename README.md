# Float Into Wellness

A modern wellness spa website for Float Into Wellness, offering flotation tank therapy, infrared sauna, salt room, and holistic healing services.

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Wouter** - Lightweight client-side routing
- **Radix UI** - Accessible UI primitives
- **Lucide React** - Icon library

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Preview production build
npm run preview
```

## Build

```bash
npm run build
```

This outputs the production build to the `dist/` directory.

## Netlify Deployment

1. Push this directory to a GitHub repository
2. Log in to [Netlify](https://app.netlify.com)
3. Click "Add new site" > "Import an existing project"
4. Connect your GitHub repository
5. Build settings are auto-detected from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"

## External Services

- **Google Forms** - Contact form (embedded iframe)
  - Form URL configured in `src/pages/float-into-wellness.tsx`
- **Calendly** - Booking system (external link)
  - Booking URL configured in `src/pages/float-into-wellness.tsx`

## Placeholder URLs to Update

The following placeholder values need to be updated with real business information:

### Calendly Booking Link
- File: `src/pages/float-into-wellness.tsx`
- Search for: `https://calendly.com/PLACEHOLDER_FLOAT_INTO_WELLNESS`
- Replace with your actual Calendly booking URL

### JSON-LD Business Details (SEO)
- File: `index.html`
- Update the following placeholders in the structured data:
  - `PLACEHOLDER_PHONE` - Business phone number
  - `PLACEHOLDER_STREET_ADDRESS` - Street address
  - `PLACEHOLDER_CITY` - City
  - `PLACEHOLDER_STATE` - State
  - `PLACEHOLDER_ZIP` - ZIP code
  - `PLACEHOLDER_LAT` - Latitude coordinate
  - `PLACEHOLDER_LNG` - Longitude coordinate
  - `PLACEHOLDER_OPEN_TIME` - Opening time (e.g., "09:00")
  - `PLACEHOLDER_CLOSE_TIME` - Closing time (e.g., "21:00")

## Custom Domain Setup

To use `www.floatintowellness.com`:

1. In Netlify, go to **Site settings** > **Domain management**
2. Click **Add custom domain**
3. Enter `floatintowellness.com`
4. Add `www.floatintowellness.com` as well
5. Configure your DNS provider:
   - Add an `A` record pointing to Netlify's load balancer IP
   - Add a `CNAME` record for `www` pointing to your Netlify site URL
6. Enable HTTPS under **SSL/TLS certificate**

## Project Structure

```
├── index.html              # Entry HTML with SEO meta tags
├── netlify.toml            # Netlify build configuration
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build configuration
├── public/                 # Static assets (favicon, robots.txt, sitemap)
└── src/
    ├── main.tsx            # App entry point
    ├── App.tsx             # Root component with routing
    ├── index.css           # Global styles and CSS variables
    ├── assets/             # Image assets (logos)
    ├── components/         # Reusable components
    │   ├── footer.tsx      # Footer with brand links
    │   └── ui/             # UI primitives (button, card, toast, tooltip)
    ├── hooks/              # Custom hooks (use-toast)
    ├── lib/                # Utilities (cn helper)
    └── pages/              # Page components
        ├── float-into-wellness.tsx  # Main landing page
        └── not-found.tsx            # 404 page
```
