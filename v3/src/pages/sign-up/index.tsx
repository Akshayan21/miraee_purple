import { Link } from 'react-router-dom'

import { Seo } from '@/components/common/seo'
import { ROLE_OPTIONS, SelectField, TextField } from '@/components/forms/fields'
import { FormDoneMessage } from '@/components/forms/form-dialogs'
import { LeadForm } from '@/components/forms/lead-form'
import { Band, PageHero } from '@/components/page/kit'
import { Reveal } from '@/components/scenes/reveal'
import { Button } from '@/components/ui/button'
import styles from './form-page.module.css'
import { meta } from './meta'

/** Route: /sign-up */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <PageHero
          id="hero-h"
          crumbs={[{ label: 'Home', to: '/' }, { label: 'Sign up' }]}
          title="Sign up free"
          lead="Miraee is business travel and expense software. Signing up and onboarding are free, at any company size."
          note={
            <>
              <Link to="/company" className={styles.link}>
                Built by Tabhi
              </Link>
              , the company behind the Mondee travel marketplace.
            </>
          }
          visual={
            <div className={`mr-plum ${styles.panel}`}>
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
                  hint="Number of employees"
                />
                <SelectField
                  id="p-su-role"
                  name="role"
                  label="Your role"
                  autoComplete="organization-title"
                  required
                  options={ROLE_OPTIONS}
                />
                <div>
                  <Button type="submit">
                    <span className="mr-btn__u">Request my account</span>
                  </Button>
                </div>
                <p className="mr-small">
                  Next, we'll email you to set up your company, policy and people.
                </p>
              </LeadForm>
            </div>
          }
        />
        <Band tone="lilac" round compact aria-label="Photo">
          <Reveal>
            <picture>
              <source srcSet="/img/document/sign-up-side-image-1.webp" type="image/webp" />
              <img
                className={styles.photo}
                src="/img/document/sign-up-side-image-1.jpg"
                width="2046"
                height="1364"
                alt="Two colleagues celebrate with a high five over a laptop and papers."
                loading="lazy"
                decoding="async"
              />
            </picture>
          </Reveal>
        </Band>
      </main>
    </>
  )
}
Component.displayName = 'SignUpPage'
