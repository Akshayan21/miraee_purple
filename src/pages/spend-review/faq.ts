import type { FaqItem } from '@/components/sections/faq'

/** Single source for the visible FAQ and the page's FAQPage JSON-LD. */
export const faq: FaqItem[] = [
  {
    question: 'Do we need a review to sign up?',
    answer:
      'The review is optional. Sign-up and onboarding are free at any company size, with or without it.',
  },
  {
    question: 'What happens to our data?',
    answer: 'You choose the one file to send. We sign an NDA first. The report belongs to you.',
  },
  {
    question: 'Will you give us a savings number?',
    answer:
      'The review measures what happened in your own data. Any savings figure comes as a dollar range, with the method and the data period shown.',
  },
]
