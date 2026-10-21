import type { FaqItem } from '@/components/sections/faq'

/** Single source for the visible FAQ and the page's FAQPage JSON-LD. */
export const faq: FaqItem[] = [
  {
    question: 'Does Miraee connect to our accounting system?',
    answer:
      'Every trip carries its GL code and budget from the moment it is booked, so the coding your controller needs is already there. Ask us about your accounting setup and we will walk through it with your team.',
  },
  {
    question: 'Can we try Miraee before our Concur renewal?',
    answer:
      'Yes. Signing up and onboarding are free at any company size, so you can set up your company, your travel policy and your people at your own pace, before or after your renewal date.',
  },
  {
    question: 'Do our travelers need training?',
    answer:
      'Onboarding includes employee onboarding and training for your admins and finance team. Travelers ask the Miraee assistant for a trip and pick from options already marked in or out of policy.',
  },
  {
    question: 'Do we have to change our corporate cards?',
    answer:
      'Keep the corporate cards you already use. You add them in payment settings during onboarding.',
  },
  {
    question: 'How are SAP Concur facts on this page checked?',
    answer:
      'Every Concur fact comes from concur.com and carries the date we read it. We re-check it every 30 days and update the date.',
  },
]
