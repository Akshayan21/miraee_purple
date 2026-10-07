import { Seo } from '@/components/common/seo'
import { meta } from './meta'
import { HeroSection } from './sections/hero-section'
import { WhatsFreeSection } from './sections/whats-free-section'
import { AnyHeadcountSection } from './sections/any-headcount-section'
import { TheSpendReviewSection } from './sections/the-spend-review-section'
import { BookingTermsSection } from './sections/booking-terms-section'
import { QuestionsSection } from './sections/questions-section'
import { ClosingSection } from './sections/closing-section'

/** Route: /pricing */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <HeroSection />
        <WhatsFreeSection />
        <AnyHeadcountSection />
        <TheSpendReviewSection />
        <BookingTermsSection />
        <QuestionsSection />
        <ClosingSection />
      </main>
    </>
  )
}
Component.displayName = 'PricingPage'
