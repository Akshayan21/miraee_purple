import { Link } from 'react-router-dom'

import { Seo } from '@/components/common/seo'
import { DialogLink } from '@/components/forms/form-dialogs-context'
import {
  Article,
  Band,
  Byline,
  DataTable,
  FaqBand,
  PageClosing,
  PageHero,
  SectionHead,
} from '@/components/page/kit'
import { Button } from '@/components/ui/button'
import shared from '@/pages/home/home-shared.module.css'
import { faq } from './faq'
import { meta } from './meta'
import styles from './page.module.css'
import { MatchView } from './views'

const toc = [
  {
    href: '#how-do-you-close-month-end-faster-on-travel',
    label: 'How do you close month-end faster on travel?',
  },
  {
    href: '#what-a-travel-expense-report-should-contain',
    label: 'What a travel expense report should contain',
  },
  { href: '#why-travel-slows-month-end-close', label: 'Why travel slows month-end close' },
  { href: '#five-habits-that-shorten-the-close', label: 'Five habits that shorten the close' },
  { href: '#travel-month-end-close-checklist', label: 'Travel month-end close checklist' },
  { href: '#what-to-track-after-every-close', label: 'What to track after every close' },
  { href: '#receipts-set-expectations-early', label: 'Receipts: set expectations early' },
  {
    href: '#accruals-unused-tickets-and-the-year-end-close',
    label: 'Accruals, unused tickets and the year-end close',
  },
  {
    href: '#how-miraee-helps-with-travel-expense-reports',
    label: 'How Miraee helps with travel expense reports',
  },
  { href: '#questions', label: 'Questions' },
]

const fields: Array<[string, string]> = [
  ['Traveler and approver', 'Who spent it and who signed off'],
  ['Trip name and dates', 'Groups every cost of one trip together'],
  ['Business purpose', 'Supports the deduction and the audit trail'],
  ['Cost center, entity and GL code', 'Posts the cost to the right place'],
  ['Each expense: date, merchant, category, amount', 'The line items finance checks'],
  ['Payment method', 'Corporate card or personal card, which decides whether it is reimbursed'],
  ['Receipt for each line', 'Proof of the amount and the items'],
  ['Policy status', 'Whether each line is inside policy, and the reason where it is not'],
]

const slows: Array<[string, string]> = [
  [
    'Codes are added late.',
    ' Travelers guess a cost center at expense time, or leave it for finance.',
  ],
  [
    'Receipts arrive after the charges.',
    ' Card lines post in days; receipts come in weeks later, or not at all.',
  ],
  [
    'The trip is split across systems.',
    ' The flight is on the agency report, the hotel on the card, the meals on a personal card.',
  ],
  [
    'Exceptions are found at the end.',
    ' An out-of-policy hotel is discovered during review, when the only option is to approve it.',
  ],
]

const habits: Array<[string, string]> = [
  [
    '1. Code at booking.',
    ' Set GL codes, cost centers and budgets once, and attach them to the trip when it is booked. Travelers never choose a code.',
  ],
  [
    '2. Match receipts as charges post.',
    ' Ask travelers to upload receipts during the trip. Match each one to its card charge the same week, while details are fresh.',
  ],
  [
    '3. Check policy before spend, not after.',
    ' When options are marked in or out of policy at booking, fewer exceptions reach the close.',
  ],
  [
    '4. Keep one trip record.',
    ' Every cost of a trip, from any card or report, belongs on one record with its code.',
  ],
  [
    '5. Review exceptions only.',
    ' Most lines are routine. Put your time into missing receipts, unmatched charges and out-of-policy lines.',
  ],
]

const checklist: Array<[string, string[]]> = [
  [
    'Before month-end (weekly)',
    [
      'Every trip booked this week has a cost center, entity and GL code',
      'Receipts uploaded for trips that ended this week',
      'Card charges matched to receipts; unmatched charges listed',
      'Out-of-policy bookings have an approval and a reason',
    ],
  ],
  [
    'Close week, day 1 to 2',
    [
      'Card statements downloaded for every corporate card program',
      'Every card line matched to a trip and a receipt, or flagged',
      'Reminder sent to travelers with missing receipts, with the deadline',
      'Personal-card expenses reviewed and approved for reimbursement',
    ],
  ],
  [
    'Close week, day 3 to 4',
    [
      'Unmatched charges resolved or accrued with a note',
      'Unused and canceled tickets recorded against the traveler, with expiry dates',
      'Travel accruals booked for trips taken but not yet expensed',
      'Spend by cost center compared with budget; variances explained',
    ],
  ],
  [
    'Close week, day 5',
    [
      'Reimbursements released in the payment run',
      "Exceptions log saved with the period's close file",
      'Period locked for travel and expense entries',
      'Three questions noted for the policy owner: which limits were exceeded most, which teams booked outside the channel, which receipts went missing',
    ],
  ],
]

