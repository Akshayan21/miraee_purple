import { RelatedCards, type RelatedCard } from '@/components/sections/related-cards'

const cards: RelatedCard[] = [
  {
    to: '/resources/travel-and-expense-policy',
    shape: 'cutout',
    tone: 'paper',
    image: { src: '/img/px5918389-controller.png', width: 831, height: 1100 },
    kicker: 'Finance',
    title: 'Travel and expense policy: what to include, with examples',
    description:
      'Example wording finance teams can copy: limits, receipts, reimbursement and GL codes.',
  },
  {
    to: '/resources/travel-policy-compliance',
    shape: 'frame',
    tone: 'paper',
    image: { src: '/img/px8367824-desk.jpg', width: 1000, height: 750 },
    kicker: 'Travel leads',
    title: 'Travel policy compliance: make the right option the easy one',
    description: 'Why people book outside the program, and seven ways to bring bookings back.',
  },
  {
    to: '/resources/travel-expense-report',
    shape: 'cutout',
    tone: 'paper',
    image: { src: '/img/px5918389-controller.png', width: 831, height: 1100 },
    kicker: 'Finance',
    title: 'Travel expense reports: close month-end with fewer receipts to chase',
    description: 'What a good report contains, plus a travel month-end close checklist.',
  },
]

export function RelatedSection() {
  return (
    <RelatedCards
      heading="Keep reading"
      cards={cards}
      more={{ to: '/resources', label: 'More business travel resources' }}
    />
  )
}
