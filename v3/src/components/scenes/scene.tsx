import * as React from 'react'

import styles from './scene.module.css'

const clamp = (n: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, n))

type SceneProps = React.ComponentProps<'section'> & {
  /**
   * Number of beats in the scene. The scene is `run` viewport heights taller than the screen; the
   * stage stays pinned while it scrolls, and `data-step` (0..steps-1) follows the scroll.
   */
  steps?: number
  /** Extra scroll length in viewport heights (default 100 per step). */
  run?: number
  /** Stage alignment: centred content, or content that fills the screen. */
  fill?: boolean
}

/**
 * A pinned scroll scene. While it is on screen it writes CSS custom properties on itself, so children can
 * animate with plain CSS (no React re-render per frame):
 *   --p    0..1  progress through the pinned run
 *   --in   0..1  how far the scene has entered (top edge from the bottom of the screen to the top)
 *   --out  0..1  how far the scene has left (top edge above the screen, relative to its height)
 *   data-step    the current beat, 0..steps-1
 * Below 1024px, and for reduced-motion visitors, the scene is a normal stacked section with every beat shown.
 */
export function Scene({ steps = 1, run, fill, className, children, style, ...rest }: SceneProps) {
  const ref = React.useRef<HTMLElement>(null)
  const runVh = run ?? steps * 100

  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const wide = window.matchMedia('(min-width: 1024px)')
    let frame = 0
    const settle = () => {
      el.style.setProperty('--p', '1')
      el.style.setProperty('--in', '1')
      el.style.setProperty('--out', '0')
      el.dataset.step = String(steps - 1)
    }
    const update = () => {
      frame = 0
      if (reduced.matches || !wide.matches) return settle()
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const p = clamp(-r.top / Math.max(1, r.height - vh))
      el.style.setProperty('--p', p.toFixed(4))
      el.style.setProperty('--in', clamp(1 - r.top / vh).toFixed(4))
      el.style.setProperty('--out', clamp(-r.top / Math.max(1, r.height)).toFixed(4))
      el.dataset.step = String(Math.min(steps - 1, Math.floor(p * steps)))
    }
    const kick = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', kick, { passive: true })
    window.addEventListener('resize', kick)
    reduced.addEventListener('change', kick)
    wide.addEventListener('change', kick)
    return () => {
      window.removeEventListener('scroll', kick)
      window.removeEventListener('resize', kick)
      reduced.removeEventListener('change', kick)
      wide.removeEventListener('change', kick)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [steps])

  return (
    <section
      ref={ref}
      className={`${styles.scene} mo-skip ${className ?? ''}`}
      style={{ '--run': runVh, ...style } as React.CSSProperties}
      data-step="0"
      {...rest}
    >
      <div className={`${styles.stage} ${fill ? styles.fill : ''}`}>{children}</div>
    </section>
  )
}

/** Counts a figure up when its scene reaches `from` (a 0..1 progress), once. */
export function ScrollNumber({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  className,
}: {
  value: number
  decimals?: number
  prefix?: string
  suffix?: string
  className?: string
}) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const [shown, setShown] = React.useState(value)
  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || typeof IntersectionObserver === 'undefined') return
    setShown(0)
    let raf = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const t0 = performance.now()
        const tick = (now: number) => {
          const t = clamp((now - t0) / 1400)
          setShown(value * (1 - Math.pow(1 - t, 4)))
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.6 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value])
  const text = shown.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
  return (
    <span ref={ref} className={className}>
      {prefix}
      {text}
      {suffix}
    </span>
  )
}
