import { gsap, playWhen, typeInto, useMotion } from '@/lib/motion'
import { FLIGHT_OPTIONS } from './sample'

const ME = 'Chicago, Mar 9 to 11, from Austin.'
const AI = 'Three flights. Two are inside your policy.'

/** Typed text that reserves its final size so the bubble does not jump while it types. */
function Typed({ text, id }: { text: string; id: string }) {
  return (
    <span className="ty">
      <span className="ty__g" aria-hidden="true">
        {text}
      </span>
      <span className="ty__t" data-type={id}>
        {text}
      </span>
    </span>
  )
}

/** The assistant on a phone: a typed request, a typing pause, a typed reply, then the options inside policy. */
export function ChatSim({ manual, className }: { manual?: boolean; className?: string }) {
  const ref = useMotion<HTMLDivElement>((el) => {
    const me = el.querySelector<HTMLElement>('[data-type="me"]')!
    const ai = el.querySelector<HTMLElement>('[data-type="ai"]')!
    const bubMe = el.querySelector('.bub--me')
    const bubAi = el.querySelector('.bub--ai')
    const dots = el.querySelectorAll('.dots i')
    const opts = el.querySelectorAll('.opt')
    const tl = gsap.timeline({ paused: true })
    tl.from(bubMe, { opacity: 0, y: 14, scale: 0.96, duration: 0.35, ease: 'power3.out' })
    tl.add(typeInto(me, ME, 1.5))
    tl.from(el.querySelector('.dots'), { opacity: 0, y: 8, duration: 0.25 }, '+=0.25')
    tl.fromTo(
      dots,
      { y: 0 },
      { y: -4, duration: 0.28, stagger: 0.12, repeat: 4, yoyo: true, ease: 'sine.inOut' },
      '<',
    )
    tl.to(el.querySelector('.dots'), { opacity: 0, height: 0, margin: 0, duration: 0.2 }, '>')
    tl.from(bubAi, { opacity: 0, y: 14, duration: 0.3 }, '<')
    tl.add(typeInto(ai, AI, 1.4))
    tl.from(opts, { opacity: 0, y: 18, duration: 0.5, stagger: 0.22, ease: 'power3.out' }, '+=0.15')
    tl.fromTo(
      el.querySelector('.opt--over .opt__tag'),
      { scale: 0.6 },
      { scale: 1, duration: 0.4, ease: 'back.out(3)' },
      '>-0.1',
    )
    playWhen(el, () => void tl.play(), 'top 75%')
    return () => {
      me.textContent = ME
      ai.textContent = AI
    }
  }, [])
  return (
    <div ref={ref} className={`phone ${className ?? ''}`} data-manual={manual || undefined}>
      <div className="phone__notch" aria-hidden="true" />
      <div className="phone__bar">
        <span className="phone__dot" aria-hidden="true" />
        Miraee assistant
      </div>
      <div className="phone__body">
        <p className="bub bub--me">
          <Typed text={ME} id="me" />
        </p>
        <div className="dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <p className="bub bub--ai">
          <Typed text={AI} id="ai" />
        </p>
        <ul className="opts">
          {FLIGHT_OPTIONS.map((o) => (
            <li key={o.code} className={`opt ${o.ok ? '' : 'opt--over'}`}>
              <span className="opt__t">{o.time}</span>
              <span className="opt__c">{o.code}</span>
              <span className="opt__f">{o.fare}</span>
              <span className="opt__tag" data-ok={o.ok || undefined}>
                {o.ok ? 'In policy' : 'Needs approval'}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="phone__in" aria-hidden="true">
        Ask for a trip
      </div>
    </div>
  )
}
