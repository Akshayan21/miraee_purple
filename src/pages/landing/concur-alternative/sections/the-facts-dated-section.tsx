export function TheFactsDatedSection() {
  return (
    <section className="mr-section" aria-labelledby="facts-h">
      <div className="mr-container">
        <p className="dateline">
          Last updated <time dateTime="2026-09-30">September 30, 2026</time>
        </p>
        <h2 className="mr-h2" id="facts-h">
          Getting started, side by side.
        </h2>
        <p className="mr-body">
          SAP Concur offers travel, expense and invoice products and asks buyers to request pricing
          (concur.com, checked September 30, 2026). Miraee sign-up and onboarding are free at every
          company size.
        </p>
        <div className="compare-wrap">
          <table className="compare">
            <caption className="mr-sr">Getting started: SAP Concur and Miraee</caption>
            <thead>
              <tr>
                <th scope="col">
                  <span className="mr-sr">Item</span>
                </th>
                <th scope="col">
                  SAP Concur<small>concur.com, checked September 30, 2026</small>
                </th>
                <th scope="col">Miraee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Pricing</th>
                <td data-col="SAP Concur">Request pricing; prices are not published</td>
                <td data-col="Miraee">Sign-up and onboarding free at any company size</td>
              </tr>
              <tr>
                <th scope="row">Getting started</th>
                <td data-col="SAP Concur">Through a quote request</td>
                <td data-col="Miraee">
                  Company setup, travel policy, employee onboarding and payment settings, with
                  training for admins and finance
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
