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

const DESKTOP_PIN =
  '(min-width: 1200px) and (min-height: 800px) and (hover: hover) and (pointer: fine)'
const OTHERWISE = '(max-width: 1199px), (max-height: 799px), (hover: none), (pointer: coarse)'

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
  const steps = sec.querySelector<HTMLElement>('.steps')
  if (!steps) return
  revealWords(k, sec.querySelector<HTMLElement>('.mr-h2'))
  k.mm.add('(min-width: 1200px)', () => rise(k, k.qa('.step', steps)))
  k.mm.add('(max-width: 1199px)', () => {
    sec.classList.add('mo-swipe')
    rise(k, [steps])
    return () => sec.classList.remove('mo-swipe')
  })
}

/* ------------------------------------------------------------------------------------------------ spend review */
const spend: Handler = (sec, k) => {
  const { gsap, qa } = k
  const copy = sec.querySelector<HTMLElement>('.split__copy')
  const host = sec.querySelector<HTMLElement>('.compose')
  revealWords(k, sec.querySelector<HTMLElement>('.mr-h2'))
  if (copy) {
    rise(k, qa('.context, .list-title, .mr-body, .mr-btn-row', copy))
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
  if (!host) return
  const person = host.querySelector<HTMLElement>('.compose__person')
  const card = host.querySelector<HTMLElement>('.compose__card')
  if (person) {
    /* a curtain drawn across the photo from the left */
    gsap.set(person, { clipPath: 'inset(0 100% 0 0)', xPercent: -10 })
    gsap.to(person, {
      clipPath: 'inset(0 0% 0 0)',
      xPercent: 0,
      ease: 'none',
      scrollTrigger: SCRUB(host, 'top 85%', 'top 35%', 0.8),
    })
  }
  if (card) {
    k.setupCard(card)
    gsap.fromTo(
      card,
      {
        x: isSmall() ? 16 : 40,
        rotate: isSmall() ? 0 : 1.5,
        transformPerspective: 1100,
        rotationY: isSmall() ? 0 : -8,
      },
      {
        x: 0,
        rotate: 0,
        rotationY: 0,
        ease: 'none',
        scrollTrigger: SCRUB(host, 'top 85%', 'top 30%', 0.9),
      },
    )
    qa<SVGElement>('.mr-circled > .mr-line', card).forEach((l) => k.setupCircle(l))
  }
}

/* ------------------------------------------------------------------------------------------------ plans change */
const plans: Handler = (sec, k) => {
  const { gsap, qa, mm } = k
  const host = sec.querySelector<HTMLElement>('.compose')
  const person = host?.querySelector<HTMLElement>('.compose__person')
  const phone = host?.querySelector<HTMLElement>('.phone--alert')
  const copy = sec.querySelector<HTMLElement>('.split__copy')
  if (!host || !phone) return
  const parts = {
    alert: phone.querySelector<HTMLElement>('.mr-alert'),
    opts: qa('.mr-option', phone),
    tick: phone.querySelector<SVGElement>('.mr-option__tick'),
    btn: phone.querySelector<HTMLElement>('.mr-btn'),
    cap: phone.querySelector<HTMLElement>('.phone__cap'),
  }
  const hideInner = () => {
    if (parts.alert) gsap.set(parts.alert, { opacity: 0, y: -24, animation: 'none' })
    if (parts.opts.length) gsap.set(parts.opts, { opacity: 0, y: 24 })
    if (parts.tick) gsap.set(parts.tick, { clipPath: 'inset(0 100% 0 0)' })
    if (parts.btn) gsap.set(parts.btn, { opacity: 0, y: 16 })
    if (parts.cap) gsap.set(parts.cap, { opacity: 0 })
  }
  const playInner = (tl: gsap.core.Timeline) => {
    if (parts.alert) tl.to(parts.alert, { opacity: 1, y: 0, duration: 1 })
    if (parts.opts.length)
      tl.to(parts.opts, { opacity: 1, y: 0, duration: 0.5, stagger: 0.12 }, '>-0.3')
    if (parts.tick) tl.to(parts.tick, { clipPath: 'inset(0 0% 0 0)', duration: 0.5 })
    if (parts.btn) tl.to(parts.btn, { opacity: 1, y: 0, duration: 0.5 })
    if (parts.cap) tl.to(parts.cap, { opacity: 1, duration: 0.6 })
  }
  const h2 = copy?.querySelector<HTMLElement>('.mr-h2') ?? null
  revealWords(k, h2)
  const copyBits = copy ? qa('.mr-eyebrow, .mr-body, .stat-line, .link-row', copy) : []

  /* Desktop: the section pins and the whole story plays under your scroll. */
  mm.add(DESKTOP_PIN, () => {
    hideInner()
    rise(k, copyBits)
    if (person) gsap.set(person, { opacity: 0, x: -40 })
    gsap.set(phone, { opacity: 0, y: 32 })
    const tl = gsap.timeline({
      defaults: { ease: 'power2.out' },
      scrollTrigger: {
        trigger: sec,
        pin: true,
        start: 'top top',
        end: '+=120%',
        scrub: 0.8,
        anticipatePin: 1,
      },
    })
    if (person) tl.to(person, { opacity: 1, x: 0, duration: 0.65 }, 0)
    gsap.set(phone, { transformPerspective: 1100, rotationY: -8 })
    tl.to(phone, { opacity: 1, y: 0, rotationY: 0, duration: 1.4 }, 0.2)
    playInner(tl)
  })

  /* Smaller and shorter viewports: play the phone sequence once on entry. */
  mm.add(OTHERWISE, () => {
    hideInner()
    rise(k, copyBits)
    rise(k, [phone])
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      scrollTrigger: { trigger: phone, start: 'top 85%', once: true },
    })
    playInner(tl)
  })
}

