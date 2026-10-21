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
import { AlertPhoneView, FinanceDashboardView } from '@/pages/home/product-views'
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
import { LedgerView } from '../shared/views'
import { faq } from './faq'
import { meta } from './meta'

const TOC = [
  { href: '#how-does-miraee-compare-with-perk', label: 'How does Miraee compare with Perk?' },
  { href: '#miraee-and-perk-side-by-side', label: 'Miraee and Perk, side by side' },
  { href: '#what-does-it-cost-to-start', label: 'What does it cost to start?' },
  { href: '#how-does-finance-see-each-trip', label: 'How does finance see each trip?' },
  { href: '#what-happens-when-plans-change', label: 'What happens when plans change?' },
  { href: '#want-proof-before-you-move', label: 'Want proof before you move?' },
  { href: '#questions-to-ask-in-any-evaluation', label: 'Questions to ask in any evaluation' },
  { href: '#where-each-fits', label: 'Where each fits' },
  { href: '#questions', label: 'Questions' },
]

const EVALUATION = [
  { title: 'When a traveler is rebooked, who signs off on a higher fare?' },
  { title: 'Where is each change recorded, and who can see it?' },
  { title: 'How does your controller see every cost of one trip together at month-end?' },
  { title: 'What does setup include for a company of your size, and who does the work?' },
]

