import { afterIntro, gsap, useMotion } from '@/lib/motion'
import { LedgerCard } from './ledger-card'
import { TRIPS } from './sample'

/**
 * Hero collage: the finance view drawn as an ink-outlined card, a finance lead on a tangerine arch and a traveler on an
 * ink halftone disc, all cut from paper. Layers drift at different speeds as you scroll and follow the pointer a little.
 */
export function HeroArt() {
  const ref = useMotion<HTMLDivElement>((el, c) => {
    const q = gsap.utils.selector(el)
    const layers = q<HTMLElement>('[data-depth]')

    // Entrance, after the intro curtain.
    const tl = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } })
    tl.from(q('.ha__arch'), {
      scaleY: 0,
      transformOrigin: 'bottom center',
      duration: 0.9,
      ease: 'power4.out',
    })
      .from(q('.ha__disc'), { scale: 0.3, opacity: 0, duration: 0.9, ease: 'back.out(1.6)' }, 0.1)
      .from(q('.ha__p1'), { yPercent: 14, opacity: 0, duration: 1, ease: 'power4.out' }, 0.25)
      .from(q('.ha__p2'), { yPercent: 14, opacity: 0, duration: 1, ease: 'power4.out' }, 0.4)
      .from(q('.ha__ledger'), { opacity: 0, yPercent: 10, rotate: 5, duration: 0.9 }, 0.2)
      .from(
        q('.ha__tag'),
        { scale: 0, rotate: -14, duration: 0.5, stagger: 0.15, ease: 'back.out(2.6)' },
        0.9,
      )
    const cancel = afterIntro(() => void tl.play())

    // Slow scroll parallax per layer.
    layers.forEach((l) => {
      const d = parseFloat(l.dataset.depth ?? '0')
      gsap.to(l, {
        y: -d * 90,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top top', end: 'bottom top', scrub: 0.6 },
      })
    })

    // Paper plane on a dashed route.
    let stopPlane = () => {}
    const route = q<SVGPathElement>('.ha__route')[0]
    const plane = q('.ha__plane')[0]
    if (route && plane) {
      gsap.set(plane, { opacity: 0 })
      stopPlane = afterIntro(() => {
        gsap.to(plane, { opacity: 1, duration: 0.4, delay: 1.2 })
        gsap.to(plane, {
          motionPath: { path: route, align: route, alignOrigin: [0.5, 0.5], autoRotate: true },
          duration: 7,
          ease: 'sine.inOut',
          repeat: -1,
          repeatDelay: 1.4,
          delay: 1.2,
        })
      })
    }

    // Pointer parallax (desktop, fine pointer).
    let off = () => {}
    if (c.wide && matchMedia('(hover: hover) and (pointer: fine)').matches) {
      const setters = layers.map((l) => ({
        x: gsap.quickTo(l, 'x', { duration: 0.9, ease: 'power3.out' }),
        y: gsap.quickTo(l, 'rotation', { duration: 0.9, ease: 'power3.out' }),
        d: parseFloat(l.dataset.depth ?? '0'),
      }))
      const move = (e: PointerEvent) => {
        const nx = e.clientX / window.innerWidth - 0.5
        setters.forEach((s) => {
          s.x(nx * 36 * s.d)
          s.y(nx * 1.6 * s.d)
        })
      }
      window.addEventListener('pointermove', move)
      off = () => window.removeEventListener('pointermove', move)
    }
    return () => {
      cancel()
      stopPlane()
      gsap.killTweensOf(q('.ha__plane'))
      off()
    }
  }, [])

  return (
    <div ref={ref} className="ha">
      <div className="ha__ledger" data-depth="0.4" aria-hidden="true">
        <LedgerCard rows={TRIPS.slice(0, 4)} intro />
      </div>
      <div className="ha__arch" data-depth="0.15" aria-hidden="true" />
      <div className="ha__disc" data-depth="0.55" aria-hidden="true" />
      <img
        className="ha__p1"
        data-depth="0.25"
        src="/img/px37409441-finance-leader.webp"
        width="977"
        height="1100"
        alt="A smiling finance lead in a tweed jacket"
      />
      <img
        className="ha__p2"
        data-depth="0.7"
        src="/img/px4173228-traveler-suitcase.webp"
        width="1100"
        height="957"
        alt="A traveler on a call, resting a hand on a suitcase"
      />
      <svg className="ha__route-svg" viewBox="0 0 600 700" aria-hidden="true" data-depth="0.9">
        <path
          className="ha__route"
          d="M8 470 C -30 300, -10 130, 60 40 C 120 -30, 300 -62, 440 -78 C 520 -88, 580 -72, 640 -130"
        />
        <path className="ha__plane" d="M-12 -7 L14 0 L-12 7 L-7 0 Z" />
      </svg>
      <span className="ha__tag ha__tag--a" aria-hidden="true">
        <svg viewBox="0 0 16 16" width="12" height="12">
          <path
            d="M2.5 8.5 6.5 12.5 13.5 3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        In policy
      </span>
      <span className="ha__tag ha__tag--b" aria-hidden="true">
        Receipt matched
      </span>
    </div>
  )
}
