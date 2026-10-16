import { Seo } from '@/components/common/seo'
import { Link } from 'react-router-dom'
import { DialogLink } from '@/components/forms/form-dialogs-context'
import { LandingLayout } from '@/components/layout/landing-layout'
import { meta } from './meta'
import { HeroSection } from './sections/hero-section'
import { TheFactsDatedSection } from './sections/the-facts-dated-section'
import { WhatYouGetWithMiraeeSection } from './sections/what-you-get-with-miraee-section'
import { ProofFromYourConcurExtractSection } from './sections/proof-from-your-concur-extract-section'
import { WhereEachFitsSection } from './sections/where-each-fits-section'
import { ClosingSection } from './sections/closing-section'

/** Route: /lp/concur-alternative */
export function Component() {
  return (
    <LandingLayout
      tone="plum"
      footer={
        <>
          <nav aria-label="Page links">
            <ul>
              <li>
                <Link to="/compare/sap-concur">Full comparison: Miraee vs SAP Concur</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/security">Security</Link>
              </li>
              <li>
                <DialogLink to="/sign-up" dialog="signup">
                  Sign up
                </DialogLink>
              </li>
            </ul>
          </nav>
          <p className="small-print">
            SAP Concur is a trademark of SAP SE or its affiliates. SAP Concur facts are taken from
            concur.com, checked September 30, 2026.
          </p>
        </>
      }
    >
      <Seo meta={meta} />
      <main id="main">
        <HeroSection />
        <TheFactsDatedSection />
        <WhatYouGetWithMiraeeSection />
        <ProofFromYourConcurExtractSection />
        <WhereEachFitsSection />
        <ClosingSection />
      </main>
    </LandingLayout>
  )
}
Component.displayName = 'LandingConcurAlternativePage'
