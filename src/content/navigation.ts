export type NavItem = { label: string; to: string }

export const NAV_LINKS: NavItem[] = [
  { label: 'How it works', to: '/how-it-works' },
  { label: 'Spend review', to: '/spend-review' },
  { label: 'For finance', to: '/finance' },
  { label: 'For travel managers', to: '/travel-managers' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Compare', to: '/compare' },
  { label: 'Resources', to: '/resources' },
]

export const FOOTER_PRODUCT_LINKS: NavItem[] = [
  { label: 'How it works', to: '/how-it-works' },
  { label: 'Spend review', to: '/spend-review' },
  { label: 'For finance', to: '/finance' },
  { label: 'For travel managers', to: '/travel-managers' },
  { label: 'When plans change', to: '/when-plans-change' },
  { label: 'Pricing', to: '/pricing' },
]

export const FOOTER_COMPANY_LINKS: NavItem[] = [
  { label: 'Company', to: '/company' },
  { label: 'Security', to: '/security' },
  { label: 'Talk to sales', to: '/talk-to-sales' },
  { label: 'Privacy', to: '/privacy' },
  { label: 'Terms', to: '/terms' },
]
