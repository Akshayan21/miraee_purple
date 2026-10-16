import { useEffect, useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'

import { DialogLink } from '@/components/forms/form-dialogs-context'
import { Scene } from '@/components/scenes/scene'
import { Button } from '@/components/ui/button'
import styles from './hero-section.module.css'

/** Departure: the headline sits over a video that is cut away from the right as you scroll. */
export function HeroSection() {
  const video = useRef<HTMLVideoElement>(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
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
      run={55}
      fill
      className={`mr-plum ${styles.scene}`}
      aria-labelledby="hero-h"
      data-route-start
    >
      <div className={styles.frame}>
        <video
          ref={video}
          className={styles.video}
          src="/video/hero-spend.mp4"
          poster="/video/hero-spend.jpg"
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
          {paused ? (
            <Play size={16} fill="currentColor" />
          ) : (
            <Pause size={16} fill="currentColor" />
          )}
        </button>
      </div>
      <div className={styles.content}>
        <p className={styles.crumb}>Spend review</p>
        <h1 className={styles.heading} id="hero-h">
          Find out where last year's travel budget went.
        </h1>
        <div className={styles.lower}>
          <p className={styles.lead}>
            Miraee is business travel and expense software. Send one booking report and we review
            last year's travel, trip by trip, from your own data.
          </p>
          <div className={styles.actions}>
            <Button asChild>
              <DialogLink to="/spend-review" dialog="review">
                <span className="mr-btn__u">Get a spend review</span>
              </DialogLink>
            </Button>
            <Button asChild variant="secondary" className={styles.ghost}>
              <DialogLink to="/sign-up" dialog="signup">
                Sign up free
              </DialogLink>
            </Button>
          </div>
        </div>
      </div>
    </Scene>
  )
}
