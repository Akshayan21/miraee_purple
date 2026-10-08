import { StaticHtml } from '@/components/common/static-html'
import { Faq, type FaqItem } from '@/components/sections/faq'

/** Resource FAQs share the full-width layout used by the other pages. */
export function ResourceArticle({ html, faq }: { html: string; faq: FaqItem[] }) {
  const boundary = html.indexOf('<section class="mr-section hr-top lf-related"')
  const article = boundary < 0 ? html : html.slice(0, boundary)
  const related = boundary < 0 ? '' : html.slice(boundary)
  return (
    <main id="main">
      <StaticHtml tag="div" html={article} />
      <Faq heading="Questions" headingId="questions" items={faq} />
      <StaticHtml tag="div" html={related} />
    </main>
  )
}
