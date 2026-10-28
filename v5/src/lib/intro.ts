/**
 * Page-load intro coordination. The intro is a short overlay of glass tiles on the first home visit of a session.
 * It never gates content: the hero waits on `introReady()` but a timeout releases it, and the overlay is JS-only.
 */
let state: 'unknown' | 'pending' | 'skip' | 'done' = 'unknown'
let release: (() => void) | undefined
let promise: Promise<void> | undefined

export function shouldIntro(): boolean {
  if (state === 'unknown') {
    let ok = typeof window !== 'undefined'
    if (ok) {
      ok = window.location.pathname.replace(/\/$/, '') === import.meta.env.BASE_URL.replace(/\/$/, '')
      ok = ok && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
      try {
        if (ok && sessionStorage.getItem('v5-intro')) ok = false
        if (ok) sessionStorage.setItem('v5-intro', '1')
      } catch {
        /* storage blocked: play it anyway */
      }
    }
    state = ok ? 'pending' : 'skip'
  }
  return state === 'pending'
}

export function introReady(): Promise<void> {
  if (!shouldIntro()) return Promise.resolve()
  promise ??= new Promise<void>((resolve) => {
    release = resolve
    window.setTimeout(resolve, 2200)
  })
  return promise
}

export function introDone() {
  state = 'done'
  release?.()
}
