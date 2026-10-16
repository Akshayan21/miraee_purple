import { Section, Container } from '@/components/layout/content-layout'
export function WhereEachFitsSection() {
  return (
    <Section className="mr-section" aria-labelledby="fits-h">
      <Container className="mr-container">
        <h2 className="mr-h2" id="fits-h">
          Where each fits
        </h2>
        <div className="fits">
          <div className="fit">
            <h3>SAP Concur</h3>
            <p>
              Offers travel, expense and invoice products from one vendor (concur.com, checked
              September 30, 2026). If your expense and invoice processes already run there and your
              people use it well, it may be the right place to stay.
            </p>
          </div>
          <div className="fit">
            <h3>Miraee</h3>
            <p>
              Built for US companies of 300 to 1,500 people that want booking their people pick up
              fast, policy on every trip, finance coding built in and free onboarding.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
