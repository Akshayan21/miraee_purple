import { Section, Container } from '@/components/layout/content-layout'
export function CoverageSection() {
  return (
    <Section className="mr-paper mr-section" aria-labelledby="cov-h">
      <Container className="mr-container">
        <h2 className="mr-h2" id="cov-h" style={{ maxWidth: '16em' }}>
          Global flight and hotel coverage from the Mondee travel marketplace.
        </h2>
        <div className="coverage-facts">
          <p>
            The Mondee travel marketplace connects to more than 500 airlines.
          </p>
          <p>
            It also offers more than 1 million hotels and vacation rentals across the Mondee
            network.
          </p>
        </div>
        <ul className="places">
          <li>
            <figure className="place">
              <picture>
                <source srcSet="/img/document/company-city-new-york-1.webp" type="image/webp" />
                <img
                  src="/img/document/company-city-new-york-1.jpg"
                  width="2046"
                  height="1364"
                  alt="The Manhattan skyline with the Empire State Building."
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <figcaption>New York</figcaption>
            </figure>
          </li>
          <li>
            <figure className="place">
              <picture>
                <source srcSet="/img/document/company-city-san-francisco-1.webp" type="image/webp" />
                <img
                  src="/img/document/company-city-san-francisco-1.jpg"
                  width="2046"
                  height="1364"
                  alt="The Golden Gate Bridge in San Francisco."
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <figcaption>San Francisco</figcaption>
            </figure>
          </li>
          <li>
            <figure className="place">
              <picture>
                <source srcSet="/img/document/company-city-los-angeles-1.webp" type="image/webp" />
                <img
                  src="/img/document/company-city-los-angeles-1.jpg"
                  width="2047"
                  height="1228"
                  alt="The Los Angeles skyline at sunset."
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <figcaption>Los Angeles</figcaption>
            </figure>
          </li>
        </ul>
      </Container>
    </Section>
  )
}
