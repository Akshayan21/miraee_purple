import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'
import styles from './product-preview.module.css'

export function ProductCard({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn(styles.card, className)} {...props} />
}
export function ProductPhone({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn(styles.phone, className)} {...props} />
}
export function ProductRow({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn(styles.row, className)} {...props} />
}
export function DocumentPreview({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn(styles.document, className)} {...props} />
}

/** Contain dense data in its own keyboard-accessible scroll area, never in the page viewport. */
export function LedgerTable({ className, ...props }: ComponentProps<'table'>) {
  return (
    <div className={styles.viewport} tabIndex={0} role="region" aria-label="Product data table">
      <table className={cn('mr-ledger', styles.table, className)} {...props} />
    </div>
  )
}

export function VisualComposition({ className, ...props }: ComponentProps<'figure'>) {
  return <figure className={cn(styles.composition, className)} {...props} />
}
