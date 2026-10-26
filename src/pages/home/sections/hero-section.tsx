import { Container } from '@/components/layout/content-layout'
import { DialogLink } from '@/components/forms/form-dialogs-context'
import { LedgerTable, ProductCard } from '@/components/sections/product-preview'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import styles from './hero-section.module.css'

/**
 * Faces first: the promise on the left, a real team planning a trip on the right with the two things finance sees (the trips ledger and
 * an approval) floating beside them. No video here, so the first screen loads fast and reads at a glance.
 */
export function HeroSection() {
  return (
    <section className={`mr-plum ${styles.hero} mo-skip`} aria-labelledby="home-hero-h">
      <div className={styles.mesh} aria-hidden="true" />
      <Container className={`mr-container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Business travel and expense software</p>
          <h1 id="home-hero-h" className={styles.heading}>
            Business travel.
            <br />
            <span>Every dollar in view.</span>
          </h1>
          <p className={styles.lead}>
            Miraee is business travel and expense software. Your people book inside company policy,
            and finance sees every trip with its budget and GL code.
          </p>
          <div className={styles.actions}>
            <Button asChild>
              <DialogLink to="/sign-up" dialog="signup">
                Sign up free
              </DialogLink>
            </Button>
            <Button asChild variant="secondary" className={styles.ghost}>
              <DialogLink to="/spend-review" dialog="review">
                Get a spend review
              </DialogLink>
            </Button>
          </div>
          <p className={styles.note}>
            Free to sign up and onboard, at any company size. Built by Tabhi, the company behind the
            Mondee travel marketplace. Keep the corporate cards you already use.
          </p>
        </div>

        <div className={styles.stage}>
          <picture>
            <source srcSet="/img/px4173205-colleagues.webp" type="image/webp" />
            <img
              className={styles.photo}
              src="/img/px4173205-colleagues.jpg"
              width={1400}
              height={933}
              alt="Two smiling colleagues in grey coats, one holding a passport, stand in an airport hall."
              fetchpriority="high"
            />
          </picture>

          <div className={styles.cards}>
            <ProductCard className={`mr-paper mr-ledger-wrap card-shadow ${styles.ledger}`}>
              <div className="mr-ledger-wrap__head">
                <p className="mr-ledger-wrap__title">October trips</p>
                <span className="mr-label">3 trips</span>
              </div>
              <LedgerTable className="mr-ledger">
                <caption>Product view with illustrative data.</caption>
                <thead>
                  <tr>
                    <th scope="col">Trip</th>
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
                    <td className="mr-num">$1,284.60</td>
                    <td>
                      <Badge variant="success">In policy</Badge>
                    </td>
                    <td className="mr-num">6200</td>
                  </tr>
                  <tr>
                    <td>Site audit, Dallas</td>
                    <td className="mr-num">$946.20</td>
                    <td>
                      <Badge variant="success">In policy</Badge>
                    </td>
                    <td className="mr-num">6200</td>
                  </tr>
                  <tr>
                    <td>Sales kickoff, Denver</td>
                    <td className="mr-num">
                      <span className="mr-circled">
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
                </tbody>
              </LedgerTable>
            </ProductCard>

            <div className={`mr-paper card-shadow ${styles.toast}`} aria-hidden="true">
              <span className={styles.toastMark} />
              <p className={styles.toastText}>
                Approved
                <span>Denver hotel, by Dana R. at 9:40 a.m.</span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
