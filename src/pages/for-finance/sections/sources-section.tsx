import { Sources, type Source } from '@/components/sections/sources'

const sources: Source[] = [
  {
    id: 'src-1',
    text: 'GBTA, Business Travel Innovation Research, 2026.',
    href: 'https://gbta.org/research/business-travel-innovation-research-2026/',
    label: 'gbta.org',
  },
  {
    id: 'src-2',
    text: 'Esker survey of 338 finance leaders, September 2026.',
    href: 'https://www.globenewswire.com/news-release/2026/09/24/3368357/0/en/new-esker-research-finds-finance-leaders-want-more-proof-and-control-before-giving-ai-greater-decision-making-authority.html',
    label: 'globenewswire.com',
  },
]

export function SourcesSection() {
  return <Sources items={sources} />
}
