import { Section, Container } from '@/components/layout/content-layout'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function HeroSection() {
  return (
    <Section className="page-hero page-hero--bleed" aria-labelledby="hero-h">
      <Container className="mr-container page-hero__grid">
        <div className="page-hero__copy">
          <h1 className="mr-display" id="hero-h">
            Security at Miraee
          </h1>
          <p className="mr-lead">
            Miraee is business travel and expense software. One approved travel tool for the whole
            company, with a security pack ready when your review starts.
          </p>
          <div className="mr-btn-row">
            <Button asChild>
              <DialogLink to="#pack" dialog="pack">
                <span className="mr-btn__u">Request the security pack</span>
              </DialogLink>
            </Button>{' '}
            <Button asChild variant="tertiary">
              <Link to="/talk-to-sales">Talk to sales</Link>
            </Button>
          </div>
        </div>
        <figure className="page-hero__visual">
          <picture>
            <source srcSet="/img/px36845948-traveler-suit.webp" type="image/webp" />
            <img
              className="hero-cutout"
              src="/img/px36845948-traveler-suit.png"
              width="856"
              height="1100"
              alt="A business traveler in a dark suit looks toward the camera."
              fetchpriority="high"
            />
          </picture>
        </figure>
      </Container>
    </Section>
  )
}
