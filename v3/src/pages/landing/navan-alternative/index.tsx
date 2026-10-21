import { Seo } from '@/components/common/seo'
import {
  Band,
  CardGrid,
  DataTable,
  EditorialList,
  PageClosing,
  PageHero,
  SectionHead,
  Split,
} from '@/components/page/kit'
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

/** Route: /lp/navan-alternative */
export function Component() {
  return (
    <LandingFrame
      links={[
        { to: '/compare/navan', label: 'Full comparison: Miraee vs Navan' },
        { to: '/pricing', label: 'Pricing' },
        { to: '/security', label: 'Security' },
      ]}
      smallPrint="Navan is a trademark of its owner. Navan facts are taken from navan.com/pricing, checked September 30, 2026."
    >
      <Seo meta={meta} />
      <main id="main">
        <PageHero
          id="hero-h"
          title="A Navan alternative that's free to start at any size"
          lead="Miraee is business travel and expense software. Sign-up and onboarding are free at any company size, and you can review last year's travel first."
          actions={<SignupActions />}
          note="Built by Tabhi, the company behind the Mondee travel marketplace."
          visual={<OctoberLedger />}
        />

        <Band tone="lilac" round aria-labelledby="facts-h">
          <div className={s.tableHead}>
            <p className={s.dateline}>
              Last updated <time dateTime="2026-09-30">September 30, 2026</time>
            </p>
            <SectionHead id="facts-h" title="Cost to start, side by side" />
          </div>
          <DataTable>
            <table>
              <caption className="sr-only">Cost to start: Navan and Miraee</caption>
              <thead>
                <tr>
                  <th scope="col">
                    <span className="sr-only">Item</span>
                  </th>
                  <th scope="col" className={s.cell}>
                    Navan<small>navan.com/pricing, checked September 30, 2026</small>
                  </th>
                  <th scope="col">Miraee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Free entry</th>
                  <td>Business plan, for companies with up to 300 employees</td>
                  <td>Sign-up and onboarding, at every company size</td>
                </tr>
                <tr>
                  <th scope="row">Above 300 employees</th>
                  <td>Enterprise plan, priced by quote</td>
                  <td>The same free sign-up and onboarding</td>
                </tr>
              </tbody>
            </table>
          </DataTable>
        </Band>

        <Band tone="night" glow aria-labelledby="gets-h">
          <SectionHead id="gets-h" tone="night" title="What you get with Miraee" />
          <EditorialList
            dark
            items={[
              {
                title: 'Policy on every booking.',
                body: 'Options are marked in or out of policy.',
              },
              { title: 'Approvals for exceptions only.' },
              {
                title: 'Every trip budgeted and coded,',
                body: 'with a finance dashboard and full audit log.',
              },
              {
                title: 'New options when plans change.',
                body: 'Travelers get an alert and confirm.',
              },
              { title: 'Your cards stay.' },
            ]}
          />
        </Band>

        <Band tone="plum" aria-labelledby="proof-h">
          <Split
            dark
            reverse
            copy={
              <div className={s.copy}>
                <h2 id="proof-h" className={`${shared.h2} ${s.copyTitle}`}>
                  Check our work on your own data
                </h2>
                <p>
                  Send one booking report. We show bookings outside your program, spend outside
                  policy, the cost of booking late and unused tickets, all from your own data. Any
                  savings figure is a dollar range, with the method shown.
                </p>
                <div className={shared.buttons}>
                  <SpendReviewAction />
                </div>
              </div>
            }
            visual={
              <Photo
                name="landing-navan-hero"
                width={1364}
                height={2046}
                alt="A smiling woman in a red top outdoors."
              />
            }
          />
        </Band>

        <Band tone="lilac" aria-labelledby="fits-h">
          <SectionHead id="fits-h" title="Where each fits" />
          <CardGrid
            columns={2}
            items={[
              {
                title: "Navan's free Business plan",
                body: 'Covers companies with up to 300 employees (navan.com/pricing, checked September 30, 2026). If you are inside that size and it does what you need, it may suit you.',
              },
              {
                title: 'Miraee',
                body: 'Built for US companies of 300 to 1,500 people that want a free start at their size and proof on their own numbers.',
              },
            ]}
          />
        </Band>

        <PageClosing
          title="Start free at your size"
          lead="Free to sign up and onboard, at any company size."
          actions={<SignupActions />}
        />
      </main>
    </LandingFrame>
  )
}
Component.displayName = 'LandingNavanAlternativePage'
