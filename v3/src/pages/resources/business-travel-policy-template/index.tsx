import { Link } from 'react-router-dom'

import { Seo } from '@/components/common/seo'
import { DialogLink } from '@/components/forms/form-dialogs-context'
import { TemplateDialog } from '@/components/forms/form-dialogs'
import { Article, Band, Byline, DataTable, PageHero, Split } from '@/components/page/kit'
import { Button } from '@/components/ui/button'
import shared from '@/pages/home/home-shared.module.css'
import { Checklist, DocCover, ResourcesClosing } from '../overview/guide-parts'
import { meta } from './meta'
import styles from './template.module.css'

const TOC = [
  { href: '#how-to-use-this-template', label: 'How to use this template' },
  { href: '#1-purpose-scope-and-ownership', label: '1. Purpose, scope and ownership' },
  { href: '#2-how-to-book', label: '2. How to book' },
  { href: '#3-approvals', label: '3. Approvals' },
  { href: '#4-flights', label: '4. Flights' },
  { href: '#5-hotels', label: '5. Hotels' },
  { href: '#6-ground-transport', label: '6. Ground transport' },
  { href: '#7-meals-and-entertainment', label: '7. Meals and entertainment' },
  { href: '#8-when-plans-change', label: '8. When plans change' },
  { href: '#9-paying-for-travel', label: '9. Paying for travel' },
  { href: '#10-expenses-and-receipts', label: '10. Expenses and receipts' },
  { href: '#11-reimbursement', label: '11. Reimbursement' },
  { href: '#12-exceptions-and-review', label: '12. Exceptions and review' },
  { href: '#rollout-checklist-the-first-30-days', label: 'Rollout checklist: the first 30 days' },
  { href: '#about-miraee', label: 'About Miraee' },
]

type Rows = Array<[string, string]>

const FLIGHTS: Rows = [
  [
    'Cabin class',
    'Economy for flights under 6 hours; premium economy for flights of 6 hours or more',
  ],
  ['Business class', 'For flights over 10 hours, with approval'],
  [
    'Fare',
    'The lowest logical fare: a reasonable departure time and up to one stop more than the fastest option',
  ],
  [
    'Booking window',
    'Book domestic flights 14 days ahead and international flights 21 days ahead where the trip allows',
  ],
  ['Bags and seats', 'One checked bag and standard seat selection are covered'],
  [
    'Loyalty programs',
    'Travelers may keep personal miles and points; loyalty never decides the choice of flight',
  ],
]

const HOTELS: Rows = [
  ['Nightly limit, standard cities', 'Up to $250 a night'],
  [
    'Nightly limit, high-cost cities (for example New York, San Francisco, Boston, Washington DC)',
    'Up to $375 a night',
  ],
  ['International', 'Set by city with the policy owner'],
  [
    'Event hotels',
    'Allowed above the limit when booked for a conference or client event; add the reason when booking',
  ],
  [
    'Long stays',
    'Stays of 7 nights or more can use serviced apartments at or below the nightly limit',
  ],
  ['Room type', 'A standard room; upgrades are a personal cost'],
]

const GROUND: Rows = [
  ['Rideshare and taxis', 'Standard options to and from airports, hotels and business locations'],
  [
    'Rental cars',
    "Midsize or smaller, when cheaper or more practical than rideshare; decline extra insurance covered by the company's policy",
  ],
  ['Rail', 'Standard class; business class for journeys over 3 hours'],
  ['Personal car', 'Mileage at the IRS standard rate for the year of travel'],
  ['Parking and tolls', 'Covered with a receipt'],
]

const MEALS: Rows = [
  ['Daily meal limit, standard cities', 'Up to $75 a day at actual cost'],
  ['Daily meal limit, high-cost cities', 'Up to $100 a day at actual cost'],
  ['Client meals', 'Approved by the budget owner; list attendees and the business purpose'],
  ['Alcohol', 'Reasonable amounts with client meals only'],
  ['Team meals while traveling', 'Paid by the most senior person present'],
]