const measures: Array<[string, string]> = [
  [
    'Days from period end to travel close',
    'The headline measure of how much travel slows the close',
  ],
  ['Card lines unmatched at day 3', 'Shows whether receipts arrive on time'],
  ['Out-of-policy lines found at close', 'Should fall as policy moves to booking time'],
  ['Missing receipts per 100 trips', 'Tells you which teams need a reminder or a simpler process'],
  ['Unused ticket value open', 'Money you can still recover before tickets expire'],
]

const related = [
  {
    to: '/resources/business-travel-policy',
    img: '/img/document/resources-guide-travel-policy-1',
    w: 2046,
    h: 1364,
    alt: 'A hand pins notes to a planning board of process diagrams.',
    k: 'Travel leads',
    t: 'How to write a business travel policy your people will follow',
    d: 'Booking rules, approvals, flight and hotel limits, and a rollout plan.',
  },
  {
    to: '/resources/travel-and-expense-policy',
    img: '/img/document/resources-guide-t-e-policy-1',
    w: 2046,
    h: 1366,
    alt: 'Two colleagues review figures on paper beside open laptops.',
    k: 'Finance',
    t: 'Travel and expense policy: what to include, with examples',
    d: 'Example wording finance teams can copy: limits, receipts, reimbursement and GL codes.',
  },
  {
    to: '/resources/travel-policy-compliance',
    img: '/img/document/resources-guide-policy-compliance-1',
    w: 2046,
    h: 1366,
    alt: 'An aisle of airline seats with passengers in a full cabin.',
    k: 'Travel leads',
    t: 'Travel policy compliance: make the right option the easy one',
    d: 'Why people book outside the program, and seven ways to bring bookings back.',
  },
]

