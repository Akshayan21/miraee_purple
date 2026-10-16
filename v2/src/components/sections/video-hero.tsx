import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Pause, Play } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Container } from '@/components/layout/content-layout'
import styles from './video-hero.module.css'

type VideoHeroProps = {
  /** Base name in /public/video: `<name>.mp4` and `<name>.jpg` (poster). */
  video: string
  /** Label of the current page, shown in the breadcrumb trail. */
  crumb: string
  /** Page headline, intro and buttons. */
  children: ReactNode
  /** Optional product card shown on the right. */
  aside?: ReactNode
}

/** Inner-page hero: a looping clip under the floating nav, headline and buttons on the left. */
export function VideoHero({ video, crumb, children, aside }: VideoHeroProps) {
  const clip = useRef<HTMLVideoElement>(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const el = clip.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => {
      if (reduced.matches) {
        el.pause()
        setPaused(true)
      }
    }
    sync()
    reduced.addEventListener('change', sync)
    return () => reduced.removeEventListener('change', sync)
  }, [])

  const toggle = () => {
    const el = clip.current
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
    <section className={`mr-plum ${styles.hero}`} aria-labelledby="hero-h">
      <video
        ref={clip}
        className={styles.video}
        src={`/video/${video}.mp4`}
        poster={`/video/${video}.jpg`}
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
        {paused ? <Play size={14} fill="currentColor" /> : <Pause size={14} fill="currentColor" />}
      </button>
      <Container className={`mr-container ${styles.inner}`}>
        <nav className={styles.crumbs} aria-label="Breadcrumb">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <span aria-current="page">{crumb}</span>
            </li>
          </ol>
        </nav>
        <div className={`${styles.grid} ${aside ? styles.split : ''}`}>
          <div className={styles.copy}>{children}</div>
          {aside ? <div className={styles.aside}>{aside}</div> : null}
        </div>
      </Container>
    </section>
  )
}
