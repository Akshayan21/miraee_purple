import { Section, Container } from '@/components/layout/content-layout'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

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
              <Link to="/resources">Resources</Link>
            </li>
            <li>
              <span aria-current="page">Travel and expense policy</span>
            </li>
          </ol>
        </Container>
      </nav>
      <Container className="mr-container split">
        <div className="split__copy lf-hero__copy">
          <p className="mr-eyebrow">Guide for controllers and finance teams</p>
          <h1 className="mr-h1" id="hero-h">
            Travel and expense policy: what to include, with examples
          </h1>
          <p className="mr-lead">
            A travel and expense policy tells employees what the company pays for on a trip, how to
            claim it and how fast they get their money back. This guide lists what to include, with
            example wording finance teams can copy and adapt for a company of 300 to 1,500 people.
          </p>
          <div className="mr-btn-row">
            <Button asChild>
              <Link to="/resources/business-travel-policy-template">
                <span className="mr-btn__u">Get the template</span>
              </Link>
            </Button>
          </div>
          <p className="lf-meta">
            By the Miraee team · Reviewed by Product Marketing · Last updated{' '}
            <time dateTime="2026-09-30">September 30, 2026</time> · 8 min read
          </p>
        </div>
        <figure className="lf-hero__visual lf-hero__visual--cut lf-cut--te" style={{ margin: '0' }}>
          <picture>
            <source srcSet="/img/px5918389-controller.webp" type="image/webp" />
            <img
              className="lf-hero__person"
              src="/img/px5918389-controller.png"
              width="831"
              height="1100"
              alt="A controller in a rust sweater holds a tablet in the office."
              fetchpriority="high"
            />
          </picture>
        </figure>
      </Container>
    </Section>
  )
}
