/**
 * One scroll choreography per home-page section. Each section gets a different device so the page never repeats itself:
 *
 *   how-h    horizontal scroll: the section pins and the three steps travel sideways, each unmasking as it arrives
 *   spend-h  curtain wipe on the photo, checklist walking in, card sliding across with a slight tilt
 *   plans-h  pinned story: person, phone, alert, options, confirm, all scrubbed
 *   fin-h    rules drawing under each point, trip card tipping up in 3D, photo wiped up from the floor
 *   sec-h    converging halves: heading from the left, body from the right, icons popping
 *   free-h   photo opens from a framed inset to full bleed while sliding in
 *   faq-h    heading words sliding in from the right
 *   close-h  big scrubbed headline, photo opening out from a narrow window with parallax
 *   src-h    sources stepping in from the left
 *
 * Handlers are registered in scroll-motion.ts, which tags each of these sections `data-mo-custom` so the generic reveals skip them.
 * Pins and horizontal scroll are desktop-only (width and height gated); smaller screens get a lighter version.
 */
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

const DESKTOP_PIN = '(min-width: 1024px) and (min-height: 800px)'
const OTHERWISE = '(max-width: 1023px), (max-height: 799px)'

/** Fade-and-rise for a group, played once as each element enters, cascading when several arrive together. */
/** Phones and tablets get shorter travel and gentler angles. */
const isSmall = () => window.matchMedia('(max-width: 1023px)').matches

function rise(k: Kit, els: Element[], y = 28) {
  if (!els.length) return
  const { gsap, ScrollTrigger, rec, EASE } = k
  gsap.set(els, { opacity: 0, y })
  ScrollTrigger.batch(els, {
    start: 'top 90%',
    once: true,
    interval: 0.08,
    onEnter: (batch) =>
      rec(
        () => void gsap.to(batch, { opacity: 1, y: 0, duration: 1.1, ease: EASE, stagger: 0.09 }),
      ),
  })
}

/** Heading words rise out of a mask, tied to scroll position. */
function scrubWords(
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
    stagger: 0.07,
    ease: 'power2.out',
    scrollTrigger: { trigger: h, start: 'top 92%', end: 'top 50%', scrub: 0.6 },
  })
  return w
}

/** A `--p` driven hairline (see motion.css: .mo-rules, .mo-underline). */
const SCRUB = (trigger: Element, start: string, end: string, scrub = 0.7) => ({
  trigger,
  start,
  end,
  scrub,
})

