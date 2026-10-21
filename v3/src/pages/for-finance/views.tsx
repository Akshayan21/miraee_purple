import { LedgerTable, ProductCard } from '@/components/sections/product-preview'
import { Badge } from '@/components/ui/badge'
import styles from './views.module.css'

/** Product views of the finance page, ported from V1 (illustrative data). */

const TRIPS = [
  { city: 'Chicago', amount: '$1,284.60', budget: '$1,500', gl: '6200', inPolicy: true },
  { city: 'Dallas', amount: '$946.20', budget: '$1,200', gl: '6200', inPolicy: true },
  { city: 'Denver', amount: '$2,318.40', budget: '$2,000', gl: '6200', inPolicy: false },
  { city: 'Atlanta', amount: '$1,106.75', budget: '$1,400', gl: '6210', inPolicy: true },
]

export function TripsView() {
  return (
    <ProductCard className={`mr-paper mr-ledger-wrap card-shadow ${styles.tripsCard}`}>
      <div className="mr-ledger-wrap__head">
        <p className="mr-ledger-wrap__title">October trips</p>
        <span className="mr-label">4 trips</span>
      </div>
      <ul className={styles.trips} aria-label="Illustrative October trips">
        {TRIPS.map((trip) => (
          <li key={trip.city} className={styles.trip}>
            <div className={styles.tripTop}>
              <strong>{trip.city}</strong>
              <span>{trip.amount}</span>
            </div>
            <div className={styles.tripMeta}>
              <span className={trip.inPolicy ? styles.inPolicy : styles.outOfPolicy}>
                {trip.inPolicy ? 'In policy' : 'Out of policy'}
              </span>
              <span>GL {trip.gl}</span>
            </div>
            <p className={styles.budget}>Budget {trip.budget}</p>
          </li>
        ))}
      </ul>
    </ProductCard>
  )
}

export function GlBudgetsView() {
  return (
    <div className="view" aria-hidden="true">
      <ProductCard className="mock mock--wide">
        <div className="mock__head">
          <div>
            <p className="mock__title">GL codes and budgets</p>
            <p className="mock__sub">Applied to every booking</p>
          </div>
          <span className="mr-label">Finance settings</span>
        </div>
        <LedgerTable className="mr-ledger">
          <thead>
            <tr>
              <th>Cost center</th>
              <th className="mr-num">GL code</th>
              <th className="mr-num">Budget a trip</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sales travel</td>
              <td className="mr-num">6200</td>
              <td className="mr-num">$2,000.00</td>
            </tr>
            <tr>
              <td>Client services</td>
              <td className="mr-num">6210</td>
              <td className="mr-num">$1,500.00</td>
            </tr>
            <tr>
              <td>Training and events</td>
              <td className="mr-num">6230</td>
              <td className="mr-num">$1,200.00</td>
            </tr>
          </tbody>
        </LedgerTable>
      </ProductCard>
    </div>
  )
}

export function AuditLogView() {
  return (
    <ProductCard className="mr-ledger-wrap card-shadow audit-card" aria-hidden="true">
      <div>
        <div className="mr-ledger-wrap__head">
          <p className="mr-ledger-wrap__title">Audit log</p>
          <span className="mr-label">October</span>
        </div>
        <LedgerTable className="mr-ledger">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Event</th>
              <th className="col-by">By</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="t">Oct 1</td>
              <td className="t">9:12 a.m.</td>
              <td>Booked · Client visit, Chicago</td>
              <td className="col-by">Priya N.</td>
            </tr>
            <tr>
              <td className="t">Oct 1</td>
              <td className="t">9:40 a.m.</td>
              <td>Approved · Denver hotel</td>
              <td className="col-by">Dana R.</td>
            </tr>
            <tr>
              <td className="t">Oct 6</td>
              <td className="t">
                <span className="mr-circled">
                  5:58 a.m.
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
                Changed · Chicago flight to <span className="nw">8:15 a.m.</span>
              </td>
              <td className="col-by">Priya N.</td>
            </tr>
            <tr>
              <td className="t">Oct 8</td>
              <td className="t">2:05 p.m.</td>
              <td>Receipt matched · Chicago hotel</td>
              <td className="col-by">Miraee</td>
            </tr>
          </tbody>
        </LedgerTable>
      </div>
    </ProductCard>
  )
}

export function MatchView() {
  return (
    <div
      className="mr-paper"
      style={{ padding: 24, borderRadius: 16, width: 'min(100%, 520px)' }}
      aria-hidden="true"
    >
      <div className="match">
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
        <Badge variant="success" tick className="match__status">
          Matched · In policy
        </Badge>
      </div>
    </div>
  )
}

export function ApprovalView() {
  return (
    <div className="view" aria-hidden="true">
      <ProductCard className={`mock approval ${styles.approval}`}>
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
  )
}
