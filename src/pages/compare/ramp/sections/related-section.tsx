import { RelatedCards, type RelatedCard } from '@/components/sections/related-cards'

const cards: RelatedCard[] = [
  {
    to: '/compare/navan',
    shape: 'cutout',
    tone: 'plum',
    image: { src: '/img/px3932459-traveler-phone.png', width: 1100, height: 964 },
    title: 'Navan alternatives',
    description:
      'Miraee vs Navan on cost to start, policy controls, the finance view and changes. Plus other Navan alternatives.',
    meta: 'Checked September 30, 2026',
  },
  {
    to: '/compare/sap-concur',
    shape: 'frame',
    tone: 'paper',
    image: { src: '/img/px4623080-team-wide.jpg', width: 917, height: 688 },
    title: 'SAP Concur alternatives',
    description: 'Miraee vs SAP Concur on onboarding, travel policy, approvals and month-end.',
    meta: 'Checked September 30, 2026',
  },
  {
    to: '/compare/perk',
    shape: 'cutout',
    tone: 'plum',
    image: { src: '/img/px4173228-traveler-suitcase.png', width: 1100, height: 957 },
    title: 'TravelPerk alternatives',
    description:
      'Miraee vs Perk, formerly TravelPerk, on cost to start, the finance view and how changes are confirmed.',
    meta: 'Checked September 30, 2026',
  },
  {
    to: '/compare/ramp',
    shape: 'cutout',
    tone: 'paper',
    image: { src: '/img/px5918389-controller.png', width: 831, height: 1100 },
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
