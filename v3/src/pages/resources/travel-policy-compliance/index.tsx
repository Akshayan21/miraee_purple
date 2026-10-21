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
import { FlightsView } from './views'

const toc = [
  {
    href: '#how-do-you-improve-travel-policy-compliance',
    label: 'How do you improve travel policy compliance?',
  },
  { href: '#what-compliance-means-in-practice', label: 'What compliance means in practice' },
  {
    href: '#why-travelers-book-outside-the-program',
    label: 'Why travelers book outside the program',
  },
  { href: '#seven-ways-to-raise-compliance', label: 'Seven ways to raise compliance' },
  { href: '#how-to-measure-compliance', label: 'How to measure compliance' },
  { href: '#reading-the-results', label: 'Reading the results' },
  { href: '#a-30-day-plan', label: 'A 30-day plan' },
  {
    href: '#how-to-talk-to-teams-about-compliance',
    label: 'How to talk to teams about compliance',
  },
  {
    href: '#how-miraee-helps-keep-bookings-inside-policy',
    label: 'How Miraee helps keep bookings inside policy',
  },
  { href: '#questions', label: 'Questions' },
]

const outside: Array<[string, string]> = [
  [
    'The company tool feels slower.',
    " Only about a third of business travelers prefer their company's booking tool to consumer sites.",
  ],
  [
    'The price looks better elsewhere.',
    ' 72% of travel buyers say travelers book cheaper hotels outside the company program.',
  ],
  [
    'The rules are unclear.',
    ' If a traveler cannot tell whether a hotel is allowed, the safest choice feels like booking it and explaining later.',
  ],
  [
    'Approvals are slow.',
    ' When every trip waits for a manager, a traveler with a meeting tomorrow books first and asks second.',
  ],
]

const ways: Array<[string, string]> = [
  [
    '1. Name one channel for flights and hotels.',
    ' Say it in the first line of the policy. If the agency handles complex trips, say which ones.',
  ],
  [
    '2. Put a number on every limit.',
    ' Hotel limits by city tier, cabin class by flight length, a daily meal limit. Numbers can be checked; adjectives cannot.',
  ],
  [
    '3. Show the policy in the search results.',
    ' When every option is marked in or out of policy, travelers stop guessing. This single change does more for compliance than any reminder email.',
  ],
  [
    '4. Approve only the exceptions.',
    ' Trips inside the rules should book straight away. Anything outside them goes to an approver with the reason attached. Approvers read each request because each one needs a decision.',
  ],
  [
    '5. Give exceptions a clear route.',
    ' "The event hotel is above the limit: book it and add the reason" is followed. A rule with no way around it is broken quietly.',
  ],
  [
    '6. Make the right option faster for people who book for others.',
    " Assistants and office admins often book more trips than anyone. Let them book on behalf of the people they support, with the traveler's details on file and the policy applied.",
  ],
  [
    '7. Make help easy when plans change.',
    ' Travelers who were stuck on hold during a canceled flight book elsewhere next time. When a flight changes, they should see what happened and new options to confirm in the same place they booked.',
  ],
]

const measures: Array<[string, string, string]> = [
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
    'Trips booked inside the booking window, such as less than 7 days ahead',
    'Where planning, not policy, is the problem',
  ],
  [
    'Unused tickets',
    'Tickets canceled and not reused before they expire',
    'Money that is recoverable with tracking',
  ],
]

const results: Array<[string, string]> = [
  [
    'Low channel share:',
    ' look at who books outside and what they book. Often it is one team, one route or one hotel.',
  ],
  [
    'Low in-policy rate in the channel:',
    ' your limits may be out of date. Compare the limit with what travelers actually pay in each city.',
  ],
  [
    'Many exceptions approved after the fact:',
    ' the approval route is too slow, or travelers do not know it exists.',
  ],
  [
    'High late-booking cost:',
    ' talk to the teams that plan client visits. A booking window works when it matches how work is scheduled.',
  ],
]

const plan: Array<[string, string]> = [
  [
    '1',
    "Pull last quarter's booking report and expense export. Calculate channel share and in-policy rate",
  ],
  [
    '2',
    'Update the three limits that cause the most exceptions. Name one booking channel in the policy',
  ],
  [
    '3',
    'Set the limits up in the booking tool so every option shows in or out of policy. Switch approvals to exceptions only',
  ],
  ['4', 'Announce the changes in one message. Measure again after the next month-end'],
]

