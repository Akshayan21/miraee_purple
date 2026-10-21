import styles from './page.module.css'

/** A hotel receipt matched to its corporate card charge, as on V1 (illustrative data). */
export function MatchView() {
  return (
    <figure
      className={styles.view}
      role="img"
      aria-label="A hotel receipt matched to its corporate card charge, in policy"
    >
      <div className="match" aria-hidden="true">
        <div className="match__card">
          <p className="match__label">
            <img src="/img/icons/receipt.svg" alt="" width="18" height="18" />
            Receipt
          </p>
          <p className="match__name">Hotel, 2 nights, Chicago</p>
          <p className="match__meta">Oct 6 to Oct 8 · Priya N.</p>
          <p className="match__amt">$482.20</p>
        </div>
        <span className="match__join"></span>
        <div className="match__card">
          <p className="match__label">
            <img src="/img/icons/credit-card.svg" alt="" width="18" height="18" />
            Card charge
          </p>
          <p className="match__name">Corporate card ending 4417</p>
          <p className="match__meta">Posted Oct 8 · Client visit, Chicago</p>
          <p className="match__amt">$482.20</p>
        </div>
        <span className="match__status mr-badge mr-badge--success mr-badge--tick">
          Matched · In policy
        </span>
      </div>
    </figure>
  )
}
