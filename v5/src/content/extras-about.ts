import type { Block, Guide } from './extras-types'
import { VIDEO_GROUPS } from './videos'

/** /company, /resources, /resources/business-travel-policy-template, /talk-to-sales, /sign-up, /log-in */
export const EXTRAS_ABOUT: Record<string, Block[]> = {
  '/company': [
    {
      kind: 'prose',
      eyebrow: 'Tabhi',
      heading: 'Travel your finance team can see.',
      paragraphs: [
        'Miraee is business travel and expense software, built by Tabhi, the company behind the Mondee travel marketplace.',
        'Your people book flights and hotels inside company policy. Finance sees every trip with its budget and the right account code. When plans change, travelers get an alert and new options to confirm.',
      ],
    },
    {
      kind: 'cards',
      eyebrow: 'How we work',
      heading: 'Three habits we hold ourselves to.',
      items: [
        { title: 'Figures carry their source', body: 'Figures on this site carry their source.' },
        {
          title: 'Savings come as a range',
          body: 'Savings are given as a range, with the method shown.',
        },
        {
          title: 'The assistant suggests',
          body: 'The assistant suggests. Your approvers decide.',
        },
      ],
    },
    {
      kind: 'prose',
      eyebrow: 'Leadership',
      heading: 'Leadership profiles are coming.',
      paragraphs: [
        'We are preparing profiles of the people who lead Tabhi and Miraee. Until they are published, the quickest way to meet the team is to talk to sales.',
      ],
    },
    {
      kind: 'links',
      eyebrow: 'Contact',
      heading: 'Talk to us.',
      intro: "Questions about Miraee, the spend review or security? We'll answer.",
      items: [
        {
          title: 'Talk to sales',
          body: 'Ask about booking terms, onboarding, the spend review or the security pack.',
          to: '/talk-to-sales',
        },
        { title: 'Security', body: 'How Miraee protects your company data.', to: '/security' },
        {
          title: "What's free",
          body: 'Signing up and onboarding are free, at any company size.',
          to: '/pricing',
        },
        {
          title: 'Resources',
          body: 'Practical reading for finance and travel leads.',
          to: '/resources',
        },
      ],
    },
  ],

  '/resources': [
    {
      kind: 'videos',
      eyebrow: 'Video library',
      heading: 'Video library.',
      intro: 'Short walkthroughs for the people who set up and run company travel. Pick your role.',
      groups: VIDEO_GROUPS,
    },
    {
      kind: 'links',
      eyebrow: 'Guides',
      heading: 'Read the guides.',
      intro: 'Each guide is practical and short enough to read in one sitting.',
      items: [
        {
          title: 'How to write a travel policy people follow',
          body: 'Booking rules, approvals, limits and a rollout plan.',
          to: '/resources/business-travel-policy',
        },
        {
          title: 'Travel and expense policy: what to include, with examples',
          body: 'Example wording finance teams can copy: limits, receipts and reimbursement.',
          to: '/resources/travel-and-expense-policy',
        },
        {
          title: 'Travel expense reports: a faster month-end close',
          body: 'What a good report contains, plus a month-end close checklist.',
          to: '/resources/travel-expense-report',
        },
        {
          title: "The part-time corporate travel manager's guide",
          body: 'The job in plain steps, with a first 30 days and a monthly routine.',
          to: '/resources/corporate-travel-manager',
        },
        {
          title: 'Travel policy compliance: make the right option the easy one',
          body: 'Why people book outside the program, and how to bring bookings back.',
          to: '/resources/travel-policy-compliance',
        },
        {
          title: 'Travel policy template',
          body: 'An editable policy with a one-page rollout checklist.',
          to: '/resources/business-travel-policy-template',
        },
      ],
    },
  ],

  '/resources/business-travel-policy-template': [
    {
      kind: 'prose',
      eyebrow: 'Who it is for',
      heading: 'For growing companies that need a policy now.',
      paragraphs: [
        'A complete travel policy you can edit and adopt, with a one-page rollout checklist. It comes as Word and PDF.',
        'Read it once as a traveler would. Every rule should answer a question someone asks when booking. Set the numbers with finance, keep what fits and cut what does not. A shorter policy that people follow beats a longer one they skip.',
      ],
      bullets: [
        'Name the owner of the policy and the approver of changes.',
        'Set it up where people book, so each option shows as in or out of policy.',
        'Roll it out with the checklist below.',
      ],
    },
    {
      kind: 'table',
      eyebrow: 'What it covers',
      heading: 'Twelve sections, each with a suggested starting point.',
      columns: ['Section', 'What it settles'],
      rows: [
        [
          '1. Purpose, scope and ownership',
          'Who the policy covers, who owns it and the principle behind it',
        ],
        [
          '2. How to book',
          'The company booking tool, complex trips, booking for others and bookings made elsewhere',
        ],
        [
          '3. Approvals',
          'Trips inside policy book straight away; what needs approval first and who approves',
        ],
        ['4. Flights', 'Cabin class, fare, booking window, bags and seats, loyalty programs'],
        ['5. Hotels', 'Nightly limits by city tier, event hotels, long stays and room type'],
        ['6. Ground transport', 'Rideshare, rental cars, rail, personal car, parking and tolls'],
        ['7. Meals and entertainment', 'Daily limits, client meals, alcohol and team meals'],
        ['8. When plans change', 'Delays, cancellations, changes you choose and unused tickets'],
        ['9. Paying for travel', 'Corporate card, personal card and cash advances'],
        [
          '10. Expenses and receipts',
          'What the company pays for, receipts, deadlines, coding and review',
        ],
        ['11. Reimbursement', 'When approved expenses are paid'],
        [
          '12. Exceptions and review',
          'Who approves exceptions, misuse, and a twice-yearly review with a change log',
        ],
      ],
      note: 'The suggested starting points are common choices for a US company. Change each one to fit your budget, routes and cities.',
    },
    {
      kind: 'steps',
      eyebrow: 'Roll it out',
      heading: 'The first 30 days.',
      items: [
        {
          title: 'Week 1: agree the numbers',
          body: 'Name the policy owner and the approver of changes. Agree the limits and the approval rule with finance.',
        },
        {
          title: 'Week 2: set it up',
          body: 'Put the rules into the booking tool. Book one test trip inside policy and one outside it, and follow both to the approver.',
        },
        {
          title: 'Week 3: announce it',
          body: 'Send one message to everyone who travels: where to book, the three limits people ask about most, and who to ask. Save the policy where people look, with a link in the booking tool.',
        },
        {
          title: 'Week 4: check it',
          body: 'Review the first month-end: bookings outside the tool, exceptions and missing receipts.',
        },
      ],
    },
    {
      kind: 'links',
      eyebrow: 'Keep reading',
      heading: 'Related guides.',
      items: [
        {
          title: 'How to write a business travel policy',
          body: 'The thinking behind each section.',
          to: '/resources/business-travel-policy',
        },
        {
          title: 'Travel and expense policy',
          body: 'Example wording for the expense side.',
          to: '/resources/travel-and-expense-policy',
        },
        {
          title: 'For travel managers',
          body: 'How Miraee helps the person who runs travel.',
          to: '/travel-managers',
        },
      ],
    },
  ],

  '/talk-to-sales': [
    {
      kind: 'cards',
      eyebrow: 'What to ask about',
      heading: 'Bring any of these.',
      items: [
        {
          title: 'Booking terms',
          body: 'How booking works on the Mondee travel marketplace and what it means for your company.',
        },
        {
          title: 'Onboarding',
          body: 'We set up your company, your travel policy and your people with you. It is free, at any company size.',
        },
        {
          title: 'The spend review',
          body: 'Send one booking report and see where your travel money went, trip by trip.',
        },
        {
          title: 'The security pack',
          body: 'A completed security questionnaire, a data processing agreement and a penetration test summary.',
        },
      ],
    },
    {
      kind: 'steps',
      eyebrow: 'What happens next',
      heading: 'From your question to a call.',
      items: [
        {
          title: 'You send your question',
          body: 'Tell us who you are and what you would like to know.',
        },
        { title: 'We email you', body: "We'll email you to find a time to talk." },
        {
          title: 'We talk it through',
          body: 'A walkthrough, a spend review or answers on booking terms, whichever you came for.',
        },
      ],
    },
  ],

  '/sign-up': [
    {
      kind: 'steps',
      eyebrow: 'What happens next',
      heading: 'From sign-up to your first booking.',
      items: [
        {
          title: 'Request your account',
          body: 'Share your work email, company and role. We send your next steps to that email.',
        },
        {
          title: 'We set up with you',
          body: 'We email you to set up your company, your travel policy and your people.',
        },
        {
          title: 'Your people book inside policy',
          body: 'Every option is marked in or out of policy, and approvals only come in when something is out of policy.',
        },
      ],
    },
    {
      kind: 'cards',
      eyebrow: 'What to expect',
      heading: 'Free, and easy to keep running.',
      items: [
        {
          title: 'Free at any size',
          body: 'Signing up and onboarding are free, at any company size.',
        },
        { title: 'Keep your cards', body: 'Keep the corporate cards you already use.' },
        {
          title: 'Finance sees every trip',
          body: 'Each trip comes with its budget and the right account code.',
        },
      ],
    },
  ],
}

