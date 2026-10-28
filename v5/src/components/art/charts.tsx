import * as React from 'react'

import { Fn } from '@/components/glass/ui'
import { gsap } from '@/lib/gsap'
import { countUp, useMotion, whenVisible } from '@/lib/motion'

/* ------------------------------ Network dots ------------------------------ */
function seeded(seed: number) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

const NET = (() => {
  const rnd = seeded(42)
  const nodes: { x: number; y: number; r: number }[] = []
  const cols = 9
  const rows = 4
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++)
      nodes.push({
        x: 40 + c * 52 + (rnd() - 0.5) * 30 + (r % 2) * 22,
        y: 30 + r * 50 + (rnd() - 0.5) * 24,
        r: 2 + rnd() * 2.4,
      })
  const edges: [number, number][] = []
  nodes.forEach((a, i) =>
    nodes.forEach((b, j) => {
      if (j > i && Math.hypot(a.x - b.x, a.y - b.y) < 66) edges.push([i, j])
    }),
  )
  return { nodes, edges }
})()

/** A moving network of dots: pulses travel along the links. Decorative. */
export function NetworkDots({ className = '' }: { className?: string }) {
  const ref = React.useRef<HTMLDivElement>(null)
  useMotion(ref, ({ root }) => {
    const nodes = gsap.utils.toArray<SVGElement>('.net-n', root)
    const links = gsap.utils.toArray<SVGPathElement>('.net-l', root)
    gsap.fromTo(
      nodes,
      { scale: 0, transformOrigin: '50% 50%' },
      {
        scale: 1,
        duration: 0.6,
        stagger: { each: 0.012, from: 'random' },
        ease: 'back.out(3)',
        delay: 0.2,
      },
    )
    gsap.fromTo(
      links,
      { drawSVG: '0%' },
      { drawSVG: '100%', duration: 1.2, stagger: 0.01, ease: 'power2.inOut', delay: 0.3 },
    )
    nodes.forEach((n, i) =>
      gsap.to(n, {
        opacity: 0.45,
        duration: 1.6 + (i % 5) * 0.4,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: (i % 7) * 0.2,
      }),
    )
    const pulses = gsap.utils.toArray<SVGCircleElement>('.net-p', root)
    pulses.forEach((p, i) => {
      const path = links[(i * 11 + 3) % links.length]
      gsap.set(p, { opacity: 0 })
      gsap
        .timeline({ repeat: -1, repeatDelay: 0.6 + (i % 3) * 0.5, delay: 1 + i * 0.35 })
        .to(p, { opacity: 1, duration: 0.15 })
        .to(
          p,
          {
            motionPath: { path, align: path, alignOrigin: [0.5, 0.5] },
            duration: 1.1,
            ease: 'power1.inOut',
          },
          0,
        )
        .to(p, { opacity: 0, duration: 0.2 }, '-=0.2')
    })
  })
  return (
    <div className={`net ${className}`} ref={ref} aria-hidden="true">
      <svg viewBox="0 0 520 220" preserveAspectRatio="xMidYMid slice">
        {NET.edges.map(([a, b], i) => (
          <path
            key={i}
            className="net-l"
            d={`M${NET.nodes[a].x} ${NET.nodes[a].y} L${NET.nodes[b].x} ${NET.nodes[b].y}`}
          />
        ))}
        {NET.nodes.map((n, i) => (
          <circle key={i} className="net-n" cx={n.x} cy={n.y} r={n.r} />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <circle key={i} className="net-p" cx="0" cy="0" r="4.5" />
        ))}
      </svg>
    </div>
  )
}

