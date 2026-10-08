import { Section, Container } from '@/components/layout/content-layout'
import { ResponsiveImage } from '@/components/sections/responsive-image'
import styles from './any-headcount-section.module.css'
export function AnyHeadcountSection() {
  return (
    <Section className="mr-paper mr-section" aria-labelledby="size-h">
      <Container className="mr-container split">
        <div className="split__copy">
          <h2 className="mr-h2" id="size-h">
            From enterprise to startups, Miraee is for all.
          </h2>
          <p className="mr-body">
            Any company size can sign up and onboard free. There is no headcount cap.
          </p>
        </div>
        <figure className={`split__visual mr-frame ${styles.photo}`}>
          <ResponsiveImage
            src="/img/document/pricing-company-size-team.jpg"
            width={494}
            height={740}
            alt="Three colleagues collaborate on a project around a laptop."
            loading="lazy"
            decoding="async"
          />
        </figure>
      </Container>
    </Section>
  )
}
