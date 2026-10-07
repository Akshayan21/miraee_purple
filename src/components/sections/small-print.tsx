import type { ReactNode } from 'react'

/** Trademark and fact-checking note at the foot of comparison pages. */
export function SmallPrint({ children }: { children: ReactNode }) {
  return (
    <section className="lf-smallprint" aria-label="About the facts on this page">
      <div className="mr-container">
        <p className="small-print">{children}</p>
      </div>
    </section>
  )
}
