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
import { TripTagView } from './views'

const toc = [
  {
    href: '#what-should-a-travel-and-expense-policy-include',
    label: 'What should a travel and expense policy include?',
  },
  {
    href: '#travel-policy-expense-policy-or-both',
    label: 'Travel policy, expense policy or both?',
  },
  { href: '#the-sections-to-include', label: 'The sections to include' },
  { href: '#example-wording-you-can-copy', label: 'Example wording you can copy' },
  { href: '#limits-that-finance-can-defend', label: 'Limits that finance can defend' },
  { href: '#code-every-trip-at-the-start', label: 'Code every trip at the start' },
  { href: '#receipts-and-reimbursement', label: 'Receipts and reimbursement' },
  {
    href: '#how-to-review-claims-without-slowing-everyone-down',
    label: 'How to review claims without slowing everyone down',
  },
  { href: '#exceptions-you-will-see-every-month', label: 'Exceptions you will see every month' },
  {
    href: '#how-miraee-supports-a-travel-and-expense-policy',
    label: 'How Miraee supports a travel and expense policy',
  },
  { href: '#questions', label: 'Questions' },
]

const sections: Array<[string, string, string]> = [
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
  ['Receipts', 'What a valid receipt shows, and what to do when one is lost', 'Travelers, AP'],
  ['Submission deadline', 'How many days after the trip expenses are due', 'Travelers, AP'],
  ['Approval', 'Who approves, and what they check', 'Approvers'],
  ['Coding', 'Which GL codes, cost centers and entities apply', 'Finance'],
  ['Reimbursement', 'When and how employees are paid back', 'Travelers, payroll'],
  [
    'Audit and exceptions',
    'How claims are checked, and how exceptions are handled',
    'Finance, auditors',
  ],
]

const wording: Array<[string, string]> = [
  [
    'Scope.',
    ' "This policy applies to employees and contractors who travel or spend on the company\'s behalf. Expenses must be necessary for the business purpose of the trip."',
  ],
  [
    'Reimbursable items.',
    ' "The company pays for economy flights, hotels within the nightly limit, ground transport to and from business locations, meals up to the daily limit, and business calls and internet while traveling. Personal items, upgrades you choose, fines and in-room entertainment are personal costs."',
  ],
  [
    'Hotels.',
    ' "Book hotels within the nightly limit for your destination city. If the event hotel costs more, book it and add the reason when you book."',
  ],
  [
    'Meals.',
    ' "Meals are reimbursed at actual cost up to the daily limit for your destination. Client meals are approved by the budget owner and list the attendees and the business purpose."',
  ],
  [
    'Corporate card.',
    ' "Use your corporate card for flights, hotels and ground transport. Keep personal spending off the card. If a personal charge lands on it by mistake, flag it within five business days."',
  ],
  [
    'Receipts.',
    ' "Upload an itemized receipt for every expense. A valid receipt shows the merchant, date, items and amount paid. If you lose one, submit a short written statement with the same details."',
  ],
  [
    'Deadline.',
    ' "Submit expenses within 30 days of the end of your trip. Claims older than 90 days need approval from finance."',
  ],
  [
    'Approval.',
    ' "Your manager approves your expenses. The approver checks that each item has a business purpose, sits within policy and has a receipt."',
  ],
  [
    'Coding.',
    ' "Every trip is coded to a cost center and GL code before booking. Finance sets the codes; travelers do not choose them."',
  ],
  ['Reimbursement.', ' "Approved expenses are paid in the next payment run."'],
]

