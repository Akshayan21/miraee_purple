import * as React from 'react'
import { Slot } from 'radix-ui'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

/**
 * Miraee button. Colours come from the surface roles (--btn-bg, --btn-fg ...), so the same variant
 * re-themes itself on white, paper (.mr-paper) and plum (.mr-plum) grounds.
 * `mr-btn*` marker classes are kept because page-layout CSS targets them
 * (e.g. `.mr-btn-row .mr-btn--tertiary`).
 */
const buttonVariants = cva(
  [
    'mr-btn max-w-full min-w-0 inline-flex h-(--h) cursor-pointer items-center justify-center gap-2 whitespace-nowrap',
    'rounded-md border-[1.5px] border-solid px-6 py-0 [line-height:1] font-semibold no-underline',
    'font-sans text-[length:var(--mr-fs-ui)] [--h:var(--mr-control-h)]',
    'transition-colors duration-[120ms] ease-[cubic-bezier(.2,0,0,1)]',
    'focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-solid focus-visible:outline-focus active:translate-y-px',
    'aria-disabled:translate-y-0 aria-disabled:cursor-not-allowed aria-disabled:border-rule aria-disabled:bg-surface-sunken aria-disabled:text-content-2',
    'disabled:translate-y-0 disabled:cursor-not-allowed disabled:border-rule disabled:bg-surface-sunken disabled:text-content-2',
  ],
  {
    variants: {
      variant: {
        default: 'border-btn bg-btn text-btn-fg hover:border-btn-hover hover:bg-btn-hover',
        secondary:
          'mr-btn--secondary border-btn2-border bg-transparent text-btn2 hover:border-btn2-border hover:bg-surface-raised',
        tertiary: [
          'mr-btn--tertiary h-auto min-h-(--h) whitespace-normal border-transparent bg-transparent px-1 text-left text-content',
          'underline decoration-1 underline-offset-[5px]',
          "after:ml-0.5 after:inline-block after:no-underline after:content-['→']",
          'hover:border-transparent hover:bg-transparent hover:text-link',
        ],
      },
      size: {
        default: '',
        sm: 'mr-btn--sm px-4 text-[length:var(--mr-fs-small)] [--h:var(--mr-control-h-sm)] pointer-coarse:[--h:var(--mr-touch-min)]',
        lg: 'mr-btn--lg px-8 text-[length:var(--mr-fs-card-title)] [--h:var(--mr-control-h-lg)]',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
)

type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    /** Render the child element (e.g. a router <Link>) with button styles instead of a <button>. */
    asChild?: boolean
  }

function Button({ className, variant, size, asChild = false, type, ...props }: ButtonProps) {
  const Comp = asChild ? Slot.Root : 'button'
  return (
    <Comp
      data-slot="button"
      type={asChild ? undefined : (type ?? 'button')}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Button, buttonVariants }
