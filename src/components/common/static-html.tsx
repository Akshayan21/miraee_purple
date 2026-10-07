import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import { useFormDialogs, type FormDialogId } from '@/components/forms/form-dialogs-context'

/**
 * Renders a page body that was authored as plain HTML (the long-form resource guides). In-site links navigate through the
 * router instead of reloading, and `data-open="signup|review|template"` buttons open the matching form dialog.
 */
export function StaticHtml({ html, tag = 'main' }: { html: string; tag?: 'main' | 'div' }) {
  const navigate = useNavigate()
  const { open } = useFormDialogs()

  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.defaultPrevented || event.button !== 0) return
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    const link = (event.target as HTMLElement).closest<HTMLAnchorElement>('a')
    if (!link) return
    const dialog = link.getAttribute('data-open') as FormDialogId | null
    if (dialog) {
      event.preventDefault()
      open(dialog)
      return
    }
    const href = link.getAttribute('href')
    if (
      href &&
      href.startsWith('/') &&
      !link.hasAttribute('download') &&
      link.target !== '_blank'
    ) {
      event.preventDefault()
      void navigate(href)
    }
  }

  const Tag = tag
  return (
    <Tag
      id={tag === 'main' ? 'main' : undefined}
      onClick={onClick}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
