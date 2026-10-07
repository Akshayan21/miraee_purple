import { Seo } from '@/components/common/seo'
import { meta } from './meta'
import { BreadcrumbsSection } from './sections/breadcrumbs-section'
import { HeroSection } from './sections/hero-section'
import { PolicySection } from './sections/policy-section'
import { ApprovalsSection } from './sections/approvals-section'
import { ForThePeopleWhoBookForOthersSection } from './sections/for-the-people-who-book-for-others-section'
import { WhenPlansChangeSection } from './sections/when-plans-change-section'
import { RolloutSection } from './sections/rollout-section'
import { ClosingCallToActionSection } from './sections/closing-call-to-action-section'
import { SourcesSection } from './sections/sources-section'

/** Route: /travel-managers */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <BreadcrumbsSection />
        <HeroSection />
        <PolicySection />
        <ApprovalsSection />
        <ForThePeopleWhoBookForOthersSection />
        <WhenPlansChangeSection />
        <RolloutSection />
        <ClosingCallToActionSection />
        <SourcesSection />
      </main>
    </>
  )
}
Component.displayName = 'ForTravelManagersPage'
