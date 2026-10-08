import { Section, Container } from '@/components/layout/content-layout'
export function WhatsFreeSection() {
  return (
    <Section className="mr-section" aria-labelledby="free-h">
      <Container className="mr-container">
        <h2 className="mr-h2" id="free-h">
          What's free
        </h2>
        <table className="free-table">
          <thead>
            <tr>
              <th scope="col">Item</th>
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
              <th scope="row">Setup</th>
              <td>
                <img src="/img/icons/check.svg" alt="" width="20" height="20" />
                Company setup and travel policy setup
              </td>
            </tr>
            <tr>
              <th scope="row">Onboarding</th>
              <td>
                <img src="/img/icons/check.svg" alt="" width="20" height="20" />
                Employee onboarding
              </td>
            </tr>
            <tr>
              <th scope="row">Payment methods</th>
              <td>
                <img src="/img/icons/check.svg" alt="" width="20" height="20" />
                Payment settings with the corporate cards you already use
              </td>
            </tr>
            <tr>
              <th scope="row">Training</th>
              <td>
                <img src="/img/icons/check.svg" alt="" width="20" height="20" />
                Training for your admins and finance team
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </Section>
  )
}
