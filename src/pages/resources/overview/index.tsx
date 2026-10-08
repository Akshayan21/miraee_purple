import { Seo } from '@/components/common/seo'
import { StaticHtml } from '@/components/common/static-html'
import content from './content.html?raw'
import { meta } from './meta'
import { VideoLibrarySection } from './video-library-section'
import styles from './overview.module.css'

/** The video library sits between the hero and the guides. */
const SPLIT_AT = '<div class="mr-section lf-hubbody">'
const splitIndex = content.indexOf(SPLIT_AT)
const heroHtml = splitIndex === -1 ? content : content.slice(0, splitIndex)
const restHtml = splitIndex === -1 ? '' : content.slice(splitIndex)

/** Route: /resources */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main" className={styles.page}>
        <StaticHtml tag="div" html={heroHtml} />
        <VideoLibrarySection />
        <StaticHtml tag="div" html={restHtml} />
      </main>
    </>
  )
}
Component.displayName = 'OverviewPage'
