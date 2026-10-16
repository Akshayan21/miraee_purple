import { Container } from '@/components/layout/content-layout'
import { Scene } from '@/components/scenes/scene'
import { ProductCard, LedgerTable } from '@/components/sections/product-preview'
import styles from './what-you-get-section.module.css'

const FINDINGS = [
  {
    finding: 'Bookings outside your travel program',
    shows: 'Trips booked away from your agency or booking tool',
    sample: '$186,420.00',
  },
  {
    finding: 'Spend outside policy',
    shows: 'Bookings above your policy limits',
    sample: '$92,318.40',
  },
  {
    finding: 'The cost of booking late',
    shows: 'Your own fares on the same routes, booked early versus late',
    sample: '$64,905.10',
    circled: true,
  },
  {
    finding: 'Unused or expired tickets',
    shows: 'Tickets your company paid for and never used',
    sample: '$21,760.00',
  },
]

/** The scan: a light sweeps down the booking report, and each line it passes becomes a finding in the ledger. */
export function WhatYouGetSection() {
  return (
    <Scene steps={5} run={300} className={`mr-paper ${styles.scene}`} aria-labelledby="get-h">
      <Container className={`mr-container ${styles.grid}`}>
        <h2 className={`mr-h2 ${styles.title}`} id="get-h">
          Four findings from your own data
        </h2>

        <div className={styles.sheet} aria-hidden="true">
          <div className={styles.sheetHead}>
            <i />
            <i />
          </div>
          <div className={styles.lines} />
          {FINDINGS.map((f, i) => (
            <span key={f.finding} className={`${styles.mark} ${styles['m' + i]}`} />
          ))}
          <div className={styles.scan} />
        </div>

        <ProductCard className={`mr-ledger-wrap card-shadow findings ${styles.ledger}`}>
          <div className="mr-ledger-wrap__head">
            <p className="mr-ledger-wrap__title">Spend review findings</p>
            <span className="mr-label">Last year</span>
          </div>
          <LedgerTable className="mr-ledger">
            <caption>Product view with illustrative data.</caption>
            <thead>
              <tr>
                <th scope="col">Finding</th>
                <th scope="col">What it shows</th>
                <th scope="col" className="mr-num">
                  Sample
                </th>
              </tr>
            </thead>
            <tbody>
              {FINDINGS.map((f, i) => (
                <tr key={f.finding} className={`${styles.row} ${styles['r' + i]}`}>
                  <td>{f.finding}</td>
                  <td>{f.shows}</td>
                  <td className="mr-num">
                    {f.circled ? (
                      <span className="mr-circled">
                        {f.sample}
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
                    ) : (
                      f.sample
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </LedgerTable>
        </ProductCard>
      </Container>
    </Scene>
  )
}