/** The guides served at /resources/<slug>. */
export const GUIDES: Guide[] = [
  {
    slug: 'business-travel-policy',
    title: 'How to write a travel policy people follow',
    eyebrow: 'Guide',
    sub: 'A business travel policy sets how employees book, what they can spend and who approves exceptions. This guide shows how to write one travelers follow.',
    meta: '8 min read',
    blocks: [
      {
        kind: 'prose',
        heading: 'What makes a travel policy work?',
        paragraphs: [
          'A travel policy works when following it is the easiest way to book. Keep it short, put a number on every limit, name one place to book, and send only the exceptions to an approver.',
          'Then make the rules visible where people choose flights and hotels, so nobody has to open a document to stay inside them.',
        ],
      },
      {
        kind: 'cards',
        heading: 'Why travelers work around a policy',
        intro:
          'Most companies have a travel policy. Fewer have one that shapes what people book. The reasons are practical, and they are fixable.',
        items: [
          {
            title: 'The policy lives in a document',
            body: 'Travelers read it once at onboarding, if at all. When they book three months later, they guess.',
          },
          {
            title: 'The limits are vague',
            body: '"Reasonable" hotel rates mean something different to every traveler and every approver.',
          },
          {
            title: 'Every trip needs approval',
            body: 'When approvers see every booking, they stop reading them, and the exceptions get approved with the rest.',
          },
          {
            title: 'The booking tool is slow',
            body: 'When the company channel is harder than a consumer site, people book elsewhere and expense it. Those bookings are hard to see, hard to code and hard to help with when plans change.',
          },
        ],
      },
      {
        kind: 'steps',
        heading: 'Three decisions to make before you write',
        items: [
          {
            title: 'Who the policy covers',
            body: "Employees, contractors, candidates and guests often travel on the company's budget. Decide whether one policy covers everyone or whether guests follow a shorter version.",
          },
          {
            title: 'Who owns it',
            body: 'Travel is often run by an operations, office or people lead on top of their day job, with finance setting the budget. Name one owner for the policy and one approver of changes to it. Write both names at the top.',
          },
          {
            title: 'Where booking happens',
            body: 'Name one booking channel for flights and hotels. If your agency handles complex trips, say which trips go to the agency and which are booked directly. A policy with two equal channels ends up with four.',
          },
        ],
      },
      {
        kind: 'table',
        heading: 'The sections every business travel policy needs',
        caption:
          'Use this as your checklist. Set each starting point to your own budget and routes.',
        columns: ['Section', 'What to decide', 'Suggested starting point'],
        rows: [
          [
            'Purpose and scope',
            'Who the policy covers and when it applies',
            'Employees and contractors traveling on company business; guests follow the same rules',
          ],
          [
            'Booking channel',
            'Where trips are booked, and what happens to bookings made elsewhere',
            'One company booking tool for flights and hotels; bookings made elsewhere need a reason at expense time',
          ],
          [
            'Pre-trip approval',
            'Which trips need approval before booking',
            'International trips, trips over a set total and anything out of policy',
          ],
          [
            'Flights',
            'Cabin class, fare type and booking window',
            'Economy for shorter flights; book domestic flights ahead where the trip allows',
          ],
          [
            'Hotels',
            'Nightly limit by city tier, and who can go above it',
            'A nightly limit per city tier, with higher limits for your most expensive cities',
          ],
          [
            'Ground transport',
            'Rideshare, taxis, rental cars, rail and mileage',
            'The most practical option for the trip; mileage at the IRS standard rate',
          ],
          [
            'Meals',
            'Per diem or actual cost, and client entertainment rules',
            'Actual cost up to a daily limit; client meals approved by the budget owner',
          ],
          [
            'Changes and cancellations',
            'What travelers do when plans change, and how unused tickets are tracked',
            'Rebook through the company channel; unused tickets recorded against the traveler',
          ],
          [
            'Expense and receipts',
            'Deadlines, receipt rules and the approver',
            'Expenses submitted within 30 days of the trip, with a receipt for every item',
          ],
          [
            'Reimbursement',
            'How and when employees are paid back',
            'Paid in the next payment run after approval',
          ],
          [
            'Traveler safety and contacts',
            'Who travelers call when something goes wrong',
            "One named contact in the company, plus the booking channel's help line",
          ],
          [
            'Exceptions and review',
            'Who can approve an exception, and when the policy is reviewed',
            'Budget owner approves exceptions; the policy owner reviews it twice a year',
          ],
        ],
        note: 'Our business travel policy template turns this table into a complete policy you can edit.',
      },
      {
        kind: 'cards',
        heading: 'How to write rules people can follow',
        items: [
          {
            title: 'Put a number on every limit',
            body: 'A nightly limit for standard cities can be checked by a traveler, an approver and a controller. "A reasonable rate" cannot.',
          },
          {
            title: 'Say what people can do first',
            body: '"Book economy for shorter flights" is easier to follow than a list of what is banned. It also reads as trust, which helps adoption.',
          },
          {
            title: 'Keep it to a few pages',
            body: 'Travelers need the booking channel, the limits and the approval rule. Put the detail finance needs, such as account codes and cost centers, in the finance section or in the booking tool.',
          },
          {
            title: 'Write for the person booking at 10 p.m.',
            body: 'Short sentences, one rule per line, and examples for the cases people ask about most: a conference hotel above the limit, a flight change, a trip that mixes business and personal days.',
          },
          {
            title: 'Say what happens to exceptions',
            body: 'An exception with a clear route, such as "ask your budget owner before you book", is followed far more often than a rule with no way around it.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'Approvals: before every trip, or only for exceptions?',
        paragraphs: [
          'Pre-trip approval for every trip gives control, and it creates a queue. Approvers see so many routine trips that the important ones blend in.',
          'Approval only when something is out of policy lets trips inside the rules book straight away. Anything outside them, such as a hotel above the limit or a business-class fare, goes to an approver with the reason attached. Approvers see fewer requests, and each one needs a real decision.',
          'If you choose the second model, the rules have to be applied at the moment of booking. That is where a booking tool that marks each option in or out of policy does the work a document cannot.',
        ],
      },
      {
        kind: 'steps',
        heading: 'How to roll out and keep the policy current',
        items: [
          {
            title: 'Agree the numbers with finance',
            body: 'Flight, hotel and meal limits, the approval threshold and the account codes for travel.',
          },
          {
            title: 'Brief approvers first',
            body: 'They need to know what will reach them and what will not.',
          },
          {
            title: 'Set it up in the booking tool, then announce it once',
            body: 'The first booking after launch should already show the new rules. Say the booking channel, the three limits people ask about most, and who to ask.',
          },
          {
            title: 'Answer questions for two weeks',
            body: 'Collect them. They tell you which rules are unclear.',
          },
          {
            title: 'Review after the first month-end',
            body: 'Look at bookings outside the channel, exceptions approved and receipts missing. Review the policy twice a year after that, and keep a short change log at the end.',
          },
        ],
      },
      {
        kind: 'faq',
        heading: 'Questions',
        items: [
          {
            q: 'How long should a business travel policy be?',
            a: 'A few pages is enough for most growing companies. Travelers need the booking channel, the limits and the approval rule. Put detail for finance, such as account codes and cost centers, in a separate section or in the booking tool.',
          },
          {
            q: 'What is the difference between a business travel policy and a travel and expense policy?',
            a: 'A business travel policy covers how trips are booked and what they can cost. A travel and expense policy adds how expenses are submitted, checked and reimbursed. Many companies combine them. Our guide to the travel and expense policy covers the expense side.',
          },
          {
            q: 'Should every trip need approval?',
            a: 'For most growing companies, approval works best only when something is out of policy. Routine trips inside the rules are booked straight away, and approvers see the exceptions that need a decision.',
          },
          {
            q: 'How often should we update our travel policy?',
            a: 'Twice a year, and after any big change in how the company travels. Hotel limits need the most frequent attention because city rates change.',
          },
          {
            q: 'How do we get people to follow the policy?',
            a: 'Make the company booking channel the easiest way to book, put a number on every limit, and show the rules on the options people choose from. Our guide to travel policy compliance covers this in detail.',
          },
        ],
      },
    ],
  },

  {
    slug: 'travel-and-expense-policy',
    title: 'Travel and expense policy: what to include, with examples',
    eyebrow: 'Guide',
    sub: 'A travel and expense policy tells employees what the company pays for, how to claim it and when they are repaid. This guide lists what to include, with wording you can copy.',
    meta: '8 min read',
    blocks: [
      {
        kind: 'prose',
        heading: 'What should a travel and expense policy include?',
        paragraphs: [
          'It should cover what is reimbursable, the limits for flights, hotels, meals and ground transport, what counts as a valid receipt, the deadline to submit, who approves, how expenses are coded and when employees are paid back. Write each rule with a number and an example, so employees, approvers and auditors read it the same way.',
          'A business travel policy covers booking. An expense policy covers what happens after the money is spent: receipts, submission, review and reimbursement. For a growing company, one combined policy is usually easier to maintain, because the same limits apply before and after the trip. If you already have a booking policy, keep it and add the expense sections below.',
        ],
      },
      {
        kind: 'table',
        heading: 'The sections to include',
        columns: ['Section', 'What it answers', 'Who reads it most'],
        rows: [
          [
            'Scope and principles',
            'Who is covered and what "reasonable and necessary" means here',
            'Everyone',
          ],
          [
            'Reimbursable and non-reimbursable items',
            'What the company pays for, and what it does not',
            'Travelers, approvers',
          ],
          [
            'Limits by category',
            'Flights, hotels, meals, ground transport, per diem',
            'Travelers, approvers',
          ],
          [
            'Company card and personal card',
            'When to use the corporate card, and how personal spend is handled',
            'Travelers, controllers',
          ],
          [
            'Receipts',
            'What a valid receipt shows, and what to do when one is lost',
            'Travelers, accounts payable',
          ],
          [
            'Submission deadline',
            'How many days after the trip expenses are due',
            'Travelers, accounts payable',
          ],
          ['Approval', 'Who approves, and what they check', 'Approvers'],
          ['Coding', 'Which account codes, cost centers and entities apply', 'Finance'],
          ['Reimbursement', 'When and how employees are paid back', 'Travelers, payroll'],
          [
            'Audit and exceptions',
            'How claims are checked, and how exceptions are handled',
            'Finance, auditors',
          ],
        ],
      },
      {
        kind: 'cards',
        heading: 'Example wording you can copy',
        intro:
          'Each example is written to be read once and remembered. Adjust the numbers to your own budget.',
        items: [
          {
            title: 'Scope',
            body: '"This policy applies to employees and contractors who travel or spend on the company\'s behalf. Expenses must be necessary for the business purpose of the trip."',
          },
          {
            title: 'Reimbursable items',
            body: '"The company pays for economy flights, hotels within the nightly limit, ground transport to and from business locations, meals up to the daily limit, and business calls and internet while traveling. Personal items, upgrades you choose, fines and in-room entertainment are personal costs."',
          },
          {
            title: 'Hotels',
            body: '"Book hotels within the nightly limit for your destination city. If the event hotel costs more, book it and add the reason when you book."',
          },
          {
            title: 'Meals',
            body: '"Meals are reimbursed at actual cost up to the daily limit for your destination. Client meals are approved by the budget owner and list the attendees and the business purpose."',
          },
          {
            title: 'Corporate card',
            body: '"Use your corporate card for flights, hotels and ground transport. Keep personal spending off the card. If a personal charge lands on it by mistake, flag it within five business days."',
          },
          {
            title: 'Receipts',
            body: '"Upload an itemized receipt for every expense. A valid receipt shows the merchant, date, items and amount paid. If you lose one, submit a short written statement with the same details."',
          },
          {
            title: 'Deadline',
            body: '"Submit expenses within 30 days of the end of your trip. Claims older than 90 days need approval from finance."',
          },
          {
            title: 'Approval, coding and reimbursement',
            body: '"Your manager approves your expenses. Every trip is coded to a cost center and the right budget before booking; finance sets the codes. Approved expenses are paid in the next payment run."',
          },
        ],
      },
      {
        kind: 'cards',
        heading: 'Limits and coding that finance can defend',
        intro:
          'Limits work when a traveler can check them before spending and an auditor can check them after.',
        items: [
          {
            title: 'Set limits by city tier',
            body: 'A single national hotel limit either blocks trips to your most expensive cities or leaves room everywhere else. Review the limits twice a year.',
          },
          {
            title: 'Separate the limit from the approval',
            body: '"Up to the nightly limit; above that, ask your budget owner" is clearer than a limit with silent exceptions.',
          },
          {
            title: 'Use the same numbers in the booking tool',
            body: 'When the limits in the tool match the policy, most out-of-policy spend is stopped or explained before it happens.',
          },
          {
            title: 'Code every trip at the start',
            body: 'When every trip carries its cost center and budget from the moment it is booked, the controller spends the close reviewing exceptions instead of chasing codes. It also answers the first question about travel, "where did the money go?", by team and by trip.',
          },
        ],
      },
      {
        kind: 'steps',
        heading: 'Receipts, review and exceptions',
        items: [
          {
            title: 'Which receipts count',
            body: 'Itemized receipts, not card slips. Upload a photo or file; the paper original is optional unless your auditors ask for it. For a lost receipt, ask for a short written statement with merchant, date, items and amount.',
          },
          {
            title: 'How long reimbursement takes',
            body: 'State the payment run, so employees know when to expect their money back. A clear date buys a lot of goodwill.',
          },
          {
            title: 'Review against three questions',
            body: 'Is there a business purpose, is it within policy, is there a valid receipt? Spend review time on the claims that fail, on repeated exceptions and on card charges with no matching receipt.',
          },
          {
            title: 'Answer common exceptions by name',
            body: 'The event hotel above the limit, personal days added to a trip, a canceled flight with a costlier replacement, a client paying part of the trip, a shared car or room. Written once, each removes a recurring email.',
          },
        ],
      },
      {
        kind: 'faq',
        heading: 'Questions',
        items: [
          {
            q: 'What is a travel and expense policy?',
            a: 'A travel and expense policy sets the rules for business trips and the costs that come with them: what is reimbursable, the limits, the receipts required, the submission deadline, who approves and when employees are paid back.',
          },
          {
            q: 'How long should employees have to submit expenses?',
            a: 'Thirty days after the end of the trip is a common deadline. It gives travelers time and keeps month-end close on schedule. Older claims can need finance approval.',
          },
          {
            q: 'What counts as a valid receipt?',
            a: 'An itemized receipt that shows the merchant, date, items and amount paid. Card slips alone usually do not show the items. For a lost receipt, ask for a short written statement with the same details.',
          },
          {
            q: 'Should we use per diems or actual costs for meals?',
            a: 'Both work. Actual cost up to a daily limit is easier to audit; a per diem is simpler for travelers. Choose one and use it for every trip.',
          },
          {
            q: 'Where can I find a template?',
            a: 'Our business travel policy template includes the booking and expense sections in one editable document, with a rollout checklist.',
          },
        ],
      },
    ],
  },

  {
    slug: 'travel-expense-report',
    title: 'Travel expense reports: a faster month-end close',
    eyebrow: 'Guide',
    sub: 'A travel expense report lists what an employee spent on a trip so the company can check, code and repay it. This guide covers what a good report holds and gives you a month-end checklist.',
    meta: '8 min read',
    blocks: [
      {
        kind: 'prose',
        heading: 'How do you close month-end faster on travel?',
        paragraphs: [
          'Code every trip at booking, so each cost arrives with its budget and cost center. Match receipts to card charges as they come in, not at the end of the month. Review only the exceptions: missing receipts, out-of-policy spend and unmatched charges. Then reconcile card statements against trips and lock the period.',
        ],
      },
      {
        kind: 'table',
        heading: 'What a travel expense report should contain',
        caption: 'A report a controller can approve in one pass has the same fields every time.',
        columns: ['Field', 'Why finance needs it'],
        rows: [
          ['Traveler and approver', 'Who spent it and who signed off'],
          ['Trip name and dates', 'Groups every cost of one trip together'],
          ['Business purpose', 'Supports the deduction and the audit trail'],
          ['Cost center, entity and budget', 'Posts the cost to the right place'],
          ['Each expense: date, merchant, category, amount', 'The line items finance checks'],
          [
            'Payment method',
            'Corporate card or personal card, which decides whether it is reimbursed',
          ],
          ['Receipt for each line', 'Proof of the amount and the items'],
          ['Policy status', 'Whether each line is inside policy, and the reason where it is not'],
        ],
        note: 'The trip is the right unit. When flight, hotel, ground and meals for one trip sit together, an approver can see in seconds whether the trip made sense.',
      },
      {
        kind: 'cards',
        heading: 'Why travel slows month-end close',
        intro:
          "Travel is a small share of most companies' costs and a large share of the questions at close. The reasons repeat.",
        items: [
          {
            title: 'Codes are added late',
            body: 'Travelers guess a cost center at expense time, or leave it for finance.',
          },
          {
            title: 'Receipts arrive after the charges',
            body: 'Card lines post in days; receipts come in weeks later, or not at all.',
          },
          {
            title: 'The trip is split across systems',
            body: 'The flight is on the agency report, the hotel on the card, the meals on a personal card.',
          },
          {
            title: 'Exceptions are found at the end',
            body: 'An out-of-policy hotel is discovered during review, when the only option is to approve it.',
          },
        ],
      },
      {
        kind: 'steps',
        heading: 'Five habits that shorten the close',
        intro:
          'The common thread is timing. Most of the work of a clean close happens before the month ends.',
        items: [
          {
            title: 'Code at booking',
            body: 'Set budgets and cost centers once, and attach them to the trip when it is booked. Travelers never choose a code.',
          },
          {
            title: 'Match receipts as charges post',
            body: 'Ask travelers to upload receipts during the trip. Match each one to its card charge the same week, while details are fresh.',
          },
          {
            title: 'Check policy before spend, not after',
            body: 'When options are marked in or out of policy at booking, fewer exceptions reach the close.',
          },
          {
            title: 'Keep one trip record',
            body: 'Every cost of a trip, from any card or report, belongs on one record with its code.',
          },
          {
            title: 'Review exceptions only',
            body: 'Most lines are routine. Put your time into missing receipts, unmatched charges and out-of-policy lines.',
          },
        ],
      },
      {
        kind: 'steps',
        heading: 'Travel month-end close checklist',
        intro: 'Copy this into your close plan and assign an owner to each line.',
        items: [
          {
            title: 'Before month-end, weekly',
            body: 'Every trip booked this week has a cost center, entity and budget. Card charges are matched to receipts, and unmatched charges are listed.',
          },
          {
            title: 'Close week, day 1 to 2',
            body: 'Download card statements for every corporate card program. Match every card line to a trip and a receipt, or flag it. Remind travelers with missing receipts, with the deadline. Review and approve personal-card expenses for reimbursement.',
          },
          {
            title: 'Close week, day 3 to 4',
            body: 'Record unused and canceled tickets against the traveler, with expiry dates. Book travel accruals for trips taken but not yet expensed. Compare spend by cost center with budget and explain variances.',
          },
          {
            title: 'Close week, day 5',
            body: 'Note three questions for the policy owner: which limits were exceeded most, which teams booked outside the channel, which receipts went missing.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'Accruals, unused tickets and the year-end close',
        paragraphs: [
          'Travel accruals. A trip taken in the last week of the month often reaches expenses in the next one. Book an accrual for trips that ended in the period but have not been claimed, using the booked cost of flights and hotels as the estimate. When the booked cost already sits on the trip record with its code, the accrual takes minutes.',
          'Unused tickets. When a flight is canceled, the ticket value can often be reused before it expires. Keep a list of open ticket credits by traveler, airline, value and expiry date. Check it each month and remind travelers before a credit lapses.',
          "Year-end. Close December with the same checklist, then confirm that every card program's final statement is matched, clear or accrue every open personal-card claim, and save the year's exceptions log for your auditors.",
        ],
      },
      {
        kind: 'faq',
        heading: 'Questions',
        items: [
          {
            q: 'What is a travel expense report?',
            a: 'A travel expense report lists the costs of a business trip, with a receipt, category and code for each line, so the company can check, post and reimburse them.',
          },
          {
            q: 'How long should a travel expense report take to approve?',
            a: 'A report with codes attached at booking, receipts matched to charges and a policy status on each line can be approved in one pass. Reports that need codes and receipts chased take the longest.',
          },
          {
            q: 'What should be on a travel month-end close checklist?',
            a: 'Coding every trip, matching card charges to receipts, chasing missing receipts, recording unused tickets, booking accruals, comparing spend with budget, releasing reimbursements and locking the period. The checklist above covers each step by close day.',
          },
          {
            q: 'Can travelers submit receipts from their phone?',
            a: 'Most modern tools let travelers upload a photo of the receipt during the trip. The sooner the receipt arrives, the sooner it can be matched to the card charge.',
          },
          {
            q: 'Do we need a separate expense tool for travel?',
            a: 'Many companies keep one tool for booking and another for expense. When booking and expense share one trip record, the codes and receipts stay together, and month-end has less to reconcile.',
          },
        ],
      },
    ],
  },

  {
    slug: 'corporate-travel-manager',
    title: "The part-time corporate travel manager's guide",
    eyebrow: 'Guide',
    sub: 'In many growing companies, the travel manager is an operations, office or people lead who runs travel on the side. This guide sets out the job in plain steps.',
    meta: '8 min read',
    blocks: [
      {
        kind: 'table',
        heading: 'The job, in five parts',
        caption:
          'A corporate travel manager owns how the company books and pays for business travel. In a growing company it is often a part-time role, so the goal is a program that runs on its own most days and needs you only for exceptions.',
        columns: ['Part', 'What you own', 'What good looks like'],
        rows: [
          [
            'Policy',
            'The rules for booking and spending',
            'A few pages, a number on every limit, reviewed twice a year',
          ],
          [
            'Booking',
            'Where and how people book',
            'One channel for flights and hotels, fast enough that people choose it',
          ],
          ['Approvals', 'Who approves what', 'Only out-of-policy trips reach an approver'],
          [
            'Changes',
            'What happens when plans change',
            'Travelers see what happened and new options, without waiting on hold',
          ],
          [
            'Reporting',
            'What finance and leadership see',
            'Every trip with its cost, budget and code, each month',
          ],
        ],
        note: 'You do not need to do all five yourself. You need to know who does each one, and to make sure the handoffs work.',
      },
      {
        kind: 'steps',
        heading: 'Your first 30 days',
        items: [
          {
            title: 'Week 1: find out how travel works today',
            body: "Ask finance for last quarter's card statements and expense export, and your agency for its booking report if you have one. List where trips were booked, who booked them and how many were booked by assistants for someone else.",
          },
          {
            title: 'Week 2: read the policy as a traveler would',
            body: 'Can you tell from the document where to book, what hotel you can choose in your most-visited city and who approves an exception? Mark every rule that needs a number.',
          },
          {
            title: 'Week 3: agree the numbers with finance',
            body: 'Hotel limits by city tier, cabin class by flight length, the meal limit, the approval rule and the account codes. Write down who can approve a change to each.',
          },
          {
            title: 'Week 4: set up and announce',
            body: 'Put the rules into the booking tool, brief approvers, then send one short message to everyone who travels: where to book, the three limits people ask about most, and who to ask.',
          },
        ],
      },
      {
        kind: 'cards',
        heading: 'Work with finance, approvals and assistants',
        items: [
          {
            title: 'Finance from day one',
            body: 'Agree what finance needs from every trip: budget, cost center and entity, attached at booking. Agree the month-end handoff, and share one monthly view: trips booked, spend against budget, out-of-policy spend and unused tickets.',
          },
          {
            title: 'Keep approvals out of your inbox',
            body: 'If every trip needs approval, you end up chasing managers on behalf of travelers. Move to approval only when something is out of policy, and review the pattern once a month.',
          },
          {
            title: 'Help the people who book for others',
            body: 'Executive assistants and office admins often book more trips than anyone. Let them book on behalf of the people they support, with the same in-policy and out-of-policy marks the traveler would see.',
          },
          {
            title: 'Plan for when plans change',
            body: 'Tell travelers where to go first. Make changes visible in the place they booked, record every change and fare difference, and name one company contact for cases the tool cannot solve.',
          },
        ],
      },
      {
        kind: 'table',
        heading: 'A monthly routine that takes an hour',
        columns: ['Step', 'Time'],
        rows: [
          ['Check bookings made outside the channel and ask why', '15 minutes'],
          ['Review out-of-policy trips and the rules behind them', '15 minutes'],
          ['Check unused and canceled tickets before they expire', '10 minutes'],
          ['Send finance the one-page monthly view', '10 minutes'],
          ['Note one change to the policy or setup for next month', '10 minutes'],
        ],
        note: 'Times are a suggested plan for the routine, not a measurement.',
      },
      {
        kind: 'table',
        heading: 'Answers to the questions travelers ask most',
        caption:
          'Write the answers once, put them at the end of the policy, and link to them from the booking tool.',
        columns: ['Question', 'A clear answer'],
        rows: [
          [
            'Can I book the conference hotel if it costs more than the limit?',
            'Yes. Book it through the company tool and add the reason when you book',
          ],
          [
            'My flight was canceled. What do I do?',
            'Open the booking tool first. It shows what happened and your new options; confirm the one that suits you',
          ],
          [
            'Can I add a personal day to a work trip?',
            'Yes, if the flight costs the same or less. Hotel nights and costs for the personal days are yours',
          ],
          [
            'My manager is on leave. Who approves my trip?',
            "Your manager's manager, or the budget owner named for your team",
          ],
          [
            'I lost a receipt. What now?',
            'Submit a short written statement with the merchant, date, items and amount',
          ],
          [
            'When will I get my money back?',
            'In the next payment run after your expenses are approved',
          ],
          [
            'Can someone else book for me?',
            'Yes. Assistants and office admins can book on your behalf, with the same rules',
          ],
        ],
      },
      {
        kind: 'faq',
        heading: 'Questions',
        items: [
          {
            q: 'Is corporate travel manager a full-time job?',
            a: 'In large companies it often is. In growing companies it is commonly part of an operations, office, people or finance role. A clear policy and a booking tool that applies it let one person run the program in a few hours a month.',
          },
          {
            q: 'What skills does a corporate travel manager need?',
            a: 'Clear writing for the policy, comfort with numbers for the monthly view, calm judgment when plans change, and the ability to work with finance, assistants and travelers.',
          },
          {
            q: 'Who should approve business travel?',
            a: "The traveler's budget owner, for trips outside policy. Trips inside policy can book straight away.",
          },
          {
            q: 'What should a travel manager report each month?',
            a: 'Trips booked, spend against budget, bookings outside the channel, out-of-policy spend and unused tickets, on one page.',
          },
          {
            q: 'Where do I start?',
            a: 'With the policy. Download the business travel policy template and adapt the numbers with finance.',
          },
        ],
      },
    ],
  },

  {
    slug: 'travel-policy-compliance',
    title: 'Travel policy compliance: make the right option the easy one',
    eyebrow: 'Guide',
    sub: 'Travel policy compliance is the share of trips booked the way your policy says. This guide shows how to measure it and raise it by making the in-policy option the easiest one.',
    meta: '8 min read',
    blocks: [
      {
        kind: 'prose',
        heading: 'How do you improve travel policy compliance?',
        paragraphs: [
          'Make the in-policy option the easiest one to book. Name one booking channel, put a number on every limit, show whether each flight and hotel fits the policy at the moment of choice, and send only exceptions to an approver. Then measure bookings outside the channel and out-of-policy spend every month, and fix the rules that cause them.',
        ],
        bullets: [
          'Channel. Was the trip booked through the company channel, or somewhere else and expensed later?',
          "Limits. Did the flight, hotel and other costs fall inside the policy's numbers?",
          'Approval. Where the trip was outside policy, was it approved before booking, with a reason?',
        ],
      },
      {
        kind: 'cards',
        heading: 'Why travelers book outside the program',
        intro:
          'Travelers rarely leave the program to break the rules. They leave because another option looks easier or cheaper at the moment they book. Sending the policy document again solves none of these.',
        items: [
          {
            title: 'The company tool feels slower',
            body: 'A consumer site can feel quicker than the tool the company chose.',
          },
          {
            title: 'The price looks better elsewhere',
            body: 'A hotel can look cheaper outside the company program at the moment of booking.',
          },
          {
            title: 'The rules are unclear',
            body: 'If a traveler cannot tell whether a hotel is allowed, the safest choice feels like booking it and explaining later.',
          },
          {
            title: 'Approvals are slow',
            body: 'When every trip waits for a manager, a traveler with a meeting tomorrow books first and asks second.',
          },
        ],
      },
      {
        kind: 'steps',
        heading: 'Seven ways to raise compliance',
        items: [
          {
            title: 'Name one channel for flights and hotels',
            body: 'Say it in the first line of the policy. If the agency handles complex trips, say which ones.',
          },
          {
            title: 'Put a number on every limit',
            body: 'Hotel limits by city tier, cabin class by flight length, a daily meal limit. Numbers can be checked; adjectives cannot.',
          },
          {
            title: 'Show the policy in the search results',
            body: 'When every option is marked in or out of policy, travelers stop guessing. This single change does more than any reminder email.',
          },
          {
            title: 'Approve only the exceptions',
            body: 'Trips inside the rules book straight away. Anything outside them goes to an approver with the reason attached.',
          },
          {
            title: 'Give exceptions a clear route',
            body: '"The event hotel is above the limit: book it and add the reason" is followed. A rule with no way around it is broken quietly.',
          },
          {
            title: 'Make the right option faster for people who book for others',
            body: "Let assistants and office admins book on behalf of the people they support, with the traveler's details on file and the policy applied.",
          },
          {
            title: 'Make help easy when plans change',
            body: 'Travelers who were stuck on hold during a canceled flight book elsewhere next time. When a flight changes, they should see what happened and new options to confirm in the same place they booked.',
          },
        ],
      },
      {
        kind: 'table',
        heading: 'How to measure compliance',
        caption:
          'Measure monthly, with the same definitions each time. A simple scorecard is enough.',
        columns: ['Measure', 'How to calculate it', 'What it tells you'],
        rows: [
          [
            'Channel share',
            'Trips booked in the company channel, divided by all trips expensed',
            'How much travel you can see and help with',
          ],
          [
            'In-policy rate',
            'Trips booked inside every limit, divided by trips booked in the channel',
            'Whether the limits fit how people travel',
          ],
          [
            'Exceptions approved before booking',
            'Out-of-policy trips approved before booking, divided by all out-of-policy trips',
            'Whether the approval route works',
          ],
          ['Out-of-policy spend', 'Dollars spent above the limits', 'Where the money goes'],
          [
            'Late bookings',
            'Trips booked inside the booking window',
            'Where planning, not policy, is the problem',
          ],
          [
            'Unused tickets',
            'Tickets canceled and not reused before they expire',
            'Money that is recoverable with tracking',
          ],
        ],
        note: 'Start with the numbers you can get today. If your agency sends a booking report and your expense system can export claims, you can build the first two measures in an afternoon by matching trips across the two files.',
      },
      {
        kind: 'cards',
        heading: 'Reading the results, and talking to teams',
        items: [
          {
            title: 'Low channel share',
            body: 'Look at who books outside and what they book. Often it is one team, one route or one hotel.',
          },
          {
            title: 'Low in-policy rate in the channel',
            body: 'Your limits may be out of date. Compare the limit with what travelers actually pay in each city.',
          },
          {
            title: 'Many exceptions approved after the fact',
            body: 'The approval route is too slow, or travelers do not know it exists.',
          },
          {
            title: "Share the team's own numbers",
            body: "A team's own count of trips booked outside the tool starts a better conversation than a company-wide figure. Ask what made the other option easier, fix one thing and tell them.",
          },
        ],
      },
      {
        kind: 'steps',
        heading: 'A 30-day plan',
        items: [
          {
            title: 'Week 1',
            body: "Pull last quarter's booking report and expense export. Calculate channel share and in-policy rate.",
          },
          {
            title: 'Week 2',
            body: 'Update the three limits that cause the most exceptions. Name one booking channel in the policy.',
          },
          {
            title: 'Week 3',
            body: 'Set the limits up in the booking tool so every option shows in or out of policy. Switch approvals to exceptions only.',
          },
          {
            title: 'Week 4',
            body: 'Announce the changes in one message. Measure again after the next month-end.',
          },
        ],
      },
      {
        kind: 'faq',
        heading: 'Questions',
        items: [
          {
            q: 'What is a good travel policy compliance rate?',
            a: 'It depends on how you define it and how your company travels. Track channel share and in-policy rate separately, set your own baseline from last quarter, and aim to improve both each quarter.',
          },
          {
            q: 'How do we find bookings made outside the program?',
            a: "Match your expense claims and card charges against your booking channel's report. Trips that appear in expenses but not in the booking report were booked elsewhere.",
          },
          {
            q: 'Do we need pre-trip approval for every trip?',
            a: 'For most growing companies, approval only for out-of-policy trips works better. Routine trips book straight away, and approvers see the exceptions that need a decision.',
          },
          {
            q: 'How often should we measure compliance?',
            a: 'Monthly, after month-end close, using the same definitions each time. Review the trend quarterly with finance.',
          },
          {
            q: 'Where do we start if our policy is out of date?',
            a: 'Start with the policy itself. Our guide on how to write a business travel policy and the business travel policy template cover the sections to include.',
          },
        ],
      },
    ],
  },
]
