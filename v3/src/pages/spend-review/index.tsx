import type * as React from 'react'

import { Seo } from '@/components/common/seo'
import { DialogLink } from '@/components/forms/form-dialogs-context'
import { Reveal } from '@/components/scenes/reveal'
import { Band, BigStat, FaqBand, PageClosing, PageHero, Split } from '@/components/page/kit'
import { LedgerTable, ProductCard } from '@/components/sections/product-preview'
import { Button } from '@/components/ui/button'
import shared from '@/pages/home/home-shared.module.css'
import { faq } from './faq'
import { meta } from './meta'
import styles from './spend-review.module.css'

const FILES = ['Agency booking report', 'Expense extract', 'Card feed (optional)']

function Actions({ reviewFirst }: { reviewFirst?: boolean }) {
  const review = (
    <Button asChild variant={reviewFirst ? undefined : 'secondary'}>
      <DialogLink to="/spend-review" dialog="review">
        Get a spend review
      </DialogLink>
    </Button>
  )
  const signup = (
    <Button asChild variant={reviewFirst ? 'secondary' : undefined}>
      <DialogLink to="/sign-up" dialog="signup">
        Sign up free
      </DialogLink>
    </Button>
  )
  return reviewFirst ? (
    <>
      {review}
      {signup}
    </>
  ) : (
    <>
      {signup}
      {review}
    </>
  )
}

/** Route: /spend-review */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <PageHero
          id="hero-h"
          crumbs={[{ label: 'Home', to: import.meta.env.BASE_URL }, { label: 'Spend review' }]}
          title={["Find out where last year's", 'travel budget went.']}
          lead="Miraee is business travel and expense software. Send one booking report and we review last year's travel, trip by trip, from your own data."
          actions={<Actions reviewFirst />}
        />

        <Band tone="lilac" round aria-label="Why look back">
          <div className={styles.stats}>
            <BigStat value={7.2} decimals={1} suffix="%">
              Business travel spending is forecast to rise 7.2% in 2026, while the number of trips
              rises 1.3%.
            </BigStat>
            <BigStat value={72} suffix="%">
              72% of travel buyers say travelers book cheaper hotels outside the company program.
            </BigStat>
          </div>
        </Band>

        <Band tone="plum" glow aria-labelledby="send-h">
          <Split
            dark
            copy={
              <>
                <h2 className={`${shared.h2} ${styles.title}`} id="send-h">
                  Send one file you already have
                </h2>
                <p className={styles.body}>
                  A booking report from your travel agency, or an expense extract from your expense
                  system. Add a corporate card feed if you like. We sign an NDA before you send
                  anything.
                </p>
              </>
            }
            visual={
              <div className={styles.paper}>
                <ul className={styles.tiles}>
                  {FILES.map((label, i) => (
                    <li
                      key={label}
                      className={styles.tile}
                      style={{ '--i': i } as React.CSSProperties}
                    >
                      <img src="/img/icons/file-text.svg" alt="" width="24" height="24" />
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
            }
          />
        </Band>

        <Band tone="lilac" aria-labelledby="get-h">
          <Split
            reverse
            copy={
              <h2 className={`${shared.h2} ${styles.title}`} id="get-h">
                Four findings from your own data
              </h2>
            }
            visual={
              <ProductCard className={`mr-ledger-wrap card-shadow ${styles.findings}`}>
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
                    <tr>
                      <td>Bookings outside your travel program</td>
                      <td>Trips booked away from your agency or booking tool</td>
                      <td className="mr-num">$186,420.00</td>
                    </tr>
                    <tr>
                      <td>Spend outside policy</td>
                      <td>Bookings above your policy limits</td>
                      <td className="mr-num">$92,318.40</td>
                    </tr>
                    <tr>
                      <td>The cost of booking late</td>
                      <td>Your own fares on the same routes, booked early versus late</td>
                      <td className="mr-num">
                        <span className="mr-circled">
                          $64,905.10
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
                      <td>Unused or expired tickets</td>
                      <td>Tickets your company paid for and never used</td>
                      <td className="mr-num">$21,760.00</td>
                    </tr>
                  </tbody>
                </LedgerTable>
              </ProductCard>
            }
          />
        </Band>

        <Band tone="night" aria-labelledby="opt-h">
          <div className={styles.work}>
            <Reveal className={styles.workCopy}>
              <h2 className={`${shared.h2} ${styles.title}`} id="opt-h">
                We show our work.
              </h2>
              <p className={styles.body}>
                Every finding comes from the file you send, so your controller can check every line.
                Any savings figure is a dollar range, with the method and data period shown. The
                report is yours to keep.
              </p>
              <h2 className={`${shared.h2} ${styles.title}`}>Ready when you are</h2>
              <p className={styles.body}>
                We agree timing with you when your file arrives. The review is optional, and you can
                sign up without one.
              </p>
              <div className={shared.buttons}>
                <Actions reviewFirst />
              </div>
            </Reveal>
            <Reveal as="figure" className={styles.photo}>
              <picture>
                <source
                  srcSet="/img/document/spend-review-review-optional-1.webp"
                  type="image/webp"
                />
                <img
                  src="/img/document/spend-review-review-optional-1.jpg"
                  width="2046"
                  height="1364"
                  alt="A traveler relaxes in an airport lounge with his feet on his suitcase as a plane takes off."
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </Reveal>
          </div>
        </Band>

        <FaqBand heading="Questions" items={faq} />

        <PageClosing
          title={
            <>
              Check our work on <span className={shared.accent}>{"last year's travel."}</span>
            </>
          }
          lead="Send one booking report. The review is optional, and you can sign up without one."
          actions={<Actions />}
        />
      </main>
    </>
  )
}
Component.displayName = 'SpendReviewPage'
