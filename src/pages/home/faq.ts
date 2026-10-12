import type { FaqItem } from '@/components/sections/faq'

/** Single source for the visible FAQ and the page's FAQPage JSON-LD. */
export const faq: FaqItem[] = [
  {
    question: 'What does it cost to start?',
    answer: 'Sign-up and onboarding are free at any company size, including setup and training.',
  },
  {
    question: 'What does Miraee replace?',
    answer:
      "Miraee replaces your booking tool and your agency's routine flight and hotel bookings. You keep your corporate cards.",
  },
  {
    question: 'Does the assistant book on its own?',
    answer:
      'The assistant suggests options inside your policy. Your people choose, and anything out of policy goes to an approver.',
  },
  {
    question: 'Do we keep our corporate cards?',
    answer: 'Yes. Add them during onboarding, and receipts are matched to card charges.',
  },
  {
    question: 'Do we need a spend review first?',
    answer: 'The review is optional. It is there for buyers who want proof first.',
  },
  {
    question: 'Who builds Miraee?',
    answer:
      'Miraee is built by Tabhi, the company behind the Mondee travel marketplace. Your travelers get global flight and hotel coverage from that marketplace.',
  },
]
