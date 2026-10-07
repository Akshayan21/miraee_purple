import { Seo } from '@/components/common/seo'
import { meta } from './meta'
import { BreadcrumbsSection } from './sections/breadcrumbs-section'
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
        <BreadcrumbsSection />
        <HeroSection />
        <TheProblemSection />
        <SetItOnceSection />
        <FinanceDashboardAndAuditLogSection />
        <ExpenseSection />
        <YourCardsYourControlsSection />
        <TheAssistantAndApprovalsSection />
        <ProofFirstSection />
        <ClosingCallToActionSection />
      </main>
    </>
  )
}
Component.displayName = 'ForFinancePage'
