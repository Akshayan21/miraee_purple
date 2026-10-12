import { Section, Container } from '@/components/layout/content-layout'
import styles from './the-problem-section.module.css'
export function TheProblemSection() {
  return (
    <Section
      spacing="compact"
      className="mr-section problem"
      aria-label="Why finance teams need one view"
    >
      <Container className={`mr-container ${styles.row}`}>
        <p className="stat-line">
          <span className="stat-line__fig">12%</span> of travel programs have their data in one
          place.
        </p>
      </Container>
    </Section>
  )
}
