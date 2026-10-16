export type NavItem = { label: string; to: string; children?: NavItem[] }

export const NAV_LINKS: NavItem[] = [
  { label: 'How it works', to: '/how-it-works' },
  { label: 'Finance', to: '/finance' },
  { label: 'Travel managers', to: '/travel-managers' },
  { label: 'Pricing', to: '/pricing' },
  {
    label: 'Resources',
    to: '/resources',
    children: [
      { label: 'Guides', to: '/resources' },
      { label: 'Policy template', to: '/resources/business-travel-policy-template' },
      { label: 'Compare Miraee', to: '/compare' },
    ],
  },
]

export const FOOTER_PRODUCT_LINKS: NavItem[] = [
  { label: 'How it works', to: '/how-it-works' },
  { label: 'Spend review', to: '/spend-review' },
  { label: 'When plans change', to: '/when-plans-change' },
  { label: 'Finance', to: '/finance' },
  { label: 'Travel managers', to: '/travel-managers' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Security', to: '/security' },
]

export const FOOTER_COMPANY_LINKS: NavItem[] = [
  { label: 'Company', to: '/company' },
  { label: 'Talk to sales', to: '/talk-to-sales' },
  { label: 'Compare', to: '/compare' },
  { label: 'Guides', to: '/resources' },
  { label: 'Privacy', to: '/privacy' },
  { label: 'Terms', to: '/terms' },
]
