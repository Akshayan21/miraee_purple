import { ScrollTrigger, gsap, registerGsap, useIsoLayoutEffect } from '@/lib/motion'

/**
 * Scroll reveals for every `[data-rv]` element on the page. The markup is visible by default; the starting
 * (hidden) state is applied here, after mount, and only when motion is allowed.
 *   data-rv           rise and fade
 *   data-rv="stagger" children rise one after another
 *   data-rv="rule"    a hairline draws left to right
 *   data-rv="clip"    an image is uncovered from the top (the picture inside settles from a slight zoom)
 *   data-rv="fade"    fade only
 */
export function useGlobalReveals(key: string) {
  useIsoLayoutEffect(() => {
    registerGsap()
    const mm = gsap.matchMedia()
    mm.add(
      { ok: '(prefers-reduced-motion: no-preference)', mobile: '(max-width: 767px)' },
      (ctx) => {
        const { ok, mobile } = ctx.conditions as { ok: boolean; mobile: boolean }
        if (!ok) return
        const y = mobile ? 20 : 44
        const all = gsap.utils.toArray<HTMLElement>('[data-rv]')
        all.forEach((el) => {
          const kind = el.dataset.rv
          const st = { trigger: el, start: mobile ? 'top 94%' : 'top 90%', once: true }
          if (kind === 'rule') {
            gsap.fromTo(
              el,
              { scaleX: 0, transformOrigin: 'left center' },
              {
                scaleX: 1,
                duration: 1.2,
                ease: 'power3.inOut',
                clearProps: 'transform',
                scrollTrigger: st,
              },
            )
          } else if (kind === 'stagger') {
            gsap.fromTo(
              Array.from(el.children),
              { opacity: 0, y },
              {
                opacity: 1,
                y: 0,
                duration: 0.85,
                ease: 'power3.out',
                stagger: 0.09,
                clearProps: 'opacity,transform',
                scrollTrigger: st,
              },
            )
          } else if (kind === 'clip') {
            gsap.fromTo(
              el,
              { clipPath: 'inset(0 0 100% 0)' },
              {
                clipPath: 'inset(0 0 0% 0)',
                duration: 1.25,
                ease: 'power4.inOut',
                clearProps: 'clipPath',
                scrollTrigger: st,
              },
            )
            const img = el.querySelector('img')
            if (img)
              gsap.fromTo(
                img,
                { scale: 1.18 },
                { scale: 1, duration: 1.6, ease: 'power3.out', scrollTrigger: st },
              )
          } else if (kind === 'fade') {
            gsap.fromTo(
              el,
              { opacity: 0 },
              {
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
                clearProps: 'opacity',
                scrollTrigger: st,
              },
            )
          } else {
            gsap.fromTo(
              el,
              { opacity: 0, y },
              {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: 'power3.out',
                clearProps: 'opacity,transform',
                scrollTrigger: st,
              },
            )
          }
        })
      },
    )
    return () => mm.revert()
  }, [key])
}

/** Re-measure scroll positions once images and fonts have settled. */
export function refreshOnSettle() {
  const go = () => ScrollTrigger.refresh()
  if (document.readyState === 'complete') window.setTimeout(go, 50)
  else window.addEventListener('load', go, { once: true })
  void document.fonts?.ready.then(go)
}
