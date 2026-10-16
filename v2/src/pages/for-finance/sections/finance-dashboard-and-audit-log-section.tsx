import { Container } from '@/components/layout/content-layout'
import { Scene } from '@/components/scenes/scene'
import { ProductCard, LedgerTable } from '@/components/sections/product-preview'
import styles from './finance-dashboard-and-audit-log-section.module.css'

/** The audit log: a large paper ledger, read one event at a time by a marker that walks down it. */
export function FinanceDashboardAndAuditLogSection() {
  return (
    <Scene steps={4} run={280} className={`mr-paper ${styles.scene}`} aria-labelledby="audit-h">
      <Container className={`mr-container ${styles.grid}`}>
        <div className={styles.copy}>
          <h2 className={`mr-h2 ${styles.title}`} id="audit-h">
            One dashboard. A full audit log.
          </h2>
          <p className={`mr-body ${styles.body}`}>
            Every booking and change is recorded: who, what and when.
          </p>
        </div>
        <figure className={styles.figure}>
          <ProductCard
            className={`mr-ledger-wrap card-shadow audit-card ${styles.card}`}
            role="img"
            aria-label="Audit log showing who booked, approved and changed a trip, and when."
          >
            <div aria-hidden="true">
              <div className="mr-ledger-wrap__head">
                <p className="mr-ledger-wrap__title">Audit log</p>
                <span className="mr-label">October</span>
              </div>
              <LedgerTable className={`mr-ledger ${styles.table}`}>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Event</th>
                    <th className="col-by">By</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="t">Oct 1</td>
                    <td className="t">9:12 a.m.</td>
                    <td>Booked · Client visit, Chicago</td>
                    <td className="col-by">Priya N.</td>
                  </tr>
                  <tr>
                    <td className="t">Oct 1</td>
                    <td className="t">9:40 a.m.</td>
                    <td>Approved · Denver hotel</td>
                    <td className="col-by">Dana R.</td>
                  </tr>
                  <tr>
                    <td className="t">Oct 6</td>
                    <td className="t">
                      <span className="mr-circled">
                        5:58 a.m.
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
                      Changed · Chicago flight to <span className="nw">8:15 a.m.</span>
                    </td>
                    <td className="col-by">Priya N.</td>
                  </tr>
                  <tr>
                    <td className="t">Oct 8</td>
                    <td className="t">2:05 p.m.</td>
                    <td>Receipt matched · Chicago hotel</td>
                    <td className="col-by">Miraee</td>
                  </tr>
                </tbody>
              </LedgerTable>
            </div>
          </ProductCard>
          <figcaption className={`mr-caption ${styles.cap}`}>
            Product view with illustrative data.
          </figcaption>
        </figure>
      </Container>
    </Scene>
  )
}
