import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Pause, Play } from 'lucide-react'

import { DialogLink } from '@/components/forms/form-dialogs-context'
import { Scene } from '@/components/scenes/scene'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import styles from './hero-section.module.css'

/** Departure: copy on plum, a looping video window with the policy check riding its corner. */
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
      run={55}
      fill
      className={`mr-plum ${styles.scene}`}
      aria-labelledby="hero-h"
      data-route-start
    >
      <div className={styles.wrap}>
        <div className={styles.copy}>
          <p className={styles.crumb}>For travel managers</p>
          <h1 className={styles.h1} id="hero-h">
            The corporate travel booking tool that runs your policy
          </h1>
          <p className={styles.lead}>
            Miraee is business travel and expense software. Your policy runs on every booking, and
            approvals only reach you when something is out of policy.
          </p>
          <div className={styles.actions}>
            <Button asChild>
              <DialogLink to="/sign-up" dialog="signup">
                <span className="mr-btn__u">Sign up free</span>
              </DialogLink>
            </Button>
            <Button asChild variant="tertiary">
              <Link to="/how-it-works">See how it works</Link>
            </Button>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.window}>
            <video
              ref={video}
              className={styles.video}
              src="/video/hero-tm.mp4"
              poster="/video/hero-tm.jpg"
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
                <Play size={16} fill="currentColor" />
              ) : (
                <Pause size={16} fill="currentColor" />
              )}
            </button>
          </div>
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
        </div>
      </div>
    </Scene>
  )
}
