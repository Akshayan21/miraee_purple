import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="mr-paper lf-hero lf-hero--frame" aria-labelledby="hero-h">
      <nav className="crumbs" aria-label="Breadcrumb">
        <div className="mr-container">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            <li>
              <span aria-current="page">Business travel policy</span>
            </li>
          </ol>
        </div>
      </nav>
      <div className="mr-container split">
        <div className="split__copy lf-hero__copy">
          <p className="mr-eyebrow">Guide for travel and operations leads</p>
          <h1 className="mr-h1" id="hero-h">
            How to write a business travel policy your people will follow
          </h1>
          <p className="mr-lead">
            A business travel policy is the set of rules that decides how employees book, what they
            can spend and who approves exceptions. This guide shows how to write one for a company
            of 300 to 1,500 people that travelers will actually follow, with a section-by-section
            checklist you can copy.
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
            <source srcSet="/img/px6775122-team-map-card.webp" type="image/webp" />
            <img
              src="/img/px6775122-team-map-card.jpg"
              width="1200"
              height="800"
              alt="A team plans travel around a laptop with a world map."
              fetchpriority="high"
            />
          </picture>
        </figure>
      </div>
    </section>
  )
}
