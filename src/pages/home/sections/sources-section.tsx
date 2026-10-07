import { Sources, type Source } from '@/components/sections/sources'

const sources: Source[] = [
  {
    id: 'src-1',
    text: 'GBTA, Business Travel Index forecast, August 2026. Global figures.',
    href: 'https://www.businesswire.com/news/home/20260803789162/en/Global-Business-Travel-Spending-to-Hit-Record-$1.71-Trillion-in-2026-While-Trips-Reach-1.84-Billion-Says-GBTA-Forecast',
    label: 'businesswire.com',
  },
  {
    id: 'src-2',
    text: 'GBTA survey of travel buyers, March 2026.',
    href: 'https://www.businesstravelexecutive.com/news/gbta-research-shows-gaps-in-ai-adoption/',
    label: 'businesstravelexecutive.com',
  },
  {
    id: 'src-3',
    text: 'GBTA, Business Travel Innovation Research, 2026.',
    href: 'https://gbta.org/research/business-travel-innovation-research-2026/',
    label: 'gbta.org',
  },
]

export function SourcesSection() {
  return <Sources items={sources} />
}
