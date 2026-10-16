/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORMS_ENDPOINT?: string
  /** Origin of the other version of the site (empty = same origin). Used by the V1/V2 toggle. */
  readonly VITE_V2_ORIGIN?: string
}