const exceptions: Array<[string, string]> = [
  [
    'The event hotel is above the limit.',
    ' "Book the event hotel and add the reason when you book. It counts as in policy with the reason attached."',
  ],
  [
    'A traveler adds personal days.',
    ' "The company pays the flight if it costs the same or less than the business-only trip. Extra hotel nights and costs on personal days are yours."',
  ],
  [
    'A flight is canceled and the new one costs more.',
    ' "Confirm the new flight in the booking tool. The fare difference is recorded against the trip and needs no separate approval."',
  ],
  [
    'A client pays for part of the trip.',
    ' "Book as normal and note the client\'s share on the trip. Finance recharges it."',
  ],
  [
    'Two employees share a car or a room.',
    ' "One person claims the cost and lists the other traveler on the expense."',
  ],
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
    to: '/resources/travel-policy-compliance',
    img: '/img/document/resources-guide-policy-compliance-1',
    w: 2046,
    h: 1366,
    alt: 'An aisle of airline seats with passengers in a full cabin.',
    k: 'Travel leads',
    t: 'Travel policy compliance: make the right option the easy one',
    d: 'Why people book outside the program, and seven ways to bring bookings back.',
  },
  {
    to: '/resources/travel-expense-report',
    img: '/img/document/resources-guide-expense-reports-1',
    w: 2046,
    h: 1364,
    alt: 'A team meets in a glass-walled conference room.',
    k: 'Finance',
    t: 'Travel expense reports: close month-end with fewer receipts to chase',
    d: 'What a good report contains, plus a travel month-end close checklist.',
  },
]

