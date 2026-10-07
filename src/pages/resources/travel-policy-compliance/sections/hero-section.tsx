import { Section, Container } from '@/components/layout/content-layout'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

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
              <Link to="/resources">Resources</Link>
            </li>
            <li>
              <span aria-current="page">Travel policy compliance</span>
            </li>
          </ol>
        </Container>
      </nav>
      <Container className="mr-container split">
        <div className="split__copy lf-hero__copy">
          <p className="mr-eyebrow">Guide for travel and operations leads</p>
          <h1 className="mr-h1" id="hero-h">
            Travel policy compliance: make the right option the easy one
          </h1>
          <p className="mr-lead">
            Travel policy compliance is the share of trips booked the way your policy says: through
            the company channel, inside the limits, with exceptions approved. This guide explains
            how to measure it and how to raise it by making the in-policy option the easiest one to
            choose.
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
        <figure className="lf-hero__visual lf-hero__visual--frame mr-frame" style={{ margin: '0' }}>
          <picture>
            <source srcSet="/img/px8367824-desk.webp" type="image/webp" />
            <img
              src="/img/px8367824-desk.jpg"
              width="1000"
              height="750"
              alt="A travel lead leans in to show a colleague the booking options on a laptop."
              fetchpriority="high"
            />
          </picture>
        </figure>
      </Container>
    </Section>
  )
}
