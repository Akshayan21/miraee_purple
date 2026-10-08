import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import { useFormDialogs, type FormDialogId } from '@/components/forms/form-dialogs-context'
import { buttonVariants } from '@/components/ui/button'
import buttonStyles from '@/components/ui/button.module.css'

/** Keep authored HTML buttons consistent with the React Button component. */
function styleHtmlButtons(html: string) {
  return html.replace(/\bclass=("|')([^"']*)\1/g, (attribute, quote: string, value: string) => {
    const classes = new Set(value.split(/\s+/))
    if (!classes.has('mr-btn')) return attribute
    const variant = classes.has('mr-btn--tertiary')
      ? 'tertiary'
      : classes.has('mr-btn--secondary')
        ? 'secondary'
        : 'default'
    const size = classes.has('mr-btn--sm') ? 'sm' : classes.has('mr-btn--lg') ? 'lg' : 'default'
    return `class=${quote}${value} ${buttonVariants({ variant, size })} ${buttonStyles.button}${quote}`
  })
}

/**
 * Renders a page body that was authored as plain HTML (the long-form resource guides). In-site links navigate through the
 * router instead of reloading, and `data-open="signup|review|template"` buttons open the matching form dialog.
 */
export function StaticHtml({ html, tag = 'main' }: { html: string; tag?: 'main' | 'div' }) {
  const navigate = useNavigate()
  const { open } = useFormDialogs()
  const styledHtml = React.useMemo(() => styleHtmlButtons(html), [html])

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
      dangerouslySetInnerHTML={{ __html: styledHtml }}
    />
  )
}
