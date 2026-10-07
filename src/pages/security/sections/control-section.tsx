export function ControlSection() {
  return (
    <section className="mr-section" aria-labelledby="control-h">
      <div className="mr-container split">
        <div className="split__copy">
          <h2 className="mr-h2" id="control-h">
            The assistant suggests. Your approvers decide what gets booked.
          </h2>
          <p className="mr-body">
            Anything out of policy goes to an approver. Every booking and every change is recorded
            in the audit log.
          </p>
        </div>
        <figure className="split__visual" style={{ margin: '0' }}>
          <div className="log-card" role="img" aria-label="Audit log of bookings and changes.">
            <div aria-hidden="true">
              <div className="log-card__head">
                <p className="log-card__title">Audit log</p>
                <span className="mr-label">October</span>
              </div>
              <table className="mr-ledger">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Event</th>
                    <th>By</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="mr-fig">Oct 1, 9:12 a.m.</td>
                    <td>Booked · Client visit, Chicago</td>
                    <td>Priya N.</td>
                  </tr>
                  <tr>
                    <td className="mr-fig">Oct 1, 9:40 a.m.</td>
                    <td>Approved · Denver hotel, out of policy</td>
                    <td>Dana R.</td>
                  </tr>
                  <tr>
                    <td className="mr-fig">Oct 6, 5:58 a.m.</td>
                    <td>Flight changed · 8:15 a.m. to Chicago</td>
                    <td>Priya N.</td>
                  </tr>
                  <tr>
                    <td className="mr-fig">Oct 8, 2:05 p.m.</td>
                    <td>Receipt matched · Dallas</td>
                    <td>Miraee</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <figcaption className="mr-caption fig-caption">
            Product view with illustrative data.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
