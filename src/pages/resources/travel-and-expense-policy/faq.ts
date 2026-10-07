import type { FaqItem } from '@/components/sections/faq'

/** Single source for the visible FAQ and the page's FAQPage JSON-LD. */
export const faq: FaqItem[] = [
  {
    question: 'What is a travel and expense policy?',
    answer:
      'A travel and expense policy sets the rules for business trips and the costs that come with them: what is reimbursable, the limits, the receipts required, the submission deadline, who approves and when employees are paid back.',
  },
  {
    question: 'How long should employees have to submit expenses?',
    answer:
      'Thirty days after the end of the trip is a common deadline. It gives travelers time and keeps month-end close on schedule. Older claims can need finance approval.',
  },
  {
    question: 'What counts as a valid receipt?',
    answer:
      'An itemized receipt that shows the merchant, date, items and amount paid. Card slips alone usually do not show the items. For a lost receipt, ask for a short written statement with the same details.',
  },
  {
    question: 'Should we use per diems or actual costs for meals?',
    answer:
      'Both work. Actual cost up to a daily limit is easier to audit; a per diem is simpler for travelers. Choose one and use it for every trip.',
  },
  {
    question: 'Where can I find a template?',
    answer:
      'Our [business travel policy template](/resources/business-travel-policy-template) includes the booking and expense sections in one editable document, with a rollout checklist.',
  },
]
