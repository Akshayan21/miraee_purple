import { InlineFaq } from '@/components/sections/faq'
import { faq } from '../faq'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'

export function HowDoYouCloseSection() {
  return (
    <div className="mr-section lf-article">
      <div className="mr-container lf-grid">
        <nav className="lf-toc" aria-label="On this page">
          <p className="lf-toc__h">On this page</p>
          <ol>
            <li>
              <a href="#how-do-you-close-month-end-faster-on-travel">
                How do you close month-end faster on travel?
              </a>
            </li>
            <li>
              <a href="#what-a-travel-expense-report-should-contain">
                What a travel expense report should contain
              </a>
            </li>
            <li>
              <a href="#why-travel-slows-month-end-close">Why travel slows month-end close</a>
            </li>
            <li>
              <a href="#five-habits-that-shorten-the-close">Five habits that shorten the close</a>
            </li>
            <li>
              <a href="#travel-month-end-close-checklist">Travel month-end close checklist</a>
            </li>
            <li>
              <a href="#what-to-track-after-every-close">What to track after every close</a>
            </li>
            <li>
              <a href="#receipts-set-expectations-early">Receipts: set expectations early</a>
            </li>
            <li>
              <a href="#accruals-unused-tickets-and-the-year-end-close">
                Accruals, unused tickets and the year-end close
              </a>
            </li>
            <li>
              <a href="#how-miraee-helps-with-travel-expense-reports">
                How Miraee helps with travel expense reports
              </a>
            </li>
            <li>
              <a href="#questions">Questions</a>
            </li>
          </ol>
        </nav>
        <div className="lf-prose">
          <h2 className="mr-h2" id="how-do-you-close-month-end-faster-on-travel">
            How do you close month-end faster on travel?
          </h2>
          <p>
            Code every trip at booking, so each cost arrives with its budget, cost center and GL
            code. Match receipts to card charges as they come in, not at the end of the month.
            Review only the exceptions: missing receipts, out-of-policy spend and unmatched charges.
            Then reconcile card statements against trips and lock the period.
          </p>
          <h2 className="mr-h2" id="what-a-travel-expense-report-should-contain">
            What a travel expense report should contain
          </h2>
          <p>A report a controller can approve in one pass has the same fields every time:</p>
          <div className="compare-wrap">
            <table className="gtable">
              <thead>
                <tr>
                  <th scope="col">Field</th>
                  <th scope="col">Why finance needs it</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-col="Field">Traveler and approver</td>
                  <td data-col="Why finance needs it">Who spent it and who signed off</td>
                </tr>
                <tr>
                  <td data-col="Field">Trip name and dates</td>
                  <td data-col="Why finance needs it">Groups every cost of one trip together</td>
                </tr>
                <tr>
                  <td data-col="Field">Business purpose</td>
                  <td data-col="Why finance needs it">
                    Supports the deduction and the audit trail
                  </td>
                </tr>
                <tr>
                  <td data-col="Field">Cost center, entity and GL code</td>
                  <td data-col="Why finance needs it">Posts the cost to the right place</td>
                </tr>
                <tr>
                  <td data-col="Field">Each expense: date, merchant, category, amount</td>
                  <td data-col="Why finance needs it">The line items finance checks</td>
                </tr>
                <tr>
                  <td data-col="Field">Payment method</td>
                  <td data-col="Why finance needs it">
                    Corporate card or personal card, which decides whether it is reimbursed
                  </td>
                </tr>
                <tr>
                  <td data-col="Field">Receipt for each line</td>
                  <td data-col="Why finance needs it">Proof of the amount and the items</td>
                </tr>
                <tr>
                  <td data-col="Field">Policy status</td>
                  <td data-col="Why finance needs it">
                    Whether each line is inside policy, and the reason where it is not
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            The trip is the right unit. When flight, hotel, ground and meals for one trip sit
            together, an approver can see in seconds whether the trip made sense. When they arrive
            as separate card lines across two statements, nobody can.
          </p>
          <h2 className="mr-h2" id="why-travel-slows-month-end-close">
            Why travel slows month-end close
          </h2>
          <p>
            Travel is a small share of most companies' costs and a large share of the questions at
            close. The reasons repeat:
          </p>
          <ul>
            <li>
              <strong>Codes are added late.</strong> Travelers guess a cost center at expense time,
              or leave it for finance.
            </li>
            <li>
              <strong>Receipts arrive after the charges.</strong> Card lines post in days; receipts
              come in weeks later, or not at all.
            </li>
            <li>
              <strong>The trip is split across systems.</strong> The flight is on the agency report,
              the hotel on the card, the meals on a personal card.
            </li>
            <li>
              <strong>Exceptions are found at the end.</strong> An out-of-policy hotel is discovered
              during review, when the only option is to approve it.
            </li>
          </ul>
          <p>
            The common thread is timing. Most of the work of a clean close happens before the month
            ends, at booking and when each charge posts.
          </p>
          <h2 className="mr-h2" id="five-habits-that-shorten-the-close">
            Five habits that shorten the close
          </h2>
          <p>
            <strong>1. Code at booking.</strong> Set GL codes, cost centers and budgets once, and
            attach them to the trip when it is booked. Travelers never choose a code.
          </p>
          <p>
            <strong>2. Match receipts as charges post.</strong> Ask travelers to upload receipts
            during the trip. Match each one to its card charge the same week, while details are
            fresh.
          </p>
          <p>
            <strong>3. Check policy before spend, not after.</strong> When options are marked in or
            out of policy at booking, fewer exceptions reach the close.
          </p>
          <p>
            <strong>4. Keep one trip record.</strong> Every cost of a trip, from any card or report,
            belongs on one record with its code.
          </p>
          <p>
            <strong>5. Review exceptions only.</strong> Most lines are routine. Put your time into
            missing receipts, unmatched charges and out-of-policy lines.
          </p>
          <h2 className="mr-h2" id="travel-month-end-close-checklist">
            Travel month-end close checklist
          </h2>
          <p>
            Use this checklist at every close. Copy it into your close plan and assign an owner to
            each line.
          </p>
          <p>
            <strong>Before month-end (weekly)</strong>
          </p>
          <ul className="tasks">
            <li className="task">
              Every trip booked this week has a cost center, entity and GL code
            </li>
            <li className="task">Receipts uploaded for trips that ended this week</li>
            <li className="task">Card charges matched to receipts; unmatched charges listed</li>
            <li className="task">Out-of-policy bookings have an approval and a reason</li>
          </ul>
          <p>
            <strong>Close week, day 1 to 2</strong>
          </p>
          <ul className="tasks">
            <li className="task">Card statements downloaded for every corporate card program</li>
            <li className="task">Every card line matched to a trip and a receipt, or flagged</li>
            <li className="task">
              Reminder sent to travelers with missing receipts, with the deadline
            </li>
            <li className="task">Personal-card expenses reviewed and approved for reimbursement</li>
          </ul>
          <p>
            <strong>Close week, day 3 to 4</strong>
          </p>
          <ul className="tasks">
            <li className="task">Unmatched charges resolved or accrued with a note</li>
            <li className="task">
              Unused and canceled tickets recorded against the traveler, with expiry dates
            </li>
            <li className="task">Travel accruals booked for trips taken but not yet expensed</li>
            <li className="task">Spend by cost center compared with budget; variances explained</li>
          </ul>
          <p>
            <strong>Close week, day 5</strong>
          </p>
          <ul className="tasks">
            <li className="task">Reimbursements released in the payment run</li>
            <li className="task">Exceptions log saved with the period's close file</li>
            <li className="task">Period locked for travel and expense entries</li>
            <li className="task">
              Three questions noted for the policy owner: which limits were exceeded most, which
              teams booked outside the channel, which receipts went missing
            </li>
          </ul>
          <h2 className="mr-h2" id="what-to-track-after-every-close">
            What to track after every close
          </h2>
          <div className="compare-wrap">
            <table className="gtable">
              <thead>
                <tr>
                  <th scope="col">Measure</th>
                  <th scope="col">Why it matters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-col="Measure">Days from period end to travel close</td>
                  <td data-col="Why it matters">
                    The headline measure of how much travel slows the close
                  </td>
                </tr>
                <tr>
                  <td data-col="Measure">Card lines unmatched at day 3</td>
                  <td data-col="Why it matters">Shows whether receipts arrive on time</td>
                </tr>
                <tr>
                  <td data-col="Measure">Out-of-policy lines found at close</td>
                  <td data-col="Why it matters">Should fall as policy moves to booking time</td>
                </tr>
                <tr>
                  <td data-col="Measure">Missing receipts per 100 trips</td>
                  <td data-col="Why it matters">
                    Tells you which teams need a reminder or a simpler process
                  </td>
                </tr>
                <tr>
                  <td data-col="Measure">Unused ticket value open</td>
                  <td data-col="Why it matters">
                    Money you can still recover before tickets expire
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Track them for three months before you change anything big. The trend shows where the
            time goes.
          </p>
          <h2 className="mr-h2" id="receipts-set-expectations-early">
            Receipts: set expectations early
          </h2>
          <p>
            Receipt rules cause the most back-and-forth, so keep them simple and state them once:
          </p>
          <ul>
            <li>Upload an itemized receipt for every expense, during the trip where possible.</li>
            <li>A card slip alone is not enough, because it does not show the items.</li>
            <li>
              For a lost receipt, a short written statement with merchant, date, items and amount.
            </li>
            <li>Expenses are due within 30 days of the end of the trip.</li>
          </ul>
          <p>
            Our guide to the{' '}
            <Link to="/resources/travel-and-expense-policy">travel and expense policy</Link> has
            example wording for each of these rules.
          </p>
          <h2 className="mr-h2" id="accruals-unused-tickets-and-the-year-end-close">
            Accruals, unused tickets and the year-end close
          </h2>
          <p>Two items catch finance teams out at quarter-end and year-end more than any others.</p>
          <p>
            <strong>Travel accruals.</strong> A trip taken in the last week of the month often
            reaches expenses in the next one. Book an accrual for trips that ended in the period but
            have not been claimed, using the booked cost of flights and hotels as the estimate. When
            the booked cost already sits on the trip record with its code, the accrual takes
            minutes.
          </p>
          <p>
            <strong>Unused tickets.</strong> When a flight is canceled, the ticket value can often
            be reused before it expires. Keep a list of open ticket credits by traveler, airline,
            value and expiry date. Check it each month and remind travelers before a credit lapses.
            At year-end, review credits that expired during the year, because they show which teams
            cancel most and whether the booking window needs a change.
          </p>
          <p>
            <strong>Year-end.</strong> Close December with the same checklist, then add three steps:
            confirm that every card program's final statement is matched, clear or accrue every open
            personal-card claim, and save the year's exceptions log for your auditors.
          </p>
          <div className="lf-product mr-paper">
            <p className="lf-product__k">From Miraee</p>
            <h2 className="mr-h2" id="how-miraee-helps-with-travel-expense-reports">
              How Miraee helps with travel expense reports
            </h2>
            <p>
              Miraee is business travel and expense software. It moves most of the close work to the
              moment of booking.
            </p>
            <ul>
              <li>
                <strong>Every trip arrives with its GL code and budget,</strong> ready for
                month-end.
              </li>
              <li>
                <strong>Receipts matched to card charges and checked against policy.</strong>{' '}
                Travelers upload receipts, and Miraee matches them to the card charge.
              </li>
              <li>
                <strong>Reimbursements tracked,</strong> with a finance dashboard and finance
                analytics.
              </li>
              <li>
                <strong>A full audit log</strong> of who booked what, and when, and every change.
              </li>
              <li>
                <strong>Keep the corporate cards you already use.</strong> Miraee sits beside the
                card platform your finance team runs today:{' '}
                <Link to="/compare/ramp">use Miraee beside your card platform</Link>.
              </li>
            </ul>
            <p>
              Sign-up and onboarding are free at any company size. See{' '}
              <Link to="/finance">travel and expense management for finance</Link> or{' '}
              <Link to="/how-it-works">see how it works</Link>.
            </p>
            <figure
              className="lf-view mr-paper"
              role="img"
              aria-label="A hotel receipt matched to its corporate card charge, in policy"
            >
              <div className="match" aria-hidden="true">
                <div className="match__card">
                  <p className="match__label">
                    <img src="/img/icons/receipt.svg" alt="" width="18" height="18" />
                    Receipt
                  </p>
                  <p className="match__name">Hotel, 2 nights, Chicago</p>
                  <p className="match__meta">Oct 6 to Oct 8 · Priya N.</p>
                  <p className="match__amt">$482.20</p>
                </div>
                <span className="match__join"></span>
                <div className="match__card">
                  <p className="match__label">
                    <img src="/img/icons/credit-card.svg" alt="" width="18" height="18" />
                    Card charge
                  </p>
                  <p className="match__name">Corporate card ending 4417</p>
                  <p className="match__meta">Posted Oct 8 · Client visit, Chicago</p>
                  <p className="match__amt">$482.20</p>
                </div>
                <Badge variant="success" tick className="match__status">
                  Matched · In policy
                </Badge>
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
