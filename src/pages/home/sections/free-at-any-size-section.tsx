import { Link } from 'react-router-dom'

import { DialogLink } from '@/components/forms/form-dialogs-context'
import { PeopleScene } from '@/components/sections/people-scene'
import { Button } from '@/components/ui/button'

export function FreeAtAnySizeSection() {
  return (
    <PeopleScene
      labelledBy="free-h"
      tone="paper"
      plate="light"
      photo={{
        src: '/img/px4623080-team.jpg',
        webp: '/img/px4623080-team.webp',
        alt: 'Colleagues smile as they review work together at a desk.',
        width: 1067,
        height: 641,
      }}
    >
      <h2 className="mr-h2" id="free-h">
        Free to sign up and onboard, at any company size.
      </h2>
      <p className="mr-body">
        We set up your company, your policy and your people with you, and train your admins and
        finance team.
      </p>
      <div className="mr-btn-row" style={{ marginTop: '32px' }}>
        <Button asChild>
          <DialogLink to="/sign-up" dialog="signup">
            <span className="mr-btn__u">Sign up free</span>
          </DialogLink>
        </Button>{' '}
        <Button asChild variant="tertiary">
          <Link to="/pricing">See pricing</Link>
        </Button>
      </div>
    </PeopleScene>
  )
}
