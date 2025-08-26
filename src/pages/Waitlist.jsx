import React from 'react'
import { cfg } from '../config'

export default function JointheWaitlist() {
  const directLink = cfg.formUrls.waitlist.replace('&embedded=true','')
  return (
    <section className="container max-w-5xl">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Join the Waitlist</h1>
        <p className="text-neutral-400 text-sm">
          If the form doesn’t load,
          <a className="underline ml-1" href={directLink} target="_blank" rel="noopener noreferrer">
            open it in a new tab
          </a>.
        </p>
      </header>

      <div className="form-embed">
        <div className="relative w-full" style={{ paddingTop: '1500px' }}>
          <iframe
            title="Join the Waitlist"
            src={cfg.formUrls.waitlist}
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            aria-label="Join the Waitlist form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  )
}
