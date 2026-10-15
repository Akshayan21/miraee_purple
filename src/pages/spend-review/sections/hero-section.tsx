import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

import { VideoHero } from '@/components/sections/video-hero'

export function HeroSection() {
  return (
    <VideoHero video="hero-spend" crumb="Spend review">
      <h1 className="mr-h1" id="hero-h">
        Find out where last year's travel budget went.
      </h1>
      <p className="mr-lead">
        Miraee is business travel and expense software. Send one booking report and we review last
        year's travel, trip by trip, from your own data.
      </p>
      <div className="mr-btn-row">
        <Button asChild>
          <DialogLink to="/spend-review" dialog="review">
            <span className="mr-btn__u">Get a spend review</span>
          </DialogLink>
        </Button>{' '}
        <Button asChild variant="secondary">
          <DialogLink to="/sign-up" dialog="signup">
            Sign up free
          </DialogLink>
        </Button>
      </div>
    </VideoHero>
  )
}
