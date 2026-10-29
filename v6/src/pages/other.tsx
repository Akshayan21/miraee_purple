import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { NotFoundLedger } from '@/components/art/nf-ledger'
import { FormDoneMessage } from '@/components/forms/form-dialogs'
import { Field, TextField } from '@/components/forms/fields'
import { LeadForm } from '@/components/forms/lead-form'
import { Kinetic } from '@/components/motion/kinetic'
import { Chapter, ChapterHead, Heading, PageSeo } from '@/components/page/kit'
import { PagePhoto } from '@/components/page/page-photo'
import { Crumbs, PageEnd } from '@/components/page/page-shell'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/input'
import { FORM_PAGES, LEGAL } from '@/content/site'
import type { FormAction } from '@/lib/forms'

function FormHero({
  here,
  h1,
  sub,
  seoTitle,
  children,
  aside,
}: {
  here: string
  h1: string
  sub: string
  seoTitle: string
  children: React.ReactNode
  aside?: React.ReactNode
}) {
  return (
    <>
      <PageSeo title={seoTitle} description={sub} />
      <main id="main" className="ed-main ed-inner">
        <section className="ed-ch ed-phero ed-phero--form" aria-labelledby="page-h">
          <div className="ed-wrap ed-phero__grid">
            <div className="ed-phero__copy">
              <Crumbs here={here} />
              <Kinetic as="h1" id="page-h" hero className="ed-h ed-h--page">
                {h1}
              </Kinetic>
              <p className="ed-lead ed-phero__sub">{sub}</p>
              {aside}
            </div>
            <div className="ed-phero__form ed-card" data-rv>
              {children}
            </div>
          </div>
        </section>
        <PageEnd />
      </main>
    </>
  )
}

function Submit({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Button type="submit" size="lg">
        {children}
      </Button>
    </div>
  )
}

const TOOLS_NOTE = 'Built by Tabhi, the company behind the Mondee travel marketplace.'

export function TalkPage() {
  const f = FORM_PAGES.talk
  const action: FormAction = '/talk-to-sales'
  return (
    <FormHero
      here="Talk to sales"
      h1={f.h1}
      sub={f.sub}
      aside={<PagePhoto path="/talk-to-sales" />}
      seoTitle="Talk to sales"
    >
      <LeadForm action={action} done={<FormDoneMessage action={action} />} className="ed-form">
        <TextField
          id="ts-name"
          name="name"
          label={f.fields[0]}
          type="text"
          autoComplete="name"
          required
          fieldClassName="max-w-none"
        />
        <TextField
          id="ts-email"
          name="email"
          label={f.fields[1]}
          type="email"
          autoComplete="email"
          required
          fieldClassName="max-w-none"
        />
        <TextField
          id="ts-co"
          name="company"
          label={f.fields[2]}
          type="text"
          autoComplete="organization"
          required
          fieldClassName="max-w-none"
        />
        <TextField
          id="ts-size"
          name="size"
          label={f.fields[3]}
          type="number"
          inputMode="numeric"
          min={1}
          required
          hint="Number of employees"
          fieldClassName="max-w-none"
        />
        <Field className="max-w-none">
          <Label htmlFor="ts-msg">{f.fields[4]}</Label>
          <Textarea id="ts-msg" name="message" rows={4} className="ed-area" />
        </Field>
        <Submit>{f.button}</Submit>
        <p className="mr-small m-0">{TOOLS_NOTE}</p>
      </LeadForm>
    </FormHero>
  )
}

export function SignUpPage() {
  const f = FORM_PAGES.signup
  const action: FormAction = '/sign-up'
  return (
    <FormHero
      here="Sign up"
      h1={f.h1}
      sub={f.sub}
      aside={<PagePhoto path="/sign-up" />}
      seoTitle="Sign up free"
    >
      <LeadForm action={action} done={<FormDoneMessage action={action} />} className="ed-form">
        <TextField
          id="su-name"
          name="name"
          label={f.fields[0]}
          type="text"
          autoComplete="name"
          required
          fieldClassName="max-w-none"
        />
        <TextField
          id="su-email"
          name="email"
          label={f.fields[1]}
          type="email"
          autoComplete="email"
          required
          fieldClassName="max-w-none"
        />
        <TextField
          id="su-co"
          name="company"
          label={f.fields[2]}
          type="text"
          autoComplete="organization"
          required
          fieldClassName="max-w-none"
        />
        <TextField
          id="su-size"
          name="size"
          label={f.fields[3]}
          type="number"
          inputMode="numeric"
          min={1}
          required
          hint="Number of employees"
          fieldClassName="max-w-none"
        />
        <Submit>{f.button}</Submit>
        <p className="mr-small m-0">{TOOLS_NOTE}</p>
      </LeadForm>
    </FormHero>
  )
}

