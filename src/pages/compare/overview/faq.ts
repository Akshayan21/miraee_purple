import type { FaqItem } from '@/components/sections/faq'

/** Single source for the visible FAQ and the page's FAQPage JSON-LD. */
export const faq: FaqItem[] = [
  {
    question: 'What is corporate travel management software?',
    answer:
      'Corporate travel management software is where employees book business flights and hotels inside company policy, approvers handle exceptions, and finance sees what each trip cost. Many tools also handle expense, with receipts matched to card charges.',
  },
  {
    question: 'Which corporate travel tools are free to start?',
    answer:
      "Several tools have a free entry plan, and the terms differ by headcount, per-booking fees and features. The table above lists each vendor's entry offer from its own pricing page, with the date we checked it.",
  },
  {
    question: 'How should we compare savings claims?',
    answer:
      'Ask whether the figure was measured on your own bookings, over which period, and by what method. A review of your own last year of travel gives you a number your controller can check.',
  },
  {
    question: 'What does Miraee replace?',
    answer:
      "Miraee replaces your booking tool and your agency's routine flight and hotel bookings. You keep your corporate cards.",
  },
]
