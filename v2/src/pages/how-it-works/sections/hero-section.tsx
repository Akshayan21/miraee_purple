import { useEffect, useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'

import { DialogLink } from '@/components/forms/form-dialogs-context'
import { Scene } from '@/components/scenes/scene'
import { ProductPhone, ProductRow } from '@/components/sections/product-preview'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import styles from './hero-section.module.css'

/** Departure gate: the headline on the left, a video window with the hotel phone breaking out of it. */
export function HeroSection() {
  const video = useRef<HTMLVideoElement>(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduced.matches) {
      video.current?.pause()
      setPaused(true)
    }
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
      run={45}
      fill
      className={`hiw-flat mr-plum ${styles.scene}`}
      aria-labelledby="hero-h"
      data-route-start
    >
      <div className={styles.grid}>
        <div className={styles.copy}>
          <p className={styles.crumb}>How it works</p>
          <h1 className={styles.heading} id="hero-h">
            From booking to month-end, in six steps
          </h1>
          <p className={styles.lead}>
            Miraee is business travel and expense software: a travel assistant for every employee,
            with the controls finance needs.
          </p>
          <div className={styles.actions}>
            <Button asChild>
              <DialogLink to="/sign-up" dialog="signup">
                <span className="mr-btn__u">Sign up free</span>
              </DialogLink>
            </Button>
            <Button asChild variant="secondary">
              <DialogLink to="/spend-review" dialog="review">
                Get a spend review
              </DialogLink>
            </Button>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.window}>
            <video
              ref={video}
              className={styles.video}
              src="/video/hero-how.mp4"
              poster="/video/hero-how.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
              tabIndex={-1}
            />
            <button
              type="button"
              className={styles.pause}
              onClick={toggle}
              aria-label={paused ? 'Play background video' : 'Pause background video'}
            >
              {paused ? (
                <Play size={14} fill="currentColor" />
              ) : (
                <Pause size={14} fill="currentColor" />
              )}
            </button>
          </div>
          <ProductPhone className={`phone phone--lg ${styles.phone}`} aria-hidden="true">
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
        </div>
      </div>
    </Scene>
  )
}