/* ------------------------------------------------------------------------------------------------ how it works */
const how: Handler = (sec, k) => {
  const { gsap, ScrollTrigger, qa, mm, added, EASE } = k
  const h2 = sec.querySelector<HTMLElement>('.mr-h2')
  const steps = sec.querySelector<HTMLElement>('.steps')
  const container = sec.querySelector<HTMLElement>('.mr-container')
  if (!steps || !container) return
  const items = qa('.step', steps)
  const INNER = '.ui-rule, .fl, .audit li, .mr-ledger tbody tr, .dash__head'

  if (h2) {
    const w = k.words(h2)
    if (w.length) {
      gsap.set(w, { yPercent: 115 })
      ScrollTrigger.create({
        trigger: h2,
        start: 'top 88%',
        once: true,
        onEnter: () =>
          k.rec(() => void gsap.to(w, { yPercent: 0, duration: 1.05, ease: EASE, stagger: 0.04 })),
      })
    }
  }

  mm.add(DESKTOP_PIN, () => {
    sec.classList.add('mo-h')
    const bar = document.createElement('div')
    bar.className = 'mo-hbar'
    bar.setAttribute('aria-hidden', 'true')
    steps.parentElement?.insertBefore(bar, steps)
    added.push(bar)

    const dist = () => {
      const pad = parseFloat(getComputedStyle(container).paddingLeft) || 0
      return Math.max(0, steps.scrollWidth - (container.clientWidth - pad * 2))
    }
    /* Coverflow: steps turn toward the viewer as they approach the middle of the screen and fall back as they leave. */
    gsap.set(items, { transformPerspective: 1300, transformOrigin: '50% 50%' })
    const depth = () => {
      const mid = window.innerWidth / 2
      items.forEach((item) => {
        const r = item.getBoundingClientRect()
        const d = Math.max(-1.3, Math.min(1.3, (r.left + r.width / 2 - mid) / mid))
        gsap.set(item, { rotationY: -d * 13, z: -Math.abs(d) * 70, scale: 1 - Math.abs(d) * 0.04 })
      })
    }
    const track = gsap.to(steps, {
      x: () => -dist(),
      ease: 'none',
      scrollTrigger: {
        trigger: sec,
        pin: true,
        start: 'top top',
        end: () => `+=${dist() + window.innerHeight * 0.35}`,
        scrub: 0.7,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          gsap.set(bar, { scaleX: self.progress })
          depth()
        },
      },
    })
    gsap.set(bar, { scaleX: 0, transformOrigin: '0 50%' })
    depth()

    items.forEach((item, i) => {
      const view = item.querySelector<HTMLElement>('.step__view')
      const text = qa('.mr-h3, .mr-body', item)
      const rows = qa(INNER, item)
      if (i === 0) {
        gsap.from([view, ...text, ...rows].filter(Boolean) as HTMLElement[], {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: EASE,
          stagger: 0.08,
          delay: 0.2,
          scrollTrigger: { trigger: sec, start: 'top 70%', once: true },
        })
        return
      }
      /* masks open as each step crosses 78% of the viewport during the horizontal travel */
      if (view) gsap.set(view, { clipPath: 'inset(0 100% 0 0 round 20px)' })
      gsap.set(text, { opacity: 0, y: 24 })
      gsap.set(rows, { opacity: 0, x: 24 })
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: EASE },
      })
      if (view) tl.to(view, { clipPath: 'inset(0 0% 0 0 round 20px)', duration: 1.1 }, 0)
      tl.to(text, { opacity: 1, y: 0, duration: 0.9, stagger: 0.1 }, 0.25)
      tl.to(rows, { opacity: 1, x: 0, duration: 0.7, stagger: 0.07 }, 0.4)
      ScrollTrigger.create({
        trigger: item,
        containerAnimation: track,
        start: 'left 82%',
        onEnter: () => void tl.play(),
        onLeaveBack: () => void tl.reverse(),
      })
    })

    return () => {
      sec.classList.remove('mo-h')
      bar.remove()
    }
  })

  /* Phones, tablets and short windows: the steps become a swipeable row with the same coverflow depth. */
  mm.add(OTHERWISE, () => {
    sec.classList.add('mo-swipe')
    gsap.set(items, { transformPerspective: 1100 })
    let raf = 0
    const depth = () => {
      raf = 0
      const box = steps.getBoundingClientRect()
      const mid = box.left + box.width / 2
      items.forEach((item) => {
        const r = item.getBoundingClientRect()
        const d = Math.max(-1.2, Math.min(1.2, (r.left + r.width / 2 - mid) / (box.width / 2)))
        gsap.set(item, {
          rotationY: -d * 14,
          z: -Math.abs(d) * 50,
          scale: 1 - Math.abs(d) * 0.05,
          opacity: 1 - Math.abs(d) * 0.25,
        })
      })
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(depth)
    }
    steps.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    depth()
    rise(k, [steps], 40)
    return () => {
      steps.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
      sec.classList.remove('mo-swipe')
    }
  })
}

