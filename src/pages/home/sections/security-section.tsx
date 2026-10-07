import { Section, Container, SplitLayout } from '@/components/layout/content-layout'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function SecuritySection() {
  return (
    <Section className="mr-plum mr-section" aria-labelledby="sec-h">
      <Container className="mr-container">
        <SplitLayout className="security split">
          <h2 className="mr-h2 split__copy" id="sec-h" style={{ alignSelf: 'start' }}>
            One approved travel tool for the whole company.
          </h2>
          <div className="security__body">
            <p className="mr-body">
              The assistant suggests options. Your approvers decide what gets booked. Every booking
              and every change is recorded in the audit log.
            </p>
            <p className="mr-body">Ask us for the security pack at any stage of your review.</p>
            <ul className="icon-row" style={{ flexWrap: 'wrap' }}>
              <li>
                <img src="/img/icons/check.svg" alt="" width="24" height="24" />
                Approvals
              </li>
              <li>
                <img src="/img/icons/file-text.svg" alt="" width="24" height="24" />
                Audit log
              </li>
              <li>
                <img src="/img/icons/shield-check.svg" alt="" width="24" height="24" />
                Security pack
              </li>
            </ul>
            <p className="link-row">
              <Button asChild variant="tertiary">
                <Link to="/security">Read about security</Link>
              </Button>
            </p>
          </div>
        </SplitLayout>
      </Container>
    </Section>
  )
}
