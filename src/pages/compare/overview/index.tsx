import styles from './sections/page-nav.module.css'
import { Seo } from '@/components/common/seo'
import { meta } from './meta'
import { HeroSection } from './sections/hero-section'
import { PageNav } from './sections/page-nav'
import { CriteriaSection } from './sections/criteria-section'
import { QuestionsSection } from './sections/questions-section'
import { CostSection } from './sections/cost-section'
import { ComparisonsSection } from './sections/comparisons-section'
import { ProofSection } from './sections/proof-section'
import { FaqSection } from './sections/faq-section'
import { SourcesSection } from './sections/sources-section'
import { SmallPrintSection } from './sections/small-print-section'
import { ClosingSection } from './sections/closing-section'

/** Route: /compare. A structured buyer's guide: criteria, questions by topic, vendor costs, side-by-side links. */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main" className={styles.page}>
        <HeroSection />
        <PageNav />
        <CriteriaSection />
        <QuestionsSection />
        <CostSection />
        <ComparisonsSection />
        <ProofSection />
        <FaqSection />
        <SourcesSection />
        <SmallPrintSection />
        <ClosingSection />
      </main>
    </>
  )
}
Component.displayName = 'CompareIndexPage'
