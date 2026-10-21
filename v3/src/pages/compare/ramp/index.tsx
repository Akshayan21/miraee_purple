import { Link } from 'react-router-dom'

import { Seo } from '@/components/common/seo'
import {
  Band,
  DataTable,
  EditorialList,
  FaqBand,
  PageHero,
  SectionHead,
  SmallPrint,
  Split,
} from '@/components/page/kit'
import {
  CompareClosing,
  Copy,
  H2,
  HERO_TRUST,
  HeroActions,
  HeroMeta,
  IllustrativeNote,
  OnThisPage,
  Photo,
  ProofPanel,
  RelatedComparisons,
  WhereFits,
} from '../shared/parts'
import cmp from '../shared/compare.module.css'
import { LedgerView } from '../shared/views'
import { faq } from './faq'
import { meta } from './meta'

const TOC = [
  { href: '#can-we-use-miraee-if-we-run-ramp', label: 'Can we use Miraee if we run Ramp?' },
  { href: '#what-miraee-adds-for-travel', label: 'What Miraee adds for travel' },
  { href: '#how-the-two-work-together', label: 'How the two work together' },
  { href: '#setting-up-miraee-beside-ramp', label: 'Setting up Miraee beside Ramp' },
  { href: '#a-useful-check-on-last-year-s-travel', label: "Check last year's travel first" },
  { href: '#where-each-fits', label: 'Where each fits' },
  { href: '#questions', label: 'Questions' },
]

const STEPS = [
  { title: 'Sign up free.', body: "Create your company's Miraee account." },
  {
    title: 'Onboard with us.',
    body: 'We set up your company, your travel policy and your people with you, and add the corporate cards you already use in payment settings.',
  },
  {
    title: 'Set your rules once.',
    body: 'Travel policy, GL codes and budgets, applied to every booking.',
  },
  {
    title: 'Train your team.',
    body: 'Admins and finance get training as part of onboarding; travelers and assistants start booking inside policy.',
  },
  {
    title: 'Check the first month-end.',
    body: 'Every trip arrives with its budget and GL code, and receipts are matched to card charges.',
  },
]

