import { Link } from 'react-router-dom'

import { Seo } from '@/components/common/seo'
import {
  BigStat,
  Band,
  DataTable,
  FaqBand,
  PageHero,
  SectionHead,
  SmallPrint,
  Split,
} from '@/components/page/kit'
import { AlertPhoneView, PolicyView } from '@/pages/home/product-views'
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
import { LedgerView } from '../shared/views'
import { faq } from './faq'
import { meta } from './meta'

const TOC = [
  { href: '#how-does-miraee-compare-with-navan', label: 'How does Miraee compare with Navan?' },
  { href: '#miraee-and-navan-side-by-side', label: 'Miraee and Navan, side by side' },
  { href: '#what-does-it-cost-to-start', label: 'What does it cost to start?' },
  {
    href: '#how-do-travel-policy-and-approvals-work',
    label: 'How do travel policy and approvals work?',
  },
  { href: '#what-does-finance-see', label: 'What does finance see?' },
  { href: '#what-happens-when-plans-change', label: 'What happens when plans change?' },
  { href: '#want-proof-before-you-move', label: 'Want proof before you move?' },
  { href: '#where-each-fits', label: 'Where each fits' },
  { href: '#other-navan-alternatives', label: 'Other Navan alternatives' },
  { href: '#questions', label: 'Questions' },
]

