/** The resource guides, as listed on V1's resources hub and in each guide's "Keep reading" row. */
export type Guide = {
  to: string
  kicker: string
  title: string
  description: string
  img: string
  width: number
  height: number
  alt: string
}

export const GUIDES: Record<string, Guide> = {
  'business-travel-policy': {
    to: '/resources/business-travel-policy',
    kicker: 'Travel leads',
    title: 'How to write a business travel policy your people will follow',
    description: 'Booking rules, approvals, flight and hotel limits, and a rollout plan.',
    img: '/img/document/resources-guide-travel-policy-1',
    width: 2046,
    height: 1364,
    alt: 'A hand pins notes to a planning board of process diagrams.',
  },
  'travel-and-expense-policy': {
    to: '/resources/travel-and-expense-policy',
    kicker: 'Finance',
    title: 'Travel and expense policy: what to include, with examples',
    description:
      'Example wording finance teams can copy: limits, receipts, reimbursement and GL codes.',
    img: '/img/document/resources-guide-t-e-policy-1',
    width: 2046,
    height: 1366,
    alt: 'Two colleagues review figures on paper beside open laptops.',
  },
  'travel-policy-compliance': {
    to: '/resources/travel-policy-compliance',
    kicker: 'Travel leads',
    title: 'Travel policy compliance: make the right option the easy one',
    description: 'Why people book outside the program, and seven ways to bring bookings back.',
    img: '/img/document/resources-guide-policy-compliance-1',
    width: 2046,
    height: 1366,
    alt: 'An aisle of airline seats with passengers in a full cabin.',
  },
  'travel-expense-report': {
    to: '/resources/travel-expense-report',
    kicker: 'Finance',
    title: 'Travel expense reports: close month-end with fewer receipts to chase',
    description: 'What a good report contains, plus a travel month-end close checklist.',
    img: '/img/document/resources-guide-expense-reports-1',
    width: 2046,
    height: 1364,
    alt: 'A team meets in a glass-walled conference room.',
  },
  'corporate-travel-manager': {
    to: '/resources/corporate-travel-manager',
    kicker: 'Travel leads',
    title: "The part-time corporate travel manager's guide",
    description: 'Running company travel on top of your day job, in plain steps.',
    img: '/img/document/resources-guide-part-time-travel-manager-1',
    width: 1364,
    height: 2046,
    alt: 'A smiling man in a white t-shirt.',
  },
}

export const ALL_GUIDES = [
  'business-travel-policy',
  'travel-and-expense-policy',
  'travel-policy-compliance',
  'travel-expense-report',
  'corporate-travel-manager',
]
