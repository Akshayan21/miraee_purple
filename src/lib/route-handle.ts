/**
 * Page-layout style sheets that only some routes use (src/styles/site-{trust,core,longform}.css).
 * The static site linked each sheet from just the pages that needed it. In the SPA every sheet ships in one
 * bundle, so each is wrapped in `:where(body[data-css~="<name>"])`, and RootLayout sets `data-css` on
 * <body> from the matched route's `handle.styles`. This keeps their rules from leaking onto other pages.
 */
export type PageStyleSheet = 'trust' | 'core' | 'longform'

export type RouteHandle = {
  styles?: PageStyleSheet[]
}
