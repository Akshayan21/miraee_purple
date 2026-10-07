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
      </main>
    </>
  )
}
Component.displayName = 'SpendReviewPage'
