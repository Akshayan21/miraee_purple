import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { DialogLink } from '@/components/forms/form-dialogs-context'
import { LandingLayout } from '@/components/layout/landing-layout'
import { LedgerTable, ProductCard } from '@/components/sections/product-preview'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import styles from './landing-shared.module.css'

/** V1's logo-only chrome, with its page links and optional small print. The header and footer are styled for night in the CSS module. */
export function LandingFrame({
  links,
  smallPrint,
  children,
}: {
  links: Array<{ to: string; label: string }>
  smallPrint?: string
  children: ReactNode
}) {
  return (
    <LandingLayout
      tone="plum"
      footer={
        <>
          <nav aria-label="Page links">
            <ul>
              {links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
              <li>
                <DialogLink to="/sign-up" dialog="signup">
                  Sign up
                </DialogLink>
              </li>
            </ul>
          </nav>
          {smallPrint ? <p className="small-print">{smallPrint}</p> : null}
        </>
      }
    >
      {children}
    </LandingLayout>
  )
}

/** The two actions every landing page repeats: sign up and spend review. */
export function SignupActions() {
  return (
    <>
      <Button asChild>
        <DialogLink to="/sign-up" dialog="signup">
          Sign up free
        </DialogLink>
      </Button>
      <Button asChild variant="secondary">
        <DialogLink to="/spend-review" dialog="review">
          Get a spend review
        </DialogLink>
      </Button>
    </>
  )
}

export function SpendReviewAction() {
  return (
    <Button asChild variant="secondary">
      <DialogLink to="/spend-review" dialog="review">
        Get a spend review
      </DialogLink>
    </Button>
  )
}

/** The October trips ledger, shown in the hero of each page. */
export function OctoberLedger() {
  return (
    <div className={styles.ledger}>
      <ProductCard className="mr-ledger-wrap card-shadow">
        <div className="mr-ledger-wrap__head">
          <p className="mr-ledger-wrap__title">October trips</p>
          <span className="mr-label">3 trips</span>
        </div>
        <LedgerTable
          className="mr-ledger"
          aria-label="A finance ledger of trips with budgets, policy status and GL codes."
        >
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
          </tbody>
        </LedgerTable>
      </ProductCard>
    </div>
  )
}

/** A V1 hero photo (webp with jpg fallback), set as a rounded figure. */
export function Photo({
  name,
  width,
  height,
  alt,
}: {
  name: string
  width: number
  height: number
  alt: string
}) {
  return (
    <figure className={styles.photo}>
      <picture>
        <source srcSet={`/img/document/${name}.webp`} type="image/webp" />
        <img src={`/img/document/${name}.jpg`} width={width} height={height} alt={alt} />
      </picture>
    </figure>
  )
}
