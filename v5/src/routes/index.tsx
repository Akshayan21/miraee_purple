import type { RouteRecord } from 'vite-react-ssg'

import { RootLayout } from '@/components/layout/root-layout'
import { SiteLayout } from '@/components/layout/site-layout'
import { GUIDES } from '@/content/extras'
import { PAGES } from '@/content/site'

type Simple = keyof typeof import('@/pages/simple-pages')

const simple = (name: Simple) => async () => {
  const mod = await import('@/pages/simple-pages')
  return { Component: mod[name] as () => React.JSX.Element }
}

/** One route per entry in PAGES, all drawn by the shared inner template with its own art scene. */
const innerRoutes: RouteRecord[] = PAGES.map((p) => ({
  path: p.path.slice(1),
  lazy: async () => {
    const mod = await import('@/pages/inner')
    return { Component: mod.innerComponent(p.path) }
  },
}))

const guideRoutes: RouteRecord[] = GUIDES.map((g) => ({
  path: `resources/${g.slug}`,
  lazy: async () => {
    const mod = await import('@/pages/inner')
    return { Component: mod.guideComponent(g.slug) }
  },
}))

export const routes: RouteRecord[] = [
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        Component: SiteLayout,
        children: [
          { index: true, lazy: () => import('@/pages/home') },
          ...innerRoutes,
          ...guideRoutes,
          { path: 'talk-to-sales', lazy: simple('TalkPage') },
          { path: 'sign-up', lazy: simple('SignUpPage') },
          { path: 'log-in', lazy: simple('LogInPage') },
          { path: 'privacy', lazy: simple('PrivacyPage') },
          { path: 'terms', lazy: simple('TermsPage') },
          // `/404` is pre-rendered to dist/404.html; `*` catches every other unknown URL on the client.
          { path: '404', lazy: simple('NotFoundPage') },
          { path: '*', lazy: simple('NotFoundPage') },
        ],
      },
    ],
  },
]
