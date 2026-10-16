import { Container } from '@/components/layout/content-layout'
import { DialogLink } from '@/components/forms/form-dialogs-context'
import { Scene } from '@/components/scenes/scene'
import { Button } from '@/components/ui/button'
import styles from './proof-first-section.module.css'

/** Proof first: big type on paper, with a rule that draws itself under the question. */
export function ProofFirstSection() {
  return (
    <Scene steps={1} run={70} className={`mr-paper ${styles.scene}`} aria-labelledby="proof-h">
      <Container className={`mr-container ${styles.grid}`}>
        <div>
          <h2 className={`mr-h2 ${styles.title}`} id="proof-h">
            Want proof first?
          </h2>
          <span className={styles.rule} aria-hidden="true" />
        </div>
        <div className={styles.copy}>
          <p className={`mr-body ${styles.body}`}>
            Send one booking report. We review last year's travel, trip by trip. Any savings figure
            is a dollar range, with the method shown.
          </p>
          <div className="mr-btn-row">
            <Button asChild variant="secondary">
              <DialogLink to="/spend-review" dialog="review">
                Get a spend review
              </DialogLink>
            </Button>
          </div>
        </div>
      </Container>
    </Scene>
  )
}
