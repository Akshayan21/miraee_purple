/** Home motion: readable one-time text reveals, restrained visuals, and one desktop product story. */
import type { gsap as Gsap } from 'gsap'
import type { ScrollTrigger as ST } from 'gsap/ScrollTrigger'

export interface Kit {
  gsap: typeof Gsap
  ScrollTrigger: typeof ST
  qa: <T extends Element = HTMLElement>(sel: string, root?: ParentNode) => T[]
  words: (el: HTMLElement) => HTMLElement[]
  rec: (fn: () => void) => void
  mm: gsap.MatchMedia
  restore: Array<() => void>
  added: HTMLElement[]
  setupCard: (card: HTMLElement) => void
  setupCircle: (line: SVGElement, delay?: number) => void
  EASE: string
}

type Handler = (sec: HTMLElement, k: Kit) => void

/** Fade-and-rise for a group, played once as each element enters, cascading when several arrive together. */
/** Phones and tablets get shorter travel and gentler angles. */
const isSmall = () => window.matchMedia('(max-width: 1199px)').matches

function rise(k: Kit, els: Element[], y = 20) {
  if (!els.length) return
  const { gsap, ScrollTrigger, rec, EASE } = k
  gsap.set(els, { opacity: 0, y })
  ScrollTrigger.batch(els, {
    start: 'top 90%',
    once: true,
    interval: 0.08,
    onEnter: (batch) =>
      rec(
        () => void gsap.to(batch, { opacity: 1, y: 0, duration: 0.65, ease: EASE, stagger: 0.06 }),
      ),
  })
}

/** Heading words reveal once, without requiring more scrolling to read them. */
function revealWords(
  k: Kit,
  h: HTMLElement | null,
  from: Record<string, number> = { yPercent: 115 },
) {
  if (!h) return []
  const w = k.words(h)
  if (!w.length) return []
  k.gsap.set(w, from)
  k.gsap.to(w, {
    yPercent: 0,
    x: 0,
    opacity: 1,
    duration: 0.65,
    stagger: 0.035,
    ease: 'power3.out',
    scrollTrigger: { trigger: h, start: 'top 90%', once: true },
  })
  return w
}

/** A `--p` driven hairline (see motion.css: .mo-rules, .mo-underline). */
const SCRUB = (trigger: Element, start: string, end: string, scrub = 0.7) =>
  isSmall() ? { trigger, start: 'top 90%', once: true } : { trigger, start, end, scrub }

/* ------------------------------------------------------------------------------------------------ how it works */
const how: Handler = (sec, k) => {
  const { gsap, qa, mm, added, EASE } = k
  const steps = sec.querySelector<HTMLElement>('.steps')
  if (!steps) return
  revealWords(k, sec.querySelector<HTMLElement>('.mr-h2'))

  /* Wide, tall, pointer screens: the three steps pin in the middle of the screen and travel sideways as you scroll. */
  mm.add(
    '(min-width: 1200px) and (min-height: 760px) and (hover: hover) and (pointer: fine)',
    () => {
      const items = qa('.step', steps)
      if (items.length < 2) return
      sec.classList.add('mo-h')
      const bar = document.createElement('div')
      bar.className = 'mo-hbar'
      bar.setAttribute('aria-hidden', 'true')
      steps.parentElement?.insertBefore(bar, steps)
      added.push(bar)
      gsap.set(bar, { scaleX: 0, transformOrigin: '0 50%' })

      const dist = () => {
        const box = steps.parentElement
        const pad = box ? parseFloat(getComputedStyle(box).paddingLeft) || 0 : 0
        const inner = (box?.clientWidth ?? window.innerWidth) - pad * 2
        return Math.max(0, steps.scrollWidth - inner)
      }
      const inner = (item: HTMLElement) => qa('.step__view, .mr-h3, .mr-body', item)
      items.forEach((item, i) => {
        if (i > 0) gsap.set(inner(item), { opacity: 0, y: 28 })
      })
      const shown = new Set<number>([0])
      gsap.to(items, {
        x: () => -dist(),
        ease: 'none',
        scrollTrigger: {
          trigger: steps,
          start: 'center center',
          end: () => `+=${dist() + window.innerHeight * 0.25}`,
          pin: true,
          scrub: 0.7,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            gsap.set(bar, { scaleX: self.progress })
            items.forEach((item, i) => {
              if (shown.has(i) || self.progress < (i / items.length) * 0.78) return
              shown.add(i)
              gsap.to(inner(item), { opacity: 1, y: 0, duration: 0.8, ease: EASE, stagger: 0.08 })
            })
          },
        },
      })
      return () => {
        sec.classList.remove('mo-h')
        bar.remove()
      }
    },
  )

  mm.add('(max-width: 1199px)', () => {
    sec.classList.add('mo-swipe')
    rise(k, [steps])
    return () => sec.classList.remove('mo-swipe')
  })
  mm.add(
    '(min-width: 1200px) and (max-height: 759px), (min-width: 1200px) and (hover: none)',
    () => {
      rise(k, qa('.step', steps))
    },
  )
}

