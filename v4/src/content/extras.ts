import { EXTRAS_ABOUT, GUIDES } from './extras-about'
import { EXTRAS_PRODUCT } from './extras-product'
import { EXTRAS_REVIEW } from './extras-review'
import type { Block } from './extras-types'

export type { Block, Guide, Item } from './extras-types'

/** Extra sections per inner-page path, in page order. */
export const EXTRAS: Record<string, Block[]> = {
  ...EXTRAS_PRODUCT,
  ...EXTRAS_REVIEW,
  ...EXTRAS_ABOUT,
}
export { GUIDES }
