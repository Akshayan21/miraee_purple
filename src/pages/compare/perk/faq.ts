import type { FaqItem } from '@/components/sections/faq'

/** Single source for the visible FAQ and the page's FAQPage JSON-LD. */
export const faq: FaqItem[] = [
  {
    question: 'Is Perk the same company as TravelPerk?',
    answer:
      'Yes. TravelPerk now goes by Perk. The pricing on this page comes from perk.com/pricing for North America.',
  },
  {
    question: 'What does Miraee cost?',
    answer:
      'Signing up and onboarding are free, at any company size. Ask us about booking terms before your team books its first trip.',
  },
  {
    question: 'Can travelers change their own trips in Miraee?',
    answer:
      'When a flight is delayed or canceled, the traveler gets an alert and new options, and taps one to confirm. The change is recorded for the travel lead and finance.',
  },
  {
    question: 'Do we keep our corporate cards?',
    answer:
      'Keep the corporate cards you already use. You add them in payment settings during onboarding, and receipts are matched to card charges.',
  },
  {
    question: 'How are Perk facts on this page checked?',
    answer:
      'Every Perk fact comes from perk.com/pricing and carries the date we read it. We re-check the pages every 30 days and update the date.',
  },
]
