import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function HeroSection() {
  return (
    <section className="core-hero core-hero--frame" aria-labelledby="hero-h">
      <div className="mr-container split">
        <div className="split__copy">
          <h1 className="mr-h1" id="hero-h">
            A corporate travel booking tool that runs your policy on every booking
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
        </div>
        <figure className="split__visual" style={{ margin: '0' }}>
          <div className="mr-frame route-frame">
            <picture>
              <source srcSet="/img/px6775122-team-map.webp" type="image/webp" />
              <img
                src="/img/px6775122-team-map.jpg"
                width="1536"
                height="1024"
                alt="A team plans travel around a laptop with a world map."
                fetchpriority="high"
              />
            </picture>{' '}
            <svg
              className="mr-line"
              viewBox="0 0 1536 1024"
              preserveAspectRatio="none"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M-12 330 C 30 306 70 250 124 244 C 152 241 166 250 176 262 L 186 274 L 212 238"></path>
            </svg>
          </div>
        </figure>
      </div>
    </section>
  )
}
