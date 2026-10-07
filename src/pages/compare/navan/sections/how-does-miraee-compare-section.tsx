import { Container } from '@/components/layout/content-layout'
import { ProductCard, LedgerTable } from '@/components/sections/product-preview'
import { InlineFaq } from '@/components/sections/faq'
import { faq } from '../faq'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function HowDoesMiraeeCompareSection() {
  return (
    <div className="mr-section lf-article">
      <Container className="mr-container lf-grid">
        <nav className="lf-toc" aria-label="On this page">
          <p className="lf-toc__h">On this page</p>
          <ol>
            <li>
              <a href="#how-does-miraee-compare-with-navan">How does Miraee compare with Navan?</a>
            </li>
            <li>
              <a href="#miraee-and-navan-side-by-side">Miraee and Navan, side by side</a>
            </li>
            <li>
              <a href="#what-does-it-cost-to-start">What does it cost to start?</a>
            </li>
            <li>
              <a href="#how-do-travel-policy-and-approvals-work">
                How do travel policy and approvals work?
              </a>
            </li>
            <li>
              <a href="#what-does-finance-see">What does finance see?</a>
            </li>
            <li>
              <a href="#what-happens-when-plans-change">What happens when plans change?</a>
            </li>
            <li>
              <a href="#want-proof-before-you-move">Want proof before you move?</a>
            </li>
            <li>
              <a href="#where-each-fits">Where each fits</a>
            </li>
            <li>
              <a href="#other-navan-alternatives">Other Navan alternatives</a>
            </li>
            <li>
              <a href="#questions">Questions</a>
            </li>
          </ol>
        </nav>
        <div className="lf-prose">
          <h2 className="mr-h2" id="how-does-miraee-compare-with-navan">
            How does Miraee compare with Navan?
          </h2>
          <p>
            Both are business travel and expense software. Navan's free Business plan is for
            companies with up to 300 employees, and its Enterprise plan is priced by quote
            (navan.com/pricing, checked September 30, 2026). Miraee sign-up and onboarding are free
            at every company size. Miraee also offers an optional review of last year's travel,
            built from your own booking data.
          </p>
          <h2 className="mr-h2" id="miraee-and-navan-side-by-side">
            Miraee and Navan, side by side
          </h2>
          <div className="compare-wrap">
            <table className="compare compare--vs">
              <thead>
                <tr>
                  <th scope="col">
                    <span className="mr-sr">Item</span>
                  </th>
                  <th scope="col">Navan</th>
                  <th scope="col">Miraee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Free entry</th>
                  <td data-col="Navan">Navan Business, free, for companies up to 300 employees</td>
                  <td data-col="Miraee">Sign-up and onboarding, free at every company size</td>
                </tr>
                <tr>
                  <th scope="row">Above 300 employees</th>
                  <td data-col="Navan">Navan Enterprise, priced by quote</td>
                  <td data-col="Miraee">The same free sign-up and onboarding</td>
                </tr>
                <tr>
                  <th scope="row">Expense</th>
                  <td data-col="Navan">Free for the first 5 users, then $15 per user per month</td>
                  <td data-col="Miraee">
                    Receipts matched to card charges and checked against policy
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="table-note">
            Navan facts: navan.com/pricing, checked September 30, 2026. Miraee facts describe the
            live product.
          </p>
          <h2 className="mr-h2" id="what-does-it-cost-to-start">
            What does it cost to start?
          </h2>
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
          <h2 className="mr-h2" id="how-do-travel-policy-and-approvals-work">
            How do travel policy and approvals work?
          </h2>
          <p>
            In Miraee you set your travel policy once. Every flight and hotel option is marked in or
            out of policy, so travelers pick from options that already fit. Approvals only come in
            when something is out of policy, which means approvers see the trips that need a
            decision and fewer that do not.
          </p>
          <p>
            Employees ask the Miraee assistant for a trip and choose flights and hotels inside
            company policy. The assistant suggests. Your approvers decide.
          </p>
          <p>
            If your approvers today receive requests for trips that were already inside policy,
            count them for a week. That number is a fair test for any tool you evaluate, including
            ours.
          </p>
          <h2 className="mr-h2" id="what-does-finance-see">
            What does finance see?
          </h2>
          <p>
            Every booking arrives with its budget and GL code. Finance gets one dashboard for every
            trip and a full audit log of who booked what, and when. Receipts are matched to card
            charges and checked against policy, and you keep the corporate cards you already use.
          </p>
          <p>
            That matters because most programs still work from several reports. Only 12% of travel
            programs have their data in one place.
            <sup>
              <a href="#src-1" rel="noopener" aria-label="Source 1">
                1
              </a>
            </sup>{' '}
            See <Link to="/finance">the finance view</Link> for the screens.
          </p>
          <figure className="lf-view mr-paper">
            <ProductCard
              className="mr-ledger-wrap card-shadow ledger-card"
              style={{ background: 'var(--mr-white)' }}
            >
              <div className="mr-ledger-wrap__head">
                <p className="mr-ledger-wrap__title">October trips</p>
                <span className="mr-label">3 trips</span>
              </div>
              <LedgerTable
                className="mr-ledger"
                aria-label="A finance ledger of trips with budgets, policy status and GL codes."
              >
                <thead>
                  <tr>
                    <th scope="col">Trip</th>
                    <th scope="col" className="mr-num col-budget">
                      Budget
                    </th>
                    <th scope="col" className="mr-num">
                      Amount
                    </th>
                    <th scope="col">Policy</th>
                    <th scope="col" className="mr-num">
                      GL code
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Client visit, Chicago</td>
                    <td className="mr-num col-budget">$1,500.00</td>
                    <td className="mr-num">$1,284.60</td>
                    <td>
                      <Badge variant="success">In policy</Badge>
                    </td>
                    <td className="mr-num">6200</td>
                  </tr>
                  <tr>
                    <td>Site audit, Dallas</td>
                    <td className="mr-num col-budget">$1,200.00</td>
                    <td className="mr-num">$946.20</td>
                    <td>
                      <Badge variant="success">In policy</Badge>
                    </td>
                    <td className="mr-num">6200</td>
                  </tr>
                  <tr>
                    <td>Sales kickoff, Denver</td>
                    <td className="mr-num col-budget">$2,000.00</td>
                    <td className="mr-num">
                      <span className="mr-circled">
                        $2,318.40
                        <svg
                          className="mr-line"
                          viewBox="0 0 260 130"
                          preserveAspectRatio="none"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M36 74 C 24 36 108 14 172 18 C 228 22 244 58 220 86 C 196 112 96 116 48 98 C 26 90 20 72 30 58"></path>
                        </svg>
                      </span>
                    </td>
                    <td>
                      <Badge variant="error">Out of policy</Badge>
                    </td>
                    <td className="mr-num">6200</td>
                  </tr>
                </tbody>
              </LedgerTable>
            </ProductCard>
            <figcaption className="mr-caption">Product view with illustrative data.</figcaption>
          </figure>
          <h2 className="mr-h2" id="what-happens-when-plans-change">
            What happens when plans change?
          </h2>
          <p>
            When a flight is delayed or canceled, the traveler gets an alert and new options to
            confirm. The change is recorded in the audit log, so the travel lead and finance see
            what happened and what it cost.
          </p>
          <h2 className="mr-h2" id="want-proof-before-you-move">
            Want proof before you move?
          </h2>
          <p>
            Savings figures in this category are usually measured on other companies. Miraee lets
            you start from your own: send one booking report from your agency or expense system, and
            we review last year's travel trip by trip. The review shows bookings outside your
            program, spend outside policy, the cost of booking late and unused tickets. Any savings
            figure is a dollar range, with the method and the data period beside it. The review is
            optional, and the report is yours to keep.
          </p>
          <div className="mr-btn-row lf-inline-cta">
            <Button asChild variant="secondary">
              <DialogLink to="/spend-review" dialog="review">
                Get a spend review
              </DialogLink>
            </Button>{' '}
            <Button asChild variant="tertiary">
              <Link to="/spend-review">About the spend review</Link>
            </Button>
          </div>
          <h2 className="mr-h2" id="where-each-fits">
            Where each fits
          </h2>
          <p>
            <strong>Where Navan fits.</strong> Navan's free Business plan covers companies up to 300
            employees (navan.com/pricing, checked September 30, 2026). If your company is inside
            that size and Navan does what you need, it may suit you well.
          </p>
          <p>
            <strong>Where Miraee fits.</strong> US companies of 300 to 1,500 people that want a free
            start at their size, travel policy on every booking, every trip coded for finance, and
            the option to check our work on their own numbers first.
          </p>
          <h2 className="mr-h2" id="other-navan-alternatives">
            Other Navan alternatives
          </h2>
          <p>
            Buyers comparing Navan usually look at a short list of other tools. Each line below
            comes from the vendor's own site, checked September 30, 2026.
          </p>
          <div className="compare-wrap">
            <table className="gtable">
              <thead>
                <tr>
                  <th scope="col">Vendor</th>
                  <th scope="col">What its own site says</th>
                  <th scope="col">Often considered by</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-col="Vendor">SAP Concur</td>
                  <td data-col="What its own site says">
                    "Simple, connected spend & travel management"; Travel, Expense and Invoice
                    products; pricing on request
                  </td>
                  <td data-col="Often considered by">
                    Companies whose expense process already runs on Concur. See{' '}
                    <Link to="/compare/sap-concur">Miraee vs SAP Concur</Link>
                  </td>
                </tr>
                <tr>
                  <td data-col="Vendor">Perk (formerly TravelPerk)</td>
                  <td data-col="What its own site says">
                    Travel-only Starter plan at $0 a month plus 5% per booking (minimum $2, maximum
                    $30); paid plans add a monthly or per-user fee plus 3%
                  </td>
                  <td data-col="Often considered by">
                    Fast-growing teams that want travel and spend in one place. See{' '}
                    <Link to="/compare/perk">TravelPerk alternatives</Link>
                  </td>
                </tr>
                <tr>
                  <td data-col="Vendor">Itilite</td>
                  <td data-col="What its own site says">
                    $10 per trip, or $7 with a pre-funded wallet; expense at $6 per active user per
                    month
                  </td>
                  <td data-col="Often considered by">Buyers who want a published per-trip price</td>
                </tr>
              </tbody>
            </table>
          </div>
          <InlineFaq items={faq} />
        </div>
      </Container>
    </div>
  )
}
