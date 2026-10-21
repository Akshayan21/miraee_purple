import * as React from 'react'
import { Link } from 'react-router-dom'

import { useScrollScene } from '@/components/scroll/use-scroll-scene'
import { Button } from '@/components/ui/button'
import {
  AlertPhoneView,
  FinanceDashboardView,
  FlightsPhoneView,
  PolicyView,
} from '../product-views'
import shared from '../home-shared.module.css'
import styles from './journey-section.module.css'

const STEPS = [
  {
    title: 'Set your policy',
    body: 'We set up your company, your policy and your people with you.',
    view: <PolicyView />,
    label: 'Travel policy setup screen',
  },
  {
    title: 'Your people book',
    body: 'Employees ask the Miraee assistant for a trip and pick from options inside policy.',
    view: <FlightsPhoneView />,
    label: 'Flight options marked in policy or out of policy',
    phone: true,
  },
  {
    title: 'Finance sees every trip',
    body: 'Each booking arrives with its budget and GL code, in one dashboard.',
    view: <FinanceDashboardView />,
    label: 'Finance dashboard listing trips with budget and GL code',
  },
] as const

/**
 * The journey as a pinned horizontal track: vertical scroll pans the track sideways through the intro, the three steps and the
 * "plans change" moment. Each product view eases in as its panel crosses the screen (containerAnimation).
 */
export function JourneySection() {
  const root = React.useRef<HTMLElement>(null)

  useScrollScene(root, ({ gsap }) => {
    const track = root.current!.querySelector<HTMLElement>('[data-track]')!
    const distance = () => track.scrollWidth - window.innerWidth
    const pan = gsap.to(track, {
      x: () => -distance(),
      ease: 'none',
      scrollTrigger: {
        trigger: root.current,
        start: 'top top',
        end: () => `+=${distance()}`,
        pin: true,
        scrub: 0.8,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    })
    gsap.utils.toArray<HTMLElement>('[data-panel]').forEach((panel) => {
      const view = panel.querySelector('[data-view]')
      const copy = panel.querySelector('[data-copy]')
      const at = { trigger: panel, containerAnimation: pan, scrub: true }
      if (view) {
        gsap.fromTo(
          view,
          { yPercent: 14, rotateY: -16, scale: 0.9, opacity: 0.2 },
          {
            yPercent: 0,
            rotateY: 0,
            scale: 1,
            opacity: 1,
            ease: 'none',
            scrollTrigger: { ...at, start: 'left 95%', end: 'left 40%' },
          },
        )
      }
      if (copy) {
        gsap.fromTo(
          copy,
          { xPercent: 12, opacity: 0.15 },
          {
            xPercent: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: { ...at, start: 'left 90%', end: 'left 45%' },
          },
        )
      }
    })
  })

  return (
    <section ref={root} className={`${shared.night} ${styles.journey}`} aria-labelledby="how-h">
      <div className={styles.track} data-track>
        <article className={`${styles.panel} ${styles.intro}`} data-panel>
          <div className={styles.introCopy} data-copy>
            <h2 className={shared.display} id="how-h">
              How it works
            </h2>
            <p className={styles.introLead}>One trip, from the first search to the finance view.</p>
          </div>
        </article>

        {STEPS.map((s, i) => (
          <article key={s.title} className={styles.panel} data-panel>
            <div className={styles.copy} data-copy>
              <span className={styles.n} aria-hidden="true">
                {i + 1}
              </span>
              <h3 className={styles.title}>
                <span className="sr-only">{i + 1}. </span>
                {s.title}
              </h3>
              <p className={styles.body}>{s.body}</p>
            </div>
            <div
              className={`mr-paper ${styles.view} ${'phone' in s ? styles.phone : ''}`}
              data-view
              role="img"
              aria-label={s.label}
            >
              {s.view}
            </div>
          </article>
        ))}

        <article className={`${styles.panel} ${styles.alert}`} data-panel>
          <div className={styles.copy} data-copy>
            <h3 className={styles.title}>An alert and new options when plans change.</h3>
            <p className={styles.body}>
              When a flight is delayed or canceled, your traveler sees two new options and taps one.
            </p>
            <p className={styles.stat}>
              <span className={styles.fig}>89%</span>
              of travel buyers want help rebooking when plans change.
            </p>
            <Button asChild variant="tertiary">
              <Link to="/when-plans-change">See what happens</Link>
            </Button>
          </div>
          <div className={`mr-paper ${styles.view} ${styles.phone}`} data-view>
            <AlertPhoneView />
          </div>
        </article>
      </div>
    </section>
  )
}
