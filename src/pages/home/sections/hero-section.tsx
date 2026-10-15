import { useEffect, useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'

import { DialogLink } from '@/components/forms/form-dialogs-context'
import { Button } from '@/components/ui/button'
import styles from './hero-section.module.css'

export function HeroSection() {
  const video = useRef<HTMLVideoElement>(null)
  const [paused, setPaused] = useState(false)
  const [src, setSrc] = useState('/video/hero-home.mp4')

  useEffect(() => {
    const small = window.matchMedia('(max-width: 900px)')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => {
      setSrc(small.matches ? '/video/hero-home-sm.mp4' : '/video/hero-home.mp4')
      if (reduced.matches) {
        video.current?.pause()
        setPaused(true)
      }
    }
    sync()
    small.addEventListener('change', sync)
    reduced.addEventListener('change', sync)
    return () => {
      small.removeEventListener('change', sync)
      reduced.removeEventListener('change', sync)
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
    <section className={`${styles.hero} mo-skip`} aria-labelledby="home-hero-h">
      <video
        key={src}
        ref={video}
        className={styles.video}
        src={src}
        poster="/video/hero-home.jpg"
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

      <div className={styles.content}>
        <p className={styles.eyebrow}>Business travel and expense software</p>
        <h1 id="home-hero-h" className={styles.heading}>
          Business travel.
          <br />
          <span>Every dollar in view.</span>
        </h1>
        <p className={styles.lead}>
          Miraee is business travel and expense software. Your people book inside company policy,
          and finance sees every trip with its budget and GL code.
        </p>
        <div className={styles.actions}>
          <Button asChild>
            <DialogLink to="/sign-up" dialog="signup">
              Sign up free
            </DialogLink>
          </Button>
          <Button asChild variant="secondary" className={styles.ghost}>
            <DialogLink to="/spend-review" dialog="review">
              Get a spend review
            </DialogLink>
          </Button>
        </div>
        <p className={styles.note}>
          Free to sign up and onboard, at any company size. Built by Tabhi, the company behind the
          Mondee travel marketplace. Keep the corporate cards you already use.
        </p>
      </div>
    </section>
  )
}
