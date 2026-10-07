import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'
import styles from './content-layout.module.css'

/** Page gutters belong to the container, including the narrow-phone inset. */
export function Container({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('mr-container', styles.container, className)} {...props} />
}

type SectionProps = ComponentProps<'section'> & {
  tone?: 'lavender' | 'plum' | 'white'
  accent?: boolean
}

/** Brand surfaces are owned by each section, including inherited text and control colors. */
export function Section({ className, tone, accent = false, ...props }: SectionProps) {
  const hasTone = /(?:^|\s)mr-(?:paper|plum|night|dark)(?:\s|$)/.test(className ?? '')
  const surface = tone ?? (hasTone ? undefined : 'lavender')
  return (
    <section
      className={cn(
        styles.section,
        className,
        surface === 'lavender' && 'mr-paper',
        surface === 'plum' && 'mr-plum',
        surface === 'white' && styles.white,
        accent && styles.accent,
      )}
      {...props}
    />
  )
}

/** Preserve the existing column markers while allowing both children to shrink. */
export function SplitLayout({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('split', styles.split, className)} {...props} />
}
