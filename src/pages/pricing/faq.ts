import type { FaqItem } from '@/components/sections/faq'

/** Single source for the visible FAQ and the page's FAQPage JSON-LD. */
export const faq: FaqItem[] = [
  {
    question: 'Is there a limit on company size?',
    answer: 'Sign-up and onboarding are free however many people you have.',
  },
  {
    question: 'What does onboarding include?',
    answer:
      'Company and travel policy setup, employee onboarding, payment settings, and training for your admins and finance team.',
  },
  {
    question: 'Do we have to change our corporate cards?',
    answer: 'Keep the corporate cards you already use.',
  },
  {
    question: 'Do we need a spend review first?',
    answer: 'The spend review is optional. It is for buyers who want proof before they move.',
  },
  {
    question: 'How do booking terms work?',
    answer:
      'Ask us about booking terms before your team books its first trip. We set them out for you in writing.',
  },
]
