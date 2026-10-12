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
                for everyone
              </td>
            </tr>
            <tr>
              <th scope="row">Onboarding</th>
              <td>
                <img src="/img/icons/check.svg" alt="" width="20" height="20" />
                Company and policy setup, employee onboarding, payment settings with your current
                cards, and training for admins and finance
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </Section>
  )
}
