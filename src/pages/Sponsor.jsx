import React, { useState } from 'react'
import { cfg } from '../config.js'

export default function Sponsor() {
  const [org, setOrg] = useState('')
  const [email, setEmail] = useState('')
  const [notes, setNotes] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading'); setError('')
    try {
      const body = { org, email, notes }
      const res = await fetch(`${cfg.apiBase}/sponsor`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      if (!res.ok) throw new Error(await res.text())
      setOrg(''); setEmail(''); setNotes(''); setStatus('ok')
    } catch (err) {
      console.error(err); setStatus('err'); setError(err?.message || 'Could not submit')
    }
  }

  return (
    <section className="section py-16">
      <h1 className="text-3xl font-extrabold">Sponsor Crests</h1>
      <p className="text-muted mt-2 max-w-2xl">
        Fund Digital Family Crests for families and track the impact transparently.
      </p>

      <form onSubmit={submit} className="card p-6 mt-6 max-w-xl space-y-3">
        <div>
          <label htmlFor="org" className="block text-sm text-muted mb-1">Organization</label>
          <input id="org" className="input" value={org} onChange={(e)=>setOrg(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-muted mb-1">Email</label>
          <input id="email" type="email" className="input" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="notes" className="block text-sm text-muted mb-1">Notes</label>
          <textarea id="notes" className="input min-h-[120px]" value={notes} onChange={(e)=>setNotes(e.target.value)} placeholder="Tell us how many families you want to support and in which region." />
        </div>
        <button className="btn btn-primary" disabled={status==='loading'}>
          {status==='loading' ? 'Submitting…' : 'Send Sponsor Request'}
        </button>
        {status==='ok' && <p className="text-emerald-400 text-sm">Thanks! We’ll reach out shortly.</p>}
        {status==='err' && <p className="text-red-400 text-sm">{error}</p>}
      </form>
    </section>
  )
}
