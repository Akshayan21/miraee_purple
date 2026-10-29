import * as React from 'react'

import type { InnerPage } from '@/content/site'
import { gsap, playWhen, useMotion } from '@/lib/motion'
import { ChatSim } from './chat-sim'
import { LedgerCard } from './ledger-card'
import { PolicyCard } from './policy-card'
import { SampleReport } from './sample-report'
import { ShieldArt } from './shield-art'
import { SplitFlap } from './split-flap'
import { TRIPS } from './sample'

/* ------------------------------------------------------------------ policy: approval route */
function ApprovalFlow() {
  const ref = useMotion<HTMLDivElement>((el) => {
    const q = gsap.utils.selector(el)
    const tl = gsap.timeline({ paused: true })
    tl.from(q('.af__node'), {
      opacity: 0,
      scale: 0.85,
      duration: 0.5,
      stagger: 0.2,
      ease: 'back.out(1.8)',
      transformOrigin: 'center',
    })
    tl.from(q('.af__line'), { drawSVG: 0, duration: 0.8, stagger: 0.25, ease: 'power2.inOut' }, 0.4)
    tl.from(q('.af__lab'), { opacity: 0, duration: 0.4, stagger: 0.2 }, 1)
    const dotA = q('.af__dot--a')[0]
    const dotB = q('.af__dot--b')[0]
    let run: gsap.core.Timeline | undefined
    const go = () => {
      run = gsap.timeline({ repeat: -1, repeatDelay: 0.6 })
      run.set([dotA, dotB], { opacity: 0 })
      run.fromTo(
        dotA,
        { opacity: 1 },
        {
          opacity: 1,
          motionPath: {
            path: q<SVGPathElement>('.af__p1')[0],
            align: q<SVGPathElement>('.af__p1')[0],
            alignOrigin: [0.5, 0.5],
          },
          duration: 1.4,
          ease: 'power1.inOut',
        },
      )
      run.to(dotA, { opacity: 0, duration: 0.2 })
      run.fromTo(
        dotB,
        { opacity: 1 },
        {
          opacity: 1,
          motionPath: {
            path: q<SVGPathElement>('.af__p2')[0],
            align: q<SVGPathElement>('.af__p2')[0],
            alignOrigin: [0.5, 0.5],
          },
          duration: 1.4,
          ease: 'power1.inOut',
        },
        0,
      )
      run.to(dotB, { opacity: 0, duration: 0.2 }, '>')
      run.from(q('.af__node--book'), { scale: 1.12, duration: 0.2, yoyo: true, repeat: 1 }, 1.3)
      run.from(q('.af__node--appr'), { scale: 1.12, duration: 0.2, yoyo: true, repeat: 1 }, 1.3)
    }
    tl.add(go, '>')
    gsap.set([dotA, dotB], { opacity: 0 })
    playWhen(el, () => void tl.play(), 'top 80%')
    return () => {
      run?.kill()
    }
  }, [])
  return (
    <div ref={ref} className="ed-card af">
      <svg
        viewBox="0 0 460 330"
        aria-label="Each request is checked against policy. In policy bookings go through; others go to an approver."
        role="img"
      >
        <path
          className="af__line af__p1"
          d="M120 165 H200 L250 165 C 290 165, 300 90, 340 90 H350"
        />
        <path
          className="af__line af__p2 af__line--tang"
          d="M250 165 C 290 165, 300 245, 340 245 H350"
        />
        <g className="af__node">
          <rect x="20" y="135" width="100" height="60" rx="3" />
          <text x="70" y="171" textAnchor="middle">
            Request
          </text>
        </g>
        <g className="af__node">
          <path d="M200 165 L225 135 L250 165 L225 195 Z" className="af__dia" />
        </g>
        <text className="af__t" x="225" y="222" textAnchor="middle">
          Policy
        </text>
        <g className="af__node af__node--book">
          <rect x="350" y="60" width="90" height="60" rx="3" />
          <text x="395" y="96" textAnchor="middle">
            Books
          </text>
        </g>
        <g className="af__node af__node--appr">
          <rect x="350" y="215" width="90" height="60" rx="3" className="af__tang" />
          <text x="395" y="251" textAnchor="middle">
            Approver
          </text>
        </g>
        <text className="af__lab" x="300" y="70" textAnchor="middle">
          In policy
        </text>
        <text className="af__lab af__lab--tang" x="296" y="288" textAnchor="middle">
          Out of policy
        </text>
        <circle className="af__dot af__dot--a" r="7" />
        <circle className="af__dot af__dot--b" r="7" />
      </svg>
    </div>
  )
}

