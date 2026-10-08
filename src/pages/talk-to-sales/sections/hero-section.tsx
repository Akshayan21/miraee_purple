import { Section, Container } from '@/components/layout/content-layout'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'
import { TextField } from '@/components/forms/fields'
import { LeadForm } from '@/components/forms/lead-form'
import { FormDoneMessage } from '@/components/forms/form-dialogs'

export function HeroSection() {
  return (
    <Section className="page-hero page-hero--frame" aria-labelledby="hero-h">
      <Container className="mr-container page-hero__grid">
        <div className="page-hero__copy">
          <h1 className="mr-display" id="hero-h">
            Talk to sales
          </h1>
          <p className="mr-lead">
            Miraee is business travel and expense software. Ask us about booking terms, onboarding,
            the spend review or the security pack.
          </p>
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
              label="What would you like to ask?"
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
          <p className="mr-small hero__trust">
            Ready to start?{' '}
            <DialogLink to="/sign-up" dialog="signup">
              Sign up free
            </DialogLink>
            .
          </p>
        </div>
        <figure className="page-hero__visual mr-frame">
          <picture>
            <source srcSet="/img/document/talk-to-sales-side-image-1.webp" type="image/webp" />
            <img
              src="/img/document/talk-to-sales-side-image-1.jpg"
              width="2047"
              height="1535"
              alt="A laptop displays a video meeting beside a cup of coffee."
              fetchpriority="high"
            />
          </picture>
        </figure>
      </Container>
    </Section>
  )
}
