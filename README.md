# Miraee web

The Miraee marketing site, ported from the static HTML preview to **React 18 + Vite + TypeScript + Tailwind CSS v4 + shadcn/ui**. Every route is pre-rendered to static HTML at build time (`vite-react-ssg`), so crawlers and AI search bots get full content, `<title>`, canonical URLs and JSON-LD with no JavaScript.

## Commands

```bash
npm install
npm run dev          # Vite dev server (client-rendered, hot reload)
npm run build        # type-check + pre-render every route into dist/
npm run preview      # serve dist/ locally
npm run typecheck    # tsc -b
npm run lint         # eslint
npm run format       # prettier (with Tailwind class sorting)
```

Node 20.19 or newer.

## Structure

```
public/                 Served as-is: img/, downloads/, robots.txt, sitemap.xml, llms.txt
src/
  main.tsx              Entry (ViteReactSSG)
  index.css             Tailwind entry + Miraee design tokens exposed as theme values
  routes/index.tsx      Route table: lazy pages, layouts, per-route page-sheet handles
  pages/                One folder per route: `index.tsx` (page), `meta.ts` (SEO) and `sections/` (one component per section)
  components/
    ui/                 shadcn-style primitives: button, badge, input, label, checkbox, radio-group, dialog
    forms/              Lead forms: TextField, LeadForm, the four form dialogs, dialog context
    layout/             RootLayout, SiteLayout, Navbar, SiteHeader/Footer, LandingLayout, SkipLink
    sections/           Reusable page sections: Breadcrumbs, Sources, SmallPrint, Faq, RelatedCards,
                        ClosingCta / ClosingBand / CenterCta, CtaActions, ResponsiveImage
    common/seo.tsx      Per-page <head>: title, canonical, robots, Open Graph, JSON-LD
  content/              Navigation links, shared CTA actions, form confirmation copy
  lib/                  cn(), form submission, route-handle types
  styles/               Miraee design system CSS ported from the static site (see below)
  assets/fonts/         Self-hosted Archivo variable font
```

Pages with an FAQ keep one list in `faq.ts`. It feeds both the visible questions and the FAQPage JSON-LD in `meta.ts` (`faqPageJsonLd`), and answers can link with `[text](/path)`.

Each page folder is self-contained: `index.tsx` composes the sections and is what the router lazy-loads; every section (`hero-section.tsx`, `faq-section.tsx`, ...) is its own component file.

Resource pages keep their authored content in `content.tsx`. The hub composes `ResourceHero`, the video library and `ResourceGuides`; articles pass `ArticleContent` and `RelatedContent` to `ResourceArticle`, which places the shared FAQ between them. Buttons, internal links and dialog triggers use the shared React components directly.

## Styling

- **Tailwind v4** provides theme and utilities. Preflight is deliberately not imported, because the design system was written against browser defaults and a reset would shift every page.
- **Tokens** (`styles/tokens.css`) remain the source of truth. `index.css` maps them into `@theme`, so `bg-plum`, `text-content-2`, `rounded-md`, `border-control` etc. follow the surface the element sits on (`.mr-paper`, `.mr-plum`, `.mr-night`).
- **Components** (Button, Badge, Input, Dialog, ...) are Tailwind + `cva` + Radix, shadcn style. Add more with `npx shadcn@latest add <component>`; `components.json` is configured. They keep their `mr-*` class names as hooks because page-layout CSS targets them.
- **Page layout CSS** (`styles/site*.css`) is the original stylesheet, unlayered so its page-specific rules keep precedence over utilities. `site-trust`, `site-core` and `site-longform` were linked only from some pages in the static site; they are wrapped in `:where(body[data-css~="..."])` and each route declares which it needs via `handle.styles` in `routes/index.tsx`.

## Forms

All forms validate natively and show their confirmation state. To deliver submissions, set `VITE_FORMS_ENDPOINT` (see `.env.example`); each submit is then POSTed as JSON `{ form, ...fields }`.

## Deploying

`dist/` is plain static files (`/how-it-works/index.html`, ...). Any static host works. Serve `dist/404.html` for unknown URLs. Netlify and Vercel do this automatically.

## Image credits

