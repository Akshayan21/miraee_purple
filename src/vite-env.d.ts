/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORMS_ENDPOINT?: string
  /** Origin of each version of the site (empty = same origin). Used by the V1 / V2 / V3 toggle in dev. */
  readonly VITE_V1_ORIGIN?: string
  readonly VITE_V2_ORIGIN?: string
  readonly VITE_V3_ORIGIN?: string
  readonly VITE_V4_ORIGIN?: string
  readonly VITE_V5_ORIGIN?: string
  readonly VITE_V6_ORIGIN?: string
}