/* ------------------------------------------------------------------------------------------------ finance */
const fin: Handler = (sec, k) => {
  const { gsap, qa } = k
  const copy = sec.querySelector<HTMLElement>('.split__copy')
  const host = sec.querySelector<HTMLElement>('.compose')
  revealWords(k, sec.querySelector<HTMLElement>('.mr-h2'))
  if (copy) {
    const list = copy.querySelector<HTMLElement>('.list')
    if (list) {
      list.classList.add('mo-rules')
      k.restore.push(() => list.classList.remove('mo-rules'))
      const li = qa('li', list)
      gsap.set(li, { opacity: 0, x: -20, '--p': 0 })
      gsap.to(li, {
        opacity: 1,
        x: 0,
        '--p': 1,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: list, start: 'top 88%', once: true },
      })
    }
    rise(k, qa('.stat-line, .link-row', copy))
  }
  if (!host) return
  const person = host.querySelector<HTMLElement>('.compose__person')
  const card = host.querySelector<HTMLElement>('.compose__card')
  if (person) {
    /* wiped up from the floor */
    gsap.set(person, { clipPath: 'inset(100% 0 0 0)' })
    gsap.to(person, {
      clipPath: 'inset(0% 0 0 0)',
      ease: 'none',
      scrollTrigger: SCRUB(host, 'top 85%', 'top 35%', 0.8),
    })
  }
  if (card) {
    k.setupCard(card)
    /* The record tips up out of the page, and two earlier records fan out behind it in depth: every trip, one place. */
    card.classList.add('mo-stack')
    k.restore.push(() => card.classList.remove('mo-stack'))
    gsap.set(card, {
      transformPerspective: 1000,
      transformOrigin: '50% 100%',
      rotationX: isSmall() ? 0 : 8,
      '--s': 0,
    })
    gsap.to(card, {
      rotationX: 0,
      '--s': 1,
      ease: 'none',
      scrollTrigger: SCRUB(host, 'top 80%', 'top 22%', 0.9),
    })
    qa<SVGElement>('.mr-circled > .mr-line', card).forEach((l) => k.setupCircle(l))
  }
}

/* ------------------------------------------------------------------------------------------------ security */
const security: Handler = (sec, k) => {
  const { gsap, qa } = k
  const h2 = sec.querySelector<HTMLElement>('.mr-h2')
  const body = sec.querySelector<HTMLElement>('.security__body')
  const icons = qa('.icon-row li', sec)
  const row = sec.querySelector<HTMLElement>('.icon-row')
  const w = h2 ? k.words(h2) : []
  if (w.length) gsap.set(w, { yPercent: 115, x: -20, opacity: 0 })
  if (body) gsap.set(body, { x: isSmall() ? 0 : 20, y: isSmall() ? 20 : 0, opacity: 0 })
  gsap.set(icons, { scale: 0.92, rotate: 0, opacity: 0 })
  row?.classList.add('mo-underline')
  if (row) gsap.set(row, { '--p': 0 })
  const tl = gsap.timeline({
    defaults: { ease: 'power2.out' },
    scrollTrigger: { trigger: sec, start: 'top 85%', once: true },
  })
  /* two halves converge from opposite sides */
  if (w.length) tl.to(w, { yPercent: 0, x: 0, opacity: 1, duration: 0.65, stagger: 0.035 }, 0)
  if (body) tl.to(body, { x: 0, y: 0, opacity: 1, duration: 0.65 }, 0)
  tl.to(
    icons,
    { scale: 1, rotate: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out' },
    0.25,
  )
  if (row) tl.to(row, { '--p': 1, duration: 0.6, ease: 'none' }, 0.3)
  k.restore.push(() => row?.classList.remove('mo-underline'))
  rise(k, qa('.link-row', sec))
}

/* ------------------------------------------------------------------------------------------------ free at any size */
const free: Handler = (sec, k) => {
  const { gsap, qa } = k
  const fig = sec.querySelector<HTMLElement>('.free__img')
  const img = fig?.querySelector('img')
  const copy = sec.querySelector<HTMLElement>('.free__copy')
  if (fig) {
    /* the photograph opens from a framed inset to its full size while sliding in */
    gsap.set(fig, { clipPath: 'inset(16% 16% 16% 16% round 40px)', x: isSmall() ? -16 : -32 })
    gsap.to(fig, {
      clipPath: 'inset(0% 0% 0% 0% round 20px)',
      x: 0,
      ease: 'none',
      scrollTrigger: SCRUB(fig, 'top 95%', 'top 22%', 0.9),
    })
    if (img)
      gsap.fromTo(
        img,
        { scale: 1.08 },
        { scale: 1, ease: 'none', scrollTrigger: SCRUB(fig, 'top 95%', 'bottom 40%', 0.9) },
      )
  }
  if (copy) {
    const h2 = copy.querySelector<HTMLElement>('.mr-h2')
    const w = h2 ? k.words(h2) : []
    if (w.length) {
      gsap.set(w, { yPercent: 115 })
      gsap.to(w, {
        yPercent: 0,
        duration: 0.65,
        stagger: 0.035,
        ease: 'power3.out',
        scrollTrigger: { trigger: h2, start: 'top 90%', once: true },
      })
    }
    rise(k, qa('.mr-body, .mr-btn-row', copy))
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
  k.gsap.set(items, { opacity: 0, x: -16 })
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
  'how-h': how,
  'spend-h': spend,
  'plans-h': plans,
  'fin-h': fin,
  'sec-h': security,
  'free-h': free,
  'faq-h': faq,
  'close-h': closing,
  'src-h': sources,
}
