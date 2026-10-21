import { Link } from 'react-router-dom'

import { Seo } from '@/components/common/seo'
import { Article, Byline, DataTable, FaqBand, PageHero } from '@/components/page/kit'
import { Button } from '@/components/ui/button'
import { PolicyView } from '@/pages/home/product-views'
import {
  HeroPhoto,
  ProductCallout,
  RelatedBand,
  ResourcesClosing,
  ViewFigure,
} from '../overview/guide-parts'
import { faq } from './faq'
import { meta } from './meta'

const TOC = [
  { href: '#what-makes-a-travel-policy-work', label: 'What makes a travel policy work?' },
  { href: '#why-policies-get-ignored', label: 'Why travelers work around a policy' },
  {
    href: '#three-decisions-to-make-before-you-write',
    label: 'Three decisions to make before you write',
  },
  {
    href: '#the-sections-every-business-travel-policy-needs',
    label: 'The sections every business travel policy needs',
  },
  { href: '#how-to-write-rules-people-can-follow', label: 'How to write rules people can follow' },
  {
    href: '#approvals-before-every-trip-or-only-for-exceptions',
    label: 'Approvals: before every trip, or only for exceptions?',
  },
  { href: '#how-to-roll-out-a-new-travel-policy', label: 'How to roll out a new travel policy' },
  { href: '#how-to-keep-the-policy-current', label: 'How to keep the policy current' },
  {
    href: '#how-miraee-applies-your-policy-on-every-booking',
    label: 'How Miraee applies your policy on every booking',
  },
  { href: '#questions', label: 'Questions' },
]

const SECTIONS: Array<[string, string, string]> = [
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
    'Economy for flights under 6 hours; book domestic flights 14 days ahead where the trip allows',
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
    'Paid in the next payroll or payment run after approval',
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
]