/* ------------------------------------------------------------------ method: a scan through the file */
function MethodScan({ labels }: { labels: string[] }) {
  const hits = [1, 4, 6, 9]
  const ref = useMotion<HTMLDivElement>((el) => {
    const q = gsap.utils.selector(el)
    const tl = gsap.timeline({ paused: true })
    tl.from(q('.ms__row'), {
      scaleX: 0,
      transformOrigin: 'left center',
      duration: 0.4,
      stagger: 0.05,
      ease: 'power2.out',
    })
    tl.fromTo(
      q('.ms__scan'),
      { y: 0, opacity: 0 },
      { y: 250, opacity: 1, duration: 3.2, ease: 'none' },
      0.5,
    )
    hits.forEach((h, i) => {
      const at = 0.5 + ((h + 0.5) / 11) * 3.2
      tl.from(
        q(`.ms__band[data-i="${i}"]`),
        { scaleX: 0, transformOrigin: 'left center', duration: 0.4, ease: 'power3.out' },
        at,
      )
      tl.from(
        q(`.ms__pin[data-i="${i}"]`),
        { scale: 0, duration: 0.45, ease: 'back.out(3)', transformOrigin: 'center' },
        at + 0.1,
      )
      tl.from(q(`.ms__lab[data-i="${i}"]`), { opacity: 0, x: -12, duration: 0.4 }, at + 0.15)
    })
    tl.to(q('.ms__scan'), { opacity: 0, duration: 0.3 }, '>')
    playWhen(el, () => void tl.play(), 'top 80%')
  }, [])
  return (
    <div ref={ref} className="ed-card ms">
      <svg
        viewBox="0 0 460 330"
        role="img"
        aria-label="A scan runs through your file, trip by trip, and marks four findings."
      >
        <rect className="ms__sheet" x="20" y="20" width="220" height="290" rx="3" />
        {Array.from({ length: 11 }).map((_, i) => (
          <g key={i}>
            <rect
              className="ms__row"
              x="38"
              y={38 + i * 24}
              width={110 + ((i * 37) % 50)}
              height="6"
              rx="3"
            />
            <rect
              className="ms__row ms__row--s"
              x="196"
              y={38 + i * 24}
              width="30"
              height="6"
              rx="3"
            />
          </g>
        ))}
        {hits.map((h, i) => (
          <g key={h}>
            <rect className="ms__band" data-i={i} x="28" y={30 + h * 24} width="204" height="22" />
            <circle className="ms__pin" data-i={i} cx="262" cy={41 + h * 24} r="11" />
            <text className="ms__pn" x="262" y={45.5 + h * 24} textAnchor="middle">
              {i + 1}
            </text>
            <text className="ms__lab" data-i={i} x="282" y={45.5 + h * 24}>
              {labels[i] ?? ''}
            </text>
          </g>
        ))}
        <rect className="ms__scan" x="14" y="28" width="232" height="3" />
      </svg>
    </div>
  )
}

