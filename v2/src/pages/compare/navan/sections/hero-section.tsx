import { Section, Container } from '@/components/layout/content-layout'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function HeroSection() {
  return (
    <Section className="mr-plum lf-hero lf-hero--cutout" aria-labelledby="hero-h">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Container className="mr-container">
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
        </Container>
      </nav>
      <Container className="mr-container split">
        <div className="split__copy lf-hero__copy">
          <p className="mr-eyebrow">Comparison</p>
          <h1 className="mr-h1" id="hero-h">
            Navan alternatives: Miraee vs Navan
          </h1>
          <p className="mr-lead">
            Miraee is business travel and expense software. This page compares it with Navan on cost
            to start, policy, the finance view and changes. Every Navan fact is dated and sourced.
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
            Updated <time dateTime="2026-09-30">September 30, 2026</time> · Navan facts checked
            September 30, 2026
          </p>
        </div>
        <figure
          className="lf-hero__visual lf-hero__visual--cut lf-cut--navan"
          style={{ margin: '0' }}
        >
          <picture>
            <source srcSet="/img/document/compare-navan-hero-1.webp" type="image/webp" />
            <img
              className="lf-hero__person"
              src="/img/document/compare-navan-hero-1.jpg"
              width="1364"
              height="2046"
              alt="A man in glasses and a navy blazer."
              fetchpriority="high"
            />
          </picture>
        </figure>
      </Container>
    </Section>
  )
}
