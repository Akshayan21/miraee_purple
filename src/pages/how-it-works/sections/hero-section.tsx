import { VisualComposition } from '@/components/sections/product-preview'
import { Section, Container } from '@/components/layout/content-layout'
import { ProductPhone, ProductRow } from '@/components/sections/product-preview'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function HeroSection() {
  return (
    <Section className="core-hero section-bleed" aria-labelledby="hero-h">
      <Container className="mr-container split">
        <div className="split__copy">
          <h1 className="mr-h1" id="hero-h">
            How Miraee works, from booking to month-end
          </h1>
          <p className="mr-lead">
            Miraee is business travel and expense software. A travel assistant for every employee,
            with the controls finance needs.
          </p>
          <div className="mr-btn-row">
            <Button asChild>
              <DialogLink to="/sign-up" dialog="signup">
                <span className="mr-btn__u">Sign up free</span>
              </DialogLink>
            </Button>{' '}
            <Button asChild variant="secondary">
              <DialogLink to="/spend-review" dialog="review">
                Get a spend review
              </DialogLink>
            </Button>
          </div>
        </div>
        <VisualComposition className="split__visual compose document-composition compose--how" style={{ margin: '0' }}>
          <picture>
            <source srcSet="/img/document/how-it-works-hero-1.webp" type="image/webp" />
            <img
              className="compose__person"
              src="/img/document/how-it-works-hero-1.jpg"
              width="626"
              height="417"
              alt="A business traveler uses her phone at the airport."
              fetchpriority="high"
            />
          </picture>
          <ProductPhone className="compose__card phone phone--lg" aria-hidden="true">
            <div className="phone__screen mr-plum">
              <div className="phone__bar">
                <span className="mr-fig">9:41</span>
                <span>Hotels</span>
              </div>
              <p className="phone__title">Chicago, 2 nights</p>
              <p className="phone__meta">Oct 6 to Oct 8 · Policy up to $250 a night</p>
              <ProductRow className="ho">
                <span className="ho__name">West Loop hotel</span>
                <span className="ho__rate">$219 a night</span>
                <span className="ho__meta">0.4 mi from the client office</span>
                <Badge variant="success">In policy</Badge>
                <svg
                  className="mr-line"
                  viewBox="0 0 200 10"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M3 7 C 50 3 120 6 197 3"></path>
                </svg>
              </ProductRow>
              <ProductRow className="ho">
                <span className="ho__name">Riverfront hotel</span>
                <span className="ho__rate">$314 a night</span>
                <span className="ho__meta">1.2 mi from the client office</span>
                <Badge variant="error">Out of policy</Badge>
              </ProductRow>
            </div>
          </ProductPhone>
          <figcaption className="mr-caption hero-cap">
            Product view with illustrative data.
          </figcaption>
        </VisualComposition>
      </Container>
    </Section>
  )
}
