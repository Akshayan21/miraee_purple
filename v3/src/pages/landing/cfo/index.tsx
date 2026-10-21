import { Seo } from '@/components/common/seo'
import { Band, BigStat, PageClosing, PageHero, SectionHead, Split } from '@/components/page/kit'
import shared from '@/pages/home/home-shared.module.css'
import {
  LandingFrame,
  OctoberLedger,
  Photo,
  SignupActions,
  SpendReviewAction,
} from '../shared/landing-shared'
import s from '../shared/landing-shared.module.css'
import { meta } from './meta'
import { DashboardView } from './views'

/** Route: /lp/cfo */
export function Component() {
  return (
    <LandingFrame
      links={[
        { to: '/pricing', label: 'Pricing' },
        { to: '/security', label: 'Security' },
      ]}
    >
      <Seo meta={meta} />
      <main id="main">
        <PageHero
          id="hero-h"
          title="See where your travel money goes"
          lead="Miraee is business travel and expense software. Every trip arrives with its budget and GL code. Free to sign up and onboard, at any company size."
          actions={<SignupActions />}
          note="Built by Tabhi, the company behind the Mondee travel marketplace. Keep the corporate cards you already use."
          visual={<OctoberLedger />}
        />

        <Band tone="lilac" round aria-label="Why now">
          <div className={s.stats}>
            <BigStat value={7.2} decimals={1} suffix="%">
              Business travel spending is forecast to rise 7.2% in 2026, while the number of trips
              rises 1.3%.
            </BigStat>
            <BigStat value={12} suffix="%">
              Only 12% of travel programs have their data in one place.
            </BigStat>
          </div>
        </Band>

        <Band tone="night" glow aria-labelledby="gets-h">
          <Split
            dark
            copy={
              <div className={s.copy}>
                <h2 id="gets-h" className={`${shared.h2} ${s.copyTitle}`}>
                  Every booking in policy, budgeted and coded
                </h2>
                <ul className={s.checks}>
                  <li>Set policy, GL codes and budgets once.</li>
                  <li>Approvals only for exceptions.</li>
                  <li>One finance dashboard and a full audit log.</li>
                  <li>Receipts matched to card charges and checked against policy.</li>
                </ul>
              </div>
            }
            visual={
              <figure style={{ margin: 0 }}>
                <DashboardView />
              </figure>
            }
          />
        </Band>

        <Band tone="plum" aria-labelledby="proof-h">
          <Split
            dark
            reverse
            copy={
              <div className={s.copy}>
                <h2 id="proof-h" className={`${shared.h2} ${s.copyTitle}`}>
                  Want proof first? Review last year's travel.
                </h2>
                <p>
                  Send one booking report. We show bookings outside your program, spend outside
                  policy, the cost of booking late and unused tickets.
                </p>
                <p>
                  Any savings figure is a dollar range, with the method shown. The report is yours
                  to keep.
                </p>
                <div className={shared.buttons}>
                  <SpendReviewAction />
                </div>
              </div>
            }
            visual={
              <Photo
                name="landing-cfo-hero"
                width={1366}
                height={2046}
                alt="A confident professional in a striped shirt at golden hour."
              />
            }
          />
        </Band>

        <Band tone="lilac" aria-labelledby="free-h">
          <div className={s.free}>
            <SectionHead
              id="free-h"
              title="Free to sign up and onboard, at any company size."
              lead="We set up your company, policy and people with you."
            />
            <div className={shared.buttons}>
              <SignupActions />
            </div>
          </div>
        </Band>

        <PageClosing
          title="Close the month with every trip already coded."
          lead="Free to sign up and onboard, at any company size."
          actions={<SignupActions />}
        />
      </main>
    </LandingFrame>
  )
}
Component.displayName = 'LandingCfoPage'
