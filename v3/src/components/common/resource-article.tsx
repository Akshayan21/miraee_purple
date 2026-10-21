import type { ReactNode } from 'react'
import { Faq, type FaqItem } from '@/components/sections/faq'

/** Resource FAQs share the full-width layout used by the other pages. */
export function ResourceArticle({
  children,
  related,
  faq,
}: {
  children: ReactNode
  related: ReactNode
  faq: FaqItem[]
}) {
  return (
    <main id="main">
      <div>{children}</div>
      <Faq heading="Questions" headingId="questions" items={faq} />
      <div>{related}</div>
    </main>
  )
}
