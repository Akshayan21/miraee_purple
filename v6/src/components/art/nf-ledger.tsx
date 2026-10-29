import { Link, useLocation } from 'react-router-dom'

import { attemptedSlug, rankPages } from '@/lib/did-you-mean'

/**
 * The 404 as a Miraee trip tag on lilac paper: the address that was not found is a line item with GL code 404,
 * the Line circles the total once, and the closest real pages are listed as ruled ledger rows with a match score.
 */
export function NotFoundLedger() {
  const { pathname } = useLocation()
  const ranked = rankPages(pathname, 4)
  const slug = attemptedSlug(pathname)

  return (
    <div className="mr-paper nf6">
      <header className="nf6__head">
        <div>
          <p className="nf6__title">Requested page</p>
          <p className="nf6__sub">{slug ? `Trip to /${slug}` : 'Trip to an unknown address'}</p>
        </div>
        <span className="mr-badge mr-badge--error">Not found</span>
      </header>

      <dl className="nf6__dl">
        <dt>Address</dt>
        <dd className="nf6__path">{pathname}</dd>
        <dt>Matched to</dt>
        <dd>No page</dd>
        <dt>Policy</dt>
        <dd>Out of route</dd>
        <dt className="nf6__total-l">GL code</dt>
        <dd className="nf6__total">
          <span className="nf6__fig mr-num">
            404
            <svg className="nf6__line" viewBox="0 0 140 64" preserveAspectRatio="none" aria-hidden="true" focusable="false">
              <path
                pathLength="1"
                d="M22 46 C 6 30, 34 8, 74 7 C 116 6, 136 22, 130 38 C 124 54, 86 60, 52 56 C 26 52, 12 40, 20 26"
              />
            </svg>
          </span>
        </dd>
      </dl>

      <p className="nf6__h">Closest matches</p>
      <ul className="nf6__list" aria-label="Closest pages">
        {ranked.map(({ page, score, best }) => (
          <li key={page.to}>
            <Link to={page.to} className="nf6__row" data-best={best || undefined}>
              <span className="nf6__name">
                {page.label}
                {best ? <span className="mr-badge mr-badge--success mr-badge--tick">Closest match</span> : null}
              </span>
              <span className="nf6__to">{page.to}</span>
              <span className="nf6__score mr-num" aria-label={`${score} percent match`}>
                {score}%
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="nf6__cap">Match scores compare the address you typed with each page. Illustrative, not a policy check.</p>
    </div>
  )
}