export function LogInPage() {
  const f = FORM_PAGES.login
  const [sent, setSent] = React.useState(false)
  return (
    <FormHero
      here="Log in"
      h1={f.h1}
      sub={f.sub}
      aside={<PagePhoto path="/log-in" />}
      seoTitle="Log in"
    >
      <form
        className="ed-form"
        onSubmit={(e) => {
          e.preventDefault()
          if (e.currentTarget.reportValidity()) setSent(true)
        }}
      >
        <Button type="button" variant="secondary" size="lg" className="ed-google">
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path
              fill="#4285F4"
              d="M23 12.3c0-.8-.1-1.5-.2-2.2H12v4.2h6.2a5.3 5.3 0 0 1-2.3 3.5v2.9h3.7c2.2-2 3.4-5 3.4-8.4Z"
            />
            <path
              fill="#34A853"
              d="M12 23.5c3.1 0 5.7-1 7.6-2.8l-3.7-2.9c-1 .7-2.3 1.1-3.9 1.1-3 0-5.5-2-6.4-4.7H1.8v3A11.5 11.5 0 0 0 12 23.5Z"
            />
            <path
              fill="#FBBC05"
              d="M5.6 14.2a6.9 6.9 0 0 1 0-4.4v-3H1.8a11.5 11.5 0 0 0 0 10.4l3.8-3Z"
            />
            <path
              fill="#EA4335"
              d="M12 5.4c1.7 0 3.2.6 4.4 1.7l3.3-3.3A11.5 11.5 0 0 0 1.8 6.8l3.8 3C6.5 7.4 9 5.4 12 5.4Z"
            />
          </svg>
          Sign in with Google
        </Button>
        <p className="ed-or ed-cap" aria-hidden="true">
          or
        </p>
        <TextField
          id="li-email"
          name="email"
          label="Work email"
          type="email"
          autoComplete="email"
          required
          fieldClassName="max-w-none"
        />
        <Submit>Log in</Submit>
        {sent ? (
          <p role="status" className="mr-small m-0">
            This preview does not sign you in. <Link to="/sign-up">Sign up free</Link> to set up
            your company.
          </p>
        ) : null}
      </form>
    </FormHero>
  )
}

export function LegalPage({ kind }: { kind: 'privacy' | 'terms' }) {
  const l = LEGAL[kind]
  return (
    <>
      <PageSeo title={l.title} description={`${l.title} for Miraee.`} />
      <main id="main" className="ed-main ed-inner">
        <Chapter id="legal" labelledBy="legal-h" className="ed-legal">
          <div className="ed-wrap">
            <Crumbs here={l.title} />
            <ChapterHead label="Legal" />
            <Heading as="h1" id="legal-h" className="ed-h--page">
              {l.title}
            </Heading>
            <p className="ed-lead">{l.body}</p>
          </div>
        </Chapter>
        <PageEnd />
      </main>
    </>
  )
}

export function NotFoundPage() {
  const { pathname } = useLocation()
  return (
    <>
      <PageSeo
        title="Page not found"
        description="This page could not be found."
        extra={{ robots: 'noindex, follow' }}
      />
      <main id="main" className="ed-main ed-inner">
        <Chapter id="nf" tone="plum" labelledBy="nf-h" className="ed-nf nf6__ch">
          <div className="ed-wrap nf6__grid">
            <div className="nf6__copy">
              <p className="ed-cap nf6__eyebrow">
                <i className="ed-dotmark" aria-hidden="true" />
                Error 404
              </p>
              <Heading as="h1" id="nf-h" className="ed-h--page">
                We could not match this <span className="ed-serif">page.</span>
              </Heading>
              <p className="ed-lead nf6__lead">
                There is nothing at <code className="nf6__code">{pathname}</code>. The link may be old, or the page has
                moved. We filed it as a line item and found the closest pages for you.
              </p>
              <div className="ed-btns">
                <Button asChild size="lg">
                  <Link to="/">Back to the home page</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link to="/talk-to-sales">Talk to us</Link>
                </Button>
              </div>
            </div>
            <NotFoundLedger />
          </div>
        </Chapter>
        <PageEnd />
      </main>
    </>
  )
}
