import * as React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

export { gsap, ScrollTrigger, SplitText }

let registered = false
/** Registers the GSAP plugins once, in the browser only (the static build never touches them). */
export function registerGsap() {
  if (registered || typeof window === 'undefined') return
  gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin, ScrambleTextPlugin, MotionPathPlugin)
  registered = true
}

/** Layout effect that is a plain effect during the static build. */
export const useIsoLayoutEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect

export type MotionConditions = { wide: boolean; mobile: boolean }

const QUERIES = {
  ok: '(prefers-reduced-motion: no-preference)',
  wide: '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
  mobile: '(max-width: 767px) and (prefers-reduced-motion: no-preference)',
}

/**
 * Runs `setup` inside gsap.matchMedia, scoped to the returned ref. It only runs when the visitor has not asked
 * for reduced motion, so with reduced motion (or without JavaScript) the server-rendered, fully visible state stays.
 * `setup` may return a cleanup; everything GSAP creates inside it is reverted on unmount or when the query changes.
 */
export function useMotion<T extends HTMLElement = HTMLDivElement>(
  setup: (el: T, c: MotionConditions) => void | (() => void),
  deps: React.DependencyList = [],
) {
  const ref = React.useRef<T>(null)
  useIsoLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    registerGsap()
    const mm = gsap.matchMedia(el)
    mm.add(QUERIES, (ctx) => {
      const c = ctx.conditions as { ok: boolean; wide: boolean; mobile: boolean }
      if (!c.ok) return
      return setup(el, { wide: c.wide, mobile: c.mobile })
    })
    return () => mm.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
  return ref
}

/** Calls `cb` once the page intro has finished (immediately when there is no intro). */
export function afterIntro(cb: () => void) {
  if (typeof document === 'undefined') return () => {}
  if (!document.documentElement.hasAttribute('data-intro')) {
    cb()
    return () => {}
  }
  window.addEventListener('v4:intro-done', cb, { once: true })
  return () => window.removeEventListener('v4:intro-done', cb)
}

/** Plays `play` once when `el` scrolls into view, or when a `v4:play` event is dispatched on it (pinned scenes). */
export function playWhen(el: Element, play: () => void, start = 'top 80%') {
  let done = false
  const go = () => {
    if (done) return
    done = true
    play()
  }
  el.addEventListener('v4:play', go, { once: true })
  if (el.hasAttribute('data-manual')) return
  ScrollTrigger.create({ trigger: el, start, once: true, onEnter: go })
}

/** Types `full` into `el` over `duration` seconds. The final text is set again on completion. */
export function typeInto(el: HTMLElement, full: string, duration: number, vars: gsap.TweenVars = {}) {
  const state = { n: 0 }
  return gsap.fromTo(
    state,
    { n: 0 },
    {
      n: full.length,
      duration,
      ease: 'none',
      ...vars,
      onStart() {
        el.textContent = ''
      },
      onUpdate() {
        el.textContent = full.slice(0, Math.round(state.n))
      },
      onComplete() {
        el.textContent = full
      },
    },
  )
}

/** Counts a number up inside `el`. */
export function countTo(el: HTMLElement, to: number, format: (n: number) => string, duration = 1.4, vars: gsap.TweenVars = {}) {
  const state = { n: 0 }
  return gsap.fromTo(
    state,
    { n: 0 },
    {
      n: to,
      duration,
      ease: 'power3.out',
      ...vars,
      onStart() {
        el.textContent = format(0)
      },
      onUpdate() {
        el.textContent = format(state.n)
      },
      onComplete() {
        el.textContent = format(to)
      },
    },
  )
}

export const money = (n: number) => '$' + Math.round(n).toLocaleString('en-US')
