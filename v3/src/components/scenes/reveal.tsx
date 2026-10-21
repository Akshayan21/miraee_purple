import * as React from 'react'

type RevealProps<T extends React.ElementType> = {
  as?: T
  /** Fraction of the element that must be visible before it plays. */
  threshold?: number
} & Omit<React.ComponentPropsWithoutRef<T>, 'as'>

/**
 * Marks a block that plays its entrance once, when it scrolls into view. It renders visible (so the
 * page reads without script or motion) and only after mounting does it set `data-in="false"` on blocks that
 * are still below the fold, then `"true"` on entry. Style it with `[data-in='false'] .child { ... }`.
 */
export function Reveal<T extends React.ElementType = 'div'>({
  as,
  threshold = 0.25,
  children,
  ...rest
}: RevealProps<T>) {
  const Tag = (as ?? 'div') as React.ElementType
  const ref = React.useRef<HTMLElement>(null)
  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      typeof IntersectionObserver === 'undefined'
    )
      return
    const r = el.getBoundingClientRect()
    if (r.top < window.innerHeight * 0.9 && r.bottom > 0) {
      el.dataset.in = 'true'
      return
    }
    el.dataset.in = 'false'
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.in = 'true'
          io.disconnect()
        }
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return (
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  )
}
