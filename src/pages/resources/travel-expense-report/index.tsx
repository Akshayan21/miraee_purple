import { Seo } from '@/components/common/seo'
import { meta } from './meta'
import { HeroSection } from './sections/hero-section'
import { HowDoYouCloseSection } from './sections/how-do-you-close-section'
import { RelatedSection } from './sections/related-section'
import { ClosingSection } from './sections/closing-section'

/** Route: /resources/travel-expense-report */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <HeroSection />
        <HowDoYouCloseSection />
        <RelatedSection />
        <ClosingSection />
      </main>
    </>
  )
}
Component.displayName = 'ResourcesTravelExpenseReportPage'
