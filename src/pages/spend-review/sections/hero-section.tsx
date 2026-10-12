import styles from './hero-section.module.css'
import { VisualComposition } from '@/components/sections/product-preview'
import { Section, Container } from '@/components/layout/content-layout'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function HeroSection() {
  return (
    <Section className="mr-paper core-hero section-bleed" aria-labelledby="hero-h">
      <Container className="mr-container split">
        <div className="split__copy">
          <h1 className="mr-h1" id="hero-h">
            Find out where last year's travel budget went.
          </h1>
          <p className="mr-lead">
            Miraee is business travel and expense software. Send one booking report and we review
            last year's travel, trip by trip, from your own data.
          </p>
          <div className="mr-btn-row">
            <Button asChild>
              <DialogLink to="/spend-review" dialog="review">
                <span className="mr-btn__u">Get a spend review</span>
              </DialogLink>
            </Button>{' '}
            <Button asChild variant="secondary">
              <DialogLink to="/sign-up" dialog="signup">
                Sign up free
              </DialogLink>
            </Button>
          </div>
        </div>
        <VisualComposition
          className={`split__visual compose document-composition compose--review ${styles.visual}`}
          style={{ margin: '0' }}
        >
          <picture>
            <source srcSet="/img/document/spend-review-hero-1.webp" type="image/webp" />
            <img
              className="compose__person"
              src="/img/document/spend-review-hero-1.jpg"
              width="2046"
              height="1151"
              alt="A finance analyst reviews a report beside her laptop in a bright office."
              fetchpriority="high"
            />
          </picture>
        </VisualComposition>
      </Container>
    </Section>
  )
}
