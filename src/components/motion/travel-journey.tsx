import { useRef } from 'react'
import { Section, Container } from '@/components/layout/content-layout'
import { useImmersiveScene } from './use-immersive-scene'
import styles from './travel-journey.module.css'

const ROUTE = 'M 90 270 C 210 270 220 90 390 110 S 610 330 780 210 S 900 130 1010 130'
const CHAPTERS = [
  {
    number: '01',
    title: 'Ask for a trip',
    detail: 'Flights and hotels, with your company policy already in the search.',
    label: 'Traveler',
  },
  {
    number: '02',
    title: 'Approve the exception',
    detail: 'Options show what is in policy. Approvers decide on the exceptions.',
    label: 'Travel lead',
  },
  {
    number: '03',
    title: 'See every dollar',
    detail: 'The trip reaches finance with its budget, GL code, and audit trail.',
    label: 'Finance',
  },
]

/** Decorative SVG illustrates the workflow; the three chapters carry the accessible content. */
export function TravelJourney() {
  const ref = useRef<HTMLDivElement>(null)
  useImmersiveScene(ref)
  return (
    <Section tone="plum" accent className={`mo-skip ${styles.section}`} aria-labelledby="journey-h">
      <Container>
        <div ref={ref}>
          <div className={styles.heading}>
            <p className="mr-eyebrow">One trip. Every team connected.</p>
            <h2 className="mr-h2" id="journey-h">
              From the first search to the finance view.
            </h2>
            <p className="mr-body">
              Follow the journey. Your policy and your numbers travel with it.
            </p>
          </div>
          <div className={styles.stage} data-depth-stage>
            <div className={styles.horizon} aria-hidden="true" />
            <svg className={styles.map} viewBox="0 0 1100 400" aria-hidden="true" focusable="false">
              <defs>
                <pattern id="journey-grid" width="55" height="50" patternUnits="userSpaceOnUse">
                  <path d="M55 0H0V50" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="1100" height="400" fill="url(#journey-grid)" opacity="0.16" />
              <ellipse
                cx="550"
                cy="205"
                rx="440"
                ry="155"
                fill="none"
                stroke="currentColor"
                opacity="0.15"
              />
              <ellipse
                cx="550"
                cy="205"
                rx="260"
                ry="155"
                fill="none"
                stroke="currentColor"
                opacity="0.15"
              />
              <path d={ROUTE} className={styles.routeBase} />
              <path d={ROUTE} className={styles.route} data-flight-path />
              {[
                { x: 90, y: 270, label: 'Search' },
                { x: 390, y: 110, label: 'Policy' },
                { x: 780, y: 210, label: 'Approval' },
                { x: 1010, y: 130, label: 'Finance' },
              ].map((point) => (
                <g key={point.label}>
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="22"
                    className={styles.halo}
                    data-flight-marker
                  />
                  <circle cx={point.x} cy={point.y} r="5" fill="currentColor" />
                  <text
                    x={point.x}
                    y={point.y + 46}
                    textAnchor="middle"
                    className={styles.mapLabel}
                  >
                    {point.label}
                  </text>
                </g>
              ))}
              <g data-flight-plane transform="translate(1010 130)">
                <path
                  d="M-17 -4L-6 -4L-12 -17L-5 -17L6 -4L19 0L6 4L-5 17L-12 17L-6 4L-17 4Z"
                  fill="var(--mr-orange-light)"
                />
              </g>
            </svg>
            <ol className={styles.chapters}>
              {CHAPTERS.map((chapter) => (
                <li key={chapter.number} data-story-card>
                  <div className={styles.chapterTop}>
                    <span>{chapter.number}</span>
                    <span>{chapter.label}</span>
                  </div>
                  <h3>{chapter.title}</h3>
                  <p>{chapter.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </Section>
  )
}
