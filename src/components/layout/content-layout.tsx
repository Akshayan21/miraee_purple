import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'
import styles from './content-layout.module.css'

/** Page gutters belong to the container, including the narrow-phone inset. */
export function Container({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('mr-container', styles.container, className)} {...props} />
}

export function Section({ className, ...props }: ComponentProps<'section'>) {
  return <section className={cn(styles.section, className)} {...props} />
}

/** Preserve the existing column markers while allowing both children to shrink. */
export function SplitLayout({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('split', styles.split, className)} {...props} />
}
