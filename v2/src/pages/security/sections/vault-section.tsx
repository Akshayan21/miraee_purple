import { Scene } from '@/components/scenes/scene'
import { ControlLayer } from './control-section'
import { SignInLayer } from './sign-in-section'
import { SecurityPackLayer } from './the-security-pack-section'
import { SpendReviewDataLayer } from './spend-review-data-section'
import styles from './vault-section.module.css'

/**
 * The vault: four stacked layers (control, sign-in, the security pack, spend review data). Each one
 * peels up and away as you scroll, revealing the next. Below 1024px they are four plain stacked panels.
 */
export function VaultSection() {
  return (
    <Scene
      steps={4}
      run={400}
      fill
      className={styles.vault}
      aria-label="Security controls"
      data-stop="2"
      data-stop-y="150"
    >
      <div className={styles.stack}>
        <ControlLayer styles={styles} />
        <SignInLayer styles={styles} />
        <SecurityPackLayer styles={styles} />
        <SpendReviewDataLayer styles={styles} />
      </div>
    </Scene>
  )
}
