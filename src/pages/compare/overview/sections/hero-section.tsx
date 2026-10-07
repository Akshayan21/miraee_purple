import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

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
              <span aria-current="page">Compare</span>
            </li>
          </ol>
        </div>
      </nav>
      <div className="mr-container split">
        <div className="split__copy lf-hero__copy">
          <p className="mr-eyebrow">Buyer's guide</p>
          <h1 className="mr-h1" id="hero-h">
            Compare corporate travel management software
          </h1>
          <p className="mr-lead">
            Miraee is business travel and expense software. This guide is for finance and travel
            leads at companies of 300 to 1,500 people who are choosing a corporate travel management
            tool: what to compare, the questions to ask every vendor, including us, and dated facts
            on the tools buyers shortlist most.
          </p>
          <div className="mr-btn-row">
            <Button asChild>
              <DialogLink to="/sign-up" dialog="signup">
                Sign up free
              </DialogLink>
            </Button>{' '}
            <Button asChild variant="tertiary">
              <a href="#twelve-questions-to-ask-every-vendor-including-us">
                See the twelve questions
              </a>
            </Button>
          </div>
          <p className="lf-meta">
            Last updated <time dateTime="2026-09-30">September 30, 2026</time> · Vendor facts
            checked September 30, 2026
          </p>
        </div>
        <figure
          className="lf-hero__visual lf-hero__visual--cut lf-cut--hub"
          style={{ margin: '0' }}
        >
          <picture>
            <source srcSet="/img/px37409441-finance-leader.webp" type="image/webp" />
            <img
              className="lf-hero__person"
              src="/img/px37409441-finance-leader.png"
              width="977"
              height="1100"
              alt="A finance leader in a tweed blazer smiles in the office."
              fetchpriority="high"
            />
          </picture>
        </figure>
      </div>
    </section>
  )
}
