import styles from './promise-section.module.css'

const PROMISES = [
  'Free to sign up and onboard',
  'Policy on every booking',
  'Keep your corporate cards',
]

/**
 * A strip of the three promises under the hero. It reads as a list (the first set is real, the repeats are hidden from
 * assistive tech) and slides sideways as you scroll, so the page has motion even between the larger scenes.
 */
export function PromiseSection() {
  return (
    <section className={`mr-plum ${styles.strip} mo-skip`} aria-labelledby="promise-h">
      <h2 id="promise-h" className="sr-only">
        Why teams start with Miraee
      </h2>
      <div className={styles.track} data-track>
        {[0, 1, 2].map((copy) => (
          <ul key={copy} className={styles.set} aria-hidden={copy > 0 ? true : undefined}>
            {PROMISES.map((text, i) => (
              <li key={text} className={i % 2 === 1 ? styles.outline : undefined}>
                {text}
                <span className={styles.dot} aria-hidden="true" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}
