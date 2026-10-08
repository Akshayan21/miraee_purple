import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import styles from './site-preloader.module.css'
import logoMarkup from '/public/img/miraee-logo-orange.svg?raw'

export function SitePreloader({ onComplete }: { onComplete: () => void }) {
  const ref = useRef<HTMLDivElement>(null)
  const finishRef = useRef<() => void>(() => {})

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduced.matches) {
      onComplete()
      return
    }
    let disposed = false
    let exiting = false
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    root.focus({ preventScroll: true })
    const context = gsap.context(() => {
      const path = root.querySelector<SVGPathElement>('[data-loader-route]')
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } })
      const letters = root.querySelectorAll<SVGPathElement>('[data-loader-logo] path')
      const lengths = Array.from(letters, (letter) => letter.getTotalLength())
      gsap.set(letters, { fillOpacity: 0, stroke: '#ff7a28', strokeWidth: 1.3 })
      letters.forEach((letter, index) => {
        gsap.set(letter, { strokeDasharray: lengths[index], strokeDashoffset: lengths[index] })
      })
      intro.from('[data-loader-logo]', { y: 18, scale: 0.94, opacity: 0, duration: 0.5 }, 0)
      intro.to(
        letters,
        { strokeDashoffset: 0, duration: 1.1, stagger: 0.07, ease: 'power2.inOut' },
        0.1,
      )
      intro.to(letters, { fillOpacity: 1, strokeOpacity: 0, duration: 0.5, stagger: 0.06 }, 0.85)
      intro.fromTo(
        '[data-loader-halo]',
        { scale: 0.65, opacity: 0 },
        { scale: 1.15, opacity: 0.65, duration: 1.5, ease: 'sine.out' },
        0,
      )
      intro.to('[data-loader-halo]', { scale: 1.35, opacity: 0.25, duration: 0.65 }, 1.5)
      if (path) {
        const length = path.getTotalLength()
        intro.fromTo(
          path,
          { strokeDasharray: length, strokeDashoffset: length },
          { strokeDashoffset: 0, duration: 1.3, ease: 'power2.inOut' },
          0.65,
        )
      }
      intro.from(
        '[data-loader-dot]',
        { scale: 0, transformOrigin: 'center', duration: 0.45, stagger: 0.55 },
        0.65,
      )
      intro.from('[data-loader-copy]', { y: 16, opacity: 0, duration: 0.6 }, 1.05)
      finishRef.current = () => {
        if (disposed || exiting) return
        exiting = true
        intro.kill()
        context.add(() => {
          gsap
            .timeline({
              onComplete: () => {
                if (!disposed) onComplete()
              },
            })
            .to('[data-loader-content]', { y: -40, opacity: 0, duration: 0.4, ease: 'power2.in' })
            .to(root, { yPercent: -100, duration: 0.8, ease: 'power4.inOut' }, 0.15)
        })
      }
    }, root)
    const timers: ReturnType<typeof setTimeout>[] = []
    const delay = (ms: number) =>
      new Promise<void>((resolve) => {
        timers.push(setTimeout(resolve, ms))
      })
    const image = document.querySelector<HTMLImageElement>('main img[fetchpriority="high"]')
    let detachImage = () => {}
    const imageReady =
      !image || image.complete
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            const done = () => {
              detachImage()
              resolve()
            }
            detachImage = () => {
              image.removeEventListener('load', done)
              image.removeEventListener('error', done)
            }
            image.addEventListener('load', done, { once: true })
            image.addEventListener('error', done, { once: true })
          })
    void Promise.all([
      delay(2300),
      Promise.race([Promise.allSettled([document.fonts.ready, imageReady]), delay(3500)]),
    ]).then(() => {
      if (!disposed) finishRef.current()
    })
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') finishRef.current()
    }
    const preferenceChange = () => {
      if (reduced.matches) onComplete()
    }
    document.addEventListener('keydown', escape)
    reduced.addEventListener('change', preferenceChange)
    return () => {
      disposed = true
      timers.forEach(clearTimeout)
      detachImage()
      document.removeEventListener('keydown', escape)
      reduced.removeEventListener('change', preferenceChange)
      context.revert()
      document.body.style.overflow = previousOverflow
    }
  }, [onComplete])

  return (
    <>
      <noscript>
        <style>{'.mr-preloader { display: none !important; }'}</style>
      </noscript>
      <div
        ref={ref}
        className={`mr-preloader ${styles.overlay}`}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label="Preparing Miraee"
      >
        <div className={styles.glow} aria-hidden="true" />
        <div data-loader-content className={styles.content}>
          <div className={styles.logoStage}>
            <span data-loader-halo className={styles.halo} aria-hidden="true" />
            <div
              data-loader-logo
              className={styles.logo}
              dangerouslySetInnerHTML={{ __html: logoMarkup }}
            />
          </div>
          <svg className={styles.route} viewBox="0 0 600 170" aria-hidden="true" focusable="false">
            <path className={styles.guide} d="M30 120C140 120 145 30 290 50S440 150 570 60" />
            <path
              data-loader-route
              className={styles.line}
              d="M30 120C140 120 145 30 290 50S440 150 570 60"
            />
            {[
              { x: 30, y: 120 },
              { x: 290, y: 50 },
              { x: 570, y: 60 },
            ].map((point) => (
              <circle
                data-loader-dot
                key={point.x}
                cx={point.x}
                cy={point.y}
                r="7"
                className={styles.dot}
              />
            ))}
          </svg>
          <div data-loader-copy>
            <p className={styles.title}>Every journey starts here.</p>
            <p className={styles.status} role="status">
              Preparing your Miraee experience
            </p>
          </div>
        </div>
        <span className={styles.footer} aria-hidden="true">
          Travel. Policy. Finance. Connected.
        </span>
      </div>
    </>
  )
}
