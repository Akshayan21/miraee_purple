import { CtaVideoBand } from '@/components/sections/cta-video-band'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function ResourceHero() {
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
                <span aria-current="page">{'Resources'}</span>
              </li>
            </ol>
          </div>
        </nav>
        <div className="mr-container split">
          <div className="split__copy lf-hero__copy">
            <p className="mr-eyebrow">{'Guides and templates'}</p>
            <h1 className="mr-h1" id="hero-h">
              {'Business travel resources'}
            </h1>
            <p className="mr-lead">
              {
                ' Practical guides for the people who run company travel and pay for it: travel leads, controllers and finance teams at companies of 300 to 1,500 people. Each one works on its own, whatever tool you use. Miraee is business travel and expense software. '
              }
            </p>
            <div className="mr-btn-row">
              <Button asChild variant="default" size="default">
                <Link className="mr-btn" to="/resources/business-travel-policy-template">
                  <span className="mr-btn__u">{'Get the template'}</span>
                </Link>
              </Button>
              <Button asChild variant="tertiary" size="default">
                <a className="mr-btn mr-btn--tertiary" href="#guides">
                  {'Browse the guides'}
                </a>
              </Button>
            </div>
          </div>
          <figure
            className="lf-hero__visual lf-hero__visual--frame mr-frame"
            style={{ margin: '0' }}
          >
            <picture>
              <source srcSet="/img/document/resources-hero-1.webp" type="image/webp" />
              <img
                src="/img/document/resources-hero-1.jpg"
                width="2046"
                height="1364"
                alt="A person plans work with notes on a whiteboard."
                {...{ fetchpriority: 'high' }}
              />
            </picture>
          </figure>
        </div>
      </section>
    </>
  )
}
export function ResourceGuides() {
  return (
    <>
      <div className="mr-section lf-hubbody">
        <div className="mr-container lf-grid">
          <div className="lf-prose">
            <h2 className="mr-h2" id="start-with-the-template">
              {'Start with the template'}
            </h2>
            <div className="lf-feature mr-paper">
              <div className="lf-feature__doc" aria-hidden="true">
                <div className="doc-cover">
                  <div className="doc-cover__top">
                    <img src="/img/miraee-logo-orange.svg" alt="" width="84" height="21" />
                  </div>
                  <div className="doc-cover__photo">
                    <picture>
                      <source
                        srcSet="/img/document/resources-template-card-1.webp"
                        type="image/webp"
                      />
                      <img
                        src="/img/document/resources-template-card-1.jpg"
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
              </div>
              <div className="lf-feature__copy">
                <p className="lf-callout__k">{'Free template'}</p>
                <h3 className="mr-h3">
                  {'The Business Travel Policy Template for Growing Companies'}
                </h3>
                <p className="mr-body">
                  {
                    ' A complete policy you can edit: booking, flights, hotels, ground transport, meals, approvals, changes, expenses and reimbursement, with a one-page rollout checklist. '
                  }
                </p>
                <div className="mr-btn-row" style={{ marginTop: '24px' }}>
                  <Button asChild variant="default" size="default">
                    <Link className="mr-btn" to="/resources/business-travel-policy-template">
                      <span className="mr-btn__u">{'Get the template'}</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <h2 className="mr-h2" id="guides">
              {'Guides'}
            </h2>
            <ul className="lf-cards lf-cards--g">
              <li className="lf-card lf-card--frame mr-paper">
                {' '}
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
                </Link>{' '}
              </li>
              <li className="lf-card lf-card--frame mr-paper">
                {' '}
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
                </Link>{' '}
              </li>
              <li className="lf-card lf-card--frame mr-paper">
                {' '}
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
                      {
                        'Why people book outside the program, and seven ways to bring bookings back.'
                      }
                    </span>
                  </span>
                </Link>{' '}
              </li>
              <li className="lf-card lf-card--frame mr-paper">
                {' '}
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
                </Link>{' '}
              </li>
              <li className="lf-card lf-card--frame mr-paper">
                {' '}
                <Link to="/resources/corporate-travel-manager">
                  <span className="lf-card__img">
                    <picture>
                      <source
                        srcSet="/img/document/resources-guide-part-time-travel-manager-1.webp"
                        type="image/webp"
                      />
                      <img
                        src="/img/document/resources-guide-part-time-travel-manager-1.jpg"
                        width="2047"
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
                      {"The part-time corporate travel manager's guide"}
                    </span>
                    <span className="lf-card__d">
                      {'Running company travel on top of your day job, in plain steps.'}
                    </span>
                  </span>
                </Link>{' '}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <CtaVideoBand
        video="compare"
        title="Put every trip in one place."
        body="Miraee is business travel and expense software. Free to sign up and onboard, at any company size."
        secondary={{ label: 'See how it works', variant: 'tertiary', to: '/how-it-works' }}
      />
    </>
  )
}
