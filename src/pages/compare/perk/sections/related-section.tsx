import { RelatedCards, type RelatedCard } from '@/components/sections/related-cards'

const cards: RelatedCard[] = [
  {
    to: '/compare/navan',
    shape: 'frame',
    tone: 'plum',
    image: { src: '/img/document/compare-card-navan.jpg', width: 2046, height: 1388 },
    title: 'Navan alternatives',
    description:
      'Miraee vs Navan on cost to start, policy controls, the finance view and changes. Plus other Navan alternatives.',
    meta: 'Checked September 30, 2026',
  },
  {
    to: '/compare/sap-concur',
    shape: 'frame',
    tone: 'paper',
    image: { src: '/img/document/compare-card-sap-concur.jpg', width: 2046, height: 1365 },
    title: 'SAP Concur alternatives',
    description: 'Miraee vs SAP Concur on onboarding, travel policy, approvals and month-end.',
    meta: 'Checked September 30, 2026',
  },
  {
    to: '/compare/perk',
    shape: 'frame',
    tone: 'plum',
    image: { src: '/img/document/compare-card-perk.jpg', width: 1637, height: 2046 },
    title: 'TravelPerk alternatives',
    description:
      'Miraee vs Perk, formerly TravelPerk, on cost to start, the finance view and how changes are confirmed.',
    meta: 'Checked September 30, 2026',
  },
  {
    to: '/compare/ramp',
    shape: 'frame',
    tone: 'paper',
    image: { src: '/img/document/compare-card-ramp.jpg', width: 1626, height: 2046 },
    title: 'Ramp Travel with Miraee',
    description:
      'Keep the Ramp card you use and add travel depth: policy on every booking and new options when plans change.',
    meta: 'Checked September 30, 2026',
  },
]

export function RelatedSection() {
  return (
    <RelatedCards
      heading="More comparisons"
      cards={cards}
      more={{ to: '/compare', label: 'Compare corporate travel management software' }}
    />
  )
}
