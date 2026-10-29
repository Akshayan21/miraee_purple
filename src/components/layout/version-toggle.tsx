import { useLocation } from 'react-router-dom'

import styles from './version-toggle.module.css'

type Version = 1 | 2 | 3 | 4 | 5 | 6

/** Which version this app is. */
const CURRENT = 1 as Version

/** Where each version lives. Empty means the same origin (production); in dev each version has its own port. */
const ORIGIN: Record<Version, string> = {
  1: import.meta.env.VITE_V1_ORIGIN ?? '',
  2: import.meta.env.VITE_V2_ORIGIN ?? '',
  3: import.meta.env.VITE_V3_ORIGIN ?? '',
  4: import.meta.env.VITE_V4_ORIGIN ?? '',
  5: import.meta.env.VITE_V5_ORIGIN ?? '',
  6: import.meta.env.VITE_V6_ORIGIN ?? '',
}
const PREFIX: Record<Version, string> = { 1: '', 2: '/v2', 3: '/v3', 4: '/v4', 5: '/v5', 6: '/v6' }

/**
 * Switches between V1, V2 and V3 of the site, landing on the same page in the chosen version.
 * V1 is served at `/`, V2 at `/v2/`, V3 at `/v3/`. They are separate apps, so each switch is a plain link (full page load).
 */
export function VersionToggle({ className }: { className?: string }) {
  const { pathname } = useLocation()
  return (
    <div className={`${styles.toggle} ${className ?? ''}`} role="group" aria-label="Site version">
      {([1, 2, 3, 4, 5, 6] as const).map((v) =>
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
