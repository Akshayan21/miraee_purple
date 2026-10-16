import {
  LedgerTable,
  ProductCard,
  ProductPhone,
  ProductRow,
} from '@/components/sections/product-preview'
import { Badge } from '@/components/ui/badge'

/** The product views of the Miraee app, as on V1. Shared by the hero mock-up and the "How it works" scene. */

export function PolicyView() {
  return (
    <div className="ui-card" aria-hidden="true">
      <p className="ui-card__title">Travel policy</p>
      <p className="ui-card__sub">Applies to every employee</p>
      <ProductRow className="ui-rule">
        <span>
          <span className="ui-rule__k">Hotels</span>
          <span className="ui-rule__v">Up to $250 a night</span>
        </span>
        <Badge variant="success" tick>
          Set
        </Badge>
      </ProductRow>
      <ProductRow className="ui-rule">
        <span>
          <span className="ui-rule__k">Flights</span>
          <span className="ui-rule__v">Economy for flights under 6 hours</span>
        </span>
        <Badge variant="success" tick>
          Set
        </Badge>
      </ProductRow>
      <ProductRow className="ui-rule">
        <span>
          <span className="ui-rule__k">Approvals</span>
          <span className="ui-rule__v">Out of policy goes to an approver</span>
        </span>
        <Badge variant="success" tick>
          Set
        </Badge>
      </ProductRow>
    </div>
  )
}

export function FlightsPhoneView({ className = '' }: { className?: string }) {
  return (
    <ProductPhone className={`phone ${className}`} aria-hidden="true">
      <div className="phone__screen mr-plum">
        <div className="phone__bar">
          <span className="mr-fig">9:41</span>
          <span>Flights</span>
        </div>
        <p className="phone__title">Austin to Chicago</p>
        <p className="phone__meta">Wed, Oct 14 · 1 traveler</p>
        <ProductRow className="fl">
          <span className="fl__time">7:05 a.m.</span>
          <span className="fl__fare">$312.40</span>
          <span className="fl__meta">Nonstop</span>
          <Badge variant="success">In policy</Badge>
        </ProductRow>
        <ProductRow className="fl">
          <span className="fl__time">9:30 a.m.</span>
          <span className="fl__fare">$298.10</span>
          <span className="fl__meta">Nonstop</span>
          <Badge variant="success">In policy</Badge>
        </ProductRow>
        <ProductRow className="fl">
          <span className="fl__time">12:15 p.m.</span>
          <span className="fl__fare">$684.90</span>
          <span className="fl__meta">Nonstop</span>
          <Badge variant="error">Out of policy</Badge>
        </ProductRow>
      </div>
    </ProductPhone>
  )
}

export function FinanceDashboardView({ className = '' }: { className?: string }) {
  return (
    <ProductCard className={`dash ${className}`} aria-hidden="true">
      <div className="dash__head">
        <p className="dash__title">Finance dashboard</p>
        <span className="mr-label">October</span>
      </div>
      <LedgerTable className="mr-ledger mr-ledger--compact">
        <thead>
          <tr>
            <th>Trip</th>
            <th className="mr-num">Budget</th>
            <th className="mr-num">GL code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Client visit, Chicago</td>
            <td className="mr-num">$1,500.00</td>
            <td className="mr-num">6200</td>
          </tr>
          <tr>
            <td>Site audit, Dallas</td>
            <td className="mr-num">$1,200.00</td>
            <td className="mr-num">6200</td>
          </tr>
          <tr>
            <td>Sales kickoff, Denver</td>
            <td className="mr-num">$2,000.00</td>
            <td className="mr-num">6200</td>
          </tr>
        </tbody>
      </LedgerTable>
      <ul className="audit">
        <li className="audit__h">Audit log</li>
        <li>
          <time className="mr-fig">9:12 a.m.</time>
          <span>Booked by Priya N.</span>
        </li>
        <li>
          <time className="mr-fig">9:40 a.m.</time>
          <span>Approved by Dana R.</span>
        </li>
        <li>
          <time className="mr-fig">2:05 p.m.</time>
          <span>Receipt matched</span>
        </li>
      </ul>
    </ProductCard>
  )
}
