import { VisualComposition } from '@/components/sections/product-preview'
import { Section, Container } from '@/components/layout/content-layout'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function ForFinanceSection() {
  return (
    <Section className="mr-paper mr-section section-bleed" aria-labelledby="fin-h">
      <Container className="mr-container split">
        <div className="split__copy">
          <h2 className="mr-h2" id="fin-h">
            Every trip, with its budget and GL code.
          </h2>
          <ul className="list">
            <li>Set your travel policy, GL codes and budgets once.</li>
            <li>A finance dashboard and a full audit log of who booked what, and when.</li>
            <li>Receipts matched to card charges and checked against policy.</li>
            <li>Keep the corporate cards you already use.</li>
          </ul>
          <p className="stat-line">
            Only 12% of travel programs have their data in one place.
            <sup>
              <a href="#src-3" aria-label="Source 3">
                3
              </a>
            </sup>
          </p>
          <p className="link-row">
            <Button asChild variant="tertiary">
              <Link to="/finance">See the finance view</Link>
            </Button>
          </p>
        </div>
        <VisualComposition
          className="split__visual compose compose--finance"
          style={{ margin: '0' }}
        >
          <picture>
            <source srcSet="/img/px5918389-controller.webp" type="image/webp" />{' '}
            <img
              className="compose__person"
              src="/img/px5918389-controller.png"
              width="831"
              height="1100"
              alt="A controller in a rust sweater holds a tablet in the office, beside a trip record showing its GL code, amount and policy status."
            />
          </picture>
          <div className="compose__card">
            <div className="mr-trip-tag card-shadow">
              <div className="mr-trip-tag__head">
                <div>
                  <p className="mr-trip-tag__title">Client visit, Chicago</p>
                  <p className="mr-trip-tag__sub">Oct 6 to Oct 8 · AUS to ORD</p>
                </div>
                <Badge variant="success">In policy</Badge>
              </div>
              <dl>
                <dt>Flight</dt>
                <dd>$512.40</dd>
                <dt>Hotel, 2 nights</dt>
                <dd>$482.20</dd>
                <dt>Ground and meals</dt>
                <dd>$290.00</dd>
                <dt>GL code</dt>
                <dd>
                  <span className="mr-circled">
                    GL 6200
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
                </dd>
                <dt className="mr-trip-tag__total">Total</dt>
                <dd className="mr-trip-tag__total">$1,284.60</dd>
              </dl>
              <p className="mr-caption" style={{ margin: '0' }}>
                Product view with illustrative data.
              </p>
            </div>
          </div>
        </VisualComposition>
      </Container>
    </Section>
  )
}
