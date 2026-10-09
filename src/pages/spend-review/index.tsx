import { CtaVideoBand } from '@/components/sections/cta-video-band'
import { SPEND_REVIEW_ACTION } from '@/content/actions'
import { Seo } from '@/components/common/seo'
import { meta } from './meta'
import { BreadcrumbsSection } from './sections/breadcrumbs-section'
import { HeroSection } from './sections/hero-section'
import { WhyLookBackSection } from './sections/why-look-back-section'
import { WhatYouSendSection } from './sections/what-you-send-section'
import { WhatYouGetSection } from './sections/what-you-get-section'
import { HowItsMeasuredSection } from './sections/how-its-measured-section'
import { OptionalAlwaysSection } from './sections/optional-always-section'
import { QuestionsSection } from './sections/questions-section'

/** Route: /spend-review */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <BreadcrumbsSection />
        <HeroSection />
        <WhyLookBackSection />
        <WhatYouSendSection />
        <WhatYouGetSection />
        <HowItsMeasuredSection />
        <OptionalAlwaysSection />
        <QuestionsSection />
        <CtaVideoBand
          video="finance"
          title="Check our work on last year's travel."
          body="Send one booking report. The review is optional, and you can sign up without one."
          secondary={SPEND_REVIEW_ACTION}
        />
      </main>
    </>
  )
}
Component.displayName = 'SpendReviewPage'
