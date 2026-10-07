import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function ContactSection() {
  return (
    <section className="mr-plum plum-band" aria-labelledby="close-h">
      <div className="mr-container">
        <div className="inner">
          <h2 className="mr-h2" id="close-h">
            Talk to us
          </h2>
          <p className="mr-body">
            Questions about Miraee, the spend review or security? Our team will answer.
          </p>
          <div className="mr-btn-row" style={{ marginTop: '32px' }}>
            <Button asChild>
              <DialogLink to="/sign-up" dialog="signup">
                Sign up free
              </DialogLink>
            </Button>{' '}
            <Button asChild variant="tertiary">
              <Link to="/talk-to-sales">Talk to sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
