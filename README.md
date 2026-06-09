# Superior Nirman Sewa — Corporate Website

Premium construction company website built with Next.js, React Three Fiber, Framer Motion, GSAP, and Lenis smooth scroll. Optimized for static export and **free Cloudflare Pages** hosting.

## Tech Stack

- **Next.js 14** (App Router, static export)
- **React 18** + **TypeScript**
- **Tailwind CSS**
- **Framer Motion** — UI animations
- **GSAP** + ScrollTrigger — scroll reveals
- **Lenis** — smooth scrolling
- **Three.js** + **React Three Fiber** — subtle 3D hero background

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone <your-repo-url>
cd superior
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build (Static Export)

```bash
npm run build
```

This generates the `/out` folder — ready for Cloudflare Pages deployment.

---

## GitHub Setup

1. Create a new repository on GitHub
2. Initialize and push:

```bash
git init
git add .
git commit -m "Initial commit: Superior Nirman Sewa website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/superior-nirman-sewa.git
git push -u origin main
```

---

## Cloudflare Pages Deployment (Free)

### Option A: Connect GitHub (Recommended)

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Go to **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. Select your GitHub repository
4. Configure build settings:

| Setting | Value |
|---------|-------|
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node.js version | 18 or 20 |

5. Click **Save and Deploy**

### Option B: Direct Upload

1. Run `npm run build` locally
2. In Cloudflare Pages, choose **Upload assets**
3. Upload the contents of the `/out` folder

---

## Connecting superiornirmansewa.com.np Domain

1. In Cloudflare Pages, open your project → **Custom domains**
2. Click **Set up a custom domain**
3. Enter: `superiornirmansewa.com.np`
4. If your domain is already on Cloudflare:
   - DNS records are added automatically
5. If your domain is registered elsewhere:
   - Add your domain to Cloudflare (free plan works)
   - Update nameservers at your registrar to Cloudflare's nameservers
   - Cloudflare will provision the DNS records

Also add `www.superiornirmansewa.com.np` and set up a redirect to the apex domain if desired.

---

## SSL Setup

SSL is **automatic** on Cloudflare Pages:

- Cloudflare provisions a free Universal SSL certificate
- HTTPS is enabled by default
- Enable **Always Use HTTPS** under SSL/TLS → Edge Certificates for extra security

No manual certificate configuration is required.

---

## Updating Images and Content

### Images

All images live in `/public/images/`. Replace files with the **same filename** — no code changes needed:

| File | Usage |
|------|-------|
| `hero.jpg` | Homepage hero background |
| `managing-director.jpg` | MD message section |
| `company-bg.jpg` | Company overview background |
| `project1.jpg` – `project4.jpg` | Project gallery |
| `cta-bg.jpg` | Call-to-action section |
| `about-hero.jpg` | About page hero |
| `service-*.jpg` | Services page images |

**Recommended size:** 1920×1080px, compressed JPEG (under 300KB each for fast loading in Nepal).

### Text Content

Edit `/lib/data.ts` for:

- Services, projects, testimonials
- Team members, company history
- Managing director message
- Statistics counters

Edit `/lib/constants.ts` for:

- Contact info, social links
- Site name and URL

### Logo

Replace `/public/logo.svg` with your company logo (SVG recommended).

### Google Maps

In `/app/contact/page.tsx`, replace the map placeholder with an embedded iframe:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
  className="h-full w-full border-0"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

### Contact Form Backend

The contact form is frontend-only. To connect a backend API, edit `/components/ContactForm.tsx` where indicated:

```tsx
// const response = await fetch('/api/contact', { method: 'POST', body: formData });
```

For static hosting, use a third-party form service (Formspree, Web3Forms) or Cloudflare Workers.

---

## Project Structure

```
app/                  # Pages (App Router)
components/           # Reusable UI components
sections/             # Homepage sections
lib/                  # Data, constants, utilities
public/images/        # Replaceable image assets
styles/               # Global CSS
```

---

## Performance Tips

- Compress images before upload (use [Squoosh](https://squoosh.app))
- Keep hero image under 500KB
- Test on slow connections (Chrome DevTools → Network → Slow 3G)
- Run Lighthouse audit after deployment

---

## License

Proprietary — Superior Nirman Sewa. All rights reserved.
