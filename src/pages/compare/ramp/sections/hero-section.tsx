import { Section, Container } from '@/components/layout/content-layout'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function HeroSection() {
  return (
    <Section className="mr-paper lf-hero lf-hero--cutout" aria-labelledby="hero-h">
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
              <span aria-current="page">Miraee with Ramp</span>
            </li>
          </ol>
        </Container>
      </nav>
      <Container className="mr-container split">
        <div className="split__copy lf-hero__copy">
          <p className="mr-eyebrow">Comparison</p>
          <h1 className="mr-h1" id="hero-h">
            Miraee with Ramp: travel booking beside the card you keep
          </h1>
          <p className="mr-lead">
            Miraee is business travel and expense software. Many finance teams already run Ramp
            cards. This page explains what Miraee adds for travel and how the two work side by side.
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
        <figure
          className="lf-hero__visual lf-hero__visual--cut lf-cut--ramp"
          style={{ margin: '0' }}
        >
          <picture>
            <source srcSet="/img/px5918389-controller.webp" type="image/webp" />
            <img
              className="lf-hero__person"
              src="/img/px5918389-controller.png"
              width="831"
              height="1100"
              alt="A controller in a rust sweater holds a tablet in the office, beside a trip record with its GL code."
              fetchpriority="high"
            />
          </picture>
        </figure>
      </Container>
    </Section>
  )
}
