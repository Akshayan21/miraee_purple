import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

import { VideoHero } from '@/components/sections/video-hero'

export function HeroSection() {
  return (
    <VideoHero video="hero-pricing" crumb="Pricing">
      <h1 className="mr-display" id="hero-h">
        Free to sign up and onboard, at any company size
      </h1>
      <p className="mr-lead">
        Miraee is business travel and expense software. We set up your company, your policy and your
        people with you, free.
      </p>
      <div className="mr-btn-row">
        <Button asChild>
          <DialogLink to="/sign-up" dialog="signup">
            Sign up free
          </DialogLink>
        </Button>{' '}
        <Button asChild variant="tertiary">
          <Link to="/how-it-works">See how it works</Link>
        </Button>
      </div>
      <p className="mr-small hero__trust">
        <Link to="/company">Built by Tabhi</Link>, the company behind the Mondee travel marketplace.
      </p>
    </VideoHero>
  )
}
