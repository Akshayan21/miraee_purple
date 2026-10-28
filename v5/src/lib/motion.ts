import * as React from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

export type MotionCtx = {
  /** True on a wide screen with a mouse (pins, cursor tilt). */
  desktop: boolean
  root: HTMLElement
}

/**
 * Scoped GSAP motion for one component. The setup only runs when the visitor has not asked for reduced
 * motion, so the static markup (always complete) is what reduced-motion visitors and no-JS visitors see.
 * Anything it creates is reverted when the component unmounts or the media query changes.
 */
export function useMotion<T extends HTMLElement>(
  ref: React.RefObject<T>,
  setup: (ctx: MotionCtx) => void | (() => void),
  deps: React.DependencyList = [],
) {
  React.useEffect(() => {
    const root = ref.current
    if (!root) return
    const mm = gsap.matchMedia(root)
    mm.add(
      {
        motion: '(prefers-reduced-motion: no-preference)',
        desktop: '(min-width: 1100px) and (hover: hover) and (pointer: fine)',
      },
      (ctx) => {
        const { motion, desktop } = ctx.conditions as { motion: boolean; desktop: boolean }
        if (!motion) return
        return setup({ desktop, root })
      },
    )
    return () => mm.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

/** Plays `fn` once when `el` scrolls into view (or at once if already there). Returns the trigger. */
export function whenVisible(el: Element, fn: () => void, start = 'top 82%') {
  return ScrollTrigger.create({ trigger: el, start, once: true, onEnter: fn })
}

/** Count a number up inside `el` (formats with suffix). */
export function countUp(el: HTMLElement, to: number, opts: { suffix?: string; duration?: number; decimals?: number } = {}) {
  const o = { v: 0 }
  const { suffix = '', duration = 1.6, decimals = 0 } = opts
  return gsap.to(o, {
    v: to,
    duration,
    ease: 'power3.out',
    onUpdate: () => {
      el.textContent = o.v.toFixed(decimals) + suffix
    },
  })
}

/** Hover tilt for a card with a perspective parent. Returns a cleanup. */
export function tiltOnHover(el: HTMLElement, max = 10, target: HTMLElement = el) {
  const rx = gsap.quickTo(target, 'rotationX', { duration: 0.6, ease: 'power3.out' })
  const ry = gsap.quickTo(target, 'rotationY', { duration: 0.6, ease: 'power3.out' })
  const move = (e: PointerEvent) => {
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    ry(px * max * 2)
    rx(-py * max * 2)
  }
  const leave = () => {
    rx(0)
    ry(0)
  }
  gsap.set(target, { transformPerspective: 900, transformOrigin: '50% 50%' })
  el.addEventListener('pointermove', move)
  el.addEventListener('pointerleave', leave)
  return () => {
    el.removeEventListener('pointermove', move)
    el.removeEventListener('pointerleave', leave)
  }
}

/** Magnetic pull for buttons. */
export function magnetic(el: HTMLElement, strength = 0.28) {
  const x = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' })
  const y = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' })
  const move = (e: PointerEvent) => {
    const r = el.getBoundingClientRect()
    x((e.clientX - (r.left + r.width / 2)) * strength)
    y((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const leave = () => {
    x(0)
    y(0)
  }
  el.addEventListener('pointermove', move)
  el.addEventListener('pointerleave', leave)
  return () => {
    el.removeEventListener('pointermove', move)
    el.removeEventListener('pointerleave', leave)
  }
}
