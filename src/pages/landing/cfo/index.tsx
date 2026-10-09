import { CtaVideoBand } from '@/components/sections/cta-video-band'
import { SPEND_REVIEW_ACTION } from '@/content/actions'
import { Seo } from '@/components/common/seo'
import { Link } from 'react-router-dom'
import { DialogLink } from '@/components/forms/form-dialogs-context'
import { LandingLayout } from '@/components/layout/landing-layout'
import { meta } from './meta'
import { HeroSection } from './sections/hero-section'
import { WhyNowSection } from './sections/why-now-section'
import { WhatFinanceGetsSection } from './sections/what-finance-gets-section'
import { ProofFirstSection } from './sections/proof-first-section'
import { FreeStartSection } from './sections/free-start-section'

/** Route: /lp/cfo */
export function Component() {
  return (
    <LandingLayout
      tone="light"
      footer={
        <>
          <nav aria-label="Page links">
            <ul>
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
        </>
      }
    >
      <Seo meta={meta} />
      <main id="main">
        <HeroSection />
        <WhyNowSection />
        <WhatFinanceGetsSection />
        <ProofFirstSection />
        <FreeStartSection />
        <CtaVideoBand
          video="finance"
          title="Close the month with every trip already coded."
          body="Free to sign up and onboard, at any company size."
          secondary={SPEND_REVIEW_ACTION}
        />
      </main>
    </LandingLayout>
  )
}
Component.displayName = 'LandingCfoPage'
