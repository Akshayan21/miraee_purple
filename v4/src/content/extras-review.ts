import type { Block } from './extras-types'

/** /spend-review, /spend-review/method, /security, /pricing */
export const EXTRAS_REVIEW: Record<string, Block[]> = {
  '/spend-review': [
    {
      kind: 'steps',
      heading: 'Send one file you already have',
      eyebrow: 'What you send',
      intro:
        'A booking report from your travel agency, or an expense extract from your expense system.',
      items: [
        { title: 'Agency booking report', body: 'The export your travel agency already produces.' },
        { title: 'Expense extract', body: 'The same trips as your expense system records them.' },
        {
          title: 'Card feed (optional)',
          body: 'Add a corporate card feed if you like. It makes the review more complete.',
        },
        { title: 'NDA first', body: 'We sign an NDA before you send anything.' },
      ],
    },
    {
      kind: 'table',
      heading: 'Four findings from your own data',
      eyebrow: 'What you get',
      caption: 'Product view with illustrative data.',
      columns: ['Finding', 'What it shows', 'Amount'],
      rows: [
        [
          'Bookings outside your travel program',
          'Trips booked away from your agency or booking tool',
          '$186,420.00',
        ],
        ['Spend outside policy', 'Bookings above your policy limits', '$92,318.40'],
        [
          'The cost of booking late',
          'Your own fares on the same routes, booked early versus late',
          '$64,905.10',
        ],
        ['Unused or expired tickets', 'Tickets your company paid for and never used', '$21,760.00'],
      ],
      note: 'From the product view. Your report uses your own trips.',
    },
    {
      kind: 'prose',
      heading: 'We show our work.',
      eyebrow: 'Optional, and on request',
      paragraphs: [
        'Every finding comes from the file you send, so your controller can check every line. Any savings figure is a dollar range, with the method and data period shown. The report is yours to keep.',
        'We agree timing with you when your file arrives. The review is optional, and you can sign up without one.',
      ],
    },
    {
      kind: 'faq',
      heading: 'Questions',
      items: [
        {
          q: 'Do we need a review to sign up?',
          a: 'Sign-up and onboarding are free at any company size, with or without a review.',
        },
        {
          q: 'What happens to our data?',
          a: 'You choose the one file to send. We sign an NDA first. The report belongs to you.',
        },
        {
          q: 'Will you give us a savings number?',
          a: 'Only as a dollar range from your own data, with the method and data period shown.',
        },
      ],
    },
  ],

  '/spend-review/method': [
    {
      kind: 'table',
      heading: 'The four findings, and what each one measures',
      eyebrow: 'At a glance',
      columns: ['Finding', 'What it measures', 'Where it comes from'],
      rows: [
        [
          'Bookings outside your travel program',
          'Trips booked away from your agency or booking tool',
          'The booking report or expense extract you send',
        ],
        [
          'Spend outside policy',
          'Bookings above your policy limits',
          'Your file, measured against the rules you send us',
        ],
        [
          'The cost of booking late',
          'Your own fares on the same routes, booked early versus late',
          'Your own fares only',
        ],
        [
          'Unused or expired tickets',
          'Tickets your company paid for and never used',
          'Tickets in your file',
        ],
      ],
    },
    {
      kind: 'prose',
      heading: 'Why look back',
      eyebrow: 'Proof first',
      paragraphs: [
        "Last year's trips are the most honest picture of how your company really travels. The review reads that picture trip by trip, from the one file you already have.",
        'If the data does not show it, the report does not claim it.',
      ],
    },
    {
      kind: 'cards',
      heading: 'We show our work',
      eyebrow: 'Checkable by your controller',
      items: [
        {
          title: 'Your file only',
          body: 'Every finding comes from the file you send, so every line can be checked.',
        },
        {
          title: 'Ranges, not promises',
          body: 'Any savings figure is a dollar range, with the method and data period shown.',
        },
        {
          title: 'Yours to keep',
          body: 'The report belongs to you. We sign an NDA before you send anything.',
        },
        { title: 'Optional', body: 'The review is optional, and you can sign up without one.' },
      ],
    },
  ],

  '/security': [
    {
      kind: 'prose',
      heading: 'The assistant suggests. Your approvers decide.',
      eyebrow: 'Control',
      paragraphs: [
        'Anything out of policy goes to an approver. Every booking and change is in the audit log.',
      ],
    },
    {
      kind: 'table',
      heading: 'What the audit log shows',
      eyebrow: 'Audit log',
      caption: 'Product view with illustrative data.',
      columns: ['Event', 'By'],
      rows: [
        ['Booked: client visit, Chicago', 'Traveler'],
        ['Approved: Denver hotel, out of policy', 'Approver'],
        ['Flight changed: 8:15 a.m. to Chicago', 'Traveler'],
        ['Receipt matched: Dallas', 'Miraee'],
      ],
      note: 'The real log records who made each change and when.',
    },
    {
      kind: 'cards',
      heading: 'Your security review, in one pack',
      eyebrow: 'The security pack',
      intro: 'Ask for it at any stage of your review.',
      items: [
        {
          title: 'A security questionnaire',
          body: 'Completed, so your IT team does not start from a blank form.',
        },
        { title: 'A data processing agreement', body: 'Ready for your legal team to read.' },
        {
          title: 'A penetration test summary',
          body: 'The result of a penetration test, in summary.',
        },
      ],
    },
    {
      kind: 'prose',
      heading: 'You choose what to share.',
      eyebrow: 'Spend review data',
      paragraphs: [
        'For a spend review you send one file, an agency booking report or an expense extract. We sign an NDA first, and the report is yours to keep.',
        'Miraee is built by Tabhi, the company behind the Mondee travel marketplace.',
      ],
    },
  ],

  '/pricing': [
    {
      kind: 'table',
      heading: "What's free",
      columns: ['Item', 'What you get'],
      rows: [
        ['Sign-up', 'A company account for everyone'],
        [
          'Onboarding',
          'Company and policy setup, employee onboarding, payment settings with your current cards, and training for admins and finance',
        ],
      ],
    },
    {
      kind: 'prose',
      heading: 'Booking terms',
      paragraphs: ['We set out booking terms in writing before your team books its first trip.'],
    },
    {
      kind: 'prose',
      heading: 'Want proof first?',
      eyebrow: 'Spend review',
      paragraphs: [
        "Ask for a spend review: last year's travel, reviewed trip by trip from one booking report. Optional, and on request.",
      ],
    },
  ],
}
