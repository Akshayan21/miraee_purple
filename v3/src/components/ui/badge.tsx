import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

/** Status badge: the word comes first, the colour second. Light surfaces get a tint, dark ones an outline. */
const badgeVariants = cva(
  [
    'mr-badge inline-flex h-6 items-center gap-[5px] rounded-xs px-2 [line-height:1] font-semibold whitespace-nowrap',
    'text-[length:var(--mr-fs-label)]',
    "before:size-(--mr-dot) before:rounded-full before:bg-current before:content-['']",
  ],
  {
    variants: {
      variant: {
        neutral:
          'mr-badge--neutral bg-(--badge-neutral-bg) text-content-2 [box-shadow:var(--badge-ring-neutral)] before:hidden',
        success: 'mr-badge--success bg-success-bg text-success [box-shadow:var(--badge-ring)]',
        warning: 'mr-badge--warning bg-warning-bg text-warning [box-shadow:var(--badge-ring)]',
        error: 'mr-badge--error bg-error-bg text-error [box-shadow:var(--badge-ring)]',
        info: 'mr-badge--info bg-info-bg text-info [box-shadow:var(--badge-ring)]',
      },
      tick: {
        true: 'mr-badge--tick',
        false: '',
      },
    },
    defaultVariants: { variant: 'neutral', tick: false },
  },
)

type BadgeProps = React.ComponentProps<'span'> & VariantProps<typeof badgeVariants>

function Badge({ className, variant, tick, ...props }: BadgeProps) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant, tick }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