/** Route: /compare/ramp */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <PageHero
          eyebrow="Comparison"
          title="Miraee with Ramp: travel booking beside the card you keep"
          crumbs={[
            { label: 'Home', to: '/' },
            { label: 'Compare', to: '/compare' },
            { label: 'Miraee with Ramp' },
          ]}
          lead="Miraee is business travel and expense software. If your finance team runs Ramp cards, here is what Miraee adds for travel and how the two work together."
          actions={<HeroActions />}
          note={HERO_TRUST}
          visual={<LedgerView />}
        >
          <HeroMeta>
            Last updated <time dateTime="2026-09-30">September 30, 2026</time> · Competitor facts
            checked September 30, 2026 · Reviewed by Product Marketing
          </HeroMeta>
          <IllustrativeNote dark />
        </PageHero>

        <Band tone="lilac" round>
          <SectionHead
            id="can-we-use-miraee-if-we-run-ramp"
            title="Can we use Miraee if we run Ramp?"
            lead="Yes. Keep the corporate cards you already use, including your Ramp cards. Miraee is the travel layer: your travel policy on every booking, approvals only when something is out of policy, booking on behalf for assistants, and an alert with new options when plans change. Finance sees every trip with its budget and GL code."
          />
          <OnThisPage items={TOC} />
        </Band>

        <Band tone="night" glow>
          <SectionHead
            id="what-miraee-adds-for-travel"
            tone="night"
            title="What Miraee adds for travel"
          />
          <DataTable dark>
            <table>
              <caption className="sr-only">What Miraee adds for travel</caption>
              <thead>
                <tr>
                  <th scope="col">Where travel gets hard</th>
                  <th scope="col">What Miraee does</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Rules that differ by role, team or trip</td>
                  <td>
                    You set your travel policy once, and every flight and hotel option is marked in
                    or out of policy
                  </td>
                </tr>
                <tr>
                  <td>Approval noise</td>
                  <td>
                    Approvals only come in when something is out of policy, so approvers see the
                    trips that need a decision
                  </td>
                </tr>
                <tr>
                  <td>People who book for others</td>
                  <td>
                    Executive assistants and office admins book on behalf of the people they
                    support, in a few steps, inside policy
                  </td>
                </tr>
                <tr>
                  <td>A flight that is delayed or canceled</td>
                  <td>
                    The traveler gets an alert and new options to confirm, and the change is
                    recorded in the audit log
                  </td>
                </tr>
                <tr>
                  <td>Month-end</td>
                  <td>
                    Every booking arrives with its budget and GL code; a finance dashboard and a
                    full audit log of who booked what, and when
                  </td>
                </tr>
              </tbody>
            </table>
          </DataTable>
          <div className={cmp.sectionGap}>
            <Copy dark>
              <p>
                Employees ask the Miraee assistant for a trip and choose flights and hotels inside
                company policy. The assistant suggests. Your approvers decide. See{' '}
                <Link to="/travel-managers">travel policy and approvals</Link> for the travel
                manager's view.
              </p>
            </Copy>
          </div>
        </Band>

        <Band tone="lilac">
          <Split
            reverse
            copy={
              <Copy>
                <H2 id="how-the-two-work-together">How the two work together</H2>
                <p>
                  Your finance team keeps its cards. During onboarding we add the corporate cards
                  you already use in payment settings, set up your company and travel policy, and
                  train your admins and finance team. Travel is booked in Miraee, and receipts are
                  matched to card charges and checked against policy.
                </p>
                <p>
                  Miraee replaces your booking tool and your agency's routine flight and hotel
                  bookings. It sits beside your card and your finance platform. Our guide to{' '}
                  <Link to="/resources/travel-expense-report">travel expense reports</Link> walks
                  through a month-end close for travel, step by step.
                </p>
              </Copy>
            }
            visual={
              <Photo
                name="compare-ramp-hero-1"
                width={2046}
                height={1364}
                alt="A business professional in a green shirt."
              />
            }
          />
        </Band>

        <Band tone="plum">
          <SectionHead
            id="setting-up-miraee-beside-ramp"
            tone="plum"
            title="Setting up Miraee beside Ramp"
          />
          <EditorialList dark items={STEPS} />
        </Band>

        <Band tone="lilac">
          <ProofPanel
            id="a-useful-check-on-last-year-s-travel"
            title="Check last year's travel first"
          >
            <p>
              Most companies book travel in more than one place, even with a company card: a booking
              tool, airline sites, hotel sites, an agency. The Miraee spend review looks at last
              year's travel trip by trip from one file you already have: an agency booking report or
              an expense extract. A corporate card feed is optional and makes it more complete. It
              shows bookings outside your program, spend outside policy, the cost of booking late
              and unused tickets. The review is optional, and the report is yours to keep.
            </p>
          </ProofPanel>
        </Band>

        <Band tone="night">
          <SectionHead id="where-each-fits" tone="night" title="Where each fits" />
          <WhereFits
            dark
            wide
            vendor="Ramp"
            vendorText="Ramp is a finance platform with cards, expense and travel together. If your travel is simple and Ramp Travel covers your rules, it may be all you need."
            miraeeText="Companies of 300 to 1,500 people that travel often, whose rules differ by role or trip, whose assistants book for others, or whose travelers need new options when plans change. Keep the card; add the travel depth."
          />
          <div className={cmp.sectionGap}>
            <Copy dark>
              <p>
                See <Link to="/finance">the finance view</Link>, or go back to{' '}
                <Link to="/compare">compare corporate travel management software</Link>.
              </p>
            </Copy>
          </div>
        </Band>

        <FaqBand id="questions" heading="Questions" items={faq} />

        <RelatedComparisons tone="night" />

        <SmallPrint>
          Ramp are trademarks of their owners. Competitor facts on this page come from each vendor's
          own website, checked September 30, 2026, and are re-checked every 30 days. Miraee facts
          describe the live product. If you see a fact that has changed, tell us at{' '}
          <Link to="/talk-to-sales">Talk to sales</Link> and we will update the page.
        </SmallPrint>

        <CompareClosing title="Start free at any company size" />
      </main>
    </>
  )
}
Component.displayName = 'CompareRampPage'
