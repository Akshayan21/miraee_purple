import { VisualComposition } from '@/components/sections/product-preview'
import { Section, Container } from '@/components/layout/content-layout'
import { ProductPhone } from '@/components/sections/product-preview'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function WhenPlansChangeSection() {
  return (
    <Section className="mr-plum mr-section section-bleed" aria-labelledby="plans-h">
      <Container className="mr-container split split--rev">
        <div className="split__copy">
          <p className="mr-eyebrow">When plans change</p>
          <h2 className="mr-h2" id="plans-h">
            Your traveler gets an alert and new options to confirm.
          </h2>
          <p className="mr-body">
            A flight is delayed or canceled. Your traveler sees what happened and two new options.
            They tap one to confirm. The change is recorded for the travel lead and finance.
          </p>
          <p className="stat-line">
            89% of travel buyers want help rebooking when plans change.
            <sup>
              <a href="#src-2" aria-label="Source 2">
                2
              </a>
            </sup>
          </p>
          <p className="link-row">
            <Button asChild variant="tertiary">
              <Link to="/when-plans-change">See what happens</Link>
            </Button>
          </p>
        </div>
        <VisualComposition className="split__visual compose compose--plans" style={{ margin: '0' }}>
          <picture>
            <source srcSet="/img/px4173228-traveler-suitcase.webp" type="image/webp" />{' '}
            <img
              className="compose__person"
              src="/img/px4173228-traveler-suitcase.png"
              width="1100"
              height="957"
              alt="A traveler in a camel coat takes a call beside her suitcase, beside a phone alert offering two new flight options."
            />
          </picture>
          <ProductPhone className="compose__card phone phone--alert" aria-hidden="true">
            <div className="phone__screen mr-plum">
              <div className="phone__bar">
                <span className="mr-fig">5:53</span>
                <span>Trips</span>
              </div>
              <div className="mr-alert">
                <span className="mr-alert__status">Flight delayed</span>
                <p className="mr-alert__msg">
                  Your 6:40 a.m. flight to Chicago is delayed.{' '}
                  <span>Here are two new options. Tap one to confirm.</span>
                </p>
              </div>
              <div className="mr-options" role="radiogroup" aria-label="New flight options">
                <button
                  className="mr-option"
                  type="button"
                  role="radio"
                  aria-checked="true"
                  tabIndex={-1}
                >
                  <span className="mr-option__time">8:15 a.m.</span>
                  <span className="mr-option__fare">Same fare</span>{' '}
                  <span className="mr-option__meta">AUS to ORD · Nonstop</span>
                  <Badge variant="success">In policy</Badge>{' '}
                  <svg
                    className="mr-line mr-option__tick"
                    viewBox="0 0 80 64"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M6 34 C 14 42 22 50 28 57 C 42 38 58 20 76 5"></path>
                  </svg>
                </button>{' '}
                <button
                  className="mr-option"
                  type="button"
                  role="radio"
                  aria-checked="false"
                  tabIndex={-1}
                >
                  <span className="mr-option__time">9:50 a.m.</span>
                  <span className="mr-option__fare">Same fare</span>{' '}
                  <span className="mr-option__meta">AUS to ORD · Nonstop</span>
                  <Badge variant="success">In policy</Badge>
                </button>
              </div>
              <Button asChild>
                <span role="presentation">Confirm 8:15 a.m.</span>
              </Button>
              <p className="phone__cap">Your travel lead sees the change in the audit log.</p>
            </div>
          </ProductPhone>
          <p
            className="mr-caption"
            style={{
              position: 'absolute',
              right: '0',
              bottom: '4px',
              margin: '0',
              color: 'var(--mr-mist)',
            }}
          >
            Product view with illustrative data.
          </p>
        </VisualComposition>
      </Container>
    </Section>
  )
}
