import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function HeroSection() {
  return (
    <section className="mr-plum lf-hero lf-hero--cutout" aria-labelledby="hero-h">
      <nav className="crumbs" aria-label="Breadcrumb">
        <div className="mr-container">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/compare">Compare</Link>
            </li>
            <li>
              <span aria-current="page">Miraee vs Navan</span>
            </li>
          </ol>
        </div>
      </nav>
      <div className="mr-container split">
        <div className="split__copy lf-hero__copy">
          <p className="mr-eyebrow">Comparison</p>
          <h1 className="mr-h1" id="hero-h">
            Navan alternatives: how Miraee compares, and where each fits
          </h1>
          <p className="mr-lead">
            Miraee is business travel and expense software. Here is how it compares with Navan on
            cost to start, travel policy, the finance view and changes, with every Navan fact dated
            and checked on Navan's own pages.
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
          className="lf-hero__visual lf-hero__visual--cut lf-cut--navan"
          style={{ margin: '0' }}
        >
          <picture>
            <source srcSet="/img/px3932459-traveler-phone.webp" type="image/webp" />
            <img
              className="lf-hero__person"
              src="/img/px3932459-traveler-phone.png"
              width="1100"
              height="964"
              alt="A business traveler in a trench coat takes a call on his phone."
              fetchpriority="high"
            />
          </picture>
        </figure>
      </div>
    </section>
  )
}
