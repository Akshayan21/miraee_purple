import * as React from 'react'

import styles from './trip-route.module.css'

type Stop = { x: number; y: number; label: string; len: number }
type Extra = { d: string; kind: 'fan' | 'cancel'; at: number }
type Geometry = {
  w: number
  h: number
  d: string
  stops: Stop[]
  extras: Extra[]
  total: number
  wide: boolean
}

const PLANE =
  'M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z'

/** Below this width the route becomes a single line down the left edge. */
const WIDE = 1360

function measure(d: string) {
  const p = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  p.setAttribute('d', d)
  return p.getTotalLength()
}

type Point = {
  x: number
  y: number
  label: string
  reroute: boolean
  fan: boolean
}

/**
 * One continuous trip: a route line drawn through the whole page, with a plane riding its tip.
 * Sections mark their stops with `data-stop="<label>"`; `data-route-start` / `data-route-end` mark
 * the departure and the landing. `data-reroute` adds a cancelled-route detour and `data-fan` splits
 * the line. The path is rebuilt from measured positions, so it follows any screen and copy length.
 */
export function TripRoute({ children }: { children: React.ReactNode }) {
  const root = React.useRef<HTMLDivElement>(null)
  const line = React.useRef<SVGPathElement>(null)
  const plane = React.useRef<SVGGElement>(null)
  const [geo, setGeo] = React.useState<Geometry | null>(null)
  const [reached, setReached] = React.useState(0)
  const [reduced, setReduced] = React.useState(false)

  // Build the path from where the sections actually sit.
  React.useEffect(() => {
    const el = root.current
    if (!el) return
    const build = () => {
      const w = el.clientWidth
      const h = el.scrollHeight
      const wide = w >= WIDE
      const originTop = el.getBoundingClientRect().top + window.scrollY
      const yOf = (node: Element, edge: 'top' | 'bottom', offset = 0) => {
        const r = node.getBoundingClientRect()
        return (edge === 'top' ? r.top : r.bottom) + window.scrollY - originTop + offset
      }
      const gutter = wide ? Math.max(36, Math.min(80, (w - 1200) / 4)) : 11
      const xL = gutter
      const xR = wide ? w - gutter : gutter
      const cx = wide ? w / 2 : gutter

      const pts: Point[] = []
      const start = el.querySelector('[data-route-start]')
      const end = el.querySelector('[data-route-end]')
      if (start) pts.push({ x: cx, y: yOf(start, 'bottom'), label: '1', reroute: false, fan: false })
      let side = 0
      el.querySelectorAll('[data-stop]').forEach((node) => {
        pts.push({
          x: side % 2 === 0 ? xL : xR,
          y: yOf(node, 'top', Number((node as HTMLElement).dataset.stopY ?? 56)),
          label: (node as HTMLElement).dataset.stop ?? '',
          reroute: node.hasAttribute('data-reroute'),
          fan: node.hasAttribute('data-fan'),
        })
        side += 1
      })
      if (end) {
        pts.push({ x: cx, y: yOf(end, 'top', 140), label: String(pts.length + 1), reroute: false, fan: false })
      }
      if (pts.length < 2) return

      const cmds: string[] = [`M${pts[0].x} ${pts[0].y}`]
      const extras: Extra[] = []
      const stops: Stop[] = [{ x: pts[0].x, y: pts[0].y, label: pts[0].label, len: 0 }]
      let curX = pts[0].x
      let curY = pts[0].y
      for (let i = 1; i < pts.length; i++) {
        const p = pts[i]
        if (wide && Math.abs(p.x - curX) > 1) {
          const first = i === 1
          const last = i === pts.length - 1
          const sweep = Math.min(first || last ? 110 : 150, (p.y - curY) * 0.45)
          if (first) {
            cmds.push(`C${curX} ${curY + sweep * 0.5} ${p.x} ${curY + sweep * 0.5} ${p.x} ${curY + sweep}`)
            cmds.push(`L${p.x} ${p.y}`)
          } else {
            cmds.push(`L${curX} ${p.y - sweep}`)
            cmds.push(`C${curX} ${p.y - sweep * 0.5} ${p.x} ${p.y - sweep * 0.5} ${p.x} ${p.y}`)
          }
        } else {
          cmds.push(`L${p.x} ${p.y}`)
        }
        curX = p.x
        curY = p.y
        stops.push({ x: p.x, y: p.y, label: p.label, len: measure(cmds.join(' ')) })
        if (wide && p.reroute) {
          const out = p.x < w / 2 ? -34 : 34
          extras.push({
            d: `M${p.x} ${p.y} L${p.x} ${p.y + 150} M${p.x - 9} ${p.y + 141} L${p.x + 9} ${p.y + 159} M${p.x + 9} ${p.y + 141} L${p.x - 9} ${p.y + 159}`,
            kind: 'cancel',
            at: i,
          })
          cmds.push(`C${p.x + out} ${p.y + 50} ${p.x + out} ${p.y + 210} ${p.x} ${p.y + 260}`)
          curY = p.y + 260
        }
        if (wide && p.fan) {
          for (const k of [-2, -1, 1, 2]) {
            const o = k * 15
            extras.push({
              d: `M${p.x} ${p.y} C${p.x + o} ${p.y + 60} ${p.x + o} ${p.y + 200} ${p.x} ${p.y + 260}`,
              kind: 'fan',
              at: i,
            })
          }
        }
      }
      const d = cmds.join(' ')
      setGeo({ w, h, d, stops, extras, total: measure(d), wide })
    }
    build()
    const ro = new ResizeObserver(build)
    ro.observe(el)
    window.addEventListener('resize', build)
    window.addEventListener('load', build)
    void document.fonts?.ready.then(build)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', build)
      window.removeEventListener('load', build)
    }
  }, [])

  React.useEffect(() => {
    const q = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduced(q.matches)
    sync()
    q.addEventListener('change', sync)
    return () => q.removeEventListener('change', sync)
  }, [])

  // Scroll position -> distance along the path, with the plane resting at each stop.
  React.useEffect(() => {
    const el = root.current
    const path = line.current
    const craft = plane.current
    if (!geo || !el || !path || !craft) return
    const total = geo.total
    path.style.strokeDasharray = `${total}`
    if (reduced) {
      path.style.strokeDashoffset = '0'
      craft.style.display = 'none'
      setReached(geo.stops.length)
      return
    }
    craft.style.display = ''
    let shown = -1
    let frame = 0
    let reachedNow = -1
    const targetFor = () => {
      const originTop = el.getBoundingClientRect().top + window.scrollY
      const anchor = window.scrollY + window.innerHeight * 0.55 - originTop
      const s = geo.stops
      if (anchor <= s[0].y) return 0
      for (let i = 0; i < s.length - 1; i++) {
        const a = s[i]
        const b = s[i + 1]
        if (anchor < b.y) {
          const plateau = Math.min(90, (b.y - a.y) * 0.15)
          if (anchor < a.y + plateau) return a.len
          if (anchor > b.y - plateau) return b.len
          const t = (anchor - (a.y + plateau)) / (b.y - plateau - (a.y + plateau))
          return a.len + (b.len - a.len) * t
        }
      }
      return total
    }
    const draw = (len: number) => {
      path.style.strokeDashoffset = `${total - len}`
      const at = path.getPointAtLength(len)
      const ahead = path.getPointAtLength(Math.min(total, len + 2))
      const behind = path.getPointAtLength(Math.max(0, len - 2))
      const angle = (Math.atan2(ahead.y - behind.y, ahead.x - behind.x) * 180) / Math.PI
      craft.setAttribute(
        'transform',
        `translate(${at.x} ${at.y}) rotate(${angle + 45}) scale(1.35) translate(-12 -12)`,
      )
      let n = 0
      geo.stops.forEach((st, i) => {
        if (len >= st.len - 1) n = i + 1
      })
      if (n !== reachedNow) {
        reachedNow = n
        setReached(n)
      }
    }
    const tick = () => {
      frame = 0
      const target = targetFor()
      shown = shown < 0 ? target : shown + (target - shown) * 0.14
      if (Math.abs(target - shown) < 0.4) shown = target
      draw(shown)
      if (shown !== target) frame = requestAnimationFrame(tick)
    }
    const kick = () => {
      if (!frame) frame = requestAnimationFrame(tick)
    }
    kick()
    window.addEventListener('scroll', kick, { passive: true })
    window.addEventListener('resize', kick)
    return () => {
      window.removeEventListener('scroll', kick)
      window.removeEventListener('resize', kick)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [geo, reduced])

  return (
    <div ref={root} className={styles.root}>
      {children}
      {geo ? (
        <svg
          className={styles.svg}
          width={geo.w}
          height={geo.h}
          viewBox={`0 0 ${geo.w} ${geo.h}`}
          aria-hidden="true"
          focusable="false"
        >
          <path className={styles.guide} d={geo.d} />
          {geo.extras.map((x, i) => (
            <path
              key={i}
              className={`${styles.extra} ${x.kind === 'cancel' ? styles.cancel : ''} ${reached > x.at ? styles.extraOn : ''}`}
              d={x.d}
            />
          ))}
          <path ref={line} className={styles.line} d={geo.d} />
          {geo.stops.map((s, i) => (
            <g
              key={i}
              className={`${styles.dot} ${reached > i ? styles.reached : ''}`}
              transform={`translate(${s.x} ${s.y})`}
            >
              <circle r={geo.wide ? 15 : 6} />
              {geo.wide ? <text>{s.label}</text> : null}
            </g>
          ))}
          <g ref={plane}>
            <path className={styles.plane} d={PLANE} />
          </g>
        </svg>
      ) : null}
    </div>
  )
}
