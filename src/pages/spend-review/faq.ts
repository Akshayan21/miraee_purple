import type { FaqItem } from '@/components/sections/faq'

/** Single source for the visible FAQ and the page's FAQPage JSON-LD. */
export const faq: FaqItem[] = [
  {
    question: 'Do we need a review to sign up?',
    answer:
      'Sign-up and onboarding are free at any company size, with or without a review.',
  },
  {
    question: 'What happens to our data?',
    answer: 'You choose the one file to send. We sign an NDA first. The report belongs to you.',
  },
  {
    question: 'Will you give us a savings number?',
    answer:
      'Only as a dollar range from your own data, with the method and data period shown.',
  },
]
