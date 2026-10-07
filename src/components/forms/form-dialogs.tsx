import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { ChoiceCheckbox, ChoiceRadioGroup, TextField } from '@/components/forms/fields'
import { LeadForm } from '@/components/forms/lead-form'
import { useFormDialogs, type FormDialogId } from '@/components/forms/form-dialogs-context'
import { FORM_DONE } from '@/content/forms'
import type { FormAction } from '@/lib/forms'

type FormDialogProps = {
  id: FormDialogId
  action: FormAction
  title: string
  intro: string
  /** Shown once the form is submitted. Defaults to the confirmation copy for `action`. */
  done?: React.ReactNode
  children: React.ReactNode
}

/** Shell shared by every form dialog: Radix Dialog around the form body. */
function FormDialog({ id, ...bodyProps }: FormDialogProps) {
  const { openId, close } = useFormDialogs()
  return (
    <Dialog open={openId === id} onOpenChange={(open) => !open && close()}>
      <DialogContent className="grid gap-[18px] p-8">
        <FormDialogBody {...bodyProps} />
      </DialogContent>
    </Dialog>
  )
}

/**
 * Heading + intro + LeadForm. It lives inside DialogContent, so its state resets every time the dialog
 * reopens. The heading and intro give way to the confirmation once the form is sent (the title stays
 * mounted, hidden, so the dialog keeps its accessible name).
 */
function FormDialogBody({ action, title, intro, done, children }: Omit<FormDialogProps, 'id'>) {
  const [submitted, setSubmitted] = React.useState(false)
  return (
    <>
      <div hidden={submitted}>
        <DialogTitle asChild>
          <h2 className="mr-h2">{title}</h2>
        </DialogTitle>
        <DialogDescription asChild>
          <p className="mr-body" style={{ marginTop: 8 }}>
            {intro}
          </p>
        </DialogDescription>
      </div>
      <LeadForm
        action={action}
        className="grid gap-[18px]"
        onDone={() => setSubmitted(true)}
        done={done ?? <FormDoneMessage action={action} />}
      >
        {children}
      </LeadForm>
    </>
  )
}

export function FormDoneMessage({ action }: { action: FormAction }) {
  const message = FORM_DONE[action]
  return (
    <>
      <h2 className="mr-h2">{message.title}</h2>
      <p className="mr-body">{message.body}</p>
    </>
  )
}

const TABHI_NOTE = 'Built by Tabhi, the company behind the Mondee travel marketplace.'

function SubmitButton({ children }: { children: React.ReactNode }) {
  return (
    <Button type="submit">
      <span className="mr-btn__u">{children}</span>
    </Button>
  )
}

export function SignupDialog() {
  return (
    <FormDialog
      id="signup"
      action="/sign-up"
      title="Sign up free"
      intro="Free to sign up and onboard, at any company size."
    >
      <TextField
        fieldClassName="max-w-none"
        id="su-email"
        name="email"
        label="Work email"
        type="email"
        autoComplete="email"
        required
        hint="We send your next steps here."
      />
      <TextField
        fieldClassName="max-w-none"
        id="su-co"
        name="company"
        label="Company name"
        type="text"
        autoComplete="organization"
        required
      />
      <TextField
        fieldClassName="max-w-none"
        id="su-size"
        name="size"
        label="Company size"
        type="number"
        inputMode="numeric"
        min={1}
        required
        hint="Add the number of employees."
      />
      <TextField
        fieldClassName="max-w-none"
        id="su-role"
        name="role"
        label="Your role"
        type="text"
        autoComplete="organization-title"
        required
      />
      <SubmitButton>Request my account</SubmitButton>
      <p className="mr-small m-0">{TABHI_NOTE}</p>
    </FormDialog>
  )
}

export function ReviewDialog() {
  return (
    <FormDialog
      id="review"
      action="/spend-review"
      title="Get a spend review"
      intro="Send one booking report. Get a trip-by-trip review of last year's travel."
    >
      <TextField
        fieldClassName="max-w-none"
        id="sr-email"
        name="email"
        label="Work email"
        type="email"
        autoComplete="email"
        required
      />
      <TextField
        fieldClassName="max-w-none"
        id="sr-co"
        name="company"
        label="Company name"
        type="text"
        autoComplete="organization"
        required
      />
      <TextField
        fieldClassName="max-w-none"
        id="sr-size"
        name="size"
        label="Company size"
        type="number"
        inputMode="numeric"
        min={1}
        required
        hint="Add the number of employees."
      />
      <ChoiceRadioGroup
        legend="Which file do you have?"
        name="file"
        required
        options={[
          { value: 'agency', label: 'A booking report from our travel agency' },
          { value: 'expense', label: 'An expense extract from our expense system' },
        ]}
      />
      <ChoiceCheckbox name="card_feed" value="yes">
        We can also share a corporate card feed (optional)
      </ChoiceCheckbox>
      <SubmitButton>Request my review</SubmitButton>
      <p className="mr-small m-0">The review is optional. You can sign up without one.</p>
    </FormDialog>
  )
}

export function PackDialog() {
  return (
    <FormDialog
      id="pack"
      action="/security/pack"
      title="Request the security pack"
      intro="We send the pack to your work email."
    >
      <TextField
        fieldClassName="max-w-none"
        id="sp-email"
        name="email"
        label="Work email"
        type="email"
        autoComplete="email"
        required
      />
      <TextField
        fieldClassName="max-w-none"
        id="sp-co"
        name="company"
        label="Company name"
        type="text"
        autoComplete="organization"
        required
      />
      <TextField
        fieldClassName="max-w-none"
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
        fieldClassName="max-w-none"
        id="sp-role"
        name="role"
        label="Your role"
        type="text"
        autoComplete="organization-title"
        required
      />
      <SubmitButton>Send me the pack</SubmitButton>
      <p className="mr-small m-0">{TABHI_NOTE}</p>
    </FormDialog>
  )
}

export function TemplateDialog() {
  return (
    <FormDialog
      id="template"
      action="/resources/business-travel-policy-template"
      title="Download the template"
      intro="The editable Word file, the PDF and the one-page rollout checklist."
      done={
        <>
          <h2 className="mr-h2">Your template is ready.</h2>
          <p className="mr-body">Download the files below. A copy is on its way to your inbox.</p>
          <ul className="dl-list">
            <li>
              <Button asChild>
                <a href="/downloads/Miraee_Business_Travel_Policy_Template.docx" download>
                  <span className="mr-btn__u">Word file (.docx)</span>
                </a>
              </Button>
            </li>
            <li>
              <Button asChild variant="secondary">
                <a href="/downloads/Miraee_Business_Travel_Policy_Template.pdf" download>
                  PDF
                </a>
              </Button>
            </li>
          </ul>
        </>
      }
    >
      <TextField
        fieldClassName="max-w-none"
        id="tp-email"
        name="email"
        label="Work email"
        type="email"
        autoComplete="email"
        required
        hint="We send a copy of the files here too."
      />
      <TextField
        fieldClassName="max-w-none"
        id="tp-co"
        name="company"
        label="Company name"
        type="text"
        autoComplete="organization"
        required
      />
      <TextField
        fieldClassName="max-w-none"
        id="tp-size"
        name="size"
        label="Company size"
        type="number"
        inputMode="numeric"
        min={1}
        required
        hint="Add the number of employees."
      />
      <SubmitButton>Get the template</SubmitButton>
      <p className="mr-small m-0">{TABHI_NOTE}</p>
    </FormDialog>
  )
}
