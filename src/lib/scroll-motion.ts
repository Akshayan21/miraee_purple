/**
 * Scroll motion for the whole site (GSAP + ScrollTrigger).
 *
 * The brief: feel like a well-made product timeline, not a showreel. Short travel, expo-out easing, reveals play once,
 * and scrubbed depth is kept for places where it carries meaning (hero parallax, the "plans change" alert, photographs).
 *
 * `initScrollMotion()` is selector-driven, so every route gets the treatment without per-page wiring. It returns a cleanup
 * that reverts every tween and restores any text it split, which keeps client-side navigation and React StrictMode safe.
 * Nothing runs under prefers-reduced-motion; if this never runs, the page is simply fully visible.
 */
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { HOME_SECTIONS, type Kit } from '@/lib/home-motion'

const EASE = 'power3.out'
const HERO = 'section[aria-labelledby="hero-h"]'
/** Hero pieces animated by CSS keyframes in site.css; the intro below leaves them alone. */
const CSS_ANIMATED = '.hero__person, .hero__card, .hero__toast'

const qa = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document): T[] =>
  Array.from(root.querySelectorAll<T>(sel))

/** Dialogs, the FAQ accordion (own reveal) and sections with their own choreography (home-motion.ts) are left to their owners. */
const skip = (el: Element) =>
  !!el.closest('dialog, [role="dialog"], .mo-skip, .faq-acc__list, [data-mo-custom]')

/** Elements that nest inside another match are dropped, so a card and its rows are never both revealed. */
const outermost = (els: HTMLElement[]) =>
  els.filter((e) => !els.some((o) => o !== e && o.contains(e)))

