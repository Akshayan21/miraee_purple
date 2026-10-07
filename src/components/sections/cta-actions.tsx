import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'

import { DialogLink, type FormDialogId } from '@/components/forms/form-dialogs-context'
import { Button } from '@/components/ui/button'

/** The second button: opens a form dialog (with a page fallback) or links to a page. */
export type SecondaryAction = {
  label: string
  variant: 'secondary' | 'tertiary'
  to: string
  dialog?: FormDialogId
}

type CtaActionsProps = {
  secondary?: SecondaryAction
  /** Draws the Line's underline under the primary label (white grounds only). */
  underline?: boolean
  style?: CSSProperties
}

/** "Sign up free" plus an optional secondary action. */
export function CtaActions({ secondary, underline, style }: CtaActionsProps) {
  return (
    <div className="mr-btn-row" style={style}>
      <Button asChild>
        <DialogLink to="/sign-up" dialog="signup">
          {underline ? <span className="mr-btn__u">Sign up free</span> : 'Sign up free'}
        </DialogLink>
      </Button>
      {secondary ? (
        <>
          {' '}
          <Button asChild variant={secondary.variant}>
            {secondary.dialog ? (
              <DialogLink to={secondary.to} dialog={secondary.dialog}>
                {secondary.label}
              </DialogLink>
            ) : (
              <Link to={secondary.to}>{secondary.label}</Link>
            )}
          </Button>
        </>
      ) : null}
    </div>
  )
}
