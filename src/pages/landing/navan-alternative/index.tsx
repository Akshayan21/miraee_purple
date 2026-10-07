import { Seo } from '@/components/common/seo'
import { Link } from 'react-router-dom'
import { DialogLink } from '@/components/forms/form-dialogs-context'
import { LandingLayout } from '@/components/layout/landing-layout'
import { meta } from './meta'
import { HeroSection } from './sections/hero-section'
import { TheFactsDatedSection } from './sections/the-facts-dated-section'
import { WhatYouGetWithMiraeeSection } from './sections/what-you-get-with-miraee-section'
import { ProofOnYourNumbersSection } from './sections/proof-on-your-numbers-section'
import { WhereEachFitsSection } from './sections/where-each-fits-section'
import { ClosingSection } from './sections/closing-section'

/** Route: /lp/navan-alternative */
export function Component() {
  return (
    <LandingLayout
      tone="plum"
      footer={
        <>
          <nav aria-label="Page links">
            <ul>
              <li>
                <Link to="/compare/navan">Full comparison: Miraee vs Navan</Link>
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
            Navan is a trademark of its owner. Navan facts are taken from navan.com/pricing, checked
            September 30, 2026.
          </p>
        </>
      }
    >
      <Seo meta={meta} />
      <main id="main">
        <HeroSection />
        <TheFactsDatedSection />
        <WhatYouGetWithMiraeeSection />
        <ProofOnYourNumbersSection />
        <WhereEachFitsSection />
        <ClosingSection />
      </main>
    </LandingLayout>
  )
}
Component.displayName = 'LandingNavanAlternativePage'
