import { Container } from '@/components/layout/content-layout'
import { ProductRow } from '@/components/sections/product-preview'
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
              <a href="#how-does-miraee-compare-with-sap-concur">
                How does Miraee compare with SAP Concur?
              </a>
            </li>
            <li>
              <a href="#miraee-and-sap-concur-side-by-side">Miraee and SAP Concur, side by side</a>
            </li>
            <li>
              <a href="#what-does-it-take-to-get-started">What does it take to get started?</a>
            </li>
            <li>
              <a href="#how-do-travel-policy-and-approvals-work">
                How do travel policy and approvals work?
              </a>
            </li>
            <li>
              <a href="#what-does-finance-see-at-month-end">What does finance see at month-end?</a>
            </li>
            <li>
              <a href="#what-happens-when-plans-change">What happens when plans change?</a>
            </li>
            <li>
              <a href="#check-last-year-s-travel-from-your-concur-extract">
                Check last year's travel from your Concur extract
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
          <h2 className="mr-h2" id="how-does-miraee-compare-with-sap-concur">
            How does Miraee compare with SAP Concur?
          </h2>
          <p>
            SAP Concur offers travel, expense and invoice products, priced on request (concur.com,
            checked September 30, 2026). Miraee is business travel and expense software with free
            sign-up and free onboarding at any company size, including your travel policy and
            training for admins and finance. You can also review last year's travel from your Concur
            expense extract before you decide.
          </p>
          <h2 className="mr-h2" id="miraee-and-sap-concur-side-by-side">
            Miraee and SAP Concur, side by side
          </h2>
          <div className="compare-wrap">
            <table className="compare compare--vs">
              <thead>
                <tr>
                  <th scope="col">
                    <span className="mr-sr">Item</span>
                  </th>
                  <th scope="col">SAP Concur</th>
                  <th scope="col">Miraee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">What it is</th>
                  <td data-col="SAP Concur">
                    "Simple, connected spend & travel management" (concur.com)
                  </td>
                  <td data-col="Miraee">
                    Business travel and expense software, with a travel assistant for every employee
                    and the controls finance needs
                  </td>
                </tr>
                <tr>
                  <th scope="row">Products</th>
                  <td data-col="SAP Concur">
                    Concur Travel, Concur Expense and Concur Invoice, plus Request, Budget, Detect,
                    Intelligent Audit and Analytics
                  </td>
                  <td data-col="Miraee">
                    Travel booking, travel policy and approvals, expense with receipts matched to
                    card charges, a finance dashboard and an audit log
                  </td>
                </tr>
                <tr>
                  <th scope="row">Pricing</th>
                  <td data-col="SAP Concur">Request pricing; prices are not published</td>
                  <td data-col="Miraee">Sign-up and onboarding free at any company size</td>
                </tr>
                <tr>
                  <th scope="row">Getting started</th>
                  <td data-col="SAP Concur">Through a quote request (concur.com)</td>
                  <td data-col="Miraee">
                    Free onboarding: company setup, travel policy, employee onboarding and payment
                    settings, with training for admins and finance
                  </td>
                </tr>
                <tr>
                  <th scope="row">Travel policy</th>
                  <td data-col="SAP Concur">
                    "Apply and update spending policies instantly" for expense; an AI assistant
                    "trained on your policies" for travel (concur.com)
                  </td>
                  <td data-col="Miraee">
                    Every option marked in or out of policy; approvals only when something is out of
                    policy
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="table-note">
            SAP Concur facts: concur.com, checked September 30, 2026. Miraee facts describe the live
            product.
          </p>
          <h2 className="mr-h2" id="what-does-it-take-to-get-started">
            What does it take to get started?
          </h2>
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
          <h2 className="mr-h2" id="how-do-travel-policy-and-approvals-work">
            How do travel policy and approvals work?
          </h2>
          <p>
            A policy people can follow is one they never have to look up. In Miraee, you set the
            policy once and every flight and hotel option shows whether it is in or out of policy.
            Travelers choose from options that already fit. Approvals only come in when something is
            out of policy, so approvers see the trips that need a decision.
          </p>
          <p>
            Employees ask the Miraee assistant for a trip and choose flights and hotels inside
            company policy. The assistant suggests. Your approvers decide. Executive assistants and
            office admins can book on behalf of the people they support, in a few steps.
          </p>
          <figure
            className="lf-view mr-paper"
            role="img"
            aria-label="Travel policy setup screen: hotel, flight and approval rules"
          >
            <div className="ui-card" aria-hidden="true">
              <p className="ui-card__title">Travel policy</p>
              <p className="ui-card__sub">Applies to every employee</p>
              <ProductRow className="ui-rule">
                <span>
                  <span className="ui-rule__k">Hotels</span>
                  <span className="ui-rule__v">Up to $250 a night</span>
                </span>
                <Badge variant="success" tick>
                  Set
                </Badge>
              </ProductRow>
              <ProductRow className="ui-rule">
                <span>
                  <span className="ui-rule__k">Flights</span>
                  <span className="ui-rule__v">Economy for flights under 6 hours</span>
                </span>
                <Badge variant="success" tick>
                  Set
                </Badge>
              </ProductRow>
              <ProductRow className="ui-rule">
                <span>
                  <span className="ui-rule__k">Approvals</span>
                  <span className="ui-rule__v">Out of policy goes to an approver</span>
                </span>
                <Badge variant="success" tick>
                  Set
                </Badge>
              </ProductRow>
            </div>
            <figcaption className="mr-caption">Product view with illustrative data.</figcaption>
          </figure>
          <h2 className="mr-h2" id="what-does-finance-see-at-month-end">
            What does finance see at month-end?
          </h2>
          <p>
            Every booking arrives with its budget and GL code. Finance gets a dashboard for every
            trip, finance analytics and a full audit log of who booked what, and when. Receipts are
            matched to card charges and checked against policy, and reimbursements are tracked.
          </p>
          <p>
            Our guide to <Link to="/resources/travel-expense-report">travel expense reports</Link>{' '}
            covers the month-end steps that take the longest, and how to shorten them in any tool.
            See <Link to="/finance">travel and expense management for finance</Link> for the Miraee
            screens.
          </p>
          <h2 className="mr-h2" id="what-happens-when-plans-change">
            What happens when plans change?
          </h2>
          <p>
            When a flight is delayed or canceled, the traveler gets an alert and new options to
            confirm, in the app. The change and any fare difference are recorded in the audit log.
            Changes and cancellations are a common sore point: 64% of travel managers say they are
            hard in their booking tool.
          </p>
          <h2 className="mr-h2" id="check-last-year-s-travel-from-your-concur-extract">
            Check last year's travel from your Concur extract
          </h2>
          <p>
            The spend review accepts one file: an agency booking report or an expense extract from
            your expense system. If your expense data lives in Concur today, an extract is enough.
            The review shows four things from your own data:
          </p>
          <ol>
            <li>Bookings made outside your travel program</li>
            <li>Spend outside policy</li>
            <li>The cost of booking late, on your own routes</li>
            <li>Unused or expired tickets</li>
          </ol>
          <p>
            Any savings figure is a dollar range, with the method and the data period beside it. The
            review is optional, you can sign up without one, and the report is yours to keep.
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
            <strong>Where SAP Concur fits.</strong> Concur offers travel, expense and invoice
            products from one vendor (concur.com, checked September 30, 2026). If your expense and
            invoice processes already run there, and your travelers and approvers use it well, it
            may be the right place to stay.
          </p>
          <p>
            <strong>Where Miraee fits.</strong> US companies of 300 to 1,500 people that want travel
            booking their people can pick up quickly, policy on every booking, every trip coded for
            finance, and onboarding they do not have to fund. Miraee replaces your booking tool and
            your agency's routine flight and hotel bookings. You keep your corporate cards.
          </p>
          <p>
            Also comparing other tools? See <Link to="/compare/navan">Navan alternatives</Link> and{' '}
            <Link to="/compare/perk">TravelPerk alternatives</Link>.
          </p>
          <InlineFaq items={faq} />
        </div>
      </Container>
    </div>
  )
}
