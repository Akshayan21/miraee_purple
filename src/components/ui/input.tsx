import * as React from 'react'

import { cn } from '@/lib/utils'

const control = [
  'mr-input h-(--mr-control-h-input) w-full rounded-xs border-[1.5px] border-solid border-control bg-field px-3.5 py-0',
  'font-sans text-[length:var(--mr-fs-ui)] text-content',
  'transition-[border-color,box-shadow] duration-[120ms] ease-[cubic-bezier(.2,0,0,1)]',
  'placeholder:text-content-2 placeholder:opacity-100 hover:border-content-2',
  'focus:border-focus focus:[box-shadow:0_0_0_1px_var(--focus)] focus:outline-none',
  'aria-invalid:border-error aria-invalid:[box-shadow:0_0_0_1px_var(--error)]',
]

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return <input data-slot="input" type={type} className={cn(control, className)} {...props} />
}

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return <textarea data-slot="textarea" className={cn(control, className)} {...props} />
}

export { Input, Textarea }
