import * as React from 'react'

import { AlertCard, RebookCards } from '@/components/art/plans'
import { BrandMark } from '@/components/art/group'
import { NetworkDots } from '@/components/art/charts'
import { IconCheck, IconDoc, IconLock } from '@/components/art/scenes-parts'
import { gsap } from '@/lib/gsap'
import { countUp, tiltOnHover, useMotion, whenVisible } from '@/lib/motion'
import type { InnerPage } from '@/content/site'

/** Page hero art. One scene per `art` value from the page data; each is drawn and animated on its own. */
export function PageArt({ page }: { page: InnerPage }) {
  switch (page.art) {
    case 'rules':
      return <RulesArt />
    case 'alert':
      return <AlertArt />
    case 'ledger':
      return <LedgerArt />
    case 'policy':
      return page.path.includes('template') ? <TemplateArt /> : <FlowArt />
    case 'phone':
      return <PhoneArt />
    case 'shield':
      return <ShieldArt />
    case 'report':
      return <ReportArt />
    case 'method':
      return <MethodArt />
    case 'price':
      return <PriceArt titles={page.sections.map((s) => s.title)} />
    case 'guides':
      return <GuidesArt titles={page.sections.map((s) => s.title)} />
    case 'group':
      return <GroupArt />
  }
}

/* ---------------------------------- rules ---------------------------------- */
function RulesArt() {
  const ref = React.useRef<HTMLDivElement>(null)
  useMotion(ref, ({ root }) => {
    const rows = gsap.utils.toArray<HTMLElement>('.ra-row', root)
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2.4 })
    tl.fromTo(
      rows,
      { autoAlpha: 0, y: 24 },
      { autoAlpha: 1, y: 0, stagger: 0.14, duration: 0.6, ease: 'power3.out' },
    )
      .fromTo(
        '.ra-fill',
        { scaleX: 0 },
        { scaleX: 1, transformOrigin: '0 50%', duration: 1.1, stagger: 0.12, ease: 'power3.inOut' },
        0.3,
      )
      .fromTo(
        '.ra-knob',
        { x: -40 },
        { x: 0, duration: 1.1, stagger: 0.12, ease: 'power3.inOut' },
        0.3,
      )
      .fromTo('.ra-seg i', { opacity: 0.4 }, { opacity: 1, duration: 0.3, stagger: 0.25 }, 0.5)
      .fromTo(
        '.ra-ok',
        { scale: 0 },
        { scale: 1, stagger: 0.14, duration: 0.5, ease: 'back.out(3)' },
        1.2,
      )
      .to(rows, { autoAlpha: 0, y: -12, stagger: 0.06, duration: 0.4 }, '+=2.2')
    return () => tl.kill()
  })
  const rows = [
    { k: 'Hotel limit by city', v: 'seg' },
    { k: 'Cabin class by flight length', v: 'seg2' },
    { k: 'Fare cap', v: 'bar' },
    { k: 'Who approves what', v: 'chip' },
  ]
  return (
    <div className="art tile art-rules" ref={ref} aria-hidden="true">
      {rows.map((r) => (
        <div className="ra-row" key={r.k}>
          <span className="ra-k">{r.k}</span>
          {r.v === 'bar' || r.v === 'seg' ? (
            <span className="ra-track">
              <i className="ra-fill" />
              <i className="ra-knob" />
            </span>
          ) : r.v === 'seg2' ? (
            <span className="ra-seg">
              <i>Short</i>
              <i>Mid</i>
              <i>Long</i>
            </span>
          ) : (
            <span className="pill">Travel lead</span>
          )}
          <span className="ra-ok">
            <IconCheck size={16} />
          </span>
        </div>
      ))}
    </div>
  )
}

