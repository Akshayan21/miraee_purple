import styles from './set-up-section.module.css'
import { Section, Container } from '@/components/layout/content-layout'
import { ProductCard, ProductRow } from '@/components/sections/product-preview'
import { Badge } from '@/components/ui/badge'

export function SetUpSection() {
  return (
    <Section spacing="compact" className="step-sec mr-paper" aria-labelledby="s1-h">
      <Container className="mr-container split">
        <div className="split__copy">
          <p className="mr-eyebrow">Step 1</p>
          <h2 className="mr-h2" id="s1-h">
            We set up your company with you.
          </h2>
          <p className="mr-body">
            Onboarding is free. We set up your company, your travel policy and your people, and
            train your admins and finance team.
          </p>
          <p className="mr-body">Add the corporate cards you already use in payment settings.</p>
        </div>
        <figure className="split__visual" style={{ margin: '0' }}>
          <div
            className="view"
            role="img"
            aria-label="Company setup screen with travel policy, employees and payment settings."
          >
            <ProductCard className={`mock ${styles.card}`} aria-hidden="true">
              <div className="mock__head">
                <div>
                  <p className="mock__title">Company setup</p>
                  <p className="mock__sub">Your company account</p>
                </div>
              </div>
              <ProductRow className="ui-rule">
                <span>
                  <span className="ui-rule__k">Travel policy</span>
                  <span className="ui-rule__v">Uploaded, applies to every employee</span>
                </span>
                <Badge variant="success" tick>
                  Done
                </Badge>
              </ProductRow>
              <ProductRow className="ui-rule">
                <span>
                  <span className="ui-rule__k">Employees</span>
                  <span className="ui-rule__v">
                    <span className="mr-fig">412</span> invited
                  </span>
                </span>
                <Badge variant="success" tick>
                  Done
                </Badge>
              </ProductRow>
              <ProductRow className="ui-rule">
                <span>
                  <span className="ui-rule__k">Payment settings</span>
                  <span className="ui-rule__v">
                    Corporate card ending <span className="mr-fig">4417</span>
                  </span>
                </span>
                <Badge variant="success" tick>
                  Done
                </Badge>
              </ProductRow>
            </ProductCard>
          </div>
          <figcaption className="mr-caption fig-cap">
            Product view with illustrative data.
          </figcaption>
        </figure>
      </Container>
    </Section>
  )
}
