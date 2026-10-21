import { Seo } from '@/components/common/seo'
import { DialogLink } from '@/components/forms/form-dialogs-context'
import {
  BigStat,
  Band,
  PageClosing,
  PageHero,
  SectionHead,
  Split,
  StackPanels,
} from '@/components/page/kit'
import { Reveal } from '@/components/scenes/reveal'
import { Button } from '@/components/ui/button'
import shared from '@/pages/home/home-shared.module.css'
import { meta } from './meta'
import { ApprovalView, AuditLogView, GlBudgetsView, MatchView, TripsView } from './views'

const signup = (
  <Button asChild>
    <DialogLink to="/sign-up" dialog="signup">
      Sign up free
    </DialogLink>
  </Button>
)
const review = (
  <Button asChild variant="secondary">
    <DialogLink to="/spend-review" dialog="review">
      Get a spend review
    </DialogLink>
  </Button>
)

/** Route: /finance */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <PageHero
          crumbs={[{ label: 'Home', to: '/' }, { label: 'For finance' }]}
          title="Travel and expense management for finance teams"
          lead="Miraee is business travel and expense software. Every trip arrives with its GL code and budget, ready for month-end."
          actions={
            <>
              {signup}
              {review}
            </>
          }
          visual={<TripsView />}
        />

        <Band tone="lilac" round aria-label="Why finance teams need one view">
          <BigStat value={12} suffix="%">
            of travel programs have their data in one place.
          </BigStat>
        </Band>

        <Band tone="night" glow aria-label="Policy, audit log and receipts">
          <StackPanels
            items={[
              {
                title: 'Set policy, GL codes and budgets once',
                body: 'Miraee applies them to every booking. Options are marked in or out of policy, and only exceptions go to an approver.',
                view: <GlBudgetsView />,
                label: 'Settings screen for GL codes and travel budgets.',
              },
              {
                title: 'One dashboard. A full audit log.',
                body: 'Every booking and change is recorded: who, what and when.',
                view: <AuditLogView />,
                label: 'Audit log showing who booked, approved and changed a trip, and when.',
              },
              {
                title: 'Receipts matched to card charges',
                body: 'Travelers upload receipts. Miraee matches each to its card charge, flags anything out of policy and tracks reimbursements.',
                view: <MatchView />,
                label: 'A hotel receipt matched to its card charge and marked in policy.',
              },
            ]}
          />
        </Band>

        <Band tone="lilac" round aria-labelledby="cards-h">
          <SectionHead
            id="cards-h"
            title="Keep the corporate cards you already use."
            lead="Miraee replaces your booking tool and your agency's routine flight and hotel bookings. Your cards stay."
          />
        </Band>

        <Band tone="plum" aria-labelledby="appr-h">
          <Split
            dark
            reverse
            copy={
              <>
                <h2 className={shared.h2} id="appr-h">
                  The assistant suggests. Your approvers decide.
                </h2>
                <p className={shared.lead}>
                  Most finance leaders want AI to recommend, with a person approving. Miraee works
                  that way on every booking.
                </p>
              </>
            }
            visual={
              <div role="img" aria-label="An approval request for an out-of-policy hotel.">
                <ApprovalView />
              </div>
            }
          />
        </Band>

        <Band tone="lilac" round aria-labelledby="proof-h">
          <Reveal>
            <h2 className={shared.h2} id="proof-h">
              Want proof first?
            </h2>
            <p className={shared.lead} style={{ marginTop: 20 }}>
              Send one booking report. We review last year's travel, trip by trip. Any savings
              figure is a dollar range, with the method shown.
            </p>
            <div className={shared.buttons} style={{ marginTop: 32 }}>
              {review}
            </div>
          </Reveal>
        </Band>

        <PageClosing
          title="Close the month with every trip already coded."
          lead="Free to sign up and onboard, at any company size."
          actions={
            <>
              {signup}
              {review}
            </>
          }
        />
      </main>
    </>
  )
}
Component.displayName = 'ForFinancePage'