- Home hero photo (V1): [Gustavo Fring on Pexels](https://www.pexels.com/photo/cheerful-business-people-with-passport-in-airport-hall-4173205/), used under the Pexels License (free for commercial use, no attribution required; credited here as a courtesy).
- Home hero photo: [Briana Tozour on Unsplash](https://unsplash.com/photos/people-walking-through-sunlit-airport-terminal-rUXh5USKfUQ), used under the Unsplash License. Cut-out portraits elsewhere on the site are stock images carried over from the original static site.
- V4 and V5 inner-page hero photos (`public/img/px*.webp`, mapped per page in `v4/src/content/photos.ts`, identical in `v5`): all from Pexels, used under the Pexels License (free for commercial use, no attribution required). Newly added: [3885601](https://www.pexels.com/photo/3885601/) (when plans change), [7433865](https://www.pexels.com/photo/7433865/) (finance), [7580704](https://www.pexels.com/photo/7580704/) (spend review), [1181605](https://www.pexels.com/photo/1181605/) (talk to sales), [5917851](https://www.pexels.com/photo/5917851/) (security), [7034439](https://www.pexels.com/photo/7034439/) (resources), [6814526](https://www.pexels.com/photo/6814526/) (policy template), [12663090](https://www.pexels.com/photo/12663090/) (sign up), [9432952](https://www.pexels.com/photo/9432952/) (log in), [18999384](https://www.pexels.com/photo/18999384/) (about Tabhi), [7688524](https://www.pexels.com/photo/7688524/) (pricing), and one per guide: [8353764](https://www.pexels.com/photo/8353764/), [5900029](https://www.pexels.com/photo/5900029/), [8297058](https://www.pexels.com/photo/8297058/), [7368311](https://www.pexels.com/photo/7368311/), [7651554](https://www.pexels.com/photo/7651554/).

## Known gaps carried over from the static site

- `/when-plans-change`, `/privacy` and `/terms` are linked but do not exist yet (they render the 404 page).
- The Open Graph image `/img/og/miraee-og-1200x630.jpg` is referenced in page metadata but is not in `public/img`.
- `sitemap.xml` and `llms.txt` still list `/when-plans-change`.

## Five versions: V1 to V5

This repo builds **five sites into one deploy**: V1 (`src/`) at `/`, V2 (`v2/`, a scroll-led redesign of the same content) at `/v2/`, and V3 (`v3/`, a minimal premium redesign with the baseline V1/V2 content) at `/v3/`; V4 (`v4/`, editorial paper-and-ink) at `/v4/` and V5 (`v5/`, glass bento on lilac) at `/v5/`, both built from the Tabhi-group copy in the Oct 2026 sitemap document (`v4/src/content/site.ts`, `v5/src/content/site.ts`). A `V1` to `V5` toggle in each nav links to the same page in the other versions.

- `npm run build` builds V1, then V2 to V5, and copies them into `dist/v2` to `dist/v5`. Vercel needs no extra settings (build command `npm run build`, output `dist`).
- `npm start` serves `dist` on one port (default 4000; `PORT=8080 npm start`): V1 at `/`, V2 to V5 at `/v2/` to `/v5/`.
- `npm run dev` runs all six on **one port** (default 5173; `PORT=8080 npm run dev` or `npm run dev -- --port 8080`), laid out like the deploy: V1 at `/`, V2 at `/v2/`, V3 at `/v3/`, V4 to V6 at `/v4/` to `/v6/`, each with hot reload (`scripts/dev-all.mjs`). To work on one version alone: `npm run dev:v1` (:5173), `npm run dev:v2` (:5180/v2/), `npm run dev:v3` (:5190/v3/), `npm run dev:v4` (:5200/v4/), `npm run dev:v5` (:5210/v5/), `npm run dev:v6` (:5220/v6/); the version toggle always links on the current origin, so use `npm run dev` to switch between versions.
- V2 to V5 reuse V1's `node_modules` and `public/` folder (images, video, icons). V2 to V5 pages are `noindex` through `vercel.json` while they are previews.
- V3 content: the home page and every inner page have their own V3 design, built from the shared page kit in `v3/src/components/page/` with copy taken verbatim from V1.
