import type { CSSProperties } from 'react'

export function SignInLayer({ styles }: { styles: Record<string, string> }) {
  return (
    <article
      className={`mr-plum ${styles.layer} ${styles.l1}`}
      style={{ '--i': 1 } as CSSProperties}
      aria-labelledby="signin-h"
    >
      <video
        className={styles.video}
        src="/video/panel-sec.mp4"
        poster="/video/panel-sec.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
      />
      <div className={styles.tint} aria-hidden="true" />
      <div className={styles.content}>
        <img
          className="duo__icon"
          src="/img/icons/user-round.svg"
          alt=""
          width="32"
          height="32"
          style={{ marginBottom: 12, filter: 'invert(1)' }}
        />
        <h2 className={`mr-h2 ${styles.title} ${styles.big}`} id="signin-h">
          Sign in with Google
        </h2>
        <p className={`mr-body ${styles.body}`}>
          Your team signs in with their Google work accounts. Single sign-on is on our roadmap; ask
          and we'll share the date in writing.
        </p>
      </div>
    </article>
  )
}
