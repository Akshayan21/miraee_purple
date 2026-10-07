import type { RouteRecord } from 'vite-react-ssg'

import { RootLayout } from '@/components/layout/root-layout'
import { SiteLayout } from '@/components/layout/site-layout'
import type { PageStyleSheet, RouteHandle } from '@/lib/route-handle'

/**
 * Route table. Pages are code-split with `lazy`; vite-react-ssg resolves every one of them at build time
 * and writes a static HTML file per path.
 *
 * - SiteLayout: header + footer for the marketing site.
 * - Landing pages (/lp/*) bring their own stripped-down chrome (LandingLayout) for paid traffic.
 * - `handle.styles` lists the extra page-layout sheets a route needs (see lib/route-handle.ts).
 */
const styles = (...sheets: PageStyleSheet[]): { handle: RouteHandle } => ({
  handle: { styles: sheets },
})

const TRUST = styles('trust')
const CORE = styles('core')
const LONGFORM = styles('trust', 'core', 'longform')

export const routes: RouteRecord[] = [
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        Component: SiteLayout,
        children: [
          {
            index: true,
            handle: { headerTone: 'light' } satisfies RouteHandle,
            lazy: () => import('@/pages/home'),
          },
          { path: 'how-it-works', ...CORE, lazy: () => import('@/pages/how-it-works') },
          { path: 'spend-review', ...CORE, lazy: () => import('@/pages/spend-review') },
          { path: 'finance', ...CORE, lazy: () => import('@/pages/for-finance') },
          { path: 'travel-managers', ...CORE, lazy: () => import('@/pages/for-travel-managers') },
          { path: 'pricing', ...TRUST, lazy: () => import('@/pages/pricing') },
          { path: 'security', ...TRUST, lazy: () => import('@/pages/security') },
          { path: 'company', ...TRUST, lazy: () => import('@/pages/company') },
          { path: 'talk-to-sales', ...TRUST, lazy: () => import('@/pages/talk-to-sales') },
          { path: 'sign-up', ...TRUST, lazy: () => import('@/pages/sign-up') },
          { path: 'compare', ...LONGFORM, lazy: () => import('@/pages/compare/overview') },
          { path: 'compare/navan', ...LONGFORM, lazy: () => import('@/pages/compare/navan') },
          { path: 'compare/perk', ...LONGFORM, lazy: () => import('@/pages/compare/perk') },
          { path: 'compare/ramp', ...LONGFORM, lazy: () => import('@/pages/compare/ramp') },
          {
            path: 'compare/sap-concur',
            ...LONGFORM,
            lazy: () => import('@/pages/compare/sap-concur'),
          },
          { path: 'resources', ...LONGFORM, lazy: () => import('@/pages/resources/overview') },
          {
            path: 'resources/business-travel-policy',
            ...LONGFORM,
            lazy: () => import('@/pages/resources/business-travel-policy'),
          },
          {
            path: 'resources/business-travel-policy-template',
            ...LONGFORM,
            lazy: () => import('@/pages/resources/business-travel-policy-template'),
          },
          {
            path: 'resources/corporate-travel-manager',
            ...LONGFORM,
            lazy: () => import('@/pages/resources/corporate-travel-manager'),
          },
          {
            path: 'resources/travel-and-expense-policy',
            ...LONGFORM,
            lazy: () => import('@/pages/resources/travel-and-expense-policy'),
          },
          {
            path: 'resources/travel-expense-report',
            ...LONGFORM,
            lazy: () => import('@/pages/resources/travel-expense-report'),
          },
          {
            path: 'resources/travel-policy-compliance',
            ...LONGFORM,
            lazy: () => import('@/pages/resources/travel-policy-compliance'),
          },
          // `/404` is pre-rendered to dist/404.html; `*` catches every other unknown URL on the client.
          { path: '404', ...TRUST, lazy: () => import('@/pages/not-found') },
          { path: '*', ...TRUST, lazy: () => import('@/pages/not-found') },
        ],
      },
      { path: 'lp/cfo', lazy: () => import('@/pages/landing/cfo') },
      {
        path: 'lp/navan-alternative',
        ...TRUST,
        lazy: () => import('@/pages/landing/navan-alternative'),
      },
      {
        path: 'lp/concur-alternative',
        ...TRUST,
        lazy: () => import('@/pages/landing/concur-alternative'),
      },
    ],
  },
]
