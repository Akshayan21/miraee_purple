import * as React from 'react'
import { Link } from 'react-router-dom'

import { Seo } from '@/components/common/seo'
import { DialogLink } from '@/components/forms/form-dialogs-context'
import { Band, PageClosing, PageHero, Split } from '@/components/page/kit'
import { Button } from '@/components/ui/button'
import shared from '@/pages/home/home-shared.module.css'
import { AlertPhoneView } from '@/pages/home/product-views'
import { meta } from './meta'
import styles from './how-it-works.module.css'
import {
  ApprovalCard,
  FlightResultsPhone,
  HotelsPhone,
  OctoberLedger,
  ReceiptMatch,
  SetUpCard,
} from './views'

function Eyebrow({ children, lilac }: { children: React.ReactNode; lilac?: boolean }) {
  return <p className={`${styles.eyebrow} ${lilac ? styles.lilacEyebrow : ''}`}>{children}</p>
}

/** A product view with its V1 name and caption. */
function Figure({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <figure className={styles.fig}>
      {label ? (
        <div role="img" aria-label={label} className={styles.fig}>
          {children}
        </div>
      ) : (
        children
      )}
    </figure>
  )
}

const actions = (
  <>
    <Button asChild>
      <DialogLink to="/sign-up" dialog="signup">
        Sign up free
      </DialogLink>
    </Button>
    <Button asChild variant="secondary">
      <DialogLink to="/spend-review" dialog="review">
        Get a spend review
      </DialogLink>
    </Button>
  </>
)

/** Route: /how-it-works */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <PageHero
          id="hero-h"
          crumbs={[{ label: 'Home', to: import.meta.env.BASE_URL }, { label: 'How it works' }]}
          title={['From booking to month-end,', 'in six steps']}
          lead="Miraee is business travel and expense software: a travel assistant for every employee, with the controls finance needs."
          actions={actions}
          visual={<HotelsPhone />}
        />

        <Band tone="lilac" round aria-labelledby="s1-h">
          <Split
            copy={
              <>
                <Eyebrow lilac>Step 1</Eyebrow>
                <h2 className={`${shared.h2} ${styles.title}`} id="s1-h">
                  We set up your company with you
                </h2>
                <p className={styles.body}>
                  Onboarding is free. We set up your company, policy and people, train your admins
                  and finance team, and add the corporate cards you already use.
                </p>
              </>
            }
            visual={
              <Figure label="Company setup screen with travel policy, employees and payment settings.">
                <SetUpCard />
              </Figure>
            }
          />
        </Band>

        <Band tone="night" glow aria-labelledby="s2-h">
          <Split
            reverse
            dark
            copy={
              <>
                <Eyebrow>Step 2</Eyebrow>
                <h2 className={`${shared.h2} ${styles.title}`} id="s2-h">
                  Employees ask for a trip and pick an option in policy
                </h2>
                <p className={styles.body}>
                  Every flight and hotel comes back marked in or out of policy. The assistant
                  suggests. Your approvers decide.
                </p>
                <p className={styles.body}>
                  Booking for someone else? Pick their name and book in a few steps.
                </p>
                <p className={styles.body}>
                  Global flight and hotel coverage from the Mondee travel marketplace.
                </p>
              </>
            }
            visual={
              <Figure label="Flight results from Austin to Chicago, each marked in policy or out of policy.">
                <FlightResultsPhone />
              </Figure>
            }
          />
        </Band>

        <Band tone="plum" aria-labelledby="s3-h">
          <Split
            dark
            copy={
              <>
                <Eyebrow>Step 3</Eyebrow>
                <h2 className={`${shared.h2} ${styles.title}`} id="s3-h">
                  Approvers see only the exceptions
                </h2>
                <p className={styles.body}>
                  Trips inside policy go ahead. Anything out of policy goes to an approver.
                </p>
              </>
            }
            visual={<ApprovalCard />}
          />
        </Band>

        <Band tone="lilac" aria-labelledby="s4-h">
          <Split
            reverse
            copy={
              <>
                <Eyebrow lilac>Step 4</Eyebrow>
                <h2 className={`${shared.h2} ${styles.title}`} id="s4-h">
                  Travelers get new options when plans change
                </h2>
                <p className={styles.body}>
                  When a flight is delayed or canceled, your traveler gets an alert and new options
                  to confirm. The change is logged for the travel lead and finance.
                </p>
                <p className={styles.linkRow}>
                  <Button asChild variant="tertiary">
                    <Link to="/when-plans-change">See what happens when plans change</Link>
                  </Button>
                </p>
              </>
            }
            visual={
              <Figure label="Phone alert about a delayed flight with two new options.">
                <AlertPhoneView />
              </Figure>
            }
          />
        </Band>

        <Band tone="night" aria-labelledby="s5-h">
          <Split
            dark
            copy={
              <>
                <Eyebrow>Step 5</Eyebrow>
                <h2 className={`${shared.h2} ${styles.title}`} id="s5-h">
                  Receipts match to card charges
                </h2>
                <p className={styles.body}>
                  Upload a receipt. Miraee matches it to the card charge, checks it against policy
                  and tracks reimbursements.
                </p>
              </>
            }
            visual={
              <Figure label="A hotel receipt matched to its card charge.">
                <div className={styles.match}>
                  <ReceiptMatch />
                </div>
              </Figure>
            }
          />
        </Band>

        <Band tone="lilac" aria-labelledby="s6-h">
          <Split
            reverse
            copy={
              <>
                <Eyebrow lilac>Step 6</Eyebrow>
                <h2 className={`${shared.h2} ${styles.title}`} id="s6-h">
                  Finance sees every trip, coded and budgeted
                </h2>
                <p className={styles.body}>
                  One dashboard with finance analytics and a full audit log of who booked what, and
                  when.
                </p>
                <p className={styles.linkRow}>
                  <Button asChild variant="tertiary">
                    <Link to="/finance">See the finance view</Link>
                  </Button>
                </p>
              </>
            }
            visual={
              <Figure>
                <div className={styles.ledgerFig}>
                  <OctoberLedger />
                </div>
              </Figure>
            }
          />
        </Band>

        <Band tone="plum" aria-labelledby="rep-h">
          <div className={styles.replace}>
            <h2 className={`${shared.h2} ${styles.replaceTitle}`} id="rep-h">
              What does Miraee replace?
            </h2>
            <p className={styles.replaceBody}>
              Miraee replaces your booking tool and your agency's routine flight and hotel bookings.
              You keep your corporate cards.
            </p>
          </div>
        </Band>

        <PageClosing
          title={
            <>
              See it on <span className={shared.accent}>your company's travel</span>
            </>
          }
          lead="Free to sign up and onboard, at any company size."
          actions={actions}
        />
      </main>
    </>
  )
}
Component.displayName = 'HowItWorksPage'
