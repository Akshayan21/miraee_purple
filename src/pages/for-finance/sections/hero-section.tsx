import styles from './hero-section.module.css'
import { VisualComposition } from '@/components/sections/product-preview'
import { Section, Container } from '@/components/layout/content-layout'
import { ProductCard } from '@/components/sections/product-preview'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function HeroSection() {
  return (
    <Section className="mr-paper core-hero section-bleed" aria-labelledby="hero-h">
      <Container className="mr-container split">
        <div className="split__copy">
          <h1 className="mr-h1" id="hero-h">
            Travel and expense management for finance teams
          </h1>
          <p className="mr-lead">
            Miraee is business travel and expense software. Every trip arrives with its GL code and
            budget, ready for month-end.
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
          <p className="mr-small hero__trust">Keep the corporate cards you already use.</p>
        </div>
        <VisualComposition
          className={`split__visual compose document-composition compose--fin ${styles.visual}`}
          style={{ margin: '0' }}
        >
          <picture>
            <source srcSet="/img/document/for-finance-hero-1.webp" type="image/webp" />
            <img
              className="compose__person"
              src="/img/document/for-finance-hero-1.jpg"
              width="1626"
              height="2046"
              alt="A smiling finance professional in a white blouse."
              fetchpriority="high"
            />
          </picture>
          <ProductCard className={`compose__card mr-ledger-wrap card-shadow ${styles.card}`}>
            <div className="mr-ledger-wrap__head">
              <p className="mr-ledger-wrap__title">October trips</p>
              <span className="mr-label">4 trips</span>
            </div>
            <ul className={styles.trips} aria-label="Illustrative October trips">
              {[
                {
                  city: 'Chicago',
                  amount: '$1,284.60',
                  budget: '$1,500',
                  gl: '6200',
                  inPolicy: true,
                },
                { city: 'Dallas', amount: '$946.20', budget: '$1,200', gl: '6200', inPolicy: true },
                {
                  city: 'Denver',
                  amount: '$2,318.40',
                  budget: '$2,000',
                  gl: '6200',
                  inPolicy: false,
                },
                {
                  city: 'Atlanta',
                  amount: '$1,106.75',
                  budget: '$1,400',
                  gl: '6210',
                  inPolicy: true,
                },
              ].map((trip) => (
                <li key={trip.city} className={styles.trip}>
                  <div className={styles.tripTop}>
                    <strong>{trip.city}</strong>
                    <span>{trip.amount}</span>
                  </div>
                  <div className={styles.tripMeta}>
                    <span className={trip.inPolicy ? styles.inPolicy : styles.outOfPolicy}>
                      {trip.inPolicy ? 'In policy' : 'Out of policy'}
                    </span>
                    <span>GL {trip.gl}</span>
                  </div>
                  <p className={styles.budget}>Budget {trip.budget}</p>
                </li>
              ))}
            </ul>
            <p className="mr-caption" style={{ margin: '10px 0 0' }}>
              Product view with illustrative data.
            </p>
          </ProductCard>
        </VisualComposition>
      </Container>
    </Section>
  )
}
