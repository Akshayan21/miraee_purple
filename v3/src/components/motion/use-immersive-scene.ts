import { useEffect, type RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

/** Scoped travel-story choreography. Content stays visible without JavaScript. */
export function useImmersiveScene(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    const host = ref.current
    if (!host) return
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)
    const media = gsap.matchMedia()
    media.add(
      {
        all: '(min-width: 0px)',
        reduced: '(prefers-reduced-motion: reduce)',
        desktop: '(min-width: 1024px) and (hover: hover) and (pointer: fine)',
      },
      (context) => {
        if (context.conditions?.reduced) return
        const path = host.querySelector<SVGPathElement>('[data-flight-path]')
        const plane = host.querySelector('[data-flight-plane]')
        const markers = host.querySelectorAll('[data-flight-marker]')
        const cards = host.querySelectorAll('[data-story-card]')
        const stage = host.querySelector<HTMLElement>('[data-depth-stage]')
        if (!path || !plane || !stage) return
        const length = path.getTotalLength()
        const desktop = context.conditions?.desktop
        const timeline = gsap.timeline({
          defaults: { ease: 'power2.inOut' },
          scrollTrigger: desktop
            ? { trigger: host, start: 'top 75%', end: 'bottom 55%', scrub: 0.8 }
            : { trigger: stage, start: 'top 85%', once: true },
        })
        timeline.fromTo(
          path,
          { strokeDasharray: length, strokeDashoffset: length },
          { strokeDashoffset: 0, duration: 3, ease: 'none' },
          0,
        )
        timeline.fromTo(plane, { opacity: 0 }, { opacity: 1, duration: 0.25 }, 0)
        timeline.to(
          plane,
          {
            motionPath: { path, align: path, alignOrigin: [0.5, 0.5], autoRotate: true },
            duration: 3,
            ease: 'none',
          },
          0,
        )
        timeline.fromTo(
          markers,
          { scale: 0.65, opacity: 0.4, transformOrigin: 'center' },
          { scale: 1, opacity: 1, stagger: 0.65, duration: 0.55 },
          0,
        )
        timeline.fromTo(
          cards,
          { y: desktop ? 42 : 16, opacity: 0.35 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.4 },
          0.4,
        )
        if (!desktop) return
        // Reuse setters; never allocate a tween per pointer event.
        const tiltX = gsap.quickTo(stage, 'rotationX', { duration: 0.8, ease: 'power3.out' })
        const tiltY = gsap.quickTo(stage, 'rotationY', { duration: 0.8, ease: 'power3.out' })
        gsap.set(stage, { transformPerspective: 1400 })
        let bounds = stage.getBoundingClientRect()
        const enter = () => {
          bounds = stage.getBoundingClientRect()
        }
        const move = (event: PointerEvent) => {
          tiltY(gsap.utils.clamp(-5, 5, ((event.clientX - bounds.left) / bounds.width - 0.5) * 10))
          tiltX(gsap.utils.clamp(-4, 4, -((event.clientY - bounds.top) / bounds.height - 0.5) * 8))
        }
        const leave = () => {
          tiltX(0)
          tiltY(0)
        }
        stage.addEventListener('pointerenter', enter)
        stage.addEventListener('pointermove', move)
        stage.addEventListener('pointerleave', leave)
        return () => {
          stage.removeEventListener('pointerenter', enter)
          stage.removeEventListener('pointermove', move)
          stage.removeEventListener('pointerleave', leave)
        }
      },
      host,
    )
    return () => media.revert()
  }, [ref])
}
