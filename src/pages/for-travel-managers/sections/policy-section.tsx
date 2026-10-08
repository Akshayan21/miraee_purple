import styles from './policy-section.module.css'
import { Section, Container } from '@/components/layout/content-layout'
import { ProductPhone, ProductRow } from '@/components/sections/product-preview'
import { Badge } from '@/components/ui/badge'

export function PolicySection() {
  return (
    <Section className="step-sec mr-paper" aria-labelledby="pol-h">
      <Container className="mr-container split">
        <div className="split__copy">
          <h2 className="mr-h2" id="pol-h">
            Every option your people see already fits your policy.
          </h2>
          <p className="mr-body">
            Upload your travel policy during onboarding. Search results are marked in policy or out
            of policy, so travelers book without checking a document.
          </p>
        </div>
        <figure className="split__visual" style={{ margin: '0' }}>
          <div className="view" role="img" aria-label="Hotel options marked in policy.">
            <ProductPhone className={`phone phone--lg ${styles.preview}`} aria-hidden="true">
              <div className="phone__screen mr-plum">
                <div className="phone__bar">
                  <span className="mr-fig">9:41</span>
                  <span>Hotels</span>
                </div>
                <p className="phone__title">Chicago, 2 nights</p>
                <p className="phone__meta">Oct 6 to Oct 8 · Policy up to $250 a night</p>
                <ProductRow className="ho">
                  <span className="ho__name">West Loop hotel</span>
                  <span className="ho__rate">$219 a night</span>
                  <span className="ho__meta">0.4 mi from the client office</span>
                  <Badge variant="success">In policy</Badge>
                </ProductRow>
                <ProductRow className="ho">
                  <span className="ho__name">Fulton Market hotel</span>
                  <span className="ho__rate">$236 a night</span>
                  <span className="ho__meta">0.9 mi from the client office</span>
                  <Badge variant="success">In policy</Badge>
                </ProductRow>
                <ProductRow className="ho">
                  <span className="ho__name">Union Station hotel</span>
                  <span className="ho__rate">$204 a night</span>
                  <span className="ho__meta">1.1 mi from the client office</span>
                  <Badge variant="success">In policy</Badge>
                </ProductRow>
              </div>
            </ProductPhone>
          </div>
          <figcaption className="mr-caption fig-cap">
            Product view with illustrative data.
          </figcaption>
        </figure>
      </Container>
    </Section>
  )
}