/* ------------------------------------------------------------------ price: a free badge */
function FreeBadge() {
  const ref = useMotion<HTMLDivElement>((el) => {
    const q = gsap.utils.selector(el)
    gsap.from(q('.fb__disc'), {
      scale: 0,
      rotate: -40,
      duration: 1,
      ease: 'back.out(1.6)',
      transformOrigin: '50% 50%',
    })
    gsap.from(q('.fb__w'), { yPercent: 120, duration: 0.9, ease: 'power4.out', delay: 0.3 })
    gsap.to(q('.fb__ring'), {
      rotate: 360,
      duration: 22,
      ease: 'none',
      repeat: -1,
      transformOrigin: '50% 50%',
    })
    gsap.from(q('.fb__tick'), {
      drawSVG: 0,
      duration: 0.5,
      stagger: 0.25,
      delay: 0.9,
      ease: 'power2.out',
    })
  }, [])
  return (
    <div ref={ref} className="fb">
      <svg viewBox="0 0 400 400" role="img" aria-label="Free to sign up. Free to onboard.">
        <defs>
          <path id="fb-circle" d="M200 200 m-150 0 a150 150 0 1 1 300 0 a150 150 0 1 1 -300 0" />
        </defs>
        <g className="fb__ring">
          <text className="fb__txt">
            <textPath href="#fb-circle" startOffset="0">
              FREE TO SIGN UP · FREE TO ONBOARD · ANY COMPANY SIZE ·
            </textPath>
          </text>
        </g>
        <circle className="fb__disc" cx="200" cy="200" r="112" />
        <clipPath id="fb-clip">
          <rect x="80" y="140" width="240" height="120" />
        </clipPath>
        <g clipPath="url(#fb-clip)">
          <text className="fb__w" x="200" y="238" textAnchor="middle">
            Free
          </text>
        </g>
        <path
          className="fb__tick"
          d="M150 275 L176 298 L228 262"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

/* ------------------------------------------------------------------ guides: a deck of covers */
function GuideStack({ titles }: { titles: string[] }) {
  const ref = useMotion<HTMLDivElement>((el) => {
    const cards = gsap.utils.toArray<HTMLElement>(el.querySelectorAll('.gs__c'))
    const pos = [
      { x: 0, y: 0, rotate: -3, scale: 1 },
      { x: 34, y: 22, rotate: 2, scale: 0.97 },
      { x: 64, y: 46, rotate: 5, scale: 0.94 },
      { x: 92, y: 68, rotate: 8, scale: 0.91 },
    ]
    let order = cards.map((_, i) => i)
    const apply = (dur: number) =>
      order.forEach((ci, p) =>
        gsap.to(cards[ci], { ...pos[p], zIndex: 10 - p, duration: dur, ease: 'power3.inOut' }),
      )
    const intro = gsap.from(cards, {
      y: 120,
      opacity: 0,
      rotate: 12,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
      paused: true,
    })
    playWhen(el, () => {
      intro.play()
      apply(0)
    })
    let dead = false
    let call: gsap.core.Tween | undefined
    const again = () => {
      if (dead) return
      const top = order[0]
      gsap.to(cards[top], {
        x: -150,
        rotate: -14,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
          order = [...order.slice(1), top]
          apply(0.6)
        },
      })
      call = gsap.delayedCall(3, again)
    }
    call = gsap.delayedCall(3.2, again)
    return () => {
      dead = true
      call?.kill()
      gsap.killTweensOf(cards)
    }
  }, [])
  return (
    <div ref={ref} className="gs" aria-hidden="true">
      {titles.map((t, i) => (
        <div key={t} className="gs__c" style={{ zIndex: 10 - i }}>
          <span className="ed-cap">Guide {String(i + 1).padStart(2, '0')}</span>
          <b>{t}</b>
          <i /> <i /> <i />
        </div>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ group: constellation */
function Constellation() {
  const ref = useMotion<HTMLDivElement>((el) => {
    const q = gsap.utils.selector(el)
    const tl = gsap.timeline({ paused: true })
    tl.from(q('.cn__orbit'), { drawSVG: 0, duration: 1.6, ease: 'power2.inOut' })
    tl.from(
      q('.cn__node'),
      { scale: 0, duration: 0.6, stagger: 0.18, ease: 'back.out(2.4)', transformOrigin: 'center' },
      0.4,
    )
    tl.from(q('.cn__spoke'), { drawSVG: 0, duration: 0.7, stagger: 0.15, ease: 'power2.out' }, 0.9)
    tl.add(() => {
      q('.cn__sat').forEach((d, i) =>
        gsap.to(d, {
          opacity: 1,
          motionPath: {
            path: q<SVGPathElement>('.cn__orbit')[0],
            align: q<SVGPathElement>('.cn__orbit')[0],
            alignOrigin: [0.5, 0.5],
            start: i / 3,
            end: i / 3 + 1,
          },
          duration: 14,
          ease: 'none',
          repeat: -1,
        }),
      )
    }, 1.2)
    playWhen(el, () => void tl.play(), 'top 80%')
    return () => {
      gsap.killTweensOf(q('.cn__sat'))
    }
  }, [])
  return (
    <div ref={ref} className="ed-card cn">
      <svg
        viewBox="0 0 460 340"
        role="img"
        aria-label="Tabhi at the centre, with Mondee, Abhee and Miraee around it."
      >
        <path className="cn__orbit" d="M50 170 a180 112 0 1 0 360 0 a180 112 0 1 0 -360 0" />
        <path className="cn__spoke" d="M230 170 L90 92" />
        <path className="cn__spoke" d="M230 170 L378 112" />
        <path className="cn__spoke" d="M230 170 L300 282" />
        <g className="cn__node cn__node--c">
          <circle cx="230" cy="170" r="46" />
          <image href="/img/logo-tabhi.png" x="200" y="147" width="60" height="36" />
        </g>
        <g className="cn__node">
          <rect x="44" y="72" width="92" height="38" rx="19" />
          <image href="/img/logo-mondee.svg" x="58" y="82" width="64" height="14" />
        </g>
        <g className="cn__node">
          <rect x="332" y="92" width="92" height="38" rx="19" />
          <image href="/img/logo-abhee.webp" x="346" y="97" width="64" height="16" />
        </g>
        <g className="cn__node cn__node--m">
          <rect x="250" y="262" width="100" height="38" rx="19" />
          <image href="/img/miraee-logo-orange.svg" x="268" y="272" width="64" height="16" />
        </g>
        <circle className="cn__sat" r="6" />
        <circle className="cn__sat" r="6" />
        <circle className="cn__sat" r="6" />
      </svg>
    </div>
  )
}

/* ------------------------------------------------------------------ template: a policy page being written */
function PolicyDoc() {
  const ref = useMotion<HTMLDivElement>((el) => {
    const q = gsap.utils.selector(el)
    const tl = gsap.timeline({ paused: true })
    tl.from(q('.pd__sheet'), { y: 60, rotate: -3, opacity: 0, duration: 0.8, ease: 'power3.out' })
    tl.from(
      q('.pd__h'),
      { scaleX: 0, transformOrigin: 'left center', duration: 0.6, ease: 'power3.out' },
      0.5,
    )
    tl.from(
      q('.pd__l'),
      {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.45,
        ease: 'power2.out',
        stagger: 0.12,
      },
      0.9,
    )
    tl.from(
      q('.pd__box'),
      { scale: 0, duration: 0.35, ease: 'back.out(3)', stagger: 0.25, transformOrigin: 'center' },
      1.2,
    )
    tl.from(
      q('.pd__tag'),
      { y: 24, opacity: 0, rotate: 6, duration: 0.5, stagger: 0.15, ease: 'back.out(2)' },
      '>-0.3',
    )
    tl.add(() => {
      gsap.fromTo(
        q('.pd__caret'),
        { opacity: 1 },
        { opacity: 0, duration: 0.5, repeat: -1, yoyo: true, ease: 'steps(1)' },
      )
    }, 1.4)
    playWhen(el, () => void tl.play(), 'top 80%')
    return () => {
      gsap.killTweensOf(q('.pd__caret'))
    }
  }, [])
  return (
    <div ref={ref} className="pd" aria-hidden="true">
      <div className="pd__sheet ed-card">
        <span className="ed-cap">Travel policy</span>
        <i className="pd__h" />
        {[78, 92, 64, 86, 40].map((w, i) => (
          <div key={i} className="pd__row">
            <i className="pd__box" />
            <i className="pd__l" style={{ width: `${w}%` }} />
          </div>
        ))}
        <i className="pd__caret" />
      </div>
      <span className="pd__tag pd__tag--a">Word</span>
      <span className="pd__tag pd__tag--b">PDF</span>
      <span className="pd__tag pd__tag--c">Checklist</span>
    </div>
  )
}

/* ------------------------------------------------------------------ stage + switch */
const STAGES: Record<InnerPage['art'], string> = {
  rules: 'arch',
  alert: 'disc',
  ledger: 'slab',
  policy: 'diamond',
  phone: 'arch',
  shield: 'disc',
  report: 'slab',
  method: 'diamond',
  price: 'none',
  guides: 'slab',
  group: 'disc',
}

/** The page-hero motion scene for each `art` value, set on a paper-cut shape. */
export function PageArt({ page }: { page: InnerPage }) {
  const art = page.art
  const titles = page.sections.map((s) => s.title)
  let body: React.ReactNode
  switch (art) {
    case 'rules':
      body = <PolicyCard />
      break
    case 'alert':
      body = <SplitFlap alert />
      break
    case 'ledger':
      body = <LedgerCard rows={TRIPS} />
      break
    case 'policy':
      body = page.path.includes('template') ? <PolicyDoc /> : <ApprovalFlow />
      break
    case 'phone':
      body = (
        <div className="pa__phone">
          <img
            className="pa__person"
            src="/img/px8367824-finance-lead.webp"
            width="591"
            height="638"
            alt="A colleague smiling at her phone"
          />
          <ChatSim />
        </div>
      )
      break
    case 'shield':
      body = <ShieldArt />
      break
    case 'report':
      body = <SampleReport />
      break
    case 'method':
      body = <MethodScan labels={titles} />
      break
    case 'price':
      body = <FreeBadge />
      break
    case 'guides':
      body = <GuideStack titles={titles} />
      break
    default:
      body = <Constellation />
  }
  return (
    <div className={`pa pa--${art}`} data-stage={STAGES[art]}>
      <span className="pa__shape" aria-hidden="true" />
      <div className="pa__body">{body}</div>
    </div>
  )
}
