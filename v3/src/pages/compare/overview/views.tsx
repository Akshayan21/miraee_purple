import { CRITERIA, type QuestionGroup } from './data'
import styles from '../shared/compare.module.css'

/** The hero card: the four things that decide most evaluations, each linking to its section. */
export function CriteriaCard() {
  return (
    <aside className={styles.criteria} aria-label="What to compare">
      <p className={styles.criteriaHead}>Four things decide most evaluations</p>
      <ul className={styles.criteriaList}>
        {CRITERIA.map((c) => (
          <li key={c.id}>
            <a href="#tab-compare">
              <span className={styles.criteriaIcon}>
                <c.icon size={20} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span className={styles.criteriaText}>
                <strong>{c.title}</strong>
                <span>{c.summary}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p className={styles.criteriaFoot}>
        Only 12% of travel programs have their data in one place.
      </p>
    </aside>
  )
}

/** One topic's three questions, each with why it matters. */
export function QuestionList({ group }: { group: QuestionGroup }) {
  return (
    <ol className={styles.questions} aria-label={group.label}>
      {group.questions.map((q) => (
        <li key={q.n} className={styles.question}>
          <span className={styles.questionN}>Question {q.n}</span>
          <p className={styles.questionQ}>{q.question}</p>
          <p className={styles.questionWhy}>
            <strong>Why it matters: </strong>
            {q.why}
          </p>
        </li>
      ))}
    </ol>
  )
}
