import { Link } from 'react-router-dom'

import { Seo } from '@/components/common/seo'
import { Band, PageHero, SectionHead, Split } from '@/components/page/kit'
import { Button } from '@/components/ui/button'
import shared from '@/pages/home/home-shared.module.css'
import { ALL_GUIDES, GUIDES } from './guides'
import { DocCover, GuideCards, HeroPhoto, ResourcesClosing } from './guide-parts'
import { meta } from './meta'
import styles from './overview.module.css'
import { VideoLibrarySection } from './video-library-section'

/** Route: /resources */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <PageHero
          crumbs={[{ label: 'Home', to: '/' }, { label: 'Resources' }]}
          eyebrow="Guides and templates"
          title="Guides for running business travel"
          lead="Practical guides for the travel leads and finance teams who run company travel. Each works with whatever tool you use."
          actions={
            <>
              <Button asChild>
                <Link to="/resources/business-travel-policy-template">Get the template</Link>
              </Button>
              <Button asChild variant="secondary">
                <a href="#guides">Browse the guides</a>
              </Button>
            </>
          }
          visual={
            <HeroPhoto
              src="/img/document/resources-hero-1"
              width={2046}
              height={1151}
              alt="A small team talks around a wooden table in a cafe."
            />
          }
        />
        <VideoLibrarySection />
        <Band tone="lilac" round aria-labelledby="start-with-the-template">
          <SectionHead id="start-with-the-template" title="Start with the template" />
          <div className={styles.feature}>
            <Split
              reverse
              copy={
                <div className={styles.featureCopy}>
                  <p className={styles.kicker}>Free template</p>
                  <h3 className={styles.featureTitle}>
                    The Business Travel Policy Template for Growing Companies
                  </h3>
                  <p className={shared.lead}>
                    A complete policy you can edit: booking, flights, hotels, ground transport,
                    meals, approvals, changes, expenses and reimbursement, with a one-page rollout
                    checklist.
                  </p>
                  <div className={shared.buttons}>
                    <Button asChild>
                      <Link to="/resources/business-travel-policy-template">Get the template</Link>
                    </Button>
                  </div>
                </div>
              }
              visual={
                <div className={styles.coverStage}>
                  <DocCover hidden large />
                </div>
              }
            />
          </div>
          <div className={styles.guides}>
            <SectionHead id="guides" title="Guides" />
            <GuideCards items={ALL_GUIDES.map((s) => GUIDES[s])} columns={3} />
          </div>
        </Band>
        <ResourcesClosing
          title="Put every trip in one place."
          accent="in one place."
          body="Miraee is business travel and expense software. Free to sign up and onboard, at any company size."
          secondary={{ label: 'See how it works', to: '/how-it-works' }}
        />
      </main>
    </>
  )
}
Component.displayName = 'ResourcesOverviewPage'
