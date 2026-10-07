export function WhatYouSendSection() {
  return (
    <section className="step-sec hr-top" aria-labelledby="send-h">
      <div className="mr-container split">
        <div className="split__copy">
          <h2 className="mr-h2" id="send-h">
            One file you already have.
          </h2>
          <ul className="list">
            <li>A booking report from your travel agency, or</li>
            <li>An expense extract from your expense system.</li>
          </ul>
          <p className="mr-body note">
            A corporate card feed is optional. It makes the review more complete.
          </p>
          <p className="mr-body">We sign an NDA before you send anything.</p>
        </div>
        <div className="split__visual">
          <div className="view view--tiles">
            <ul className="tiles">
              <li className="tile">
                <img src="/img/icons/file-text.svg" alt="" width="24" height="24" />
                Agency booking report
              </li>
              <li className="tile">
                <img src="/img/icons/file-text.svg" alt="" width="24" height="24" />
                Expense extract
              </li>
              <li className="tile">
                <img src="/img/icons/file-text.svg" alt="" width="24" height="24" />
                Card feed (optional)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
