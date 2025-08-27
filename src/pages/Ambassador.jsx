import React, { useState } from 'react'
import { cfg } from '../config.js'

export default function Ambassador() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading'); setError('')
    try {
      const body = { name, email, city }
      const res = await fetch(`${cfg.apiBase}/ambassador`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      if (!res.ok) throw new Error(await res.text())
      setName(''); setEmail(''); setCity(''); setStatus('ok')
    } catch (err) {
      console.error(err); setStatus('err'); setError(err?.message || 'Could not submit')
    }
  }

  return (
    <section className="section py-16">
      <h1 className="text-3xl font-extrabold">Ambassador Program</h1>
      <p className="text-muted mt-2 max-w-2xl">
        Help families in your community secure their vital documents. Join the outreach network.
      </p>

      <form onSubmit={submit} className="card p-6 mt-6 max-w-xl space-y-3">
        <div>
          <label htmlFor="name" className="block text-sm text-muted mb-1">Full Name</label>
          <input id="name" className="input" value={name} onChange={(e)=>setName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-muted mb-1">Email</label>
          <input id="email" type="email" className="input" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm text-muted mb-1">City/State</label>
          <input id="city" className="input" value={city} onChange={(e)=>setCity(e.target.value)} placeholder="e.g., Atlanta, GA" required />
        </div>
        <button className="btn btn-primary" disabled={status==='loading'}>
          {status==='loading' ? 'Submitting…' : 'Join as Ambassador'}
        </button>
        {status==='ok' && <p className="text-emerald-400 text-sm">Thanks! We’ll email you next steps.</p>}
        {status==='err' && <p className="text-red-400 text-sm">{error}</p>}
      </form>
    </section>
  )
}
