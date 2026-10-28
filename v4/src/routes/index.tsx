import type { ComponentType } from 'react'
import type { RouteRecord } from 'vite-react-ssg'

import { RootLayout } from '@/components/layout/root-layout'
import { SiteLayout } from '@/components/layout/site-layout'
import { GUIDES } from '@/content/extras'
import { PAGES } from '@/content/site'

/**
 * V4 route table: the home page, the 13 inner pages (one shared template, per-page art), the form pages, legal and 404.
 * Every page is lazy-loaded and pre-rendered.
 */
const inner = (path: string): RouteRecord => ({
  path: path.slice(1),
  lazy: async () => ({ Component: (await import('@/pages/inner')).INNER[path] }),
})

const other = (
  path: string,
  pick: (m: typeof import('@/pages/other')) => ComponentType,
): RouteRecord => ({
  path,
  lazy: async () => ({ Component: pick(await import('@/pages/other')) }),
})

const guide = (slug: string): RouteRecord => ({
  path: `resources/${slug}`,
  lazy: async () => ({ Component: (await import('@/pages/inner')).guideComponent(slug) }),
})

export const routes: RouteRecord[] = [
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        Component: SiteLayout,
        children: [
          { index: true, lazy: () => import('@/pages/home') },
          ...PAGES.map((p) => inner(p.path)),
          ...GUIDES.map((g) => guide(g.slug)),
          other('talk-to-sales', (m) => m.TalkPage),
          other('sign-up', (m) => m.SignUpPage),
          other('log-in', (m) => m.LogInPage),
          other('privacy', (m) => () => <m.LegalPage kind="privacy" />),
          other('terms', (m) => () => <m.LegalPage kind="terms" />),
          // `/404` is pre-rendered to dist/404.html; `*` catches every other unknown URL on the client.
          other('404', (m) => m.NotFoundPage),
          other('*', (m) => m.NotFoundPage),
        ],
      },
    ],
  },
]
