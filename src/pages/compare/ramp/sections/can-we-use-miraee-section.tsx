import { Container } from '@/components/layout/content-layout'
import { ProductCard, LedgerTable } from '@/components/sections/product-preview'
import { InlineFaq } from '@/components/sections/faq'
import { faq } from '../faq'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function CanWeUseMiraeeSection() {
  return (
    <div className="mr-section lf-article">
      <Container className="mr-container lf-grid">
        <nav className="lf-toc" aria-label="On this page">
          <p className="lf-toc__h">On this page</p>
          <ol>
            <li>
              <a href="#can-we-use-miraee-if-we-run-ramp">Can we use Miraee if we run Ramp?</a>
            </li>
            <li>
              <a href="#what-miraee-adds-for-travel">What Miraee adds for travel</a>
            </li>
            <li>
              <a href="#how-the-two-work-together">How the two work together</a>
            </li>
            <li>
              <a href="#setting-up-miraee-beside-ramp">Setting up Miraee beside Ramp</a>
            </li>
            <li>
              <a href="#a-useful-check-on-last-year-s-travel">
                A useful check on last year's travel
              </a>
            </li>
            <li>
              <a href="#where-each-fits">Where each fits</a>
            </li>
            <li>
              <a href="#questions">Questions</a>
            </li>
          </ol>
        </nav>
        <div className="lf-prose">
          <h2 className="mr-h2" id="can-we-use-miraee-if-we-run-ramp">
            Can we use Miraee if we run Ramp?
          </h2>
          <p>
            Yes. Keep the corporate cards you already use, including your Ramp cards. Miraee is the
            travel layer: your travel policy on every booking, approvals only when something is out
            of policy, booking on behalf for assistants, and an alert with new options when plans
            change. Finance sees every trip with its budget and GL code.
          </p>
          <h2 className="mr-h2" id="what-miraee-adds-for-travel">
            What Miraee adds for travel
          </h2>
          <div className="compare-wrap">
            <table className="gtable">
              <thead>
                <tr>
                  <th scope="col">Where travel gets hard</th>
                  <th scope="col">What Miraee does</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-col="Where travel gets hard">Rules that differ by role, team or trip</td>
                  <td data-col="What Miraee does">
                    You set your travel policy once, and every flight and hotel option is marked in
                    or out of policy
                  </td>
                </tr>
                <tr>
                  <td data-col="Where travel gets hard">Approval noise</td>
                  <td data-col="What Miraee does">
                    Approvals only come in when something is out of policy, so approvers see the
                    trips that need a decision
                  </td>
                </tr>
                <tr>
                  <td data-col="Where travel gets hard">People who book for others</td>
                  <td data-col="What Miraee does">
                    Executive assistants and office admins book on behalf of the people they
                    support, in a few steps, inside policy
                  </td>
                </tr>
                <tr>
                  <td data-col="Where travel gets hard">A flight that is delayed or canceled</td>
                  <td data-col="What Miraee does">
                    The traveler gets an alert and new options to confirm, and the change is
                    recorded in the audit log
                  </td>
                </tr>
                <tr>
                  <td data-col="Where travel gets hard">Month-end</td>
                  <td data-col="What Miraee does">
                    Every booking arrives with its budget and GL code; a finance dashboard and a
                    full audit log of who booked what, and when
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Employees ask the Miraee assistant for a trip and choose flights and hotels inside
            company policy. The assistant suggests. Your approvers decide. See{' '}
            <Link to="/travel-managers">travel policy and approvals</Link> for the travel manager's
            view.
          </p>
          <h2 className="mr-h2" id="how-the-two-work-together">
            How the two work together
          </h2>
          <p>
            Your finance team keeps its cards. During onboarding we add the corporate cards you
            already use in payment settings, set up your company and travel policy, and train your
            admins and finance team. Travel is booked in Miraee, and receipts are matched to card
            charges and checked against policy.
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
          <p>
            Miraee replaces your booking tool and your agency's routine flight and hotel bookings.
            It sits beside your card and your finance platform. Our guide to{' '}
            <Link to="/resources/travel-expense-report">travel expense reports</Link> walks through
            a month-end close for travel, step by step.
          </p>
          <h2 className="mr-h2" id="setting-up-miraee-beside-ramp">
            Setting up Miraee beside Ramp
          </h2>
          <ol>
            <li>
              <strong>Sign up free.</strong> Create your company's Miraee account.
            </li>
            <li>
              <strong>Onboard with us.</strong> We set up your company, your travel policy and your
              people with you, and add the corporate cards you already use in payment settings.
            </li>
            <li>
              <strong>Set your rules once.</strong> Travel policy, GL codes and budgets, applied to
              every booking.
            </li>
            <li>
              <strong>Train your team.</strong> Admins and finance get training as part of
              onboarding; travelers and assistants start booking inside policy.
            </li>
            <li>
              <strong>Check the first month-end.</strong> Every trip arrives with its budget and GL
              code, and receipts are matched to card charges.
            </li>
          </ol>
          <h2 className="mr-h2" id="a-useful-check-on-last-year-s-travel">
            A useful check on last year's travel
          </h2>
          <p>
            Most companies book travel in more than one place, even with a company card: a booking
            tool, airline sites, hotel sites, an agency. The Miraee spend review looks at last
            year's travel trip by trip from one file you already have: an agency booking report or
            an expense extract. A corporate card feed is optional and makes it more complete. It
            shows bookings outside your program, spend outside policy, the cost of booking late and
            unused tickets. The review is optional, and the report is yours to keep.
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
            <strong>Where Ramp fits.</strong> Ramp is a finance platform with cards, expense and
            travel together. If your travel is simple and Ramp Travel covers your rules, it may be
            all you need.
          </p>
          <p>
            <strong>Where Miraee fits.</strong> Companies of 300 to 1,500 people that travel often,
            whose rules differ by role or trip, whose assistants book for others, or whose travelers
            need new options when plans change. Keep the card; add the travel depth.
          </p>
          <p>
            See <Link to="/finance">the finance view</Link>, or go back to{' '}
            <Link to="/compare">compare corporate travel management software</Link>.
          </p>
          <InlineFaq items={faq} />
        </div>
      </Container>
    </div>
  )
}
