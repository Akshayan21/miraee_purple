import { ProductCard, ProductPhone, ProductRow } from '@/components/sections/product-preview'
import { Badge } from '@/components/ui/badge'
import styles from './views.module.css'

/** Product views of the travel managers page, ported from V1 (illustrative data). */

export function PolicyChecklistView() {
  return (
    <div className={styles.policy}>
      <Badge variant="success" tick>
        In policy
      </Badge>
      <ul>
        <li>Flight and hotel limits checked</li>
        <li>Approvals for exceptions</li>
        <li>Every booking recorded</li>
      </ul>
    </div>
  )
}

export function HotelsPhoneView() {
  return (
    <ProductPhone className={`phone phone--lg ${styles.preview}`} aria-hidden="true">
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
        </ProductRow>
        <ProductRow className="ho">
          <span className="ho__name">Fulton Market hotel</span>
          <span className="ho__rate">$236 a night</span>
          <span className="ho__meta">0.9 mi from the client office</span>
          <Badge variant="success">In policy</Badge>
        </ProductRow>
        <ProductRow className="ho">
          <span className="ho__name">Union Station hotel</span>
          <span className="ho__rate">$204 a night</span>
          <span className="ho__meta">1.1 mi from the client office</span>
          <Badge variant="success">In policy</Badge>
        </ProductRow>
      </div>
    </ProductPhone>
  )
}

export function ApprovalView() {
  return (
    <div className="view" aria-hidden="true">
      <ProductCard className={`mock approval ${styles.card}`}>
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

export function BookForOthersView() {
  return (
    <div className="view" aria-hidden="true">
      <ProductCard className={`mock ${styles.card}`}>
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
  )
}

const STEPS = [
  'Company',
  'Travel policy',
  'Employees',
  'Payment settings',
  'Admin training',
  'Finance training',
]

export function OnboardingView() {
  return (
    <ProductCard className={`mock mock--wide ${styles.card}`} aria-hidden="true">
      <div className="mock__head">
        <p className="mock__title">Onboarding</p>
        <Badge variant="success" tick>
          6 of 6 done
        </Badge>
      </div>
      <ul className="checklist">
        {STEPS.map((s) => (
          <li key={s}>
            <img src="/img/icons/check.svg" alt="" width="20" height="20" />
            {s}
          </li>
        ))}
      </ul>
    </ProductCard>
  )
}
