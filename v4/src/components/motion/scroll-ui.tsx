import * as React from 'react'

import { ScrollTrigger, gsap, registerGsap, useIsoLayoutEffect } from '@/lib/motion'

/** Thin tangerine scroll-progress line along the top of the page. */
export function ScrollProgress() {
  const bar = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    registerGsap()
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !bar.current) return
    const tween = gsap.fromTo(
      bar.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.2,
        },
      },
    )
    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [])
  return <div ref={bar} className="ed-progress" aria-hidden="true" />
}

export type Chapter = { id: string; label: string; dark?: boolean; tang?: boolean }

/** Sticky left rail: section index numerals 01..11 with the current one lit and a progress line. Desktop only (CSS). */
export function ChapterRail({ chapters }: { chapters: Chapter[] }) {
  const [active, setActive] = React.useState(0)
  const [dark, setDark] = React.useState(false)
  const [tang, setTang] = React.useState(false)
  const fill = React.useRef<HTMLSpanElement>(null)
  useIsoLayoutEffect(() => {
    registerGsap()
    const ctx = gsap.context(() => {
      chapters.forEach((c, i) => {
        const el = document.getElementById(c.id)
        if (!el) return
        ScrollTrigger.create({
          trigger: el,
          start: 'top 50%',
          end: 'bottom 50%',
          onToggle: (self) => {
            if (self.isActive) {
              setActive(i)
              setDark(!!c.dark)
              setTang(!!c.tang)
            }
          },
        })
      })
      if (fill.current && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.fromTo(
          fill.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: document.body,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 0.3,
            },
          },
        )
      }
    })
    return () => ctx.revert()
  }, [chapters])
  return (
    <nav
      className="ed-rail"
      data-dark={dark || undefined}
      data-tang={tang || undefined}
      aria-label="Sections on this page"
    >
      <span className="ed-rail__line" aria-hidden="true">
        <span ref={fill} className="ed-rail__fill" />
      </span>
      <ol>
        {chapters.map((c, i) => (
          <li key={c.id} data-on={i === active || undefined}>
            <a href={`#${c.id}`} aria-label={`${String(i + 1).padStart(2, '0')} ${c.label}`}>
              <span className="ed-rail__n">{String(i + 1).padStart(2, '0')}</span>
              <span className="ed-rail__t">{c.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