/** Route: /resources/travel-and-expense-policy */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <PageHero
          crumbs={[
            { label: 'Home', to: '/' },
            { label: 'Resources', to: '/resources' },
            { label: 'Travel and expense policy' },
          ]}
          eyebrow="Guide for controllers and finance teams"
          title="Travel and expense policy: what to include, with examples"
          lead="A travel and expense policy tells employees what the company pays for, how to claim it and when they are repaid. This guide lists what to include, with wording you can copy."
          actions={
            <Button asChild>
              <Link to="/resources/business-travel-policy-template">Get the template</Link>
            </Button>
          }
          visual={
            <picture>
              <source srcSet="/img/document/resources-guide-t-e-policy-1.webp" type="image/webp" />
              <img
                className={styles.heroImg}
                src="/img/document/resources-guide-t-e-policy-1.jpg"
                width="2046"
                height="1366"
                alt="Two colleagues review figures on paper beside open laptops."
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
          <h2 id="what-should-a-travel-and-expense-policy-include">
            What should a travel and expense policy include?
          </h2>
          <p>
            A travel and expense policy should cover what is reimbursable, the limits for flights,
            hotels, meals and ground transport, what counts as a valid receipt, the deadline to
            submit, who approves, how expenses are coded and when employees are paid back. Write
            each rule with a number and an example, so employees, approvers and auditors read it the
            same way.
          </p>
          <h2 id="travel-policy-expense-policy-or-both">Travel policy, expense policy or both?</h2>
          <p>
            A business travel policy covers booking: where to book, cabin class, hotel limits and
            approvals. An expense policy covers what happens after the money is spent: receipts,
            submission, review and reimbursement. For a company of 300 to 1,500 people, one combined
            travel and expense policy is usually easier to maintain, because the same limits apply
            before and after the trip.
          </p>
          <p>
            If you already have a booking policy, keep it and add the expense sections below. Our
            guide on{' '}
            <Link to="/resources/business-travel-policy">
              how to write a business travel policy
            </Link>{' '}
            covers the booking side.
          </p>
          <h2 id="the-sections-to-include">The sections to include</h2>
          <DataTable>
            <table>
              <thead>
                <tr>
                  <th scope="col">Section</th>
                  <th scope="col">What it answers</th>
                  <th scope="col">Who reads it most</th>
                </tr>
              </thead>
              <tbody>
                {sections.map(([a, b, c]) => (
                  <tr key={a}>
                    <td>{a}</td>
                    <td>{b}</td>
                    <td>{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DataTable>
          <h2 id="example-wording-you-can-copy">Example wording you can copy</h2>
          <p>
            Each example below is written to be read once and remembered. Adjust the numbers to your
            own budget.
          </p>
          <div className={styles.examples}>
            {wording.map(([k, v]) => (
              <p key={k} className={styles.ex}>
                <strong>{k}</strong>
                {v}
              </p>
            ))}
          </div>
          <h2 id="limits-that-finance-can-defend">Limits that finance can defend</h2>
          <p>
            Limits work when a traveler can check them before spending and an auditor can check them
            after. Three habits help:
          </p>
          <ol>
            <li>
              <strong>Set limits by city tier, and review them twice a year.</strong> A single
              national hotel limit either blocks trips to your most expensive cities or leaves room
              everywhere else.
            </li>
            <li>
              <strong>Separate the limit from the approval.</strong> "Up to $250 a night; above
              that, ask your budget owner" is clearer than a limit with silent exceptions.
            </li>
            <li>
              <strong>Use the same numbers in the booking tool.</strong> When the limits in the tool
              match the policy, most out-of-policy spend is stopped or explained before it happens.
            </li>
          </ol>
          <h2 id="code-every-trip-at-the-start">Code every trip at the start</h2>
          <p>
            The fastest month-ends begin at booking. When every trip carries its cost center and GL
            code from the moment it is booked, the controller spends the close reviewing exceptions
            instead of chasing codes. It also answers the CFO's first question about travel, "where
            did the money go?", by team and by trip.
          </p>
          <p>
            This is harder than it sounds in many companies, because travel data sits in several
            places: agency reports, card statements, expense reports and hotel folios. Only 12% of
            travel programs have their data in one place. A policy that names the codes, and a tool
            that applies them at booking, closes most of that gap.
          </p>
          <h2 id="receipts-and-reimbursement">Receipts and reimbursement</h2>
          <p>The receipt section causes the most questions, so answer them in advance:</p>
          <ul>
            <li>
              <strong>Which receipts count.</strong> Itemized receipts, not card slips.
            </li>
            <li>
              <strong>How to submit.</strong> Upload a photo or file; the original paper is optional
              unless your auditors ask for it.
            </li>
            <li>
              <strong>What happens to a lost receipt.</strong> A short written statement with
              merchant, date, items and amount.
            </li>
            <li>
              <strong>How long reimbursement takes.</strong> State the payment run, so employees
              know when to expect their money back.
            </li>
          </ul>
          <p>
            Employees remember how quickly they were paid back more than any other part of the
            policy. A clear date buys a lot of goodwill.
          </p>
          <h2 id="how-to-review-claims-without-slowing-everyone-down">
            How to review claims without slowing everyone down
          </h2>
          <p>
            Review every claim against three questions: is there a business purpose, is it within
            policy, is there a valid receipt? Most claims pass all three. Spend your review time on
            the ones that do not, on repeated exceptions from the same traveler or team, and on
            charges that appear on a card with no matching receipt.
          </p>
          <p>
            At quarter-end, look at the pattern rather than the single claim: which limits are
            exceeded most, which teams book outside the channel, which receipts go missing. Those
            patterns tell you which rule to change.
          </p>
          <h2 id="exceptions-you-will-see-every-month">Exceptions you will see every month</h2>
          <p>
            A few situations come up so often that the policy should answer them by name. Each
            answer below keeps the traveler moving and gives finance a record.
          </p>
          <div className={styles.examples}>
            {exceptions.map(([k, v]) => (
              <p key={k} className={styles.ex}>
                <strong>{k}</strong>
                {v}
              </p>
            ))}
          </div>
          <p>Each of these, written once, removes a recurring email from someone's inbox.</p>
          <aside className={styles.callout} aria-label="Business travel policy template">
            <div>
              <p className={styles.calloutK}>Free template</p>
              <p className={styles.calloutH}>
                The Business Travel Policy Template for Growing Companies
              </p>
              <p className={styles.calloutB}>
                A complete travel and expense policy you can edit, with a one-page rollout
                checklist.
              </p>
            </div>
            <Button asChild>
              <Link to="/resources/business-travel-policy-template">Get the template</Link>
            </Button>
          </aside>
          <div className={styles.product}>
            <p className={styles.productK}>From Miraee</p>
            <h2
              className={styles.productTitle}
              id="how-miraee-supports-a-travel-and-expense-policy"
            >
              How Miraee supports a travel and expense policy
            </h2>
            <div className={styles.productBody}>
              <ul>
                <li>
                  Set your travel policy, GL codes and budgets once, and Miraee applies them to
                  every booking.
                </li>
                <li>Receipts are matched to card charges and checked against policy.</li>
                <li>Reimbursements are tracked, with a finance dashboard and a full audit log.</li>
              </ul>
              <p>
                <Link to="/finance">See travel and expense management for finance</Link>
              </p>
            </div>
            <TripTagView />
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
Component.displayName = 'TravelAndExpensePolicyPage'
