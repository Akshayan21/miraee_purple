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

- Home hero photo: [Briana Tozour on Unsplash](https://unsplash.com/photos/people-walking-through-sunlit-airport-terminal-rUXh5USKfUQ), used under the Unsplash License. Cut-out portraits elsewhere on the site are stock images carried over from the original static site.

## Known gaps carried over from the static site

- `/when-plans-change`, `/privacy` and `/terms` are linked but do not exist yet (they render the 404 page).
- The Open Graph image `/img/og/miraee-og-1200x630.jpg` is referenced in page metadata but is not in `public/img`.
- `sitemap.xml` and `llms.txt` still list `/when-plans-change`.
