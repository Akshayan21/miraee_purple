import { Seo } from '@/components/common/seo'
import { meta } from './meta'
import { HeroSection } from './sections/hero-section'
import { JourneySection } from './sections/journey-section'
import { StackSection } from './sections/stack-section'
import { SpendSection } from './sections/spend-section'

/** Route: /v3/ */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <HeroSection />
        <JourneySection />
        <StackSection />
        <SpendSection />
      </main>
    </>
  )
}
Component.displayName = 'HomePage'
