import { Faq } from '@/components/sections/faq'
import { faq } from '../faq'

export function FAQSection() {
  return (
    <Faq
      heading="Questions buyers ask"
      items={faq}
      listClassName="faq"
      sectionClassName="mr-section hr-top"
    />
  )
}
