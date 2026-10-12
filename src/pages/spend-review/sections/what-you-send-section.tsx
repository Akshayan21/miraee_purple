import { Section, Container } from '@/components/layout/content-layout'
export function WhatYouSendSection() {
  return (
    <Section className="step-sec hr-top" aria-labelledby="send-h">
      <Container className="mr-container split">
        <div className="split__copy">
          <h2 className="mr-h2" id="send-h">
            Send one file you already have
          </h2>
          <p className="mr-body">
            A booking report from your travel agency, or an expense extract from your expense
            system. Add a corporate card feed if you like. We sign an NDA before you send anything.
          </p>
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
      </Container>
    </Section>
  )
}
