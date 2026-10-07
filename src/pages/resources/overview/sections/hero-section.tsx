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
              <span aria-current="page">Resources</span>
            </li>
          </ol>
        </div>
      </nav>
      <div className="mr-container split">
        <div className="split__copy lf-hero__copy">
          <p className="mr-eyebrow">Guides and templates</p>
          <h1 className="mr-h1" id="hero-h">
            Business travel resources
          </h1>
          <p className="mr-lead">
            Practical guides for the people who run company travel and pay for it: travel leads,
            controllers and finance teams at companies of 300 to 1,500 people. Each one works on its
            own, whatever tool you use. Miraee is business travel and expense software.
          </p>
          <div className="mr-btn-row">
            <Button asChild>
              <Link to="/resources/business-travel-policy-template">
                <span className="mr-btn__u">Get the template</span>
              </Link>
            </Button>{' '}
            <Button asChild variant="tertiary">
              <a href="#guides">Browse the guides</a>
            </Button>
          </div>
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
