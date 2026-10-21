import * as React from 'react'
import { Pause, Play } from 'lucide-react'

import { LedgerTable } from '@/components/sections/product-preview'
import styles from './security.module.css'

/** The audit log product view (illustrative data), as on V1. */
export function AuditLogView() {
  return (
    <div
      className={`mr-paper ${styles.logCard}`}
      role="img"
      aria-label="Audit log of bookings and changes."
    >
      <div aria-hidden="true">
        <div className={styles.logHead}>
          <p className={styles.logTitle}>Audit log</p>
          <span className="mr-label">October</span>
        </div>
        <LedgerTable className="mr-ledger">
          <thead>
            <tr>
              <th>Time</th>
              <th>Event</th>
              <th>By</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="mr-fig">Oct 1, 9:12 a.m.</td>
              <td>Booked · Client visit, Chicago</td>
              <td>Priya N.</td>
            </tr>
            <tr>
              <td className="mr-fig">Oct 1, 9:40 a.m.</td>
              <td>Approved · Denver hotel, out of policy</td>
              <td>Dana R.</td>
            </tr>
            <tr>
              <td className="mr-fig">Oct 6, 5:58 a.m.</td>
              <td>Flight changed · 8:15 a.m. to Chicago</td>
              <td>Priya N.</td>
            </tr>
            <tr>
              <td className="mr-fig">Oct 8, 2:05 p.m.</td>
              <td>Receipt matched · Dallas</td>
              <td>Miraee</td>
            </tr>
          </tbody>
        </LedgerTable>
      </div>
    </div>
  )
}

/** A looping clip in a rounded window. Plays only while on screen, never for reduced motion, and can be paused. */
export function ClipWindow({ video }: { video: string }) {
  const root = React.useRef<HTMLDivElement>(null)
  const clip = React.useRef<HTMLVideoElement>(null)
  const [visible, setVisible] = React.useState(false)
  const [paused, setPaused] = React.useState(false)

  React.useEffect(() => {
    const el = root.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.25,
    })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  React.useEffect(() => {
    const el = clip.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (visible && !paused && !reduced) void el.play().catch(() => undefined)
    else el.pause()
  }, [visible, paused])

  return (
    <div ref={root} className={styles.clip}>
      <video
        ref={clip}
        className={styles.clipVideo}
        src={`/video/${video}.mp4`}
        poster={`/video/${video}.jpg`}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        tabIndex={-1}
      />
      <button
        type="button"
        className={styles.clipPause}
        onClick={() => setPaused((p) => !p)}
        aria-label={paused ? 'Play background video' : 'Pause background video'}
      >
        {paused ? <Play size={14} fill="currentColor" /> : <Pause size={14} fill="currentColor" />}
      </button>
    </div>
  )
}
