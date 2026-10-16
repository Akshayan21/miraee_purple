import { Section, Container } from '@/components/layout/content-layout'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function HeroSection() {
  return (
    <Section className="mr-plum lp-plum-hero" aria-labelledby="hero-h">
      <Container className="mr-container split">
        <div className="split__copy">
          <h1 className="mr-display" id="hero-h">
            A Navan alternative that's free to start at any size
          </h1>
          <p className="mr-lead">
            Miraee is business travel and expense software. Sign-up and onboarding are free at any
            company size, and you can review last year's travel first.
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
          <p className="mr-small hero__trust">
            Built by Tabhi, the company behind the Mondee travel marketplace.
          </p>
        </div>
        <figure className="split__visual" style={{ margin: '0' }}>
          <picture>
            <source srcSet="/img/document/landing-navan-hero.webp" type="image/webp" />
            <img
              src="/img/document/landing-navan-hero.jpg"
              width="1364"
              height="2046"
              alt="A smiling woman in a red top outdoors."
              fetchpriority="high"
            />
          </picture>
        </figure>
      </Container>
    </Section>
  )
}
