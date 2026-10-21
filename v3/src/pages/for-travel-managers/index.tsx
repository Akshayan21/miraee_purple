import { Link } from 'react-router-dom'

import { Seo } from '@/components/common/seo'
import { DialogLink } from '@/components/forms/form-dialogs-context'
import {
  BigStat,
  Band,
  PageClosing,
  PageHero,
  SmallPrint,
  Split,
  StackPanels,
} from '@/components/page/kit'
import { AlertPhoneView } from '@/pages/home/product-views'
import { Button } from '@/components/ui/button'
import shared from '@/pages/home/home-shared.module.css'
import { meta } from './meta'
import {
  ApprovalView,
  BookForOthersView,
  HotelsPhoneView,
  OnboardingView,
  PolicyChecklistView,
} from './views'

const signup = (
  <Button asChild>
    <DialogLink to="/sign-up" dialog="signup">
      Sign up free
    </DialogLink>
  </Button>
)
const how = (
  <Button asChild variant="tertiary">
    <Link to="/how-it-works">See how it works</Link>
  </Button>
)

/** Route: /travel-managers */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <PageHero
          crumbs={[{ label: 'Home', to: '/' }, { label: 'For travel managers' }]}
          title="The corporate travel booking tool that runs your policy"
          lead="Miraee is business travel and expense software. Your policy runs on every booking, and approvals only reach you when something is out of policy."
          actions={
            <>
              {signup}
              {how}
            </>
          }
          visual={<PolicyChecklistView />}
        />

        <Band tone="lilac" round aria-labelledby="pol-h">
          <Split
            copy={
              <>
                <h2 className={shared.h2} id="pol-h">
                  Every option is checked against your policy
                </h2>
                <p className={shared.lead}>
                  Upload your policy during onboarding. Every result is marked in or out of policy,
                  so travelers book without checking a document.
                </p>
              </>
            }
            visual={
              <div role="img" aria-label="Hotel options marked in policy.">
                <HotelsPhoneView />
              </div>
            }
          />
        </Band>

        <Band tone="night" glow aria-label="Approvals and booking for others">
          <StackPanels
            items={[
              {
                title: 'You approve only the exceptions',
                body: 'Trips inside policy go ahead. You see only the bookings that need a decision.',
                view: <ApprovalView />,
                label: 'An approval request for a booking above the policy limit.',
              },
              {
                title: 'Book for anyone you support',
                body: 'Assistants and office admins book for their team in a few steps. Options already fit company rules, so fewer trips need approval.',
                view: <BookForOthersView />,
                label: "Booking screen with a colleague's name selected.",
              },
            ]}
          />
        </Band>

        <Band tone="plum" aria-labelledby="plans-h">
          <Split
            dark
            reverse
            copy={
              <>
                <h2 className={shared.h2} id="plans-h">
                  An alert and new options when plans change
                </h2>
                <p className={shared.lead}>
                  A delayed or canceled flight brings your traveler an alert and new options. They
                  confirm one, and you see the change in the audit log.
                </p>
                <BigStat dark value={64} suffix="%">
                  of travel managers say changes and cancellations are hard in their booking tool.
                </BigStat>
                <p>
                  <Button asChild variant="tertiary">
                    <Link to="/when-plans-change">See what happens when plans change</Link>
                  </Button>
                </p>
              </>
            }
            visual={<AlertPhoneView />}
          />
        </Band>

        <Band tone="lilac" round aria-labelledby="roll-h">
          <Split
            copy={
              <>
                <h2 className={shared.h2} id="roll-h">
                  Free onboarding, policy and people included
                </h2>
                <p className={shared.lead}>
                  We set up your company, policy and people with you, and train your admins and
                  finance team.
                </p>
              </>
            }
            visual={
              <div role="img" aria-label="Onboarding checklist with six completed steps.">
                <OnboardingView />
              </div>
            }
          />
        </Band>

        <PageClosing
          title="Your policy on every booking, from the first trip."
          lead="Free to sign up and onboard, at any company size."
          actions={
            <>
              {signup}
              {how}
            </>
          }
        />
        <SmallPrint>Product views show illustrative data.</SmallPrint>
      </main>
    </>
  )
}
Component.displayName = 'ForTravelManagersPage'
