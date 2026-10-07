import { Coins, Receipt, RefreshCw, ShieldCheck, type LucideIcon } from 'lucide-react'

/** The four things that decide most evaluations (also the rows of the hero's "what to compare" card). */
export type Criterion = {
  id: string
  icon: LucideIcon
  title: string
  summary: string
  body: string
  /** A sourced figure shown under the text. */
  stat?: { text: string; source: { id: string; label: string } }
}

export const CRITERIA: Criterion[] = [
  {
    id: 'cost',
    icon: Coins,
    title: 'Cost to start at your size',
    summary: 'What sign-up and onboarding cost at your headcount',
    body: "Many tools have a free plan, and the details differ. Some free plans stop at a headcount. Some charge a fee on each booking. Some move to a quote as you grow. Check the vendor's own pricing page, note the date, and ask what changes when your headcount grows.",
  },
  {
    id: 'policy',
    icon: ShieldCheck,
    title: 'Policy on every booking',
    summary: 'Whether your policy runs on every search',
    body: 'A travel policy works when travelers see it in the options, and approvers only hear about the exceptions. Ask to see a search where one option is out of policy, and follow it through to the approver.',
  },
  {
    id: 'finance',
    icon: Receipt,
    title: 'What finance sees',
    summary: 'Budget and GL code on every trip',
    body: 'Controllers want each trip with its budget and GL code, receipts matched to card charges, and an audit log of who booked what, and when. Ask to see a month of trips in the finance view, not a slide.',
    stat: {
      text: 'Only 12% of travel programs have their data in one place.',
      source: { id: 'src-1', label: 'Source 1' },
    },
  },
  {
    id: 'changes',
    icon: RefreshCw,
    title: 'When plans change',
    summary: 'What the traveler sees when a flight is canceled',
    body: 'A delayed or canceled flight is the moment travelers judge the tool. Ask what the traveler sees first, who confirms the new option, and where the change is recorded.',
    stat: {
      text: '89% of travel buyers want help rebooking when plans change.',
      source: { id: 'src-2', label: 'Source 2' },
    },
  },
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
    offer: 'Business plan free for companies up to 300 employees; Enterprise priced by quote',
    source: 'navan.com/pricing',
  },
  { name: 'SAP Concur', offer: 'Pricing on request', source: 'concur.com' },
  {
    name: 'Perk (formerly TravelPerk)',
    offer: 'Travel Starter at $0 a month plus 5% per booking, minimum $2 and maximum $30',
    source: 'perk.com/pricing',
  },
  {
    name: 'Miraee',
    offer: 'Sign-up and onboarding free at any company size',
    source: 'miraee.ai/pricing',
    isUs: true,
  },
]

export type Comparison = { to: string; title: string; description: string }

export const COMPARISONS: Comparison[] = [
  {
    to: '/compare/navan',
    title: 'Navan alternatives',
    description:
      'Miraee vs Navan on cost to start, policy controls, the finance view and changes. Plus other Navan alternatives.',
  },
  {
    to: '/compare/sap-concur',
    title: 'SAP Concur alternatives',
    description: 'Miraee vs SAP Concur on onboarding, travel policy, approvals and month-end.',
  },
  {
    to: '/compare/perk',
    title: 'TravelPerk alternatives',
    description:
      'Miraee vs Perk, formerly TravelPerk, on cost to start, the finance view and how changes are confirmed.',
  },
  {
    to: '/compare/ramp',
    title: 'Ramp Travel with Miraee',
    description:
      'Keep the Ramp card you use and add travel depth: policy on every booking and new options when plans change.',
  },
]