/** Route: /resources/business-travel-policy */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <PageHero
          crumbs={[
            { label: 'Home', to: '/' },
            { label: 'Resources', to: '/resources' },
            { label: 'Business travel policy' },
          ]}
          eyebrow="Guide for travel and operations leads"
          title="How to write a travel policy people follow"
          lead="A business travel policy sets how employees book, what they can spend and who approves exceptions. This guide shows how to write one travelers follow, with a checklist you can copy."
          actions={
            <Button asChild>
              <Link to="/resources/business-travel-policy-template">Get the template</Link>
            </Button>
          }
          visual={
            <HeroPhoto
              src="/img/document/resources-guide-travel-policy-1"
              width={2046}
              height={1364}
              alt="A hand pins notes to a planning board of process diagrams."
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
          <h2 id="what-makes-a-travel-policy-work">What makes a travel policy work?</h2>
          <p>
            A travel policy works when following it is the easiest way to book. Keep it short, put a
            number on every limit, name one place to book, and send only the exceptions to an
            approver. Then make the rules visible where people choose flights and hotels, so nobody
            has to open a document to stay inside them.
          </p>

          <h2 id="why-policies-get-ignored">Why travelers work around a policy</h2>
          <p>
            Most companies have a travel policy. Fewer have one that shapes what people book. The
            usual reasons are practical, and they are fixable:
          </p>
          <ul>
            <li>
              <strong>The policy lives in a document.</strong> Travelers read it once at onboarding,
              if at all. When they book three months later, they guess.
            </li>
            <li>
              <strong>The limits are vague.</strong> &quot;Reasonable&quot; hotel rates mean
              something different to every traveler and every approver.
            </li>
            <li>
              <strong>Every trip needs approval.</strong> When approvers see every booking, they
              stop reading them, and the exceptions get approved with the rest.
            </li>
            <li>
              <strong>The booking tool is slower than a consumer site.</strong> Only about a third
              of business travelers prefer their company&apos;s booking tool to consumer sites. When
              the company channel is harder, people book elsewhere and expense it.
            </li>
          </ul>
          <p>
            The last point is the one finance feels. 72% of travel buyers say travelers book cheaper
            hotels outside the company program. Those bookings are hard to see, hard to code and
            hard to help with when plans change. A good policy brings them back by making the
            company channel the simplest one, and by being clear about what happens to bookings made
            elsewhere.
          </p>

          <h2 id="three-decisions-to-make-before-you-write">
            Three decisions to make before you write
          </h2>
          <p>
            <strong>1. Who the policy covers.</strong> Employees, contractors, candidates and guests
            often travel on the company&apos;s budget. Decide whether one policy covers everyone or
            whether guests follow a shorter version.
          </p>
          <p>
            <strong>2. Who owns it.</strong> In a company of 300 to 1,500 people, travel is often
            run by an operations, office or people lead on top of their day job, with finance
            setting the budget. Name one owner for the policy and one approver of changes to it.
            Write both names at the top.
          </p>
          <p>
            <strong>3. Where booking happens.</strong> Name one booking channel for flights and
            hotels. If your agency handles complex trips, say which trips go to the agency and which
            are booked directly. A policy with two equal channels ends up with four.
          </p>

          <h2 id="the-sections-every-business-travel-policy-needs">
            The sections every business travel policy needs
          </h2>
          <p>
            Use this as your checklist. The suggested starting points are common choices for a US
            company of this size; set each one to your own budget and routes.
          </p>
          <DataTable>
            <table>
              <thead>
                <tr>
                  <th scope="col">Section</th>
                  <th scope="col">What to decide</th>
                  <th scope="col">Suggested starting point</th>
                </tr>
              </thead>
              <tbody>
                {SECTIONS.map(([section, decide, start]) => (
                  <tr key={section}>
                    <th scope="row">{section}</th>
                    <td>{decide}</td>
                    <td>{start}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DataTable>
          <p>
            Our{' '}
            <Link to="/resources/business-travel-policy-template">
              business travel policy template
            </Link>{' '}
            turns this table into a complete policy you can edit, with a one-page rollout checklist.
          </p>

          <h2 id="how-to-write-rules-people-can-follow">How to write rules people can follow</h2>
          <p>
            <strong>Put a number on every limit.</strong> &quot;Up to $250 a night in standard
            cities&quot; can be checked by a traveler, an approver and a controller. &quot;A
            reasonable rate&quot; cannot.
          </p>
          <p>
            <strong>Say what people can do first.</strong> &quot;Book economy for flights under 6
            hours&quot; is easier to follow than a list of what is banned. It also reads as trust,
            which helps adoption.
          </p>
          <p>
            <strong>Keep it to a few pages.</strong> Travelers need the booking channel, the limits
            and the approval rule. Put the detail finance needs, such as GL codes and cost centers,
            in the finance section or in the booking tool itself.
          </p>
          <p>
            <strong>Write for the person booking at 10 p.m.</strong> Short sentences, one rule per
            line, and examples for the cases people ask about most: a conference hotel above the
            limit, a flight change, a trip that mixes business and personal days.
          </p>
          <p>
            <strong>Say what happens to exceptions.</strong> An exception with a clear route, such
            as &quot;ask your budget owner before you book&quot;, is followed far more often than a
            rule with no way around it.
          </p>

          <h2 id="approvals-before-every-trip-or-only-for-exceptions">
            Approvals: before every trip, or only for exceptions?
          </h2>
          <p>
            There are two common models, and most companies of this size move from the first to the
            second as they grow.
          </p>
          <p>
            <strong>Pre-trip approval for every trip.</strong> Every booking waits for a manager. It
            gives control, and it creates a queue. Approvers see so many routine trips that the
            important ones blend in.
          </p>
          <p>
            <strong>Approval only when something is out of policy.</strong> Trips inside the rules
            are booked straight away. Anything outside them, such as a hotel above the limit or a
            business-class fare, goes to an approver with the reason attached. Approvers see fewer
            requests, and each one needs a real decision.
          </p>
          <p>
            If you choose the second model, the rules have to be applied at the moment of booking.
            That is where a booking tool that marks each option in or out of policy does the work a
            document cannot.
          </p>

          <h2 id="how-to-roll-out-a-new-travel-policy">How to roll out a new travel policy</h2>
          <ol>
            <li>
              <strong>Agree the numbers with finance.</strong> Flight, hotel and meal limits, the
              approval threshold and the GL codes for travel.
            </li>
            <li>
              <strong>Brief approvers first.</strong> They need to know what will reach them and
              what will not.
            </li>
            <li>
              <strong>Announce it in one message.</strong> The booking channel, the three limits
              people ask about most, and who to ask.
            </li>
            <li>
              <strong>Set it up in the booking tool before the announcement.</strong> The first
              booking after launch should already show the new rules.
            </li>
            <li>
              <strong>Answer questions for two weeks.</strong> Collect them; they tell you which
              rules are unclear.
            </li>
            <li>
              <strong>Review after the first month-end.</strong> Look at bookings outside the
              channel, exceptions approved and receipts missing. Adjust the rules that caused the
              most questions.
            </li>
          </ol>

          <h2 id="how-to-keep-the-policy-current">How to keep the policy current</h2>
          <p>
            Review the policy twice a year, and after any big change in how the company travels: a
            new office, a new client region, a new entity. Hotel limits drift fastest, because city
            rates move every season. Keep a short change log at the end of the policy so travelers
            and approvers can see what changed and when.
          </p>

          <ProductCallout>
            <h2 id="how-miraee-applies-your-policy-on-every-booking">
              How Miraee applies your policy on every booking
            </h2>
            <ul>
              <li>Every option is marked in or out of policy.</li>
              <li>Approvals only come in when something is out of policy.</li>
              <li>Finance sees every trip with its budget and GL code.</li>
            </ul>
            <p>
              <Link to="/travel-managers">
                See a corporate travel booking tool that runs your policy
              </Link>
            </p>
            <ViewFigure label="Travel policy setup screen: hotel, flight and approval rules">
              <PolicyView />
            </ViewFigure>
          </ProductCallout>
        </Article>

        <FaqBand id="questions" heading="Questions" items={faq} tone="plum" />
        <RelatedBand
          slugs={['travel-and-expense-policy', 'travel-policy-compliance', 'travel-expense-report']}
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
Component.displayName = 'BusinessTravelPolicyPage'
