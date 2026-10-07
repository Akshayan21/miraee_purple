import type { FaqItem } from '@/components/sections/faq'

/** Single source for the visible FAQ and the page's FAQPage JSON-LD. */
export const faq: FaqItem[] = [
  {
    question: 'What does it cost to start?',
    answer:
      'Signing up and onboarding are free, at any company size. We set up your company, your travel policy and your people with you, and train your admins and finance team.',
  },
  {
    question: 'What does Miraee replace?',
    answer:
      "Miraee replaces your booking tool and your agency's routine flight and hotel bookings. You keep your corporate cards.",
  },
  {
    question: 'Can the assistant book trips on its own?',
    answer:
      'The assistant suggests options inside your policy. Your people choose, and anything out of policy goes to an approver. Every booking is recorded in the audit log.',
  },
  {
    question: 'Do we keep our corporate cards?',
    answer:
      'Yes. Keep the corporate cards you already use. You add them in payment settings during onboarding, and receipts are matched to card charges.',
  },
  {
    question: 'Do we need a spend review before we sign up?',
    answer:
      'The spend review is optional. It is for buyers who want proof first. You can sign up and onboard without one.',
  },
  {
    question: 'Who builds Miraee?',
    answer:
      'Miraee is built by Tabhi, the company behind the Mondee travel marketplace. Your travelers get global flight and hotel coverage from that marketplace.',
  },
]
