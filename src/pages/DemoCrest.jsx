import React from 'react'
import { Link } from 'react-router-dom'

export default function DemoCrest() {
  return (
    <section className="section py-16">
      <h1 className="text-3xl font-extrabold">Digital Family Crest — Demo</h1>
      <p className="text-muted mt-2 max-w-3xl">
        This page demonstrates how a public, timestamped crest could appear—no private data on‑chain.
      </p>
      <div className="card p-6 mt-6">
        <div className="font-semibold">Carter Family</div>
        <div className="text-muted text-sm">Secured: 2025‑08‑01 • Chain: Testnet</div>
        <div className="mt-4 text-sm">
          Tx: <code>0xabc…1234</code>
        </div>
      </div>
      <Link to="/sponsor" className="btn btn-secondary mt-6">Sponsor Crests</Link>
    </section>
  )
}
