import { Seo } from '@/components/common/seo'
import { PackDialog } from '@/components/forms/form-dialogs'
import { meta } from './meta'
import { HeroSection } from './sections/hero-section'
import { VaultSection } from './sections/vault-section'
import { WhoIsBehindMiraeeSection } from './sections/who-is-behind-miraee-section'
import { ClosingSection } from './sections/closing-section'

/** Route: /security */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <>
          <HeroSection />
          <VaultSection />
          <WhoIsBehindMiraeeSection />
          <div data-route-end>
            <ClosingSection />
          </div>
        </>
      </main>
      <PackDialog />
    </>
  )
}
Component.displayName = 'SecurityPage'