/* ---------------------------------- alert ---------------------------------- */
function AlertArt() {
  const ref = React.useRef<HTMLDivElement>(null)
  useMotion(ref, ({ root }) => {
    const alert = root.querySelector('[data-alert]')
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 4 })
    tl.fromTo(
      alert,
      { y: -90, autoAlpha: 0, rotation: -3 },
      { y: 0, autoAlpha: 1, rotation: 0, duration: 1, ease: 'bounce.out', delay: 0.3 },
    )
      .fromTo(
        '.alert-ico',
        { rotation: 0 },
        { rotation: 16, transformOrigin: '50% 10%', duration: 0.12, yoyo: true, repeat: 7 },
        '-=0.4',
      )
      .to(alert, { autoAlpha: 0, y: -30, duration: 0.5 }, '+=7')
    return () => tl.kill()
  })
  return (
    <div className="art tile tile--tint art-alert" ref={ref}>
      <AlertCard />
      <RebookCards />
    </div>
  )
}

/* ---------------------------------- ledger ---------------------------------- */
const BUDGETS = [
  { n: 'Sales events', v: 78 },
  { n: 'Client visits', v: 54 },
  { n: 'Field team', v: 41 },
  { n: 'Training', v: 66 },
]
function LedgerArt() {
  const ref = React.useRef<HTMLDivElement>(null)
  useMotion(ref, ({ root }) => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 })
    tl.fromTo(
      '.la-bar i',
      { scaleX: 0 },
      { scaleX: 1, transformOrigin: '0 50%', duration: 1.3, stagger: 0.15, ease: 'power3.out' },
    )
      .fromTo(
        '.la-receipt',
        { y: 40, autoAlpha: 0, rotation: -8 },
        { y: 0, autoAlpha: 1, rotation: -3, duration: 0.8, ease: 'back.out(1.8)' },
        0.8,
      )
      .fromTo('.la-match', { scale: 0 }, { scale: 1, duration: 0.5, ease: 'back.out(3)' }, 1.7)
      .to(['.la-receipt', '.la-match'], { autoAlpha: 0, duration: 0.5 }, '+=3')
    root.querySelectorAll<HTMLElement>('.la-n').forEach((el, i) => {
      const to = Number(el.dataset.v)
      tl.add(countUp(el, to, { suffix: '%', duration: 1.3 }), i * 0.15)
    })
    return () => tl.kill()
  })
  return (
    <div className="art tile art-ledger" ref={ref}>
      <p className="pc-title">By trip, team and budget</p>
      {BUDGETS.map((b) => (
        <div className="la-bar" key={b.n}>
          <span>{b.n}</span>
          <div>
            <i style={{ width: `${b.v}%` }} />
          </div>
          <b className="fig la-n" data-v={b.v}>
            {b.v}%
          </b>
        </div>
      ))}
      <div className="la-receipt" aria-hidden="true">
        <IconDoc size={20} />
        <span>Receipt</span>
        <b className="la-match">
          <IconCheck size={14} /> Matched
        </b>
      </div>
    </div>
  )
}

