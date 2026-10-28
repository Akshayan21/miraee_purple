import { HOME } from '@/content/site'
import { ArrowLink, ChapterHead, Heading } from '@/components/page/kit'
import { ChatSim } from '@/components/art/chat-sim'
import { LedgerCard } from '@/components/art/ledger-card'
import { PolicyCard } from '@/components/art/policy-card'
import { ScrollTrigger, gsap, useMotion } from '@/lib/motion'

const ART = [
  <PolicyCard key="p" manual />,
  <ChatSim key="c" manual />,
  <LedgerCard key="l" manual />,
]
const CAPTIONS = [
  'Fig. 02 / The policy card',
  'Fig. 03 / The assistant',
  'Fig. 04 / The finance ledger',
]

/**
 * How Miraee works. On desktop the three steps pin and travel sideways as you scroll, each scene playing as it arrives
 * (rules ticking on, a chat typing out a booking, a ledger filling row by row). On smaller screens, or with reduced
 * motion, the steps stack and each plays when it scrolls into view (or simply shows its final state).
 */
export function HowSection({ num }: { num: number }) {
  const { headline, sub, steps, link } = HOME.how
  const ref = useMotion<HTMLDivElement>((el, c) => {
    const q = gsap.utils.selector(el)
    const panels = q<HTMLElement>('.how__panel')
    const play = (i: number) => {
      const art = panels[i]?.querySelector('[data-manual]')
      art?.dispatchEvent(new Event('v4:play'))
    }
    const pin = q<HTMLElement>('.how__pin')[0]
    if (c.wide) {
      const track = q<HTMLElement>('.how__track')[0]
      const n = panels.length
      pin.setAttribute('data-pinned', '')
      const fill = q('.how__fill')[0]
      const marks = q('.how__mark')
      const fired = new Set<number>()
      const tween = gsap.to(track, {
        xPercent: -(100 * (n - 1)) / n,
        ease: 'none',
        scrollTrigger: {
          trigger: pin,
          pin: true,
          scrub: 0.7,
          start: 'top 68px',
          end: () => '+=' + Math.round(window.innerHeight * 2.4),
          invalidateOnRefresh: true,
          refreshPriority: 1,
          onUpdate(self) {
            const p = self.progress
            gsap.set(fill, { scaleX: p })
            const cur = p < 0.3 ? 0 : p < 0.8 ? 1 : 2
            marks.forEach((m, i) => m.classList.toggle('is-on', i <= cur))
            ;[0, 0.3, 0.8].forEach((t, i) => {
              if (p >= t && !fired.has(i)) {
                fired.add(i)
                play(i)
              }
            })
          },
        },
      })
      // The first scene plays as soon as the pinned stage is in view.
      const first = ScrollTrigger.create({
        trigger: pin,
        start: 'top 80%',
        once: true,
        onEnter: () => play(0),
      })
      return () => {
        pin.removeAttribute('data-pinned')
        first.kill()
        tween.kill()
      }
    }
    // Stacked layout: each scene plays as it scrolls into view.
    panels.forEach((panel, i) =>
      ScrollTrigger.create({
        trigger: panel,
        start: 'top 72%',
        once: true,
        onEnter: () => play(i),
      }),
    )
  }, [])

  return (
    <section id="how" className="ed-ch ed-ch--paper ed-how" aria-labelledby="how-h">
      <div className="ed-wrap">
        <ChapterHead num={num} label="How it works" />
        <div className="how__intro">
          <Heading id="how-h" className="ed-h--xl">
            {headline}
          </Heading>
          <p className="ed-lead" data-rv>
            {sub}
          </p>
        </div>
      </div>
      <div ref={ref} className="how__stage">
        <div className="how__pin">
          <div className="how__track">
            {steps.map((s, i) => (
              <article key={s.title} className="how__panel">
                <div className="ed-wrap how__in">
                  <div className="how__txt">
                    <span className="how__no" aria-hidden="true">
                      {i + 1}
                    </span>
                    <p className="ed-cap how__step">Step {i + 1} of 3</p>
                    <h3 className="how__title">{s.title}</h3>
                    <p className="how__body">{s.body}</p>
                  </div>
                  <figure className="how__art">
                    {ART[i]}
                    <figcaption className="ed-cap ed-cap--soft">{CAPTIONS[i]}</figcaption>
                  </figure>
                </div>
              </article>
            ))}
          </div>
          <div className="how__prog" aria-hidden="true">
            <span className="how__bar">
              <i className="how__fill" />
            </span>
            {steps.map((s, i) => (
              <span key={s.title} className="how__mark is-on">
                {String(i + 1).padStart(2, '0')} {s.title}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="ed-wrap how__link">
        <ArrowLink to="/how-it-works">{link}</ArrowLink>
      </div>
    </section>
  )
}
