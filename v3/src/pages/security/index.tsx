import { Link } from 'react-router-dom'

import { Seo } from '@/components/common/seo'
import { DialogLink } from '@/components/forms/form-dialogs-context'
import { PackDialog } from '@/components/forms/form-dialogs'
import { Band, CardGrid, PageClosing, PageHero, SectionHead, Split } from '@/components/page/kit'
import { Button } from '@/components/ui/button'
import shared from '@/pages/home/home-shared.module.css'
import { meta } from './meta'
import styles from './security.module.css'
import { AuditLogView, ClipWindow } from './views'

const PACK = [
  'A completed security questionnaire',
  'A data processing agreement',
  'A penetration test summary',
]

/** Route: /security */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <PageHero
          id="hero-h"
          crumbs={[{ label: 'Home', to: '/' }, { label: 'Security' }]}
          title="Security at Miraee"
          lead="Miraee is business travel and expense software. One approved travel tool for the whole company, with a security pack ready when your review starts."
          actions={
            <>
              <Button asChild>
                <DialogLink to="#pack" dialog="pack">
                  Request the security pack
                </DialogLink>
              </Button>
              <Button asChild variant="secondary">
                <Link to="/talk-to-sales">Talk to sales</Link>
              </Button>
            </>
          }
          visual={
            <picture>
              <source srcSet="/img/document/security-hero-1.webp" type="image/webp" />
              <img
                className={styles.portrait}
                src="/img/document/security-hero-1.jpg"
                width="1364"
                height="2046"
                alt="A man in a dark suit and red tie stands with his arms crossed."
                fetchPriority="high"
              />
            </picture>
          }
        />

        <Band tone="plum" round aria-labelledby="signin-h">
          <Split
            dark
            copy={
              <>
                <img
                  className={styles.icon}
                  src="/img/icons/user-round.svg"
                  alt=""
                  width="32"
                  height="32"
                />
                <h2 className={shared.h2} id="signin-h">
                  Sign in with Google
                </h2>
                <p className={styles.splitLead}>
                  Your team signs in with their Google work accounts. Single sign-on is on our
                  roadmap; ask and we'll share the date in writing.
                </p>
              </>
            }
            visual={<ClipWindow video="panel-sec" />}
          />
        </Band>

        <Band tone="lilac" aria-labelledby="control-h">
          <Split
            reverse
            copy={
              <>
                <h2 className={shared.h2} id="control-h">
                  The assistant suggests. Your approvers decide.
                </h2>
                <p className={styles.splitLeadInk}>
                  Anything out of policy goes to an approver. Every booking and change is in the
                  audit log.
                </p>
              </>
            }
            visual={
              <figure style={{ margin: 0, width: '100%', display: 'grid', justifyItems: 'center' }}>
                <AuditLogView />
                <figcaption className={styles.captionInk}>
                  Product view with illustrative data.
                </figcaption>
              </figure>
            }
          />
        </Band>

        <Band tone="night" glow id="pack" aria-labelledby="pack-h">
          <SectionHead id="pack-h" tone="night" title="Your security review, in one pack" />
          <CardGrid
            dark
            columns={3}
            items={PACK.map((label) => ({
              title: label,
              icon: '/img/icons/check-mist.svg',
            }))}
          />
          <div className={styles.packFoot}>
            <p className={styles.packNote}>Ask for it at any stage of your review.</p>
            <div className={shared.buttons}>
              <Button asChild>
                <DialogLink to="#pack" dialog="pack">
                  Request the security pack
                </DialogLink>
              </Button>
            </div>
          </div>
        </Band>

        <Band tone="lilac" aria-labelledby="data-h">
          <div className={styles.alone}>
            <SectionHead id="data-h" title="You choose what to share." />
            <p className={styles.statement}>
              For a spend review you send one file, an agency booking report or an expense extract.
              We sign an NDA first, and the report is yours to keep.
            </p>
          </div>
        </Band>

        <Band tone="plum" aria-labelledby="who-h">
          <div className={styles.alone}>
            <SectionHead id="who-h" tone="plum" title="Who is behind Miraee" />
            <p className={styles.splitLead}>
              Miraee is built by Tabhi, the company behind the Mondee travel marketplace.
            </p>
            <div className={shared.buttons}>
              <Button asChild variant="secondary">
                <Link to="/company">About the company</Link>
              </Button>
            </div>
          </div>
        </Band>

        <PageClosing
          title={
            <>
              One approved travel tool <span className={shared.accent}>for the whole company.</span>
            </>
          }
          lead="Free to sign up and onboard, at any company size."
          actions={
            <>
              <Button asChild>
                <DialogLink to="/sign-up" dialog="signup">
                  Sign up free
                </DialogLink>
              </Button>
              <Button asChild variant="secondary">
                <Link to="/pricing">See what's free</Link>
              </Button>
            </>
          }
        />
      </main>
      <PackDialog />
    </>
  )
}
Component.displayName = 'SecurityPage'
