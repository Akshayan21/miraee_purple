import type { FaqItem } from '@/components/sections/faq'

/** Single source for the visible FAQ and the page's FAQPage JSON-LD. */
export const faq: FaqItem[] = [
  {
    question: 'Do we have to leave Ramp to use Miraee?',
    answer:
      'Keep your Ramp cards and your finance platform. Miraee handles travel booking, travel policy and approvals, and you add the cards you already use in payment settings during onboarding.',
  },
  {
    question: 'What happens when a flight is canceled?',
    answer:
      'The traveler gets an alert and new options, and taps one to confirm. The change is recorded in the audit log for the travel lead and finance.',
  },
]
