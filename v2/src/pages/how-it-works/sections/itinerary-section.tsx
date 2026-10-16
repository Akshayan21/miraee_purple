import { Container } from '@/components/layout/content-layout'
import { Scene } from '@/components/scenes/scene'
import { ProductCard, ProductPhone, ProductRow } from '@/components/sections/product-preview'
import { Badge } from '@/components/ui/badge'
import styles from './itinerary-section.module.css'

/**
 * Steps 1 to 3 as one pinned horizontal itinerary: scrolling slides the rail sideways, and each stage's
 * product view rises into place in 3D as it arrives.
 */
export function ItinerarySection() {
  return (
    <Scene
      steps={3}
      run={260}
      className={`hiw-flat ${styles.scene}`}
      data-stop="2"
      data-stop-y="150"
    >
      <div className={styles.viewport}>
        <div className={styles.track}>
          {/* Step 1 */}
          <article className={`mr-paper ${styles.panel} ${styles.p0}`} aria-labelledby="s1-h">
            <span className={styles.num} aria-hidden="true">
              1
            </span>
            <Container className={styles.inner}>
              <div className={styles.copy}>
                <p className={styles.eyebrow}>Step 1</p>
                <h2 className={styles.h2} id="s1-h">
                  We set up your company with you
                </h2>
                <p className={styles.body}>
                  Onboarding is free. We set up your company, policy and people, train your admins
                  and finance team, and add the corporate cards you already use.
                </p>
              </div>
              <figure className={styles.figure}>
                <div className={styles.rise}>
                  <div
                    className="view"
                    role="img"
                    aria-label="Company setup screen with travel policy, employees and payment settings."
                  >
                    <ProductCard className={`mock ${styles.card}`} aria-hidden="true">
                      <div className="mock__head">
                        <div>
                          <p className="mock__title">Company setup</p>
                          <p className="mock__sub">Your company account</p>
                        </div>
                      </div>
                      <ProductRow className="ui-rule">
                        <span>
                          <span className="ui-rule__k">Travel policy</span>
                          <span className="ui-rule__v">Uploaded, applies to every employee</span>
                        </span>
                        <Badge variant="success" tick>
                          Done
                        </Badge>
                      </ProductRow>
                      <ProductRow className="ui-rule">
                        <span>
                          <span className="ui-rule__k">Employees</span>
                          <span className="ui-rule__v">
                            <span className="mr-fig">412</span> invited
                          </span>
                        </span>
                        <Badge variant="success" tick>
                          Done
                        </Badge>
                      </ProductRow>
                      <ProductRow className="ui-rule">
                        <span>
                          <span className="ui-rule__k">Payment settings</span>
                          <span className="ui-rule__v">
                            Corporate card ending <span className="mr-fig">4417</span>
                          </span>
                        </span>
                        <Badge variant="success" tick>
                          Done
                        </Badge>
                      </ProductRow>
                    </ProductCard>
                  </div>
                </div>
                <figcaption className="mr-caption fig-cap">
                  Product view with illustrative data.
                </figcaption>
              </figure>
            </Container>
          </article>

          {/* Step 2 */}
          <article className={`mr-plum ${styles.panel} ${styles.p1}`} aria-labelledby="s2-h">
            <span className={styles.num} aria-hidden="true">
              2
            </span>
            <Container className={`${styles.inner} ${styles.rev}`}>
              <div className={styles.copy}>
                <p className={styles.eyebrow}>Step 2</p>
                <h2 className={styles.h2} id="s2-h">
                  Employees ask for a trip and pick an option in policy
                </h2>
                <p className={styles.body}>
                  Every flight and hotel comes back marked in or out of policy. The assistant
                  suggests. Your approvers decide.
                </p>
                <p className={styles.body}>
                  Booking for someone else? Pick their name and book in a few steps.
                </p>
                <p className={styles.body}>
                  Global flight and hotel coverage from the Mondee travel marketplace.
                </p>
              </div>
              <figure className={styles.figure}>
                <div className={styles.rise}>
                  <div
                    className="view"
                    role="img"
                    aria-label="Flight results from Austin to Chicago, each marked in policy or out of policy."
                  >
                    <ProductPhone className="phone phone--lg" aria-hidden="true">
                      <div className="phone__screen mr-plum">
                        <div className="phone__bar">
                          <span className="mr-fig">9:41</span>
                          <span>Flights</span>
                        </div>
                        <p className="phone__title">Austin to Chicago, round trip</p>
                        <p className="phone__meta">Tue, Oct 6 to Thu, Oct 8 · 1 traveler</p>
                        <ProductRow className="fl">
                          <span className="fl__time">7:05 a.m.</span>
                          <span className="fl__fare">$312.40</span>
                          <span className="fl__meta">Nonstop · Economy</span>
                          <Badge variant="success">In policy</Badge>
                        </ProductRow>
                        <ProductRow className="fl">
                          <span className="fl__time">9:30 a.m.</span>
                          <span className="fl__fare">$298.10</span>
                          <span className="fl__meta">Nonstop · Economy</span>
                          <Badge variant="success">In policy</Badge>
                        </ProductRow>
                        <ProductRow className="fl">
                          <span className="fl__time">11:45 a.m.</span>
                          <span className="fl__fare">$341.80</span>
                          <span className="fl__meta">Nonstop · Economy</span>
                          <Badge variant="success">In policy</Badge>
                        </ProductRow>
                        <ProductRow className="fl">
                          <span className="fl__time">12:15 p.m.</span>
                          <span className="fl__fare">$684.90</span>
                          <span className="fl__meta">Nonstop · Business</span>
                          <Badge variant="error">Out of policy</Badge>
                        </ProductRow>
                      </div>
                    </ProductPhone>
                  </div>
                </div>
                <figcaption className="mr-caption fig-cap">
                  Product view with illustrative data.
                </figcaption>
              </figure>
            </Container>
          </article>

          {/* Step 3 */}
          <article className={`mr-paper ${styles.panel} ${styles.p2}`} aria-labelledby="s3-h">
            <span className={styles.num} aria-hidden="true">
              3
            </span>
            <Container className={styles.inner}>
              <div className={styles.copy}>
                <p className={styles.eyebrow}>Step 3</p>
                <h2 className={styles.h2} id="s3-h">
                  Approvers see only the exceptions
                </h2>
                <p className={styles.body}>
                  Trips inside policy go ahead. Anything out of policy goes to an approver.
                </p>
              </div>
              <div className={styles.figure}>
                <div className={styles.rise}>
                  <ProductCard className={`mock approval ${styles.card}`} aria-hidden="true">
                    <div className="mock__head">
                      <div>
                        <p className="mock__title">Sales kickoff, Denver</p>
                        <p className="mock__sub">Hotel, 3 nights · Oct 20 to Oct 23</p>
                      </div>
                      <Badge variant="warning">Needs approval</Badge>
                    </div>
                    <dl>
                      <dt>Hotel</dt>
                      <dd>$289 a night</dd>
                      <dt>Policy limit</dt>
                      <dd>$250 a night</dd>
                      <dt>Traveler</dt>
                      <dd style={{ fontFamily: 'var(--mr-font-text)' }}>Marcus T.</dd>
                    </dl>
                    <div className="mock__actions">
                      <span className="mock__btn mock__btn--ink">Approve</span>
                      <span className="mock__btn mock__btn--line">Decline</span>
                    </div>
                  </ProductCard>
                </div>
              </div>
            </Container>
          </article>
        </div>

        <ol className={styles.rail} aria-hidden="true">
          <li className={styles.r0}>Step 1</li>
          <li className={styles.r1}>Step 2</li>
          <li className={styles.r2}>Step 3</li>
        </ol>
      </div>
    </Scene>
  )
}
