import { Seo } from '@/components/common/seo'
import { TextField } from '@/components/forms/fields'
import { DialogLink } from '@/components/forms/form-dialogs-context'
import { FormDoneMessage } from '@/components/forms/form-dialogs'
import { LeadForm } from '@/components/forms/lead-form'
import { Band, PageHero } from '@/components/page/kit'
import { Reveal } from '@/components/scenes/reveal'
import { Button } from '@/components/ui/button'
import styles from './form-page.module.css'
import { meta } from './meta'

/** Route: /talk-to-sales */
export function Component() {
  return (
    <>
      <Seo meta={meta} />
      <main id="main">
        <PageHero
          id="hero-h"
          crumbs={[{ label: 'Home', to: '/' }, { label: 'Talk to sales' }]}
          title="Talk to sales"
          lead="Miraee is business travel and expense software. Ask us about booking terms, onboarding, the spend review or the security pack."
          note={
            <>
              Ready to start?{' '}
              <DialogLink to="/sign-up" dialog="signup" className={styles.link}>
                Sign up free
              </DialogLink>
            </>
          }
          visual={
            <div className={`mr-plum ${styles.panel}`}>
              <LeadForm
                action="/talk-to-sales"
                done={<FormDoneMessage action="/talk-to-sales" />}
                className="form-page"
              >
                <TextField
                  id="ts-email"
                  name="email"
                  label="Work email"
                  type="email"
                  autoComplete="email"
                  required
                />
                <TextField
                  id="ts-name"
                  name="name"
                  label="Your name"
                  type="text"
                  autoComplete="name"
                  required
                />
                <TextField
                  id="ts-co"
                  name="company"
                  label="Company name"
                  type="text"
                  autoComplete="organization"
                  required
                />
                <TextField
                  id="ts-size"
                  name="size"
                  label="Company size"
                  type="number"
                  inputMode="numeric"
                  min={1}
                  required
                  hint="Add the number of employees."
                />
                <TextField
                  id="ts-msg"
                  name="message"
                  label="What would you like to know?"
                  multiline
                  rows={4}
                />
                <div>
                  <Button type="submit">
                    <span className="mr-btn__u">Send my question</span>
                  </Button>
                </div>
                <p className="mr-small">We'll email you to find a time to talk.</p>
              </LeadForm>
            </div>
          }
        />
        <Band tone="lilac" round compact aria-label="Photo">
          <Reveal>
            <picture>
              <source srcSet="/img/document/talk-to-sales-side-image-1.webp" type="image/webp" />
              <img
                className={styles.photo}
                src="/img/document/talk-to-sales-side-image-1.jpg"
                width="2046"
                height="1534"
                alt="A video call with a large team on a laptop beside a coffee mug."
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
Component.displayName = 'TalkToSalesPage'
