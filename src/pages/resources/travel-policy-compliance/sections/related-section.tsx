import { RelatedCards, type RelatedCard } from '@/components/sections/related-cards'

const cards: RelatedCard[] = [
  {
    to: '/resources/business-travel-policy',
    shape: 'frame',
    tone: 'paper',
    image: { src: '/img/px6775122-team-map-card.jpg', width: 1200, height: 800 },
    kicker: 'Travel leads',
    title: 'How to write a business travel policy your people will follow',
    description: 'Booking rules, approvals, flight and hotel limits, and a rollout plan.',
  },
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
