import { Section, Container } from '@/components/layout/content-layout'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <Section className="mr-plum nf" aria-labelledby="hero-h">
      <Container className="mr-container">
        <p className="mr-eyebrow">Error 404</p>
        <h1 className="mr-display" id="hero-h">
          We can't find that page.
        </h1>
        <p className="mr-lead">It may have moved. These pages will get you back on track.</p>
        <ul className="nf__links">
          <li>
            <Button asChild variant="tertiary">
              <Link to="/">Home</Link>
            </Button>
          </li>
          <li>
            <Button asChild variant="tertiary">
              <Link to="/how-it-works">How it works</Link>
            </Button>
          </li>
          <li>
            <Button asChild variant="tertiary">
              <Link to="/compare">Compare</Link>
            </Button>
          </li>
          <li>
            <Button asChild variant="tertiary">
              <Link to="/resources">Resources</Link>
            </Button>
          </li>
        </ul>
      </Container>
    </Section>
  )
}
