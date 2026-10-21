import type { RouteRecord } from 'vite-react-ssg'

import { RootLayout } from '@/components/layout/root-layout'
import { SiteLayout } from '@/components/layout/site-layout'
import type { RouteHandle } from '@/lib/route-handle'

/**
 * V3 route table: every V1 route, each with its own V3 page under `src/pages/<folder>` (same folder names as V1).
 * Landing pages (/lp/*) bring their own stripped-down chrome, as in V1.
 */
/** The V1 page-layout sheets the ported product views and long-form prose rely on (see lib/route-handle.ts). */
const SHEETS = { handle: { styles: ['trust', 'core', 'longform'] } satisfies RouteHandle }

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
          { path: 'how-it-works', ...SHEETS, lazy: () => import('@/pages/how-it-works') },
          { path: 'spend-review', ...SHEETS, lazy: () => import('@/pages/spend-review') },
          { path: 'finance', ...SHEETS, lazy: () => import('@/pages/for-finance') },
          { path: 'travel-managers', ...SHEETS, lazy: () => import('@/pages/for-travel-managers') },
          { path: 'pricing', ...SHEETS, lazy: () => import('@/pages/pricing') },
          { path: 'security', ...SHEETS, lazy: () => import('@/pages/security') },
          { path: 'company', ...SHEETS, lazy: () => import('@/pages/company') },
          { path: 'talk-to-sales', ...SHEETS, lazy: () => import('@/pages/talk-to-sales') },
          { path: 'sign-up', ...SHEETS, lazy: () => import('@/pages/sign-up') },
          { path: 'compare', ...SHEETS, lazy: () => import('@/pages/compare/overview') },
          { path: 'compare/navan', ...SHEETS, lazy: () => import('@/pages/compare/navan') },
          { path: 'compare/perk', ...SHEETS, lazy: () => import('@/pages/compare/perk') },
          { path: 'compare/ramp', ...SHEETS, lazy: () => import('@/pages/compare/ramp') },
          {
            path: 'compare/sap-concur',
            ...SHEETS,
            lazy: () => import('@/pages/compare/sap-concur'),
          },
          { path: 'resources', ...SHEETS, lazy: () => import('@/pages/resources/overview') },
          {
            path: 'resources/business-travel-policy',
            lazy: () => import('@/pages/resources/business-travel-policy'),
          },
          {
            path: 'resources/business-travel-policy-template',
            lazy: () => import('@/pages/resources/business-travel-policy-template'),
          },
          {
            path: 'resources/corporate-travel-manager',
            lazy: () => import('@/pages/resources/corporate-travel-manager'),
          },
          {
            path: 'resources/travel-and-expense-policy',
            lazy: () => import('@/pages/resources/travel-and-expense-policy'),
          },
          {
            path: 'resources/travel-expense-report',
            lazy: () => import('@/pages/resources/travel-expense-report'),
          },
          {
            path: 'resources/travel-policy-compliance',
            lazy: () => import('@/pages/resources/travel-policy-compliance'),
          },
          // `/404` is pre-rendered to dist/404.html; `*` catches every other unknown URL on the client.
          { path: '404', ...SHEETS, lazy: () => import('@/pages/not-found') },
          { path: '*', ...SHEETS, lazy: () => import('@/pages/not-found') },
        ],
      },
      { path: 'lp/cfo', ...SHEETS, lazy: () => import('@/pages/landing/cfo') },
      {
        path: 'lp/navan-alternative',
        ...SHEETS,
        lazy: () => import('@/pages/landing/navan-alternative'),
      },
      {
        path: 'lp/concur-alternative',
        ...SHEETS,
        lazy: () => import('@/pages/landing/concur-alternative'),
      },
    ],
  },
]
