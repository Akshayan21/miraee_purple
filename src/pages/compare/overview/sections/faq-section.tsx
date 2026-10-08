import { Faq } from '@/components/sections/faq'
import { faq } from '../faq'

export function FaqSection() {
  return (
    <Faq heading="Questions" headingId="faq" items={faq} sectionClassName="mr-paper mr-section" />
  )
}
