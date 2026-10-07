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
              <span aria-current="page">Corporate travel manager guide</span>
            </li>
          </ol>
        </div>
      </nav>
      <div className="mr-container split">
        <div className="split__copy lf-hero__copy">
          <p className="mr-eyebrow">Guide for operations, office and people leads</p>
          <h1 className="mr-h1" id="hero-h">
            The part-time corporate travel manager's guide
          </h1>
          <p className="mr-lead">
            In many companies of 300 to 1,500 people, the corporate travel manager is an operations,
            office or people lead who also runs travel. This guide sets out the job in plain steps:
            what to own, what to hand to finance, what to automate and what to do when a trip goes
            wrong.
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
            <source srcSet="/img/px6775122-pair.webp" type="image/webp" />
            <img
              src="/img/px6775122-pair.jpg"
              width="1000"
              height="750"
              alt="An operations lead helps a colleague plan a trip at a laptop in front of a world map."
              fetchpriority="high"
            />
          </picture>
        </figure>
      </div>
    </section>
  )
}
