import { VisualComposition } from '@/components/sections/product-preview'
import { Section, Container } from '@/components/layout/content-layout'
import { ProductCard, LedgerTable } from '@/components/sections/product-preview'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
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
        <VisualComposition className="split__visual compose compose--fin" style={{ margin: '0' }}>
          <picture>
            <source srcSet="/img/px5918389-controller.webp" type="image/webp" />
            <img
              className="compose__person"
              src="/img/px5918389-controller.png"
              width="831"
              height="1100"
              alt="A controller in a rust sweater holds a tablet in the office, beside a ledger of October trips with GL codes and budgets."
              fetchpriority="high"
            />
          </picture>
          <ProductCard className="compose__card mr-ledger-wrap card-shadow">
            <div className="mr-ledger-wrap__head">
              <p className="mr-ledger-wrap__title">October trips</p>
              <span className="mr-label">4 trips</span>
            </div>
            <LedgerTable className="mr-ledger">
              <thead>
                <tr>
                  <th scope="col">Trip</th>
                  <th scope="col" className="mr-num col-budget">
                    Budget
                  </th>
                  <th scope="col" className="mr-num">
                    Amount
                  </th>
                  <th scope="col">Policy</th>
                  <th scope="col" className="mr-num">
                    GL code
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Client visit, Chicago</td>
                  <td className="mr-num col-budget">$1,500.00</td>
                  <td className="mr-num">$1,284.60</td>
                  <td>
                    <Badge variant="success">In policy</Badge>
                  </td>
                  <td className="mr-num">
                    <span className="mr-circled">
                      6200
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
                  <td>Site audit, Dallas</td>
                  <td className="mr-num col-budget">$1,200.00</td>
                  <td className="mr-num">$946.20</td>
                  <td>
                    <Badge variant="success">In policy</Badge>
                  </td>
                  <td className="mr-num">6200</td>
                </tr>
                <tr>
                  <td>Sales kickoff, Denver</td>
                  <td className="mr-num col-budget">$2,000.00</td>
                  <td className="mr-num">$2,318.40</td>
                  <td>
                    <Badge variant="error">Out of policy</Badge>
                  </td>
                  <td className="mr-num">6200</td>
                </tr>
                <tr>
                  <td>Partner review, Atlanta</td>
                  <td className="mr-num col-budget">$1,400.00</td>
                  <td className="mr-num">$1,106.75</td>
                  <td>
                    <Badge variant="success">In policy</Badge>
                  </td>
                  <td className="mr-num">6210</td>
                </tr>
              </tbody>
            </LedgerTable>
            <p className="mr-caption" style={{ margin: '10px 0 0' }}>
              Product view with illustrative data.
            </p>
          </ProductCard>
        </VisualComposition>
      </Container>
    </Section>
  )
}
