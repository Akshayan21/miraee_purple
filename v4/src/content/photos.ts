/** Hero photo per inner page (shared by V4 and V5, identical in both). Files live in public/img; credits are in the README. */
export type PagePhotoData = {
  src: string
  alt: string
  w: number
  h: number
  /** CSS object-position, to keep faces in frame when the photo is cropped. */
  pos?: string
  /** A transparent cut-out: shown on a tinted panel instead of full-bleed. */
  cutout?: boolean
}

const P = (
  file: string,
  alt: string,
  w: number,
  h: number,
  extra: Partial<PagePhotoData> = {},
): PagePhotoData => ({ src: `/img/${file}`, alt, w, h, ...extra })

export const PAGE_PHOTOS: Record<string, PagePhotoData> = {
  '/how-it-works': P(
    'px4173205-colleagues.webp',
    'Two colleagues with a passport, heading out on a business trip.',
    1400,
    933,
    { pos: '50% 30%' },
  ),
  '/when-plans-change': P(
    'px3885601-plans-departure-board.webp',
    'A traveler checks the departures board in an airport hall.',
    1400,
    934,
    { pos: '50% 35%' },
  ),
  '/finance': P(
    'px7433865-finance-meeting.webp',
    'Finance colleagues review reports together at a table.',
    1400,
    934,
    { pos: '50% 40%' },
  ),
  '/travel-managers': P(
    'px6775122-team-map.webp',
    'A team plans trips together around their laptops.',
    1536,
    1024,
    { pos: '50% 40%' },
  ),
  '/travelers': P(
    'px8419929-gate.webp',
    'An airport window at sunset, with a plane at the gate.',
    1200,
    900,
  ),
  '/security': P(
    'px5917851-security-office.webp',
    'A colleague works on a laptop in a quiet office.',
    1400,
    934,
    { pos: '30% 50%' },
  ),
  '/spend-review': P(
    'px7580704-analyst-chart.webp',
    'A reviewer marks up a printed chart of travel spend.',
    1400,
    934,
    { pos: '60% 40%' },
  ),
  '/spend-review/method': P(
    'px8367824-desk.webp',
    'A colleague checks a report on her laptop.',
    1000,
    750,
    { pos: '50% 35%' },
  ),
  '/pricing': P(
    'px7688524-pricing-invoice.webp',
    'A reviewer checks a company invoice with a calculator.',
    1400,
    1050,
    { pos: '50% 50%' },
  ),
  '/company': P(
    'px18999384-company-team.webp',
    'A team of colleagues standing together in a bright office.',
    1400,
    934,
    { pos: '50% 40%' },
  ),
  '/resources': P(
    'px7034439-notes-desk.webp',
    'A colleague takes notes at a desk with a laptop and coffee.',
    1400,
    934,
    { pos: '60% 40%' },
  ),
  '/resources/business-travel-policy-template': P(
    'px6814526-signing-policy.webp',
    'A hand signs a policy document at a desk.',
    1400,
    934,
    { pos: '60% 50%' },
  ),
  '/talk-to-sales': P(
    'px1181605-sales-meeting.webp',
    'Two colleagues talk through a plan in a bright office.',
    1400,
    934,
    { pos: '50% 40%' },
  ),
  '/sign-up': P(
    'px12663090-signup-hotel-lounge.webp',
    'A traveler works on her laptop in a hotel lounge, her suitcase beside her.',
    1400,
    934,
    { pos: '30% 45%' },
  ),
  '/log-in': P(
    'px9432952-login-cafe-laptop.webp',
    'A colleague types on a laptop in a cafe.',
    1400,
    934,
    { pos: '60% 40%' },
  ),
  '/resources/business-travel-policy': P(
    'px8353764-guide-policy-binder.webp',
    'A tidy desk with a policy binder and papers.',
    1400,
    934,
    { pos: '50% 50%' },
  ),
  '/resources/travel-and-expense-policy': P(
    'px5900029-guide-expense-receipts.webp',
    'A colleague writes notes while holding trip receipts.',
    1400,
    934,
    { pos: '50% 35%' },
  ),
  '/resources/travel-expense-report': P(
    'px8297058-guide-expense-report.webp',
    'A colleague builds a report on her laptop at a window desk.',
    1400,
    934,
    { pos: '40% 45%' },
  ),
  '/resources/corporate-travel-manager': P(
    'px7368311-guide-travel-manager-map.webp',
    'Hands mark trip destinations on a world map beside passports.',
    1400,
    934,
    { pos: '50% 45%' },
  ),
  '/resources/travel-policy-compliance': P(
    'px7651554-guide-compliance-checklist.webp',
    'A reviewer ticks items off a checklist on a clipboard.',
    1400,
    1050,
    { pos: '50% 40%' },
  ),
}

/** Pages without their own entry fall back to the Resources photo. */
export function photoFor(path: string): PagePhotoData | undefined {
  return (
    PAGE_PHOTOS[path] ?? (path.startsWith('/resources/') ? PAGE_PHOTOS['/resources'] : undefined)
  )
}
