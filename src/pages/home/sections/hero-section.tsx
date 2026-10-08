import { useContext, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { IntroContext } from '@/components/motion/intro-context'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'
import styles from './hero-section.module.css'

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const loading = useContext(IntroContext)
  useEffect(() => {
    const root = ref.current
    if (!root || loading) return
    gsap.registerPlugin(ScrollTrigger)
    const media = gsap.matchMedia()
    media.add(
      {
        reduced: '(prefers-reduced-motion: reduce)',
        desktop: '(min-width: 1024px) and (hover: hover) and (pointer: fine)',
      },
      (context) => {
        if (context.conditions?.reduced) return
        const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })
        timeline
          .from('[data-hero-copy]', { y: 24, opacity: 0, duration: 0.7, stagger: 0.1 })
          .from('[data-hero-stage]', { y: 32, opacity: 0, duration: 0.85 }, 0.15)
          .from('[data-hero-trip]', { y: 28, opacity: 0, duration: 0.7 }, 0.4)
          .from('[data-hero-step]', { y: 10, opacity: 0, duration: 0.5, stagger: 0.22 }, 0.7)
          .fromTo(
            '[data-hero-route]',
            { strokeDasharray: 650, strokeDashoffset: 650 },
            { strokeDashoffset: 0, duration: 1.3, ease: 'power2.inOut' },
            0.6,
          )
        if (context.conditions?.desktop) {
          gsap.to('[data-hero-photo]', {
            yPercent: 8,
            ease: 'none',
            scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', scrub: 1 },
          })
        }
      },
      root,
    )
    return () => media.revert()
  }, [loading])

  return (
    <section ref={ref} className={`${styles.hero} mo-skip`} aria-labelledby="home-hero-h">
      <div className={styles.grid}>
        <div className={styles.copy}>
          <p data-hero-copy className={styles.eyebrow}>
            Business travel & expense software
          </p>
          <h1 data-hero-copy id="home-hero-h" className={styles.heading}>
            Business travel.
            <br />
            <span>
              Every dollar
              <br className={styles.desktopBreak} /> in view.
            </span>
          </h1>
          <p data-hero-copy className={styles.lead}>
            Book within policy. Track every trip, budget, and expense in one place.
          </p>
          <div data-hero-copy className={styles.actions}>
            <Button asChild>
              <DialogLink to="/sign-up" dialog="signup">
                Sign up free
              </DialogLink>
            </Button>
            <Button asChild variant="tertiary">
              <Link to="/how-it-works">See how it works</Link>
            </Button>
          </div>
          <p data-hero-copy className={styles.note}>
            Free to sign up and onboard. At any company size.
          </p>
          <p data-hero-copy className={styles.trust}>
            Built by Tabhi, the company behind the Mondee travel marketplace.
          </p>
        </div>
        <figure data-hero-stage className={styles.stage}>
          <div className={styles.photoWrap} aria-hidden="true">
            <img
              data-hero-photo
              src="/img/document/home-hero-1.jpg"
              width="626"
              height="418"
              alt=""
              fetchpriority="high"
              className={styles.photo}
            />
          </div>
          <div className={styles.stageHeading}>
            <span>One trip. A clear picture.</span>
            <span className={styles.liveDot} aria-hidden="true" />
          </div>
          <svg
            className={styles.route}
            viewBox="0 0 600 300"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M-10 225C110 225 50 25 230 60S400 290 610 95" />
            <path data-hero-route d="M-10 225C110 225 50 25 230 60S400 290 610 95" />
          </svg>
          <div data-hero-trip className={styles.trip}>
            <div className={styles.tripHeader}>
              <span>CLIENT VISIT</span>
              <span className={styles.policy}>In policy</span>
            </div>
            <div className={styles.destination}>
              <span>Chicago</span>
              <span aria-hidden="true">&#8599;</span>
            </div>
            <p className={styles.tripDetail}>
              Flight + hotel <span>Oct 14&#8211;16</span>
            </p>
            <div className={styles.amount}>
              <div>
                <span>Trip total</span>
                <strong>$1,284.60</strong>
              </div>
              <div className={styles.budget}>
                <span>Budget</span>
                <strong>$1,500.00</strong>
              </div>
            </div>
            <div className={styles.budgetTrack} aria-label="Trip uses 86 percent of its budget">
              <span />
            </div>
            <div className={styles.finance}>
              <span>Finance has the details</span>
              <span>GL 6200</span>
            </div>
          </div>
          <ol className={styles.steps} aria-label="Trip workflow">
            <li data-hero-step>
              <span className={styles.check} aria-hidden="true">
                &#10003;
              </span>
              <span>Booked</span>
            </li>
            <li data-hero-step>
              <span className={styles.check} aria-hidden="true">
                &#10003;
              </span>
              <span>In policy</span>
            </li>
            <li data-hero-step>
              <span className={styles.check} aria-hidden="true">
                &#10003;
              </span>
              <span>Ready for finance</span>
            </li>
          </ol>
          <figcaption className={styles.caption}>Product view with illustrative data.</figcaption>
        </figure>
      </div>
    </section>
  )
}
