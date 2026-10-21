import { Seo } from '@/components/common/seo'
import { meta } from './meta'
import { HeroSection } from './sections/hero-section'
import { StatementSection } from './sections/statement-section'
import { JourneySection } from './sections/journey-section'
import { StackSection } from './sections/stack-section'

/** Route: /v3/ */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <HeroSection />
        <StatementSection />
        <JourneySection />
        <StackSection />
        <p
          className="mr-caption"
          style={{
            textAlign: 'center',
            margin: 0,
            padding: '16px 0 24px',
            background: 'var(--v3-night)',
            color: 'rgb(255 255 255 / .55)',
          }}
        >
          Product views show illustrative data.
        </p>
      </main>
    </>
  )
}
Component.displayName = 'HomePage'
