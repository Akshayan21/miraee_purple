import { Link } from 'react-router-dom'

import { DialogLink } from '@/components/forms/form-dialogs-context'
import { Reveal } from '@/components/scenes/reveal'
import { Button } from '@/components/ui/button'
import shared from './home-shared.module.css'
import styles from './free-at-any-size-section.module.css'

/** A calm full stop before the questions: one statement, one body line, two actions. */
export function FreeAtAnySizeSection() {
  return (
    <section
      className={`${shared.tint} ${shared.section} ${styles.section}`}
      aria-labelledby="free-h"
      data-stop="7"
    >
      <Reveal className={`${shared.wrap} ${styles.inner}`}>
        <h2 className={`${shared.display} ${styles.title}`} id="free-h">
          Free to sign up and onboard, at any company size.
        </h2>
        <p className={`${shared.lead} ${styles.lead}`}>
          We set up your company, your policy and your people with you, and train your admins and
          finance team.
        </p>
        <div className={`${shared.buttons} ${styles.actions}`}>
          <Button asChild>
            <DialogLink to="/sign-up" dialog="signup">
              <span className="mr-btn__u">Sign up free</span>
            </DialogLink>
          </Button>
          <Button asChild variant="tertiary">
            <Link to="/pricing">See pricing</Link>
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
