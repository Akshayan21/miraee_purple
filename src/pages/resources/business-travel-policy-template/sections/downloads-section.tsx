import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function DownloadsSection() {
  return (
    <section className="mr-plum plum-band" id="download" aria-labelledby="dl-h">
      <div className="mr-container">
        <div className="inner">
          <h2 className="mr-h2" id="dl-h">
            Download the editable template
          </h2>
          <p className="mr-body">
            The Word file you can edit, a designed PDF to share, and the one-page rollout checklist.
            Tell us where to send a copy.
          </p>
          <div className="mr-btn-row" style={{ marginTop: '32px' }}>
            <Button asChild>
              <DialogLink to="#download" dialog="template">
                Download the template
              </DialogLink>
            </Button>
          </div>
          <ul className="link-list">
            <li>
              <Link to="/resources/business-travel-policy">
                How to write a business travel policy
              </Link>
            </li>
            <li>
              <Link to="/resources/travel-and-expense-policy">Travel and expense policy</Link>
            </li>
            <li>
              <Link to="/travel-managers">For travel managers</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