/* ------------------------------------------------------------------------------------------------ spend review */
const spend: Handler = (sec, k) => {
  const { gsap, qa } = k
  const copy = sec.querySelector<HTMLElement>('.split__copy')
  const host = sec.querySelector<HTMLElement>('.compose')
  scrubWords(k, sec.querySelector<HTMLElement>('.mr-h2'))
  if (copy) {
    rise(k, qa('.context, .list-title, .mr-body, .mr-btn-row', copy))
    const list = copy.querySelector<HTMLElement>('.list')
    if (list) {
      const li = qa('li', list)
      gsap.set(li, { opacity: 0, x: -48 })
      gsap.to(li, {
        opacity: 1,
        x: 0,
        stagger: 0.3,
        ease: 'power2.out',
        scrollTrigger: SCRUB(list, 'top 82%', 'bottom 58%'),
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
        x: isSmall() ? 36 : 150,
        rotate: isSmall() ? 1.5 : 3,
        transformPerspective: 1100,
        rotationY: isSmall() ? -12 : -20,
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
    gsap.set(parts.opts, { opacity: 0, y: 24 })
    if (parts.tick) gsap.set(parts.tick, { clipPath: 'inset(0 100% 0 0)' })
    if (parts.btn) gsap.set(parts.btn, { opacity: 0, y: 16 })
    if (parts.cap) gsap.set(parts.cap, { opacity: 0 })
  }
  const playInner = (tl: gsap.core.Timeline) => {
    if (parts.alert) tl.to(parts.alert, { opacity: 1, y: 0, duration: 1 })
    if (parts.opts.length)
      tl.to(parts.opts, { opacity: 1, y: 0, duration: 1, stagger: 0.6 }, '>-0.3')
    if (parts.tick) tl.to(parts.tick, { clipPath: 'inset(0 0% 0 0)', duration: 0.8 })
    if (parts.btn) tl.to(parts.btn, { opacity: 1, y: 0, duration: 0.8 })
    if (parts.cap) tl.to(parts.cap, { opacity: 1, duration: 0.6 })
  }
  const h2 = copy?.querySelector<HTMLElement>('.mr-h2') ?? null
  const copyBits = copy ? qa('.mr-eyebrow, .mr-body, .stat-line, .link-row', copy) : []

  /* Desktop: the section pins and the whole story plays under your scroll. */
  mm.add(DESKTOP_PIN, () => {
    const w = h2 ? k.words(h2) : []
    hideInner()
    if (w.length) gsap.set(w, { yPercent: 115 })
    gsap.set(copyBits, { opacity: 0, y: 30 })
    if (person) gsap.set(person, { opacity: 0, x: -180 })
    gsap.set(phone, { opacity: 0, y: 160 })
    const tl = gsap.timeline({
      defaults: { ease: 'power2.out' },
      scrollTrigger: {
        trigger: sec,
        pin: true,
        start: 'top top',
        end: '+=170%',
        scrub: 0.8,
        anticipatePin: 1,
      },
    })
    if (person) tl.to(person, { opacity: 1, x: 0, duration: 1.2 }, 0)
    gsap.set(phone, { transformPerspective: 1100, rotationY: -32 })
    tl.to(phone, { opacity: 1, y: 0, rotationY: 0, duration: 1.4 }, 0.2)
    if (copyBits[0]) tl.to(copyBits[0], { opacity: 1, y: 0, duration: 0.8 }, 0.5)
    if (w.length) tl.to(w, { yPercent: 0, duration: 1, stagger: 0.12 }, 0.6)
    tl.to(copyBits.slice(1), { opacity: 1, y: 0, duration: 0.8, stagger: 0.25 }, 1.4)
    playInner(tl)
  })

  /* Otherwise: no pin; the phone sequence scrubs as it crosses the screen. */
  mm.add(OTHERWISE, () => {
    hideInner()
    rise(k, copyBits)
    const w = h2 ? k.words(h2) : []
    if (w.length) {
      gsap.set(w, { yPercent: 115 })
      gsap.to(w, {
        yPercent: 0,
        stagger: 0.07,
        ease: 'power2.out',
        scrollTrigger: SCRUB(h2 as HTMLElement, 'top 92%', 'top 55%', 0.6),
      })
    }
    if (person) k.setupCard(phone)
    gsap.set(phone, { transformPerspective: 1100, rotationY: -22 })
    const tl = gsap.timeline({
      defaults: { ease: 'power2.out' },
      scrollTrigger: SCRUB(host, 'top 60%', 'bottom 55%', 0.7),
    })
    tl.to(phone, { rotationY: 0, duration: 0.8 }, 0)
    playInner(tl)
  })
}

/* ------------------------------------------------------------------------------------------------ finance */
const fin: Handler = (sec, k) => {
  const { gsap, qa } = k
  const copy = sec.querySelector<HTMLElement>('.split__copy')
  const host = sec.querySelector<HTMLElement>('.compose')
  scrubWords(k, sec.querySelector<HTMLElement>('.mr-h2'))
  if (copy) {
    const list = copy.querySelector<HTMLElement>('.list')
    if (list) {
      list.classList.add('mo-rules')
      k.restore.push(() => list.classList.remove('mo-rules'))
      const li = qa('li', list)
      gsap.set(li, { opacity: 0, x: -30, '--p': 0 })
      gsap.to(li, {
        opacity: 1,
        x: 0,
        '--p': 1,
        stagger: 0.35,
        ease: 'power2.out',
        scrollTrigger: SCRUB(list, 'top 82%', 'bottom 55%'),
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
      rotationX: 30,
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
  if (w.length) gsap.set(w, { yPercent: 115, x: isSmall() ? -30 : -90, opacity: 0 })
  if (body) gsap.set(body, { x: isSmall() ? 40 : 130, opacity: 0 })
  gsap.set(icons, { scale: 0.3, rotate: -25, opacity: 0 })
  row?.classList.add('mo-underline')
  if (row) gsap.set(row, { '--p': 0 })
  const tl = gsap.timeline({
    defaults: { ease: 'power2.out' },
    scrollTrigger: SCRUB(sec, 'top 78%', 'top 22%', 0.8),
  })
  /* two halves converge from opposite sides */
  if (w.length) tl.to(w, { yPercent: 0, x: 0, opacity: 1, duration: 1, stagger: 0.1 }, 0)
  if (body) tl.to(body, { x: 0, opacity: 1, duration: 1.2 }, 0)
  tl.to(
    icons,
    { scale: 1, rotate: 0, opacity: 1, duration: 0.7, stagger: 0.18, ease: 'back.out(2.4)' },
    0.9,
  )
  if (row) tl.to(row, { '--p': 1, duration: 0.9, ease: 'none' }, 1.1)
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
    gsap.set(fig, { clipPath: 'inset(16% 16% 16% 16% round 40px)', x: isSmall() ? -24 : -80 })
    gsap.to(fig, {
      clipPath: 'inset(0% 0% 0% 0% round 20px)',
      x: 0,
      ease: 'none',
      scrollTrigger: SCRUB(fig, 'top 95%', 'top 22%', 0.9),
    })
    if (img)
      gsap.fromTo(
        img,
        { scale: 1.4 },
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
        stagger: 0.06,
        ease: 'power2.out',
        scrollTrigger: SCRUB(h2 as HTMLElement, 'top 90%', 'top 55%', 0.6),
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
  scrubWords(k, h2, { yPercent: 0, x: isSmall() ? 40 : 90, opacity: 0 })
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
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: SCRUB(h2 as HTMLElement, 'top 95%', 'top 45%', 0.7),
    })
  }
  const side = sec.querySelector<HTMLElement>('.closing__side')
  if (side) {
    gsap.set(side, { x: isSmall() ? 30 : 90, opacity: 0 })
    gsap.to(side, {
      x: 0,
      opacity: 1,
      ease: 'none',
      scrollTrigger: SCRUB(side, 'top 95%', 'top 55%', 0.7),
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
      rotationX: 20,
    })
    gsap.to(photo, {
      clipPath: 'inset(0 0% 0 0% round 0px)',
      rotationX: 0,
      ease: 'none',
      scrollTrigger: SCRUB(photo, 'top 100%', 'top 38%', 0.8),
    })
    if (img) {
      gsap.set(img, { scale: 1.22 })
      gsap.fromTo(
        img,
        { yPercent: -8 },
        { yPercent: 8, ease: 'none', scrollTrigger: SCRUB(photo, 'top bottom', 'bottom top', 0.8) },
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
