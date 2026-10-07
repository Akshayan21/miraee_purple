import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function HeroSection() {
  return (
    <section className="mr-plum page-hero page-hero--frame" aria-labelledby="hero-h">
      <nav className="crumbs" style={{ paddingTop: '0' }} aria-label="Breadcrumb">
        <div className="mr-container">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <span aria-current="page">Pricing</span>
            </li>
          </ol>
        </div>
      </nav>
      <div className="mr-container page-hero__grid">
        <div className="page-hero__copy">
          <h1 className="mr-display" id="hero-h">
            Free to sign up and onboard, at any company size
          </h1>
          <p className="mr-lead">
            Miraee is business travel and expense software. Signing up is free. Onboarding is free:
            we set up your company, your travel policy and your people with you.
          </p>
          <div className="mr-btn-row">
            <Button asChild>
              <DialogLink to="/sign-up" dialog="signup">
                Sign up free
              </DialogLink>
            </Button>{' '}
            <Button asChild variant="tertiary">
              <Link to="/how-it-works">See how it works</Link>
            </Button>
          </div>
          <p className="mr-small hero__trust">
            <Link to="/company">Built by Tabhi</Link>, the company behind the Mondee travel
            marketplace.
          </p>
        </div>
        <figure className="page-hero__visual mr-frame">
          <picture>
            <source srcSet="/img/px4623080-team-wide.webp" type="image/webp" />
            <img
              src="/img/px4623080-team-wide.jpg"
              width="917"
              height="688"
              alt="Colleagues smile as they review work together at a desk."
              fetchpriority="high"
            />
          </picture>
        </figure>
      </div>
    </section>
  )
}
