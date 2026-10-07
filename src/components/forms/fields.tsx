import * as React from 'react'

import { Input, Textarea } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'

export function Field({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('mr-field grid max-w-[420px] gap-1.5', className)} {...props} />
}

export function FieldHint({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn('mr-field__hint text-[length:var(--mr-fs-meta)] text-content-2', className)}
      {...props}
    />
  )
}

type TextFieldProps = Omit<React.ComponentProps<'input'>, 'id' | 'name'> & {
  id: string
  name: string
  label: string
  hint?: string
  /** Render a multi-line field instead of an <input>. */
  multiline?: boolean
  rows?: number
  fieldClassName?: string
}

/** Label + control + optional hint, wired together with matching ids (aria-describedby on the control). */
export function TextField({
  id,
  label,
  hint,
  multiline,
  rows,
  fieldClassName,
  ...controlProps
}: TextFieldProps) {
  const hintId = hint ? `${id}-h` : undefined
  return (
    <Field className={fieldClassName}>
      <Label htmlFor={id}>{label}</Label>
      {multiline ? (
        <Textarea id={id} rows={rows} aria-describedby={hintId} {...(controlProps as object)} />
      ) : (
        <Input id={id} aria-describedby={hintId} {...controlProps} />
      )}
      {hint ? <FieldHint id={hintId}>{hint}</FieldHint> : null}
    </Field>
  )
}

const choiceClass = 'flex items-start gap-2.5 text-[15px]'

export function ChoiceRadioGroup({
  legend,
  name,
  required,
  options,
}: {
  legend: string
  name: string
  required?: boolean
  options: { value: string; label: string }[]
}) {
  const groupId = React.useId()
  return (
    <fieldset className="m-0 grid gap-2 border-0 p-0">
      <legend className="mb-1.5 p-0 text-[length:var(--mr-fs-small)] font-semibold">
        {legend}
      </legend>
      <RadioGroup name={name} required={required} aria-label={legend}>
        {options.map((option) => {
          const id = `${groupId}-${option.value}`
          return (
            <div key={option.value} className={choiceClass}>
              <RadioGroupItem id={id} value={option.value} />
              <Label htmlFor={id} className="text-[15px] font-normal">
                {option.label}
              </Label>
            </div>
          )
        })}
      </RadioGroup>
    </fieldset>
  )
}

export function ChoiceCheckbox({
  name,
  value,
  children,
}: {
  name: string
  value: string
  children: React.ReactNode
}) {
  const id = React.useId()
  return (
    <div className={choiceClass}>
      <Checkbox id={id} name={name} value={value} />
      <Label htmlFor={id} className="text-[15px] font-normal">
        {children}
      </Label>
    </div>
  )
}
