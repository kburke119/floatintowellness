# Float Into Wellness - Netlify Deployment Guide

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- A [GitHub](https://github.com) account
- A [Netlify](https://www.netlify.com) account (free tier works)

## Step 1: Push to GitHub

1. Create a new repository on GitHub (e.g., `float-into-wellness`)
2. Initialize and push the code:

```bash
cd netlify-export
git init
git add .
git commit -m "Initial commit - Float Into Wellness website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/float-into-wellness.git
git push -u origin main
```

## Step 2: Connect to Netlify

1. Log in to [Netlify](https://app.netlify.com)
2. Click **"Add new site"** > **"Import an existing project"**
3. Select **GitHub** as your Git provider
4. Authorize Netlify to access your GitHub account if prompted
5. Select the `float-into-wellness` repository

## Step 3: Configure Build Settings

The `netlify.toml` file auto-configures these settings, but verify:

- **Branch to deploy:** `main`
- **Build command:** `npm run build`
- **Publish directory:** `dist`

Click **"Deploy site"** to start the first deployment.

## Step 4: Custom Domain Setup

### Add Custom Domain in Netlify

1. Go to **Site settings** > **Domain management**
2. Click **"Add custom domain"**
3. Enter `floatintowellness.com` and click **Verify** > **Add domain**
4. Netlify will prompt you to add `www.floatintowellness.com` as well - add it

### Configure DNS Records

At your domain registrar (e.g., GoDaddy, Namecheap, Google Domains):

**Option A: Using Netlify DNS (Recommended)**
1. In Netlify Domain settings, click **"Set up Netlify DNS"**
2. Update your domain's nameservers to the ones Netlify provides
3. Netlify will handle all DNS configuration automatically

**Option B: Using External DNS**
1. Add an `A` record:
   - Host: `@`
   - Value: `75.2.60.5` (Netlify's load balancer)
2. Add a `CNAME` record:
   - Host: `www`
   - Value: `YOUR-SITE-NAME.netlify.app`

## Step 5: SSL Configuration

1. Go to **Site settings** > **Domain management** > **HTTPS**
2. Click **"Verify DNS configuration"**
3. Once DNS is verified, click **"Provision certificate"**
4. Netlify provides free SSL certificates via Let's Encrypt
5. Enable **"Force HTTPS"** to redirect all HTTP traffic to HTTPS

## Step 6: Environment Variables

This site is a static frontend with no server-side secrets required. No environment variables need to be configured in Netlify.

If you add features requiring API keys in the future:
1. Go to **Site settings** > **Environment variables**
2. Add variables prefixed with `VITE_` for client-side access
3. Redeploy after adding variables

## Step 7: Post-Deployment Checklist

After your first successful deployment, verify:

- [ ] Site loads at your Netlify URL (e.g., `your-site.netlify.app`)
- [ ] All pages render correctly (home page, 404 page)
- [ ] Navigation links work (About, Services, Contact scroll)
- [ ] Brand logos display correctly in the footer
- [ ] Google Forms contact form loads and submits
- [ ] "Book Now" and "Book Session" buttons open Calendly link
- [ ] Mobile responsive layout works
- [ ] Favicon displays in browser tab
- [ ] SSL certificate is active (green padlock)
- [ ] Custom domain resolves correctly
- [ ] `robots.txt` is accessible at `/robots.txt`
- [ ] `sitemap.xml` is accessible at `/sitemap.xml`

## How to Update Content

### Update Text Content
- **Services section:** Edit `src/pages/float-into-wellness.tsx`
- **About section:** Edit `src/pages/float-into-wellness.tsx` (search for "About Float Into Wellness")
- **Footer:** Edit `src/components/footer.tsx`
- **SEO meta tags:** Edit `index.html`

### Update Booking Link
1. Open `src/pages/float-into-wellness.tsx`
2. Search for `calendly.com/PLACEHOLDER_FLOAT_INTO_WELLNESS`
3. Replace with your actual Calendly URL
4. Commit and push - Netlify will auto-deploy

### Update Google Forms Contact Form
1. Open `src/pages/float-into-wellness.tsx`
2. Find the `<iframe>` in the contact section
3. Replace the `src` URL with your new Google Form embed URL
4. Commit and push

### Update Business Information (SEO)
1. Open `index.html`
2. Find the JSON-LD structured data block
3. Replace all `PLACEHOLDER_*` values with real business info
4. Commit and push

### Update Logos/Images
1. Replace files in `src/assets/` with new images (keep the same filenames)
2. Or update the import paths in the component files
3. Commit and push

### Trigger Manual Redeployment
1. Go to Netlify dashboard > **Deploys**
2. Click **"Trigger deploy"** > **"Deploy site"**

Or simply push changes to the `main` branch on GitHub - Netlify will auto-deploy.
