import { Sources, type Source } from '@/components/sections/sources'

const sources: Source[] = [
  {
    id: 'src-1',
    text: 'Business Travel News, Business Traveler survey, October 2025.',
    href: 'https://www.businesstravelnews.com/Research/Business-Traveler-2025/Part-4-Booking-Tools-and-Technologies',
    label: 'businesstravelnews.com',
  },
  {
    id: 'src-2',
    text: 'GBTA, Business Travel Innovation Research, 2026. North America and Europe.',
    href: 'https://gbta.org/research/business-travel-innovation-research-2026/',
    label: 'gbta.org',
  },
]

export function SourcesSection() {
  return <Sources items={sources} />
}
