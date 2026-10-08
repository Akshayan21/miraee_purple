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
                <span aria-current="page">{'Corporate travel manager guide'}</span>
              </li>
            </ol>
          </div>
        </nav>
        <div className="mr-container split">
          <div className="split__copy lf-hero__copy">
            <p className="mr-eyebrow">{'Guide for operations, office and people leads'}</p>
            <h1 className="mr-h1" id="hero-h">
              {"The part-time corporate travel manager's guide"}
            </h1>
            <p className="mr-lead">
              {
                'In many companies of 300 to 1,500 people, the corporate travel manager is an operations, office or people lead who also runs travel. This guide sets out the job in plain steps: what to own, what to hand to finance, what to automate and what to do when a trip goes wrong.'
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
                srcSet="/img/document/resources-guide-part-time-travel-manager-1.webp"
                type="image/webp"
              />
              <img
                src="/img/document/resources-guide-part-time-travel-manager-1.jpg"
                width="2047"
                height="1364"
                alt="A team meets in a glass-walled conference room."
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
                <a href="#what-does-a-corporate-travel-manager-do">
                  {'What does a corporate travel manager do?'}
                </a>
              </li>
              <li>
                <a href="#the-job-in-five-parts">{'The job, in five parts'}</a>
              </li>
              <li>
                <a href="#your-first-30-days">{'Your first 30 days'}</a>
              </li>
              <li>
                <a href="#work-with-finance-from-day-one">{'Work with finance from day one'}</a>
              </li>
              <li>
                <a href="#approvals-that-do-not-become-your-inbox">
                  {'Approvals that do not become your inbox'}
                </a>
              </li>
              <li>
                <a href="#help-the-people-who-book-for-others">
                  {'Help the people who book for others'}
                </a>
              </li>
              <li>
                <a href="#when-plans-change">{'When plans change'}</a>
              </li>
              <li>
                <a href="#a-monthly-routine-that-takes-an-hour">
                  {'A monthly routine that takes an hour'}
                </a>
              </li>
              <li>
                <a href="#your-first-year-checklist">{'Your first-year checklist'}</a>
              </li>
              <li>
                <a href="#answers-to-the-questions-travelers-ask-most">
                  {'Answers to the questions travelers ask most'}
                </a>
              </li>
              <li>
                <a href="#how-miraee-helps-a-part-time-travel-manager">
                  {'How Miraee helps a part-time travel manager'}
                </a>
              </li>
              <li>
                <a href="#questions">{'Questions'}</a>
              </li>
            </ol>
          </nav>
          <div className="lf-prose">
            <h2 className="mr-h2" id="what-does-a-corporate-travel-manager-do">
              {'What does a corporate travel manager do?'}
            </h2>
            <p>
              {
                'A corporate travel manager owns how the company books and pays for business travel: the travel policy, the booking channel, approvals, help for travelers when plans change, and the reports finance uses. In a growing company it is often a part-time role, so the goal is a program that runs on its own most days and needs you only for exceptions.'
              }
            </p>
            <h2 className="mr-h2" id="the-job-in-five-parts">
              {'The job, in five parts'}
            </h2>
            <div className="compare-wrap">
              <table className="gtable">
                <thead>
                  <tr>
                    <th scope="col">{'Part'}</th>
                    <th scope="col">{'What you own'}</th>
                    <th scope="col">{'What good looks like'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-col="Part">{'Policy'}</td>
                    <td data-col="What you own">{'The rules for booking and spending'}</td>
                    <td data-col="What good looks like">
                      {'A few pages, a number on every limit, reviewed twice a year'}
                    </td>
                  </tr>
                  <tr>
                    <td data-col="Part">{'Booking'}</td>
                    <td data-col="What you own">{'Where and how people book'}</td>
                    <td data-col="What good looks like">
                      {'One channel for flights and hotels, fast enough that people choose it'}
                    </td>
                  </tr>
                  <tr>
                    <td data-col="Part">{'Approvals'}</td>
                    <td data-col="What you own">{'Who approves what'}</td>
                    <td data-col="What good looks like">
                      {'Only out-of-policy trips reach an approver'}
                    </td>
                  </tr>
                  <tr>
                    <td data-col="Part">{'Changes'}</td>
                    <td data-col="What you own">{'What happens when plans change'}</td>
                    <td data-col="What good looks like">
                      {'Travelers see what happened and new options, without waiting on hold'}
                    </td>
                  </tr>
                  <tr>
                    <td data-col="Part">{'Reporting'}</td>
                    <td data-col="What you own">{'What finance and leadership see'}</td>
                    <td data-col="What good looks like">
                      {'Every trip with its cost, budget and code, each month'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              {
                'You do not need to do all five yourself. You need to know who does each one, and to make sure the handoffs work.'
              }
            </p>
            <h2 className="mr-h2" id="your-first-30-days">
              {'Your first 30 days'}
            </h2>
            <p>
              <strong>{'Week 1: find out how travel works today.'}</strong>
              {
                " Ask finance for last quarter's card statements and expense export, and your agency for its booking report if you have one. List where trips were booked, who booked them and how many were booked by assistants for someone else."
              }
            </p>
            <p>
              <strong>{'Week 2: read the policy as a traveler would.'}</strong>
              {
                ' Can you tell from the document where to book, what hotel you can choose in your most-visited city and who approves an exception? Mark every rule that needs a number.'
              }
            </p>
            <p>
              <strong>{'Week 3: agree the numbers with finance.'}</strong>
              {
                ' Hotel limits by city tier, cabin class by flight length, the meal limit, the approval rule and the GL codes. Write down who can approve a change to each.'
              }
            </p>
            <p>
              <strong>{'Week 4: set up and announce.'}</strong>
              {
                ' Put the rules into the booking tool, brief approvers, then send one short message to everyone who travels: where to book, the three limits people ask about most, and who to ask.'
              }
            </p>
            <p>
              {'Our '}
              <Link to="/resources/business-travel-policy">{'business travel policy'}</Link>
              {' guide covers the writing, and the '}
              <Link to="/resources/business-travel-policy-template">
                {'business travel policy template'}
              </Link>
              {' gives you a complete draft to edit.'}
            </p>
            <h2 className="mr-h2" id="work-with-finance-from-day-one">
              {'Work with finance from day one'}
            </h2>
            <p>{'Finance usually owns the travel budget, so make them a partner early:'}</p>
            <ul>
              <li>
                <strong>{'Agree what finance needs from every trip.'}</strong>
                {' Budget, cost center, entity and GL code, attached at booking.'}
              </li>
              <li>
                <strong>{'Agree the month-end handoff.'}</strong>
                {' Which reports you send, when, and what counts as an exception.'}
              </li>
              <li>
                <strong>{'Share one monthly view.'}</strong>
                {
                  ' Trips booked, spend against budget, out-of-policy spend and unused tickets. Keep it to one page.'
                }
              </li>
            </ul>
            <p>
              {
                'A travel lead who arrives at the budget meeting with trip-level numbers gets a very different conversation from one who arrives with a card statement.'
              }
            </p>
            <h2 className="mr-h2" id="approvals-that-do-not-become-your-inbox">
              {'Approvals that do not become your inbox'}
            </h2>
            <p>
              {
                'If every trip needs approval, the travel manager ends up chasing managers on behalf of travelers. Move to approval only when something is out of policy:'
              }
            </p>
            <ol>
              <li>{'Trips inside the rules book straight away.'}</li>
              <li>{"Anything outside them goes to the traveler's approver, with the reason."}</li>
              <li>
                {
                  'You review the pattern once a month: which rules cause most exceptions, and whether the limits still fit.'
                }
              </li>
            </ol>
            <p>
              {'This keeps approvals meaningful and keeps you out of the loop for routine trips.'}
            </p>
            <h2 className="mr-h2" id="help-the-people-who-book-for-others">
              {'Help the people who book for others'}
            </h2>
            <p>
              {
                'Executive assistants and office admins often book more trips than anyone else in the company. Make their work faster:'
              }
            </p>
            <ul>
              <li>
                {
                  "Let them book on behalf of the people they support, with each traveler's details on file."
                }
              </li>
              <li>
                {'Show them the same in-policy and out-of-policy marks the traveler would see.'}
              </li>
              <li>{'Give them one place to see the upcoming trips they booked.'}</li>
            </ul>
            <p>
              {
                'When assistants find the company channel quicker than the alternatives, a large share of your bookings follows.'
              }
            </p>
            <h2 className="mr-h2" id="when-plans-change">
              {'When plans change'}
            </h2>
            <p>
              {
                'A delayed or canceled flight is where travelers decide whether to trust the program. It is also the hardest part of the job: 64% of travel managers say changes and cancellations are hard in their booking tool.'
              }
              <sup>
                <a href="#src-1" rel="noopener" aria-label="Source 1">
                  {'1'}
                </a>
              </sup>
            </p>
            <p>{'Set up the basics before you need them:'}</p>
            <ul>
              <li>
                <strong>{'Tell travelers where to go first.'}</strong>
                {" The booking channel's app or help line, stated in the policy."}
              </li>
              <li>
                <strong>{'Make changes visible.'}</strong>
                {
                  ' The traveler should see what happened and the new options in the same place they booked, and confirm the one that suits them.'
                }
              </li>
              <li>
                <strong>{'Record every change.'}</strong>
                {
                  ' The travel lead and finance should see the new flight and any fare difference without asking.'
                }
              </li>
              <li>
                <strong>{'Name one company contact'}</strong>
                {
                  ' for the cases the tool cannot solve, such as a traveler who needs a hotel tonight in a city with no rooms.'
                }
              </li>
            </ul>
            <p>
              {
                'After each disruption, ask the traveler one question: what would have made this easier? The answers improve the program faster than any survey.'
              }
            </p>
            <figure
              className="lf-view lf-view--plum mr-plum"
              role="img"
              aria-label="Phone alert: the 6:40 a.m. flight to Chicago is delayed, with two new options at the same fare"
            >
              <div className="phone phone--alert" aria-hidden="true">
                <div className="phone__screen mr-plum">
                  <div className="phone__bar">
                    <span className="mr-fig">{'5:53'}</span>
                    <span>{'Trips'}</span>
                  </div>
                  <div className="mr-alert">
                    <span className="mr-alert__status">{'Flight delayed'}</span>
                    <p className="mr-alert__msg">
                      {'Your 6:40 a.m. flight to Chicago is delayed. '}
                      <span>{'Here are two new options. Tap one to confirm.'}</span>
                    </p>
                  </div>
                  <div className="mr-options">
                    <span className="mr-option" aria-checked="true">
                      {' '}
                      <span className="mr-option__time">{'8:15 a.m.'}</span>
                      <span className="mr-option__fare">{'Same fare'}</span>{' '}
                      <span className="mr-option__meta">{'AUS to ORD · Nonstop'}</span>
                      <span className="mr-badge mr-badge--success">{'In policy'}</span>{' '}
                      <svg
                        className="mr-line mr-option__tick"
                        viewBox="0 0 80 64"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M6 34 C 14 42 22 50 28 57 C 42 38 58 20 76 5"></path>
                      </svg>{' '}
                    </span>
                    <span className="mr-option" aria-checked="false">
                      {' '}
                      <span className="mr-option__time">{'9:50 a.m.'}</span>
                      <span className="mr-option__fare">{'Same fare'}</span>{' '}
                      <span className="mr-option__meta">{'AUS to ORD · Nonstop'}</span>
                      <span className="mr-badge mr-badge--success">{'In policy'}</span>{' '}
                    </span>
                  </div>
                  <Button asChild variant="default" size="default">
                    <span className="mr-btn" role="presentation">
                      {'Confirm 8:15 a.m.'}
                    </span>
                  </Button>
                  <p className="phone__cap">
                    {'Your travel lead sees the change in the audit log.'}
                  </p>
                </div>
              </div>
              <figcaption className="mr-caption">
                {'Product view with illustrative data.'}
              </figcaption>
            </figure>
            <h2 className="mr-h2" id="a-monthly-routine-that-takes-an-hour">
              {'A monthly routine that takes an hour'}
            </h2>
            <div className="compare-wrap">
              <table className="gtable">
                <thead>
                  <tr>
                    <th scope="col">{'Step'}</th>
                    <th scope="col">{'Time'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-col="Step">{'Check bookings made outside the channel and ask why'}</td>
                    <td data-col="Time">{'15 minutes'}</td>
                  </tr>
                  <tr>
                    <td data-col="Step">
                      {'Review out-of-policy trips and the rules behind them'}
                    </td>
                    <td data-col="Time">{'15 minutes'}</td>
                  </tr>
                  <tr>
                    <td data-col="Step">
                      {'Check unused and canceled tickets before they expire'}
                    </td>
                    <td data-col="Time">{'10 minutes'}</td>
                  </tr>
                  <tr>
                    <td data-col="Step">{'Send finance the one-page monthly view'}</td>
                    <td data-col="Time">{'10 minutes'}</td>
                  </tr>
                  <tr>
                    <td data-col="Step">
                      {'Note one change to the policy or setup for next month'}
                    </td>
                    <td data-col="Time">{'10 minutes'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              {'Our guide to '}
              <Link to="/resources/travel-policy-compliance">{'travel policy compliance'}</Link>
              {' explains how to measure bookings outside the channel and out-of-policy spend.'}
            </p>
            <h2 className="mr-h2" id="your-first-year-checklist">
              {'Your first-year checklist'}
            </h2>
            <ul className="tasks">
              <li className="task">{'One booking channel named in the policy'}</li>
              <li className="task">{'A number on every limit, by city tier'}</li>
              <li className="task">{'Approvals only for out-of-policy trips'}</li>
              <li className="task">{'Assistants can book on behalf of others'}</li>
              <li className="task">{'Travelers get an alert and new options when plans change'}</li>
              <li className="task">{'Every trip carries its budget and GL code'}</li>
              <li className="task">{'A one-page monthly view shared with finance'}</li>
              <li className="task">{'Policy reviewed twice a year, with a change log'}</li>
            </ul>
            <h2 className="mr-h2" id="answers-to-the-questions-travelers-ask-most">
              {'Answers to the questions travelers ask most'}
            </h2>
            <p>
              {
                "Most of a part-time travel manager's week goes on the same handful of questions. Write the answers once, put them at the end of the policy, and link to them from the booking tool."
              }
            </p>
            <div className="compare-wrap">
              <table className="gtable">
                <thead>
                  <tr>
                    <th scope="col">{'Question'}</th>
                    <th scope="col">{'A clear answer'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-col="Question">
                      {'Can I book the conference hotel if it costs more than the limit?'}
                    </td>
                    <td data-col="A clear answer">
                      {'Yes. Book it through the company tool and add the reason when you book'}
                    </td>
                  </tr>
                  <tr>
                    <td data-col="Question">{'My flight was canceled. What do I do?'}</td>
                    <td data-col="A clear answer">
                      {
                        'Open the booking tool first. It shows what happened and your new options; confirm the one that suits you'
                      }
                    </td>
                  </tr>
                  <tr>
                    <td data-col="Question">{'Can I add a personal day to a work trip?'}</td>
                    <td data-col="A clear answer">
                      {
                        'Yes, if the flight costs the same or less. Hotel nights and costs for the personal days are yours'
                      }
                    </td>
                  </tr>
                  <tr>
                    <td data-col="Question">{'My manager is on leave. Who approves my trip?'}</td>
                    <td data-col="A clear answer">
                      {"Your manager's manager, or the budget owner named for your team"}
                    </td>
                  </tr>
                  <tr>
                    <td data-col="Question">{'I lost a receipt. What now?'}</td>
                    <td data-col="A clear answer">
                      {'Submit a short written statement with the merchant, date, items and amount'}
                    </td>
                  </tr>
                  <tr>
                    <td data-col="Question">{'When will I get my money back?'}</td>
                    <td data-col="A clear answer">
                      {'In the next payment run after your expenses are approved'}
                    </td>
                  </tr>
                  <tr>
                    <td data-col="Question">{'Can someone else book for me?'}</td>
                    <td data-col="A clear answer">
                      {
                        'Yes. Assistants and office admins can book on your behalf, with the same rules'
                      }
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              {
                'Each answer you publish is a message you do not have to write again. Review the list every quarter and add the new questions that came up.'
              }
            </p>
            <div className="lf-product mr-paper">
              <p className="lf-product__k">{'From Miraee'}</p>
              <h2 className="mr-h2" id="how-miraee-helps-a-part-time-travel-manager">
                {'How Miraee helps a part-time travel manager'}
              </h2>
              <p>
                {
                  'Miraee is business travel and expense software, with a travel assistant for every employee and the controls finance needs.'
                }
              </p>
              <ul>
                <li>
                  <strong>{'Your policy runs on every booking.'}</strong>
                  {
                    ' Every option is marked in or out of policy, and approvals only reach you when something is out of policy.'
                  }
                </li>
                <li>
                  <strong>{'Booking on behalf'}</strong>
                  {' for assistants and office admins, inside policy.'}
                </li>
                <li>
                  <strong>{'When plans change,'}</strong>
                  {
                    ' your traveler gets an alert and new options to confirm, and you see the change in the audit log.'
                  }
                </li>
                <li>
                  <strong>{'Every trip coded for finance,'}</strong>
                  {' with its budget and GL code, in one finance dashboard.'}
                </li>
                <li>
                  <strong>{'Onboarding is free,'}</strong>
                  {' including your policy and your people, at any company size.'}
                </li>
              </ul>
              <p>
                {
                  'Employees ask the Miraee assistant for a trip and choose flights and hotels inside company policy. The assistant suggests. Your approvers decide. See '
                }
                <Link to="/travel-managers">{'Miraee for travel managers'}</Link>
                {' or read about '}
                <Link to="/when-plans-change">{'when plans change'}</Link>
                {'.'}
              </p>
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
              <Link to="/resources/travel-policy-compliance">
                <span className="lf-card__img">
                  <picture>
                    <source
                      srcSet="/img/document/resources-guide-policy-compliance-1.webp"
                      type="image/webp"
                    />
                    <img
                      src="/img/document/resources-guide-policy-compliance-1.jpg"
                      width="1364"
                      height="2046"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                </span>
                <span className="lf-card__body">
                  <span className="lf-card__k">{'Travel leads'}</span>
                  <span className="lf-card__t">
                    {'Travel policy compliance: make the right option the easy one'}
                  </span>
                  <span className="lf-card__d">
                    {'Why people book outside the program, and seven ways to bring bookings back.'}
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
              {'GBTA and Direct Travel survey of 195 travel managers, May 2025. '}
              <a
                href="https://www.businesstravelnews.com/Technology/GBTA-Direct-Travel-Survey-Shows-Challenges-with-OBT-Servicing-Meeting-Integration"
                rel="noopener"
              >
                {'businesstravelnews.com'}
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
