import { InlineFaq } from '@/components/sections/faq'
import { faq } from '../faq'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function WhatShouldACompanySection() {
  return (
    <div className="mr-section lf-hubbody">
      <div className="mr-container lf-grid">
        <div className="lf-prose">
          <h2 className="mr-h2" id="what-should-a-company-of-300-to-1-500-people-compare">
            What should a company of 300 to 1,500 people compare?
          </h2>
          <p>
            Four things decide most evaluations: what it costs to start at your size, whether your
            travel policy runs on every booking, what finance sees for each trip, and what happens
            when a flight is delayed or canceled. Compare those on your own trips, with every vendor
            fact dated.
          </p>
          <h2 className="mr-h2" id="four-things-to-compare">
            Four things to compare
          </h2>
          <p>
            <strong>1. Cost to start at your size.</strong> Many tools have a free plan, and the
            details differ. Some free plans stop at a headcount. Some charge a fee on each booking.
            Some move to a quote as you grow. Check the vendor's own pricing page, note the date,
            and ask what changes when your headcount grows.
          </p>
          <p>
            <strong>2. Policy on every booking.</strong> A travel policy works when travelers see it
            in the options, and approvers only hear about the exceptions. Ask to see a search where
            one option is out of policy, and follow it through to the approver.
          </p>
          <p>
            <strong>3. What finance sees.</strong> Controllers want each trip with its budget and GL
            code, receipts matched to card charges, and an audit log of who booked what, and when.
            Only 12% of travel programs have their data in one place.
            <sup>
              <a href="#src-1" rel="noopener" aria-label="Source 1">
                1
              </a>
            </sup>{' '}
            Ask to see a month of trips in the finance view, not a slide.
          </p>
          <p>
            <strong>4. When plans change.</strong> A delayed or canceled flight is the moment
            travelers judge the tool. Ask what the traveler sees first, who confirms the new option,
            and where the change is recorded. 89% of travel buyers want help rebooking when plans
            change.
            <sup>
              <a href="#src-2" rel="noopener" aria-label="Source 2">
                2
              </a>
            </sup>
          </p>
          <h2 className="mr-h2" id="twelve-questions-to-ask-every-vendor-including-us">
            Twelve questions to ask every vendor, including us
          </h2>
          <div className="compare-wrap">
            <table className="gtable">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Question</th>
                  <th scope="col">Why it matters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-col="#">1</td>
                  <td data-col="Question">
                    What does it cost to sign up and onboard a company of our size?
                  </td>
                  <td data-col="Why it matters">Entry offers often depend on headcount</td>
                </tr>
                <tr>
                  <td data-col="#">2</td>
                  <td data-col="Question">What changes as our headcount grows?</td>
                  <td data-col="Why it matters">
                    A plan that fits today should still fit next year
                  </td>
                </tr>
                <tr>
                  <td data-col="#">3</td>
                  <td data-col="Question">
                    Who sets up our company, policy and people, and is that included?
                  </td>
                  <td data-col="Why it matters">Onboarding decides whether people use the tool</td>
                </tr>
                <tr>
                  <td data-col="#">4</td>
                  <td data-col="Question">
                    Can you show an out-of-policy option reaching an approver?
                  </td>
                  <td data-col="Why it matters">
                    Policy is only real if it shows up in the search
                  </td>
                </tr>
                <tr>
                  <td data-col="#">5</td>
                  <td data-col="Question">
                    How many approval requests would our approvers see in a typical week?
                  </td>
                  <td data-col="Why it matters">
                    Approvals for trips already in policy waste time
                  </td>
                </tr>
                <tr>
                  <td data-col="#">6</td>
                  <td data-col="Question">
                    Can an assistant or office admin book on behalf of others?
                  </td>
                  <td data-col="Why it matters">Many trips are booked by someone else</td>
                </tr>
                <tr>
                  <td data-col="#">7</td>
                  <td data-col="Question">Does every trip carry its budget and GL code?</td>
                  <td data-col="Why it matters">Coding at booking is what shortens month-end</td>
                </tr>
                <tr>
                  <td data-col="#">8</td>
                  <td data-col="Question">How are receipts matched to card charges?</td>
                  <td data-col="Why it matters">Receipt chasing is where month-end stalls</td>
                </tr>
                <tr>
                  <td data-col="#">9</td>
                  <td data-col="Question">Do we keep our corporate cards?</td>
                  <td data-col="Why it matters">
                    Most finance teams will not switch cards for travel
                  </td>
                </tr>
                <tr>
                  <td data-col="#">10</td>
                  <td data-col="Question">
                    When a flight is canceled, what does the traveler see, and who confirms the
                    change?
                  </td>
                  <td data-col="Why it matters">Changes are where support and trust are tested</td>
                </tr>
                <tr>
                  <td data-col="#">11</td>
                  <td data-col="Question">
                    Is any savings figure measured on our data, with the method shown?
                  </td>
                  <td data-col="Why it matters">
                    A percentage from other customers is hard to check
                  </td>
                </tr>
                <tr>
                  <td data-col="#">12</td>
                  <td data-col="Question">
                    What is in your security pack, and what is on your roadmap, with dates?
                  </td>
                  <td data-col="Why it matters">IT review goes faster with documents up front</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Our answers: sign-up and onboarding are free at any company size, and we set up your
            company, your travel policy and your people with you. Options are marked in or out of
            policy, and approvals only come in when something is out of policy. Every trip carries
            its budget and GL code. You keep your cards. When plans change, the traveler gets an
            alert and new options to confirm. The spend review measures last year's travel on your
            own data, with any savings as a dollar range and the method shown. Ask us for the
            security pack at any stage.
          </p>
          <h2 className="mr-h2" id="cost-to-start-as-each-vendor-states-it">
            Cost to start, as each vendor states it
          </h2>
          <p>
            Each line comes from the vendor's own pricing page, checked September 30, 2026. We
            re-check every 30 days.
          </p>
          <div className="compare-wrap">
            <table className="gtable">
              <thead>
                <tr>
                  <th scope="col">Vendor</th>
                  <th scope="col">Entry offer, in the vendor's terms</th>
                  <th scope="col">Source</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-col="Vendor">Navan</td>
                  <td data-col="Entry offer, in the vendor's terms">
                    Business plan free for companies up to 300 employees; Enterprise priced by quote
                  </td>
                  <td data-col="Source">navan.com/pricing</td>
                </tr>
                <tr>
                  <td data-col="Vendor">SAP Concur</td>
                  <td data-col="Entry offer, in the vendor's terms">Pricing on request</td>
                  <td data-col="Source">concur.com</td>
                </tr>
                <tr>
                  <td data-col="Vendor">Perk (formerly TravelPerk)</td>
                  <td data-col="Entry offer, in the vendor's terms">
                    Travel Starter at $0 a month plus 5% per booking, minimum $2 and maximum $30
                  </td>
                  <td data-col="Source">perk.com/pricing</td>
                </tr>
                <tr>
                  <td data-col="Vendor">Miraee</td>
                  <td data-col="Entry offer, in the vendor's terms">
                    Sign-up and onboarding free at any company size
                  </td>
                  <td data-col="Source">miraee.ai/pricing</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="mr-h2" id="side-by-side-comparisons">
            Side-by-side comparisons
          </h2>
          <ul className="lf-cards lf-cards--4">
            <li className="lf-card lf-card--cutout mr-plum">
              <Link to="/compare/navan">
                <span className="lf-card__img">
                  <picture>
                    <source srcSet="/img/px3932459-traveler-phone.webp" type="image/webp" />
                    <img
                      src="/img/px3932459-traveler-phone.png"
                      width="1100"
                      height="964"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                </span>
                <span className="lf-card__body">
                  <span className="lf-card__t">Navan alternatives</span>
                  <span className="lf-card__d">
                    Miraee vs Navan on cost to start, policy controls, the finance view and changes.
                    Plus other Navan alternatives.
                  </span>
                  <span className="lf-card__meta">Checked September 30, 2026</span>
                </span>
              </Link>
            </li>
            <li className="lf-card lf-card--frame mr-paper">
              <Link to="/compare/sap-concur">
                <span className="lf-card__img">
                  <picture>
                    <source srcSet="/img/px4623080-team-wide.webp" type="image/webp" />
                    <img
                      src="/img/px4623080-team-wide.jpg"
                      width="917"
                      height="688"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                </span>
                <span className="lf-card__body">
                  <span className="lf-card__t">SAP Concur alternatives</span>
                  <span className="lf-card__d">
                    Miraee vs SAP Concur on onboarding, travel policy, approvals and month-end.
                  </span>
                  <span className="lf-card__meta">Checked September 30, 2026</span>
                </span>
              </Link>
            </li>
            <li className="lf-card lf-card--cutout mr-plum">
              <Link to="/compare/perk">
                <span className="lf-card__img">
                  <picture>
                    <source srcSet="/img/px4173228-traveler-suitcase.webp" type="image/webp" />
                    <img
                      src="/img/px4173228-traveler-suitcase.png"
                      width="1100"
                      height="957"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                </span>
                <span className="lf-card__body">
                  <span className="lf-card__t">TravelPerk alternatives</span>
                  <span className="lf-card__d">
                    Miraee vs Perk, formerly TravelPerk, on cost to start, the finance view and how
                    changes are confirmed.
                  </span>
                  <span className="lf-card__meta">Checked September 30, 2026</span>
                </span>
              </Link>
            </li>
            <li className="lf-card lf-card--cutout mr-paper">
              <Link to="/compare/ramp">
                <span className="lf-card__img">
                  <picture>
                    <source srcSet="/img/px5918389-controller.webp" type="image/webp" />
                    <img
                      src="/img/px5918389-controller.png"
                      width="831"
                      height="1100"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                </span>
                <span className="lf-card__body">
                  <span className="lf-card__t">Ramp Travel with Miraee</span>
                  <span className="lf-card__d">
                    Keep the Ramp card you use and add travel depth: policy on every booking and new
                    options when plans change.
                  </span>
                  <span className="lf-card__meta">Checked September 30, 2026</span>
                </span>
              </Link>
            </li>
          </ul>
          <h2 className="mr-h2" id="want-proof-before-you-choose">
            Want proof before you choose?
          </h2>
          <p>
            Send one booking report from your agency or expense system and we review last year's
            travel trip by trip: bookings outside your program, spend outside policy, the cost of
            booking late and unused tickets. Any savings figure is a dollar range, with the method
            and the data period beside it. The review is optional, and you can sign up without one.
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
          <p>
            See <Link to="/pricing">what's free</Link> for everything included in the free start.
          </p>
          <InlineFaq items={faq} />
        </div>
      </div>
    </div>
  )
}
