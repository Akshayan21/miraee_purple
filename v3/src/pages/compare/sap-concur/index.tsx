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
import { FinanceDashboardView, PolicyView } from '@/pages/home/product-views'
import {
  Beat,
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
  TableNote,
  WhereFits,
} from '../shared/parts'
import cmp from '../shared/compare.module.css'
import { faq } from './faq'
import { meta } from './meta'

const TOC = [
  {
    href: '#how-does-miraee-compare-with-sap-concur',
    label: 'How does Miraee compare with SAP Concur?',
  },
  { href: '#miraee-and-sap-concur-side-by-side', label: 'Miraee and SAP Concur, side by side' },
  { href: '#what-does-it-take-to-get-started', label: 'What does it take to get started?' },
  {
    href: '#how-do-travel-policy-and-approvals-work',
    label: 'How do travel policy and approvals work?',
  },
  { href: '#what-does-finance-see-at-month-end', label: 'What does finance see at month-end?' },
  { href: '#what-happens-when-plans-change', label: 'What happens when plans change?' },
  {
    href: '#check-last-year-s-travel-from-your-concur-extract',
    label: "Check last year's travel from your Concur extract",
  },
  { href: '#where-each-fits', label: 'Where each fits' },
  { href: '#questions', label: 'Questions' },
]

const FOUR_THINGS = [
  { title: 'Bookings made outside your travel program' },
  { title: 'Spend outside policy' },
  { title: 'The cost of booking late, on your own routes' },
  { title: 'Unused or expired tickets' },
]

