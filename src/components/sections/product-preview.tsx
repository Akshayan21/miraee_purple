import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'
import styles from './product-preview.module.css'

export function ProductCard({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn(styles.card, 'mo-skip', className)} {...props} />
}
export function ProductPhone({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn(styles.phone, 'mo-skip', className)} {...props} />
}
export function ProductRow({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn(styles.row, className)} {...props} />
}
export function DocumentPreview({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn(styles.document, 'mo-skip', className)} {...props} />
}

/** Static product illustration: every column fits without a nested scroll area. */
export function LedgerTable({ className, ...props }: ComponentProps<'table'>) {
  return (
    <div className={styles.viewport}>
      <table className={cn('mr-ledger', styles.table, className)} {...props} />
    </div>
  )
}

export function VisualComposition({ className, ...props }: ComponentProps<'figure'>) {
  return <figure className={cn(styles.composition, 'mo-skip', className)} {...props} />
}
