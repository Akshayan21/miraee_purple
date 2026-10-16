import { Faq } from '@/components/sections/faq'
import { faq } from '../faq'

export function FAQSection() {
  return (
    <Faq
      heading="Common questions"
      items={faq}
      listClassName="faq"
      sectionClassName="mr-paper mr-section hr-top"
    />
  )
}
