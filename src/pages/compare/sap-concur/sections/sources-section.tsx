import { Sources, type Source } from '@/components/sections/sources'

const sources: Source[] = [
  {
    id: 'src-1',
    text: 'GBTA and Direct Travel survey of 195 travel managers, May 2025.',
    href: 'https://www.businesstravelnews.com/Technology/GBTA-Direct-Travel-Survey-Shows-Challenges-with-OBT-Servicing-Meeting-Integration',
    label: 'businesstravelnews.com',
  },
]

export function SourcesSection() {
  return <Sources items={sources} />
}
