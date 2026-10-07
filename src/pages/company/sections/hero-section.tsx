import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function HeroSection() {
  return (
    <section className="mr-plum page-hero page-hero--frame" aria-labelledby="hero-h">
      <nav className="crumbs" style={{ paddingTop: '0' }} aria-label="Breadcrumb">
        <div className="mr-container">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <span aria-current="page">Company</span>
            </li>
          </ol>
        </div>
      </nav>
      <div className="mr-container page-hero__grid">
        <div className="page-hero__copy">
          <h1 className="mr-display" id="hero-h">
            Built by Tabhi, the company behind the Mondee travel marketplace
          </h1>
          <p className="mr-lead">
            <Link to="/" style={{ color: 'inherit' }}>
              Miraee is business travel and expense software
            </Link>
            , built by Tabhi, the company behind the Mondee travel marketplace.
          </p>
          <div className="mr-btn-row">
            <Button asChild>
              <DialogLink to="/sign-up" dialog="signup">
                Sign up free
              </DialogLink>
            </Button>
          </div>
        </div>
        <figure className="page-hero__visual mr-frame">
          <picture>
            <source srcSet="/img/px8419929-gate.webp" type="image/webp" />
            <img
              src="/img/px8419929-gate.jpg"
              width="1200"
              height="900"
              alt="An airport gate with planes outside at sunset."
              fetchpriority="high"
            />
          </picture>
        </figure>
      </div>
    </section>
  )
}
