export function WhatFinanceGetsSection() {
  return (
    <section className="mr-section hr-top" aria-labelledby="gets-h">
      <div className="mr-container split">
        <div className="split__copy">
          <h2 className="mr-h2" id="gets-h">
            Every booking inside your policy, with its budget and GL code.
          </h2>
          <ul className="list">
            <li>Set your travel policy, GL codes and budgets once.</li>
            <li>Approvals only when something is out of policy.</li>
            <li>A finance dashboard and a full audit log.</li>
            <li>Receipts matched to card charges and checked against policy.</li>
          </ul>
        </div>
        <figure className="split__visual" style={{ margin: '0' }}>
          <div
            className="dash dash--lg"
            role="img"
            aria-label="Finance dashboard with trips, budgets and GL codes."
          >
            <div aria-hidden="true">
              <div className="dash__head">
                <p className="dash__title">Finance dashboard</p>
                <span className="mr-label">October</span>
              </div>
              <div className="kpis">
                <div className="kpi">
                  <span>Trips</span>
                  <strong>38</strong>
                </div>
                <div className="kpi">
                  <span>Spend</span>
                  <strong>$41,208.30</strong>
                </div>
                <div className="kpi">
                  <span>Needs approval</span>
                  <strong>2</strong>
                </div>
              </div>
              <table className="mr-ledger mr-ledger--compact">
                <thead>
                  <tr>
                    <th>Trip</th>
                    <th className="mr-num">Budget</th>
                    <th className="mr-num">Spent</th>
                    <th className="mr-num">GL code</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Client visit, Chicago</td>
                    <td className="mr-num">$1,500.00</td>
                    <td className="mr-num">$1,284.60</td>
                    <td className="mr-num">6200</td>
                  </tr>
                  <tr>
                    <td>Site audit, Dallas</td>
                    <td className="mr-num">$1,200.00</td>
                    <td className="mr-num">$946.20</td>
                    <td className="mr-num">6200</td>
                  </tr>
                  <tr>
                    <td>Sales kickoff, Denver</td>
                    <td className="mr-num">$2,000.00</td>
                    <td className="mr-num">$2,318.40</td>
                    <td className="mr-num">6200</td>
                  </tr>
                  <tr>
                    <td>Partner review, Atlanta</td>
                    <td className="mr-num">$1,400.00</td>
                    <td className="mr-num">$1,106.75</td>
                    <td className="mr-num">6210</td>
                  </tr>
                </tbody>
              </table>
              <ul className="audit">
                <li className="audit__h">Audit log</li>
                <li>
                  <time className="mr-fig">9:12 a.m.</time>
                  <span>Booked by Priya N. · Chicago</span>
                </li>
                <li>
                  <time className="mr-fig">9:40 a.m.</time>
                  <span>Approved by Dana R. · Denver hotel</span>
                </li>
                <li>
                  <time className="mr-fig">2:05 p.m.</time>
                  <span>Receipt matched · Dallas</span>
                </li>
              </ul>
            </div>
          </div>
          <figcaption className="mr-caption" style={{ marginTop: '12px' }}>
            Product view with illustrative data.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
