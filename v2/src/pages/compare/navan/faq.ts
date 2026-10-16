import type { FaqItem } from '@/components/sections/faq'

/** Single source for the visible FAQ and the page's FAQPage JSON-LD. */
export const faq: FaqItem[] = [
  {
    question: 'Is Miraee free for companies above 300 employees?',
    answer:
      'Yes. Sign-up and onboarding are free at every company size. A company of 300, 900 or 1,500 people gets the same free start, including setup of your company, your travel policy and your people.',
  },
  {
    question: 'Do we need to change our corporate cards to use Miraee?',
    answer:
      'Keep the corporate cards you already use. You add them in payment settings during onboarding, and receipts are matched to card charges.',
  },
  {
    question: 'Can the Miraee assistant book trips on its own?',
    answer:
      'The assistant suggests options inside your policy. Your people choose, and anything out of policy goes to an approver. Every booking is recorded in the audit log.',
  },
  {
    question: 'What does Miraee replace?',
    answer:
      "Miraee replaces your booking tool and your agency's routine flight and hotel bookings. You keep your corporate cards.",
  },
  {
    question: 'How are Navan facts on this page checked?',
    answer:
      'Every Navan fact comes from navan.com/pricing and carries the date we read it. We re-check the pages every 30 days and update the date.',
  },
]
