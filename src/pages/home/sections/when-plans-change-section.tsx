import { VideoPanel } from '@/components/sections/video-panel'
import { ProductPhone } from '@/components/sections/product-preview'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function WhenPlansChangeSection() {
  return (
    <VideoPanel
      video="panel-plans"
      labelledBy="plans-h"
      aside={
        <ProductPhone className="phone phone--alert" aria-hidden="true">
          <div className="phone__screen mr-plum">
            <div className="phone__bar">
              <span className="mr-fig">5:53</span>
              <span>Trips</span>
            </div>
            <div className="mr-alert">
              <span className="mr-alert__status">Flight delayed</span>
              <p className="mr-alert__msg">
                Your 6:40 a.m. flight to Chicago is delayed.{' '}
                <span>Here are two new options. Tap one to confirm.</span>
              </p>
            </div>
            <div className="mr-options" role="radiogroup" aria-label="New flight options">
              <button
                className="mr-option"
                type="button"
                role="radio"
                aria-checked="true"
                tabIndex={-1}
              >
                <span className="mr-option__time">8:15 a.m.</span>
                <span className="mr-option__fare">Same fare</span>{' '}
                <span className="mr-option__meta">AUS to ORD · Nonstop</span>
                <Badge variant="success">In policy</Badge>{' '}
                <svg
                  className="mr-line mr-option__tick"
                  viewBox="0 0 80 64"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M6 34 C 14 42 22 50 28 57 C 42 38 58 20 76 5"></path>
                </svg>
              </button>{' '}
              <button
                className="mr-option"
                type="button"
                role="radio"
                aria-checked="false"
                tabIndex={-1}
              >
                <span className="mr-option__time">9:50 a.m.</span>
                <span className="mr-option__fare">Same fare</span>{' '}
                <span className="mr-option__meta">AUS to ORD · Nonstop</span>
                <Badge variant="success">In policy</Badge>
              </button>
            </div>
            <Button asChild>
              <span role="presentation">Confirm 8:15 a.m.</span>
            </Button>
            <p className="phone__cap">Your travel lead sees the change in the audit log.</p>
          </div>
        </ProductPhone>
      }
    >
      <p className="mr-eyebrow">When plans change</p>
      <h2 className="mr-h2" id="plans-h">
        An alert and new options when plans change.
      </h2>
      <p className="mr-body">
        When a flight is delayed or canceled, your traveler sees two new options and taps one to
        confirm. The travel lead and finance see the change.
      </p>
      <p className="stat-line">
        <span className="stat-line__fig">89%</span> of travel buyers want help rebooking when plans
        change.
      </p>
      <p className="link-row">
        <Button asChild variant="tertiary">
          <Link to="/when-plans-change">See what happens</Link>
        </Button>
      </p>
    </VideoPanel>
  )
}
