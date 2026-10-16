import type { CSSProperties } from 'react'

import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function SecurityPackLayer({ styles }: { styles: Record<string, string> }) {
  return (
    <article
      className={`mr-plum ${styles.layer} ${styles.l2}`}
      style={{ '--i': 2 } as CSSProperties}
      id="pack"
      aria-labelledby="pack-h"
    >
      <div className={`${styles.content} ${styles.duo}`}>
        <h2 className={`mr-h2 ${styles.title} ${styles.big}`} id="pack-h">
          Your security review, in one pack
        </h2>
        <div className={styles.packBody}>
          <ul className="pack">
            <li>
              <img src="/img/icons/check-mist.svg" alt="" width="24" height="24" />A completed
              security questionnaire
            </li>
            <li>
              <img src="/img/icons/check-mist.svg" alt="" width="24" height="24" />A data processing
              agreement
            </li>
            <li>
              <img src="/img/icons/check-mist.svg" alt="" width="24" height="24" />A penetration
              test summary
            </li>
          </ul>
          <p className="mr-body" style={{ marginTop: '24px' }}>
            Ask for it at any stage of your review.
          </p>
          <div className="mr-btn-row" style={{ marginTop: '32px' }}>
            <Button asChild>
              <DialogLink to="#pack" dialog="pack">
                Request the security pack
              </DialogLink>
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}
