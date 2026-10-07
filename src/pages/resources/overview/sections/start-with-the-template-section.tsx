import { Container } from '@/components/layout/content-layout'
import { DocumentPreview } from '@/components/sections/product-preview'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function StartWithTheTemplateSection() {
  return (
    <div className="mr-section lf-hubbody">
      <Container className="mr-container lf-grid">
        <div className="lf-prose">
          <h2 className="mr-h2" id="start-with-the-template">
            Start with the template
          </h2>
          <div className="lf-feature mr-paper">
            <div className="lf-feature__doc" aria-hidden="true">
              <DocumentPreview className="doc-cover">
                <div className="doc-cover__top">
                  <img src="/img/miraee-logo-orange.svg" alt="" width="84" height="21" />
                </div>
                <div className="doc-cover__photo">
                  <picture>
                    <source srcSet="/img/px6775122-team-map-card.webp" type="image/webp" />
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
                  The Business Travel Policy Template for Growing Companies
                </p>
                <p className="doc-cover__s">Travel and expense policy · Rollout checklist</p>
              </DocumentPreview>
            </div>
            <div className="lf-feature__copy">
              <p className="lf-callout__k">Free template</p>
              <h3 className="mr-h3">The Business Travel Policy Template for Growing Companies</h3>
              <p className="mr-body">
                A complete policy you can edit: booking, flights, hotels, ground transport, meals,
                approvals, changes, expenses and reimbursement, with a one-page rollout checklist.
              </p>
              <div className="mr-btn-row" style={{ marginTop: '24px' }}>
                <Button asChild>
                  <Link to="/resources/business-travel-policy-template">
                    <span className="mr-btn__u">Get the template</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <h2 className="mr-h2" id="guides">
            Guides
          </h2>
          <ul className="lf-cards lf-cards--g">
            <li className="lf-card lf-card--frame mr-paper">
              <Link to="/resources/business-travel-policy">
                <span className="lf-card__img">
                  <picture>
                    <source srcSet="/img/px6775122-team-map-card.webp" type="image/webp" />
                    <img
                      src="/img/px6775122-team-map-card.jpg"
                      width="1200"
                      height="800"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                </span>
                <span className="lf-card__body">
                  <span className="lf-card__k">Travel leads</span>
                  <span className="lf-card__t">
                    How to write a business travel policy your people will follow
                  </span>
                  <span className="lf-card__d">
                    Booking rules, approvals, flight and hotel limits, and a rollout plan.
                  </span>
                </span>
              </Link>
            </li>
            <li className="lf-card lf-card--cutout mr-paper">
              <Link to="/resources/travel-and-expense-policy">
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
                  <span className="lf-card__k">Finance</span>
                  <span className="lf-card__t">
                    Travel and expense policy: what to include, with examples
                  </span>
                  <span className="lf-card__d">
                    Example wording finance teams can copy: limits, receipts, reimbursement and GL
                    codes.
                  </span>
                </span>
              </Link>
            </li>
            <li className="lf-card lf-card--frame mr-paper">
              <Link to="/resources/travel-policy-compliance">
                <span className="lf-card__img">
                  <picture>
                    <source srcSet="/img/px8367824-desk.webp" type="image/webp" />
                    <img
                      src="/img/px8367824-desk.jpg"
                      width="1000"
                      height="750"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                </span>
                <span className="lf-card__body">
                  <span className="lf-card__k">Travel leads</span>
                  <span className="lf-card__t">
                    Travel policy compliance: make the right option the easy one
                  </span>
                  <span className="lf-card__d">
                    Why people book outside the program, and seven ways to bring bookings back.
                  </span>
                </span>
              </Link>
            </li>
            <li className="lf-card lf-card--cutout mr-paper">
              <Link to="/resources/travel-expense-report">
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
                  <span className="lf-card__k">Finance</span>
                  <span className="lf-card__t">
                    Travel expense reports: close month-end with fewer receipts to chase
                  </span>
                  <span className="lf-card__d">
                    What a good report contains, plus a travel month-end close checklist.
                  </span>
                </span>
              </Link>
            </li>
            <li className="lf-card lf-card--frame mr-paper">
              <Link to="/resources/corporate-travel-manager">
                <span className="lf-card__img">
                  <picture>
                    <source srcSet="/img/px6775122-pair.webp" type="image/webp" />
                    <img
                      src="/img/px6775122-pair.jpg"
                      width="1000"
                      height="750"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                </span>
                <span className="lf-card__body">
                  <span className="lf-card__k">Travel leads</span>
                  <span className="lf-card__t">The part-time corporate travel manager's guide</span>
                  <span className="lf-card__d">
                    Running company travel on top of your day job, in plain steps.
                  </span>
                </span>
              </Link>
            </li>
          </ul>
          <h2 className="mr-h2" id="find-a-guide-by-role">
            Find a guide by role
          </h2>
          <p>
            <strong>Travel and operations leads.</strong>{' '}
            <Link to="/resources/business-travel-policy">
              How to write a business travel policy
            </Link>{' '}
            · <Link to="/resources/travel-policy-compliance">Travel policy compliance</Link> ·{' '}
            <Link to="/resources/corporate-travel-manager">
              The part-time corporate travel manager's guide
            </Link>
          </p>
          <p>
            <strong>Controllers and finance teams.</strong>{' '}
            <Link to="/resources/travel-and-expense-policy">
              Travel and expense policy, with examples
            </Link>{' '}
            ·{' '}
            <Link to="/resources/travel-expense-report">
              Travel expense reports and month-end close
            </Link>
          </p>
          <p>
            <strong>Choosing a tool.</strong>{' '}
            <Link to="/compare">Compare corporate travel management software</Link>
          </p>
        </div>
      </Container>
    </div>
  )
}
