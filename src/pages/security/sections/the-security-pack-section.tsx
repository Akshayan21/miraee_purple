import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function TheSecurityPackSection() {
  return (
    <section className="mr-plum mr-section" id="pack" aria-labelledby="pack-h">
      <div className="mr-container duo">
        <div className="duo__head">
          <h2 className="mr-h2" id="pack-h">
            Everything your security review needs, in one pack.
          </h2>
        </div>
        <div className="duo__body">
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
    </section>
  )
}
