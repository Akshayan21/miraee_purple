import { Container } from '@/components/layout/content-layout'
import { Scene } from '@/components/scenes/scene'
import styles from './what-you-send-section.module.css'

const FILES = ['Agency booking report', 'Expense extract', 'Card feed (optional)']

/** Three file tiles slide in one after another and stack up as the file you send. */
export function WhatYouSendSection() {
  return (
    <Scene steps={3} run={170} className={`mr-plum ${styles.scene}`} aria-labelledby="send-h">
      <Container className={`mr-container ${styles.grid}`}>
        <h2 className={`mr-h2 ${styles.title}`} id="send-h">
          Send one file you already have
        </h2>
        <p className={`mr-body ${styles.body}`}>
          A booking report from your travel agency, or an expense extract from your expense system.
          Add a corporate card feed if you like. We sign an NDA before you send anything.
        </p>
        <ul className={styles.tiles}>
          {FILES.map((label, i) => (
            <li key={label} className={`mr-paper ${styles.tile} ${styles['t' + i]}`}>
              <img src="/img/icons/file-text.svg" alt="" width="32" height="32" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Scene>
  )
}
