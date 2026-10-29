/**
 * Miraee site copy for V4 and V5, taken from "Miraee Website: Competitor Review, Sitemap and Page Copy" (Oct 26, 2026).
 * One source for both versions: the design differs, the words do not. Footnote numbers match FOOTNOTES below.
 */

export type NavLink = { label: string; to: string }
export type Point = { title: string; body: string }

/** Top nav: Sign up free is the one header button. Talk to sales lives in the footer and on the security page. */
export const NAV: NavLink[] = [
  { label: 'Product', to: '/how-it-works' },
  { label: 'Spend review', to: '/spend-review' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Resources', to: '/resources' },
  { label: 'About Tabhi', to: '/company' },
]

export const FOOTER_GROUPS: { title: string; links: NavLink[] }[] = [
  {
    title: 'Product',
    links: [
      { label: 'How it works', to: '/how-it-works' },
      { label: 'When plans change', to: '/when-plans-change' },
      { label: 'For finance', to: '/finance' },
      { label: 'For travel managers', to: '/travel-managers' },
      { label: 'For travelers', to: '/travelers' },
      { label: 'Security', to: '/security' },
    ],
  },
  {
    title: 'Spend review',
    links: [
      { label: 'Get a spend review', to: '/spend-review' },
      { label: 'How the review works', to: '/spend-review/method' },
      { label: 'Pricing', to: '/pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Tabhi', to: '/company' },
      { label: 'Talk to sales', to: '/talk-to-sales' },
      { label: 'Guides', to: '/resources' },
      { label: 'Log in', to: '/log-in' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', to: '/privacy' },
      { label: 'Terms', to: '/terms' },
    ],
  },
]

export const BUTTONS = {
  signup: 'Sign up free',
  review: 'Get a spend review',
  how: 'See how it works',
}

export const FOOTNOTES = [
  'Tabhi group figure, tabhi.ai, September 2026.',
  'Mondee network figure, April 2025.',
  'GBTA, Business Travel Innovation Research, 2026.',
  'GBTA, Business Travel Index forecast, August 2026. Global figures.',
  'GBTA survey of travel buyers, March 2026.',
]


/* ---------------------------------- Home ---------------------------------- */

export const HOME = {
  hero: {
    eyebrow: 'Business travel and expense software',
    headline: 'See where your travel money goes, and where you can spend less.',
    sub: 'Your people book flights and hotels inside company policy. Finance sees every trip and the budget it belongs to.',
    note: 'Free to sign up and onboard, at any company size. Keep the corporate cards you already use.',
    trust: 'Part of Tabhi, the travel group behind Mondee and Abhee.',
  },
  proof: {
    line: 'Your travelers book on the Mondee travel marketplace.',
    stats: [
      { value: '500+', label: 'Airlines connected', note: 1 },
      { value: '1M+', label: 'Hotels and vacation rentals', note: 2 },
      { value: 'Global', label: 'Flight and hotel coverage', note: 0 },
    ],
  },
  how: {
    headline: 'How Miraee works',
    sub: 'A travel assistant for every employee, with the controls finance needs.',
    steps: [
      {
        title: 'Set your rules',
        body: 'Hotel limits, cabin class, fare caps and who approves. We set it up with you.',
      },
      {
        title: 'Your people book',
        body: 'They ask the Miraee assistant for a trip and pick from options inside your rules. Anything outside your rules goes to an approver.',
      },
      {
        title: 'Finance sees every trip',
        body: 'Each booking lands in the right budget, ready for month-end.',
      },
    ] as Point[],
    link: 'See how it works',
  },
  spending: {
    headline: 'Every trip and every dollar, in one place.',
    body: 'Travel spend usually sits across agency statements, card exports and expense tools. Miraee brings every booking into one view.',
    points: [
      'Each trip with its cost, its traveler and who approved it.',
      'Every booking in the right budget, ready for month-end.',
      'Receipts matched to card charges and checked against policy.',
      'A full record of who booked, approved and changed what.',
    ],
    stat: { value: '12%', text: 'of travel programs have their data in one place.', note: 3 },
    link: 'See the finance view',
  },
  review: {
    context: 'Business travel spending is forecast to rise 7.2% in 2026, while the number of trips rises 1.3%.',
    contextNote: 4,
    takeaway: 'Each trip is costing more.',
    headline: "Want proof first? Review last year's travel.",
    body: 'Send one booking report you already have. We review every trip and show you:',
    shows: [
      'Trips booked outside your travel program',
      'Spend outside your policy',
      'What booking late cost you, on your own routes',
      'Tickets you paid for and never used',
    ],
    note: 'Every finding comes from your own file. Any savings figure is a range, with the method beside it. The report is yours to keep.',
    button: 'Get a spend review',
    small: 'Optional. You can sign up without one.',
    sample: {
      label: 'Review report',
      rows: [
        { finding: 'Bookings outside your travel program', trips: '214', range: '$150K to $190K' },
        { finding: 'Spend outside policy', trips: '131', range: '$70K to $95K' },
        { finding: 'The cost of booking late', trips: '388', range: '$50K to $65K' },
        { finding: 'Unused or expired tickets', trips: '47', range: '$18K to $24K' },
      ],
    },
  },
  plans: {
    headline: 'When plans change, your traveler has new options.',
    body: 'If a flight is delayed or canceled, your traveler gets an alert and new options inside policy to confirm. Your travel lead sees the change.',
    stat: { value: '89%', text: 'of travel buyers want help rebooking when plans change.', note: 5 },
    link: 'See what happens',
  },
  group: {
    headline: 'Backed by a global travel group.',
    body: 'Miraee is built by Tabhi, the travel group behind the Mondee marketplace and the Abhee experiences app. Your company books on supply the group already runs around the world.',
    brands: [
      { name: 'Tabhi', text: 'The travel group that builds Miraee, Mondee and Abhee.' },
      { name: 'Mondee', text: 'The travel marketplace your people book flights and hotels on.' },
      { name: 'Abhee', text: "The group's app for local experiences." },
    ],
    link: 'About Tabhi',
  },
  roles: {
    headline: 'Built for everyone who touches a trip.',
    cards: [
      {
        title: 'Finance',
        body: 'See every trip and its budget, with receipts matched to card charges.',
        link: 'For finance',
        to: '/finance',
      },
      {
        title: 'Travel and operations leads',
        body: 'Your policy runs on every booking. Approvals reach you only when something is out of policy.',
        link: 'For travel managers',
        to: '/travel-managers',
      },
      {
        title: 'Travelers and assistants',
        body: 'Ask for a trip, or book for your team, and pick from options inside policy.',
        link: 'For travelers',
        to: '/travelers',
      },
    ],
  },
  security: {
    headline: 'One approved travel tool for the whole company.',
    body: 'Sign in with Google. Every booking, approval and change is recorded. Our security pack is ready before your IT team asks.',
    button: 'Read about security',
    link: 'Talk to sales',
  },
  faq: [
    {
      q: 'What does it cost to start?',
      a: 'Sign-up and onboarding are free at any company size, including policy setup and training for your admins and finance team.',
    },
    {
      q: 'What does Miraee replace?',
      a: "Your booking tool and your agency's everyday flight and hotel bookings. You keep your corporate cards.",
    },
    {
      q: 'Where do your flights and hotels come from?',
      a: 'The Mondee travel marketplace, part of the Tabhi travel group, with global flight and hotel coverage.',
    },
    {
      q: 'Does the assistant book on its own?',
      a: 'It suggests options inside your policy. Your people choose, and anything outside policy goes to an approver.',
    },
    {
      q: 'Do we keep our corporate cards?',
      a: 'Yes. Add them during onboarding, and receipts match to card charges.',
    },
    {
      q: 'Do we need a spend review first?',
      a: 'It is optional, for teams who want to see their numbers before they switch.',
    },
    {
      q: 'What happens when a flight is delayed or canceled?',
      a: 'Your traveler gets an alert and new options inside policy to confirm.',
    },
  ],
  closing: { headline: 'See where your travel money goes.' },
}

/* -------------------------------- Inner pages -------------------------------- */

export type InnerPage = {
  path: string
  title: string
  h1: string
  sub: string
  /** Eyebrow above the headline (the page name). */
  eyebrow: string
  sections: Point[]
  /** Heading above the sections list, where the page uses one. */
  sectionsLabel?: string
  buttons?: { label: string; to: string; kind?: 'primary' | 'secondary' | 'link' }[]
  /** Which motion scene art the page uses (each version draws its own). */
  art: 'rules' | 'alert' | 'ledger' | 'policy' | 'phone' | 'shield' | 'report' | 'method' | 'price' | 'guides' | 'group'
  /** Closing CTA shown at the bottom (default true). */
  closing?: boolean
}

export const PAGES: InnerPage[] = [
  {
    path: '/how-it-works',
    title: 'How it works',
    eyebrow: 'How it works',
    h1: 'From the first search to month-end, in one place.',
    sub: 'Set your rules once. Miraee applies them to every trip.',
    art: 'rules',
    sections: [
      { title: 'Set your rules', body: 'Hotel limits by city, cabin class by flight length, fare caps and who approves what.' },
      { title: 'Book with the assistant', body: 'Travelers tell the Miraee assistant where and when. Every option shows whether it is in policy.' },
      { title: 'Approve in one tap', body: 'Anything outside policy goes to the right approver with the cost and the reason attached.' },
      { title: 'See every change', body: 'Delays, changes and cancellations appear in the trip record as they happen.' },
      { title: 'Close the month', body: 'Each trip lands in the right budget, with receipts matched to card charges.' },
    ],
  },
  {
    path: '/when-plans-change',
    title: 'When plans change',
    eyebrow: 'When plans change',
    h1: 'When plans change, your traveler has new options.',
    sub: 'Alerts and guided rebooking, inside your policy.',
    art: 'alert',
    sections: [
      { title: 'The alert', body: 'Your traveler hears the moment a flight is delayed or canceled.' },
      { title: 'New options to confirm', body: 'Flights inside policy, ready to confirm in one tap.' },
      { title: 'The fare difference, upfront', body: 'Any change in cost shows before the traveler confirms.' },
      { title: 'Everyone informed', body: 'The travel lead and finance see the change in the trip record.' },
    ],
  },
  {
    path: '/finance',
    title: 'For finance',
    eyebrow: 'For finance',
    h1: 'See where your travel money goes.',
    sub: 'Every trip, its cost and its budget, before month-end arrives.',
    art: 'ledger',
    sections: [
      { title: 'One view of spend', body: 'By trip, team and budget, in one finance view.' },
      { title: 'The right budget, every time', body: 'Budgets and account codes are set once and applied at booking.' },
      { title: 'Receipts matched', body: 'Card charges match to bookings and are checked against policy.' },
      { title: 'A full record', body: 'Who booked, who approved and what changed, with times.' },
      { title: 'Your cards stay', body: 'Keep the corporate cards you already use.' },
    ],
  },
  {
    path: '/travel-managers',
    title: 'For travel managers',
    eyebrow: 'For travel managers',
    h1: 'Your policy, on every booking.',
    sub: 'Approvals reach you only when something is out of policy.',
    art: 'policy',
    sections: [
      { title: 'One policy for everyone', body: 'Set it once and adjust it by team or role.' },
      { title: 'Fewer approval emails', body: 'Out-of-policy requests arrive with the cost and the reason.' },
      { title: 'Help when plans change', body: 'Travelers get alerts and new options to confirm, and you see every change.' },
      { title: 'Set up with you', body: 'We load your policy and your people, and train your admins.' },
    ],
  },
  {
    path: '/travelers',
    title: 'For travelers',
    eyebrow: 'For travelers',
    h1: 'Ask for a trip. Pick an option. Go.',
    sub: "Every option already fits your company's rules.",
    art: 'phone',
    sections: [
      { title: 'Ask the assistant', body: 'Tell it your city and dates, and pick from flights and hotels inside policy.' },
      { title: 'Book for your team', body: 'Assistants book on behalf of anyone they support, in a few steps.' },
      { title: 'New options on the road', body: 'An alert and new options when a flight changes.' },
      { title: 'Receipts handled', body: 'Card charges matched to receipts, and reimbursements tracked.' },
    ],
  },
  {
    path: '/security',
    title: 'Security',
    eyebrow: 'Security',
    h1: 'One approved travel tool, with a security pack ready before you ask.',
    sub: 'Sign-in, a full record and the paperwork your IT team asks for.',
    art: 'shield',
    sections: [
      { title: 'Sign-in', body: 'Google sign-in today.' },
      { title: 'A full record', body: 'Every booking, approval and change, with who made it and when.' },
      {
        title: 'The security pack',
        body: 'A completed security questionnaire, a data processing agreement and a penetration test summary.',
      },
      { title: 'On our roadmap', body: 'Single sign-on and user provisioning, with dates.' },
    ],
    buttons: [
      { label: 'Request the security pack', to: '/security#pack', kind: 'primary' },
      { label: 'Talk to sales', to: '/talk-to-sales', kind: 'secondary' },
    ],
  },
  {
    path: '/spend-review',
    title: 'Spend review',
    eyebrow: 'Spend review',
    h1: "Want proof first? Review last year's travel.",
    sub: 'Send one booking report. See where your travel money went, trip by trip.',
    art: 'report',
    sections: [
      {
        title: 'What you send',
        body: 'One export from your travel agency or expense system. A corporate card feed makes the review more complete.',
      },
      { title: 'What you get', body: 'Four findings, each with trip counts, totals and a savings range.' },
      { title: 'How it is built', body: 'Only from your own data, with the method and data period beside every number.' },
      {
        title: 'Yours to keep',
        body: 'We walk you through the report on a call. Keep it, share it or use it to plan your move.',
      },
    ],
    buttons: [{ label: 'How the review works', to: '/spend-review/method', kind: 'link' }],
    closing: false,
  },
  {
    path: '/spend-review/method',
    title: 'How the review works',
    eyebrow: 'The method',
    h1: 'How the spend review works.',
    sub: 'Every finding comes from your file, and every method is on this page.',
    art: 'method',
    sections: [
      { title: 'Trips outside your program', body: 'Bookings in your file made outside your agency or tool.' },
      { title: 'Spend outside policy', body: 'Trips that broke your own policy, measured against the rules you send us.' },
      {
        title: 'The cost of booking late',
        body: 'Your own fares on the same routes, booked early compared with booked late.',
      },
      { title: 'Unused tickets', body: 'Tickets in your file that were never flown or have expired.' },
      {
        title: 'Savings ranges',
        body: "Every range shows its method and the data period it covers. Last year's trips are compared with your own fares only.",
      },
    ],
  },
  {
    path: '/pricing',
    title: 'Pricing',
    eyebrow: 'Pricing',
    h1: 'What it costs to start.',
    sub: 'Signing up is free. Onboarding is free: we set up your company, your travel policy and your people with you. The same is true for a company of 300 or 3,000.',
    art: 'price',
    sectionsLabel: 'What is included',
    sections: [
      { title: 'Company setup', body: 'We set up your company with you.' },
      { title: 'Policy setup', body: 'Your travel policy, set up with you.' },
      { title: 'Employee onboarding', body: 'Your people, set up with you.' },
      { title: 'Payment settings', body: 'The cards you already use, added during onboarding.' },
      { title: 'Admin and finance training', body: 'Training for your admins and finance team.' },
      { title: 'Booking terms', body: 'Ask us about booking terms for your travel volume.' },
    ],
    buttons: [
      { label: 'Sign up free', to: '/sign-up', kind: 'primary' },
      { label: 'Talk to sales', to: '/talk-to-sales', kind: 'link' },
    ],
  },
  {
    path: '/resources',
    title: 'Guides',
    eyebrow: 'Guides',
    h1: 'Guides for running business travel.',
    sub: 'Practical reading for finance and travel leads.',
    art: 'guides',
    sections: [
      { title: 'Writing a travel policy', body: 'Read the guide' },
      { title: 'Cutting the cost of late bookings', body: 'Read the guide' },
      { title: 'Handling unused tickets', body: 'Read the guide' },
      { title: 'Choosing a travel tool', body: 'Read the guide' },
    ],
  },
  {
    path: '/resources/business-travel-policy-template',
    title: 'Travel policy template',
    eyebrow: 'Template',
    h1: 'A travel policy template your team can edit and use today.',
    sub: 'Start from a clear policy instead of a blank page.',
    art: 'policy',
    sections: [
      { title: 'What the template covers', body: 'A template your team can edit and use today.' },
    ],
    buttons: [{ label: 'Download the template', to: '/resources/business-travel-policy-template#download', kind: 'primary' }],
    closing: false,
  },
  {
    path: '/company',
    title: 'About Tabhi',
    eyebrow: 'About Tabhi',
    h1: 'Part of Tabhi, a global travel group.',
    sub: "Tabhi builds travel products for companies, travel sellers and travelers. Miraee brings the group's supply and experience to business travel.",
    art: 'group',
    sections: [
      {
        title: 'Mondee',
        body: 'The travel marketplace connecting to more than 500 airlines and over 1 million hotels and vacation rentals.',
      },
      { title: 'Abhee', body: "The group's app for local experiences." },
      { title: 'Miraee', body: 'Business travel and expense software for growing companies.' },
    ],
  },
]

/** Pages that are a form. */
export const FORM_PAGES = {
  talk: {
    path: '/talk-to-sales',
    h1: 'Talk to our team.',
    sub: 'Get a walkthrough, a spend review or answers on booking terms.',
    fields: ['Name', 'Work email', 'Company', 'Headcount', 'What you want to discuss'],
    button: 'Book a call',
  },
  signup: {
    path: '/sign-up',
    h1: 'Set up Miraee for your company.',
    sub: 'Free to sign up and onboard, at any company size.',
    fields: ['Name', 'Work email', 'Company', 'Headcount'],
    button: 'Create my account',
  },
  review: {
    fields: ['Name', 'Work email', 'Company', 'Headcount', 'Current booking tool', 'File upload'],
    button: 'Get my spend review',
  },
  login: {
    path: '/log-in',
    h1: 'Log in to Miraee.',
    sub: 'Sign in with Google, or with your work email.',
  },
}

export const LEGAL = {
  privacy: { path: '/privacy', title: 'Privacy', body: 'Privacy policy text goes here.' },
  terms: { path: '/terms', title: 'Terms', body: 'Terms of use text goes here.' },
}
