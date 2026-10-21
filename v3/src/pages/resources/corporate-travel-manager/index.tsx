import { Link } from 'react-router-dom'

import { Seo } from '@/components/common/seo'
import { Article, Byline, DataTable, FaqBand, PageHero } from '@/components/page/kit'
import { Button } from '@/components/ui/button'
import { AlertPhoneView } from '@/pages/home/product-views'
import {
  Checklist,
  HeroPhoto,
  ProductCallout,
  RelatedBand,
  ResourcesClosing,
  ViewFigure,
} from '../overview/guide-parts'
import { faq } from './faq'
import { meta } from './meta'

const TOC = [
  {
    href: '#what-does-a-corporate-travel-manager-do',
    label: 'What does a corporate travel manager do?',
  },
  { href: '#the-job-in-five-parts', label: 'The job, in five parts' },
  { href: '#your-first-30-days', label: 'Your first 30 days' },
  { href: '#work-with-finance-from-day-one', label: 'Work with finance from day one' },
  { href: '#approvals-that-do-not-become-your-inbox', label: 'Keep approvals out of your inbox' },
  {
    href: '#help-the-people-who-book-for-others',
    label: 'Help the people who book for others',
  },
  { href: '#when-plans-change', label: 'When plans change' },
  { href: '#a-monthly-routine-that-takes-an-hour', label: 'A monthly routine that takes an hour' },
  { href: '#your-first-year-checklist', label: 'Your first-year checklist' },
  {
    href: '#answers-to-the-questions-travelers-ask-most',
    label: 'Answers to the questions travelers ask most',
  },
  {
    href: '#how-miraee-helps-a-part-time-travel-manager',
    label: 'How Miraee helps a part-time travel manager',
  },
  { href: '#questions', label: 'Questions' },
]

const PARTS: Array<[string, string, string]> = [
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
]

const ROUTINE: Array<[string, string]> = [
  ['Check bookings made outside the channel and ask why', '15 minutes'],
  ['Review out-of-policy trips and the rules behind them', '15 minutes'],
  ['Check unused and canceled tickets before they expire', '10 minutes'],
  ['Send finance the one-page monthly view', '10 minutes'],
  ['Note one change to the policy or setup for next month', '10 minutes'],
]

const FIRST_YEAR = [
  'One booking channel named in the policy',
  'A number on every limit, by city tier',
  'Approvals only for out-of-policy trips',
  'Assistants can book on behalf of others',
  'Travelers get an alert and new options when plans change',
  'Every trip carries its budget and GL code',
  'A one-page monthly view shared with finance',
  'Policy reviewed twice a year, with a change log',
]

const ANSWERS: Array<[string, string]> = [
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
  ['When will I get my money back?', 'In the next payment run after your expenses are approved'],
  [
    'Can someone else book for me?',
    'Yes. Assistants and office admins can book on your behalf, with the same rules',
  ],
]

