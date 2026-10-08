import { Section, Container } from '@/components/layout/content-layout'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function HeroSection() {
  return (
    <Section className="mr-paper lf-hero lf-hero--frame" aria-labelledby="hero-h">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Container className="mr-container">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/compare">Compare</Link>
            </li>
            <li>
              <span aria-current="page">Miraee vs SAP Concur</span>
            </li>
          </ol>
        </Container>
      </nav>
      <Container className="mr-container split">
        <div className="split__copy lf-hero__copy">
          <p className="mr-eyebrow">Comparison</p>
          <h1 className="mr-h1" id="hero-h">
            SAP Concur alternatives: how Miraee compares
          </h1>
          <p className="mr-lead">
            Miraee is business travel and expense software. If your renewal with SAP Concur is
            coming up, here is how the two compare on getting started, travel policy, approvals and
            what finance sees, with every Concur fact dated.
          </p>
          <div className="mr-btn-row">
            <Button asChild>
              <DialogLink to="/sign-up" dialog="signup">
                Sign up free
              </DialogLink>
            </Button>{' '}
            <Button asChild variant="secondary">
              <DialogLink to="/spend-review" dialog="review">
                Get a spend review
              </DialogLink>
            </Button>
          </div>
          <p className="mr-small hero__trust">Free to sign up and onboard, at any company size.</p>
          <p className="lf-meta">
            Last updated <time dateTime="2026-09-30">September 30, 2026</time> · Competitor facts
            checked September 30, 2026 · Reviewed by Product Marketing
          </p>
        </div>
        <figure className="lf-hero__visual lf-hero__visual--frame mr-frame" style={{ margin: '0' }}>
          <picture>
            <source srcSet="/img/document/compare-sap-concur-hero-1.webp" type="image/webp" />
            <img
              src="/img/document/compare-sap-concur-hero-1.jpg"
              width="1366"
              height="2047"
              alt="A business professional in a striped blouse."
              fetchpriority="high"
            />
          </picture>
        </figure>
      </Container>
    </Section>
  )
}
