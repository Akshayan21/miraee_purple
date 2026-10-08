import styles from './hero-section.module.css'
import { VisualComposition } from '@/components/sections/product-preview'
import { Section, Container } from '@/components/layout/content-layout'
import { ProductCard, LedgerTable } from '@/components/sections/product-preview'
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
            Miraee is business travel and expense software. Send one booking report and get a
            trip-by-trip review of last year's travel, built only from your own data. The review is
            optional.
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
              width="626"
              height="417"
              alt="A finance professional reviews documents at a desk."
              fetchpriority="high"
            />
          </picture>
          <ProductCard className={`compose__card mr-ledger-wrap card-shadow ${styles.card}`}>
            <div className="mr-ledger-wrap__head">
              <p className="mr-ledger-wrap__title">Spend review findings</p>
              <span className="mr-label">Last year</span>
            </div>
            <LedgerTable className="mr-ledger">
              <caption>Product view with illustrative data.</caption>
              <thead>
                <tr>
                  <th scope="col">Finding</th>
                  <th scope="col" className="mr-num">
                    Trips
                  </th>
                  <th scope="col" className="mr-num">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bookings outside your travel program</td>
                  <td className="mr-num">214</td>
                  <td className="mr-num">$186,420.00</td>
                </tr>
                <tr>
                  <td>Spend outside policy</td>
                  <td className="mr-num">131</td>
                  <td className="mr-num">
                    <span className="mr-circled">
                      $92,318.40
                      <svg
                        className="mr-line"
                        viewBox="0 0 260 130"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M36 74 C 24 36 108 14 172 18 C 228 22 244 58 220 86 C 196 112 96 116 48 98 C 26 90 20 72 30 58"></path>
                      </svg>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>The cost of booking late</td>
                  <td className="mr-num">388</td>
                  <td className="mr-num">$64,905.10</td>
                </tr>
                <tr>
                  <td>Unused or expired tickets</td>
                  <td className="mr-num">47</td>
                  <td className="mr-num">$21,760.00</td>
                </tr>
              </tbody>
            </LedgerTable>
          </ProductCard>
        </VisualComposition>
      </Container>
    </Section>
  )
}
