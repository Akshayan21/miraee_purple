import { Coins, Receipt, RefreshCw, ShieldCheck, type LucideIcon } from 'lucide-react'

/** The four things that decide most evaluations (also the rows of the hero's "what to compare" card). */
export type Criterion = {
  id: string
  icon: LucideIcon
  title: string
  summary: string
  body: string
  /** A figure shown under the text. */
  stat?: { text: string }
}

export const CRITERIA: Criterion[] = [
  {
    id: 'cost',
    icon: Coins,
    title: 'Cost to start at your size',
    summary: 'What sign-up and onboarding cost at your headcount',
    body: 'Free plans vary. Some cap headcount, some charge per booking. Ask what changes as you grow.',
  },
  {
    id: 'policy',
    icon: ShieldCheck,
    title: 'Policy on every booking',
    summary: 'Whether your policy runs on every search',
    body: 'Travelers should see policy in their options. Approvers should only see exceptions. Ask for a demo of one out-of-policy booking.',
  },
  {
    id: 'finance',
    icon: Receipt,
    title: 'What finance sees',
    summary: 'Budget and GL codes on every trip',
    body: 'Budget and GL code on every trip, receipts matched to card charges, and a full audit log. Ask to see a real month, not a slide.',
    stat: {
      text: 'Only 12% of travel programs have their data in one place.',
    },
  },
  {
    id: 'changes',
    icon: RefreshCw,
    title: 'When plans change',
    summary: 'What the traveler needs when a flight is canceled',
    body: 'This is when travelers judge the tool. Ask what they see first and who confirms the new option.',
    stat: {
      text: '89% of travel buyers want help rebooking when plans change.',
    },
  },
]

/** What Miraee includes, one line per topic (replaces the old "Our answers" paragraph). */
export const INCLUSIONS: { label: string; text: string }[] = [
  { label: 'Cost to start', text: 'Free sign-up and onboarding at any company size' },
  { label: 'Setup', text: 'We set up your company, travel policy and people with you' },
  { label: 'Policy', text: 'Every option is marked in or out of policy' },
  { label: 'Approvals', text: 'Only out-of-policy bookings need approval' },
  { label: 'Finance view', text: 'Every trip carries its budget and GL code' },
  { label: 'Cards', text: 'You keep your existing cards' },
  { label: 'When plans change', text: 'Travelers get an alert and new options to confirm' },
  {
    label: 'Proof',
    text: "A spend review of last year's travel, with savings as a dollar range and the method shown",
  },
  { label: 'Security', text: 'Security pack available at any stage' },
]

export type Question = { n: number; question: string; why: string }
export type QuestionGroup = { id: string; label: string; questions: Question[] }

export const QUESTION_GROUPS: QuestionGroup[] = [
  {
    id: 'cost',
    label: 'Cost and setup',
    questions: [
      {
        n: 1,
        question: 'What does it cost to sign up and onboard a company of our size?',
        why: 'Entry offers often depend on headcount',
      },
      {
        n: 2,
        question: 'What changes as our headcount grows?',
        why: 'A plan that fits today should still fit next year',
      },
      {
        n: 3,
        question: 'Who sets up our company, policy and people, and is that included?',
        why: 'Onboarding decides whether people use the tool',
      },
    ],
  },
  {
    id: 'policy',
    label: 'Policy and approvals',
    questions: [
      {
        n: 4,
        question: 'Can you show an out-of-policy option reaching an approver?',
        why: 'Policy is only real if it shows up in the search',
      },
      {
        n: 5,
        question: 'How many approval requests would our approvers see in a typical week?',
        why: 'Approvals for trips already in policy waste time',
      },
      {
        n: 6,
        question: 'Can an assistant or office admin book on behalf of others?',
        why: 'Many trips are booked by someone else',
      },
    ],
  },
  {
    id: 'finance',
    label: 'Finance view',
    questions: [
      {
        n: 7,
        question: 'Does every trip carry its budget and GL code?',
        why: 'Coding at booking is what shortens month-end',
      },
      {
        n: 8,
        question: 'How are receipts matched to card charges?',
        why: 'Receipt chasing is where month-end stalls',
      },
      {
        n: 9,
        question: 'Do we keep our corporate cards?',
        why: 'Most finance teams will not switch cards for travel',
      },
    ],
  },
  {
    id: 'proof',
    label: 'Changes and proof',
    questions: [
      {
        n: 10,
        question:
          'When a flight is canceled, what does the traveler see, and who confirms the change?',
        why: 'Changes are where support and trust are tested',
      },
      {
        n: 11,
        question: 'Is any savings figure measured on our data, with the method shown?',
        why: 'A percentage from other customers is hard to check',
      },
      {
        n: 12,
        question: 'What is in your security pack, and what is on your roadmap, with dates?',
        why: 'IT review goes faster with documents up front',
      },
    ],
  },
]

export type Vendor = { name: string; offer: string; source: string; isUs?: boolean }

export const VENDORS: Vendor[] = [
  {
    name: 'Navan',
    offer: 'Free Business plan for up to 300 employees. Enterprise by quote.',
    source: 'navan.com/pricing',
  },
  { name: 'SAP Concur', offer: 'Pricing on request.', source: 'concur.com' },
  {
    name: 'Perk (formerly TravelPerk)',
    offer: '$0 a month plus 5% per booking, $2 minimum, $30 maximum.',
    source: 'perk.com/pricing',
  },
  {
    name: 'Miraee',
    offer: 'Free sign-up and onboarding at any company size.',
    source: 'miraee.ai/pricing',
    isUs: true,
  },
]

export type Comparison = { to: string; title: string; description: string }

export const COMPARISONS: Comparison[] = [
  {
    to: '/compare/navan',
    title: 'Navan alternatives',
    description: 'Cost to start, policy controls, finance view and changes.',
  },
  {
    to: '/compare/sap-concur',
    title: 'SAP Concur alternatives',
    description: 'Onboarding, travel policy, approvals and month-end.',
  },
  {
    to: '/compare/perk',
    title: 'Perk (formerly TravelPerk) alternatives',
    description: 'Cost to start, finance view and how changes are confirmed.',
  },
  {
    to: '/compare/ramp',
    title: 'Ramp Travel with Miraee',
    description:
      'Keep your Ramp card. Add policy on every booking and new options when plans change.',
  },
]
