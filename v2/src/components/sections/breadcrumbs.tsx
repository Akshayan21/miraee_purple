import { Container } from '@/components/layout/content-layout'
import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'

type BreadcrumbsProps = {
  /** Label of the current page (the last crumb). */
  current: string
  /** Extra classes on the <nav>, e.g. `mr-paper` to match a paper-coloured hero. */
  className?: string
}

/** Home / Current page trail above a page hero. */
export function Breadcrumbs({ current, className }: BreadcrumbsProps) {
  return (
    <nav className={cn('crumbs', className)} aria-label="Breadcrumb">
      <Container className="mr-container">
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <span aria-current="page">{current}</span>
          </li>
        </ol>
      </Container>
    </nav>
  )
}