/** Route: /resources/travel-expense-report */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <PageHero
          crumbs={[
            { label: 'Home', to: '/' },
            { label: 'Resources', to: '/resources' },
            { label: 'Travel expense reports' },
          ]}
          eyebrow="Guide for controllers, ap and finance operations"
          title="Travel expense reports: a faster month-end close"
          lead="A travel expense report lists what an employee spent on a trip so the company can check, code and repay it. This guide covers what a good report holds and gives you a month-end checklist."
          actions={
            <Button asChild>
              <Link to="/resources/business-travel-policy-template">Get the template</Link>
            </Button>
          }
          visual={
            <picture>
              <source
                srcSet="/img/document/resources-guide-expense-reports-1.webp"
                type="image/webp"
              />
              <img
                className={styles.heroImg}
                src="/img/document/resources-guide-expense-reports-1.jpg"
                width="2046"
                height="1364"
                alt="A team meets in a glass-walled conference room."
                {...{ fetchpriority: 'high' }}
              />
            </picture>
          }
        >
          <Byline>
            {'By the Miraee team · Reviewed by Product Marketing · Last updated '}
            <time dateTime="2026-09-30">September 30, 2026</time>
            {' · 8 min read'}
          </Byline>
        </PageHero>

        <Article toc={toc}>
          <h2 id="how-do-you-close-month-end-faster-on-travel">
            How do you close month-end faster on travel?
          </h2>
          <p>
            Code every trip at booking, so each cost arrives with its budget, cost center and GL
            code. Match receipts to card charges as they come in, not at the end of the month.
            Review only the exceptions: missing receipts, out-of-policy spend and unmatched charges.
            Then reconcile card statements against trips and lock the period.
          </p>
          <h2 id="what-a-travel-expense-report-should-contain">
            What a travel expense report should contain
          </h2>
          <p>A report a controller can approve in one pass has the same fields every time:</p>
          <DataTable>
            <table>
              <thead>
                <tr>
                  <th scope="col">Field</th>
                  <th scope="col">Why finance needs it</th>
                </tr>
              </thead>
              <tbody>
                {fields.map(([a, b]) => (
                  <tr key={a}>
                    <td>{a}</td>
                    <td>{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DataTable>
          <p>
            The trip is the right unit. When flight, hotel, ground and meals for one trip sit
            together, an approver can see in seconds whether the trip made sense. When they arrive
            as separate card lines across two statements, nobody can.
          </p>
          <h2 id="why-travel-slows-month-end-close">Why travel slows month-end close</h2>
          <p>
            Travel is a small share of most companies' costs and a large share of the questions at
            close. The reasons repeat:
          </p>
          <ul>
            {slows.map(([k, v]) => (
              <li key={k}>
                <strong>{k}</strong>
                {v}
              </li>
            ))}
          </ul>
          <p>
            The common thread is timing. Most of the work of a clean close happens before the month
            ends, at booking and when each charge posts.
          </p>
          <h2 id="five-habits-that-shorten-the-close">Five habits that shorten the close</h2>
          <div className={styles.examples}>
            {habits.map(([k, v]) => (
              <p key={k} className={styles.ex}>
                <strong>{k}</strong>
                {v}
              </p>
            ))}
          </div>
          <h2 id="travel-month-end-close-checklist">Travel month-end close checklist</h2>
          <p>
            Use this checklist at every close. Copy it into your close plan and assign an owner to
            each line.
          </p>
          <div className={styles.checkGrid}>
            {checklist.map(([head, items]) => (
              <div key={head}>
                <p>
                  <strong>{head}</strong>
                </p>
                <ul className={styles.check}>
                  {items.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <h2 id="what-to-track-after-every-close">What to track after every close</h2>
          <DataTable>
            <table>
              <thead>
                <tr>
                  <th scope="col">Measure</th>
                  <th scope="col">Why it matters</th>
                </tr>
              </thead>
              <tbody>
                {measures.map(([a, b]) => (
                  <tr key={a}>
                    <td>{a}</td>
                    <td>{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DataTable>
          <p>
            Track them for three months before you change anything big. The trend shows where the
            time goes.
          </p>
          <h2 id="receipts-set-expectations-early">Receipts: set expectations early</h2>
          <p>
            Receipt rules cause the most back-and-forth, so keep them simple and state them once:
          </p>
          <ul>
            <li>Upload an itemized receipt for every expense, during the trip where possible.</li>
            <li>A card slip alone is not enough, because it does not show the items.</li>
            <li>
              For a lost receipt, a short written statement with merchant, date, items and amount.
            </li>
            <li>Expenses are due within 30 days of the end of the trip.</li>
          </ul>
          <p>
            Our guide to the{' '}
            <Link to="/resources/travel-and-expense-policy">travel and expense policy</Link> has
            example wording for each of these rules.
          </p>
          <h2 id="accruals-unused-tickets-and-the-year-end-close">
            Accruals, unused tickets and the year-end close
          </h2>
          <p>Two items catch finance teams out at quarter-end and year-end more than any others.</p>
          <p>
            <strong>Travel accruals.</strong> A trip taken in the last week of the month often
            reaches expenses in the next one. Book an accrual for trips that ended in the period but
            have not been claimed, using the booked cost of flights and hotels as the estimate. When
            the booked cost already sits on the trip record with its code, the accrual takes
            minutes.
          </p>
          <p>
            <strong>Unused tickets.</strong> When a flight is canceled, the ticket value can often
            be reused before it expires. Keep a list of open ticket credits by traveler, airline,
            value and expiry date. Check it each month and remind travelers before a credit lapses.
            At year-end, review credits that expired during the year, because they show which teams
            cancel most and whether the booking window needs a change.
          </p>
          <p>
            <strong>Year-end.</strong> Close December with the same checklist, then add three steps:
            confirm that every card program's final statement is matched, clear or accrue every open
            personal-card claim, and save the year's exceptions log for your auditors.
          </p>
          <div className={styles.product}>
            <p className={styles.productK}>From Miraee</p>
            <h2 className={styles.productTitle} id="how-miraee-helps-with-travel-expense-reports">
              How Miraee helps with travel expense reports
            </h2>
            <div className={styles.productBody}>
              <ul>
                <li>Every trip arrives with its GL code and budget, ready for month-end.</li>
                <li>Receipts are matched to card charges and checked against policy.</li>
                <li>Reimbursements are tracked, with a finance dashboard and a full audit log.</li>
              </ul>
              <p>
                <Link to="/finance">See travel and expense management for finance</Link>
              </p>
            </div>
            <MatchView />
          </div>
        </Article>

        <FaqBand id="questions" heading="Questions" items={faq} tone="plum" />

        <Band tone="lilac" aria-labelledby="more-h">
          <SectionHead id="more-h" title="Keep reading" />
          <ul className={styles.related}>
            {related.map((r) => (
              <li key={r.to} className={styles.relatedCard}>
                <Link to={r.to}>
                  <span className={styles.relatedImg}>
                    <picture>
                      <source srcSet={`${r.img}.webp`} type="image/webp" />
                      <img
                        src={`${r.img}.jpg`}
                        width={r.w}
                        height={r.h}
                        alt={r.alt}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </span>
                  <span className={styles.relatedBody}>
                    <span className={styles.relatedK}>{r.k}</span>
                    <span className={styles.relatedT}>{r.t}</span>
                    <span className={styles.relatedD}>{r.d}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.more}>
            <Button asChild variant="tertiary">
              <Link to="/resources">More business travel resources</Link>
            </Button>
          </div>
        </Band>

        <PageClosing
          title={
            <>
              Put every trip <span className={shared.accent}>in one place.</span>
            </>
          }
          lead="Miraee is business travel and expense software. Free to sign up and onboard, at any company size."
          actions={
            <>
              <Button asChild>
                <DialogLink to="/sign-up" dialog="signup">
                  Sign up free
                </DialogLink>
              </Button>
              <Button asChild variant="tertiary">
                <Link to="/how-it-works">See how it works</Link>
              </Button>
            </>
          }
        />
      </main>
    </>
  )
}
Component.displayName = 'TravelExpenseReportPage'
