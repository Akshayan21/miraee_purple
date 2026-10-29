import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import '@/styles/not-found.css'
import { CONNECTIONS, suggestRoute } from './suggest'

const ROUTE = 'M140 540 Q330 220 560 380 Q760 500 900 280 Q1010 140 1090 190'
const HUBS = [
  { x: 140, y: 540 },
  { x: 560, y: 380 },
  { x: 900, y: 280 },
]
const BARS = [3, 1, 2, 1, 4, 1, 1, 3, 2, 1, 3, 1, 2, 4, 1, 2, 1, 3, 1, 1, 2, 3, 1, 4, 2, 1, 3, 1]

function RouteMap() {
  return (
    <svg
      className="nf__map"
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <g className="nf__layer nf__layer--far">
        {Array.from({ length: 9 }, (_, i) => (
          <line key={`v${i}`} x1={i * 150} y1="0" x2={i * 150} y2="700" />
        ))}
        {Array.from({ length: 6 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 140} x2="1200" y2={i * 140} />
        ))}
      </g>
      <g className="nf__layer nf__layer--near">
        <path className="nf__arc" d={ROUTE} />
        {HUBS.map((h) => (
          <g key={h.x} transform={`translate(${h.x} ${h.y})`}>
            <circle className="nf__hub-ring" r="16" />
            <circle className="nf__hub" r="6" />
          </g>
        ))}
        <g transform="translate(1090 190)">
          <circle className="nf__pulse" r="22" />
          <circle className="nf__unknown" r="22" />
          <text className="nf__q" textAnchor="middle" dominantBaseline="central">
            ?
          </text>
        </g>
        <g className="nf__plane" style={{ offsetPath: `path('${ROUTE}')` }}>
          <path d="M-14 0 L-5 -3.5 L-3 -14 L1 -14 L3 -3.5 L14 0 L3 3.5 L1 14 L-3 14 L-5 3.5 Z" />
        </g>
      </g>
    </svg>
  )
}

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { pathname } = useLocation()
  const suggestion = suggestRoute(pathname)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let frame = 0
    const onMove = (e: PointerEvent) => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const r = el.getBoundingClientRect()
        el.style.setProperty('--px', ((e.clientX - r.left) / r.width - 0.5).toFixed(3))
        el.style.setProperty('--py', ((e.clientY - r.top) / r.height - 0.5).toFixed(3))
      })
    }
    el.addEventListener('pointermove', onMove)
    return () => {
      el.removeEventListener('pointermove', onMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section ref={ref} className="mr-plum nf" aria-labelledby="hero-h">
      <RouteMap />
      <div className="mr-container nf__inner">
        <article className="mr-paper nf__pass">
          <div className="nf__main">
            <p className="nf__brand">Miraee · Boarding pass</p>
            <h1 id="hero-h" className="nf__title">
              We missed this connection.
            </h1>
            <p className="nf__lead">
              That page isn't on this route any more. Pick a connecting flight below and we'll get
              you moving again.
            </p>
            <dl className="nf__fields">
              <div>
                <dt>Flight</dt>
                <dd>MR 404</dd>
              </div>
              <div>
                <dt>From</dt>
                <dd>This link</dd>
              </div>
              <div>
                <dt>To</dt>
                <dd>Unknown</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>Page not found</dd>
              </div>
            </dl>
            <div className="nf__actions">
              <Button asChild>
                <Link to="/">Rebook at home</Link>
              </Button>
              {suggestion && (
                <p className="nf__suggest">
                  Did you mean <Link to={suggestion.to}>{suggestion.label}</Link>?
                </p>
              )}
            </div>
          </div>
          <div className="nf__stub" aria-hidden="true">
            <span className="nf__code">404</span>
            <span className="nf__barcode">
              {BARS.map((w, i) => (
                <i key={i} style={{ width: `${w * 2}px` }} />
              ))}
            </span>
          </div>
        </article>

        <nav aria-labelledby="nf-connect">
          <h2 id="nf-connect" className="nf__connect-h">
            Connecting flights
          </h2>
          <ul className="nf__flights">
            {CONNECTIONS.map((c, i) => (
              <li key={c.to}>
                <Link to={c.to} className="nf__flight">
                  <span className="nf__flight-no">MR {101 + i}</span>
                  <span className="nf__flight-name">{c.label}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