/** Route: /compare/perk */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <PageHero
          eyebrow="Comparison"
          title="TravelPerk alternatives: Miraee vs Perk"
          crumbs={[
            { label: 'Home', to: '/' },
            { label: 'Compare', to: '/compare' },
            { label: 'Miraee vs Perk' },
          ]}
          lead="Miraee is business travel and expense software. This page compares it with Perk, formerly TravelPerk, on cost to start, the finance view and changes. Every Perk fact is dated."
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
            id="how-does-miraee-compare-with-perk"
            title="How does Miraee compare with Perk?"
            lead="Perk's Starter plan charges 5% per booking (perk.com/pricing, checked September 30, 2026). Miraee sign-up and onboarding are free at any company size. Both put travel and expense in one place. Miraee shows finance every trip with its budget and GL code, and when plans change the traveler confirms the new option."
          />
          <OnThisPage items={TOC} />
          <div style={{ marginTop: 'clamp(56px, 8vw, 112px)' }}>
            <SectionHead id="miraee-and-perk-side-by-side" title="Miraee and Perk, side by side" />
            <DataTable>
              <table>
                <caption className="sr-only">Miraee and Perk, side by side</caption>
                <thead>
                  <tr>
                    <th scope="col">
                      <span className="sr-only">Item</span>
                    </th>
                    <th scope="col">Perk (North America)</th>
                    <th scope="col">Miraee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Entry plan</th>
                    <td>
                      Travel Starter: $0 a month plus 5% per booking, minimum $2 and maximum $30 per
                      booking
                    </td>
                    <td>Sign-up and onboarding free at any company size</td>
                  </tr>
                  <tr>
                    <th scope="row">Travel-only paid plans</th>
                    <td>Premium $99 a month and Pro $299 a month, each plus 3% per booking</td>
                    <td>Free onboarding: company, travel policy and people set up with you</td>
                  </tr>
                  <tr>
                    <th scope="row">Travel and spend plans</th>
                    <td>
                      Premium from $11 and Pro from $13 per active user per month, plus 3% per
                      booking
                    </td>
                    <td>Receipts matched to card charges and checked against policy</td>
                  </tr>
                </tbody>
              </table>
            </DataTable>
            <TableNote>
              Perk facts: perk.com/pricing (North America), checked September 30, 2026. Miraee facts
              describe the live product.
            </TableNote>
          </div>
        </Band>

        <Band tone="plum">
          <Beat id="what-does-it-cost-to-start" title="What does it cost to start?" dark>
            <p>
              Perk publishes its prices, which makes a fair comparison easy. Its travel-only Starter
              plan has no monthly fee and charges 5% on each booking, between $2 and $30 a booking.
              Its other plans add a monthly fee or a per-user fee, plus 3% per booking
              (perk.com/pricing, checked September 30, 2026).
            </p>
            <p>
              Miraee sign-up and onboarding are free at any company size. We set up your company,
              your travel policy and your people with you, and train your admins and finance team.
              See <Link to="/pricing">what's free</Link>.
            </p>
          </Beat>
        </Band>

        <Band tone="lilac">
          <Split
            reverse
            copy={
              <Copy>
                <H2 id="how-does-finance-see-each-trip">How does finance see each trip?</H2>
                <p>
                  Controllers want to see every cost of a trip together at month-end: flight, hotel,
                  ground and meals, with the budget and code attached. In Miraee, every booking
                  arrives with its budget and GL code, and finance gets one dashboard for every trip
                  and a full audit log of who booked what, and when. Receipts are matched to card
                  charges and checked against policy.
                </p>
                <p>
                  See <Link to="/finance">the finance view</Link> for the screens.
                </p>
              </Copy>
            }
            visual={
              <div role="img" aria-label="Finance dashboard listing trips with budget and GL code">
                <FinanceDashboardView />
              </div>
            }
          />
        </Band>

        <Band tone="night" glow>
          <Split
            dark
            copy={
              <Copy dark>
                <H2 id="what-happens-when-plans-change">What happens when plans change?</H2>
                <p>
                  In Miraee, when a flight is delayed or canceled, the traveler gets an alert and
                  new options to confirm. The traveler picks the option that suits them, and the
                  change and any fare difference are recorded in the audit log. For finance teams
                  that want a person to confirm any change, that is the point. See{' '}
                  <Link to="/when-plans-change">when plans change</Link>.
                </p>
                <IllustrativeNote dark />
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

        <Band tone="lilac">
          <ProofPanel id="want-proof-before-you-move" title="Want proof before you move?">
            <p>
              Send one booking report from your agency or expense system and we review last year's
              travel trip by trip: bookings outside your program, spend outside policy, the cost of
              booking late and unused tickets. Any savings figure is a dollar range, with the method
              and the data period beside it. The review is optional, and the report is yours to
              keep.
            </p>
          </ProofPanel>
        </Band>

        <Band tone="plum">
          <SectionHead
            id="questions-to-ask-in-any-evaluation"
            tone="plum"
            title="Questions to ask in any evaluation"
            lead="Whichever tool you choose, these questions help you compare on your own trips:"
          />
          <EditorialList dark items={EVALUATION} />
          <Copy dark>
            <p style={{ marginTop: 32 }}>
              Ask us the same questions about Miraee, using your own trips.
            </p>
          </Copy>
        </Band>

        <Band tone="lilac">
          <Split
            copy={
              <>
                <Copy>
                  <H2 id="where-each-fits">Where each fits</H2>
                </Copy>
                <WhereFits
                  vendor="Perk"
                  vendorText="Perk publishes a per-booking price on every plan (perk.com/pricing, checked September 30, 2026). If that way of paying suits your company, it may suit you well."
                  miraeeText="US companies of 300 to 1,500 people that want a free start at their size, every trip coded for finance, travelers who confirm their own changes, and the option to check our work on their own numbers first."
                />
                <Copy>
                  <p>
                    Also comparing other tools? See{' '}
                    <Link to="/compare/navan">Navan alternatives</Link> or go back to{' '}
                    <Link to="/compare">compare corporate travel management software</Link>.
                  </p>
                </Copy>
              </>
            }
            visual={
              <Photo
                name="compare-perk-hero-1"
                width={1364}
                height={2046}
                alt="A person walks through striped light and shadow."
              />
            }
          />
        </Band>

        <FaqBand id="questions" heading="Questions" items={faq} tone="night" />

        <RelatedComparisons tone="lilac" />

        <SmallPrint>
          Perk and TravelPerk are trademarks of their owners. Competitor facts on this page come
          from each vendor's own website, checked September 30, 2026, and are re-checked every 30
          days. Miraee facts describe the live product. If you see a fact that has changed, tell us
          at <Link to="/talk-to-sales">Talk to sales</Link> and we will update the page.
        </SmallPrint>

        <CompareClosing title="Start free at any company size" />
      </main>
    </>
  )
}
Component.displayName = 'ComparePerkPage'
