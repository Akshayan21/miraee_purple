import * as React from 'react'

import { Button } from '@/components/ui/button'
import { TextField } from '@/components/forms/fields'
import { FormDoneMessage } from '@/components/forms/form-dialogs'
import { LeadForm } from '@/components/forms/lead-form'
import { FORM_PAGES } from '@/content/site'
import { FORM_DONE } from '@/content/forms'
import type { FormAction } from '@/lib/forms'

/** A glass form tile around the shared LeadForm. */
export function FormTile({
  id,
  action,
  title,
  intro,
  children,
  button,
  done,
  cols = 1,
  className = '',
}: {
  id?: string
  action: FormAction
  title: string
  intro?: string
  children: React.ReactNode
  button: string
  done?: React.ReactNode
  cols?: 1 | 2
  className?: string
}) {
  return (
    <div className={`tile form-tile ${className}`} id={id} data-reveal>
      <h2 className="disp h-md">{title}</h2>
      {intro ? <p className="p">{intro}</p> : null}
      <LeadForm
        action={action}
        done={done ?? <FormDoneMessage action={action} />}
        className={`gform gform--${cols}`}
      >
        {children}
        <div className="gform-submit">
          <Button type="submit" className="gform-btn">
            <span className="mr-btn__u">{button}</span>
          </Button>
        </div>
      </LeadForm>
    </div>
  )
}

const F = 'max-w-none'

/** Page-specific forms: the review request, the security pack and the template download. */
export function ExtraForm({ path }: { path: string }) {
  if (path === '/spend-review')
    return (
      <section className="sec sec--tight" aria-label="Request a spend review">
        <div className="wrap">
          <div className="bento">
            <FormTile
              id="request"
              className="s12"
              action="/spend-review"
              title="Request your spend review"
              intro="Optional. You can sign up without one."
              button={FORM_PAGES.review.button}
              cols={2}
            >
              <TextField
                fieldClassName={F}
                id="rv-name"
                name="name"
                label="Name"
                autoComplete="name"
                required
              />
              <TextField
                fieldClassName={F}
                id="rv-email"
                name="email"
                label="Work email"
                type="email"
                autoComplete="email"
                required
              />
              <TextField
                fieldClassName={F}
                id="rv-co"
                name="company"
                label="Company"
                autoComplete="organization"
                required
              />
              <TextField
                fieldClassName={F}
                id="rv-size"
                name="size"
                label="Headcount"
                type="number"
                inputMode="numeric"
                min={1}
                required
              />
              <TextField fieldClassName={F} id="rv-tool" name="tool" label="Current booking tool" />
              <TextField
                fieldClassName={F}
                id="rv-file"
                name="file"
                label="File upload"
                type="file"
                hint="We email you to sign an NDA first. Please hold your file until then."
              />
            </FormTile>
          </div>
        </div>
      </section>
    )
  if (path === '/security')
    return (
      <section className="sec sec--tight" aria-label="Request the security pack">
        <div className="wrap">
          <div className="bento">
            <FormTile
              id="pack"
              className="s12"
              action="/security/pack"
              title="Request the security pack"
              intro="We send the pack to your work email."
              button="Send me the pack"
              cols={2}
            >
              <TextField
                fieldClassName={F}
                id="sp-email"
                name="email"
                label="Work email"
                type="email"
                autoComplete="email"
                required
              />
              <TextField
                fieldClassName={F}
                id="sp-co"
                name="company"
                label="Company name"
                autoComplete="organization"
                required
              />
              <TextField
                fieldClassName={F}
                id="sp-size"
                name="size"
                label="Company size"
                type="number"
                inputMode="numeric"
                min={1}
                required
                hint="Add the number of employees."
              />
              <TextField
                fieldClassName={F}
                id="sp-role"
                name="role"
                label="Your role"
                autoComplete="organization-title"
                required
              />
            </FormTile>
          </div>
        </div>
      </section>
    )
  if (path === '/resources/business-travel-policy-template')
    return (
      <section className="sec sec--tight" aria-label="Download the template">
        <div className="wrap">
          <div className="bento">
            <FormTile
              id="download"
              className="s12"
              action="/resources/business-travel-policy-template"
              title="Download the template"
              intro="The editable Word file, the PDF and the one-page rollout checklist."
              button="Get the template"
              cols={2}
              done={
                <>
                  <h2 className="disp h-md">
                    {FORM_DONE['/resources/business-travel-policy-template'].title}
                  </h2>
                  <p className="p">
                    {FORM_DONE['/resources/business-travel-policy-template'].body}
                  </p>
                  <div className="row">
                    <Button asChild>
                      <a href="/downloads/Miraee_Business_Travel_Policy_Template.docx" download>
                        <span className="mr-btn__u">Word file (.docx)</span>
                      </a>
                    </Button>
                    <Button asChild variant="secondary">
                      <a href="/downloads/Miraee_Business_Travel_Policy_Template.pdf" download>
                        PDF
                      </a>
                    </Button>
                  </div>
                </>
              }
            >
              <TextField
                fieldClassName={F}
                id="tp-email"
                name="email"
                label="Work email"
                type="email"
                autoComplete="email"
                required
                hint="We send a copy of the files here too."
              />
              <TextField
                fieldClassName={F}
                id="tp-co"
                name="company"
                label="Company name"
                autoComplete="organization"
                required
              />
              <TextField
                fieldClassName={F}
                id="tp-size"
                name="size"
                label="Company size"
                type="number"
                inputMode="numeric"
                min={1}
                required
                hint="Add the number of employees."
              />
            </FormTile>
          </div>
        </div>
      </section>
    )
  return null
}
