import { Seo } from '@/components/common/seo'
import { meta } from './meta'
import { HeroSection } from './sections/hero-section'
import { TheProblemSection } from './sections/the-problem-section'
import { SetItOnceSection } from './sections/set-it-once-section'
import { FinanceDashboardAndAuditLogSection } from './sections/finance-dashboard-and-audit-log-section'
import { ExpenseSection } from './sections/expense-section'
import { YourCardsYourControlsSection } from './sections/your-cards-your-controls-section'
import { TheAssistantAndApprovalsSection } from './sections/the-assistant-and-approvals-section'
import { ProofFirstSection } from './sections/proof-first-section'
import { ClosingCallToActionSection } from './sections/closing-call-to-action-section'

/** Route: /finance */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <>
          <HeroSection />
          <div data-stop="2" data-stop-y="150">
            <TheProblemSection />
          </div>
          <div data-stop="3" data-stop-y="150">
            <SetItOnceSection />
          </div>
          <div data-stop="4" data-stop-y="150">
            <FinanceDashboardAndAuditLogSection />
          </div>
          <div data-stop="5" data-stop-y="150">
            <ExpenseSection />
          </div>
          <div data-stop="6" data-stop-y="150">
            <YourCardsYourControlsSection />
          </div>
          <div data-stop="7" data-stop-y="150">
            <TheAssistantAndApprovalsSection />
          </div>
          <div data-stop="8" data-stop-y="150">
            <ProofFirstSection />
          </div>
          <div data-route-end>
            <ClosingCallToActionSection />
          </div>
        </>
      </main>
    </>
  )
}
Component.displayName = 'ForFinancePage'
