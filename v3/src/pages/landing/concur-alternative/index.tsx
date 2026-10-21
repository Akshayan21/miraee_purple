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

/** Route: /lp/concur-alternative */
export function Component() {
  return (
    <LandingFrame
      links={[
        { to: '/compare/sap-concur', label: 'Full comparison: Miraee vs SAP Concur' },
        { to: '/pricing', label: 'Pricing' },
        { to: '/security', label: 'Security' },
      ]}
      smallPrint="SAP Concur is a trademark of SAP SE or its affiliates. SAP Concur facts are taken from concur.com, checked September 30, 2026."
    >
      <Seo meta={meta} />
      <main id="main">
        <PageHero
          id="hero-h"
          title="An SAP Concur alternative with free onboarding"
          lead="Miraee is business travel and expense software. Sign-up and onboarding are free at any size, and we train your admins and finance team."
          actions={<SignupActions />}
          note="Built by Tabhi, the company behind the Mondee travel marketplace."
          visual={<OctoberLedger />}
        />

        <Band tone="lilac" round aria-labelledby="facts-h">
          <div className={s.tableHead}>
            <p className={s.dateline}>
              Last updated <time dateTime="2026-09-30">September 30, 2026</time>
            </p>
            <SectionHead id="facts-h" title="Getting started, side by side" />
          </div>
          <DataTable>
            <table>
              <caption className="sr-only">Getting started: SAP Concur and Miraee</caption>
              <thead>
                <tr>
                  <th scope="col">
                    <span className="sr-only">Item</span>
                  </th>
                  <th scope="col" className={s.cell}>
                    SAP Concur<small>concur.com, checked September 30, 2026</small>
                  </th>
                  <th scope="col">Miraee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Pricing</th>
                  <td>Request pricing; prices are not published</td>
                  <td>Sign-up and onboarding free at any company size</td>
                </tr>
                <tr>
                  <th scope="row">Getting started</th>
                  <td>Through a quote request</td>
                  <td>
                    Company setup, travel policy, employee onboarding and payment settings, with
                    training for admins and finance
                  </td>
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
                  Start from your Concur expense extract
                </h2>
                <p>
                  Send one file: an agency booking report or an expense extract. We show bookings
                  outside your program, spend outside policy, the cost of booking late and unused
                  tickets, all from your own data. Any savings figure is a dollar range, with the
                  method shown.
                </p>
                <div className={shared.buttons}>
                  <SpendReviewAction />
                </div>
              </div>
            }
            visual={
              <Photo
                name="landing-concur-hero"
                width={2046}
                height={1364}
                alt="Colleagues take notes at a wooden meeting table."
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
                title: 'SAP Concur',
                body: 'Offers travel, expense and invoice products from one vendor (concur.com, checked September 30, 2026). If your expense and invoice processes already run there and your people use it well, it may be the right place to stay.',
              },
              {
                title: 'Miraee',
                body: 'Built for US companies of 300 to 1,500 people that want booking their people pick up fast, policy on every trip, finance coding built in and free onboarding.',
              },
            ]}
          />
        </Band>

        <PageClosing
          title="Start with free onboarding"
          lead="Free to sign up and onboard, at any company size."
          actions={<SignupActions />}
        />
      </main>
    </LandingFrame>
  )
}
Component.displayName = 'LandingConcurAlternativePage'
