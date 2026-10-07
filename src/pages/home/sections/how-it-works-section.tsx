import styles from './how-it-works-section.module.css'
import { Section, Container } from '@/components/layout/content-layout'
import {
  ProductRow,
  ProductPhone,
  ProductCard,
  LedgerTable,
} from '@/components/sections/product-preview'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function HowItWorksSection() {
  return (
    <Section className={`mr-section ${styles.section}`} aria-labelledby="how-h">
      <Container className="mr-container">
        <h2 className="mr-h2" id="how-h">
          How it works
        </h2>
        <ol className="steps">
          <li className="step">
            <figure
              className="step__view"
              role="img"
              aria-label="Travel policy setup screen"
              style={{ margin: '0 0 24px' }}
            >
              <div className="ui-card" aria-hidden="true">
                <p className="ui-card__title">Travel policy</p>
                <p className="ui-card__sub">Applies to every employee</p>
                <ProductRow className="ui-rule">
                  <span>
                    <span className="ui-rule__k">Hotels</span>
                    <span className="ui-rule__v">Up to $250 a night</span>
                  </span>
                  <Badge variant="success" tick>
                    Set
                  </Badge>
                </ProductRow>
                <ProductRow className="ui-rule">
                  <span>
                    <span className="ui-rule__k">Flights</span>
                    <span className="ui-rule__v">Economy for flights under 6 hours</span>
                  </span>
                  <Badge variant="success" tick>
                    Set
                  </Badge>
                </ProductRow>
                <ProductRow className="ui-rule">
                  <span>
                    <span className="ui-rule__k">Approvals</span>
                    <span className="ui-rule__v">Out of policy goes to an approver</span>
                  </span>
                  <Badge variant="success" tick>
                    Set
                  </Badge>
                </ProductRow>
              </div>
            </figure>
            <h3 className="mr-h3">
              <span className="step__n">1.</span> Set up your policy
            </h3>
            <p className="mr-body">
              We set up your company, your travel policy and your people with you. Onboarding is
              free.
            </p>
          </li>
          <li className="step">
            <figure
              className="step__view"
              role="img"
              aria-label="Flight options marked in policy or out of policy"
              style={{ margin: '0 0 24px' }}
            >
              <ProductPhone className="phone" aria-hidden="true">
                <div className="phone__screen mr-plum">
                  <div className="phone__bar">
                    <span className="mr-fig">9:41</span>
                    <span>Flights</span>
                  </div>
                  <p className="phone__title">Austin to Chicago</p>
                  <p className="phone__meta">Wed, Oct 14 · 1 traveler</p>
                  <ProductRow className="fl">
                    <span className="fl__time">7:05 a.m.</span>
                    <span className="fl__fare">$312.40</span>
                    <span className="fl__meta">Nonstop</span>
                    <Badge variant="success">In policy</Badge>
                  </ProductRow>
                  <ProductRow className="fl">
                    <span className="fl__time">9:30 a.m.</span>
                    <span className="fl__fare">$298.10</span>
                    <span className="fl__meta">Nonstop</span>
                    <Badge variant="success">In policy</Badge>
                  </ProductRow>
                  <ProductRow className="fl">
                    <span className="fl__time">12:15 p.m.</span>
                    <span className="fl__fare">$684.90</span>
                    <span className="fl__meta">Nonstop</span>
                    <Badge variant="error">Out of policy</Badge>
                  </ProductRow>
                </div>
              </ProductPhone>
            </figure>
            <h3 className="mr-h3">
              <span className="step__n">2.</span> Your people book
            </h3>
            <p className="mr-body">
              Employees ask the Miraee assistant for a trip and pick flights and hotels inside
              policy. The assistant suggests. Your approvers decide.
            </p>
          </li>
          <li className="step">
            <figure
              className="step__view"
              role="img"
              aria-label="Finance dashboard listing trips with budget and GL code"
              style={{ margin: '0 0 24px' }}
            >
              <ProductCard className="dash" aria-hidden="true">
                <div className="dash__head">
                  <p className="dash__title">Finance dashboard</p>
                  <span className="mr-label">October</span>
                </div>
                <LedgerTable className="mr-ledger mr-ledger--compact">
                  <thead>
                    <tr>
                      <th>Trip</th>
                      <th className="mr-num">Budget</th>
                      <th className="mr-num">GL code</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Client visit, Chicago</td>
                      <td className="mr-num">$1,500.00</td>
                      <td className="mr-num">6200</td>
                    </tr>
                    <tr>
                      <td>Site audit, Dallas</td>
                      <td className="mr-num">$1,200.00</td>
                      <td className="mr-num">6200</td>
                    </tr>
                    <tr>
                      <td>Sales kickoff, Denver</td>
                      <td className="mr-num">$2,000.00</td>
                      <td className="mr-num">6200</td>
                    </tr>
                  </tbody>
                </LedgerTable>
                <ul className="audit">
                  <li className="audit__h">Audit log</li>
                  <li>
                    <time className="mr-fig">9:12 a.m.</time>
                    <span>Booked by Priya N.</span>
                  </li>
                  <li>
                    <time className="mr-fig">9:40 a.m.</time>
                    <span>Approved by Dana R.</span>
                  </li>
                  <li>
                    <time className="mr-fig">2:05 p.m.</time>
                    <span>Receipt matched</span>
                  </li>
                </ul>
              </ProductCard>
            </figure>
            <h3 className="mr-h3">
              <span className="step__n">3.</span> Finance sees every trip
            </h3>
            <p className="mr-body">
              Every booking arrives with its budget and GL code, in one finance dashboard with a
              full audit log.
            </p>
          </li>
        </ol>
        <p className="mr-caption views-caption">Product views with illustrative data.</p>
        <p className="link-row">
          <Button asChild variant="tertiary">
            <Link to="/how-it-works">See how it works</Link>
          </Button>
        </p>
      </Container>
    </Section>
  )
}
