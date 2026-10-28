import { gsap } from '@/lib/gsap'

/**
 * Product moments drawn for V5 (sample data only). One trip runs through all of them:
 * Austin to Denver, Tue 18 Nov, for A. Moreno, booked to the Sales events budget.
 */

export const POLICY_ROWS = [
  { k: 'Hotel limit', v: '$220 per night' },
  { k: 'Cabin', v: 'Economy under 6 hours' },
  { k: 'Fare cap', v: '$450 each way' },
  { k: 'Approver', v: 'Travel lead, outside policy only' },
]

export const FLIGHTS = [
  { t: '7:10 AM', d: '2h 05m nonstop', p: '$318', ok: true },
  { t: '11:35 AM', d: '2h 05m nonstop', p: '$389', ok: true },
  { t: '5:20 PM', d: '2h 10m nonstop', p: '$496', ok: false },
]

export const LEDGER = [
  {
    trip: 'Austin to Denver',
    who: 'A. Moreno',
    budget: 'Sales events',
    cost: '$799',
    st: 'Approved',
  },
  {
    trip: 'Boston to Chicago',
    who: 'R. Patel',
    budget: 'Client visits',
    cost: '$1,126',
    st: 'Matched',
  },
  {
    trip: 'Seattle to Austin',
    who: 'J. Okafor',
    budget: 'Field team',
    cost: '$942',
    st: 'Matched',
  },
  { trip: 'Denver to Boston', who: 'L. Chen', budget: 'Training', cost: '$1,208', st: 'Pending' },
]

/** Type `text` into `el` character by character as a tween. */
export function typeInto(el: HTMLElement, text: string, duration = 1) {
  const o = { n: 0 }
  return gsap.to(o, {
    n: text.length,
    duration,
    ease: 'none',
    onStart: () => {
      el.textContent = ''
    },
    onUpdate: () => {
      el.textContent = text.slice(0, Math.round(o.n))
    },
  })
}

/* --------------------------------- Policy card --------------------------------- */
export function PolicyCard() {
  return (
    <div className="pc">
      <div className="pc-head">
        <span className="pc-ico" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.500-7-10V6l7-3z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        </span>
        <div>
          <p className="pc-title">Travel policy</p>
          <p className="small">Applies to everyone, adjusted by team</p>
        </div>
      </div>
      <ul className="pc-rows">
        {POLICY_ROWS.map((r) => (
          <li key={r.k} data-row>
            <span>{r.k}</span>
            <b>{r.v}</b>
            <i className="pc-tick" aria-hidden="true" />
          </li>
        ))}
      </ul>
      <div className="meter">
        <p className="small">Flights for the trip, against the fare cap</p>
        <div className="meter-bar" aria-hidden="true">
          <i className="meter-fill" style={{ width: '75%' }} />
          <i className="meter-cap" style={{ left: '75%' }}>
            <em>Cap $450</em>
          </i>
          {FLIGHTS.map((f) => (
            <b
              key={f.t}
              className={`meter-dot${f.ok ? '' : 'meter-dot--over'}`}
              style={{ left: `${(Number(f.p.slice(1)) / 600) * 100}%` }}
            >
              <span className="fig">{f.p}</span>
            </b>
          ))}
        </div>
      </div>
    </div>
  )
}

/* --------------------------------- Chat + options --------------------------------- */
export function ChatPanel() {
  return (
    <div className="chat">
      <div className="chat-msgs">
        <p className="bub bub--u" data-m>
          <span data-type>Book me Austin to Denver on Tue 18 Nov, back Thursday.</span>
        </p>
        <p className="bub bub--a" data-m>
          Here are flights inside your policy. One is over the fare cap.
        </p>
        <p className="bub bub--u" data-m>
          <span data-type>The 11:35 AM, please.</span>
        </p>
        <p className="bub bub--a" data-m>
          Done. A hotel near Union Station is $205 per night, inside your limit.
        </p>
        <p className="bub bub--a bub--dots" data-dots aria-hidden="true">
          <i />
          <i />
          <i />
        </p>
      </div>
      <FlightOptions />
    </div>
  )
}

export function FlightOptions({ className = '' }: { className?: string }) {
  return (
    <ul className={`opts ${className}`}>
      {FLIGHTS.map((f, i) => (
        <li
          key={f.t}
          className={`opt${f.ok ? '' : 'opt--over'}${i === 1 ? 'opt--pick' : ''}`}
          data-opt
        >
          <div>
            <b className="fig">{f.t}</b>
            <span>{f.d}</span>
          </div>
          <div className="opt-r">
            <b className="fig">{f.p}</b>
            <span className={`pill ${f.ok ? 'pill--ok' : 'pill--warn'}`}>
              {f.ok ? 'In policy' : 'Over fare cap'}
            </span>
          </div>
        </li>
      ))}
    </ul>
  )
}

