import { Section, Container } from '@/components/layout/content-layout'
import styles from './the-problem-section.module.css'
export function TheProblemSection() {
  return (
    <Section spacing="compact" className="mr-section problem" aria-labelledby="prob-h">
      <Container className={`mr-container ${styles.row}`}>
        <p className="stat-line">
          <span className="stat-line__fig">12%</span> of travel programs have their data in one
          place.
        </p>
        <h2 className="mr-h2" id="prob-h">
          See every trip, its budget and its GL code in one place.
        </h2>
      </Container>
    </Section>
  )
}
