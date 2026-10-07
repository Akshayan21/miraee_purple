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
    text: 'GBTA survey of travel buyers, March 2026.',
    href: 'https://www.businesstravelexecutive.com/news/gbta-research-shows-gaps-in-ai-adoption/',
    label: 'businesstravelexecutive.com',
  },
]

export function SourcesSection() {
  return <Sources items={sources} />
}