/** Route: /compare/navan */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <PageHero
          eyebrow="Comparison"
          title="Navan alternatives: Miraee vs Navan"
          crumbs={[
            { label: 'Home', to: '/' },
            { label: 'Compare', to: '/compare' },
            { label: 'Miraee vs Navan' },
          ]}
          lead="Miraee is business travel and expense software. This page compares it with Navan on cost to start, policy, the finance view and changes. Every Navan fact is dated and sourced."
          actions={<HeroActions />}
          note={HERO_TRUST}
          visual={<LedgerView />}
        >
          <HeroMeta>
            Updated <time dateTime="2026-09-30">September 30, 2026</time> · Navan facts checked
            September 30, 2026
          </HeroMeta>
          <IllustrativeNote dark />
        </PageHero>

        <Band tone="lilac" round>
          <SectionHead
            id="how-does-miraee-compare-with-navan"
            title="How does Miraee compare with Navan?"
            lead="Both are business travel and expense software. Navan's free Business plan is for companies with up to 300 employees, and its Enterprise plan is priced by quote (navan.com/pricing, checked September 30, 2026). Miraee sign-up and onboarding are free at every company size."
          />
          <OnThisPage items={TOC} />
          <div className={cmp.sectionGap}>
            <SectionHead
              id="miraee-and-navan-side-by-side"
              title="Miraee and Navan, side by side"
            />
            <DataTable>
              <table>
                <caption className="sr-only">Miraee and Navan, side by side</caption>
                <thead>
                  <tr>
                    <th scope="col">
                      <span className="sr-only">Item</span>
                    </th>
                    <th scope="col">Navan</th>
                    <th scope="col">Miraee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Free entry</th>
                    <td>Navan Business, free, for companies up to 300 employees</td>
                    <td>Sign-up and onboarding, free at every company size</td>
                  </tr>
                  <tr>
                    <th scope="row">Above 300 employees</th>
                    <td>Navan Enterprise, priced by quote</td>
                    <td>The same free sign-up and onboarding</td>
                  </tr>
                  <tr>
                    <th scope="row">Expense</th>
                    <td>Free for the first 5 users, then $15 per user per month</td>
                    <td>Receipts matched to card charges and checked against policy</td>
                  </tr>
                </tbody>
              </table>
            </DataTable>
            <TableNote>
              Navan facts: navan.com/pricing, checked September 30, 2026. Miraee facts describe the
              live product.
            </TableNote>
          </div>
        </Band>

        <Band tone="plum">
          <Beat id="what-does-it-cost-to-start" title="What does it cost to start?" dark>
            <p>
              For a company of 300 to 1,500 people, this is usually the first question. Navan
              publishes a free Business plan for companies up to 300 employees and quotes its
              Enterprise plan. Miraee's sign-up and onboarding are free at any company size, so a
              company of 400 or 1,400 starts on the same terms as a company of 50.
            </p>
            <p>
              Onboarding covers company setup, your travel policy, employee onboarding and payment
              settings, with training for your admins and finance team. See{' '}
              <Link to="/pricing">what's free</Link> for the full list.
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
                  In Miraee you set your travel policy once. Every flight and hotel option is marked
                  in or out of policy, so travelers pick from options that already fit. Approvals
                  only come in when something is out of policy, which means approvers see the trips
                  that need a decision and fewer that do not.
                </p>
                <p>
                  Employees ask the Miraee assistant for a trip and choose flights and hotels inside
                  company policy. The assistant suggests. Your approvers decide.
                </p>
                <p>
                  If your approvers today receive requests for trips that were already inside
                  policy, count them for a week. That number is a fair test for any tool you
                  evaluate, including ours.
                </p>
              </Copy>
            }
            visual={
              <div
                className={`mr-paper ${cmp.paper}`}
                role="img"
                aria-label="Travel policy setup screen"
              >
                <PolicyView />
              </div>
            }
          />
        </Band>

        <Band tone="night" glow>
          <Split
            dark
            copy={
              <Copy dark>
                <H2 id="what-does-finance-see">What does finance see?</H2>
                <p>
                  Every booking arrives with its budget and GL code. Finance gets one dashboard for
                  every trip and a full audit log of who booked what, and when. Receipts are matched
                  to card charges and checked against policy, and you keep the corporate cards you
                  already use.
                </p>
                <p>That matters because most programs still work from several reports.</p>
                <p>
                  See <Link to="/finance">the finance view</Link> for the screens.
                </p>
              </Copy>
            }
            visual={
              <BigStat dark value={12} prefix="Only " suffix="%">
                of travel programs have their data in one place.
              </BigStat>
            }
          />
        </Band>

        <Band tone="lilac">
          <Split
            copy={
              <Copy>
                <H2 id="what-happens-when-plans-change">What happens when plans change?</H2>
                <p>
                  When a flight is delayed or canceled, the traveler gets an alert and new options
                  to confirm. The change is recorded in the audit log, so the travel lead and
                  finance see what happened and what it cost.
                </p>
              </Copy>
            }
            visual={
              <div
                role="img"
                aria-label="Phone alert: the 6:40 a.m. flight to Chicago is delayed, with two new options at the same fare"
              >
                <AlertPhoneView />
              </div>
            }
          />
        </Band>

        <Band tone="plum">
          <ProofPanel id="want-proof-before-you-move" title="Want proof before you move?">
            <p>
              Savings figures in this category are usually measured on other companies. Miraee lets
              you start from your own: send one booking report from your agency or expense system,
              and we review last year's travel trip by trip. The review shows bookings outside your
              program, spend outside policy, the cost of booking late and unused tickets. Any
              savings figure is a dollar range, with the method and the data period beside it. The
              review is optional, and the report is yours to keep.
            </p>
          </ProofPanel>
        </Band>

        <Band tone="lilac">
          <Split
            reverse
            copy={
              <>
                <Copy>
                  <H2 id="where-each-fits">Where each fits</H2>
                </Copy>
                <WhereFits
                  vendor="Navan"
                  vendorText="Navan's free Business plan covers companies up to 300 employees (navan.com/pricing, checked September 30, 2026). If your company is inside that size and Navan does what you need, it may suit you well."
                  miraeeText="US companies of 300 to 1,500 people that want a free start at their size, travel policy on every booking, every trip coded for finance, and the option to check our work on their own numbers first."
                />
              </>
            }
            visual={
              <Photo
                name="compare-navan-hero-1"
                width={1364}
                height={2046}
                alt="A man in glasses and a navy blazer."
              />
            }
          />
        </Band>

        <Band tone="night">
          <SectionHead
            id="other-navan-alternatives"
            tone="night"
            title="Other Navan alternatives"
            lead="Buyers comparing Navan usually look at a short list of other tools. Each line below comes from the vendor's own site, checked September 30, 2026."
          />
          <DataTable dark>
            <table>
              <caption className="sr-only">Other Navan alternatives</caption>
              <thead>
                <tr>
                  <th scope="col">Vendor</th>
                  <th scope="col">What its own site says</th>
                  <th scope="col">Often considered by</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SAP Concur</td>
                  <td>
                    "Simple, connected spend & travel management"; Travel, Expense and Invoice
                    products; pricing on request
                  </td>
                  <td>
                    Companies whose expense process already runs on Concur. See{' '}
                    <Link to="/compare/sap-concur">Miraee vs SAP Concur</Link>
                  </td>
                </tr>
                <tr>
                  <td>Perk (formerly TravelPerk)</td>
                  <td>
                    Travel-only Starter plan at $0 a month plus 5% per booking (minimum $2, maximum
                    $30); paid plans add a monthly or per-user fee plus 3%
                  </td>
                  <td>
                    Fast-growing teams that want travel and spend in one place. See{' '}
                    <Link to="/compare/perk">TravelPerk alternatives</Link>
                  </td>
                </tr>
                <tr>
                  <td>Itilite</td>
                  <td>
                    $10 per trip, or $7 with a pre-funded wallet; expense at $6 per active user per
                    month
                  </td>
                  <td>Buyers who want a published per-trip price</td>
                </tr>
              </tbody>
            </table>
          </DataTable>
        </Band>

        <FaqBand id="questions" heading="Questions" items={faq} />

        <RelatedComparisons tone="night" />

        <SmallPrint>
          Navan, SAP Concur, Perk, TravelPerk and Itilite are trademarks of their owners. Competitor
          facts on this page come from each vendor's own website, checked September 30, 2026, and
          are re-checked every 30 days. Miraee facts describe the live product. If you see a fact
          that has changed, tell us at <Link to="/talk-to-sales">Talk to sales</Link> and we will
          update the page.
        </SmallPrint>

        <CompareClosing title="Start free at any company size" />
      </main>
    </>
  )
}
Component.displayName = 'CompareNavanPage'