/** Route: /resources/corporate-travel-manager */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <PageHero
          crumbs={[
            { label: 'Home', to: '/' },
            { label: 'Resources', to: '/resources' },
            { label: 'Corporate travel manager guide' },
          ]}
          eyebrow="Guide for operations, office and people leads"
          title="The part-time corporate travel manager's guide"
          lead="In many growing companies, the travel manager is an operations, office or people lead who runs travel on the side. This guide sets out the job in plain steps."
          actions={
            <Button asChild>
              <Link to="/resources/business-travel-policy-template">Get the template</Link>
            </Button>
          }
          visual={
            <HeroPhoto
              src="/img/document/resources-guide-part-time-travel-manager-1"
              width={1364}
              height={2046}
              alt="A smiling man in a white t-shirt."
            />
          }
        >
          <Byline>
            {'By the Miraee team · Reviewed by Product Marketing · Last updated '}
            <time dateTime="2026-09-30">{'September 30, 2026'}</time>
            {' · 8 min read'}
          </Byline>
        </PageHero>

        <Article toc={TOC}>
          <h2 id="what-does-a-corporate-travel-manager-do">
            What does a corporate travel manager do?
          </h2>
          <p>
            A corporate travel manager owns how the company books and pays for business travel: the
            travel policy, the booking channel, approvals, help for travelers when plans change, and
            the reports finance uses. In a growing company it is often a part-time role, so the goal
            is a program that runs on its own most days and needs you only for exceptions.
          </p>

          <h2 id="the-job-in-five-parts">The job, in five parts</h2>
          <DataTable>
            <table>
              <thead>
                <tr>
                  <th scope="col">Part</th>
                  <th scope="col">What you own</th>
                  <th scope="col">What good looks like</th>
                </tr>
              </thead>
              <tbody>
                {PARTS.map(([part, own, good]) => (
                  <tr key={part}>
                    <th scope="row">{part}</th>
                    <td>{own}</td>
                    <td>{good}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DataTable>
          <p>
            You do not need to do all five yourself. You need to know who does each one, and to make
            sure the handoffs work.
          </p>

          <h2 id="your-first-30-days">Your first 30 days</h2>
          <p>
            <strong>Week 1: find out how travel works today.</strong> Ask finance for last
            quarter&apos;s card statements and expense export, and your agency for its booking
            report if you have one. List where trips were booked, who booked them and how many were
            booked by assistants for someone else.
          </p>
          <p>
            <strong>Week 2: read the policy as a traveler would.</strong> Can you tell from the
            document where to book, what hotel you can choose in your most-visited city and who
            approves an exception? Mark every rule that needs a number.
          </p>
          <p>
            <strong>Week 3: agree the numbers with finance.</strong> Hotel limits by city tier,
            cabin class by flight length, the meal limit, the approval rule and the GL codes. Write
            down who can approve a change to each.
          </p>
          <p>
            <strong>Week 4: set up and announce.</strong> Put the rules into the booking tool, brief
            approvers, then send one short message to everyone who travels: where to book, the three
            limits people ask about most, and who to ask.
          </p>
          <p>
            Our <Link to="/resources/business-travel-policy">business travel policy</Link> guide
            covers the writing, and the{' '}
            <Link to="/resources/business-travel-policy-template">
              business travel policy template
            </Link>{' '}
            gives you a complete draft to edit.
          </p>

          <h2 id="work-with-finance-from-day-one">Work with finance from day one</h2>
          <p>Finance usually owns the travel budget, so make them a partner early:</p>
          <ul>
            <li>
              <strong>Agree what finance needs from every trip.</strong> Budget, cost center, entity
              and GL code, attached at booking.
            </li>
            <li>
              <strong>Agree the month-end handoff.</strong> Which reports you send, when, and what
              counts as an exception.
            </li>
            <li>
              <strong>Share one monthly view.</strong> Trips booked, spend against budget,
              out-of-policy spend and unused tickets. Keep it to one page.
            </li>
          </ul>
          <p>
            A travel lead who arrives at the budget meeting with trip-level numbers gets a very
            different conversation from one who arrives with a card statement.
          </p>

          <h2 id="approvals-that-do-not-become-your-inbox">Keep approvals out of your inbox</h2>
          <p>
            If every trip needs approval, the travel manager ends up chasing managers on behalf of
            travelers. Move to approval only when something is out of policy:
          </p>
          <ol>
            <li>Trips inside the rules book straight away.</li>
            <li>Anything outside them goes to the traveler&apos;s approver, with the reason.</li>
            <li>
              You review the pattern once a month: which rules cause most exceptions, and whether
              the limits still fit.
            </li>
          </ol>
          <p>This keeps approvals meaningful and keeps you out of the loop for routine trips.</p>

          <h2 id="help-the-people-who-book-for-others">Help the people who book for others</h2>
          <p>
            Executive assistants and office admins often book more trips than anyone else in the
            company. Make their work faster:
          </p>
          <ul>
            <li>
              Let them book on behalf of the people they support, with each traveler&apos;s details
              on file.
            </li>
            <li>Show them the same in-policy and out-of-policy marks the traveler would see.</li>
            <li>Give them one place to see the upcoming trips they booked.</li>
          </ul>
          <p>
            When assistants find the company channel quicker than the alternatives, a large share of
            your bookings follows.
          </p>

          <h2 id="when-plans-change">When plans change</h2>
          <p>
            A delayed or canceled flight is where travelers decide whether to trust the program. It
            is also the hardest part of the job: 64% of travel managers say changes and
            cancellations are hard in their booking tool.
          </p>
          <p>Set up the basics before you need them:</p>
          <ul>
            <li>
              <strong>Tell travelers where to go first.</strong> The booking channel&apos;s app or
              help line, stated in the policy.
            </li>
            <li>
              <strong>Make changes visible.</strong> The traveler should see what happened and the
              new options in the same place they booked, and confirm the one that suits them.
            </li>
            <li>
              <strong>Record every change.</strong> The travel lead and finance should see the new
              flight and any fare difference without asking.
            </li>
            <li>
              <strong>Name one company contact</strong> for the cases the tool cannot solve, such as
              a traveler who needs a hotel tonight in a city with no rooms.
            </li>
          </ul>
          <p>
            After each disruption, ask the traveler one question: what would have made this easier?
            The answers improve the program faster than any survey.
          </p>
          <ViewFigure
            tone="plum"
            label="Phone alert: the 6:40 a.m. flight to Chicago is delayed, with two new options at the same fare"
          >
            <AlertPhoneView />
          </ViewFigure>

          <h2 id="a-monthly-routine-that-takes-an-hour">A monthly routine that takes an hour</h2>
          <DataTable>
            <table>
              <thead>
                <tr>
                  <th scope="col">Step</th>
                  <th scope="col">Time</th>
                </tr>
              </thead>
              <tbody>
                {ROUTINE.map(([step, time]) => (
                  <tr key={step}>
                    <td>{step}</td>
                    <td>{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DataTable>
          <p>
            Our guide to{' '}
            <Link to="/resources/travel-policy-compliance">travel policy compliance</Link> explains
            how to measure bookings outside the channel and out-of-policy spend.
          </p>

          <h2 id="your-first-year-checklist">Your first-year checklist</h2>
          <Checklist items={FIRST_YEAR} />

          <h2 id="answers-to-the-questions-travelers-ask-most">
            Answers to the questions travelers ask most
          </h2>
          <p>
            Most of a part-time travel manager&apos;s week goes on the same handful of questions.
            Write the answers once, put them at the end of the policy, and link to them from the
            booking tool.
          </p>
          <DataTable>
            <table>
              <thead>
                <tr>
                  <th scope="col">Question</th>
                  <th scope="col">A clear answer</th>
                </tr>
              </thead>
              <tbody>
                {ANSWERS.map(([q, a]) => (
                  <tr key={q}>
                    <td>{q}</td>
                    <td>{a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DataTable>
          <p>
            Each answer you publish is a message you do not have to write again. Review the list
            every quarter and add the new questions that came up.
          </p>

          <ProductCallout>
            <h2 id="how-miraee-helps-a-part-time-travel-manager">
              How Miraee helps a part-time travel manager
            </h2>
            <ul>
              <li>Every option is marked in or out of policy.</li>
              <li>Approvals only reach you when something is out of policy.</li>
              <li>When plans change, your traveler gets an alert and new options to confirm.</li>
            </ul>
            <p>
              <Link to="/travel-managers">See Miraee for travel managers</Link>
            </p>
          </ProductCallout>
        </Article>

        <FaqBand id="questions" heading="Questions" items={faq} tone="plum" />
        <RelatedBand
          slugs={[
            'business-travel-policy',
            'travel-and-expense-policy',
            'travel-policy-compliance',
          ]}
        />
        <ResourcesClosing
          title="Put every trip in one place."
          accent="in one place."
          body="Miraee is business travel and expense software. Free to sign up and onboard, at any company size."
          secondary={{ label: 'See how it works', to: '/how-it-works' }}
        />
      </main>
    </>
  )
}
Component.displayName = 'CorporateTravelManagerPage'
