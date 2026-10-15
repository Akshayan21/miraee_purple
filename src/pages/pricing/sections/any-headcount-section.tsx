import { VideoPanel } from '@/components/sections/video-panel'

export function AnyHeadcountSection() {
  return (
    <VideoPanel video="panel-pricing" labelledBy="size-h">
      <h2 className="mr-h2" id="size-h">
        Same start for 300 people or 3,000
      </h2>
      <p className="mr-body">There is no headcount cap.</p>
    </VideoPanel>
  )
}
