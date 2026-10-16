import { Scene } from '@/components/scenes/scene'
import { ProductCard } from '@/components/sections/product-preview'
import t from '../tm-shared.module.css'
import styles from './for-the-people-who-book-for-others-section.module.css'

/** Big type with the booking card rising into the corner as the section arrives. */
export function ForThePeopleWhoBookForOthersSection() {
  return (
    <Scene
      steps={1}
      run={70}
      className={`mr-paper ${t.paper} ${styles.scene}`}
      aria-labelledby="ea-h"
    >
      <div className={`${t.inner} ${styles.grid}`}>
        <h2 className={styles.title} id="ea-h">
          Book for anyone you support
        </h2>
        <p className={`${t.body} ${styles.body}`}>
          Assistants and office admins book for their team in a few steps. Options already fit
          company rules, so fewer trips need approval.
        </p>
        <figure className={styles.figure}>
          <div
            className={`view ${styles.rise}`}
            role="img"
            aria-label="Booking screen with a colleague's name selected."
          >
            <ProductCard className={`mock ${styles.card}`} aria-hidden="true">
              <div className="mock__head">
                <div>
                  <p className="mock__title">New trip</p>
                  <p className="mock__sub">Austin to Chicago · Oct 6 to Oct 8</p>
                </div>
              </div>
              <span className="field-label">Booking for</span>
              <div className="select-mock">Dana R., VP Sales</div>
              <ul className="people-list">
                <li aria-selected="true">
                  <span>Dana R.</span>
                  <span>VP Sales</span>
                </li>
                <li>
                  <span>Marcus T.</span>
                  <span>Account executive</span>
                </li>
                <li>
                  <span>Priya N.</span>
                  <span>Solutions consultant</span>
                </li>
              </ul>
            </ProductCard>
          </div>
          <figcaption className={t.cap}>Product view with illustrative data.</figcaption>
        </figure>
      </div>
    </Scene>
  )
}
