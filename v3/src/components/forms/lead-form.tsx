import * as React from 'react'

import { submitLead, type FormAction } from '@/lib/forms'
import { cn } from '@/lib/utils'

type LeadFormProps = Omit<React.ComponentProps<'form'>, 'action' | 'onSubmit'> & {
  action: FormAction
  /** Replaces the form once it has been submitted. */
  done: React.ReactNode
  /** Called once the form has been submitted and the confirmation is showing. */
  onDone?: () => void
}

/**
 * Native-validated form. On a valid submit it posts through `submitLead` and swaps itself for the
 * confirmation block, which is a live region with a focusable heading (same behaviour as the static site).
 */
export function LeadForm({ action, done, onDone, className, children, ...props }: LeadFormProps) {
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const doneRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (status !== 'done') return
    onDone?.()
    const heading = doneRef.current?.querySelector<HTMLElement>('h2')
    heading?.setAttribute('tabindex', '-1')
    heading?.focus()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    setStatus('sending')
    try {
      await submitLead(action, Object.fromEntries(new FormData(form)))
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div ref={doneRef} role="status" className="grid gap-3">
        {done}
      </div>
    )
  }

  return (
    <form method="post" action={action} onSubmit={handleSubmit} className={className} {...props}>
      {children}
      {status === 'error' ? (
        <p
          role="alert"
          className={cn('m-0 text-[length:var(--mr-fs-small)] font-semibold text-error')}
        >
          Something went wrong sending your request. Please try again.
        </p>
      ) : null}
    </form>
  )
}
