import { Sources, type Source } from '@/components/sections/sources'

const sources: Source[] = [
  {
    id: 'src-1',
    text: 'Tabhi group figure, tabhi.ai, September 2026.',
    href: 'https://tabhi.ai',
    label: 'tabhi.ai',
  },
  { id: 'src-2', text: 'Mondee network figure, April 2025.' },
]

export function SourcesSection() {
  return <Sources items={sources} />
}
