import { useLocation } from 'react-router-dom'

import styles from './version-toggle.module.css'

/** Where the other version of the site lives. Empty means the same origin (production); set per environment in dev. */
const OTHER_ORIGIN: string = import.meta.env.VITE_V1_ORIGIN ?? ''

/**
 * Switches between V1 and V2 of the site, landing on the same page in the other version.
 * V1 is served at `/`, V2 at `/v2/`. They are separate apps, so this is a plain link (full page load).
 */
export function VersionToggle({ className }: { className?: string }) {
  const { pathname } = useLocation()
  const href = `${OTHER_ORIGIN}${pathname}`
  return (
    <div className={`${styles.toggle} ${className ?? ''}`} role="group" aria-label="Site version">
      <a className={styles.off} href={href}>
        V1
      </a>
      <span className={styles.on} aria-current="true">
        V2
      </span>
    </div>
  )
}
