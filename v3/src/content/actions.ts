import type { SecondaryAction } from '@/components/sections/cta-actions'

/** Spend review: the usual secondary action next to "Sign up free". */
export const SPEND_REVIEW_ACTION: SecondaryAction = {
  label: 'Get a spend review',
  variant: 'secondary',
  to: '/spend-review',
  dialog: 'review',
}
