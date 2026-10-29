/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORMS_ENDPOINT?: string
  /** Public origin used for canonical and og:url (default https://miraee.ai). */
  readonly VITE_SITE_URL?: string
  /** Set to "true" to show the V1 to V6 version switch in a production build (it always shows in dev). */
  readonly VITE_SHOW_VERSION_TOGGLE?: string
  /** Origin of each version of the site (empty = same origin). Used by the V1 to V5 toggle in dev. */
  readonly VITE_V1_ORIGIN?: string
  readonly VITE_V2_ORIGIN?: string
  readonly VITE_V3_ORIGIN?: string
  readonly VITE_V4_ORIGIN?: string
  readonly VITE_V6_ORIGIN?: string
  readonly VITE_V5_ORIGIN?: string
}
