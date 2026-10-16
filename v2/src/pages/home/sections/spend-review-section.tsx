import { DialogLink } from '@/components/forms/form-dialogs-context'
import { Reveal } from '@/components/scenes/reveal'
import { Button } from '@/components/ui/button'
import shared from './home-shared.module.css'
import styles from './spend-review-section.module.css'

const FINDINGS = [
  { label: 'Bookings outside your travel program', trips: '214', total: '$186,420.00' },
  { label: 'Spend outside policy', trips: '131', total: '$92,318.40', circled: true },
  { label: 'The cost of booking late', trips: '388', total: '$64,905.10' },
  { label: 'Unused or expired tickets', trips: '47', total: '$21,760.00' },
]

/** Proof first. The review's findings sit on a white ledger against plum and read in one by one as the section arrives. */
export function SpendReviewSection() {
  return (
    <section
      className={`mr-plum ${shared.dark} ${shared.section} ${styles.section}`}
      aria-labelledby="spend-h"
      data-stop="3"
    >
      <div className={`${shared.wrap} ${styles.grid}`}>
        <div className={`${shared.stack} ${styles.copy}`}>
          <h2 className={shared.h2} id="spend-h">
            Want proof first? Review last year's travel.
          </h2>
          <p className={shared.lead}>
            Send one booking report from your agency or expense system. We review every trip using
            your own data.
          </p>
          <p className={`${shared.small} ${styles.forecast}`}>
            Business travel spending is forecast to rise 7.2% in 2026, while the number of trips
            rises 1.3%.
          </p>
          <p className={styles.listTitle}>What the review shows</p>
          <ul className={styles.list}>
            <li>Bookings made outside your travel program</li>
            <li>Spend outside policy</li>
            <li>The cost of booking late, on your own routes</li>
            <li>Unused or expired tickets</li>
          </ul>
          <p className={shared.small}>
            Every finding comes from your file. Any savings figure is a dollar range, with the
            method and data period shown. The report is yours to keep.
          </p>
          <p className={shared.small}>Optional. You can sign up without one.</p>
          <div className={styles.cta}>
            <Button asChild>
              <DialogLink to="/spend-review" dialog="review">
                Get a spend review
              </DialogLink>
            </Button>
          </div>
        </div>

        <Reveal className={styles.ledgerWrap}>
          <div className={`mr-paper ${styles.ledger}`}>
            <div className={styles.ledgerHead}>
              <p className={styles.ledgerTitle}>Spend review findings</p>
              <span className={styles.ledgerSub}>Last year</span>
            </div>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">Finding</th>
                  <th scope="col" className={styles.num}>
                    Trips
                  </th>
                  <th scope="col" className={styles.num}>
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {FINDINGS.map((f, i) => (
                  <tr
                    key={f.label}
                    className={styles.row}
                    style={{ '--i': i } as React.CSSProperties}
                  >
                    <td className={styles.finding}>{f.label}</td>
                    <td className={`${styles.num} ${styles.trips}`}>{f.trips}</td>
                    <td className={`${styles.num} ${styles.total}`}>
                      {f.circled ? (
                        <span className={styles.circled}>
                          {f.total}
                          <svg
                            viewBox="0 0 260 130"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path d="M36 74 C 24 36 108 14 172 18 C 228 22 244 58 220 86 C 196 112 96 116 48 98 C 26 90 20 72 30 58" />
                          </svg>
                        </span>
                      ) : (
                        f.total
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