/* ------------------------------------------------------------------------------------------------ hero */
/** Parallax depth plus a pointer-following tilt: the photograph, the ledger and the approval sit at different depths. */
const hero: Handler = (sec, k) => {
  const { gsap, mm } = k
  const photo = sec.querySelector<HTMLElement>('picture')
  const stage = photo?.parentElement ?? null
  const cards = sec.querySelector<HTMLElement>('[class*="cards"]')
  const copy = sec.querySelector<HTMLElement>('[class*="copy"]')
  if (!stage) return

  mm.add('(min-width: 1024px) and (hover: hover) and (pointer: fine)', () => {
    const scrub = { trigger: sec, start: 'top top', end: 'bottom top', scrub: 0.6 }
    if (photo) gsap.to(photo, { yPercent: -5, ease: 'none', scrollTrigger: scrub })
    if (cards) gsap.to(cards, { yPercent: -14, ease: 'none', scrollTrigger: scrub })
    if (copy)
      gsap.to(copy, {
        y: -30,
        opacity: 0.4,
        ease: 'none',
        scrollTrigger: { ...scrub, start: '30% top' },
      })

    gsap.set(stage, { transformPerspective: 1400 })
    const rx = gsap.quickTo(stage, 'rotationX', { duration: 0.8, ease: 'power3.out' })
    const ry = gsap.quickTo(stage, 'rotationY', { duration: 0.8, ease: 'power3.out' })
    const move = (e: PointerEvent) => {
      const r = sec.getBoundingClientRect()
      ry(((e.clientX - r.left) / r.width - 0.5) * 6)
      rx(-((e.clientY - r.top) / r.height - 0.5) * 4)
    }
    const leave = () => {
      ry(0)
      rx(0)
    }
    sec.addEventListener('pointermove', move)
    sec.addEventListener('pointerleave', leave)
    return () => {
      sec.removeEventListener('pointermove', move)
      sec.removeEventListener('pointerleave', leave)
    }
  })
}

/* ------------------------------------------------------------------------------------------------ promise marquee */
/** A strip of the three promises that slides sideways as you scroll, left as you go down and back as you return. */
const promise: Handler = (sec, k) => {
  const { gsap, mm } = k
  const track = sec.querySelector<HTMLElement>('[data-track]')
  if (!track) return
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    gsap.fromTo(
      track,
      { xPercent: 0 },
      {
        xPercent: -28,
        ease: 'none',
        scrollTrigger: { trigger: sec, start: 'top bottom', end: 'bottom top', scrub: 0.8 },
      },
    )
  })
}

/* ------------------------------------------------------------------------------------------------ people scenes */
/**
 * One choreography for every "faces first" band (spend review, plans change, finance, security, free): the headline words
 * rise out of a mask, the copy follows in sequence, the rounded stage grows in, the person slides up onto it and the product
 * view swings in on its vertical axis and settles flat. Photographs get a slow scale instead of a person.
 */
