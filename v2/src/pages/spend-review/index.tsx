import { CtaVideoBand } from '@/components/sections/cta-video-band'
import { SPEND_REVIEW_ACTION } from '@/content/actions'
import { Seo } from '@/components/common/seo'
import { meta } from './meta'
import { HeroSection } from './sections/hero-section'
import { WhyLookBackSection } from './sections/why-look-back-section'
import { WhatYouSendSection } from './sections/what-you-send-section'
import { WhatYouGetSection } from './sections/what-you-get-section'
import { OptionalAlwaysSection } from './sections/optional-always-section'
import { QuestionsSection } from './sections/questions-section'

/** Route: /spend-review */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <>
          <HeroSection />
          <div data-stop="2" data-stop-y="150">
            <WhyLookBackSection />
          </div>
          <div data-stop="3" data-stop-y="150">
            <WhatYouSendSection />
          </div>
          <div data-stop="4" data-stop-y="150">
            <WhatYouGetSection />
          </div>
          <div data-stop="5" data-stop-y="150">
            <OptionalAlwaysSection />
          </div>
          <QuestionsSection />
          <div data-route-end>
            <CtaVideoBand
              video="finance"
              title="Check our work on last year's travel."
              body="Send one booking report. The review is optional, and you can sign up without one."
              secondary={SPEND_REVIEW_ACTION}
            />
          </div>
        </>
      </main>
    </>
  )
}
Component.displayName = 'SpendReviewPage'
