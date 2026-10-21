import {
  LedgerTable,
  ProductCard,
  ProductPhone,
  ProductRow,
} from '@/components/sections/product-preview'
import { Badge } from '@/components/ui/badge'
import styles from './how-it-works.module.css'

/** Product views for /how-it-works, ported from V1. All data is illustrative. */

export function HotelsPhone() {
  return (
    <ProductPhone className={`phone phone--lg ${styles.heroPhone}`} aria-hidden="true">
      <div className="phone__screen mr-plum">
        <div className="phone__bar">
          <span className="mr-fig">9:41</span>
          <span>Hotels</span>
        </div>
        <p className="phone__title">Chicago, 2 nights</p>
        <p className="phone__meta">Oct 6 to Oct 8 · Policy up to $250 a night</p>
        <ProductRow className="ho">
          <span className="ho__name">West Loop hotel</span>
          <span className="ho__rate">$219 a night</span>
          <span className="ho__meta">0.4 mi from the client office</span>
          <Badge variant="success">In policy</Badge>
          <svg
            className="mr-line"
            viewBox="0 0 200 10"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M3 7 C 50 3 120 6 197 3"></path>
          </svg>
        </ProductRow>
        <ProductRow className="ho">
          <span className="ho__name">Riverfront hotel</span>
          <span className="ho__rate">$314 a night</span>
          <span className="ho__meta">1.2 mi from the client office</span>
          <Badge variant="error">Out of policy</Badge>
        </ProductRow>
      </div>
    </ProductPhone>
  )
}

export function SetUpCard() {
  return (
    <ProductCard className={`mock ${styles.mock}`} aria-hidden="true">
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
  )
}

const FLIGHTS = [
  ['7:05 a.m.', '$312.40', 'Nonstop · Economy', true],
  ['9:30 a.m.', '$298.10', 'Nonstop · Economy', true],
  ['11:45 a.m.', '$341.80', 'Nonstop · Economy', true],
  ['12:15 p.m.', '$684.90', 'Nonstop · Business', false],
] as const

export function FlightResultsPhone() {
  return (
    <ProductPhone className={`phone phone--lg ${styles.phone}`} aria-hidden="true">
      <div className="phone__screen mr-plum">
        <div className="phone__bar">
          <span className="mr-fig">9:41</span>
          <span>Flights</span>
        </div>
        <p className="phone__title">Austin to Chicago, round trip</p>
        <p className="phone__meta">Tue, Oct 6 to Thu, Oct 8 · 1 traveler</p>
        {FLIGHTS.map(([time, fare, meta, ok]) => (
          <ProductRow className="fl" key={time}>
            <span className="fl__time">{time}</span>
            <span className="fl__fare">{fare}</span>
            <span className="fl__meta">{meta}</span>
            <Badge variant={ok ? 'success' : 'error'}>{ok ? 'In policy' : 'Out of policy'}</Badge>
          </ProductRow>
        ))}
      </div>
    </ProductPhone>
  )
}

export function ApprovalCard() {
  return (
    <ProductCard className={`mock approval ${styles.mock}`} aria-hidden="true">
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
  )
}

export function ReceiptMatch() {
  return (
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
      <Badge variant="success" tick className="match__status">
        Matched · In policy
      </Badge>
    </div>
  )
}

export function OctoberLedger() {
  return (
    <ProductCard
      className="mr-ledger-wrap card-shadow ledger-panel"
      role="img"
      aria-label="A finance ledger of October trips with amounts, budgets, policy status and GL codes."
    >
      <div aria-hidden="true">
        <div className="mr-ledger-wrap__head">
          <p className="mr-ledger-wrap__title">October trips</p>
          <span className="mr-label">4 trips</span>
        </div>
        <LedgerTable className="mr-ledger">
          <thead>
            <tr>
              <th scope="col">Trip</th>
              <th scope="col" className="mr-num col-budget">
                Budget
              </th>
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
              <td className="mr-num col-budget">$1,500.00</td>
              <td className="mr-num">$1,284.60</td>
              <td>
                <Badge variant="success">In policy</Badge>
              </td>
              <td className="mr-num">6200</td>
            </tr>
            <tr>
              <td>Site audit, Dallas</td>
              <td className="mr-num col-budget">$1,200.00</td>
              <td className="mr-num">$946.20</td>
              <td>
                <Badge variant="success">In policy</Badge>
              </td>
              <td className="mr-num">6200</td>
            </tr>
            <tr>
              <td>Sales kickoff, Denver</td>
              <td className="mr-num col-budget">$2,000.00</td>
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
            <tr>
              <td>Partner review, Atlanta</td>
              <td className="mr-num col-budget">$1,400.00</td>
              <td className="mr-num">$1,106.75</td>
              <td>
                <Badge variant="success">In policy</Badge>
              </td>
              <td className="mr-num">6210</td>
            </tr>
          </tbody>
        </LedgerTable>
      </div>
    </ProductCard>
  )
}
