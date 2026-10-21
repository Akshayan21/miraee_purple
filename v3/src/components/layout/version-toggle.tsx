import { useLocation } from 'react-router-dom'

import styles from './version-toggle.module.css'

/** Which version this app is. */
const CURRENT = 3 as 1 | 2 | 3

/** Where each version lives. Empty means the same origin (production); in dev each version has its own port. */
const ORIGIN: Record<1 | 2 | 3, string> = {
  1: import.meta.env.VITE_V1_ORIGIN ?? '',
  2: import.meta.env.VITE_V2_ORIGIN ?? '',
  3: import.meta.env.VITE_V3_ORIGIN ?? '',
}
const PREFIX: Record<1 | 2 | 3, string> = { 1: '', 2: '/v2', 3: '/v3' }

/**
 * Switches between V1, V2 and V3 of the site, landing on the same page in the chosen version.
 * V1 is served at `/`, V2 at `/v2/`, V3 at `/v3/`. They are separate apps, so each switch is a plain link (full page load).
 */
export function VersionToggle({ className }: { className?: string }) {
  const { pathname } = useLocation()
  return (
    <div className={`${styles.toggle} ${className ?? ''}`} role="group" aria-label="Site version">
      {([1, 2, 3] as const).map((v) =>
        v === CURRENT ? (
          <span key={v} className={styles.on} aria-current="true">
            V{v}
          </span>
        ) : (
          <a
            key={v}
            className={styles.off}
            href={`${ORIGIN[v]}${PREFIX[v]}${v === 1 || pathname !== '/' ? pathname : '/'}`}
          >
            V{v}
          </a>
        ),
      )}
    </div>
  )
}