/* ---------------------------------- policy flow (travel managers) ---------------------------------- */
function FlowArt() {
  const ref = React.useRef<HTMLDivElement>(null)
  useMotion(ref, ({ root }) => {
    const paths = gsap.utils.toArray<SVGPathElement>('.fl-p', root)
    gsap.set(paths, { drawSVG: '0%' })
    gsap.set('.fl-n', { autoAlpha: 0, scale: 0.7, transformOrigin: '50% 50%' })
    gsap.set('.fl-dot', { autoAlpha: 0 })
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.8 })
    tl.to('.fl-n', { autoAlpha: 1, scale: 1, stagger: 0.12, duration: 0.5, ease: 'back.out(2)' })
      .to(paths, { drawSVG: '100%', duration: 0.9, stagger: 0.2, ease: 'power2.inOut' }, 0.4)
      .set('.fl-dot--a', { autoAlpha: 1 })
      .to('.fl-dot--a', {
        motionPath: { path: paths[0], align: paths[0], alignOrigin: [0.5, 0.5] },
        duration: 1,
        ease: 'power1.inOut',
      })
      .to('.fl-dot--a', {
        motionPath: { path: paths[1], align: paths[1], alignOrigin: [0.5, 0.5] },
        duration: 0.9,
        ease: 'power1.inOut',
      })
      .fromTo(
        '.fl-yes',
        { scale: 0 },
        { scale: 1, transformOrigin: '50% 50%', duration: 0.4, ease: 'back.out(3)' },
      )
      .set('.fl-dot--b', { autoAlpha: 1 }, 1.6)
      .to(
        '.fl-dot--b',
        {
          motionPath: { path: paths[2], align: paths[2], alignOrigin: [0.5, 0.5] },
          duration: 1,
          ease: 'power1.inOut',
        },
        1.6,
      )
      .fromTo('.fl-card', { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.5 }, '-=0.3')
      .to('.fl-dot', { autoAlpha: 0, duration: 0.3 }, '+=1.6')
      .to(['.fl-yes', '.fl-card'], { autoAlpha: 0, duration: 0.3 }, '<')
    return () => tl.kill()
  })
  return (
    <div className="art tile art-flow" ref={ref} aria-hidden="true">
      <svg viewBox="0 0 440 300">
        <path className="fl-p fl-line" d="M70 150 H170" />
        <path className="fl-p fl-line" d="M230 128 C 280 100, 320 70, 360 70" />
        <path className="fl-p fl-line fl-line--o" d="M230 172 C 280 200, 320 230, 360 230" />
        <g className="fl-n">
          <circle cx="50" cy="150" r="26" className="fl-c" />
          <path d="M40 158c2-8 18-8 20 0M50 138a6 6 0 100 .1" className="fl-g" />
        </g>
        <g className="fl-n">
          <rect x="170" y="116" width="60" height="68" rx="20" className="fl-c fl-c--plum" />
          <path d="M200 132l14 5v10c0 9-6 14-14 18-8-4-14-9-14-18v-10z" className="fl-g fl-g--w" />
        </g>
        <g className="fl-n">
          <rect x="360" y="50" width="62" height="40" rx="14" className="fl-c" />
          <text x="391" y="75" textAnchor="middle" className="fl-t">
            In policy
          </text>
        </g>
        <g className="fl-n">
          <rect x="360" y="210" width="62" height="40" rx="14" className="fl-c fl-c--o" />
          <text x="391" y="235" textAnchor="middle" className="fl-t">
            Approver
          </text>
        </g>
        <g className="fl-yes">
          <circle cx="428" cy="48" r="11" className="fl-ok" />
          <path d="M423 48l3.500 3.500 6-6.500" className="fl-g fl-g--w" />
        </g>
        <circle className="fl-dot fl-dot--a" r="6" cx="0" cy="0" />
        <circle className="fl-dot fl-dot--b" r="6" cx="0" cy="0" />
      </svg>
      <div className="fl-card">
        <b className="fig">$496</b>
        <span>Over fare cap, with the reason</span>
      </div>
    </div>
  )
}

/* ---------------------------------- template document ---------------------------------- */
function TemplateArt() {
  const ref = React.useRef<HTMLDivElement>(null)
  useMotion(ref, () => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2.5 })
    tl.fromTo(
      '.ta-sheet',
      { y: 40, rotation: 4, autoAlpha: 0 },
      { y: 0, rotation: -2, autoAlpha: 1, duration: 0.9, ease: 'back.out(1.6)' },
    )
      .fromTo(
        '.ta-line',
        { scaleX: 0 },
        { scaleX: 1, transformOrigin: '0 50%', stagger: 0.14, duration: 0.6, ease: 'power3.out' },
        0.5,
      )
      .fromTo(
        '.ta-box',
        { scale: 0 },
        { scale: 1, stagger: 0.25, duration: 0.4, ease: 'back.out(3)' },
        1.2,
      )
      .fromTo(
        '.ta-cursor',
        { x: -30, y: 30, autoAlpha: 0 },
        { x: 0, y: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out' },
        1.4,
      )
      .to(['.ta-sheet', '.ta-cursor'], { autoAlpha: 0, y: -20, duration: 0.5 }, '+=3')
    return () => tl.kill()
  })
  return (
    <div className="art tile tile--tint art-template" ref={ref} aria-hidden="true">
      <div className="ta-sheet">
        <i className="ta-h" />
        {[0, 1, 2, 3, 4].map((i) => (
          <div className="ta-r" key={i}>
            <b className="ta-box">
              <IconCheck size={12} />
            </b>
            <i className="ta-line" style={{ width: `${88 - i * 9}%` }} />
          </div>
        ))}
      </div>
      <span className="pill ta-cursor">Edit</span>
    </div>
  )
}