const scene: Handler = (sec, k) => {
  const { gsap, qa } = k
  const copy = sec.querySelector<HTMLElement>('[data-sc-copy]')
  const plate = sec.querySelector<HTMLElement>('[data-sc-plate]')
  const person = sec.querySelector<HTMLElement>('[data-sc-person]')
  const card = sec.querySelector<HTMLElement>('[data-sc-card]')
  const stage = plate?.parentElement ?? null

  revealWords(k, copy?.querySelector<HTMLElement>('.mr-h2') ?? null)
  if (copy) {
    rise(
      k,
      qa(
        '.mr-eyebrow, .context, .mr-body, .list-title, .stat-line, .icon-row, .link-row, .mr-btn-row',
        copy,
      ),
    )
    const list = copy.querySelector<HTMLElement>('.list')
    if (list) {
      const li = qa('li', list)
      gsap.set(li, { opacity: 0, x: -20 })
      gsap.to(li, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: list, start: 'top 88%', once: true },
      })
    }
  }
  if (!stage) return

  /* Depth: the person (or photograph) drifts against the page as it passes, and the product view tilts toward the pointer. */
  if (person) {
    k.mm.add('(min-width: 1024px) and (hover: hover) and (pointer: fine)', () => {
      const isPhoto = person.matches('[class*="photoWrap"]')
      if (isPhoto) {
        const img = person.querySelector('img')
        if (img)
          gsap.fromTo(
            img,
            { scale: 1.12 },
            {
              scale: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: stage,
                start: 'top bottom',
                end: 'center center',
                scrub: 0.6,
              },
            },
          )
      } else {
        gsap.fromTo(
          person,
          { yPercent: 4 },
          {
            yPercent: -4,
            ease: 'none',
            scrollTrigger: { trigger: stage, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
          },
        )
      }
    })
  }
  if (card) {
    k.mm.add('(min-width: 1024px) and (hover: hover) and (pointer: fine)', () => {
      const inner = card.firstElementChild as HTMLElement | null
      if (!inner) return
      gsap.set(inner, { transformPerspective: 900 })
      const rx = gsap.quickTo(inner, 'rotationX', { duration: 0.6, ease: 'power3.out' })
      const ry = gsap.quickTo(inner, 'rotationY', { duration: 0.6, ease: 'power3.out' })
      const move = (e: PointerEvent) => {
        const r = card.getBoundingClientRect()
        ry(((e.clientX - r.left) / r.width - 0.5) * 8)
        rx(-((e.clientY - r.top) / r.height - 0.5) * 6)
      }
      const leave = () => {
        rx(0)
        ry(0)
      }
      card.addEventListener('pointermove', move)
      card.addEventListener('pointerleave', leave)
      return () => {
        card.removeEventListener('pointermove', move)
        card.removeEventListener('pointerleave', leave)
      }
    })
  }
  /* Big percentages count up once they arrive. */
  qa('.stat-line__fig', sec).forEach((fig) => {
    const node = Array.from(fig.childNodes).find(
      (n) => n.nodeType === 3 && /\d+%/.test(n.nodeValue ?? ''),
    )
    const m = node?.nodeValue?.match(/(\d+)%/)
    if (!node || !m) return
    const target = Number(m[1])
    const before = (node.nodeValue ?? '').slice(0, m.index)
    const o = { v: 0 }
    node.nodeValue = `${before}0%`
    gsap.to(o, {
      v: target,
      duration: 1.4,
      ease: 'power3.out',
      scrollTrigger: { trigger: fig, start: 'top 88%', once: true },
      onUpdate: () => {
        node.nodeValue = `${before}${Math.round(o.v)}%`
      },
      onComplete: () => {
        node.nodeValue = `${before}${target}%`
      },
    })
  })

  const tl = gsap.timeline({
    defaults: { ease: 'power3.out' },
    scrollTrigger: { trigger: stage, start: 'top 82%', once: true },
  })
  if (plate) {
    gsap.set(plate, { opacity: 0, scale: 0.94, transformOrigin: '50% 100%' })
    tl.to(plate, { opacity: 1, scale: 1, duration: 0.9 }, 0)
  }
  if (person) {
    const isPhoto = person.matches('[class*="photoWrap"]')
    gsap.set(person, isPhoto ? { opacity: 0, scale: 1.06 } : { opacity: 0, y: 40 })
    tl.to(person, { opacity: 1, y: 0, scale: 1, duration: 1 }, 0.15)
  }
  if (card) {
    k.setupCard(card)
    gsap.set(card, { transformPerspective: 1100, rotationY: isSmall() ? 0 : -10 })
    tl.to(card, { rotationY: 0, duration: 1.2 }, 0.35)
    qa<SVGElement>('.mr-circled > .mr-line', card).forEach((l) => k.setupCircle(l))
    const phone = card.querySelector<HTMLElement>('.phone--alert')
    if (phone) {
      const alert = phone.querySelector<HTMLElement>('.mr-alert')
      const opts = qa('.mr-option', phone)
      const tick = phone.querySelector<SVGElement>('.mr-option__tick')
      const btn = phone.querySelector<HTMLElement>('.mr-btn')
      const cap = phone.querySelector<HTMLElement>('.phone__cap')
      if (alert) gsap.set(alert, { opacity: 0, y: -16, animation: 'none' })
      if (opts.length) gsap.set(opts, { opacity: 0, y: 16 })
      if (tick) gsap.set(tick, { clipPath: 'inset(0 100% 0 0)' })
      if (btn) gsap.set(btn, { opacity: 0, y: 12 })
      if (cap) gsap.set(cap, { opacity: 0 })
      const seq = gsap.timeline({
        defaults: { ease: 'power2.out' },
        scrollTrigger: { trigger: phone, start: 'top 80%', once: true },
        delay: 0.5,
      })
      if (alert) seq.to(alert, { opacity: 1, y: 0, duration: 0.7 })
      if (opts.length) seq.to(opts, { opacity: 1, y: 0, duration: 0.5, stagger: 0.12 }, '>-0.2')
      if (tick) seq.to(tick, { clipPath: 'inset(0 0% 0 0)', duration: 0.5 })
      if (btn) seq.to(btn, { opacity: 1, y: 0, duration: 0.5 })
      if (cap) seq.to(cap, { opacity: 1, duration: 0.5 })
    }
  }
}

