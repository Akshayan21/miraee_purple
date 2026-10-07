import { InlineFaq } from '@/components/sections/faq'
import { faq } from '../faq'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function HowDoesMiraeeCompareSection() {
  return (
    <div className="mr-section lf-article">
      <div className="mr-container lf-grid">
        <nav className="lf-toc" aria-label="On this page">
          <p className="lf-toc__h">On this page</p>
          <ol>
            <li>
              <a href="#how-does-miraee-compare-with-perk">How does Miraee compare with Perk?</a>
            </li>
            <li>
              <a href="#miraee-and-perk-side-by-side">Miraee and Perk, side by side</a>
            </li>
            <li>
              <a href="#what-does-it-cost-to-start">What does it cost to start?</a>
            </li>
            <li>
              <a href="#how-does-finance-see-each-trip">How does finance see each trip?</a>
            </li>
            <li>
              <a href="#what-happens-when-plans-change">What happens when plans change?</a>
            </li>
            <li>
              <a href="#want-proof-before-you-move">Want proof before you move?</a>
            </li>
            <li>
              <a href="#questions-to-ask-in-any-evaluation">Questions to ask in any evaluation</a>
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
          <h2 className="mr-h2" id="how-does-miraee-compare-with-perk">
            How does Miraee compare with Perk?
          </h2>
          <p>
            Perk's Starter plan charges 5% per booking (perk.com/pricing, checked September 30,
            2026). Miraee sign-up and onboarding are free at any company size. Both put travel and
            expense in one place. Miraee shows finance every trip with its budget and GL code, and
            when plans change the traveler confirms the new option.
          </p>
          <h2 className="mr-h2" id="miraee-and-perk-side-by-side">
            Miraee and Perk, side by side
          </h2>
          <div className="compare-wrap">
            <table className="compare compare--vs">
              <thead>
                <tr>
                  <th scope="col">
                    <span className="mr-sr">Item</span>
                  </th>
                  <th scope="col">Perk (North America)</th>
                  <th scope="col">Miraee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Entry plan</th>
                  <td data-col="Perk (North America)">
                    Travel Starter: $0 a month plus 5% per booking, minimum $2 and maximum $30 per
                    booking
                  </td>
                  <td data-col="Miraee">Sign-up and onboarding free at any company size</td>
                </tr>
                <tr>
                  <th scope="row">Travel-only paid plans</th>
                  <td data-col="Perk (North America)">
                    Premium $99 a month and Pro $299 a month, each plus 3% per booking
                  </td>
                  <td data-col="Miraee">
                    Free onboarding: company, travel policy and people set up with you
                  </td>
                </tr>
                <tr>
                  <th scope="row">Travel and spend plans</th>
                  <td data-col="Perk (North America)">
                    Premium from $11 and Pro from $13 per active user per month, plus 3% per booking
                  </td>
                  <td data-col="Miraee">
                    Receipts matched to card charges and checked against policy
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="table-note">
            Perk facts: perk.com/pricing (North America), checked September 30, 2026. Miraee facts
            describe the live product.
          </p>
          <h2 className="mr-h2" id="what-does-it-cost-to-start">
            What does it cost to start?
          </h2>
          <p>
            Perk publishes its prices, which makes a fair comparison easy. Its travel-only Starter
            plan has no monthly fee and charges 5% on each booking, between $2 and $30 a booking.
            Its other plans add a monthly fee or a per-user fee, plus 3% per booking
            (perk.com/pricing, checked September 30, 2026).
          </p>
          <p>
            Miraee sign-up and onboarding are free at any company size. We set up your company, your
            travel policy and your people with you, and train your admins and finance team. See{' '}
            <Link to="/pricing">what's free</Link>.
          </p>
          <h2 className="mr-h2" id="how-does-finance-see-each-trip">
            How does finance see each trip?
          </h2>
          <p>
            Controllers want to see every cost of a trip together at month-end: flight, hotel,
            ground and meals, with the budget and code attached. In Miraee, every booking arrives
            with its budget and GL code, and finance gets one dashboard for every trip and a full
            audit log of who booked what, and when. Receipts are matched to card charges and checked
            against policy.
          </p>
          <figure className="lf-view mr-paper">
            <div
              className="mr-ledger-wrap card-shadow ledger-card"
              style={{ background: 'var(--mr-white)' }}
            >
              <div className="mr-ledger-wrap__head">
                <p className="mr-ledger-wrap__title">October trips</p>
                <span className="mr-label">3 trips</span>
              </div>
              <table
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
              </table>
            </div>
            <figcaption className="mr-caption">Product view with illustrative data.</figcaption>
          </figure>
          <p>
            See <Link to="/finance">the finance view</Link> for the screens.
          </p>
          <h2 className="mr-h2" id="what-happens-when-plans-change">
            What happens when plans change?
          </h2>
          <p>
            In Miraee, when a flight is delayed or canceled, the traveler gets an alert and new
            options to confirm. The traveler picks the option that suits them, and the change and
            any fare difference are recorded in the audit log. For finance teams that want a person
            to confirm any change, that is the point. See{' '}
            <Link to="/when-plans-change">when plans change</Link>.
          </p>
          <figure
            className="lf-view lf-view--plum mr-plum"
            role="img"
            aria-label="Phone alert: the 6:40 a.m. flight to Chicago is delayed, with two new options at the same fare"
          >
            <div className="phone phone--alert" aria-hidden="true">
              <div className="phone__screen mr-plum">
                <div className="phone__bar">
                  <span className="mr-fig">5:53</span>
                  <span>Trips</span>
                </div>
                <div className="mr-alert">
                  <span className="mr-alert__status">Flight delayed</span>
                  <p className="mr-alert__msg">
                    Your 6:40 a.m. flight to Chicago is delayed.{' '}
                    <span>Here are two new options. Tap one to confirm.</span>
                  </p>
                </div>
                <div className="mr-options">
                  <span className="mr-option" aria-checked="true">
                    <span className="mr-option__time">8:15 a.m.</span>
                    <span className="mr-option__fare">Same fare</span>{' '}
                    <span className="mr-option__meta">AUS to ORD · Nonstop</span>
                    <Badge variant="success">In policy</Badge>{' '}
                    <svg
                      className="mr-line mr-option__tick"
                      viewBox="0 0 80 64"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M6 34 C 14 42 22 50 28 57 C 42 38 58 20 76 5"></path>
                    </svg>
                  </span>{' '}
                  <span className="mr-option" aria-checked="false">
                    <span className="mr-option__time">9:50 a.m.</span>
                    <span className="mr-option__fare">Same fare</span>{' '}
                    <span className="mr-option__meta">AUS to ORD · Nonstop</span>
                    <Badge variant="success">In policy</Badge>
                  </span>
                </div>
                <Button asChild>
                  <span role="presentation">Confirm 8:15 a.m.</span>
                </Button>
                <p className="phone__cap">Your travel lead sees the change in the audit log.</p>
              </div>
            </div>
            <figcaption className="mr-caption">Product view with illustrative data.</figcaption>
          </figure>
          <h2 className="mr-h2" id="want-proof-before-you-move">
            Want proof before you move?
          </h2>
          <p>
            Send one booking report from your agency or expense system and we review last year's
            travel trip by trip: bookings outside your program, spend outside policy, the cost of
            booking late and unused tickets. Any savings figure is a dollar range, with the method
            and the data period beside it. The review is optional, and the report is yours to keep.
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
          <h2 className="mr-h2" id="questions-to-ask-in-any-evaluation">
            Questions to ask in any evaluation
          </h2>
          <p>Whichever tool you choose, these questions help you compare on your own trips:</p>
          <ul>
            <li>When a traveler is rebooked, who signs off on a higher fare?</li>
            <li>Where is each change recorded, and who can see it?</li>
            <li>How does your controller see every cost of one trip together at month-end?</li>
            <li>What does setup include for a company of your size, and who does the work?</li>
          </ul>
          <p>Ask us the same questions about Miraee, using your own trips.</p>
          <h2 className="mr-h2" id="where-each-fits">
            Where each fits
          </h2>
          <p>
            <strong>Where Perk fits.</strong> Perk publishes a per-booking price on every plan
            (perk.com/pricing, checked September 30, 2026). If that way of paying suits your
            company, it may suit you well.
          </p>
          <p>
            <strong>Where Miraee fits.</strong> US companies of 300 to 1,500 people that want a free
            start at their size, every trip coded for finance, travelers who confirm their own
            changes, and the option to check our work on their own numbers first.
          </p>
          <p>
            Also comparing other tools? See <Link to="/compare/navan">Navan alternatives</Link> or
            go back to <Link to="/compare">compare corporate travel management software</Link>.
          </p>
          <InlineFaq items={faq} />
        </div>
      </div>
    </div>
  )
}
