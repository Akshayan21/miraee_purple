import { InlineFaq } from '@/components/sections/faq'
import { faq } from '../faq'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function WhatShouldATravelSection() {
  return (
    <div className="mr-section lf-article">
      <div className="mr-container lf-grid">
        <nav className="lf-toc" aria-label="On this page">
          <p className="lf-toc__h">On this page</p>
          <ol>
            <li>
              <a href="#what-should-a-travel-and-expense-policy-include">
                What should a travel and expense policy include?
              </a>
            </li>
            <li>
              <a href="#travel-policy-expense-policy-or-both">
                Travel policy, expense policy or both?
              </a>
            </li>
            <li>
              <a href="#the-sections-to-include">The sections to include</a>
            </li>
            <li>
              <a href="#example-wording-you-can-copy">Example wording you can copy</a>
            </li>
            <li>
              <a href="#limits-that-finance-can-defend">Limits that finance can defend</a>
            </li>
            <li>
              <a href="#code-every-trip-at-the-start">Code every trip at the start</a>
            </li>
            <li>
              <a href="#receipts-and-reimbursement">Receipts and reimbursement</a>
            </li>
            <li>
              <a href="#how-to-review-claims-without-slowing-everyone-down">
                How to review claims without slowing everyone down
              </a>
            </li>
            <li>
              <a href="#exceptions-you-will-see-every-month">Exceptions you will see every month</a>
            </li>
            <li>
              <a href="#how-miraee-supports-a-travel-and-expense-policy">
                How Miraee supports a travel and expense policy
              </a>
            </li>
            <li>
              <a href="#questions">Questions</a>
            </li>
          </ol>
        </nav>
        <div className="lf-prose">
          <h2 className="mr-h2" id="what-should-a-travel-and-expense-policy-include">
            What should a travel and expense policy include?
          </h2>
          <p>
            A travel and expense policy should cover what is reimbursable, the limits for flights,
            hotels, meals and ground transport, what counts as a valid receipt, the deadline to
            submit, who approves, how expenses are coded and when employees are paid back. Write
            each rule with a number and an example, so employees, approvers and auditors read it the
            same way.
          </p>
          <h2 className="mr-h2" id="travel-policy-expense-policy-or-both">
            Travel policy, expense policy or both?
          </h2>
          <p>
            A business travel policy covers booking: where to book, cabin class, hotel limits and
            approvals. An expense policy covers what happens after the money is spent: receipts,
            submission, review and reimbursement. For a company of 300 to 1,500 people, one combined
            travel and expense policy is usually easier to maintain, because the same limits apply
            before and after the trip.
          </p>
          <p>
            If you already have a booking policy, keep it and add the expense sections below. Our
            guide on{' '}
            <Link to="/resources/business-travel-policy">
              how to write a business travel policy
            </Link>{' '}
            covers the booking side.
          </p>
          <h2 className="mr-h2" id="the-sections-to-include">
            The sections to include
          </h2>
          <div className="compare-wrap">
            <table className="gtable">
              <thead>
                <tr>
                  <th scope="col">Section</th>
                  <th scope="col">What it answers</th>
                  <th scope="col">Who reads it most</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-col="Section">Scope and principles</td>
                  <td data-col="What it answers">
                    Who is covered and what "reasonable and necessary" means here
                  </td>
                  <td data-col="Who reads it most">Everyone</td>
                </tr>
                <tr>
                  <td data-col="Section">Reimbursable and non-reimbursable items</td>
                  <td data-col="What it answers">
                    What the company pays for, and what it does not
                  </td>
                  <td data-col="Who reads it most">Travelers, approvers</td>
                </tr>
                <tr>
                  <td data-col="Section">Limits by category</td>
                  <td data-col="What it answers">
                    Flights, hotels, meals, ground transport, per diem
                  </td>
                  <td data-col="Who reads it most">Travelers, approvers</td>
                </tr>
                <tr>
                  <td data-col="Section">Company card and personal card</td>
                  <td data-col="What it answers">
                    When to use the corporate card, and how personal spend is handled
                  </td>
                  <td data-col="Who reads it most">Travelers, controllers</td>
                </tr>
                <tr>
                  <td data-col="Section">Receipts</td>
                  <td data-col="What it answers">
                    What a valid receipt shows, and what to do when one is lost
                  </td>
                  <td data-col="Who reads it most">Travelers, AP</td>
                </tr>
                <tr>
                  <td data-col="Section">Submission deadline</td>
                  <td data-col="What it answers">How many days after the trip expenses are due</td>
                  <td data-col="Who reads it most">Travelers, AP</td>
                </tr>
                <tr>
                  <td data-col="Section">Approval</td>
                  <td data-col="What it answers">Who approves, and what they check</td>
                  <td data-col="Who reads it most">Approvers</td>
                </tr>
                <tr>
                  <td data-col="Section">Coding</td>
                  <td data-col="What it answers">
                    Which GL codes, cost centers and entities apply
                  </td>
                  <td data-col="Who reads it most">Finance</td>
                </tr>
                <tr>
                  <td data-col="Section">Reimbursement</td>
                  <td data-col="What it answers">When and how employees are paid back</td>
                  <td data-col="Who reads it most">Travelers, payroll</td>
                </tr>
                <tr>
                  <td data-col="Section">Audit and exceptions</td>
                  <td data-col="What it answers">
                    How claims are checked, and how exceptions are handled
                  </td>
                  <td data-col="Who reads it most">Finance, auditors</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="mr-h2" id="example-wording-you-can-copy">
            Example wording you can copy
          </h2>
          <p>
            Each example below is written to be read once and remembered. Adjust the numbers to your
            own budget.
          </p>
          <p>
            <strong>Scope.</strong> "This policy applies to employees and contractors who travel or
            spend on the company's behalf. Expenses must be necessary for the business purpose of
            the trip."
          </p>
          <p>
            <strong>Reimbursable items.</strong> "The company pays for economy flights, hotels
            within the nightly limit, ground transport to and from business locations, meals up to
            the daily limit, and business calls and internet while traveling. Personal items,
            upgrades you choose, fines and in-room entertainment are personal costs."
          </p>
          <p>
            <strong>Hotels.</strong> "Book hotels within the nightly limit for your destination
            city. If the event hotel costs more, book it and add the reason when you book."
          </p>
          <p>
            <strong>Meals.</strong> "Meals are reimbursed at actual cost up to the daily limit for
            your destination. Client meals are approved by the budget owner and list the attendees
            and the business purpose."
          </p>
          <p>
            <strong>Corporate card.</strong> "Use your corporate card for flights, hotels and ground
            transport. Keep personal spending off the card. If a personal charge lands on it by
            mistake, flag it within five business days."
          </p>
          <p>
            <strong>Receipts.</strong> "Upload an itemized receipt for every expense. A valid
            receipt shows the merchant, date, items and amount paid. If you lose one, submit a short
            written statement with the same details."
          </p>
          <p>
            <strong>Deadline.</strong> "Submit expenses within 30 days of the end of your trip.
            Claims older than 90 days need approval from finance."
          </p>
          <p>
            <strong>Approval.</strong> "Your manager approves your expenses. The approver checks
            that each item has a business purpose, sits within policy and has a receipt."
          </p>
          <p>
            <strong>Coding.</strong> "Every trip is coded to a cost center and GL code before
            booking. Finance sets the codes; travelers do not choose them."
          </p>
          <p>
            <strong>Reimbursement.</strong> "Approved expenses are paid in the next payment run."
          </p>
          <h2 className="mr-h2" id="limits-that-finance-can-defend">
            Limits that finance can defend
          </h2>
          <p>
            Limits work when a traveler can check them before spending and an auditor can check them
            after. Three habits help:
          </p>
          <ol>
            <li>
              <strong>Set limits by city tier, and review them twice a year.</strong> A single
              national hotel limit either blocks trips to your most expensive cities or leaves room
              everywhere else.
            </li>
            <li>
              <strong>Separate the limit from the approval.</strong> "Up to $250 a night; above
              that, ask your budget owner" is clearer than a limit with silent exceptions.
            </li>
            <li>
              <strong>Use the same numbers in the booking tool.</strong> When the limits in the tool
              match the policy, most out-of-policy spend is stopped or explained before it happens.
            </li>
          </ol>
          <h2 className="mr-h2" id="code-every-trip-at-the-start">
            Code every trip at the start
          </h2>
          <p>
            The fastest month-ends begin at booking. When every trip carries its cost center and GL
            code from the moment it is booked, the controller spends the close reviewing exceptions
            instead of chasing codes. It also answers the CFO's first question about travel, "where
            did the money go?", by team and by trip.
          </p>
          <p>
            This is harder than it sounds in many companies, because travel data sits in several
            places: agency reports, card statements, expense reports and hotel folios. Only 12% of
            travel programs have their data in one place.
            <sup>
              <a href="#src-1" rel="noopener" aria-label="Source 1">
                1
              </a>
            </sup>{' '}
            A policy that names the codes, and a tool that applies them at booking, closes most of
            that gap.
          </p>
          <h2 className="mr-h2" id="receipts-and-reimbursement">
            Receipts and reimbursement
          </h2>
          <p>The receipt section causes the most questions, so answer them in advance:</p>
          <ul>
            <li>
              <strong>Which receipts count.</strong> Itemized receipts, not card slips.
            </li>
            <li>
              <strong>How to submit.</strong> Upload a photo or file; the original paper is optional
              unless your auditors ask for it.
            </li>
            <li>
              <strong>What happens to a lost receipt.</strong> A short written statement with
              merchant, date, items and amount.
            </li>
            <li>
              <strong>How long reimbursement takes.</strong> State the payment run, so employees
              know when to expect their money back.
            </li>
          </ul>
          <p>
            Employees remember how quickly they were paid back more than any other part of the
            policy. A clear date buys a lot of goodwill.
          </p>
          <h2 className="mr-h2" id="how-to-review-claims-without-slowing-everyone-down">
            How to review claims without slowing everyone down
          </h2>
          <p>
            Review every claim against three questions: is there a business purpose, is it within
            policy, is there a valid receipt? Most claims pass all three. Spend your review time on
            the ones that do not, on repeated exceptions from the same traveler or team, and on
            charges that appear on a card with no matching receipt.
          </p>
          <p>
            At quarter-end, look at the pattern rather than the single claim: which limits are
            exceeded most, which teams book outside the channel, which receipts go missing. Those
            patterns tell you which rule to change.
          </p>
          <h2 className="mr-h2" id="exceptions-you-will-see-every-month">
            Exceptions you will see every month
          </h2>
          <p>
            A few situations come up so often that the policy should answer them by name. Each
            answer below keeps the traveler moving and gives finance a record.
          </p>
          <ul>
            <li>
              <strong>The event hotel is above the limit.</strong> "Book the event hotel and add the
              reason when you book. It counts as in policy with the reason attached."
            </li>
            <li>
              <strong>A traveler adds personal days.</strong> "The company pays the flight if it
              costs the same or less than the business-only trip. Extra hotel nights and costs on
              personal days are yours."
            </li>
            <li>
              <strong>A flight is canceled and the new one costs more.</strong> "Confirm the new
              flight in the booking tool. The fare difference is recorded against the trip and needs
              no separate approval."
            </li>
            <li>
              <strong>A client pays for part of the trip.</strong> "Book as normal and note the
              client's share on the trip. Finance recharges it."
            </li>
            <li>
              <strong>Two employees share a car or a room.</strong> "One person claims the cost and
              lists the other traveler on the expense."
            </li>
          </ul>
          <p>Each of these, written once, removes a recurring email from someone's inbox.</p>
          <aside className="lf-callout mr-paper" aria-label="Business travel policy template">
            <div>
              <p className="lf-callout__k">Free template</p>
              <p className="lf-callout__h">
                The Business Travel Policy Template for Growing Companies
              </p>
              <p className="lf-callout__b">
                A complete travel and expense policy you can edit, with a one-page rollout
                checklist.
              </p>
            </div>
            <Button asChild>
              <Link to="/resources/business-travel-policy-template">
                <span className="mr-btn__u">Get the template</span>
              </Link>
            </Button>
          </aside>
          <div className="lf-product mr-paper">
            <p className="lf-product__k">From Miraee</p>
            <h2 className="mr-h2" id="how-miraee-supports-a-travel-and-expense-policy">
              How Miraee supports a travel and expense policy
            </h2>
            <p>
              Miraee is business travel and expense software. It applies the booking side of your
              policy on every trip and gives finance the record it needs.
            </p>
            <ul>
              <li>
                <strong>Set your travel policy, GL codes and budgets once.</strong> Miraee applies
                them to every booking.
              </li>
              <li>
                <strong>Options marked in or out of policy.</strong> Approvals only come in when
                something is out of policy.
              </li>
              <li>
                <strong>Receipts matched to card charges and checked against policy.</strong>{' '}
                Employees upload receipts; Miraee matches them to the card charge.
              </li>
              <li>
                <strong>Reimbursements tracked,</strong> with a finance dashboard and a full audit
                log of who booked what, and when.
              </li>
              <li>
                <strong>Keep the corporate cards you already use.</strong>
              </li>
            </ul>
            <p>
              Sign-up and onboarding are free at any company size. See{' '}
              <Link to="/finance">travel and expense management for finance</Link>.
            </p>
            <figure
              className="lf-view mr-paper"
              role="img"
              aria-label="A trip record for a client visit to Chicago, with each cost, the GL code and the total"
            >
              <div className="mr-trip-tag card-shadow lf-tag" aria-hidden="true">
                <div className="mr-trip-tag__head">
                  <div>
                    <p className="mr-trip-tag__title">Client visit, Chicago</p>
                    <p className="mr-trip-tag__sub">Oct 6 to Oct 8 · AUS to ORD</p>
                  </div>
                  <Badge variant="success">In policy</Badge>
                </div>
                <dl>
                  <dt>Flight</dt>
                  <dd>$512.40</dd>
                  <dt>Hotel, 2 nights</dt>
                  <dd>$482.20</dd>
                  <dt>Ground and meals</dt>
                  <dd>$290.00</dd>
                  <dt>GL code</dt>
                  <dd>
                    <span className="mr-circled">
                      GL 6200
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
                  </dd>
                  <dt className="mr-trip-tag__total">Total</dt>
                  <dd className="mr-trip-tag__total">$1,284.60</dd>
                </dl>
              </div>
              <figcaption className="mr-caption">Product view with illustrative data.</figcaption>
            </figure>
          </div>
          <InlineFaq items={faq} />
        </div>
      </div>
    </div>
  )
}
