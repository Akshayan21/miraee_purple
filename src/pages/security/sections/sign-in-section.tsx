import { VideoPanel } from '@/components/sections/video-panel'

export function SignInSection() {
  return (
    <VideoPanel video="panel-sec" labelledBy="signin-h">
      <img
        className="duo__icon"
        src="/img/icons/user-round.svg"
        alt=""
        width="32"
        height="32"
        style={{ marginBottom: 12, filter: 'invert(1)' }}
      />
      <h2 className="mr-h2" id="signin-h">
        Sign in with Google
      </h2>
      <p className="mr-body">
        Your team signs in with their Google work accounts. Single sign-on is on our roadmap; ask
        and we'll share the date in writing.
      </p>
    </VideoPanel>
  )
}
