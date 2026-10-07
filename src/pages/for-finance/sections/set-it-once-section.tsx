export function SetItOnceSection() {
  return (
    <section className="step-sec hr-top" aria-labelledby="once-h">
      <div className="mr-container split">
        <div className="split__copy">
          <h2 className="mr-h2" id="once-h">
            Set your travel policy, GL codes and budgets once.
          </h2>
          <p className="mr-body">
            Miraee applies them to every booking. Options are marked in or out of policy, and
            approvals only come in when something is out of policy.
          </p>
        </div>
        <figure className="split__visual" style={{ margin: '0' }}>
          <div
            className="view"
            role="img"
            aria-label="Settings screen for GL codes and travel budgets."
          >
            <div className="mock mock--wide" aria-hidden="true">
              <div className="mock__head">
                <div>
                  <p className="mock__title">GL codes and budgets</p>
                  <p className="mock__sub">Applied to every booking</p>
                </div>
                <span className="mr-label">Finance settings</span>
              </div>
              <table className="mr-ledger">
                <thead>
                  <tr>
                    <th>Cost center</th>
                    <th className="mr-num">GL code</th>
                    <th className="mr-num">Budget a trip</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Sales travel</td>
                    <td className="mr-num">6200</td>
                    <td className="mr-num">$2,000.00</td>
                  </tr>
                  <tr>
                    <td>Client services</td>
                    <td className="mr-num">6210</td>
                    <td className="mr-num">$1,500.00</td>
                  </tr>
                  <tr>
                    <td>Training and events</td>
                    <td className="mr-num">6230</td>
                    <td className="mr-num">$1,200.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <figcaption className="mr-caption fig-cap">
            Product view with illustrative data.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
