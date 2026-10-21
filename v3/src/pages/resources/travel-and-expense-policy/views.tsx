import styles from './page.module.css'

/** The trip record for a client visit, as on V1 (illustrative data). */
export function TripTagView() {
  return (
    <figure
      className={styles.view}
      role="img"
      aria-label="A trip record for a client visit to Chicago, with each cost, the GL code and the total"
    >
      <div className={`mr-trip-tag card-shadow ${styles.viewTag}`} aria-hidden="true">
        <div className="mr-trip-tag__head">
          <div>
            <p className="mr-trip-tag__title">Client visit, Chicago</p>
            <p className="mr-trip-tag__sub">Oct 6 to Oct 8 · AUS to ORD</p>
          </div>
          <span className="mr-badge mr-badge--success">In policy</span>
        </div>
        <dl>
          <dt>Flight</dt>
          <dd>$512.40</dd>
          <dt>Hotel, 2 nights</dt>
          <dd>$482.20</dd>
          <dt>Ground and meals</dt>
          <dd>$290.00</dd>
          <dt>GL code</dt>
          <dd>
            <span className="mr-circled">
              GL 6200
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
          </dd>
          <dt className="mr-trip-tag__total">Total</dt>
          <dd className="mr-trip-tag__total">$1,284.60</dd>
        </dl>
      </div>
      <figcaption className="mr-caption">Product view with illustrative data.</figcaption>
    </figure>
  )
}
