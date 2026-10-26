import { PeopleScene } from '@/components/sections/people-scene'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function ForFinanceSection() {
  return (
    <PeopleScene
      labelledBy="fin-h"
      tone="paper"
      plate="mist"
      person={{
        src: '/img/px5918389-controller.png',
        webp: '/img/px5918389-controller.webp',
        alt: 'A controller in a rust sweater holds a tablet in the office.',
        width: 831,
        height: 1100,
      }}
      personSide="right"
      asideAt="bottom-left"
      layout="stack"
      asideWidth="min(92%, 360px)"
      aside={
        <div className="mr-trip-tag card-shadow">
          <div className="mr-trip-tag__head">
            <div>
              <p className="mr-trip-tag__title">Client visit, Chicago</p>
              <p className="mr-trip-tag__sub">Oct 6 to Oct 8 · AUS to ORD</p>
            </div>
            <Badge variant="success">In policy</Badge>
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
      }
    >
      <h2 className="mr-h2" id="fin-h">
        Every trip, with its budget and GL code.
      </h2>
      <ul className="list">
        <li>Set policy, GL codes and budgets once.</li>
        <li>One finance dashboard and a full audit log.</li>
        <li>Receipts matched to card charges and checked against policy.</li>
        <li>Keep the corporate cards you already use.</li>
      </ul>
      <p className="stat-line">
        <span className="stat-line__fig">
          <small>Only </small>12%
        </span>{' '}
        of travel programs have their data in one place.
      </p>
      <p className="link-row">
        <Button asChild variant="tertiary">
          <Link to="/finance">See the finance view</Link>
        </Button>
      </p>
    </PeopleScene>
  )
}