/* ------------------------------------------------------------------------------------------------ FAQ */
const faq: Handler = (sec, k) => {
  const { qa } = k
  const head = sec.querySelector<HTMLElement>('.faq-acc__head')
  const h2 = head?.querySelector<HTMLElement>('.mr-h2') ?? null
  /* words slide in from the right, the opposite of every other heading on the page */
  revealWords(k, h2, { yPercent: 0, x: 20, opacity: 0 })
  if (head) rise(k, qa('.faq-acc__aside', head))
}

/* ------------------------------------------------------------------------------------------------ closing */
const closing: Handler = (sec, k) => {
  const { gsap, qa } = k
  const h2 = sec.querySelector<HTMLElement>('.mr-h2')
  const w = h2 ? k.words(h2) : []
  if (w.length) {
    gsap.set(w, { yPercent: 120, rotate: 4 })
    gsap.to(w, {
      yPercent: 0,
      rotate: 0,
      stagger: 0.035,
      ease: 'power3.out',
      scrollTrigger: { trigger: h2, start: 'top 90%', once: true },
      duration: 0.65,
    })
  }
  const side = sec.querySelector<HTMLElement>('.closing__side')
  if (side) {
    gsap.set(side, { x: isSmall() ? 0 : 20, y: isSmall() ? 20 : 0, opacity: 0 })
    gsap.to(side, {
      x: 0,
      y: 0,
      opacity: 1,
      ease: 'none',
      scrollTrigger: { trigger: side, start: 'top 90%', once: true },
      duration: 0.65,
    })
  }
  const photo = sec.querySelector<HTMLElement>('.closing__photo')
  const img = photo?.querySelector('img')
  if (photo) {
    /* a narrow window opens into the full-width bridge photo */
    gsap.set(photo, {
      clipPath: 'inset(0 26% 0 26% round 28px)',
      transformPerspective: 1300,
      transformOrigin: '50% 100%',
      rotationX: isSmall() ? 0 : 6,
    })
    gsap.to(photo, {
      clipPath: 'inset(0 0% 0 0% round 0px)',
      rotationX: 0,
      ease: 'none',
      scrollTrigger: SCRUB(photo, 'top 100%', 'top 38%', 0.8),
    })
    if (img) {
      gsap.set(img, { scale: 1.08 })
      gsap.fromTo(
        img,
        { yPercent: isSmall() ? 0 : -3 },
        {
          yPercent: isSmall() ? 0 : 3,
          ease: 'none',
          scrollTrigger: SCRUB(photo, 'top bottom', 'bottom top', 0.8),
        },
      )
    }
    qa<SVGElement>('.mr-line', photo).forEach((line) => {
      gsap.set(line, { clipPath: 'inset(0 100% 0 0)' })
      gsap.to(line, {
        clipPath: 'inset(0 0% 0 0)',
        ease: 'none',
        scrollTrigger: SCRUB(photo, 'top 80%', 'bottom 45%', 0.8),
      })
    })
  }
}

/* ------------------------------------------------------------------------------------------------ sources */
const sources: Handler = (sec, k) => {
  const items = k.qa('li', sec)
  k.gsap.set(items, { opacity: 0, x: -36 })
  k.ScrollTrigger.batch(items, {
    start: 'top 94%',
    once: true,
    onEnter: (b) =>
      k.rec(
        () => void k.gsap.to(b, { opacity: 1, x: 0, duration: 0.9, ease: k.EASE, stagger: 0.12 }),
      ),
  })
}

/** Keyed by each section's aria-labelledby id. */
export const HOME_SECTIONS: Record<string, Handler> = {
  'home-hero-h': hero,
  'promise-h': promise,
  'how-h': how,
  'spend-h': scene,
  'plans-h': scene,
  'fin-h': scene,
  'sec-h': scene,
  'free-h': scene,
  'faq-h': faq,
  'close-h': closing,
  'src-h': sources,
}
