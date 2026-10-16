import { Scene } from '@/components/scenes/scene'
import { ProductPhone, ProductRow } from '@/components/sections/product-preview'
import { Badge } from '@/components/ui/badge'
import t from '../tm-shared.module.css'
import styles from './policy-section.module.css'

const HOTELS = [
  { name: 'West Loop hotel', rate: '$219 a night', meta: '0.4 mi from the client office' },
  { name: 'Fulton Market hotel', rate: '$236 a night', meta: '0.9 mi from the client office' },
  { name: 'Union Station hotel', rate: '$204 a night', meta: '1.1 mi from the client office' },
]

/** Rules locking into place: each hotel row is checked and locked as you scroll the pinned phone. */
export function PolicySection() {
  return (
    <Scene
      steps={4}
      run={260}
      className={`mr-paper ${t.paper} ${styles.scene}`}
      aria-labelledby="pol-h"
    >
      <div className={`${t.inner} ${styles.grid}`}>
        <div className={styles.copy}>
          <h2 className={`${t.h2} ${styles.title}`} id="pol-h">
            Every option is checked against your policy
          </h2>
          <p className={t.body}>
            Upload your policy during onboarding. Every result is marked in or out of policy, so
            travelers book without checking a document.
          </p>
        </div>
        <figure className={styles.figure}>
          <div className={styles.phoneWrap}>
            <div className="view" role="img" aria-label="Hotel options marked in policy.">
              <ProductPhone className={`phone phone--lg ${styles.phone}`} aria-hidden="true">
                <div className="phone__screen mr-plum">
                  <div className="phone__bar">
                    <span className="mr-fig">9:41</span>
                    <span>Hotels</span>
                  </div>
                  <p className="phone__title">Chicago, 2 nights</p>
                  <p className="phone__meta">Oct 6 to Oct 8 · Policy up to $250 a night</p>
                  {HOTELS.map((h, i) => (
                    <ProductRow key={h.name} className={`ho ${styles.row}`} data-n={i + 1}>
                      <span className="ho__name">{h.name}</span>
                      <span className="ho__rate">{h.rate}</span>
                      <span className="ho__meta">{h.meta}</span>
                      <Badge variant="success">In policy</Badge>
                    </ProductRow>
                  ))}
                </div>
              </ProductPhone>
            </div>
          </div>
          <figcaption className={t.cap}>Product view with illustrative data.</figcaption>
        </figure>
      </div>
    </Scene>
  )
}