const WEEKS: Array<[string, string[]]> = [
  [
    'Week 1: agree the numbers',
    [
      'Flight, hotel and meal limits agreed with finance',
      'Approval threshold and approvers agreed',
      'Cost centers and GL codes for travel confirmed',
      'Policy owner and approver of changes named in section 1',
    ],
  ],
  [
    'Week 2: set it up',
    [
      'Limits and approval rules set up in the booking tool',
      'Travelers, assistants and approvers added',
      'Corporate cards added in payment settings',
      'One test trip booked inside policy and one outside it, followed to the approver',
    ],
  ],
  [
    'Week 3: announce it',
    [
      'Approvers briefed on what will reach them',
      'One message to everyone who travels: where to book, the three limits people ask about most, who to ask',
      'Policy saved where people look for it, with a link in the booking tool',
    ],
  ],
  [
    'Week 4: check it',
    [
      'Questions collected from the first two weeks',
      'First month-end reviewed: bookings outside the tool, exceptions, missing receipts',
      'Three rules that caused the most questions rewritten',
      'Next review date set, six months out',
    ],
  ],
]

function RuleTable({ rows }: { rows: Rows }) {
  return (
    <DataTable>
      <table>
        <thead>
          <tr>
            <th scope="col">Rule</th>
            <th scope="col">Suggested starting point</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([rule, start]) => (
            <tr key={rule}>
              <th scope="row">{rule}</th>
              <td>{start}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DataTable>
  )
}

/** Route: /resources/business-travel-policy-template */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <PageHero
          crumbs={[
            { label: 'Home', to: '/' },
            { label: 'Resources', to: '/resources' },
            { label: 'Business travel policy template' },
          ]}
          eyebrow="Free template"
          title="Business travel policy template for growing companies"
          lead="A complete travel policy you can edit and adopt, with a one-page rollout checklist. Preview every section below, then download it as Word or PDF."
          actions={
            <>
              <Button asChild>
                <DialogLink dialog="template" to="#download">
                  Download the template
                </DialogLink>
              </Button>
              <Button asChild variant="secondary">
                <a href="#preview">Preview it below</a>
              </Button>
            </>
          }
          visual={<DocCover large />}
        >
          <Byline>
            {'Word and PDF · 12 policy sections · One-page rollout checklist · Updated '}
            <time dateTime="2026-09-30">{'September 30, 2026'}</time>
          </Byline>
        </PageHero>

        <Article toc={TOC}>
          <div className={styles.doc} id="preview">
            <h2 id="how-to-use-this-template">How to use this template</h2>
            <ol>
              <li>
                <strong>Read it once as a traveler would.</strong> Every rule should answer a
                question someone asks when booking.
              </li>
              <li>
                <strong>Set the numbers with finance.</strong> The suggested starting points are
                common choices for a US company of this size. Change each one to fit your budget,
                routes and cities.
              </li>
              <li>
                <strong>Keep what fits, cut what does not.</strong> A shorter policy that people
                follow beats a longer one they skip.
              </li>
              <li>
                <strong>Name the owner and approver.</strong> Section 1 sets who owns the policy and
                who approves changes.
              </li>
              <li>
                <strong>Set it up where people book.</strong> The limits work best when the booking
                tool shows each option as in or out of policy.
              </li>
              <li>
                <strong>Roll it out with the checklist.</strong> The last page is a one-page plan
                for the first 30 days.
              </li>
            </ol>
            <p>
              In this template, &quot;the company&quot; means the employer adopting the policy, and
              &quot;traveler&quot; means anyone traveling on the company&apos;s business.
            </p>

            <h2 id="1-purpose-scope-and-ownership">1. Purpose, scope and ownership</h2>
            <p>
              <strong>Purpose.</strong> This policy helps our people travel safely and comfortably
              for work, and helps the company spend on travel with care. It sets out how to book,
              what the company pays for, how to claim expenses and how you get your money back.
            </p>
            <p>
              <strong>Who it covers.</strong> Employees and contractors who travel on company
              business, and guests whose travel the company pays for.
            </p>
            <p>
              <strong>Ownership.</strong> The Head of Operations owns this policy. The CFO approves
              changes to limits and approval rules. Questions go to the policy owner.
            </p>
            <p>
              <strong>Principle.</strong> Spend the company&apos;s money as you would spend your own
              on a business trip: on what the work needs, at a fair price.
            </p>

            <h2 id="2-how-to-book">2. How to book</h2>
            <p>
              <strong>Book flights and hotels through the company booking tool.</strong> It shows
              every option as in or out of policy, applies the right budget and code, and gives you
              help when plans change.
            </p>
            <p>
              <strong>Complex trips.</strong> Group travel, events and trips with more than three
              destinations can be booked with the help of the policy owner.
            </p>
            <p>
              <strong>Booking for others.</strong> Assistants and office admins may book on behalf
              of the people they support. The same rules apply.
            </p>
            <p>
              <strong>Bookings made elsewhere.</strong> If you book outside the company tool, add
              the reason when you submit the expense. Repeated bookings outside the tool are
              reviewed with your manager.
            </p>

            <h2 id="3-approvals">3. Approvals</h2>
            <p>
              <strong>Trips inside this policy book straight away.</strong>
            </p>
            <p>
              <strong>Approval is needed before booking for:</strong>
            </p>
            <ul>
              <li>Any flight, hotel or cost outside the limits in this policy</li>
              <li>International trips</li>
              <li>Trips with a total estimated cost above $3,000</li>
              <li>Travel for guests and candidates</li>
            </ul>
            <p>
              <strong>Who approves.</strong> Your budget owner. If your budget owner is traveling
              with you, their manager approves.
            </p>
            <p>
              <strong>Add a reason.</strong> Every approval request includes the business reason
              and, for exceptions, why the in-policy option does not work.
            </p>

            <h2 id="4-flights">4. Flights</h2>
            <RuleTable rows={FLIGHTS} />

            <h2 id="5-hotels">5. Hotels</h2>
            <RuleTable rows={HOTELS} />

            <h2 id="6-ground-transport">6. Ground transport</h2>
            <RuleTable rows={GROUND} />

            <h2 id="7-meals-and-entertainment">7. Meals and entertainment</h2>
            <RuleTable rows={MEALS} />

            <h2 id="8-when-plans-change">8. When plans change</h2>
            <p>
              <strong>Delays and cancellations.</strong> When a flight is delayed or canceled, use
              the company booking tool first. It shows what happened and your new options. Confirm
              the one that suits you.
            </p>
            <p>
              <strong>Changes you choose.</strong> Change a booking through the company tool, so the
              change and any fare difference are recorded.
            </p>
            <p>
              <strong>Unused tickets.</strong> If you cancel a flight, the ticket value is recorded
              against your name. Use it on your next trip before it expires.
            </p>
            <p>
              <strong>Travel help.</strong> If the booking tool cannot solve the problem, call the
              policy owner during business hours, or your manager outside them. Your safety comes
              first: book what you need to get somewhere safe, and explain afterwards.
            </p>

            <h2 id="9-paying-for-travel">9. Paying for travel</h2>
            <p>
              <strong>Corporate card.</strong> Use your corporate card for flights, hotels and
              ground transport. Keep personal spending off it. If a personal charge lands on the
              card by mistake, flag it within five business days.
            </p>
            <p>
              <strong>Personal card.</strong> If you have no corporate card, use a personal card and
              claim the cost as an expense.
            </p>
            <p>
              <strong>Cash advances.</strong> Available for international trips where cards are not
              widely accepted, with approval.
            </p>

            <h2 id="10-expenses-and-receipts">10. Expenses and receipts</h2>
            <p>
              <strong>What the company pays for.</strong> The costs in sections 4 to 7, plus
              business calls, internet while traveling, visas and required vaccinations for the
              trip.
            </p>
            <p>
              <strong>What the company does not pay for.</strong> Personal items, upgrades you
              choose, fines, in-room entertainment, and personal days added to a trip.
            </p>
            <p>
              <strong>Receipts.</strong> Upload an itemized receipt for every expense, during the
              trip where possible. A valid receipt shows the merchant, date, items and amount paid.
              For a lost receipt, submit a short written statement with the same details.
            </p>
            <p>
              <strong>Deadline.</strong> Submit expenses within 30 days of the end of the trip.
              Claims older than 90 days need approval from finance.
            </p>
            <p>
              <strong>Coding.</strong> Every trip is coded to a cost center and GL code before
              booking. Finance sets the codes.
            </p>
            <p>
              <strong>Review.</strong> Your manager approves your expenses. They check that each
              item has a business purpose, sits inside this policy and has a receipt.
            </p>

            <h2 id="11-reimbursement">11. Reimbursement</h2>
            <p>
              Approved expenses are paid in the next payment run after approval. Mileage is paid at
              the IRS standard rate for the year of travel.
            </p>

            <h2 id="12-exceptions-and-review">12. Exceptions and review</h2>
            <p>
              <strong>Exceptions.</strong> Your budget owner may approve an exception before you
              book. Exceptions after the fact go to finance.
            </p>
            <p>
              <strong>Misuse.</strong> Claims that break this policy may be declined, and repeated
              misuse is handled under the company&apos;s code of conduct.
            </p>
            <p>
              <strong>Review.</strong> The policy owner reviews this policy twice a year, and after
              any big change in how the company travels. Changes are recorded in the change log
              below.
            </p>
            <DataTable>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Version</th>
                    <th scope="col">Date</th>
                    <th scope="col">Change</th>
                    <th scope="col">Approved by</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1.0</td>
                    <td>Date of adoption</td>
                    <td>Policy adopted</td>
                    <td>CFO</td>
                  </tr>
                </tbody>
              </table>
            </DataTable>

            <h2 id="rollout-checklist-the-first-30-days">Rollout checklist: the first 30 days</h2>
            {WEEKS.map(([week, items]) => (
              <div key={week} className={styles.week}>
                <p>
                  <strong>{week}</strong>
                </p>
                <Checklist items={items} />
              </div>
            ))}

            <h2 id="about-miraee">About Miraee</h2>
            <p>
              Miraee is business travel and expense software. Your people book flights and hotels
              inside company policy, and finance sees every trip with its budget and GL code. Every
              option is marked in or out of policy, approvals only come in when something is out of
              policy, and when plans change your traveler gets an alert and new options to confirm.
              Signing up and onboarding are free, at any company size: we set up your company, your
              travel policy and your people with you. Miraee is built by Tabhi, the company behind
              the Mondee travel marketplace. miraee.ai
            </p>
          </div>
        </Article>

        <Band tone="plum" id="download" aria-labelledby="dl-h">
          <Split
            dark
            copy={
              <div className={styles.dlCopy}>
                <h2 id="dl-h" className={shared.h2}>
                  Download the editable template
                </h2>
                <p className={shared.lead}>
                  The Word file you can edit, a designed PDF to share, and the one-page rollout
                  checklist. Tell us where to send a copy.
                </p>
                <div className={shared.buttons}>
                  <Button asChild>
                    <DialogLink dialog="template" to="#download">
                      Download the template
                    </DialogLink>
                  </Button>
                </div>
              </div>
            }
            visual={
              <ul className={styles.links}>
                <li>
                  <Link to="/resources/business-travel-policy">
                    How to write a business travel policy
                  </Link>
                </li>
                <li>
                  <Link to="/resources/travel-and-expense-policy">Travel and expense policy</Link>
                </li>
                <li>
                  <Link to="/travel-managers">For travel managers</Link>
                </li>
              </ul>
            }
          />
        </Band>

        <ResourcesClosing
          title="Put your policy on every booking."
          accent="on every booking."
          body="Miraee is business travel and expense software. Free to sign up and onboard, at any company size, and we set up your travel policy with you."
          secondary={{ label: 'For travel managers', to: '/travel-managers' }}
        />
      </main>
      <TemplateDialog />
    </>
  )
}
Component.displayName = 'BusinessTravelPolicyTemplatePage'
