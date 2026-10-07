export function WhatsFreeSection() {
  return (
    <section className="mr-section" aria-labelledby="free-h">
      <div className="mr-container">
        <h2 className="mr-h2" id="free-h">
          What's free
        </h2>
        <table className="free-table">
          <thead>
            <tr>
              <th scope="col">
                <span className="mr-sr">Item</span>
              </th>
              <th scope="col">What you get</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Sign-up</th>
              <td>
                <img src="/img/icons/check.svg" alt="" width="20" height="20" />A company account
                for your whole company
              </td>
            </tr>
            <tr>
              <th scope="row">Onboarding</th>
              <td>
                <img src="/img/icons/check.svg" alt="" width="20" height="20" />
                Company setup and travel policy setup
              </td>
            </tr>
            <tr className="cont">
              <th scope="row">
                <span className="mr-sr">Onboarding</span>
              </th>
              <td>
                <img src="/img/icons/check.svg" alt="" width="20" height="20" />
                Employee onboarding
              </td>
            </tr>
            <tr className="cont">
              <th scope="row">
                <span className="mr-sr">Onboarding</span>
              </th>
              <td>
                <img src="/img/icons/check.svg" alt="" width="20" height="20" />
                Payment settings with the corporate cards you already use
              </td>
            </tr>
            <tr className="cont">
              <th scope="row">
                <span className="mr-sr">Onboarding</span>
              </th>
              <td>
                <img src="/img/icons/check.svg" alt="" width="20" height="20" />
                Training for your admins and finance team
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
