import type { CSSProperties } from 'react'

import { ProductCard, LedgerTable } from '@/components/sections/product-preview'

export function ControlLayer({ styles }: { styles: Record<string, string> }) {
  return (
    <article
      className={`mr-paper ${styles.layer} ${styles.l0}`}
      style={{ '--i': 0 } as CSSProperties}
      aria-labelledby="control-h"
    >
      <div className={`${styles.split} ${styles.content}`}>
        <div className={styles.copy}>
          <h2 className={`mr-h2 ${styles.title}`} id="control-h">
            The assistant suggests. Your approvers decide.
          </h2>
          <p className={`mr-body ${styles.body}`}>
            Anything out of policy goes to an approver. Every booking and change is in the audit
            log.
          </p>
        </div>
        <figure className={styles.figure}>
          <ProductCard
            className="log-card"
            role="img"
            aria-label="Audit log of bookings and changes."
          >
            <div aria-hidden="true">
              <div className="log-card__head">
                <p className="log-card__title">Audit log</p>
                <span className="mr-label">October</span>
              </div>
              <LedgerTable className="mr-ledger">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Event</th>
                    <th>By</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="mr-fig">Oct 1, 9:12 a.m.</td>
                    <td>Booked · Client visit, Chicago</td>
                    <td>Priya N.</td>
                  </tr>
                  <tr>
                    <td className="mr-fig">Oct 1, 9:40 a.m.</td>
                    <td>Approved · Denver hotel, out of policy</td>
                    <td>Dana R.</td>
                  </tr>
                  <tr>
                    <td className="mr-fig">Oct 6, 5:58 a.m.</td>
                    <td>Flight changed · 8:15 a.m. to Chicago</td>
                    <td>Priya N.</td>
                  </tr>
                  <tr>
                    <td className="mr-fig">Oct 8, 2:05 p.m.</td>
                    <td>Receipt matched · Dallas</td>
                    <td>Miraee</td>
                  </tr>
                </tbody>
              </LedgerTable>
            </div>
          </ProductCard>
          <figcaption className={`mr-caption ${styles.caption}`}>
            Product view with illustrative data.
          </figcaption>
        </figure>
      </div>
    </article>
  )
}
