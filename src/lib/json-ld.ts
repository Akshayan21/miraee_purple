import { faqAnswerText, type FaqItem } from '@/lib/faq'

/** schema.org FAQPage node built from the same list the page renders, so markup and structured data cannot drift. */
export function faqPageJsonLd(id: string, items: FaqItem[]) {
  return {
    '@type': 'FAQPage',
    '@id': id,
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: faqAnswerText(item.answer) },
    })),
  }
}
