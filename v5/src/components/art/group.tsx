import * as React from 'react'
import { Link } from 'react-router-dom'

import { HOME } from '@/content/site'
import { gsap } from '@/lib/gsap'
import { tiltOnHover, useMotion } from '@/lib/motion'

const LOGOS: Record<string, { src: string; w: number; h: number }> = {
  Tabhi: { src: '/img/logo-tabhi.png', w: 219, h: 131 },
  Mondee: { src: '/img/logo-mondee.svg', w: 144, h: 30 },
  Abhee: { src: '/img/logo-abhee.webp', w: 640, h: 162 },
}

/** The real group logos. */
export function BrandMark({ name }: { name: string }) {
  const l = LOGOS[name]
  return (
    <span className={`bm bm--${name.toLowerCase()}`}>
      <img src={l.src} width={l.w} height={l.h} alt={name} loading="lazy" decoding="async" />
    </span>
  )
}

export function GroupSection() {
  const g = HOME.group
  const ref = React.useRef<HTMLDivElement>(null)
  useMotion(ref, ({ root, desktop }) => {
    const tiles = gsap.utils.toArray<HTMLElement>('.brand', root)
    tiles.forEach((t, i) => {
      gsap.to(t.querySelector('.brand-float'), {
        y: desktop ? (i % 2 ? 12 : -12) : i % 2 ? 3 : -3,
        rotation: desktop ? (i === 1 ? -1.5 : 1.5) : 0,
        duration: 3 + i * 0.6,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      })
    })
    const offs = desktop
      ? tiles.map((t) => tiltOnHover(t, 9, t.querySelector<HTMLElement>('.brand-tilt')!))
      : []
    gsap.fromTo(
      '.grp-photo img',
      { scale: 1.2 },
      {
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.grp-photo',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      },
    )
    return () => offs.forEach((o) => o())
  })
  return (
    <section className="sec" aria-labelledby="group-h" ref={ref}>
      <div className="wrap">
        <div className="bento">
          <div className="tile s5 grp-text" data-reveal>
            <p className="eyebrow">Tabhi</p>
            <h2 className="disp h-lg" id="group-h">
              {g.headline}
            </h2>
            <p className="lead">{g.body}</p>
            <Link to="/company" className="gb gb--link">
              {g.link}
            </Link>
          </div>
          <div className="tile tile--clear s7 grp-photo" data-reveal>
            <img
              src="/img/px4623080-team.webp"
              width="1067"
              height="641"
              alt="Three colleagues around a tablet, smiling."
              loading="lazy"
              decoding="async"
            />
            <span className="grp-cap pill">The team behind the group</span>
          </div>
          {g.brands.map((b) => (
            <div className="s4 brand" key={b.name} data-reveal>
              <div className="brand-tilt">
                <div className="brand-float tile tile--lift">
                  <BrandMark name={b.name} />
                  <p className="h-sm disp">{b.name}</p>
                  <p className="p">{b.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
