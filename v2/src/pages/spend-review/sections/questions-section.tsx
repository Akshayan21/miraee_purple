import { Faq } from '@/components/sections/faq'
import { faq } from '../faq'

export function QuestionsSection() {
  return <Faq heading="Questions" items={faq} listClassName="faq" sectionClassName="mr-section" />
}