/* ------------------------------ Stat tile with count-up ------------------------------ */
export function StatTile({
  value,
  label,
  note,
  tone = 'glass',
  className = '',
}: {
  value: string
  label: string
  note?: number
  tone?: 'glass' | 'plum' | 'tint'
  className?: string
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const num = React.useRef<HTMLSpanElement>(null)
  useMotion(ref, ({ root }) => {
    const el = num.current
    if (!el) return
    const m = /^(\d+)(.*)$/.exec(value)
    const trigger = whenVisible(root, () => {
      if (m) countUp(el, Number(m[1]), { suffix: m[2], duration: 1.8 })
      else
        gsap.to(el, {
          duration: 1.4,
          scrambleText: { text: value, chars: 'upperCase', speed: 0.6, revealDelay: 0.3 },
        })
    })
    if (m) el.textContent = '0' + m[2]
    else el.textContent = ' '
    return () => trigger.kill()
  })
  return (
    <div
      ref={ref}
      className={`tile stat tile--${tone === 'glass' ? 'lift' : tone} ${className}`}
      data-reveal
    >
      <p className="fig stat-n">
        <span ref={num}>{value}</span>
        {note ? <Fn n={note} /> : null}
      </p>
      <p className="p">{label}</p>
    </div>
  )
}

/* ------------------------------ Growth chart (3D bars + line) ------------------------------ */
const BARS = [58, 74, 70, 98, 118, 140, 172]

export function GrowthChart() {
  const ref = React.useRef<HTMLDivElement>(null)
  const base = 232
  const w = 38
  const d = 15
  const dy = 9
  const gap = 20
  const x0 = 34
  const pts = BARS.map((h, i) => [x0 + i * (w + gap) + w / 2 + d / 2, base - h - dy - 14] as const)
  const path = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`).join(' ')

  useMotion(ref, ({ root }) => {
    const bars = gsap.utils.toArray<SVGGElement>('.gc-bar', root)
    const dots = gsap.utils.toArray<SVGCircleElement>('.gc-dot', root)
    gsap.set(bars, { scaleY: 0, transformOrigin: '50% 100%' })
    gsap.set('.gc-line', { drawSVG: '0%' })
    gsap.set(dots, { scale: 0, transformOrigin: '50% 50%' })
    const tl = gsap.timeline({ paused: true })
    tl.to(bars, { scaleY: 1, duration: 1, stagger: 0.1, ease: 'elastic.out(1,0.7)' })
      .to('.gc-line', { drawSVG: '100%', duration: 1.4, ease: 'power2.inOut' }, 0.5)
      .to(dots, { scale: 1, duration: 0.5, stagger: 0.12, ease: 'back.out(3)' }, 0.7)
    const t = whenVisible(root, () => tl.play(), 'top 80%')
    // Cursor tilt in 3D.
    const svg = root.querySelector<SVGElement>('svg')!
    gsap.set(svg, { transformPerspective: 900 })
    const rx = gsap.quickTo(svg, 'rotationX', { duration: 0.8, ease: 'power3.out' })
    const ry = gsap.quickTo(svg, 'rotationY', { duration: 0.8, ease: 'power3.out' })
    const move = (e: PointerEvent) => {
      const r = root.getBoundingClientRect()
      ry(((e.clientX - r.left) / r.width - 0.5) * 16)
      rx(-((e.clientY - r.top) / r.height - 0.5) * 10)
    }
    const leave = () => {
      rx(0)
      ry(0)
    }
    root.addEventListener('pointermove', move)
    root.addEventListener('pointerleave', leave)
    return () => {
      t.kill()
      tl.kill()
      root.removeEventListener('pointermove', move)
      root.removeEventListener('pointerleave', leave)
    }
  })

  return (
    <div className="gc" ref={ref}>
      <svg
        viewBox="0 0 440 260"
        role="img"
        aria-label="Chart: monthly travel spend rising, with every booking in one view."
      >
        <defs>
          <linearGradient id="gcF" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#7a3a5c" />
            <stop offset="1" stopColor="#43162e" />
          </linearGradient>
          <linearGradient id="gcT" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#f2b6dc" />
            <stop offset="1" stopColor="#c9a8f0" />
          </linearGradient>
          <linearGradient id="gcS" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2b0d1d" />
            <stop offset="1" stopColor="#43162e" />
          </linearGradient>
        </defs>
        <g className="gc-grid">
          {[0, 1, 2, 3].map((i) => (
            <path key={i} d={`M20 ${base - i * 56} H430`} />
          ))}
        </g>
        {BARS.map((h, i) => {
          const x = x0 + i * (w + gap)
          const y = base - h
          return (
            <g key={i} className="gc-bar">
              <rect x={x} y={y} width={w} height={h} fill="url(#gcF)" rx="2" />
              <polygon
                points={`${x},${y} ${x + d},${y - dy} ${x + w + d},${y - dy} ${x + w},${y}`}
                fill="url(#gcT)"
              />
              <polygon
                points={`${x + w},${y} ${x + w + d},${y - dy} ${x + w + d},${base - dy} ${x + w},${base}`}
                fill="url(#gcS)"
              />
            </g>
          )
        })}
        <path className="gc-line" d={path} />
        {pts.map(([x, y], i) => (
          <circle key={i} className="gc-dot" cx={x} cy={y} r="5.5" />
        ))}
      </svg>
    </div>
  )
}

/* ------------------------------ Ring ("12%") ------------------------------ */
export function RingStat({ value, text, note }: { value: number; text: string; note: number }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const num = React.useRef<HTMLSpanElement>(null)
  const R = 78
  const C = 2 * Math.PI * R
  useMotion(ref, ({ root }) => {
    const arc = root.querySelector<SVGCircleElement>('.rstat-arc')!
    gsap.set(arc, { strokeDashoffset: C })
    const t = whenVisible(root, () => {
      gsap.to(arc, { strokeDashoffset: C * (1 - value / 100), duration: 1.8, ease: 'power3.out' })
      if (num.current) countUp(num.current, value, { suffix: '%', duration: 1.8 })
    })
    if (num.current) num.current.textContent = '0%'
    return () => t.kill()
  })
  return (
    <div className="rstat" ref={ref}>
      <svg viewBox="0 0 200 200" aria-hidden="true">
        <circle className="rstat-track" cx="100" cy="100" r={R} />
        <circle
          className="rstat-arc"
          cx="100"
          cy="100"
          r={R}
          strokeDasharray={C}
          strokeDashoffset={C * (1 - value / 100)}
          transform="rotate(-90 100 100)"
        />
      </svg>
      <p className="fig rstat-n">
        <span ref={num}>{value}%</span>
        <Fn n={note} />
      </p>
      <p className="p rstat-t">{text}</p>
    </div>
  )
}
