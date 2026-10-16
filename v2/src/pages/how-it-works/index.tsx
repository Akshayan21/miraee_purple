import { Seo } from '@/components/common/seo'
import { meta } from './meta'
import './hiw-scene.css'
import { HeroSection } from './sections/hero-section'
import { ItinerarySection } from './sections/itinerary-section'
import { WhenPlansChangeSection } from './sections/when-plans-change-section'
import { ExpenseSection } from './sections/expense-section'
import { FinanceViewSection } from './sections/finance-view-section'
import { WhatMiraeeReplacesSection } from './sections/what-miraee-replaces-section'
import { ClosingCallToActionSection } from './sections/closing-call-to-action-section'

/** Route: /how-it-works */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <>
          <HeroSection />
          <ItinerarySection />
          <WhenPlansChangeSection />
          <ExpenseSection />
          <FinanceViewSection />
          <WhatMiraeeReplacesSection />
          <div data-route-end>
            <ClosingCallToActionSection />
          </div>
        </>
      </main>
    </>
  )
}
Component.displayName = 'HowItWorksPage'