/** Route: /compare/sap-concur */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <PageHero
          eyebrow="Comparison"
          title="SAP Concur alternatives: Miraee vs SAP Concur"
          crumbs={[
            { label: 'Home', to: '/' },
            { label: 'Compare', to: '/compare' },
            { label: 'Miraee vs SAP Concur' },
          ]}
          lead="Miraee is business travel and expense software. Renewing SAP Concur? Here is how the two compare on getting started, policy, approvals and the finance view. Every Concur fact is dated."
          actions={<HeroActions />}
          note={HERO_TRUST}
          visual={
            <div
              role="img"
              aria-label="Travel policy setup screen: hotel, flight and approval rules"
            >
              <PolicyView />
            </div>
          }
        >
          <HeroMeta>
            Last updated <time dateTime="2026-09-30">September 30, 2026</time> · Competitor facts
            checked September 30, 2026 · Reviewed by Product Marketing
          </HeroMeta>
          <IllustrativeNote dark />
        </PageHero>

        <Band tone="lilac" round>
          <SectionHead
            id="how-does-miraee-compare-with-sap-concur"
            title="How does Miraee compare with SAP Concur?"
            lead="SAP Concur offers travel, expense and invoice products, priced on request (concur.com, checked September 30, 2026). Miraee is business travel and expense software with free sign-up and free onboarding at any company size, including your travel policy and training for admins and finance. You can also review last year's travel from your Concur expense extract before you decide."
          />
          <OnThisPage items={TOC} />
          <div className={cmp.sectionGap}>
            <SectionHead
              id="miraee-and-sap-concur-side-by-side"
              title="Miraee and SAP Concur, side by side"
            />
            <DataTable>
              <table>
                <caption className="sr-only">Miraee and SAP Concur, side by side</caption>
                <thead>
                  <tr>
                    <th scope="col">
                      <span className="sr-only">Item</span>
                    </th>
                    <th scope="col">SAP Concur</th>
                    <th scope="col">Miraee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">What it is</th>
                    <td>"Simple, connected spend & travel management" (concur.com)</td>
                    <td>
                      Business travel and expense software, with a travel assistant for every
                      employee and the controls finance needs
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Products</th>
                    <td>
                      Concur Travel, Concur Expense and Concur Invoice, plus Request, Budget,
                      Detect, Intelligent Audit and Analytics
                    </td>
                    <td>
                      Travel booking, travel policy and approvals, expense with receipts matched to
                      card charges, a finance dashboard and an audit log
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Pricing</th>
                    <td>Request pricing; prices are not published</td>
                    <td>Sign-up and onboarding free at any company size</td>
                  </tr>
                  <tr>
                    <th scope="row">Getting started</th>
                    <td>Through a quote request (concur.com)</td>
                    <td>
                      Free onboarding: company setup, travel policy, employee onboarding and payment
                      settings, with training for admins and finance
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Travel policy</th>
                    <td>
                      "Apply and update spending policies instantly" for expense; an AI assistant
                      "trained on your policies" for travel (concur.com)
                    </td>
                    <td>
                      Every option marked in or out of policy; approvals only when something is out
                      of policy
                    </td>
                  </tr>
                </tbody>
              </table>
            </DataTable>
            <TableNote>
              SAP Concur facts: concur.com, checked September 30, 2026. Miraee facts describe the
              live product.
            </TableNote>
          </div>
        </Band>

        <Band tone="plum">
          <Beat
            id="what-does-it-take-to-get-started"
            title="What does it take to get started?"
            dark
          >
            <p>
              SAP Concur is priced by quote. Miraee sign-up and onboarding are free at any company
              size.
            </p>
            <p>
              Onboarding is where most travel tools win or lose the people who use them. With Miraee
              we set up your company, your travel policy and your people with you, connect the
              corporate cards you already use in payment settings, and train your admins and finance
              team. That work is part of the free start. See{' '}
              <Link to="/pricing">free onboarding</Link> for what is included.
            </p>
          </Beat>
        </Band>

        <Band tone="lilac">
          <Split
            reverse
            copy={
              <Copy>
                <H2 id="how-do-travel-policy-and-approvals-work">
                  How do travel policy and approvals work?
                </H2>
                <p>
                  A policy people can follow is one they never have to look up. In Miraee, you set
                  the policy once and every flight and hotel option shows whether it is in or out of
                  policy. Travelers choose from options that already fit. Approvals only come in
                  when something is out of policy, so approvers see the trips that need a decision.
                </p>
                <p>
                  Employees ask the Miraee assistant for a trip and choose flights and hotels inside
                  company policy. The assistant suggests. Your approvers decide. Executive
                  assistants and office admins can book on behalf of the people they support, in a
                  few steps.
                </p>
              </Copy>
            }
            visual={
              <Photo
                name="compare-sap-concur-hero-1"
                width={1366}
                height={2047}
                alt="A business professional in a striped blouse."
              />
            }
          />
        </Band>

        <Band tone="night" glow>
          <Split
            dark
            copy={
              <Copy dark>
                <H2 id="what-does-finance-see-at-month-end">What does finance see at month-end?</H2>
                <p>
                  Every booking arrives with its budget and GL code. Finance gets a dashboard for
                  every trip, finance analytics and a full audit log of who booked what, and when.
                  Receipts are matched to card charges and checked against policy, and
                  reimbursements are tracked.
                </p>
                <p>
                  Our guide to{' '}
                  <Link to="/resources/travel-expense-report">travel expense reports</Link> covers
                  the month-end steps that take the longest, and how to shorten them in any tool.
                  See <Link to="/finance">travel and expense management for finance</Link> for the
                  Miraee screens.
                </p>
                <IllustrativeNote dark />
              </Copy>
            }
            visual={
              <div role="img" aria-label="Finance dashboard listing trips with budget and GL code">
                <FinanceDashboardView />
              </div>
            }
          />
        </Band>

        <Band tone="plum">
          <Beat id="what-happens-when-plans-change" title="What happens when plans change?" dark>
            <p>
              When a flight is delayed or canceled, the traveler gets an alert and new options to
              confirm, in the app. The change and any fare difference are recorded in the audit log.
              Changes and cancellations are a common sore point: 64% of travel managers say they are
              hard in their booking tool.
            </p>
          </Beat>
        </Band>

        <Band tone="lilac">
          <SectionHead
            id="check-last-year-s-travel-from-your-concur-extract"
            title="Check last year's travel from your Concur extract"
            lead="The spend review accepts one file: an agency booking report or an expense extract from your expense system. If your expense data lives in Concur today, an extract is enough. The review shows four things from your own data:"
          />
          <EditorialList items={FOUR_THINGS} />
          <div className={cmp.sectionGap}>
            <ProofPanel>
              <p>
                Any savings figure is a dollar range, with the method and the data period beside it.
                The review is optional, you can sign up without one, and the report is yours to
                keep.
              </p>
            </ProofPanel>
          </div>
        </Band>

        <Band tone="night">
          <SectionHead id="where-each-fits" tone="night" title="Where each fits" />
          <WhereFits
            dark
            wide
            vendor="SAP Concur"
            vendorText="Concur offers travel, expense and invoice products from one vendor (concur.com, checked September 30, 2026). If your expense and invoice processes already run there, and your travelers and approvers use it well, it may be the right place to stay."
            miraeeText="US companies of 300 to 1,500 people that want travel booking their people can pick up quickly, policy on every booking, every trip coded for finance, and onboarding they do not have to fund. Miraee replaces your booking tool and your agency's routine flight and hotel bookings. You keep your corporate cards."
          />
          <div className={cmp.sectionGap}>
            <Copy dark>
              <p>
                Also comparing other tools? See <Link to="/compare/navan">Navan alternatives</Link>{' '}
                and <Link to="/compare/perk">TravelPerk alternatives</Link>.
              </p>
            </Copy>
          </div>
        </Band>

        <FaqBand id="questions" heading="Questions" items={faq} />

        <RelatedComparisons tone="night" />

        <SmallPrint>
          SAP Concur are trademarks of their owners. Competitor facts on this page come from each
          vendor's own website, checked September 30, 2026, and are re-checked every 30 days. Miraee
          facts describe the live product. If you see a fact that has changed, tell us at{' '}
          <Link to="/talk-to-sales">Talk to sales</Link> and we will update the page.
        </SmallPrint>

        <CompareClosing title="Start free at any company size" />
      </main>
    </>
  )
}
Component.displayName = 'CompareSapConcurPage'
