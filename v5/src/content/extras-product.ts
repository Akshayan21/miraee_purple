import type { Block } from './extras-types'

/** /how-it-works, /when-plans-change, /finance, /travel-managers, /travelers */
export const EXTRAS_PRODUCT: Record<string, Block[]> = {
  '/how-it-works': [
    {
      kind: 'steps',
      eyebrow: 'In more detail',
      heading: 'What happens at each step.',
      items: [
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
          title: 'Receipts match to card charges',
          body: 'Upload a receipt. Miraee matches it to the card charge, checks it against policy and tracks reimbursements.',
        },
        {
          title: 'Finance sees every trip, coded and budgeted',
          body: 'One dashboard with finance analytics and a full audit log of who booked what, and when.',
        },
      ],
    },
    {
      kind: 'table',
      eyebrow: 'A look inside',
      heading: 'An approval, as your approver sees it.',
      caption: 'From the product view',
      columns: ['Trip', 'Hotel rate', 'Policy limit', 'Status'],
      rows: [
        [
          'Sales kickoff, Denver. Hotel, 3 nights',
          '$289 a night',
          '$250 a night',
          'Needs approval',
        ],
      ],
      note: '',
    },
    {
      kind: 'prose',
      eyebrow: 'Coverage',
      heading: 'Global flight and hotel coverage.',
      paragraphs: [
        'Booking for someone else? Pick their name and book in a few steps. Flights and hotels come from the Mondee travel marketplace.',
        'Miraee replaces your booking tool and your agency’s routine flight and hotel bookings. You keep your corporate cards.',
      ],
    },
    {
      kind: 'links',
      heading: 'Go further.',
      items: [
        {
          title: 'When plans change',
          body: 'What your traveler sees when a flight is delayed or canceled.',
          to: '/when-plans-change',
        },
        {
          title: 'For finance',
          body: 'The finance view, receipts and the audit log.',
          to: '/finance',
        },
        { title: 'Pricing', body: 'What is included when you start.', to: '/pricing' },
      ],
    },
  ],

  '/when-plans-change': [
    {
      kind: 'steps',
      eyebrow: 'What happens',
      heading: 'From delay to a confirmed new flight.',
      items: [
        {
          title: 'The alert',
          body: 'When a flight is delayed or canceled, your traveler gets an alert with the new situation.',
        },
        {
          title: 'Two new options',
          body: 'Each option is marked in policy and shows its fare. Tap one to confirm.',
        },
        {
          title: 'The change is logged',
          body: 'Your travel lead sees the change in the audit log, and finance sees it in the trip record.',
        },
      ],
    },
    {
      kind: 'table',
      eyebrow: 'A look inside',
      heading: 'The options a traveler might see.',
      caption: 'Your 6:40 a.m. flight to Chicago is delayed.',
      columns: ['Departs', 'Route', 'Fare', 'Policy'],
      rows: [
        ['8:15 a.m.', 'AUS to ORD, nonstop', 'Same fare', 'In policy'],
        ['9:50 a.m.', 'AUS to ORD, nonstop', 'Same fare', 'In policy'],
      ],
      note: '',
    },
    {
      kind: 'prose',
      heading: 'For travel leads.',
      paragraphs: [
        'A delayed or canceled flight brings your traveler an alert and new options. They confirm one, and you see the change in the audit log.',
      ],
    },
    {
      kind: 'links',
      heading: 'Related pages.',
      items: [
        {
          title: 'For travel managers',
          body: 'Your policy on every booking.',
          to: '/travel-managers',
        },
        { title: 'For travelers', body: 'Ask for a trip, pick an option, go.', to: '/travelers' },
      ],
    },
  ],

  '/finance': [
    {
      kind: 'table',
      eyebrow: 'A look inside',
      heading: 'Budgets, set once.',
      caption: 'Applied to every booking.',
      columns: ['Team', 'Budget a trip'],
      rows: [
        ['Sales travel', '$2,000.00'],
        ['Client services', '$1,500.00'],
        ['Training and events', '$1,200.00'],
      ],
      note: '',
    },
    {
      kind: 'prose',
      heading: 'Set policy and budgets once.',
      paragraphs: [
        'Miraee applies them to every booking. Options are marked in or out of policy, and only exceptions go to an approver.',
        'Most finance leaders want AI to recommend, with a person approving. Miraee works that way on every booking.',
      ],
    },
    {
      kind: 'table',
      eyebrow: 'The audit log',
      heading: 'One dashboard. A full audit log.',
      caption: 'Every booking and change is recorded: who, what and when.',
      columns: ['Event'],
      rows: [
        ['Booked. Client visit, Chicago'],
        ['Approved. Denver hotel'],
        ['Changed. Chicago flight to 8:15 a.m.'],
        ['Receipt matched. Chicago hotel'],
      ],
      note: '',
    },
    {
      kind: 'faq',
      heading: 'Finance questions.',
      items: [
        {
          q: 'What does onboarding include?',
          a: 'Company and travel policy setup, employee onboarding, payment settings, and training for your admins and finance team.',
        },
        { q: 'Do we have to change cards?', a: 'You keep the corporate cards you already use.' },
        {
          q: 'Want proof first?',
          a: 'Send one booking report. We review last year’s travel, trip by trip. Any savings figure is a dollar range, with the method shown. See the spend review page to start.',
        },
      ],
    },
  ],

  '/travel-managers': [
    {
      kind: 'cards',
      eyebrow: 'In more detail',
      heading: 'Policy, approvals and rollout.',
      items: [
        {
          title: 'Every option is checked against your policy',
          body: 'Upload your policy during onboarding. Every result is marked in or out of policy, so travelers book without checking a document.',
        },
        {
          title: 'You approve only the exceptions',
          body: 'Trips inside policy go ahead. You see only the bookings that need a decision.',
        },
        {
          title: 'Book for anyone you support',
          body: 'Assistants and office admins book for their team in a few steps. Options already fit company rules, so fewer trips need approval.',
        },
        {
          title: 'Free onboarding, policy and people included',
          body: 'We set up your company, policy and people with you, and train your admins and finance team.',
        },
      ],
    },
    {
      kind: 'table',
      eyebrow: 'A look inside',
      heading: 'What a traveler sees in Chicago.',
      caption: 'Oct 6 to Oct 8, policy up to $250 a night.',
      columns: ['Hotel', 'Rate', 'Distance', 'Policy'],
      rows: [
        ['West Loop hotel', '$219 a night', '0.4 mi from the client office', 'In policy'],
        ['Fulton Market hotel', '$236 a night', '0.9 mi from the client office', 'In policy'],
        ['Union Station hotel', '$204 a night', '1.1 mi from the client office', 'In policy'],
      ],
      note: '',
    },
    {
      kind: 'prose',
      heading: 'An alert and new options when plans change.',
      paragraphs: [
        'A delayed or canceled flight brings your traveler an alert and new options. They confirm one, and you see the change in the audit log.',
      ],
    },
    {
      kind: 'links',
      heading: 'Related pages.',
      items: [
        {
          title: 'When plans change',
          body: 'See what happens, step by step.',
          to: '/when-plans-change',
        },
        { title: 'Pricing', body: 'What is included when you start.', to: '/pricing' },
      ],
    },
  ],

  '/travelers': [
    {
      kind: 'table',
      eyebrow: 'A look inside',
      heading: 'Flights, marked in or out of policy.',
      caption: 'Austin to Chicago, round trip.',
      columns: ['Departs', 'Fare', 'Details', 'Policy'],
      rows: [
        ['7:05 a.m.', '$312.40', 'Nonstop, Economy', 'In policy'],
        ['9:30 a.m.', '$298.10', 'Nonstop, Economy', 'In policy'],
        ['11:45 a.m.', '$341.80', 'Nonstop, Economy', 'In policy'],
        ['12:15 p.m.', '$684.90', 'Nonstop, Business', 'Out of policy'],
      ],
      note: '',
    },
    {
      kind: 'prose',
      heading: 'The assistant suggests. Your approvers decide.',
      paragraphs: [
        'Every flight and hotel comes back marked in or out of policy. Anything out of policy goes to an approver.',
        'Booking for someone else? Pick their name and book in a few steps. Flights and hotels come from the Mondee travel marketplace, with global coverage.',
      ],
    },
    {
      kind: 'prose',
      heading: 'When plans change.',
      paragraphs: [
        'When a flight is delayed or canceled, you get an alert and new options to confirm. Your travel lead sees the change in the audit log.',
        'Upload a receipt and Miraee matches it to the card charge, checks it against policy and tracks your reimbursement.',
      ],
    },
    {
      kind: 'links',
      heading: 'Related pages.',
      items: [
        {
          title: 'When plans change',
          body: 'What you see when a flight changes.',
          to: '/when-plans-change',
        },
        { title: 'How it works', body: 'From the first search to month-end.', to: '/how-it-works' },
      ],
    },
  ],
}
