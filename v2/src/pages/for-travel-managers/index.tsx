import { Seo } from '@/components/common/seo'
import { meta } from './meta'
import { HeroSection } from './sections/hero-section'
import { PolicySection } from './sections/policy-section'
import { ApprovalsSection } from './sections/approvals-section'
import { ForThePeopleWhoBookForOthersSection } from './sections/for-the-people-who-book-for-others-section'
import { WhenPlansChangeSection } from './sections/when-plans-change-section'
import { RolloutSection } from './sections/rollout-section'
import { ClosingCallToActionSection } from './sections/closing-call-to-action-section'

/** Route: /travel-managers */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <>
          <HeroSection />
          <div data-stop="2" data-stop-y="150">
            <PolicySection />
          </div>
          <div data-stop="3" data-stop-y="150">
            <ApprovalsSection />
          </div>
          <div data-stop="4" data-stop-y="150">
            <ForThePeopleWhoBookForOthersSection />
          </div>
          <div data-stop="5" data-stop-y="150">
            <WhenPlansChangeSection />
          </div>
          <div data-stop="6" data-stop-y="150">
            <RolloutSection />
          </div>
          <div data-route-end>
            <ClosingCallToActionSection />
          </div>
        </>
      </main>
    </>
  )
}
Component.displayName = 'ForTravelManagersPage'
