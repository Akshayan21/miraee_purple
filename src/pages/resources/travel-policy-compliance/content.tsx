import { Link } from 'react-router-dom'
import { DialogLink } from '@/components/forms/form-dialogs-context'
import { Button } from '@/components/ui/button'

export function ArticleContent() {
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
                <span aria-current="page">{'Travel policy compliance'}</span>
              </li>
            </ol>
          </div>
        </nav>
        <div className="mr-container split">
          <div className="split__copy lf-hero__copy">
            <p className="mr-eyebrow">{'Guide for travel and operations leads'}</p>
            <h1 className="mr-h1" id="hero-h">
              {'Travel policy compliance: make the right option the easy one'}
            </h1>
            <p className="mr-lead">
              {
                'Travel policy compliance is the share of trips booked the way your policy says: through the company channel, inside the limits, with exceptions approved. This guide explains how to measure it and how to raise it by making the in-policy option the easiest one to choose.'
              }
            </p>
            <div className="mr-btn-row">
              <Button asChild variant="default" size="default">
                <Link className="mr-btn" to="/resources/business-travel-policy-template">
                  <span className="mr-btn__u">{'Get the template'}</span>
                </Link>
              </Button>
            </div>
            <p className="lf-meta">
              {'By the Miraee team · Reviewed by Product Marketing · Last updated '}
              <time dateTime="2026-09-30">{'September 30, 2026'}</time>
              {' · 8 min read'}
            </p>
          </div>
          <figure
            className="lf-hero__visual lf-hero__visual--frame mr-frame"
            style={{ margin: '0' }}
          >
            <picture>
              <source
                srcSet="/img/document/resources-guide-policy-compliance-1.webp"
                type="image/webp"
              />
              <img
                src="/img/document/resources-guide-policy-compliance-1.jpg"
                width="1364"
                height="2046"
                alt="A professional works at a laptop."
                {...{ fetchpriority: 'high' }}
              />
            </picture>
          </figure>
        </div>
      </section>
      <div className="mr-section lf-article">
        <div className="mr-container lf-grid">
          <nav className="lf-toc" aria-label="On this page">
            <p className="lf-toc__h">{'On this page'}</p>
            <ol>
              <li>
                <a href="#how-do-you-improve-travel-policy-compliance">
                  {'How do you improve travel policy compliance?'}
                </a>
              </li>
              <li>
                <a href="#what-compliance-means-in-practice">
                  {'What compliance means in practice'}
                </a>
              </li>
              <li>
                <a href="#why-travelers-book-outside-the-program">
                  {'Why travelers book outside the program'}
                </a>
              </li>
              <li>
                <a href="#seven-ways-to-raise-compliance">{'Seven ways to raise compliance'}</a>
              </li>
              <li>
                <a href="#how-to-measure-compliance">{'How to measure compliance'}</a>
              </li>
              <li>
                <a href="#reading-the-results">{'Reading the results'}</a>
              </li>
              <li>
                <a href="#a-30-day-plan">{'A 30-day plan'}</a>
              </li>
              <li>
                <a href="#how-to-talk-to-teams-about-compliance">
                  {'How to talk to teams about compliance'}
                </a>
              </li>
              <li>
                <a href="#how-miraee-helps-keep-bookings-inside-policy">
                  {'How Miraee helps keep bookings inside policy'}
                </a>
              </li>
              <li>
                <a href="#questions">{'Questions'}</a>
              </li>
            </ol>
          </nav>
          <div className="lf-prose">
            <h2 className="mr-h2" id="how-do-you-improve-travel-policy-compliance">
              {'How do you improve travel policy compliance?'}
            </h2>
            <p>
              {
                'Make the in-policy option the easiest one to book. Name one booking channel, put a number on every limit, show whether each flight and hotel fits the policy at the moment of choice, and send only exceptions to an approver. Then measure bookings outside the channel and out-of-policy spend every month, and fix the rules that cause them.'
              }
            </p>
            <h2 className="mr-h2" id="what-compliance-means-in-practice">
              {'What compliance means in practice'}
            </h2>
            <p>{'Compliance has three parts, and it helps to track them separately:'}</p>
            <ol>
              <li>
                <strong>{'Channel.'}</strong>
                {
                  " Was the trip booked through the company's booking channel, or somewhere else and expensed later?"
                }
              </li>
              <li>
                <strong>{'Limits.'}</strong>
                {" Did the flight, hotel and other costs fall inside the policy's numbers?"}
              </li>
              <li>
                <strong>{'Approval.'}</strong>
                {
                  ' Where the trip was outside policy, was it approved before booking, with a reason?'
                }
              </li>
            </ol>
            <p>
              {
                'A company can do well on one and badly on another. A team that books everything through the company tool but routinely picks hotels above the limit has a limits problem, and the fix is different from a team that books on consumer sites.'
              }
            </p>
            <h2 className="mr-h2" id="why-travelers-book-outside-the-program">
              {'Why travelers book outside the program'}
            </h2>
            <p>
              {
                'Travelers rarely leave the program to break the rules. They leave because another option looks easier or cheaper at the moment they book.'
              }
            </p>
            <ul>
              <li>
                <strong>{'The company tool feels slower.'}</strong>
                {
                  " Only about a third of business travelers prefer their company's booking tool to consumer sites."
                }
                <sup>
                  <a href="#src-1" rel="noopener" aria-label="Source 1">
                    {'1'}
                  </a>
                </sup>
              </li>
              <li>
                <strong>{'The price looks better elsewhere.'}</strong>
                {
                  ' 72% of travel buyers say travelers book cheaper hotels outside the company program.'
                }
                <sup>
                  <a href="#src-2" rel="noopener" aria-label="Source 2">
                    {'2'}
                  </a>
                </sup>
              </li>
              <li>
                <strong>{'The rules are unclear.'}</strong>
                {
                  ' If a traveler cannot tell whether a hotel is allowed, the safest choice feels like booking it and explaining later.'
                }
              </li>
              <li>
                <strong>{'Approvals are slow.'}</strong>
                {
                  ' When every trip waits for a manager, a traveler with a meeting tomorrow books first and asks second.'
                }
              </li>
            </ul>
            <p>
              {
                'Each reason points to a fix. Sending the policy document again solves none of them.'
              }
            </p>
            <h2 className="mr-h2" id="seven-ways-to-raise-compliance">
              {'Seven ways to raise compliance'}
            </h2>
            <p>
              <strong>{'1. Name one channel for flights and hotels.'}</strong>
              {
                ' Say it in the first line of the policy. If the agency handles complex trips, say which ones.'
              }
            </p>
            <p>
              <strong>{'2. Put a number on every limit.'}</strong>
              {
                ' Hotel limits by city tier, cabin class by flight length, a daily meal limit. Numbers can be checked; adjectives cannot.'
              }
            </p>
            <p>
              <strong>{'3. Show the policy in the search results.'}</strong>
              {
                ' When every option is marked in or out of policy, travelers stop guessing. This single change does more for compliance than any reminder email.'
              }
            </p>
            <p>
              <strong>{'4. Approve only the exceptions.'}</strong>
              {
                ' Trips inside the rules should book straight away. Anything outside them goes to an approver with the reason attached. Approvers read each request because each one needs a decision.'
              }
            </p>
            <p>
              <strong>{'5. Give exceptions a clear route.'}</strong>
              {
                ' "The event hotel is above the limit: book it and add the reason" is followed. A rule with no way around it is broken quietly.'
              }
            </p>
            <p>
              <strong>{'6. Make the right option faster for people who book for others.'}</strong>
              {
                " Assistants and office admins often book more trips than anyone. Let them book on behalf of the people they support, with the traveler's details on file and the policy applied."
              }
            </p>
            <p>
              <strong>{'7. Make help easy when plans change.'}</strong>
              {
                ' Travelers who were stuck on hold during a canceled flight book elsewhere next time. When a flight changes, they should see what happened and new options to confirm in the same place they booked.'
              }
            </p>
            <h2 className="mr-h2" id="how-to-measure-compliance">
              {'How to measure compliance'}
            </h2>
            <p>
              {
                'Measure monthly, with the same definitions each time. A simple scorecard is enough:'
              }
            </p>
            <div className="compare-wrap">
              <table className="gtable">
                <thead>
                  <tr>
                    <th scope="col">{'Measure'}</th>
                    <th scope="col">{'How to calculate it'}</th>
                    <th scope="col">{'What it tells you'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-col="Measure">{'Channel share'}</td>
                    <td data-col="How to calculate it">
                      {'Trips booked in the company channel, divided by all trips expensed'}
                    </td>
                    <td data-col="What it tells you">
                      {'How much travel you can see and help with'}
                    </td>
                  </tr>
                  <tr>
                    <td data-col="Measure">{'In-policy rate'}</td>
                    <td data-col="How to calculate it">
                      {'Trips booked inside every limit, divided by trips booked in the channel'}
                    </td>
                    <td data-col="What it tells you">
                      {'Whether the limits fit how people travel'}
                    </td>
                  </tr>
                  <tr>
                    <td data-col="Measure">{'Exceptions approved before booking'}</td>
                    <td data-col="How to calculate it">
                      {
                        'Out-of-policy trips approved before booking, divided by all out-of-policy trips'
                      }
                    </td>
                    <td data-col="What it tells you">{'Whether the approval route works'}</td>
                  </tr>
                  <tr>
                    <td data-col="Measure">{'Out-of-policy spend'}</td>
                    <td data-col="How to calculate it">{'Dollars spent above the limits'}</td>
                    <td data-col="What it tells you">{'Where the money goes'}</td>
                  </tr>
                  <tr>
                    <td data-col="Measure">{'Late bookings'}</td>
                    <td data-col="How to calculate it">
                      {'Trips booked inside the booking window, such as less than 7 days ahead'}
                    </td>
                    <td data-col="What it tells you">
                      {'Where planning, not policy, is the problem'}
                    </td>
                  </tr>
                  <tr>
                    <td data-col="Measure">{'Unused tickets'}</td>
                    <td data-col="How to calculate it">
                      {'Tickets canceled and not reused before they expire'}
                    </td>
                    <td data-col="What it tells you">
                      {'Money that is recoverable with tracking'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              {
                'Start with the numbers you can get today. If your agency sends a booking report and your expense system can export claims, you can build the first two measures in an afternoon by matching trips across the two files.'
              }
            </p>
            <h2 className="mr-h2" id="reading-the-results">
              {'Reading the results'}
            </h2>
            <ul>
              <li>
                <strong>{'Low channel share:'}</strong>
                {
                  ' look at who books outside and what they book. Often it is one team, one route or one hotel.'
                }
              </li>
              <li>
                <strong>{'Low in-policy rate in the channel:'}</strong>
                {
                  ' your limits may be out of date. Compare the limit with what travelers actually pay in each city.'
                }
              </li>
              <li>
                <strong>{'Many exceptions approved after the fact:'}</strong>
                {' the approval route is too slow, or travelers do not know it exists.'}
              </li>
              <li>
                <strong>{'High late-booking cost:'}</strong>
                {
                  ' talk to the teams that plan client visits. A booking window works when it matches how work is scheduled.'
                }
              </li>
            </ul>
            <h2 className="mr-h2" id="a-30-day-plan">
              {'A 30-day plan'}
            </h2>
            <div className="compare-wrap">
              <table className="gtable">
                <thead>
                  <tr>
                    <th scope="col">{'Week'}</th>
                    <th scope="col">{'Action'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-col="Week">{'1'}</td>
                    <td data-col="Action">
                      {
                        "Pull last quarter's booking report and expense export. Calculate channel share and in-policy rate"
                      }
                    </td>
                  </tr>
                  <tr>
                    <td data-col="Week">{'2'}</td>
                    <td data-col="Action">
                      {
                        'Update the three limits that cause the most exceptions. Name one booking channel in the policy'
                      }
                    </td>
                  </tr>
                  <tr>
                    <td data-col="Week">{'3'}</td>
                    <td data-col="Action">
                      {
                        'Set the limits up in the booking tool so every option shows in or out of policy. Switch approvals to exceptions only'
                      }
                    </td>
                  </tr>
                  <tr>
                    <td data-col="Week">{'4'}</td>
                    <td data-col="Action">
                      {
                        'Announce the changes in one message. Measure again after the next month-end'
                      }
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 className="mr-h2" id="how-to-talk-to-teams-about-compliance">
              {'How to talk to teams about compliance'}
            </h2>
            <p>
              {
                'Compliance numbers land better as a conversation than as a report card. A few habits help:'
              }
            </p>
            <ul>
              <li>
                <strong>{"Share the team's own numbers."}</strong>
                {
                  ' "Your team booked 40 trips last quarter, and 12 were booked outside the tool" starts a better conversation than a company-wide percentage.'
                }
              </li>
              <li>
                <strong>{'Ask what made the other option easier.'}</strong>
                {
                  ' The answer is usually specific: a hotel near a client site that the tool did not show, a flight time that suits the meeting, an approval that came too late.'
                }
              </li>
              <li>
                <strong>{'Fix one thing and tell them.'}</strong>
                {
                  ' When a team sees its feedback change a limit or a setting, it books through the channel more often.'
                }
              </li>
              <li>
                <strong>{'Thank the people who book for others.'}</strong>
                {
                  " Assistants who move their executives' trips into the channel change the numbers more than anyone."
                }
              </li>
            </ul>
            <p>
              {
                'Keep the tone practical. The goal is a program that people choose because it is easier, and finance can see because it is complete.'
              }
            </p>
            <aside className="lf-callout mr-paper" aria-label="Business travel policy template">
              <div>
                <p className="lf-callout__k">{'Free template'}</p>
                <p className="lf-callout__h">
                  {'The Business Travel Policy Template for Growing Companies'}
                </p>
                <p className="lf-callout__b">
                  {
                    'A complete travel and expense policy you can edit, with a one-page rollout checklist.'
                  }
                </p>
              </div>
              <Button asChild variant="default" size="default">
                <Link className="mr-btn" to="/resources/business-travel-policy-template">
                  <span className="mr-btn__u">{'Get the template'}</span>
                </Link>
              </Button>
            </aside>
            <div className="lf-product mr-paper">
              <p className="lf-product__k">{'From Miraee'}</p>
              <h2 className="mr-h2" id="how-miraee-helps-keep-bookings-inside-policy">
                {'How Miraee helps keep bookings inside policy'}
              </h2>
              <p>
                {
                  'Miraee is business travel and expense software. It applies your policy at the moment people choose.'
                }
              </p>
              <ul>
                <li>
                  <strong>{'Every flight and hotel option is marked in or out of policy,'}</strong>
                  {' so travelers pick from options that already fit.'}
                </li>
                <li>
                  <strong>{'Approvals only come in when something is out of policy,'}</strong>
                  {' with the reason attached.'}
                </li>
                <li>
                  <strong>{'Booking on behalf'}</strong>
                  {' for assistants and office admins, inside policy.'}
                </li>
                <li>
                  <strong>{'When plans change,'}</strong>
                  {' the traveler gets an alert and new options to confirm, in the same app.'}
                </li>
                <li>
                  <strong>{'A full audit log'}</strong>
                  {' of who booked what, and when, for the travel lead and finance.'}
                </li>
              </ul>
              <p>
                {
                  'Employees ask the Miraee assistant for a trip and choose flights and hotels inside company policy. The assistant suggests. Your approvers decide.'
                }
              </p>
              <p>
                {
                  "Want to see where last year's travel went first? The optional spend review measures bookings outside your program and spend outside policy from one booking report you already have. See "
                }
                <Link to="/travel-managers">{'policy on every booking'}</Link>
                {' or '}
                <Link to="/how-it-works">{'see how it works'}</Link>
                {'.'}
              </p>
              <figure
                className="lf-view mr-paper"
                role="img"
                aria-label="Flight options from Austin to Chicago, each marked in policy or out of policy"
              >
                <div className="phone" aria-hidden="true">
                  <div className="phone__screen mr-plum">
                    <div className="phone__bar">
                      <span className="mr-fig">{'9:41'}</span>
                      <span>{'Flights'}</span>
                    </div>
                    <p className="phone__title">{'Austin to Chicago'}</p>
                    <p className="phone__meta">{'Wed, Oct 14 · 1 traveler'}</p>
                    <div className="fl">
                      <span className="fl__time">{'7:05 a.m.'}</span>
                      <span className="fl__fare">{'$312.40'}</span>
                      <span className="fl__meta">{'Nonstop'}</span>
                      <span className="mr-badge mr-badge--success">{'In policy'}</span>
                    </div>
                    <div className="fl">
                      <span className="fl__time">{'9:30 a.m.'}</span>
                      <span className="fl__fare">{'$298.10'}</span>
                      <span className="fl__meta">{'Nonstop'}</span>
                      <span className="mr-badge mr-badge--success">{'In policy'}</span>
                    </div>
                    <div className="fl">
                      <span className="fl__time">{'12:15 p.m.'}</span>
                      <span className="fl__fare">{'$684.90'}</span>
                      <span className="fl__meta">{'Nonstop'}</span>
                      <span className="mr-badge mr-badge--error">{'Out of policy'}</span>
                    </div>
                  </div>
                </div>
                <figcaption className="mr-caption">
                  {'Product view with illustrative data.'}
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export function RelatedContent() {
  return (
    <>
      <section className="mr-section hr-top lf-related" aria-labelledby="more-h">
        <div className="mr-container">
          <h2 className="mr-h2" id="more-h">
            {'Keep reading'}
          </h2>
          <ul className="lf-cards lf-cards--3">
            <li className="lf-card lf-card--frame mr-paper">
              <Link to="/resources/business-travel-policy">
                <span className="lf-card__img">
                  <picture>
                    <source
                      srcSet="/img/document/resources-guide-travel-policy-1.webp"
                      type="image/webp"
                    />
                    <img
                      src="/img/document/resources-guide-travel-policy-1.jpg"
                      width="2046"
                      height="1364"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                </span>
                <span className="lf-card__body">
                  <span className="lf-card__k">{'Travel leads'}</span>
                  <span className="lf-card__t">
                    {'How to write a business travel policy your people will follow'}
                  </span>
                  <span className="lf-card__d">
                    {'Booking rules, approvals, flight and hotel limits, and a rollout plan.'}
                  </span>
                </span>
              </Link>
            </li>
            <li className="lf-card lf-card--frame mr-paper">
              <Link to="/resources/travel-and-expense-policy">
                <span className="lf-card__img">
                  <picture>
                    <source
                      srcSet="/img/document/resources-guide-t-e-policy-1.webp"
                      type="image/webp"
                    />
                    <img
                      src="/img/document/resources-guide-t-e-policy-1.jpg"
                      width="2046"
                      height="1174"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                </span>
                <span className="lf-card__body">
                  <span className="lf-card__k">{'Finance'}</span>
                  <span className="lf-card__t">
                    {'Travel and expense policy: what to include, with examples'}
                  </span>
                  <span className="lf-card__d">
                    {
                      'Example wording finance teams can copy: limits, receipts, reimbursement and GL codes.'
                    }
                  </span>
                </span>
              </Link>
            </li>
            <li className="lf-card lf-card--frame mr-paper">
              <Link to="/resources/travel-expense-report">
                <span className="lf-card__img">
                  <picture>
                    <source
                      srcSet="/img/document/resources-guide-expense-reports-1.webp"
                      type="image/webp"
                    />
                    <img
                      src="/img/document/resources-guide-expense-reports-1.jpg"
                      width="2046"
                      height="1366"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                </span>
                <span className="lf-card__body">
                  <span className="lf-card__k">{'Finance'}</span>
                  <span className="lf-card__t">
                    {'Travel expense reports: close month-end with fewer receipts to chase'}
                  </span>
                  <span className="lf-card__d">
                    {'What a good report contains, plus a travel month-end close checklist.'}
                  </span>
                </span>
              </Link>
            </li>
          </ul>
          <p className="link-row">
            <Button asChild variant="tertiary" size="default">
              <Link className="mr-btn mr-btn--tertiary" to="/resources">
                {'More business travel resources'}
              </Link>
            </Button>
          </p>
        </div>
      </section>
      <section className="sources" aria-labelledby="src-h">
        <div className="mr-container">
          <h2 id="src-h">{'Sources'}</h2>
          <ol>
            <li id="src-1">
              {'Business Travel News, Business Traveler survey, October 2025. '}
              <a
                href="https://www.businesstravelnews.com/Research/Business-Traveler-2025/Part-4-Booking-Tools-and-Technologies"
                rel="noopener"
              >
                {'businesstravelnews.com'}
              </a>
            </li>
            <li id="src-2">
              {'GBTA, Business Travel Innovation Research, 2026. North America and Europe. '}
              <a
                href="https://gbta.org/research/business-travel-innovation-research-2026/"
                rel="noopener"
              >
                {'gbta.org'}
              </a>
            </li>
          </ol>
        </div>
      </section>
      <section className="mr-plum closing" aria-labelledby="close-h">
        <div className="mr-container">
          <div className="closing__grid">
            <h2 className="mr-h2" id="close-h">
              {'Put every trip in one place.'}
            </h2>
            <div className="closing__side">
              <p className="mr-body">
                {
                  'Miraee is business travel and expense software. Free to sign up and onboard, at any company size.'
                }
              </p>
              <div className="mr-btn-row">
                <Button asChild variant="default" size="default">
                  <DialogLink className="mr-btn" dialog="signup" to="/sign-up">
                    {'Sign up free'}
                  </DialogLink>
                </Button>
                <Button asChild variant="tertiary" size="default">
                  <Link className="mr-btn mr-btn--tertiary" to="/how-it-works">
                    {'See how it works'}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <figure className="closing__photo" style={{ margin: '64px 0 0' }}>
          <picture>
            <source srcSet="/img/px7823010-brooklyn-bridge.webp" type="image/webp" />
            <img
              src="/img/px7823010-brooklyn-bridge.jpg"
              width="1196"
              height="540"
              alt="The Brooklyn Bridge and the Manhattan skyline at sunset."
              loading="lazy"
              decoding="async"
            />
          </picture>
        </figure>
      </section>
    </>
  )
}