/* ---------------------------------- phone (travelers) ---------------------------------- */
function PhoneArt() {
  const ref = React.useRef<HTMLDivElement>(null)
  useMotion(ref, ({ root, desktop }) => {
    gsap.fromTo(
      '.pa-phone',
      { y: 60, autoAlpha: 0, rotationY: -25 },
      {
        y: 0,
        autoAlpha: 1,
        rotationY: -8,
        duration: 1.2,
        ease: 'power3.out',
        transformPerspective: 1000,
      },
    )
    gsap.fromTo(
      '.pa-chip',
      { scale: 0, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, stagger: 0.25, duration: 0.7, delay: 0.7, ease: 'back.out(2.4)' },
    )
    gsap.utils.toArray<HTMLElement>('.pa-chip', root).forEach((c, i) =>
      gsap.to(c, {
        y: i % 2 ? 10 : -10,
        duration: 2.4 + i * 0.5,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      }),
    )
    const off = desktop
      ? tiltOnHover(root, 10, root.querySelector<HTMLElement>('.pa-phone')!)
      : undefined
    return () => off?.()
  })
  return (
    <div className="art tile tile--tint art-phone" ref={ref}>
      <span className="cut-orb" aria-hidden="true" />
      <img
        className="pa-phone"
        src="/img/hero-app-phone.webp"
        width="800"
        height="1422"
        alt="The Miraee assistant on a phone with flight options."
        loading="eager"
        decoding="async"
      />
      <span className="pa-chip pill pill--ok pa-chip--a">In policy</span>
      <span className="pa-chip pill pa-chip--b">Ask for a trip</span>
      <span className="pa-chip pill pa-chip--c">Pick an option</span>
    </div>
  )
}

/* ---------------------------------- shield ---------------------------------- */
function ShieldArt() {
  const ref = React.useRef<HTMLDivElement>(null)
  useMotion(ref, () => {
    gsap.set('.sh-outline', { drawSVG: '0%' })
    gsap.set('.sh-check', { drawSVG: '0%' })
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 })
    tl.to('.sh-outline', { drawSVG: '100%', duration: 1.4, ease: 'power2.inOut' })
      .to('.sh-fill', { opacity: 1, duration: 0.6 }, 0.9)
      .to('.sh-check', { drawSVG: '100%', duration: 0.6, ease: 'power2.out' }, 1.3)
      .fromTo(
        '.sh-log i',
        { scaleX: 0 },
        { scaleX: 1, transformOrigin: '0 50%', stagger: 0.2, duration: 0.6, ease: 'power3.out' },
        1.4,
      )
      .to(
        ['.sh-outline', '.sh-check', '.sh-fill', '.sh-log i'],
        { opacity: 0, duration: 0.5 },
        '+=3.2',
      )
      .set(['.sh-outline', '.sh-check', '.sh-fill', '.sh-log i'], { opacity: 1 })
      .set('.sh-fill', { opacity: 0 })
    gsap.to('.sh-orbit', {
      motionPath: { path: '.sh-ring', align: '.sh-ring', alignOrigin: [0.5, 0.5] },
      duration: 9,
      repeat: -1,
      ease: 'none',
      stagger: -3,
    })
    return () => tl.kill()
  }, [])
  return (
    <div className="art tile tile--plum art-shield" ref={ref} aria-hidden="true">
      <svg viewBox="0 0 320 300">
        <path className="sh-ring" d="M30 130a130 108 0 1 1 260 0a130 108 0 1 1 -260 0z" />
        <circle className="sh-orbit" r="6" cx="0" cy="0" />
        <circle className="sh-orbit" r="4" cx="0" cy="0" />
        <circle className="sh-orbit sh-orbit--o" r="5" cx="0" cy="0" />
        <path className="sh-fill" d="M160 52l72 26v52c0 46-30 80-72 98-42-18-72-52-72-98V78z" />
        <path className="sh-outline" d="M160 52l72 26v52c0 46-30 80-72 98-42-18-72-52-72-98V78z" />
        <path className="sh-check" d="M128 138l22 22 44-46" />
      </svg>
      <div className="sh-log">
        <i />
        <i />
        <i />
      </div>
      <span className="sh-lock">
        <IconLock size={20} />
      </span>
    </div>
  )
}

