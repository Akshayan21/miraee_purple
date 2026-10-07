export function CoverageSection() {
  return (
    <section className="mr-paper mr-section" aria-labelledby="cov-h">
      <div className="mr-container">
        <h2 className="mr-h2" id="cov-h" style={{ maxWidth: '16em' }}>
          Global flight and hotel coverage from the Mondee travel marketplace.
        </h2>
        <div className="coverage-facts">
          <p>
            The Mondee travel marketplace connects to more than 500 airlines.
            <sup>
              <a href="#src-1" aria-label="Source 1">
                1
              </a>
            </sup>
          </p>
          <p>
            It also offers more than 1 million hotels and vacation rentals across the Mondee
            network.
            <sup>
              <a href="#src-2" aria-label="Source 2">
                2
              </a>
            </sup>
          </p>
        </div>
        <ul className="places">
          <li>
            <figure className="place">
              <picture>
                <source srcSet="/img/px30362683-new-york.webp" type="image/webp" />
                <img
                  src="/img/px30362683-new-york.jpg"
                  width="800"
                  height="480"
                  alt="The Manhattan skyline and Empire State Building at dusk."
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
                <source srcSet="/img/px29667762-san-francisco.webp" type="image/webp" />
                <img
                  src="/img/px29667762-san-francisco.jpg"
                  width="800"
                  height="480"
                  alt="The San Francisco skyline at twilight."
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
                <source srcSet="/img/px237325-los-angeles.webp" type="image/webp" />
                <img
                  src="/img/px237325-los-angeles.jpg"
                  width="800"
                  height="480"
                  alt="The Los Angeles skyline at sunset."
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <figcaption>Los Angeles</figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </section>
  )
}
