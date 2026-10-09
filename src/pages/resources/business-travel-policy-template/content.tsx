import { CtaVideoBand } from '@/components/sections/cta-video-band'
import { Link } from 'react-router-dom'
import { DialogLink } from '@/components/forms/form-dialogs-context'
import { Button } from '@/components/ui/button'

export function TemplateContent() {
  return (
    <>
      <section className="mr-paper lf-hero lf-hero--frame" aria-labelledby="hero-h">
        <nav className="crumbs" aria-label="Breadcrumb">
          <div className="mr-container">
            <ol>
              <li>
                <Link to="/">{'Home'}</Link>
              </li>
              <li>
                <Link to="/resources">{'Resources'}</Link>
              </li>
              <li>
                <span aria-current="page">{'Business travel policy template'}</span>
              </li>
            </ol>
          </div>
        </nav>
        <div className="mr-container split">
          <div className="split__copy lf-hero__copy">
            <p className="mr-eyebrow">{'Free template'}</p>
            <h1 className="mr-h1" id="hero-h">
              {'Business travel policy template for companies of 300 to 1,500 people'}
            </h1>
            <p className="mr-lead">
              {
                'This business travel policy template is a complete policy you can edit and adopt: booking, flights, hotels, ground transport, meals, approvals, changes, expenses and reimbursement, with a one-page rollout checklist. Every section is previewed below. Download the editable Word file and the PDF to make it yours.'
              }
            </p>
            <div className="mr-btn-row">
              <Button asChild variant="default" size="default">
                <DialogLink className="mr-btn" dialog="template" to="#download">
                  {'Download the template'}
                </DialogLink>
              </Button>
              <Button asChild variant="tertiary" size="default">
                <a className="mr-btn mr-btn--tertiary" href="#preview">
                  {'Preview it below'}
                </a>
              </Button>
            </div>
            <p className="lf-meta">
              {'Word and PDF · 12 policy sections · One-page rollout checklist · Updated '}
              <time dateTime="2026-09-30">{'September 30, 2026'}</time>
            </p>
          </div>
          <figure className="lf-hero__visual lf-hero__visual--doc" style={{ margin: '0' }}>
            <div className="doc-cover">
              <div className="doc-cover__top">
                <img
                  src="/img/document/resources-template-card-1.jpg"
                  alt=""
                  width="2046"
                  height="1364"
                />
              </div>
              <div className="doc-cover__photo">
                <picture>
                  <source srcSet="/img/document/resources-template-card-1.webp" type="image/webp" />
                  <img
                    src="/img/px6775122-team-map-card.jpg"
                    width="1200"
                    height="800"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
              <p className="doc-cover__t">
                {'The Business Travel Policy Template for Growing Companies'}
              </p>
              <p className="doc-cover__s">{'Travel and expense policy · Rollout checklist'}</p>
            </div>
          </figure>
        </div>
      </section>
      <div className="mr-section lf-article">
        <div className="mr-container lf-grid">
          <nav className="lf-toc" aria-label="On this page">
            <p className="lf-toc__h">{'On this page'}</p>
            <ol>
              <li>
                <a href="#how-to-use-this-template">{'How to use this template'}</a>
              </li>
              <li>
                <a href="#1-purpose-scope-and-ownership">{'1. Purpose, scope and ownership'}</a>
              </li>
              <li>
                <a href="#2-how-to-book">{'2. How to book'}</a>
              </li>
              <li>
                <a href="#3-approvals">{'3. Approvals'}</a>
              </li>
              <li>
                <a href="#4-flights">{'4. Flights'}</a>
              </li>
              <li>
                <a href="#5-hotels">{'5. Hotels'}</a>
              </li>
              <li>
                <a href="#6-ground-transport">{'6. Ground transport'}</a>
              </li>
              <li>
                <a href="#7-meals-and-entertainment">{'7. Meals and entertainment'}</a>
              </li>
              <li>
                <a href="#8-when-plans-change">{'8. When plans change'}</a>
              </li>
              <li>
                <a href="#9-paying-for-travel">{'9. Paying for travel'}</a>
              </li>
              <li>
                <a href="#10-expenses-and-receipts">{'10. Expenses and receipts'}</a>
              </li>
              <li>
                <a href="#11-reimbursement">{'11. Reimbursement'}</a>
              </li>
              <li>
                <a href="#12-exceptions-and-review">{'12. Exceptions and review'}</a>
              </li>
              <li>
                <a href="#rollout-checklist-the-first-30-days">
                  {'Rollout checklist: the first 30 days'}
                </a>
              </li>
              <li>
                <a href="#about-miraee">{'About Miraee'}</a>
              </li>
            </ol>
          </nav>
          <div className="lf-prose">
            <div className="tpl-preview" id="preview">
              <h2 className="mr-h2" id="how-to-use-this-template">
                {'How to use this template'}
              </h2>
              <ol>
                <li>
                  <strong>{'Read it once as a traveler would.'}</strong>
                  {' Every rule should answer a question someone asks when booking.'}
                </li>
                <li>
                  <strong>{'Set the numbers with finance.'}</strong>
                  {
                    ' The suggested starting points are common choices for a US company of this size. Change each one to fit your budget, routes and cities.'
                  }
                </li>
                <li>
                  <strong>{'Keep what fits, cut what does not.'}</strong>
                  {' A shorter policy that people follow beats a longer one they skip.'}
                </li>
                <li>
                  <strong>{'Name the owner and approver.'}</strong>
                  {' Section 1 sets who owns the policy and who approves changes.'}
                </li>
                <li>
                  <strong>{'Set it up where people book.'}</strong>
                  {
                    ' The limits work best when the booking tool shows each option as in or out of policy.'
                  }
                </li>
                <li>
                  <strong>{'Roll it out with the checklist.'}</strong>
                  {' The last page is a one-page plan for the first 30 days.'}
                </li>
              </ol>
              <p>
                {
                  'In this template, "the company" means the employer adopting the policy, and "traveler" means anyone traveling on the company\'s business.'
                }
              </p>
              <h2 className="mr-h2" id="1-purpose-scope-and-ownership">
                {'1. Purpose, scope and ownership'}
              </h2>
              <p>
                <strong>{'Purpose.'}</strong>
                {
                  ' This policy helps our people travel safely and comfortably for work, and helps the company spend on travel with care. It sets out how to book, what the company pays for, how to claim expenses and how you get your money back.'
                }
              </p>
              <p>
                <strong>{'Who it covers.'}</strong>
                {
                  ' Employees and contractors who travel on company business, and guests whose travel the company pays for.'
                }
              </p>
              <p>
                <strong>{'Ownership.'}</strong>
                {
                  ' The Head of Operations owns this policy. The CFO approves changes to limits and approval rules. Questions go to the policy owner.'
                }
              </p>
              <p>
                <strong>{'Principle.'}</strong>
                {
                  " Spend the company's money as you would spend your own on a business trip: on what the work needs, at a fair price."
                }
              </p>
              <h2 className="mr-h2" id="2-how-to-book">
                {'2. How to book'}
              </h2>
              <p>
                <strong>{'Book flights and hotels through the company booking tool.'}</strong>
                {
                  ' It shows every option as in or out of policy, applies the right budget and code, and gives you help when plans change.'
                }
              </p>
              <p>
                <strong>{'Complex trips.'}</strong>
                {
                  ' Group travel, events and trips with more than three destinations can be booked with the help of the policy owner.'
                }
              </p>
              <p>
                <strong>{'Booking for others.'}</strong>
                {
                  ' Assistants and office admins may book on behalf of the people they support. The same rules apply.'
                }
              </p>
              <p>
                <strong>{'Bookings made elsewhere.'}</strong>
                {
                  ' If you book outside the company tool, add the reason when you submit the expense. Repeated bookings outside the tool are reviewed with your manager.'
                }
              </p>
              <h2 className="mr-h2" id="3-approvals">
                {'3. Approvals'}
              </h2>
              <p>
                <strong>{'Trips inside this policy book straight away.'}</strong>
              </p>
              <p>
                <strong>{'Approval is needed before booking for:'}</strong>
              </p>
              <ul>
                <li>{'Any flight, hotel or cost outside the limits in this policy'}</li>
                <li>{'International trips'}</li>
                <li>{'Trips with a total estimated cost above $3,000'}</li>
                <li>{'Travel for guests and candidates'}</li>
              </ul>
              <p>
                <strong>{'Who approves.'}</strong>
                {
                  ' Your budget owner. If your budget owner is traveling with you, their manager approves.'
                }
              </p>
              <p>
                <strong>{'Add a reason.'}</strong>
                {
                  ' Every approval request includes the business reason and, for exceptions, why the in-policy option does not work.'
                }
              </p>
              <h2 className="mr-h2" id="4-flights">
                {'4. Flights'}
              </h2>
              <div className="compare-wrap">
                <table className="gtable">
                  <thead>
                    <tr>
                      <th scope="col">{'Rule'}</th>
                      <th scope="col">{'Suggested starting point'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-col="Rule">{'Cabin class'}</td>
                      <td data-col="Suggested starting point">
                        {
                          'Economy for flights under 6 hours; premium economy for flights of 6 hours or more'
                        }
                      </td>
                    </tr>
                    <tr>
                      <td data-col="Rule">{'Business class'}</td>
                      <td data-col="Suggested starting point">
                        {'For flights over 10 hours, with approval'}
                      </td>
                    </tr>
                    <tr>
                      <td data-col="Rule">{'Fare'}</td>
                      <td data-col="Suggested starting point">
                        {
                          'The lowest logical fare: a reasonable departure time and up to one stop more than the fastest option'
                        }
                      </td>
                    </tr>
                    <tr>
                      <td data-col="Rule">{'Booking window'}</td>
                      <td data-col="Suggested starting point">
                        {
                          'Book domestic flights 14 days ahead and international flights 21 days ahead where the trip allows'
                        }
                      </td>
                    </tr>
                    <tr>
                      <td data-col="Rule">{'Bags and seats'}</td>
                      <td data-col="Suggested starting point">
                        {'One checked bag and standard seat selection are covered'}
                      </td>
                    </tr>
                    <tr>
                      <td data-col="Rule">{'Loyalty programs'}</td>
                      <td data-col="Suggested starting point">
                        {
                          'Travelers may keep personal miles and points; loyalty never decides the choice of flight'
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h2 className="mr-h2" id="5-hotels">
                {'5. Hotels'}
              </h2>
              <div className="compare-wrap">
                <table className="gtable">
                  <thead>
                    <tr>
                      <th scope="col">{'Rule'}</th>
                      <th scope="col">{'Suggested starting point'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-col="Rule">{'Nightly limit, standard cities'}</td>
                      <td data-col="Suggested starting point">{'Up to $250 a night'}</td>
                    </tr>
                    <tr>
                      <td data-col="Rule">
                        {
                          'Nightly limit, high-cost cities (for example New York, San Francisco, Boston, Washington DC)'
                        }
                      </td>
                      <td data-col="Suggested starting point">{'Up to $375 a night'}</td>
                    </tr>
                    <tr>
                      <td data-col="Rule">{'International'}</td>
                      <td data-col="Suggested starting point">
                        {'Set by city with the policy owner'}
                      </td>
                    </tr>
                    <tr>
                      <td data-col="Rule">{'Event hotels'}</td>
                      <td data-col="Suggested starting point">
                        {
                          'Allowed above the limit when booked for a conference or client event; add the reason when booking'
                        }
                      </td>
                    </tr>
                    <tr>
                      <td data-col="Rule">{'Long stays'}</td>
                      <td data-col="Suggested starting point">
                        {
                          'Stays of 7 nights or more can use serviced apartments at or below the nightly limit'
                        }
                      </td>
                    </tr>
                    <tr>
                      <td data-col="Rule">{'Room type'}</td>
                      <td data-col="Suggested starting point">
                        {'A standard room; upgrades are a personal cost'}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h2 className="mr-h2" id="6-ground-transport">
                {'6. Ground transport'}
              </h2>
              <div className="compare-wrap">
                <table className="gtable">
                  <thead>
                    <tr>
                      <th scope="col">{'Rule'}</th>
                      <th scope="col">{'Suggested starting point'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-col="Rule">{'Rideshare and taxis'}</td>
                      <td data-col="Suggested starting point">
                        {'Standard options to and from airports, hotels and business locations'}
                      </td>
                    </tr>
                    <tr>
                      <td data-col="Rule">{'Rental cars'}</td>
                      <td data-col="Suggested starting point">
                        {
                          "Midsize or smaller, when cheaper or more practical than rideshare; decline extra insurance covered by the company's policy"
                        }
                      </td>
                    </tr>
                    <tr>
                      <td data-col="Rule">{'Rail'}</td>
                      <td data-col="Suggested starting point">
                        {'Standard class; business class for journeys over 3 hours'}
                      </td>
                    </tr>
                    <tr>
                      <td data-col="Rule">{'Personal car'}</td>
                      <td data-col="Suggested starting point">
                        {'Mileage at the IRS standard rate for the year of travel'}
                      </td>
                    </tr>
                    <tr>
                      <td data-col="Rule">{'Parking and tolls'}</td>
                      <td data-col="Suggested starting point">{'Covered with a receipt'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h2 className="mr-h2" id="7-meals-and-entertainment">
                {'7. Meals and entertainment'}
              </h2>
              <div className="compare-wrap">
                <table className="gtable">
                  <thead>
                    <tr>
                      <th scope="col">{'Rule'}</th>
                      <th scope="col">{'Suggested starting point'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-col="Rule">{'Daily meal limit, standard cities'}</td>
                      <td data-col="Suggested starting point">
                        {'Up to $75 a day at actual cost'}
                      </td>
                    </tr>
                    <tr>
                      <td data-col="Rule">{'Daily meal limit, high-cost cities'}</td>
                      <td data-col="Suggested starting point">
                        {'Up to $100 a day at actual cost'}
                      </td>
                    </tr>
                    <tr>
                      <td data-col="Rule">{'Client meals'}</td>
                      <td data-col="Suggested starting point">
                        {'Approved by the budget owner; list attendees and the business purpose'}
                      </td>
                    </tr>
                    <tr>
                      <td data-col="Rule">{'Alcohol'}</td>
                      <td data-col="Suggested starting point">
                        {'Reasonable amounts with client meals only'}
                      </td>
                    </tr>
                    <tr>
                      <td data-col="Rule">{'Team meals while traveling'}</td>
                      <td data-col="Suggested starting point">
                        {'Paid by the most senior person present'}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h2 className="mr-h2" id="8-when-plans-change">
                {'8. When plans change'}
              </h2>
              <p>
                <strong>{'Delays and cancellations.'}</strong>
                {
                  ' When a flight is delayed or canceled, use the company booking tool first. It shows what happened and your new options. Confirm the one that suits you.'
                }
              </p>
              <p>
                <strong>{'Changes you choose.'}</strong>
                {
                  ' Change a booking through the company tool, so the change and any fare difference are recorded.'
                }
              </p>
              <p>
                <strong>{'Unused tickets.'}</strong>
                {
                  ' If you cancel a flight, the ticket value is recorded against your name. Use it on your next trip before it expires.'
                }
              </p>
              <p>
                <strong>{'Travel help.'}</strong>
                {
                  ' If the booking tool cannot solve the problem, call the policy owner during business hours, or your manager outside them. Your safety comes first: book what you need to get somewhere safe, and explain afterwards.'
                }
              </p>
              <h2 className="mr-h2" id="9-paying-for-travel">
                {'9. Paying for travel'}
              </h2>
              <p>
                <strong>{'Corporate card.'}</strong>
                {
                  ' Use your corporate card for flights, hotels and ground transport. Keep personal spending off it. If a personal charge lands on the card by mistake, flag it within five business days.'
                }
              </p>
              <p>
                <strong>{'Personal card.'}</strong>
                {
                  ' If you have no corporate card, use a personal card and claim the cost as an expense.'
                }
              </p>
              <p>
                <strong>{'Cash advances.'}</strong>
                {
                  ' Available for international trips where cards are not widely accepted, with approval.'
                }
              </p>
              <h2 className="mr-h2" id="10-expenses-and-receipts">
                {'10. Expenses and receipts'}
              </h2>
              <p>
                <strong>{'What the company pays for.'}</strong>
                {
                  ' The costs in sections 4 to 7, plus business calls, internet while traveling, visas and required vaccinations for the trip.'
                }
              </p>
              <p>
                <strong>{'What the company does not pay for.'}</strong>
                {
                  ' Personal items, upgrades you choose, fines, in-room entertainment, and personal days added to a trip.'
                }
              </p>
              <p>
                <strong>{'Receipts.'}</strong>
                {
                  ' Upload an itemized receipt for every expense, during the trip where possible. A valid receipt shows the merchant, date, items and amount paid. For a lost receipt, submit a short written statement with the same details.'
                }
              </p>
              <p>
                <strong>{'Deadline.'}</strong>
                {
                  ' Submit expenses within 30 days of the end of the trip. Claims older than 90 days need approval from finance.'
                }
              </p>
              <p>
                <strong>{'Coding.'}</strong>
                {
                  ' Every trip is coded to a cost center and GL code before booking. Finance sets the codes.'
                }
              </p>
              <p>
                <strong>{'Review.'}</strong>
                {
                  ' Your manager approves your expenses. They check that each item has a business purpose, sits inside this policy and has a receipt.'
                }
              </p>
              <h2 className="mr-h2" id="11-reimbursement">
                {'11. Reimbursement'}
              </h2>
              <p>
                {
                  'Approved expenses are paid in the next payment run after approval. Mileage is paid at the IRS standard rate for the year of travel.'
                }
              </p>
              <h2 className="mr-h2" id="12-exceptions-and-review">
                {'12. Exceptions and review'}
              </h2>
              <p>
                <strong>{'Exceptions.'}</strong>
                {
                  ' Your budget owner may approve an exception before you book. Exceptions after the fact go to finance.'
                }
              </p>
              <p>
                <strong>{'Misuse.'}</strong>
                {
                  " Claims that break this policy may be declined, and repeated misuse is handled under the company's code of conduct."
                }
              </p>
              <p>
                <strong>{'Review.'}</strong>
                {
                  ' The policy owner reviews this policy twice a year, and after any big change in how the company travels. Changes are recorded in the change log below.'
                }
              </p>
              <div className="compare-wrap">
                <table className="gtable">
                  <thead>
                    <tr>
                      <th scope="col">{'Version'}</th>
                      <th scope="col">{'Date'}</th>
                      <th scope="col">{'Change'}</th>
                      <th scope="col">{'Approved by'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-col="Version">{'1.0'}</td>
                      <td data-col="Date">{'Date of adoption'}</td>
                      <td data-col="Change">{'Policy adopted'}</td>
                      <td data-col="Approved by">{'CFO'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h2 className="mr-h2" id="rollout-checklist-the-first-30-days">
                {'Rollout checklist: the first 30 days'}
              </h2>
              <p>
                <strong>{'Week 1: agree the numbers'}</strong>
              </p>
              <ul className="tasks">
                <li className="task">{'Flight, hotel and meal limits agreed with finance'}</li>
                <li className="task">{'Approval threshold and approvers agreed'}</li>
                <li className="task">{'Cost centers and GL codes for travel confirmed'}</li>
                <li className="task">
                  {'Policy owner and approver of changes named in section 1'}
                </li>
              </ul>
              <p>
                <strong>{'Week 2: set it up'}</strong>
              </p>
              <ul className="tasks">
                <li className="task">{'Limits and approval rules set up in the booking tool'}</li>
                <li className="task">{'Travelers, assistants and approvers added'}</li>
                <li className="task">{'Corporate cards added in payment settings'}</li>
                <li className="task">
                  {
                    'One test trip booked inside policy and one outside it, followed to the approver'
                  }
                </li>
              </ul>
              <p>
                <strong>{'Week 3: announce it'}</strong>
              </p>
              <ul className="tasks">
                <li className="task">{'Approvers briefed on what will reach them'}</li>
                <li className="task">
                  {
                    'One message to everyone who travels: where to book, the three limits people ask about most, who to ask'
                  }
                </li>
                <li className="task">
                  {'Policy saved where people look for it, with a link in the booking tool'}
                </li>
              </ul>
              <p>
                <strong>{'Week 4: check it'}</strong>
              </p>
              <ul className="tasks">
                <li className="task">{'Questions collected from the first two weeks'}</li>
                <li className="task">
                  {
                    'First month-end reviewed: bookings outside the tool, exceptions, missing receipts'
                  }
                </li>
                <li className="task">{'Three rules that caused the most questions rewritten'}</li>
                <li className="task">{'Next review date set, six months out'}</li>
              </ul>
              <h2 className="mr-h2" id="about-miraee">
                {'About Miraee'}
              </h2>
              <p>
                {
                  'Miraee is business travel and expense software. Your people book flights and hotels inside company policy, and finance sees every trip with its budget and GL code. Every option is marked in or out of policy, approvals only come in when something is out of policy, and when plans change your traveler gets an alert and new options to confirm. Signing up and onboarding are free, at any company size: we set up your company, your travel policy and your people with you. Miraee is built by Tabhi, the company behind the Mondee travel marketplace. miraee.ai'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="mr-plum plum-band" id="download" aria-labelledby="dl-h">
        <div className="mr-container">
          <div className="inner">
            <h2 className="mr-h2" id="dl-h">
              {'Download the editable template'}
            </h2>
            <p className="mr-body">
              {
                'The Word file you can edit, a designed PDF to share, and the one-page rollout checklist. Tell us where to send a copy.'
              }
            </p>
            <div className="mr-btn-row" style={{ marginTop: '32px' }}>
              <Button asChild variant="default" size="default">
                <DialogLink className="mr-btn" dialog="template" to="#download">
                  {'Download the template'}
                </DialogLink>
              </Button>
            </div>
            <ul className="link-list">
              <li>
                <Link to="/resources/business-travel-policy">
                  {'How to write a business travel policy'}
                </Link>
              </li>
              <li>
                <Link to="/resources/travel-and-expense-policy">{'Travel and expense policy'}</Link>
              </li>
              <li>
                <Link to="/travel-managers">{'For travel managers'}</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <CtaVideoBand
        video="compare"
        title="Put your policy on every booking."
        body="Miraee is business travel and expense software. Free to sign up and onboard, at any company size, and we set up your travel policy with you."
        secondary={{ label: 'For travel managers', variant: 'tertiary', to: '/travel-managers' }}
      />
    </>
  )
}
