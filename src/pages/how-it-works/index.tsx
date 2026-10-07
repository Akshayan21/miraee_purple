import { Seo } from '@/components/common/seo'
import { meta } from './meta'
import { BreadcrumbsSection } from './sections/breadcrumbs-section'
import { HeroSection } from './sections/hero-section'
import { SetUpSection } from './sections/set-up-section'
import { BookSection } from './sections/book-section'
import { ApproveSection } from './sections/approve-section'
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
        <BreadcrumbsSection />
        <HeroSection />
        <SetUpSection />
        <BookSection />
        <ApproveSection />
        <WhenPlansChangeSection />
        <ExpenseSection />
        <FinanceViewSection />
        <WhatMiraeeReplacesSection />
        <ClosingCallToActionSection />
      </main>
    </>
  )
}
Component.displayName = 'HowItWorksPage'
