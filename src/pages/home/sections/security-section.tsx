import { PeopleScene } from '@/components/sections/people-scene'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function SecuritySection() {
  return (
    <PeopleScene
      labelledBy="sec-h"
      tone="plum"
      plate="plum"
      reverse
      photo={{
        src: '/img/px8367824-desk.jpg',
        webp: '/img/px8367824-desk.webp',
        alt: 'A woman in a red blazer reviews a booking on her laptop.',
        width: 1000,
        height: 750,
      }}
    >
      <h2 className="mr-h2" id="sec-h">
        One approved travel tool for the whole company.
      </h2>
      <p className="mr-body">
        Every booking and change is recorded in the audit log. Ask for our security pack at any
        stage of your review.
      </p>
      <ul className="icon-row" style={{ flexWrap: 'wrap' }}>
        <li>
          <img src="/img/icons/check-orange.svg" alt="" width="24" height="24" />
          Approvals
        </li>
        <li>
          <img src="/img/icons/file-text-orange.svg" alt="" width="24" height="24" />
          Audit log
        </li>
        <li>
          <img src="/img/icons/shield-check-orange.svg" alt="" width="24" height="24" />
          Security pack
        </li>
      </ul>
      <p className="link-row">
        <Button asChild variant="tertiary">
          <Link to="/security">Read about security</Link>
        </Button>
      </p>
    </PeopleScene>
  )
}
