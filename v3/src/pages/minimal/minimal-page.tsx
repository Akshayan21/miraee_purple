import * as React from 'react'
import { Link } from 'react-router-dom'

import { Seo } from '@/components/common/seo'
import { DialogLink } from '@/components/forms/form-dialogs-context'
import { Reveal } from '@/components/scenes/reveal'
import { Button } from '@/components/ui/button'
import type { PageContent } from '@/content/pages'
import shared from '../home/home-shared.module.css'
import styles from './minimal-page.module.css'

type Action = PageContent['actions'][number]

function ActionButton({ action, primary }: { action: Action; primary: boolean }) {
  const variant = primary ? undefined : 'secondary'
  if (action.kind === 'signup' || action.kind === 'review') {
    return (
      <Button asChild variant={variant}>
        <DialogLink
          to={action.kind === 'signup' ? '/sign-up' : '/spend-review'}
          dialog={action.kind === 'signup' ? 'signup' : 'review'}
        >
          {action.label}
        </DialogLink>
      </Button>
    )
  }
  const to = action.kind === 'sales' ? '/talk-to-sales' : (action.to ?? '/')
  return (
    <Button asChild variant={variant}>
      {to.startsWith('#') ? <a href={to}>{action.label}</a> : <Link to={to}>{action.label}</Link>}
    </Button>
  )
}

/**
 * The V3 inner page: one headline, one lead, the page's few key points as an editorial list, and the same actions again at the end.
 * Every string comes from `content/pages.ts` (verbatim from V1).
 */
export function MinimalPage({ content }: { content: PageContent }) {
  const { title, lead, points, actions, meta } = content
  return (
    <>
      <Seo meta={{ title: meta.title, description: meta.description }} />
      <main id="main">
        <section className={`${shared.night} ${styles.hero}`} aria-labelledby="page-h">
          <div className={styles.mesh} aria-hidden="true" />
          <div className={shared.grain} aria-hidden="true" />
          <div className={`${shared.wrap} ${styles.heroInner}`}>
            <h1 id="page-h" className={`${shared.display} ${styles.title}`}>
              <span className={styles.line}>
                <span>{title}</span>
              </span>
            </h1>
            <p className={`${shared.lead} ${styles.lead}`}>{lead}</p>
            {actions.length > 0 ? (
              <div className={`${shared.buttons} ${styles.actions}`}>
                {actions.map((a, i) => (
                  <ActionButton key={a.label} action={a} primary={i === 0} />
                ))}
              </div>
            ) : null}
          </div>
        </section>

        <section className={`${shared.lilac} ${styles.points}`} aria-label="Key points">
          <div className={shared.wrap}>
            <ol className={styles.list}>
              {points.map((p, i) => (
                <Reveal
                  as="li"
                  key={p.title}
                  className={styles.row}
                  style={{ '--i': i } as React.CSSProperties}
                >
                  <span className={styles.n} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className={styles.pointTitle}>{p.title}</h2>
                  {p.body ? <p className={styles.pointBody}>{p.body}</p> : <span />}
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {actions.length > 0 ? (
          <section className={`${shared.night} ${styles.close}`} aria-label="Next step">
            <div className={styles.closeWindow}>
              <div className={styles.mesh} aria-hidden="true" />
              <div className={shared.grain} aria-hidden="true" />
              <h2 className={`${shared.display} ${styles.closeTitle}`}>
                Put every trip
                <br />
                <span className={shared.accent}>in one place.</span>
              </h2>
              <p className={`${shared.lead} ${styles.closeLead}`}>
                Free to sign up and onboard, at any company size.
              </p>
              <div className={`${shared.buttons} ${styles.closeActions}`}>
                {actions.map((a, i) => (
                  <ActionButton key={a.label} action={a} primary={i === 0} />
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
    </>
  )
}
