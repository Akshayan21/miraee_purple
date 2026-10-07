import { Section, Container } from '@/components/layout/content-layout'
export function SignInSection() {
  return (
    <Section className="mr-paper mr-section" aria-labelledby="signin-h">
      <Container className="mr-container duo">
        <div className="duo__head">
          <img
            className="duo__icon"
            src="/img/icons/user-round.svg"
            alt=""
            width="32"
            height="32"
          />
          <h2 className="mr-h2" id="signin-h">
            Sign in with Google.
          </h2>
        </div>
        <div className="duo__body">
          <p className="mr-body">Your team signs in with their Google work accounts.</p>
          <p className="mr-body">
            Single sign-on is on our roadmap. Ask us and we'll share the date in writing.
          </p>
        </div>
      </Container>
    </Section>
  )
}