const talk: Array<[string, string]> = [
  [
    "Share the team's own numbers.",
    ' "Your team booked 40 trips last quarter, and 12 were booked outside the tool" starts a better conversation than a company-wide percentage.',
  ],
  [
    'Ask what made the other option easier.',
    ' The answer is usually specific: a hotel near a client site that the tool did not show, a flight time that suits the meeting, an approval that came too late.',
  ],
  [
    'Fix one thing and tell them.',
    ' When a team sees its feedback change a limit or a setting, it books through the channel more often.',
  ],
  [
    'Thank the people who book for others.',
    " Assistants who move their executives' trips into the channel change the numbers more than anyone.",
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

/** Route: /resources/travel-policy-compliance */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <PageHero
          crumbs={[
            { label: 'Home', to: '/' },
            { label: 'Resources', to: '/resources' },
            { label: 'Travel policy compliance' },
          ]}
          eyebrow="Guide for travel and operations leads"
          title="Travel policy compliance: make the right option the easy one"
          lead="Travel policy compliance is the share of trips booked the way your policy says. This guide shows how to measure it and raise it by making the in-policy option the easiest one."
          actions={
            <Button asChild>
              <Link to="/resources/business-travel-policy-template">Get the template</Link>
            </Button>
          }
          visual={
            <picture>
              <source
                srcSet="/img/document/resources-guide-policy-compliance-1.webp"
                type="image/webp"
              />
              <img
                className={styles.heroImg}
                src="/img/document/resources-guide-policy-compliance-1.jpg"
                width="2046"
                height="1366"
                alt="An aisle of airline seats with passengers in a full cabin."
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
          <h2 id="how-do-you-improve-travel-policy-compliance">
            How do you improve travel policy compliance?
          </h2>
          <p>
            Make the in-policy option the easiest one to book. Name one booking channel, put a
            number on every limit, show whether each flight and hotel fits the policy at the moment
            of choice, and send only exceptions to an approver. Then measure bookings outside the
            channel and out-of-policy spend every month, and fix the rules that cause them.
          </p>
          <h2 id="what-compliance-means-in-practice">What compliance means in practice</h2>
          <p>Compliance has three parts, and it helps to track them separately:</p>
          <ol>
            <li>
              <strong>Channel.</strong> Was the trip booked through the company's booking channel,
              or somewhere else and expensed later?
            </li>
            <li>
              <strong>Limits.</strong> Did the flight, hotel and other costs fall inside the
              policy's numbers?
            </li>
            <li>
              <strong>Approval.</strong> Where the trip was outside policy, was it approved before
              booking, with a reason?
            </li>
          </ol>
          <p>
            A company can do well on one and badly on another. A team that books everything through
            the company tool but routinely picks hotels above the limit has a limits problem, and
            the fix is different from a team that books on consumer sites.
          </p>
          <h2 id="why-travelers-book-outside-the-program">
            Why travelers book outside the program
          </h2>
          <p>
            Travelers rarely leave the program to break the rules. They leave because another option
            looks easier or cheaper at the moment they book.
          </p>
          <ul>
            {outside.map(([k, v]) => (
              <li key={k}>
                <strong>{k}</strong>
                {v}
              </li>
            ))}
          </ul>
          <p>Each reason points to a fix. Sending the policy document again solves none of them.</p>
          <h2 id="seven-ways-to-raise-compliance">Seven ways to raise compliance</h2>
          <div className={styles.examples}>
            {ways.map(([k, v]) => (
              <p key={k} className={styles.ex}>
                <strong>{k}</strong>
                {v}
              </p>
            ))}
          </div>
          <h2 id="how-to-measure-compliance">How to measure compliance</h2>
          <p>Measure monthly, with the same definitions each time. A simple scorecard is enough:</p>
          <DataTable>
            <table>
              <thead>
                <tr>
                  <th scope="col">Measure</th>
                  <th scope="col">How to calculate it</th>
                  <th scope="col">What it tells you</th>
                </tr>
              </thead>
              <tbody>
                {measures.map(([a, b, c]) => (
                  <tr key={a}>
                    <td>{a}</td>
                    <td>{b}</td>
                    <td>{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DataTable>
          <p>
            Start with the numbers you can get today. If your agency sends a booking report and your
            expense system can export claims, you can build the first two measures in an afternoon
            by matching trips across the two files.
          </p>
          <h2 id="reading-the-results">Reading the results</h2>
          <ul>
            {results.map(([k, v]) => (
              <li key={k}>
                <strong>{k}</strong>
                {v}
              </li>
            ))}
          </ul>
          <h2 id="a-30-day-plan">A 30-day plan</h2>
          <DataTable>
            <table>
              <thead>
                <tr>
                  <th scope="col">Week</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {plan.map(([a, b]) => (
                  <tr key={a}>
                    <td>{a}</td>
                    <td>{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DataTable>
          <h2 id="how-to-talk-to-teams-about-compliance">How to talk to teams about compliance</h2>
          <p>
            Compliance numbers land better as a conversation than as a report card. A few habits
            help:
          </p>
          <ul>
            {talk.map(([k, v]) => (
              <li key={k}>
                <strong>{k}</strong>
                {v}
              </li>
            ))}
          </ul>
          <p>
            Keep the tone practical. The goal is a program that people choose because it is easier,
            and finance can see because it is complete.
          </p>
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
            <h2 className={styles.productTitle} id="how-miraee-helps-keep-bookings-inside-policy">
              How Miraee helps keep bookings inside policy
            </h2>
            <div className={styles.productBody}>
              <ul>
                <li>Every flight and hotel option is marked in or out of policy.</li>
                <li>Approvals only come in when something is out of policy.</li>
                <li>A full audit log shows who booked what, and when.</li>
              </ul>
              <p>
                <Link to="/travel-managers">See policy on every booking</Link>
              </p>
            </div>
            <FlightsView />
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
Component.displayName = 'TravelPolicyCompliancePage'
