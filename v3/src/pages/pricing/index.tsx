import * as React from 'react'
import { Link } from 'react-router-dom'

import { Seo } from '@/components/common/seo'
import { DialogLink } from '@/components/forms/form-dialogs-context'
import { Band, DataTable, FaqBand, PageClosing, PageHero, SectionHead } from '@/components/page/kit'
import { Reveal } from '@/components/scenes/reveal'
import { Button } from '@/components/ui/button'
import shared from '@/pages/home/home-shared.module.css'
import { faq } from './faq'
import { meta } from './meta'
import styles from './pricing.module.css'

/** Decorative looping clip; stays on its still poster for visitors who prefer reduced motion. */
function PanelClip() {
  const ref = React.useRef<HTMLVideoElement>(null)
  React.useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) ref.current?.pause()
  }, [])
  return (
    <video
      ref={ref}
      src="/video/panel-pricing.mp4"
      poster="/video/panel-pricing.jpg"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
    />
  )
}

const signup = (
  <Button asChild>
    <DialogLink to="/sign-up" dialog="signup">
      Sign up free
    </DialogLink>
  </Button>
)

/** Route: /pricing */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <PageHero
          crumbs={[{ label: 'Home', to: '/' }, { label: 'Pricing' }]}
          title="Free to sign up and onboard, at any company size"
          lead="Miraee is business travel and expense software. We set up your company, your policy and your people with you, free."
          actions={
            <>
              {signup}
              <Button asChild variant="tertiary">
                <Link to="/how-it-works">See how it works</Link>
              </Button>
            </>
          }
          note={
            <>
              <Link to="/company">Built by Tabhi</Link>, the company behind the Mondee travel
              marketplace.
            </>
          }
        />

        <Band tone="lilac" round aria-labelledby="free-h">
          <SectionHead id="free-h" title="What's free" />
          <div className={styles.free}>
            <DataTable>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Item</th>
                    <th scope="col">What you get</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Sign-up</th>
                    <td>
                      <img src="/img/icons/check.svg" alt="" width="20" height="20" />A company
                      account for everyone
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Onboarding</th>
                    <td>
                      <img src="/img/icons/check.svg" alt="" width="20" height="20" />
                      Company and policy setup, employee onboarding, payment settings with your
                      current cards, and training for admins and finance
                    </td>
                  </tr>
                </tbody>
              </table>
            </DataTable>
          </div>
        </Band>

        <Band tone="night" glow aria-labelledby="size-h">
          <div className={styles.size}>
            <Reveal className={styles.sizeText}>
              <h2 className={styles.sizeTitle} id="size-h">
                Same start for 300 people or <span className={shared.accent}>3,000</span>
              </h2>
              <p className={shared.lead}>There is no headcount cap.</p>
            </Reveal>
            <Reveal>
              <figure className={styles.clip}>
                <PanelClip />
              </figure>
            </Reveal>
          </div>
        </Band>

        <Band tone="plum" aria-labelledby="review-h">
          <div className={styles.duo}>
            <SectionHead id="review-h" tone="plum" title="Want proof first?" />
            <Reveal className={styles.duoBody}>
              <p className={shared.lead}>
                Ask for a spend review: last year's travel, reviewed trip by trip from one booking
                report. Optional, and on request.
              </p>
              <div className={shared.buttons}>
                <Button asChild variant="secondary">
                  <DialogLink to="/spend-review" dialog="review">
                    Get a spend review
                  </DialogLink>
                </Button>
              </div>
            </Reveal>
          </div>
        </Band>

        <Band tone="lilac" round aria-labelledby="terms-h">
          <div className={styles.duo}>
            <SectionHead id="terms-h" title="Booking terms" />
            <Reveal className={styles.duoBody}>
              <p className={shared.lead}>
                We set out booking terms in writing before your team books its first trip.
              </p>
              <div className={shared.buttons}>
                <Button asChild variant="tertiary">
                  <Link to="/talk-to-sales">Talk to sales</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </Band>

        <FaqBand heading="Questions" items={faq} tone="plum" />

        <PageClosing
          title="Start with the whole company."
          lead="Free to sign up and onboard, at any company size."
          actions={
            <>
              {signup}
              <Button asChild variant="tertiary">
                <Link to="/compare">Compare corporate travel software</Link>
              </Button>
            </>
          }
        />
      </main>
    </>
  )
}
Component.displayName = 'PricingPage'
