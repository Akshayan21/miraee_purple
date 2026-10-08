import styles from './page-nav.module.css'
import { Container } from '@/components/layout/content-layout'
const LINKS = [
  { href: '#what-should-a-company-of-300-to-1-500-people-compare', label: 'What to compare' },
  { href: '#twelve-questions-to-ask-every-vendor-including-us', label: 'Twelve questions' },
  { href: '#cost-to-start-as-each-vendor-states-it', label: 'Cost to start' },
  { href: '#side-by-side-comparisons', label: 'Side-by-side' },
  { href: '#faq', label: 'Questions' },
]

/** Sticky in-page navigation: this guide is long, so the reader can jump between its parts. */
export function PageNav() {
  return (
    <nav aria-label="On this page" className={`mr-plum ${styles.nav}`}>
      <Container className={styles.track} tabIndex={0}>
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} className={styles.link}>
            <span>{link.label}</span>
          </a>
        ))}
      </Container>
    </nav>
  )
}
