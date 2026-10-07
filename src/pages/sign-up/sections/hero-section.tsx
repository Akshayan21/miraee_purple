import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { TextField } from '@/components/forms/fields'
import { LeadForm } from '@/components/forms/lead-form'
import { FormDoneMessage } from '@/components/forms/form-dialogs'

export function HeroSection() {
  return (
    <section className="page-hero page-hero--frame" aria-labelledby="hero-h">
      <div className="mr-container page-hero__grid">
        <div className="page-hero__copy">
          <h1 className="mr-display" id="hero-h">
            Sign up free
          </h1>
          <p className="mr-lead">
            Miraee is business travel and expense software. Signing up and onboarding are free, at
            any company size.
          </p>
          <LeadForm
            action="/sign-up"
            done={<FormDoneMessage action="/sign-up" />}
            className="form-page"
          >
            <TextField
              id="p-su-email"
              name="email"
              label="Work email"
              type="email"
              autoComplete="email"
              required
              hint="We send your next steps here."
            />
            <TextField
              id="p-su-co"
              name="company"
              label="Company name"
              type="text"
              autoComplete="organization"
              required
            />
            <TextField
              id="p-su-size"
              name="size"
              label="Company size"
              type="number"
              inputMode="numeric"
              min={1}
              required
              hint="Add the number of employees."
            />
            <TextField
              id="p-su-role"
              name="role"
              label="Your role"
              type="text"
              autoComplete="organization-title"
              required
            />
            <div>
              <Button type="submit">
                <span className="mr-btn__u">Request my account</span>
              </Button>
            </div>
            <p className="mr-small">
              We'll email you to set up your company, your travel policy and your people with you.
            </p>
          </LeadForm>
          <p className="mr-small hero__trust">
            <Link to="/company">Built by Tabhi</Link>, the company behind the Mondee travel
            marketplace.
          </p>
        </div>
        <figure className="page-hero__visual mr-frame">
          <picture>
            <source srcSet="/img/px4623080-team-wide.webp" type="image/webp" />
            <img
              src="/img/px4623080-team-wide.jpg"
              width="917"
              height="688"
              alt="Colleagues smile as they review work together at a desk."
              fetchpriority="high"
            />
          </picture>
        </figure>
      </div>
    </section>
  )
}
