import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'
import { Badge } from '@/components/ui/badge'
import styles from './hero-section.module.css'

import { VideoHero } from '@/components/sections/video-hero'

export function HeroSection() {
  return (
    <VideoHero
      video="hero-tm"
      crumb="For travel managers"
      aside={
        <div className={styles.policy}>
          <Badge variant="success" tick>
            In policy
          </Badge>
          <ul>
            <li>Flight and hotel limits checked</li>
            <li>Approvals for exceptions</li>
            <li>Every booking recorded</li>
          </ul>
        </div>
      }
    >
      <h1 className="mr-h1" id="hero-h">
        The corporate travel booking tool that runs your policy
      </h1>
      <p className="mr-lead">
        Miraee is business travel and expense software. Your policy runs on every booking, and
        approvals only reach you when something is out of policy.
      </p>
      <div className="mr-btn-row">
        <Button asChild>
          <DialogLink to="/sign-up" dialog="signup">
            <span className="mr-btn__u">Sign up free</span>
          </DialogLink>
        </Button>{' '}
        <Button asChild variant="tertiary">
          <Link to="/how-it-works">See how it works</Link>
        </Button>
      </div>
    </VideoHero>
  )
}
