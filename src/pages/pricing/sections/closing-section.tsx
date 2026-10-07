import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function ClosingSection() {
  return (
    <section className="mr-plum plum-band" aria-labelledby="close-h">
      <div className="mr-container">
        <div className="inner">
          <h2 className="mr-h2" id="close-h">
            Start with the whole company.
          </h2>
          <p className="mr-body">Free to sign up and onboard, at any company size.</p>
          <div className="mr-btn-row" style={{ marginTop: '32px' }}>
            <Button asChild>
              <DialogLink to="/sign-up" dialog="signup">
                Sign up free
              </DialogLink>
            </Button>
          </div>
          <ul className="link-list">
            <li>
              <Link to="/compare">Compare corporate travel management software</Link>
            </li>
            <li>
              <Link to="/security">Security</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
