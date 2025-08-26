import React from 'react'
import { cfg } from '../config'

export default function BecomeanAmbassador() {
  const directLink = cfg.formUrls.ambassador.replace('&embedded=true','')
  return (
    <section className="container max-w-5xl">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Become an Ambassador</h1>
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
            title="Become an Ambassador"
            src={cfg.formUrls.ambassador}
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            aria-label="Become an Ambassador form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  )
}
