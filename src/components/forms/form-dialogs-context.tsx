import * as React from 'react'
import { Link, type LinkProps } from 'react-router-dom'

export type FormDialogId = 'signup' | 'review' | 'pack' | 'template'

type FormDialogsContextValue = {
  openId: FormDialogId | null
  open: (id: FormDialogId) => void
  close: () => void
}

const FormDialogsContext = React.createContext<FormDialogsContextValue | null>(null)

export function FormDialogsProvider({ children }: { children: React.ReactNode }) {
  const [openId, setOpenId] = React.useState<FormDialogId | null>(null)
  const value = React.useMemo<FormDialogsContextValue>(
    () => ({ openId, open: setOpenId, close: () => setOpenId(null) }),
    [openId],
  )
  return <FormDialogsContext.Provider value={value}>{children}</FormDialogsContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFormDialogs() {
  const ctx = React.useContext(FormDialogsContext)
  if (!ctx) throw new Error('useFormDialogs must be used inside <FormDialogsProvider>')
  return ctx
}

type DialogLinkProps = Omit<LinkProps, 'to'> & { to: string; dialog: FormDialogId }

/**
 * A link that opens a form dialog. Without JavaScript (or when opened in a new tab) it still
 * navigates to the full page version of the form.
 */
export function DialogLink({ dialog, to, onClick, ...props }: DialogLinkProps) {
  const { open } = useFormDialogs()
  return (
    <Link
      to={to}
      onClick={(event) => {
        onClick?.(event)
        if (event.defaultPrevented) return
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0)
          return
        event.preventDefault()
        open(dialog)
      }}
      {...props}
    />
  )
}
