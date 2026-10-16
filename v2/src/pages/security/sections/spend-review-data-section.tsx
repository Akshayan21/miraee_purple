import type { CSSProperties } from 'react'

export function SpendReviewDataLayer({ styles }: { styles: Record<string, string> }) {
  return (
    <article
      className={`mr-plum ${styles.layer} ${styles.l3}`}
      style={{ '--i': 3 } as CSSProperties}
      aria-labelledby="data-h"
    >
      <div className={`${styles.content} ${styles.statement}`}>
        <h2 className={`mr-h2 ${styles.title} ${styles.huge}`} id="data-h">
          You choose what to share.
        </h2>
        <p className={`mr-body ${styles.body}`}>
          For a spend review you send one file, an agency booking report or an expense extract. We
          sign an NDA first, and the report is yours to keep.
        </p>
      </div>
    </article>
  )
}
