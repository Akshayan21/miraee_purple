import * as React from 'react'
import { Link } from 'react-router-dom'

import { LedgerPanel, LEDGER } from '@/components/art/product'
import { ReviewButton, SignupButton } from '@/components/glass/ui'
import { HOME, BUTTONS } from '@/content/site'
import { gsap, SplitText } from '@/lib/gsap'
import { introReady } from '@/lib/intro'
import { useMotion } from '@/lib/motion'

/** Home hero: a bento that assembles tile by tile, with a cursor-tilted phone and parallax depth. */
export function HeroBento() {
  const ref = React.useRef<HTMLDivElement>(null)

  useMotion(
    ref,
    ({ desktop, root }) => {
      const tiles = gsap.utils.toArray<HTMLElement>('[data-hero]', root)
      const h1 = root.querySelector<HTMLElement>('h1')
      const fresh = root.querySelectorAll<HTMLElement>('[data-hero-in]')
      let split: SplitText | undefined
      let alive = true
      let tl: gsap.core.Timeline | undefined

      gsap.set(tiles, {
        autoAlpha: 0,
        y: 70,
        scale: 0.88,
        rotationX: -14,
        transformPerspective: 900,
        transformOrigin: '50% 100%',
      })
      gsap.set(fresh, { autoAlpha: 0, y: 18 })
      if (h1) {
        split = SplitText.create(h1, { type: 'lines,words', mask: 'lines', linesClass: 'ln' })
        gsap.set(split.words, { yPercent: 110 })
      }

      introReady().then(() => {
        if (!alive) return
        tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        tl.to(tiles, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1.1,
          stagger: { each: 0.09, from: 'start' },
          clearProps: 'transform',
        })
        if (split) tl.to(split.words, { yPercent: 0, duration: 0.9, stagger: 0.035 }, 0.25)
        tl.to(fresh, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.08 }, 0.7)
        tl.fromTo(
          '.hero-chip',
          { autoAlpha: 0, scale: 0.6 },
          { autoAlpha: 1, scale: 1, duration: 0.6, stagger: 0.15, ease: 'back.out(2)' },
          1,
        )
      })

      // Float: the phone and its chips breathe.
      const phone = root.querySelector<HTMLElement>('.hero-phone-in')
      if (phone)
        gsap.to(phone, { y: -10, duration: 3.2, yoyo: true, repeat: -1, ease: 'sine.inOut' })
      root.querySelectorAll<HTMLElement>('.hero-chip').forEach((c, i) => {
        gsap.to(c, {
          y: i % 2 ? 9 : -9,
          duration: 2.6 + i * 0.4,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
        })
      })

      let off: (() => void) | undefined
      if (desktop) {
        const tilt = root.querySelector<HTMLElement>('.hero-phone-tilt')
        const depth = gsap.utils.toArray<HTMLElement>('[data-depth]', root)
        const rx = tilt
          ? gsap.quickTo(tilt, 'rotationX', { duration: 0.7, ease: 'power3.out' })
          : null
        const ry = tilt
          ? gsap.quickTo(tilt, 'rotationY', { duration: 0.7, ease: 'power3.out' })
          : null
        if (tilt) gsap.set(tilt, { transformPerspective: 1000 })
        const movers = depth.map((el) => ({
          x: gsap.quickTo(el, 'x', { duration: 0.9, ease: 'power3.out' }),
          y: gsap.quickTo(el, 'y', { duration: 0.9, ease: 'power3.out' }),
          d: Number(el.dataset.depth),
        }))
        const move = (e: PointerEvent) => {
          const r = root.getBoundingClientRect()
          const px = (e.clientX - r.left) / r.width - 0.5
          const py = (e.clientY - r.top) / r.height - 0.5
          ry?.(px * 26)
          rx?.(-py * 18)
          movers.forEach((m) => {
            m.x(-px * m.d)
            m.y(-py * m.d)
          })
        }
        const leave = () => {
          rx?.(0)
          ry?.(0)
          movers.forEach((m) => {
            m.x(0)
            m.y(0)
          })
        }
        root.addEventListener('pointermove', move)
        root.addEventListener('pointerleave', leave)
        off = () => {
          root.removeEventListener('pointermove', move)
          root.removeEventListener('pointerleave', leave)
        }
        // Scroll parallax: the cutout tiles drift against the page.
        gsap.to('.hero-lead img', {
          yPercent: -6,
          ease: 'none',
          scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', scrub: true },
        })
        gsap.to('.hero-phone', {
          yPercent: -5,
          ease: 'none',
          scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', scrub: true },
        })
      }

      return () => {
        alive = false
        tl?.kill()
        off?.()
        split?.revert()
      }
    },
    [],
  )

  const h = HOME.hero
  return (
    <section className="hero-sec" aria-labelledby="hero-h">
      <div className="wrap">
        <div className="hero" ref={ref}>
          <div className="tile hero-a" data-hero>
            <p className="eyebrow" data-hero-in>
              {h.eyebrow}
            </p>
            <h1 className="disp h-xl" id="hero-h">
              {h.headline}
            </h1>
            <p className="lead" data-hero-in>
              {h.sub}
            </p>
            <div className="row" data-hero-in>
              <SignupButton variant="pri" />
              <ReviewButton variant="sec" />
              <Link to="/how-it-works" className="gb gb--link">
                {BUTTONS.how}
              </Link>
            </div>
            <p className="small" data-hero-in>
              {h.note}
            </p>
          </div>

          <div className="tile tile--tint hero-phone" data-hero>
            <span className="hero-ring" aria-hidden="true" />
            <div className="hero-phone-tilt">
              <div className="hero-phone-in">
                <img
                  src="/img/hero-app-phone.webp"
                  width="800"
                  height="1422"
                  alt="The Miraee assistant on a phone, showing flight options for a trip."
                  decoding="async"
                />
              </div>
            </div>
            <span className="hero-chip hero-chip--a pill pill--ok" data-depth="26">
              In policy
            </span>
            <span className="hero-chip hero-chip--b pill" data-depth="38">
              Booked to Sales events
            </span>
          </div>

          <div className="tile hero-cut hero-lead" data-hero data-depth="10">
            <span className="cut-orb" aria-hidden="true" />
            <span className="pill cut-tag">Finance</span>
            <img
              src="/img/px37409441-finance-leader.webp"
              width="977"
              height="1100"
              alt="A finance lead smiling, arms resting on a report."
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="tile hero-ledger" data-hero>
            <LedgerPanel compact rows={LEDGER.slice(0, 3)} />
          </div>

          <div className="tile tile--plum hero-trust" data-hero>
            <span className="trust-dot" aria-hidden="true" />
            <p className="p">{h.trust}</p>
          </div>

          <div className="tile hero-cut hero-trav" data-hero data-depth="14">
            <span className="cut-orb cut-orb--b" aria-hidden="true" />
            <span className="pill cut-tag">Traveler</span>
            <img
              src="/img/px15959733-traveler-red-coat.webp"
              width="880"
              height="1100"
              alt="A traveler in a red coat on the road."
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
