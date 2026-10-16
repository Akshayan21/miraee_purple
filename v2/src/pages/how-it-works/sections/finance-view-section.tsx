import { Link } from 'react-router-dom'

import { Container } from '@/components/layout/content-layout'
import { Scene } from '@/components/scenes/scene'
import { LedgerTable, ProductCard } from '@/components/sections/product-preview'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import styles from './finance-view-section.module.css'

/** Step 6: the ledger lies back like a desk, lifts upright as you arrive, then the over-budget trip is circled. */
export function FinanceViewSection() {
  return (
    <Scene
      steps={2}
      run={170}
      className={`hiw-flat mr-plum ${styles.scene}`}
      aria-labelledby="s6-h"
      data-stop="5"
      data-stop-y="150"
    >
      <Container className={styles.grid}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Step 6</p>
          <h2 className={styles.h2} id="s6-h">
            Finance sees every trip, coded and budgeted
          </h2>
          <p className={styles.body}>
            One dashboard with finance analytics and a full audit log of who booked what, and when.
          </p>
          <p className={styles.link}>
            <Button asChild variant="tertiary">
              <Link to="/finance">See the finance view</Link>
            </Button>
          </p>
        </div>
        <figure className={styles.figure}>
          <div className={styles.desk}>
            <ProductCard
              className={`mr-ledger-wrap card-shadow ledger-panel ${styles.ledger}`}
              role="img"
              aria-label="A finance ledger of October trips with amounts, budgets, policy status and GL codes."
            >
              <div aria-hidden="true">
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
                    <tr className={styles.r0}>
                      <td>Client visit, Chicago</td>
                      <td className="mr-num col-budget">$1,500.00</td>
                      <td className="mr-num">$1,284.60</td>
                      <td>
                        <Badge variant="success">In policy</Badge>
                      </td>
                      <td className="mr-num">6200</td>
                    </tr>
                    <tr className={styles.r1}>
                      <td>Site audit, Dallas</td>
                      <td className="mr-num col-budget">$1,200.00</td>
                      <td className="mr-num">$946.20</td>
                      <td>
                        <Badge variant="success">In policy</Badge>
                      </td>
                      <td className="mr-num">6200</td>
                    </tr>
                    <tr className={styles.r2}>
                      <td>Sales kickoff, Denver</td>
                      <td className="mr-num col-budget">$2,000.00</td>
                      <td className="mr-num">
                        <span className={`mr-circled ${styles.circled}`}>
                          $2,318.40
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
                      <td>
                        <Badge variant="error">Out of policy</Badge>
                      </td>
                      <td className="mr-num">6200</td>
                    </tr>
                    <tr className={styles.r3}>
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
              </div>
            </ProductCard>
          </div>
          <figcaption className="mr-caption fig-cap">
            Product view with illustrative data.
          </figcaption>
        </figure>
      </Container>
    </Scene>
  )
}
