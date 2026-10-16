import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { Pause, Play } from 'lucide-react'
import { Link } from 'react-router-dom'

import { DialogLink } from '@/components/forms/form-dialogs-context'
import { Scene } from '@/components/scenes/scene'
import { ProductCard } from '@/components/sections/product-preview'
import { Button } from '@/components/ui/button'
import styles from './hero-section.module.css'

const TRIPS = [
  { city: 'Chicago', amount: '$1,284.60', budget: '$1,500', pct: 86, gl: '6200', inPolicy: true },
  { city: 'Dallas', amount: '$946.20', budget: '$1,200', pct: 79, gl: '6200', inPolicy: true },
  { city: 'Denver', amount: '$2,318.40', budget: '$2,000', pct: 100, gl: '6200', inPolicy: false },
  { city: 'Atlanta', amount: '$1,106.75', budget: '$1,400', pct: 79, gl: '6210', inPolicy: true },
]

/** Departure: a full-bleed clip, the headline, and the October trips ledger that tips away as you scroll. */
export function HeroSection() {
  const video = useRef<HTMLVideoElement>(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => {
      if (reduced.matches) {
        video.current?.pause()
        setPaused(true)
      }
    }
    sync()
    reduced.addEventListener('change', sync)
    return () => reduced.removeEventListener('change', sync)
  }, [])

  const toggle = () => {
    const el = video.current
    if (!el) return
    if (el.paused) {
      void el.play().catch(() => undefined)
      setPaused(false)
    } else {
      el.pause()
      setPaused(true)
    }
  }

  return (
    <Scene
      steps={1}
      run={70}
      fill
      className={`mr-plum ${styles.scene}`}
      aria-labelledby="hero-h"
      data-route-start
    >
      <video
        ref={video}
        className={styles.video}
        src="/video/hero-finance.mp4"
        poster="/video/hero-finance.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
      />
      <div className={styles.tint} aria-hidden="true" />
      <button
        type="button"
        className={styles.pause}
        onClick={toggle}
        aria-label={paused ? 'Play background video' : 'Pause background video'}
      >
        {paused ? <Play size={16} fill="currentColor" /> : <Pause size={16} fill="currentColor" />}
      </button>
      <div className={`mr-container ${styles.inner}`}>
        <div className={styles.copy}>
          <nav className={styles.crumbs} aria-label="Breadcrumb">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <span aria-current="page">For finance</span>
              </li>
            </ol>
          </nav>
          <h1 className={styles.heading} id="hero-h">
            Travel and expense management for finance teams
          </h1>
          <p className={styles.lead}>
            Miraee is business travel and expense software. Every trip arrives with its GL code and
            budget, ready for month-end.
          </p>
          <div className="mr-btn-row">
            <Button asChild>
              <DialogLink to="/sign-up" dialog="signup">
                <span className="mr-btn__u">Sign up free</span>
              </DialogLink>
            </Button>{' '}
            <Button asChild variant="secondary" className={styles.ghost}>
              <DialogLink to="/spend-review" dialog="review">
                Get a spend review
              </DialogLink>
            </Button>
          </div>
        </div>

        <div className={styles.asideWrap}>
          <ProductCard className={`mr-paper mr-ledger-wrap card-shadow ${styles.card}`}>
            <div className="mr-ledger-wrap__head">
              <p className="mr-ledger-wrap__title">October trips</p>
              <span className="mr-label">4 trips</span>
            </div>
            <ul className={styles.trips} aria-label="Illustrative October trips">
              {TRIPS.map((trip, i) => (
                <li key={trip.city} className={styles.trip} style={{ '--i': i } as CSSProperties}>
                  <div className={styles.tripTop}>
                    <strong>{trip.city}</strong>
                    <span>{trip.amount}</span>
                  </div>
                  <div className={styles.bar} aria-hidden="true">
                    <span
                      className={trip.inPolicy ? styles.barIn : styles.barOut}
                      style={{ '--w': `${trip.pct}%` } as CSSProperties}
                    />
                  </div>
                  <div className={styles.tripMeta}>
                    <span className={trip.inPolicy ? styles.inPolicy : styles.outOfPolicy}>
                      {trip.inPolicy ? 'In policy' : 'Out of policy'}
                    </span>
                    <span>Budget {trip.budget}</span>
                    <span>GL {trip.gl}</span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mr-caption" style={{ margin: '10px 0 0' }}>
              Product view with illustrative data.
            </p>
          </ProductCard>
        </div>
      </div>
    </Scene>
  )
}
