export function ForThePeopleWhoBookForOthersSection() {
  return (
    <section className="step-sec" aria-labelledby="ea-h">
      <div className="mr-container split">
        <div className="split__copy">
          <h2 className="mr-h2" id="ea-h">
            Book for your team in a few steps, inside policy.
          </h2>
          <p className="mr-body">
            Executive assistants and office admins book on behalf of anyone they support. Options
            already fit company rules, so there are fewer approval loops.
          </p>
        </div>
        <figure className="split__visual" style={{ margin: '0' }}>
          <div
            className="view"
            role="img"
            aria-label="Booking screen with a colleague's name selected."
          >
            <div className="mock" aria-hidden="true">
              <div className="mock__head">
                <div>
                  <p className="mock__title">New trip</p>
                  <p className="mock__sub">Austin to Chicago · Oct 6 to Oct 8</p>
                </div>
              </div>
              <span className="field-label">Booking for</span>
              <div className="select-mock">Dana R., VP Sales</div>
              <ul className="people-list">
                <li aria-selected="true">
                  <span>Dana R.</span>
                  <span>VP Sales</span>
                </li>
                <li>
                  <span>Marcus T.</span>
                  <span>Account executive</span>
                </li>
                <li>
                  <span>Priya N.</span>
                  <span>Solutions consultant</span>
                </li>
              </ul>
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