/* ---------------------------------- report ---------------------------------- */
function ReportArt() {
  const ref = React.useRef<HTMLDivElement>(null)
  useMotion(ref, () => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.6 })
    tl.fromTo(
      '.rp-doc',
      { y: 50, autoAlpha: 0, rotation: 3 },
      { y: 0, autoAlpha: 1, rotation: 0, duration: 0.9, ease: 'power3.out' },
    )
      .fromTo(
        '.rp-scan',
        { top: '4%', autoAlpha: 1 },
        { top: '92%', duration: 2.2, ease: 'power1.inOut' },
        0.6,
      )
      .fromTo(
        '.rp-row i',
        { scaleX: 0 },
        { scaleX: 1, transformOrigin: '0 50%', stagger: 0.45, duration: 0.7, ease: 'power3.out' },
        0.9,
      )
      .fromTo(
        '.rp-tag',
        { autoAlpha: 0, x: 14 },
        { autoAlpha: 1, x: 0, stagger: 0.45, duration: 0.5 },
        1.2,
      )
      .to('.rp-scan', { autoAlpha: 0, duration: 0.3 })
      .to('.rp-doc', { autoAlpha: 0, y: -20, duration: 0.5 }, '+=3.4')
    return () => tl.kill()
  })
  const tags = ['$150K to $190K', '$70K to $95K', '$50K to $65K', '$18K to $24K']
  const w = [86, 58, 44, 24]
  return (
    <div className="art tile tile--tint art-report" ref={ref} aria-hidden="true">
      <div className="rp-doc">
        <span className="rp-scan" />
        <p className="pc-title">Review report</p>
        {tags.map((t, i) => (
          <div className="rp-row" key={t}>
            <i style={{ width: `${w[i]}%` }} />
            <b className="rp-tag fig">{t}</b>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ---------------------------------- method ---------------------------------- */
function MethodArt() {
  const ref = React.useRef<HTMLDivElement>(null)
  useMotion(ref, ({ root }) => {
    gsap.set('.me-path', { drawSVG: '0%' })
    gsap.set('.me-node', { scale: 0, transformOrigin: '50% 50%' })
    gsap.set('.me-range', { scaleX: 0, transformOrigin: '0 50%' })
    gsap.set('.me-p', { autoAlpha: 0 })
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.4 })
    tl.to('.me-path', { drawSVG: '100%', duration: 1.2, ease: 'power2.inOut' }).to(
      '.me-node',
      { scale: 1, stagger: 0.14, duration: 0.5, ease: 'back.out(3)' },
      0.3,
    )
    gsap.utils.toArray<SVGCircleElement>('.me-p', root).forEach((p, i) => {
      tl.set(p, { autoAlpha: 1 }, 1.4 + i * 0.4)
        .to(
          p,
          {
            motionPath: { path: '.me-path', align: '.me-path', alignOrigin: [0.5, 0.5] },
            duration: 2.2,
            ease: 'power1.inOut',
          },
          1.4 + i * 0.4,
        )
        .to(p, { autoAlpha: 0, duration: 0.2 }, '>-0.2')
    })
    tl.to('.me-range', { scaleX: 1, duration: 0.9, ease: 'power3.out' }, 3.4)
      .to(['.me-path', '.me-node', '.me-range'], { opacity: 0, duration: 0.5 }, '+=3')
      .set(['.me-path', '.me-node', '.me-range'], { opacity: 1 })
    return () => tl.kill()
  })
  return (
    <div className="art tile art-method" ref={ref} aria-hidden="true">
      <svg viewBox="0 0 460 280">
        <path className="me-path" d="M40 70 C 120 70, 120 140, 200 140 S 280 140, 330 140" />
        <g className="me-node">
          <rect x="14" y="48" width="52" height="44" rx="12" className="me-doc" />
          <path d="M26 62h28M26 72h28M26 82h18" className="me-g" />
          <text className="me-t" x="40" y="110" textAnchor="middle">
            Your file
          </text>
        </g>
        {[120, 170, 220, 270].map((x, i) => (
          <circle
            key={x}
            className="me-node me-f"
            cx={x + 10}
            cy={i < 2 ? 100 + i * 16 : 140}
            r="11"
          />
        ))}
        <rect className="me-box" x="330" y="104" width="100" height="72" rx="18" />
        <text className="me-t" x="380" y="145" textAnchor="middle">
          Savings range
        </text>
        <circle className="me-p" r="5" cx="0" cy="0" />
        <circle className="me-p" r="5" cx="0" cy="0" />
        <circle className="me-p" r="5" cx="0" cy="0" />
        <path className="me-bracket" d="M20 224v12h420v-12M120 224v12M360 224v12" />
        <rect className="me-range" x="120" y="228" width="240" height="8" rx="4" />
      </svg>
    </div>
  )
}

/* ---------------------------------- price ---------------------------------- */
function PriceArt({ titles }: { titles: string[] }) {
  const ref = React.useRef<HTMLDivElement>(null)
  useMotion(ref, ({ root }) => {
    gsap.fromTo(
      '.pr-free',
      { scale: 0.4, autoAlpha: 0, rotation: -10 },
      { scale: 1, autoAlpha: 1, rotation: 0, duration: 1, ease: 'back.out(2)' },
    )
    const chips = gsap.utils.toArray<HTMLElement>('.pr-chip', root)
    gsap.fromTo(
      chips,
      { y: 120, autoAlpha: 0, rotation: () => gsap.utils.random(-14, 14) },
      {
        y: 0,
        autoAlpha: 1,
        rotation: (i: number) => (i % 2 ? 3 : -3),
        stagger: 0.12,
        duration: 0.9,
        ease: 'back.out(1.5)',
        delay: 0.3,
      },
    )
    chips.forEach((c, i) =>
      gsap.to(c, {
        y: i % 2 ? -8 : 8,
        duration: 2.4 + i * 0.3,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.4,
      }),
    )
    gsap.to('.pr-halo', {
      scale: 1.12,
      opacity: 0.7,
      duration: 2.4,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
    })
  })
  return (
    <div className="art tile tile--tint art-price" ref={ref}>
      <span className="pr-halo" aria-hidden="true" />
      <p className="pr-free disp">Free</p>
      <div className="pr-chips" aria-hidden="true">
        {titles.map((t) => (
          <span className="pr-chip pill" key={t}>
            <IconCheck size={14} /> {t}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ---------------------------------- guides ---------------------------------- */
function GuidesArt({ titles }: { titles: string[] }) {
  const ref = React.useRef<HTMLDivElement>(null)
  useMotion(ref, ({ root }) => {
    const cards = gsap.utils.toArray<HTMLElement>('.gu-card', root)
    const n = cards.length
    const slot = (i: number) => ({
      y: i * 22,
      x: i * 14,
      rotation: i * 2 - 3,
      scale: 1 - i * 0.04,
      zIndex: n - i,
    })
    let order = cards.map((_, i) => i)
    cards.forEach((c, i) => gsap.set(c, slot(i)))
    gsap.from(cards, { y: 160, autoAlpha: 0, stagger: 0.12, duration: 0.8, ease: 'power3.out' })
    const cycle = gsap.timeline({ repeat: -1, delay: 2.2 })
    cycle
      .add(() => {
        const top = cards[order[0]]
        gsap
          .timeline()
          .to(top, { x: -150, rotation: -12, duration: 0.5, ease: 'power2.in' })
          .set(top, { zIndex: 0 })
          .to(top, {
            x: 14 * (n - 1),
            y: 22 * (n - 1),
            rotation: (n - 1) * 2 - 3,
            scale: 1 - (n - 1) * 0.04,
            duration: 0.5,
            ease: 'power2.out',
          })
        order = [...order.slice(1), order[0]]
        order.forEach(
          (ci, i) =>
            i < n - 1 &&
            gsap.to(cards[ci], { ...slot(i), duration: 0.6, ease: 'power3.out', delay: 0.3 }),
        )
      }, '+=0')
      .add(() => undefined, '+=2.4')
    return () => {
      cycle.kill()
    }
  })
  return (
    <div className="art tile art-guides" ref={ref} aria-hidden="true">
      <div className="gu-stack">
        {titles.map((t, i) => (
          <div className={`gu-card gu-card--${i % 4}`} key={t}>
            <IconDoc size={22} />
            <b>{t}</b>
            <i />
            <i />
            <i />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ---------------------------------- group ---------------------------------- */
function GroupArt() {
  const ref = React.useRef<HTMLDivElement>(null)
  useMotion(ref, ({ root }) => {
    gsap.fromTo('.go-core', { scale: 0 }, { scale: 1, duration: 0.9, ease: 'back.out(2)' })
    gsap.fromTo(
      '.go-ring',
      { scale: 0.6, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, stagger: 0.2, duration: 1, ease: 'power3.out', delay: 0.2 },
    )
    gsap.utils.toArray<HTMLElement>('.go-sat', root).forEach((s, i) => {
      gsap.to(s, {
        motionPath: {
          path: `.go-path-${i}`,
          align: `.go-path-${i}`,
          alignOrigin: [0.5, 0.5],
          start: i * 0.37,
          end: i * 0.37 + 1,
        },
        duration: 16 + i * 5,
        repeat: -1,
        ease: 'none',
      })
    })
  })
  return (
    <div className="art tile tile--plum art-group" ref={ref} aria-hidden="true">
      <NetworkDots className="go-net" />
      <svg viewBox="0 0 400 300" className="go-svg">
        <path className="go-ring go-path-0" d="M114 150a86 62 0 1 1 172 0a86 62 0 1 1 -172 0z" />
        <path className="go-ring go-path-1" d="M60 150a140 100 0 1 1 280 0a140 100 0 1 1 -280 0z" />
        <path className="go-ring go-path-2" d="M14 150a186 132 0 1 1 372 0a186 132 0 1 1 -372 0z" />
      </svg>
      <div className="go-core">
        <BrandMark name="Tabhi" />
      </div>
      <div className="go-sat go-sat--m">
        <BrandMark name="Mondee" />
      </div>
      <div className="go-sat go-sat--a">
        <BrandMark name="Abhee" />
      </div>
      <div className="go-sat go-sat--r">
        <img src="/img/miraee-logo-orange.svg" alt="" width="84" height="21" />
      </div>
    </div>
  )
}

export { whenVisible }
