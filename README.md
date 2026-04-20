# Cilantro Labs — marketing site

The public marketing site for [cilantro-labs.com](https://cilantro-labs.com).

Stack: **Next.js 16 (App Router) · TypeScript · Tailwind v4 · Framer Motion · Lucide**.
Designed to deploy to **Vercel** with zero config.

---

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

Build production bundle:

```bash
npm run build && npm start
```

---

## Deploying to Vercel

You have two paths. Pick the one you prefer.

### A. Push to GitHub, import in Vercel (recommended)

1. Create a new repo on GitHub and push this directory.
2. Go to <https://vercel.com/new> and import the repo.
3. Framework preset is auto-detected as **Next.js**. Leave defaults.
4. Click **Deploy**. First deploy takes ~1 minute.

### B. Vercel CLI (no GitHub required)

```bash
npm i -g vercel
vercel              # first run links the project
vercel --prod       # ship to production
```

---

## Pointing `cilantro-labs.com` at Vercel

After the first successful deploy:

1. In the Vercel dashboard → your project → **Settings → Domains**.
2. Add `cilantro-labs.com` and `www.cilantro-labs.com`.
3. Vercel will display the DNS records you need to set with your registrar:

   **Apex (`cilantro-labs.com`)** — A record:

   | Type | Name | Value |
   |------|------|-------|
   | A    | @    | `76.76.21.21` |

   **WWW (`www.cilantro-labs.com`)** — CNAME:

   | Type  | Name | Value |
   |-------|------|-------|
   | CNAME | www  | `cname.vercel-dns.com` |

4. Save the records at your DNS provider. Propagation usually completes in a few minutes; SSL certs are issued automatically by Vercel.
5. Set `cilantro-labs.com` as the primary domain (Vercel will redirect `www` → apex).

> If you already have email on this domain (Google Workspace, etc.), do **not** touch the existing `MX` records — only add the `A` and `CNAME` above.

---

## Project layout

```
src/
  app/
    layout.tsx              # root layout, metadata, fonts
    page.tsx                # composes the landing page
    globals.css             # design tokens (dark theme + accent)
    opengraph-image.tsx     # auto-generated 1200x630 OG image
    sitemap.ts / robots.ts  # SEO basics
  components/
    nav.tsx hero.tsx pillars.tsx why.tsx how.tsx footer.tsx logo.tsx
```

---

## Editing copy

All public copy lives in the components under `src/components/`. The site intentionally keeps product details abstract — see the project notes before adding anything that names specific automation features.
