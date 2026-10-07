import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="mr-paper lf-hero lf-hero--cutout" aria-labelledby="hero-h">
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
              <span aria-current="page">Travel expense reports</span>
            </li>
          </ol>
        </div>
      </nav>
      <div className="mr-container split">
        <div className="split__copy lf-hero__copy">
          <p className="mr-eyebrow">Guide for controllers, ap and finance operations</p>
          <h1 className="mr-h1" id="hero-h">
            Travel expense reports: close month-end with fewer receipts to chase
          </h1>
          <p className="mr-lead">
            A travel expense report lists what an employee spent on a business trip so the company
            can check it, code it and pay it back. This guide covers what a good report contains,
            why travel slows month-end close, and a travel month-end checklist your team can use
            from the next close.
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
      </div>
    </section>
  )
}