/** Plays the chat simulation on `root` and returns the timeline. */
export function playChat(root: HTMLElement) {
  const msgs = root.querySelectorAll<HTMLElement>('[data-m]')
  const opts = root.querySelectorAll<HTMLElement>('[data-opt]')
  const dots = root.querySelector<HTMLElement>('[data-dots]')
  const tl = gsap.timeline()
  gsap.set(msgs, { autoAlpha: 0, y: 14, scale: 0.96, transformOrigin: '0 100%' })
  gsap.set(opts, { autoAlpha: 0, x: 24 })
  if (dots) gsap.set(dots, { autoAlpha: 0 })
  const typed = (i: number) => msgs[i].querySelector<HTMLElement>('[data-type]')
  const full = [typed(0)?.textContent ?? '', '', typed(2)?.textContent ?? '', '']
  const showDots = (at: string | number) => {
    if (!dots) return
    tl.to(dots, { autoAlpha: 1, duration: 0.2 }, at)
      .to(
        dots.querySelectorAll('i'),
        { y: -4, stagger: 0.12, repeat: 3, yoyo: true, duration: 0.18 },
        '<',
      )
      .to(dots, { autoAlpha: 0, duration: 0.15 })
  }
  tl.to(msgs[0], { autoAlpha: 1, y: 0, scale: 1, duration: 0.35, ease: 'back.out(1.6)' }, 0.1)
  const t0 = typed(0)
  if (t0) tl.add(typeInto(t0, full[0], 1.1), 0.2)
  showDots('+=0.1')
  tl.to(msgs[1], { autoAlpha: 1, y: 0, scale: 1, duration: 0.4, ease: 'back.out(1.6)' })
  tl.to(opts, { autoAlpha: 1, x: 0, stagger: 0.12, duration: 0.5, ease: 'power3.out' }, '-=0.1')
  tl.to(msgs[2], { autoAlpha: 1, y: 0, scale: 1, duration: 0.35, ease: 'back.out(1.6)' }, '+=0.35')
  const t2 = typed(2)
  if (t2) tl.add(typeInto(t2, full[2], 0.7), '<0.1')
  tl.to(opts[1], { scale: 1.03, duration: 0.25, yoyo: true, repeat: 1 })
  showDots('+=0.05')
  tl.to(msgs[3], { autoAlpha: 1, y: 0, scale: 1, duration: 0.4, ease: 'back.out(1.6)' })
  return tl
}

/* --------------------------------- Ledger --------------------------------- */
export function LedgerPanel({
  compact = false,
  rows = LEDGER,
}: {
  compact?: boolean
  rows?: typeof LEDGER
}) {
  return (
    <div className={`led${compact ? 'led--compact' : ''}`}>
      <div className="led-head">
        <p className="pc-title">Finance view</p>
        <span className="pill">Month to date</span>
      </div>
      <ul className="led-rows">
        {rows.map((r) => (
          <li key={r.trip} data-row>
            <div className="led-trip">
              <b>{r.trip}</b>
              <span>
                {r.who} · {r.budget}
              </span>
            </div>
            <b className="fig led-cost" data-cost>
              {r.cost}
            </b>
            <span className={`pill ${r.st === 'Pending' ? 'pill--warn' : 'pill--ok'} led-st`}>
              {r.st}
            </span>
          </li>
        ))}
      </ul>
      {!compact ? (
        <div className="led-foot">
          <span>Receipts matched to card charges</span>
          <b className="fig">$4,075</b>
        </div>
      ) : null}
    </div>
  )
}

/** Fill the ledger rows in, one after another, with the costs counting up. */
export function playLedger(root: HTMLElement) {
  const rows = root.querySelectorAll<HTMLElement>('[data-row]')
  const tl = gsap.timeline()
  gsap.set(rows, { autoAlpha: 0, x: -24 })
  tl.to(rows, { autoAlpha: 1, x: 0, stagger: 0.16, duration: 0.5, ease: 'power3.out' })
  root.querySelectorAll<HTMLElement>('[data-cost]').forEach((el, i) => {
    const to = Number(el.textContent?.replace(/[^0-9]/g, '') ?? 0)
    const o = { v: 0 }
    tl.to(
      o,
      {
        v: to,
        duration: 0.7,
        ease: 'power2.out',
        onUpdate: () => {
          el.textContent = '$' + Math.round(o.v).toLocaleString('en-US')
        },
      },
      0.1 + i * 0.16,
    )
  })
  tl.fromTo(
    root.querySelector('.led-foot'),
    { autoAlpha: 0 },
    { autoAlpha: 1, duration: 0.4 },
    '-=0.2',
  )
  return tl
}
