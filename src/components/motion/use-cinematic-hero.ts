import { useEffect, type RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/** Photograph and route outline have a single owner, separate from ledger choreography. */
export function useCinematicHero(ref: RefObject<HTMLDivElement>) {
  useEffect(() => {
    const backdrop = ref.current
    const hero = backdrop?.closest('section')
    if (!backdrop || !hero) return
    gsap.registerPlugin(ScrollTrigger)
    const media = gsap.matchMedia()
    media.add(
      {
        desktop: '(min-width: 1200px) and (hover: hover) and (pointer: fine)',
        reduced: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        if (!context.conditions?.desktop || context.conditions.reduced) return
        const photo = backdrop.querySelector<HTMLElement>('.hero__photo')
        const line = backdrop.querySelector<SVGPathElement>('.hero__blob-line')
        if (!photo || !line) return
        const pathLength = line.getTotalLength()
        // The outline uses non-scaling strokes, so dash lengths are measured in screen pixels.
        const matrix = line.getScreenCTM()
        let length = pathLength
        if (matrix) {
          length = 0
          let previous = line.getPointAtLength(0)
          for (let i = 1; i <= 100; i++) {
            const point = line.getPointAtLength((pathLength * i) / 100)
            const dx = point.x - previous.x
            const dy = point.y - previous.y
            length += Math.hypot(dx * matrix.a + dy * matrix.c, dx * matrix.b + dy * matrix.d)
            previous = point
          }
        }
        gsap.fromTo(
          line,
          { strokeDasharray: length, strokeDashoffset: length },
          {
            strokeDashoffset: 0,
            duration: 1.8,
            delay: 0.3,
            ease: 'power2.inOut',
            onComplete: () => {
              line.style.strokeDasharray = 'none'
            },
          },
        )
        gsap.fromTo(
          photo,
          { scale: 1.14, opacity: 0.65 },
          { scale: 1.06, opacity: 1, duration: 1.6, ease: 'power3.out' },
        )
        gsap.to(photo, {
          yPercent: 7,
          ease: 'none',
          scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 1 },
        })
        const xTo = gsap.quickTo(photo, 'x', { duration: 1, ease: 'power3.out' })
        let bounds = hero.getBoundingClientRect()
        const enter = () => {
          bounds = hero.getBoundingClientRect()
        }
        const move = (event: PointerEvent) =>
          xTo(gsap.utils.clamp(-12, 12, ((event.clientX - bounds.left) / bounds.width - 0.5) * 24))
        const leave = () => xTo(0)
        hero.addEventListener('pointerenter', enter)
        hero.addEventListener('pointermove', move)
        hero.addEventListener('pointerleave', leave)
        return () => {
          hero.removeEventListener('pointerenter', enter)
          hero.removeEventListener('pointermove', move)
          hero.removeEventListener('pointerleave', leave)
        }
      },
      backdrop,
    )
    return () => media.revert()
  }, [ref])
}
