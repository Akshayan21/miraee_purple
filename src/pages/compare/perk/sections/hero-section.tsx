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
              <span aria-current="page">Miraee vs Perk</span>
            </li>
          </ol>
        </div>
      </nav>
      <div className="mr-container split">
        <div className="split__copy lf-hero__copy">
          <p className="mr-eyebrow">Comparison</p>
          <h1 className="mr-h1" id="hero-h">
            TravelPerk alternatives: how Miraee and Perk compare
          </h1>
          <p className="mr-lead">
            Miraee is business travel and expense software. Perk, formerly TravelPerk, is one of the
            tools buyers compare it with. Here is how the two compare on cost to start, the finance
            view of each trip and what happens when plans change, with every Perk fact dated.
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
          className="lf-hero__visual lf-hero__visual--cut lf-cut--perk"
          style={{ margin: '0' }}
        >
          <picture>
            <source srcSet="/img/px4173228-traveler-suitcase.webp" type="image/webp" />
            <img
              className="lf-hero__person"
              src="/img/px4173228-traveler-suitcase.png"
              width="1100"
              height="957"
              alt="A traveler in a camel coat takes a call beside her suitcase."
              fetchpriority="high"
            />
          </picture>
        </figure>
      </div>
    </section>
  )
}
