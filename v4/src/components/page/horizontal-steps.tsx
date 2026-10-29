import * as React from 'react'
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'motion/react'

import { ChapterHead } from '@/components/page/kit'
import type { InnerPage } from '@/content/site'

type Section = InnerPage['sections'][number]

/** One step: the numeral, headline and text fade and slide as it passes the centre of the viewport. */
function Step({
  s,
  i,
  n,
  progress,
}: {
  s: Section
  i: number
  n: number
  progress: MotionValue<number>
}) {
  const at = n > 1 ? i / (n - 1) : 0
  const gap = n > 1 ? 1 / (n - 1) : 1
  const range = [at - gap, at, at + gap]
  const opacity = useTransform(progress, range, [0.18, 1, 0.18])
  const scale = useTransform(progress, range, [0.9, 1, 0.9])
  const numX = useTransform(progress, range, [-80, 0, 80])
  const textX = useTransform(progress, range, [120, 0, -120])
  return (
    <li className="ed-hs__step" style={{ flexBasis: `${100 / n}%` }}>
      <motion.div className="ed-hs__card" style={{ opacity, scale }}>
        <motion.span className="ed-hs__n ed-stat" style={{ x: numX }} aria-hidden="true">
          {String(i + 1).padStart(2, '0')}
        </motion.span>
        <motion.div className="ed-hs__text" style={{ x: textX }}>
          <h3 className="ed-hs__t">{s.title}</h3>
          <p className="ed-hs__b">{s.body}</p>
        </motion.div>
      </motion.div>
    </li>
  )
}

/**
 * The numbered steps as a pinned horizontal scroll: the section sticks while vertical scrolling slides the steps sideways.
 * Built with Motion (useScroll, useSpring, useTransform). Phones, reduced-motion users and the first (server) render get the plain list.
 */
export function HorizontalSteps({
  page,
  fallback,
}: {
  page: InnerPage
  fallback: React.ReactNode
}) {
  const reduce = useReducedMotion()
  const [wide, setWide] = React.useState(false)
  React.useEffect(() => {
    const mq = window.matchMedia('(min-width: 900px)')
    const on = () => setWide(mq.matches)
    on()
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  if (!wide || reduce) return <>{fallback}</>
  return <Pinned page={page} />
}

function Pinned({ page }: { page: InnerPage }) {
  const ref = React.useRef<HTMLElement>(null)
  const n = page.sections.length
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.35 })
  const x = useTransform(progress, [0, 1], ['0%', `${-((n - 1) / n) * 100}%`])
  const [active, setActive] = React.useState(0)
  useMotionValueEvent(progress, 'change', (v) =>
    setActive(Math.min(n - 1, Math.max(0, Math.round(v * (n - 1))))),
  )
  return (
    <section
      ref={ref}
      className="ed-ch ed-hs"
      aria-labelledby="lst-h"
      style={{ height: `${n * 80 + 20}vh` }}
    >
      <div className="ed-hs__stage">
        <div className="ed-wrap ed-hs__top">
          <ChapterHead label={page.sectionsLabel ?? page.eyebrow} />
          <h2 id="lst-h" className="mr-sr">
            {page.sectionsLabel ?? `${page.title}: in detail`}
          </h2>
          <div className="ed-hs__bar" aria-hidden="true">
            <span className="ed-hs__count ed-cap">
              {String(active + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
            </span>
            <span className="ed-hs__rail">
              <motion.span className="ed-hs__fill" style={{ scaleX: progress }} />
            </span>
          </div>
        </div>
        <motion.ol className="ed-hs__track" style={{ x, width: `${n * 100}%` }}>
          {page.sections.map((s, i) => (
            <Step key={s.title} s={s} i={i} n={n} progress={progress} />
          ))}
        </motion.ol>
        <p className="ed-hs__hint ed-cap" aria-hidden="true">
          Keep scrolling
        </p>
      </div>
    </section>
  )
}
