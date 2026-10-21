export type PageContent = {
  /** Router path without the version prefix, e.g. '/how-it-works'. */
  path: string
  /** H1, verbatim from the page's hero. */
  title: string
  /** Hero lead, verbatim (the first paragraph under the H1; keep it to what V1 shows, max two sentences). */
  lead: string
  /** 3 or 4 key points, each a heading from the page (title) plus the one-sentence body under it if the page has one (body), verbatim. Pick the points that best carry the page's baseline message, in page order. */
  points: { title: string; body?: string }[]
  /** The hero's buttons, verbatim labels. kind: 'signup' opens the sign-up dialog, 'review' the spend review dialog, 'sales' links to /talk-to-sales, 'link' goes to `to`. */
  actions: { label: string; kind: 'signup' | 'review' | 'sales' | 'link'; to?: string }[]
  /** Verbatim from the page's meta.ts (title and description). */
  meta: { title: string; description: string }
}

const SIGNUP = { label: 'Sign up free', kind: 'signup' } as const
const REVIEW = { label: 'Get a spend review', kind: 'review' } as const
const HOW = { label: 'See how it works', kind: 'link', to: '/how-it-works' } as const

export const PAGES: PageContent[] = [
  {
    path: '/how-it-works',
    title: 'From booking to month-end, in six steps',
    lead: 'Miraee is business travel and expense software: a travel assistant for every employee, with the controls finance needs.',
    points: [
      {
        title: 'We set up your company with you',
        body: 'Onboarding is free. We set up your company, policy and people, train your admins and finance team, and add the corporate cards you already use.',
      },
      {
        title: 'Employees ask for a trip and pick an option in policy',
        body: 'Every flight and hotel comes back marked in or out of policy. The assistant suggests. Your approvers decide.',
      },
      {
        title: 'Approvers see only the exceptions',
        body: 'Trips inside policy go ahead. Anything out of policy goes to an approver.',
      },
      {
        title: 'Finance sees every trip, coded and budgeted',
        body: 'One dashboard with finance analytics and a full audit log of who booked what, and when.',
      },
    ],
    actions: [SIGNUP, REVIEW],
    meta: {
      title: 'How Miraee works | Travel booking to month-end',
      description:
        'Employees ask the Miraee assistant for a trip and choose flights and hotels inside policy. Finance sees every booking with its budget and GL code.',
    },
  },
  {
    path: '/spend-review',
    title: "Find out where last year's travel budget went.",
    lead: "Miraee is business travel and expense software. Send one booking report and we review last year's travel, trip by trip, from your own data.",
    points: [
      {
        title: 'Send one file you already have',
        body: 'A booking report from your travel agency, or an expense extract from your expense system. Add a corporate card feed if you like. We sign an NDA before you send anything.',
      },
      { title: 'Four findings from your own data' },
      {
        title: 'We show our work.',
        body: 'Every finding comes from the file you send, so your controller can check every line. Any savings figure is a dollar range, with the method and data period shown. The report is yours to keep.',
      },
      {
        title: 'Ready when you are',
        body: 'We agree timing with you when your file arrives. The review is optional, and you can sign up without one.',
      },
    ],
    actions: [{ label: 'Get a spend review', kind: 'review' }, SIGNUP],
    meta: {
      title: "Travel spend analysis of last year's trips | Miraee",
      description:
        "Want proof first? Send one booking report and get a trip-by-trip review of last year's travel from your own data. The report is yours to keep.",
    },
  },
  {
    path: '/finance',
    title: 'Travel and expense management for finance teams',
    lead: 'Miraee is business travel and expense software. Every trip arrives with its GL code and budget, ready for month-end.',
    points: [
      {
        title: 'Set policy, GL codes and budgets once',
        body: 'Miraee applies them to every booking. Options are marked in or out of policy, and only exceptions go to an approver.',
      },
      {
        title: 'The assistant suggests. Your approvers decide.',
        body: 'Most finance leaders want AI to recommend, with a person approving. Miraee works that way on every booking.',
      },
      {
        title: 'Receipts matched to card charges',
        body: 'Travelers upload receipts. Miraee matches each to its card charge, flags anything out of policy and tracks reimbursements.',
      },
      {
        title: 'One dashboard. A full audit log.',
        body: 'Every booking and change is recorded: who, what and when.',
      },
    ],
    actions: [SIGNUP, REVIEW],
    meta: {
      title: 'Travel and expense management for finance teams | Miraee',
      description:
        'Every trip arrives with its budget and GL code. A finance dashboard, an audit log and receipts matched to card charges. Keep the cards you already use.',
    },
  },
  {
    path: '/travel-managers',
    title: 'The corporate travel booking tool that runs your policy',
    lead: 'Miraee is business travel and expense software. Your policy runs on every booking, and approvals only reach you when something is out of policy.',
    points: [
      {
        title: 'Every option is checked against your policy',
        body: 'Upload your policy during onboarding. Every result is marked in or out of policy, so travelers book without checking a document.',
      },
      {
        title: 'You approve only the exceptions',
        body: 'Trips inside policy go ahead. You see only the bookings that need a decision.',
      },
      {
        title: 'An alert and new options when plans change',
        body: 'A delayed or canceled flight brings your traveler an alert and new options. They confirm one, and you see the change in the audit log.',
      },
      {
        title: 'Free onboarding, policy and people included',
        body: 'We set up your company, policy and people with you, and train your admins and finance team.',
      },
    ],
    actions: [SIGNUP, HOW],
    meta: {
      title: 'Corporate travel booking tool for travel managers | Miraee',
      description:
        'Set your travel policy once and it runs on every booking. Approvals reach you only when something is out of policy. Free onboarding for your team.',
    },
  },
  {
    path: '/pricing',
    title: 'Free to sign up and onboard, at any company size',
    lead: 'Miraee is business travel and expense software. We set up your company, your policy and your people with you, free.',
    points: [
      { title: "What's free" },
      {
        title: 'Same start for 300 people or 3,000',
        body: 'There is no headcount cap.',
      },
      { title: 'Booking terms' },
      {
        title: 'Want proof first?',
        body: "Ask for a spend review: last year's travel, reviewed trip by trip from one booking report. Optional, and on request.",
      },
    ],
    actions: [SIGNUP, HOW],
    meta: {
      title: 'Pricing | Free to sign up and onboard | Miraee',
      description:
        'Signing up is free. Onboarding is free: we set up your company, your travel policy and your people with you. The same is true at any company size.',
    },
  },
  {
    path: '/security',
    title: 'Security at Miraee',
    lead: 'Miraee is business travel and expense software. One approved travel tool for the whole company, with a security pack ready when your review starts.',
    points: [
      {
        title: 'Sign in with Google',
        body: "Your team signs in with their Google work accounts. Single sign-on is on our roadmap; ask and we'll share the date in writing.",
      },
      {
        title: 'The assistant suggests. Your approvers decide.',
        body: 'Anything out of policy goes to an approver. Every booking and change is in the audit log.',
      },
      { title: 'You choose what to share.' },
      { title: 'Your security review, in one pack' },
    ],
    actions: [
      { label: 'Request the security pack', kind: 'link', to: '#pack' },
      { label: 'Talk to sales', kind: 'sales' },
    ],
    meta: {
      title: 'Security at Miraee | Sign-in, your data, security pack',
      description:
        "How Miraee handles your company's travel data: Google sign-in, a data processing agreement and a completed security questionnaire, sent on request.",
    },
  },
  {
    path: '/company',
    title: 'Built by Tabhi, the company behind the Mondee travel marketplace',
    lead: 'Miraee is business travel and expense software, built by Tabhi, the company behind the Mondee travel marketplace.',
    points: [
      {
        title: 'Travel your finance team can see.',
        body: 'Your people book flights and hotels inside company policy. Finance sees every trip with its budget and GL code. When plans change, travelers get an alert and new options to confirm.',
      },
      { title: 'Global coverage from the Mondee travel marketplace' },
      { title: 'How we work' },
    ],
    actions: [SIGNUP],
    meta: {
      title: 'About Miraee | Built by Tabhi, behind the Mondee marketplace',
      description:
        'Miraee is business travel and expense software built by Tabhi, the company behind the Mondee travel marketplace, with global flight and hotel coverage.',
    },
  },
  {
    path: '/talk-to-sales',
    title: 'Talk to sales',
    lead: 'Miraee is business travel and expense software. Ask us about booking terms, onboarding, the spend review or the security pack.',
    points: [
      { title: 'Work email' },
      { title: 'Company name' },
      { title: 'What would you like to know?' },
    ],
    actions: [SIGNUP],
    meta: {
      title: 'Talk to sales | Miraee',
      description:
        'Ask the Miraee team about booking terms, onboarding, the spend review or the security pack.',
    },
  },
  {
    path: '/sign-up',
    title: 'Sign up free',
    lead: 'Miraee is business travel and expense software. Signing up and onboarding are free, at any company size.',
    points: [
      { title: 'Work email', body: 'We send your next steps here.' },
      { title: 'Company name' },
      { title: 'Your role' },
    ],
    actions: [{ label: 'Request my account', kind: 'signup' }],
    meta: {
      title: 'Sign up free | Miraee',
      description:
        'Sign up for Miraee business travel and expense software. Signing up and onboarding are free, at any company size.',
    },
  },
  {
    path: '/compare',
    title: 'Compare corporate travel management software',
    lead: 'For finance and travel leads at companies of 300 to 1,500 people. What to compare, what to ask every vendor (us included), and dated facts on the tools buyers shortlist most.',
    points: [
      { title: 'What should a company of 300 to 1,500 people compare?' },
      { title: 'Twelve questions to ask every vendor (including us)' },
      { title: 'Want proof before you choose?' },
    ],
    actions: [SIGNUP, { label: 'See the twelve questions', kind: 'link', to: '#tab-questions' }],
    meta: {
      title: 'Best corporate travel management software, compared | Miraee',
      description:
        'How to compare corporate travel management software for a company of 300 to 1,500 people: cost to start, policy controls, the finance view, changes.',
    },
  },
  {
    path: '/compare/navan',
    title: 'Navan alternatives: Miraee vs Navan',
    lead: 'Miraee is business travel and expense software. This page compares it with Navan on cost to start, policy, the finance view and changes. Every Navan fact is dated and sourced.',
    points: [
      { title: 'What does it cost to start?' },
      { title: 'How do travel policy and approvals work?' },
      { title: 'What does finance see?' },
    ],
    actions: [SIGNUP, REVIEW],
    meta: {
      title: 'Navan alternatives and competitors: Miraee vs Navan',
      description:
        'Compare Miraee and Navan on cost to start, policy controls, the finance view and changes, with every Navan fact dated. Plus other Navan alternatives.',
    },
  },
  {
    path: '/compare/perk',
    title: 'TravelPerk alternatives: Miraee vs Perk',
    lead: 'Miraee is business travel and expense software. This page compares it with Perk, formerly TravelPerk, on cost to start, the finance view and changes. Every Perk fact is dated.',
    points: [
      { title: 'What does it cost to start?' },
      { title: 'How does finance see each trip?' },
      { title: 'What happens when plans change?' },
    ],
    actions: [SIGNUP, REVIEW],
    meta: {
      title: 'TravelPerk alternatives: Miraee vs Perk compared',
      description:
        'Compare Miraee and Perk, formerly TravelPerk, on cost to start, the finance view of each trip and how changes are confirmed. Every Perk fact dated.',
    },
  },
  {
    path: '/compare/ramp',
    title: 'Miraee with Ramp: travel booking beside the card you keep',
    lead: 'Miraee is business travel and expense software. If your finance team runs Ramp cards, here is what Miraee adds for travel and how the two work together.',
    points: [
      { title: 'Can we use Miraee if we run Ramp?' },
      { title: 'What Miraee adds for travel' },
      { title: 'How the two work together' },
      { title: "Check last year's travel first" },
    ],
    actions: [SIGNUP, REVIEW],
    meta: {
      title: 'Ramp Travel with Miraee: travel booking beside your card',
      description:
        'Keep the Ramp card you already use and add travel booking with your policy on every trip, approvals only when needed and alerts when plans change.',
    },
  },
  {
    path: '/compare/sap-concur',
    title: 'SAP Concur alternatives: Miraee vs SAP Concur',
    lead: 'Miraee is business travel and expense software. Renewing SAP Concur? Here is how the two compare on getting started, policy, approvals and the finance view. Every Concur fact is dated.',
    points: [
      { title: 'What does it take to get started?' },
      { title: 'How do travel policy and approvals work?' },
      { title: 'What does finance see at month-end?' },
    ],
    actions: [SIGNUP, REVIEW],
    meta: {
      title: 'SAP Concur alternatives: Miraee vs SAP Concur',
      description:
        'Compare Miraee and SAP Concur on onboarding, travel policy, approvals and the finance view. See where each fits for a company of 300 to 1,500.',
    },
  },
  {
    path: '/resources',
    title: 'Guides for running business travel',
    lead: 'Practical guides for the travel leads and finance teams who run company travel. Each works with whatever tool you use.',
    points: [{ title: 'Start with the template' }, { title: 'Guides' }],
    actions: [
      { label: 'Get the template', kind: 'link', to: '/resources/business-travel-policy-template' },
      { label: 'Browse the guides', kind: 'link', to: '#guides' },
    ],
    meta: {
      title: 'Business travel resources and guides | Miraee',
      description:
        'Guides, a business travel policy template and checklists for finance and travel leads at growing companies. From Miraee.',
    },
  },
  {
    path: '/resources/business-travel-policy',
    title: 'How to write a travel policy people follow',
    lead: 'A business travel policy sets how employees book, what they can spend and who approves exceptions. This guide shows how to write one travelers follow, with a checklist you can copy.',
    points: [
      { title: 'What makes a travel policy work?' },
      { title: 'Why travelers work around a policy' },
      { title: 'How to write rules people can follow' },
      { title: 'How to roll out a new travel policy' },
    ],
    actions: [
      { label: 'Get the template', kind: 'link', to: '/resources/business-travel-policy-template' },
    ],
    meta: {
      title: 'Business travel policy: how to write one people follow',
      description:
        'How to write a business travel policy your people will follow: booking rules, approvals, hotel and flight limits, and how to roll it out. From Miraee.',
    },
  },
  {
    path: '/resources/business-travel-policy-template',
    title: 'Business travel policy template for growing companies',
    lead: 'A complete travel policy you can edit and adopt, with a one-page rollout checklist. Preview every section below, then download it as Word or PDF.',
    points: [
      { title: 'How to use this template' },
      { title: '2. How to book' },
      { title: '3. Approvals' },
      { title: '8. When plans change' },
    ],
    actions: [
      { label: 'Download the template', kind: 'link', to: '#download' },
      { label: 'Preview it below', kind: 'link', to: '#preview' },
    ],
    meta: {
      title: 'Business travel policy template (free download) | Miraee',
      description:
        'A business travel policy template for growing companies, with a one-page rollout checklist. Preview it here, then download.',
    },
  },
  {
    path: '/resources/corporate-travel-manager',
    title: "The part-time corporate travel manager's guide",
    lead: 'In many growing companies, the travel manager is an operations, office or people lead who runs travel on the side. This guide sets out the job in plain steps.',
    points: [
      { title: 'What does a corporate travel manager do?' },
      { title: 'Work with finance from day one' },
      { title: 'Keep approvals out of your inbox' },
      { title: 'When plans change' },
    ],
    actions: [
      { label: 'Get the template', kind: 'link', to: '/resources/business-travel-policy-template' },
    ],
    meta: {
      title: 'Corporate travel manager guide for part-time travel leads',
      description:
        "Running company travel on top of your day job? A corporate travel manager's guide to policy, approvals, bookings and changes, in one place.",
    },
  },
  {
    path: '/resources/travel-and-expense-policy',
    title: 'Travel and expense policy: what to include, with examples',
    lead: 'A travel and expense policy tells employees what the company pays for, how to claim it and when they are repaid. This guide lists what to include, with wording you can copy.',
    points: [
      { title: 'What should a travel and expense policy include?' },
      { title: 'Code every trip at the start' },
      { title: 'Receipts and reimbursement' },
      { title: 'How to review claims without slowing everyone down' },
    ],
    actions: [
      { label: 'Get the template', kind: 'link', to: '/resources/business-travel-policy-template' },
    ],
    meta: {
      title: 'Travel and expense policy: what to include, with examples',
      description:
        'What a travel and expense policy should include, with examples finance teams can copy: limits, receipts, reimbursements, approvals and GL codes.',
    },
  },
  {
    path: '/resources/travel-expense-report',
    title: 'Travel expense reports: a faster month-end close',
    lead: 'A travel expense report lists what an employee spent on a trip so the company can check, code and repay it. This guide covers what a good report holds and gives you a month-end checklist.',
    points: [
      { title: 'How do you close month-end faster on travel?' },
      { title: 'What a travel expense report should contain' },
      { title: 'Why travel slows month-end close' },
      { title: 'Travel month-end close checklist' },
    ],
    actions: [
      { label: 'Get the template', kind: 'link', to: '/resources/business-travel-policy-template' },
    ],
    meta: {
      title: 'Travel expense reports: close month-end with fewer chases',
      description:
        'How to close month-end on travel with fewer receipts to chase: codes at booking, receipts matched to card charges and a clear audit trail.',
    },
  },
  {
    path: '/resources/travel-policy-compliance',
    title: 'Travel policy compliance: make the right option the easy one',
    lead: 'Travel policy compliance is the share of trips booked the way your policy says. This guide shows how to measure it and raise it by making the in-policy option the easiest one.',
    points: [
      { title: 'How do you improve travel policy compliance?' },
      { title: 'Why travelers book outside the program' },
      { title: 'How to measure compliance' },
      { title: 'A 30-day plan' },
    ],
    actions: [
      { label: 'Get the template', kind: 'link', to: '/resources/business-travel-policy-template' },
    ],
    meta: {
      title: 'Travel policy compliance: make the right option easy',
      description:
        'Keep bookings inside travel policy by making the right option the easy one: clear rules, in-policy options, and approvals only when needed.',
    },
  },
  {
    path: '/lp/cfo',
    title: 'See where your travel money goes',
    lead: 'Miraee is business travel and expense software. Every trip arrives with its budget and GL code. Free to sign up and onboard, at any company size.',
    points: [
      { title: 'Every booking in policy, budgeted and coded' },
      { title: "Want proof first? Review last year's travel." },
      {
        title: 'Free to sign up and onboard, at any company size.',
        body: 'We set up your company, policy and people with you.',
      },
    ],
    actions: [SIGNUP, REVIEW],
    meta: {
      title: 'Miraee for finance | See where travel money goes',
      description:
        "See every trip with its budget and GL code. Want proof first? Get a review of last year's travel from one booking report. Free to sign up.",
    },
  },
  {
    path: '/lp/navan-alternative',
    title: "A Navan alternative that's free to start at any size",
    lead: "Miraee is business travel and expense software. Sign-up and onboarding are free at any company size, and you can review last year's travel first.",
    points: [
      { title: 'What you get with Miraee' },
      { title: 'Check our work on your own data' },
      { title: 'Where each fits' },
    ],
    actions: [SIGNUP, REVIEW],
    meta: {
      title: 'Navan alternative, free to start at any size | Miraee',
      description:
        'Compare Miraee with Navan on cost to start, policy controls and the finance view. Miraee sign-up and onboarding are free at every company size.',
    },
  },
  {
    path: '/lp/concur-alternative',
    title: 'An SAP Concur alternative with free onboarding',
    lead: 'Miraee is business travel and expense software. Sign-up and onboarding are free at any size, and we train your admins and finance team.',
    points: [
      { title: 'What you get with Miraee' },
      { title: 'Start from your Concur expense extract' },
      { title: 'Where each fits' },
    ],
    actions: [SIGNUP, REVIEW],
    meta: {
      title: 'SAP Concur alternative with free onboarding | Miraee',
      description:
        'Free onboarding with admin and finance training, policy on every booking and every trip coded for finance. See how Miraee compares with SAP Concur.',
    },
  },
]
