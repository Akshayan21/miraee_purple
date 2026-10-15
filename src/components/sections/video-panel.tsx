import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Pause, Play } from 'lucide-react'

import styles from './video-panel.module.css'

type VideoPanelProps = {
  /** Base name in /public/video: `<name>.mp4` and `<name>.jpg` (poster). */
  video: string
  labelledBy: string
  /** Section copy, on the left. */
  children: ReactNode
  /** Optional product card floated on the right. */
  aside?: ReactNode
  /** Give the copy more room (long sections). */
  wide?: boolean
}

/** A rounded plum panel with a looping clip behind it. The clip only plays while on screen. */
export function VideoPanel({ video, labelledBy, children, aside, wide }: VideoPanelProps) {
  const root = useRef<HTMLElement>(null)
  const clip = useRef<HTMLVideoElement>(null)
  const [visible, setVisible] = useState(false)
  // Reveal once, early, and never hide again: only playback follows visibility.
  const [revealed, setRevealed] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const el = root.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      setRevealed(true)
      return
    }
    const reveal = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          reveal.disconnect()
        }
      },
      { rootMargin: '0px 0px 20% 0px', threshold: 0 },
    )
    const play = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.25,
    })
    reveal.observe(el)
    play.observe(el)
    return () => {
      reveal.disconnect()
      play.disconnect()
    }
  }, [])

  useEffect(() => {
    const el = clip.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (visible && !paused && !reduced) void el.play().catch(() => undefined)
    else el.pause()
  }, [visible, paused])

  return (
    <section ref={root} className={styles.wrap} aria-labelledby={labelledBy}>
      <div
        className={`mr-plum ${styles.panel} ${aside ? styles.split : ''} ${wide ? styles.wide : ''} ${revealed ? styles.in : ''}`}
      >
        <video
          ref={clip}
          className={styles.video}
          src={`/video/${video}.mp4`}
          poster={`/video/${video}.jpg`}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          tabIndex={-1}
        />
        <div className={styles.tint} aria-hidden="true" />
        <button
          type="button"
          className={styles.pause}
          onClick={() => setPaused((value) => !value)}
          aria-label={paused ? 'Play background video' : 'Pause background video'}
        >
          {paused ? (
            <Play size={14} fill="currentColor" />
          ) : (
            <Pause size={14} fill="currentColor" />
          )}
        </button>
        <div className={styles.copy}>{children}</div>
        {aside ? <div className={styles.aside}>{aside}</div> : null}
      </div>
    </section>
  )
}
