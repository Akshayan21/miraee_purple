import { VideoPanel } from '@/components/sections/video-panel'

export function WhatYouSendSection() {
  return (
    <VideoPanel
      video="panel-spend2"
      labelledBy="send-h"
      aside={
        <div
          className="mr-paper"
          style={{ padding: 24, borderRadius: 16, width: 'min(100%, 380px)' }}
        >
          <div
            className="view view--tiles"
            style={{ minHeight: 0, padding: 0, background: 'transparent', border: 0 }}
          >
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
      }
    >
      <h2 className="mr-h2" id="send-h">
        Send one file you already have
      </h2>
      <p className="mr-body">
        A booking report from your travel agency, or an expense extract from your expense system.
        Add a corporate card feed if you like. We sign an NDA before you send anything.
      </p>
    </VideoPanel>
  )
}
