import type { FaqItem } from '@/components/sections/faq'

/** Single source for the visible FAQ and the page's FAQPage JSON-LD. */
export const faq: FaqItem[] = [
  {
    question: 'Is corporate travel manager a full-time job?',
    answer:
      'In large companies it often is. In companies of 300 to 1,500 people it is commonly part of an operations, office, people or finance role. A clear policy and a booking tool that applies it let one person run the program in a few hours a month.',
  },
  {
    question: 'What skills does a corporate travel manager need?',
    answer:
      'Clear writing for the policy, comfort with numbers for the monthly view, calm judgment when plans change, and the ability to work with finance, assistants and travelers.',
  },
  {
    question: 'Who should approve business travel?',
    answer:
      "The traveler's budget owner, for trips outside policy. Trips inside policy can book straight away.",
  },
  {
    question: 'What should a travel manager report each month?',
    answer:
      'Trips booked, spend against budget, bookings outside the channel, out-of-policy spend and unused tickets, on one page.',
  },
  {
    question: 'Where do I start?',
    answer:
      'With the policy. Download the [business travel policy template](/resources/business-travel-policy-template) and adapt the numbers with finance.',
  },
]
