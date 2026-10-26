import { Seo } from '@/components/common/seo'
import { meta } from './meta'
import { HeroSection } from './sections/hero-section'
import { PromiseSection } from './sections/promise-section'
import { HowItWorksSection } from './sections/how-it-works-section'
import { SpendReviewSection } from './sections/spend-review-section'
import { WhenPlansChangeSection } from './sections/when-plans-change-section'
import { ForFinanceSection } from './sections/for-finance-section'
import { SecuritySection } from './sections/security-section'
import { FreeAtAnySizeSection } from './sections/free-at-any-size-section'
import { FAQSection } from './sections/faq-section'
import { ClosingCallToActionSection } from './sections/closing-call-to-action-section'

/** Route: / */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <HeroSection />
        <PromiseSection />
        <HowItWorksSection />
        <SpendReviewSection />
        <WhenPlansChangeSection />
        <ForFinanceSection />
        <SecuritySection />
        <FreeAtAnySizeSection />
        <FAQSection />
        <ClosingCallToActionSection />
        <p className="mr-caption" style={{ textAlign: 'center', margin: '0 0 24px' }}>
          Product views show illustrative data.
        </p>
      </main>
    </>
  )
}
Component.displayName = 'HomePage'
