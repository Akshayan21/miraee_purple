import { HOME } from '@/content/site'
import { gsap, playWhen, useMotion } from '@/lib/motion'

const LOGOS: Record<string, { src: string; w: number; h: number }> = {
  Tabhi: { src: '/img/logo-tabhi.png', w: 219, h: 131 },
  Mondee: { src: '/img/logo-mondee.png', w: 160, h: 35 },
  Abhee: { src: '/img/logo-abhee.webp', w: 640, h: 162 },
}

/** The real group logos. */
function Mark({ name }: { name: string }) {
  const l = LOGOS[name]
  return (
    <span className={`bm__mark bm__mark--${name.toLowerCase()}`}>
      <img src={l.src} width={l.w} height={l.h} alt={name} loading="lazy" decoding="async" />
    </span>
  )
}

/** The three group brands in a row with a reveal: logo wipes in, captions follow. */
export function BrandMarks() {
  const ref = useMotion<HTMLUListElement>((el) => {
    const items = Array.from(el.children)
    const tl = gsap.timeline({ paused: true })
    items.forEach((li, i) => {
      const mark = li.querySelector('.bm__mark')
      tl.fromTo(
        li,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
        i * 0.25,
      )
      tl.fromTo(
        mark,
        { clipPath: 'inset(0 100% 0 0)' },
        { clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power3.inOut' },
        i * 0.25 + 0.2,
      )
      tl.from(
        li.querySelector('.bm__rule'),
        { scaleX: 0, transformOrigin: 'left center', duration: 0.7, ease: 'power3.inOut' },
        i * 0.25 + 0.4,
      )
    })
    playWhen(el, () => void tl.play(), 'top 80%')
  }, [])
  return (
    <ul ref={ref} className="bm">
      {HOME.group.brands.map((b, i) => (
        <li key={b.name} className="bm__i">
          <span className="ed-cap ed-cap--soft">{String(i + 1).padStart(2, '0')}</span>
          <div className="bm__box">
            <Mark name={b.name} />
          </div>
          <span className="bm__rule" aria-hidden="true" />
          <h3 className="bm__n">{b.name}</h3>
          <p className="bm__t">{b.text}</p>
        </li>
      ))}
    </ul>
  )
}
