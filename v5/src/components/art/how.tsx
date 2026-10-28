import * as React from 'react'
import { Link } from 'react-router-dom'

import { ChatPanel, LedgerPanel, PolicyCard, playChat, playLedger } from '@/components/art/product'
import { SectionHead } from '@/components/glass/ui'
import { HOME } from '@/content/site'
import { Flip, gsap, ScrollTrigger } from '@/lib/gsap'
import { useMotion } from '@/lib/motion'

/**
 * How it works. On a wide screen the section pins and ONE bento reconfigures between the three steps with
 * GSAP Flip: the policy card becomes the phone booking chat becomes the finance ledger. Everywhere else
 * (phones, tablets, reduced motion) the same three tiles simply sit in a stacked bento, fully shown.
 */
export function HowScene() {
  const ref = React.useRef<HTMLDivElement>(null)
  const how = HOME.how

  useMotion(
    ref,
    ({ desktop, root }) => {
      if (!desktop || window.innerHeight < 740) return
      const stage = root.querySelector<HTMLElement>('.how-stage')!
      const tiles = gsap.utils.toArray<HTMLElement>('.how-t', root)
      const steps = gsap.utils.toArray<HTMLElement>('.how-step', root)
      const [policy, phone, ledger] = tiles
      let cur = 0
      let sim: gsap.core.Timeline | undefined

      stage.classList.add('is-pinned')
      const mark = (n: number) => {
        stage.dataset.step = String(n)
        tiles.forEach((t, i) => (t.dataset.on = String(i === n - 1)))
        steps.forEach((s, i) => s.classList.toggle('is-on', i === n - 1))
      }

      const rowsIn = () => {
        const rows = policy.querySelectorAll('[data-row]')
        gsap.fromTo(
          rows,
          { autoAlpha: 0, x: -18 },
          {
            autoAlpha: 1,
            x: 0,
            stagger: 0.12,
            duration: 0.5,
            ease: 'power3.out',
            clearProps: 'transform,opacity,visibility',
            delay: 0.5,
          },
        )
        gsap.fromTo(
          policy.querySelectorAll('.pc-tick'),
          { scale: 0 },
          {
            scale: 1,
            stagger: 0.12,
            delay: 0.7,
            duration: 0.4,
            ease: 'back.out(3)',
            clearProps: 'transform',
          },
        )
      }

      const go = (n: number, first = false) => {
        if (n === cur) return
        cur = n
        sim?.kill()
        if (first) {
          mark(n)
          rowsIn()
          return
        }
        const state = Flip.getState(tiles, { props: 'borderRadius' })
        mark(n)
        Flip.from(state, {
          duration: 0.95,
          ease: 'power3.inOut',
          absolute: true,
          scale: false,
          onComplete: () => {
            if (n === 2) sim = playChat(phone)
            if (n === 3) sim = playLedger(ledger)
            if (n === 1) rowsIn()
          },
        })
      }

      go(1, true)
      const st = ScrollTrigger.create({
        trigger: root.querySelector('.how-in'),
        start: 'top 96px',
        end: '+=1700',
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => go(self.progress < 0.34 ? 1 : self.progress < 0.68 ? 2 : 3),
      })

      const clicks = steps.map((s, i) => {
        const fn = () => {
          const target = st.start + ((st.end - st.start) * (i + 0.5)) / 3
          window.scrollTo({ top: target, behavior: 'smooth' })
        }
        s.querySelector('button')?.addEventListener('click', fn)
        return () => s.querySelector('button')?.removeEventListener('click', fn)
      })

      return () => {
        clicks.forEach((c) => c())
        sim?.kill()
        stage.classList.remove('is-pinned')
        stage.dataset.step = '1'
        tiles.forEach((t) => {
          delete t.dataset.on
          gsap.set(t, { clearProps: 'all' })
        })
        gsap.set(
          root.querySelectorAll('[data-row],[data-m],[data-opt],[data-dots],.pc-tick,.led-foot'),
          { clearProps: 'all' },
        )
      }
    },
    [],
  )

  return (
    <section className="sec how" aria-labelledby="how-h" ref={ref}>
      <div className="wrap how-in">
        <SectionHead id="how-h" eyebrow="Three steps" title={how.headline} sub={how.sub} />
        <div className="how-stage" data-step="1">
          <div className="tile how-steps" data-reveal>
            <ol>
              {how.steps.map((s, i) => (
                <li key={s.title} className={`how-step${i === 0 ? 'is-on' : ''}`}>
                  <button
                    type="button"
                    className="how-step-btn"
                    tabIndex={-1}
                    aria-label={`Show step ${i + 1}`}
                  >
                    <span className="how-num fig">{i + 1}</span>
                  </button>
                  <div>
                    <h3 className="h-sm disp">{s.title}</h3>
                    <p className="p">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link to="/how-it-works" className="gb gb--link">
              {how.link}
            </Link>
          </div>

          <div className="how-area">
            <div className="tile how-t how-policy" data-on="true" data-reveal>
              <p className="how-chip">
                <span className="fig">1</span> {how.steps[0].title}
              </p>
              <div className="how-body">
                <PolicyCard />
              </div>
            </div>
            <div className="tile how-t how-phone" data-on="false" data-reveal>
              <p className="how-chip">
                <span className="fig">2</span> {how.steps[1].title}
              </p>
              <div className="how-body">
                <ChatPanel />
              </div>
            </div>
            <div className="tile tile--plum how-t how-ledger" data-on="false" data-reveal>
              <p className="how-chip">
                <span className="fig">3</span> {how.steps[2].title}
              </p>
              <div className="how-body">
                <LedgerPanel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
