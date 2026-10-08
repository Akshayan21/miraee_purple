import { Seo } from '@/components/common/seo'
import { ResourceHero, ResourceGuides } from './content'
import { meta } from './meta'
import { VideoLibrarySection } from './video-library-section'
import styles from './overview.module.css'

/** Route: /resources */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main" className={styles.page}>
        <ResourceHero />
        <VideoLibrarySection />
        <ResourceGuides />
      </main>
    </>
  )
}
Component.displayName = 'OverviewPage'
