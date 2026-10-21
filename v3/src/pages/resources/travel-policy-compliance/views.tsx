import { FlightsPhoneView } from '@/pages/home/product-views'
import styles from './page.module.css'

/** Flight options marked in or out of policy (the home page's phone view, framed for the guide). */
export function FlightsView() {
  return (
    <figure
      className={styles.view}
      role="img"
      aria-label="Flight options from Austin to Chicago, each marked in policy or out of policy"
    >
      <FlightsPhoneView />
    </figure>
  )
}
