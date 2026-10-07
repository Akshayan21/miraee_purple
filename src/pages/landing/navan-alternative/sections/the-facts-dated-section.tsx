import { Section, Container } from '@/components/layout/content-layout'
export function TheFactsDatedSection() {
  return (
    <Section className="mr-section" aria-labelledby="facts-h">
      <Container className="mr-container">
        <p className="dateline">
          Last updated <time dateTime="2026-09-30">September 30, 2026</time>
        </p>
        <h2 className="mr-h2" id="facts-h">
          Cost to start, side by side.
        </h2>
        <p className="mr-body">
          Navan's free Business plan is for companies with up to 300 employees, and its Enterprise
          plan is priced by quote (navan.com/pricing, checked September 30, 2026). Miraee sign-up
          and onboarding are free at every company size.
        </p>
        <div className="compare-wrap">
          <table className="compare">
            <caption className="mr-sr">Cost to start: Navan and Miraee</caption>
            <thead>
              <tr>
                <th scope="col">
                  <span className="mr-sr">Item</span>
                </th>
                <th scope="col">
                  Navan<small>navan.com/pricing, checked September 30, 2026</small>
                </th>
                <th scope="col">Miraee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Free entry</th>
                <td data-col="Navan">Business plan, for companies with up to 300 employees</td>
                <td data-col="Miraee">Sign-up and onboarding, at every company size</td>
              </tr>
              <tr>
                <th scope="row">Above 300 employees</th>
                <td data-col="Navan">Enterprise plan, priced by quote</td>
                <td data-col="Miraee">The same free sign-up and onboarding</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  )
}