export function initScrollMotion(): () => void {
  if (typeof window === 'undefined') return () => {}
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.remove('mo-pre')
    return () => {}
  }

  gsap.registerPlugin(ScrollTrigger)
  /* Mobile browsers resize the viewport as the address bar slides; do not rebuild every trigger when that happens. */
  ScrollTrigger.config({ ignoreMobileResize: true })
  const root = document.documentElement
  const restore: Array<() => void> = []
  const added: HTMLElement[] = []

  const ctx = gsap.context(() => {})
  /** Run later (inside a ScrollTrigger callback) while keeping the tweens it makes revertable. */
  const rec = (fn: () => void) => {
    // A batch can enter synchronously inside a matchMedia context. Detach it before
    // recording in the route context so GSAP never nests an ancestor in its child.
    ctx.ignore(() => ctx.add(fn))
  }

  ctx.add(() => {
    root.classList.add('mo')
    const mm = gsap.matchMedia()
    restore.push(() => mm.revert())

    /* Home sections that get bespoke choreography are tagged first, so the generic passes below leave them alone. */
    const isHome = window.location.pathname === '/'
    const customs = isHome
      ? qa('section[aria-labelledby]').filter(
          (sec) => HOME_SECTIONS[sec.getAttribute('aria-labelledby') ?? ''],
        )
      : []
    customs.forEach((sec) => sec.setAttribute('data-mo-custom', ''))
    restore.push(() => customs.forEach((sec) => sec.removeAttribute('data-mo-custom')))

    const hero = document.querySelector<HTMLElement>(HERO)
    const inHero = (el: Element) => !!hero && hero.contains(el)

    /* ---- Words: split a plain-text heading into masked words ---- */
    const splitWords = (el: HTMLElement): HTMLElement[] => {
      if (el.children.length || el.dataset.moSplit) return []
      const text = (el.textContent ?? '').trim()
      if (!text) return []
      const html = el.innerHTML
      const prevLabel = el.getAttribute('aria-label')
      el.dataset.moSplit = '1'
      el.setAttribute('aria-label', text)
      el.textContent = ''
      const words = text.split(/\s+/)
      const inner = words.map((w, i) => {
        const wrap = document.createElement('span')
        wrap.className = 'mo-w'
        wrap.setAttribute('aria-hidden', 'true')
        const span = document.createElement('span')
        span.className = 'mo-wi'
        span.textContent = w
        wrap.appendChild(span)
        el.appendChild(wrap)
        if (i < words.length - 1) el.appendChild(document.createTextNode(' '))
        return span
      })
      restore.push(() => {
        el.innerHTML = html
        delete el.dataset.moSplit
        if (prevLabel === null) el.removeAttribute('aria-label')
        else el.setAttribute('aria-label', prevLabel)
      })
      return inner
    }

    /* ---- 1. Reading progress: a thin orange rule at the top of the viewport ---- */
    const bar = document.createElement('div')
    bar.className = 'mo-progress'
    bar.setAttribute('aria-hidden', 'true')
    document.body.appendChild(bar)
    added.push(bar)
    gsap.set(bar, { scaleX: 0, transformOrigin: '0 50%' })
    const setBar = gsap.quickTo(bar, 'scaleX', { duration: 0.25, ease: 'power2.out' })
    ScrollTrigger.create({ start: 0, end: 'max', onUpdate: (self) => setBar(self.progress) })

    /* ---- 2. Header: gains a shadow past the fold, tucks away going down, returns going up ---- */
    const head = document.querySelector<HTMLElement>('.site-head')
    if (head) {
      let shown = true
      const show = (v: boolean) => {
        shown = v
        gsap.to(head, {
          yPercent: v ? 0 : -100,
          duration: 0.5,
          ease: 'power3.out',
          overwrite: 'auto',
        })
      }
      ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: (self) => {
          const y = self.scroll()
          head.classList.toggle('is-scrolled', y > 24)
          const menuOpen = !!head.querySelector('[aria-expanded="true"]')
          const want = !(
            self.direction === 1 &&
            y > 360 &&
            !menuOpen &&
            !head.contains(document.activeElement)
          )
          if (want !== shown) show(want)
        },
      })
      const onFocus = () => {
        if (!shown) show(true)
      }
      head.addEventListener('focusin', onFocus)
      restore.push(() => {
        head.removeEventListener('focusin', onFocus)
        head.classList.remove('is-scrolled')
        gsap.killTweensOf(head)
        gsap.set(head, { clearProps: 'transform' })
      })
    }

    /* ---- 3. Hero intro ---- */
    if (hero) {
      const h1 = hero.querySelector<HTMLElement>('h1')
      const words = h1 ? splitWords(h1) : []
      const lines = outermost(
        qa(
          '.crumbs, .mr-eyebrow, .mr-lead, .mr-btn-row, .hero__points, .hero__trust, .lf-meta',
          hero,
        ),
      )
      const visuals = outermost(
        qa(
          '.lf-hero__person, .compose__person, .page-hero__visual, .lf-hero__visual, .compose__card, .core-hero .split__visual',
          hero,
        ).filter((e) => !e.matches(CSS_ANIMATED)),
      )

      const tl = gsap.timeline({ defaults: { ease: EASE }, delay: 0.05 })
      if (h1) gsap.set(h1, { opacity: 1 })
      if (words.length) {
        gsap.set(words, { yPercent: 115 })
        tl.to(words, { yPercent: 0, duration: 0.7, stagger: 0.035 }, 0)
      }
      if (lines.length) {
        gsap.set(lines, { opacity: 0, y: 22 })
        tl.to(lines, { opacity: 1, y: 0, duration: 1, stagger: 0.06 }, 0.25)
      }
      visuals.forEach((v, i) => {
        gsap.set(v, { opacity: 0, x: 40, scale: 1.03, transformOrigin: '50% 100%' })
        tl.to(v, { opacity: 1, x: 0, scale: 1, duration: 1.3 }, 0.3 + i * 0.22)
      })
    }
    root.classList.remove('mo-pre')

    /* ---- 4. Section headings: words rise out of a mask ---- */
    qa('.mr-h2, .mr-h1').forEach((h) => {
      if (skip(h) || inHero(h)) return
      const w = splitWords(h)
      if (!w.length) return
      h.setAttribute('data-mo', '')
      gsap.set(w, { yPercent: 115 })
      ScrollTrigger.create({
        trigger: h,
        start: 'top 88%',
        once: true,
        onEnter: () =>
          rec(() => void gsap.to(w, { yPercent: 0, duration: 0.65, ease: EASE, stagger: 0.04 })),
      })
    })

    /* ---- 5. Generic reveals: fade and rise, batched so siblings cascade ---- */
    const REVEAL = [
      '.mr-eyebrow',
      '.mr-h3',
      '.mr-body',
      '.mr-lead',
      '.context',
      '.list-title',
      '.list li',
      '.stat-line',
      '.link-row',
      '.mr-btn-row',
      '.icon-row li',
      '.sources li',
      '.crumbs',
      '.lf-prose > *',
      '.lf-card',
      '.lf-toc',
      '.qa',
      '.compare-wrap',
      '.gtable',
      '.small-print',
      '.mr-caption',
      '.fig-cap',
      '.step',
      '.task',
      '.match__card',
      '.mock',
      '.duo__head',
      '.duo__body',
      '.faq-acc__head',
      '.mr-footer__brand',
      '.mr-footer nav',
      '.mr-h2:not([data-mo])',
    ].join(',')
    const INNER =
      '.ui-rule, .fl, .audit li, .mr-ledger tbody tr, .mr-trip-tag dl > *, .mock__btn, .match__label, .dash__head'

    const candidates = qa(REVEAL).filter(
      (el) => !skip(el) && !inHero(el) && !el.hasAttribute('data-mo'),
    )
    candidates.forEach((el) => el.setAttribute('data-mo', ''))
    restore.push(() => qa('[data-mo]').forEach((el) => el.removeAttribute('data-mo')))
    const reveal = candidates.filter((el) => !el.parentElement?.closest('[data-mo]'))
    const isBlock = (el: Element) =>
      el.matches('.step, .task, .lf-card, .match__card, .mock, .compare-wrap, .gtable')

    reveal.forEach((el) => {
      gsap.set(el, { opacity: 0, y: 20 })
      /* blocks (steps, tasks, cards) lift up from a slight backward tilt */
      if (isBlock(el))
        gsap.set(el, { transformPerspective: 1000, transformOrigin: '50% 100%', rotationX: 4 })
      const inner = qa(INNER, el)
      if (inner.length) gsap.set(inner, { opacity: 0 })
    })
    ScrollTrigger.batch(reveal, {
      start: 'top 90%',
      once: true,
      interval: 0.08,
      batchMax: 6,
      onEnter: (batch) =>
        rec(() => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.65,
            ease: EASE,
            stagger: 0.06,
            overwrite: 'auto',
          })
          batch.forEach((el) => {
            const rows = qa(INNER, el as HTMLElement)
            if (rows.length)
              gsap.fromTo(
                rows,
                { opacity: 0, y: 14 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.07, delay: 0.25 },
              )
          })
        }),
    })

    /* ---- 7. Count-up for dollar figures ---- */
    const MONEY = /^\$([\d,]+)(\.\d+)?$/
    const countUp = (scope: HTMLElement) => {
      qa('.mr-num, dd, .mr-trip-tag__total', scope).forEach((el) => {
        const first = el.firstChild
        const tn =
          first?.nodeType === Node.TEXT_NODE
            ? first
            : first instanceof HTMLElement && first.classList.contains('mr-circled')
              ? first.firstChild
              : null
        if (!tn || tn.nodeType !== Node.TEXT_NODE || el.dataset.moCounted) return
        const m = (tn.nodeValue ?? '').trim().match(MONEY)
        if (!m) return
        el.dataset.moCounted = '1'
        const target = parseFloat(m[1].replace(/,/g, '') + (m[2] ?? ''))
        const dec = m[2] ? m[2].length - 1 : 0
        const holder = tn.parentElement as HTMLElement
        const prevMin = holder.style.minWidth
        holder.style.minWidth = `${holder.offsetWidth}px`
        const o = { v: 0 }
        tn.nodeValue = `$${(0).toFixed(dec)}`
        restore.push(() => {
          tn.nodeValue = m[0]
          holder.style.minWidth = prevMin
          delete el.dataset.moCounted
        })
        gsap.to(o, {
          v: target,
          duration: 1.6,
          ease: 'power3.out',
          delay: 0.35,
          onUpdate: () => {
            tn.nodeValue = `$${o.v.toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec })}`
          },
          onComplete: () => {
            tn.nodeValue = m[0]
            holder.style.minWidth = prevMin
          },
        })
      })
    }

    /* ---- 6. Product cards sitting on photographs ---- */
    const cards = outermost(
      qa('.compose__card, .mr-ledger-wrap, .mr-trip-tag').filter(
        (el) => !skip(el) && !inHero(el) && !el.closest('[data-mo]'),
      ),
    )
    const setupCard = (card: HTMLElement) => {
      const rows = qa(INNER, card)
      const host = card.closest<HTMLElement>('.compose') ?? card
      const person = host.querySelector<HTMLElement>('.compose__person')
      gsap.set(card, { opacity: 0, y: 24 })
      if (person) gsap.set(person, { opacity: 0, y: 20, scale: 1.04, transformOrigin: '50% 100%' })
      if (rows.length) gsap.set(rows, { opacity: 0 })
      ScrollTrigger.create({
        trigger: host,
        start: 'top 78%',
        once: true,
        onEnter: () =>
          rec(() => {
            const t = gsap.timeline({ defaults: { ease: EASE } })
            if (person) t.to(person, { opacity: 1, y: 0, scale: 1, duration: 1.4 }, 0)
            t.to(card, { opacity: 1, y: 0, duration: 1.2 }, person ? 0.25 : 0)
            if (rows.length)
              t.to(
                rows,
                { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08 },
                '>-0.6',
              )
            countUp(card)
          }),
      })
    }
    cards.forEach(setupCard)
    /* Cards on photographs swing in on their vertical axis; a trip record also gets earlier records fanned out behind it. */
    cards.forEach((card) => {
      const host = card.closest<HTMLElement>('.compose')
      if (!host || card.matches('.phone--alert')) return
      if (card.querySelector('.mr-trip-tag')) {
        card.classList.add('mo-stack')
        restore.push(() => card.classList.remove('mo-stack'))
        gsap.set(card, {
          transformPerspective: 1000,
          transformOrigin: '50% 100%',
          rotationX: 8,
          '--s': 0,
        })
        gsap.to(card, {
          rotationX: 0,
          '--s': 1,
          ease: 'none',
          scrollTrigger: { trigger: host, start: 'top 80%', end: 'top 22%', scrub: 0.9 },
        })
      } else {
        gsap.fromTo(
          card,
          {
            transformPerspective: 1100,
            rotationY: window.matchMedia('(max-width: 1023px)').matches ? 0 : -8,
          },
          {
            rotationY: 0,
            ease: 'none',
            scrollTrigger: { trigger: host, start: 'top 85%', end: 'top 30%', scrub: 0.9 },
          },
        )
      }
    })
    /* hero ledger: its own cascade once the CSS entrance has finished */
    if (hero) {
      qa('.hero__card', hero).forEach((card) => {
        const rows = qa('.mr-ledger tbody tr', card)
        if (rows.length) gsap.set(rows, { opacity: 0 })
        gsap.to(rows, { opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.12, delay: 0.9 })
        gsap.delayedCall(0.9, () => rec(() => countUp(card)))
      })
    }

    /* ---- 8. Circled figures: the hand-drawn Line is wiped in left to right ---- */
    const setupCircle = (line: SVGElement, delay = 1.2) => {
      gsap.set(line, { clipPath: 'inset(-20% 100% -20% -10%)' })
      ScrollTrigger.create({
        trigger: line.parentElement as Element,
        start: 'top 85%',
        once: true,
        onEnter: () =>
          rec(
            () =>
              void gsap.to(line, {
                clipPath: 'inset(-20% -10% -20% -10%)',
                duration: 0.65,
                ease: 'power2.inOut',
                delay,
              }),
          ),
      })
    }
    qa<SVGElement>('.mr-circled > .mr-line').forEach((line) => {
      if (skip(line)) return
      setupCircle(line, inHero(line) ? 1.4 : 1.2)
    })

    /* ---- 9. Photographs: wipe open, then settle with a slow scale ---- */
    qa('.mr-frame, .lf-card__img, .closing__photo').forEach((fr) => {
      if (skip(fr) || inHero(fr)) return
      const img = fr.querySelector('img')
      if (!img) return
      if (!fr.classList.contains('closing__photo')) {
        gsap.set(fr, { clipPath: 'inset(0 0 100% 0)' })
        ScrollTrigger.create({
          trigger: fr,
          start: 'top 85%',
          once: true,
          onEnter: () =>
            rec(
              () =>
                void gsap.to(fr, {
                  clipPath: 'inset(0 0 0% 0)',
                  duration: 1.3,
                  ease: 'expo.inOut',
                }),
            ),
        })
      }
      if (fr.classList.contains('closing__photo')) {
        /* the closing photograph stands up from a tilted plane */
        gsap.set(fr, { transformPerspective: 1300, transformOrigin: '50% 100%', rotationX: 6 })
        gsap.to(fr, {
          rotationX: 0,
          ease: 'none',
          scrollTrigger: { trigger: fr, start: 'top bottom', end: 'top 50%', scrub: 0.8 },
        })
      }
      gsap.fromTo(
        img,
        { scale: 1.06 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: { trigger: fr, start: 'top bottom', end: 'center center', scrub: 0.6 },
        },
      )
    })

    /* ---- 10. Closing line draws as the footer photo arrives ---- */
    qa<SVGElement>('.closing__photo .mr-line').forEach((line) => {
      gsap.set(line, { clipPath: 'inset(0 100% 0 0)' })
      gsap.to(line, {
        clipPath: 'inset(0 0% 0 0)',
        ease: 'none',
        scrollTrigger: {
          trigger: line.parentElement as Element,
          start: 'top 85%',
          end: 'bottom 55%',
          scrub: 0.8,
        },
      })
    })

    /* ---- 11. "When plans change": the alert plays out as you scroll ---- */
    qa('.phone--alert').forEach((phone) => {
      if (skip(phone)) return
      const host = phone.closest<HTMLElement>('.compose') ?? phone
      const alert = phone.querySelector<HTMLElement>('.mr-alert')
      const opts = qa('.mr-option', phone)
      const tick = phone.querySelector<SVGElement>('.mr-option__tick')
      const btn = phone.querySelector<HTMLElement>('.mr-btn')
      const cap = phone.querySelector<HTMLElement>('.phone__cap')
      const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        scrollTrigger: { trigger: host, start: 'top 85%', once: true },
      })
      gsap.set(phone, { transformPerspective: 1100, rotationY: -8 })
      tl.to(phone, { rotationY: 0, duration: 1.2 }, 0)
      if (alert) {
        gsap.set(alert, { opacity: 0, y: -24, animation: 'none' })
        tl.to(alert, { opacity: 1, y: 0, duration: 1 })
      }
      if (opts.length) {
        gsap.set(opts, { opacity: 0, y: 24 })
        tl.to(opts, { opacity: 1, y: 0, duration: 0.5, stagger: 0.12 }, '>-0.3')
      }
      if (tick) {
        gsap.set(tick, { clipPath: 'inset(0 100% 0 0)' })
        tl.to(tick, { clipPath: 'inset(0 0% 0 0)', duration: 0.8 })
      }
      if (btn) {
        gsap.set(btn, { opacity: 0, y: 16 })
        tl.to(btn, { opacity: 1, y: 0, duration: 0.8 })
      }
      if (cap) {
        gsap.set(cap, { opacity: 0 })
        tl.to(cap, { opacity: 1, duration: 0.6 })
      }
    })

    /* ---- 12. Depth: parallax on large screens only ---- */
    mm.add('(min-width: 1200px) and (hover: hover) and (pointer: fine)', () => {
      if (hero) {
        const trigger = { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.6 }
        qa('.hero__person, .lf-hero__person', hero).forEach((p) =>
          gsap.to(p, { y: 24, ease: 'none', scrollTrigger: trigger }),
        )
        qa('.hero__card, .hero__toast', hero).forEach((c) =>
          gsap.to(c, { y: -12, ease: 'none', scrollTrigger: trigger }),
        )
        /* The hero composition is a real stack in depth (photo, ledger, toast); it turns slightly as you scroll past. */
        const stage = hero.querySelector<HTMLElement>('.hero__visual')
        if (stage) {
          gsap.set(stage, { transformPerspective: 1500, transformOrigin: '35% 70%' })
          gsap.set(qa('.hero__card', stage), { z: 70 })
          gsap.set(qa('.hero__toast', stage), { z: 110 })
          gsap.to(stage, { rotationY: -4, rotationX: 1.5, ease: 'none', scrollTrigger: trigger })
        } else {
          const alt = hero.querySelector<HTMLElement>(
            '.compose, .split__visual, .lf-hero__visual, .page-hero__visual',
          )
          if (alt) {
            gsap.set(alt, { transformPerspective: 1500, transformOrigin: '40% 70%' })
            gsap.to(alt, { rotationY: -3, rotationX: 2, ease: 'none', scrollTrigger: trigger })
          }
        }
        const copy = hero.querySelector<HTMLElement>('.hero__copy, .lf-hero__copy')
        if (copy)
          gsap.to(copy, {
            y: -16,
            opacity: 0.85,
            ease: 'none',
            scrollTrigger: { trigger: hero, start: '35% top', end: 'bottom top', scrub: 0.6 },
          })
      }
      qa('.compose').forEach((host) => {
        if (skip(host) || inHero(host)) return
        const card = host.querySelector('.compose__card')
        if (card)
          gsap.fromTo(
            card,
            { yPercent: 6 },
            {
              yPercent: -8,
              ease: 'none',
              scrollTrigger: { trigger: host, start: 'top bottom', end: 'bottom top', scrub: 0.8 },
            },
          )
      })
    })

    /* ---- 13. Bespoke choreography, one per home section ---- */
    const kit: Kit = {
      gsap,
      ScrollTrigger,
      qa,
      words: splitWords,
      rec,
      mm,
      restore,
      added,
      setupCard,
      setupCircle,
      EASE,
    }
    customs.forEach((sec) => HOME_SECTIONS[sec.getAttribute('aria-labelledby') ?? '']?.(sec, kit))
    ScrollTrigger.sort()
  })

  /* Fonts and images move the page; recalculate once they settle. */
  let disposed = false
  const refresh = () => {
    if (!disposed) ScrollTrigger.refresh()
  }
  void document.fonts?.ready.then(refresh)
  window.addEventListener('load', refresh)

  return () => {
    disposed = true
    window.removeEventListener('load', refresh)
    ctx.revert()
    restore.reverse().forEach((fn) => fn())
    added.forEach((el) => el.remove())
    root.classList.remove('mo', 'mo-pre')
  }
}
