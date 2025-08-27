import React, { useEffect, useState } from 'react'
import { cfg } from '../config.js'
import ShareButtons from './ShareButtons.jsx'

function readUTMFromQuery() {
  if (typeof window === 'undefined') return null
  const p = new URLSearchParams(window.location.search)
  const keys = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','ref']
  const obj = {}
  let found = false
  keys.forEach(k => {
    const v = p.get(k)
    if (v) { obj[k] = v; found = true }
  })
  return found ? obj : null
}

export default function WaitlistForm({ compact=false }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  useEffect(() => {
    const q = readUTMFromQuery()
    if (q) localStorage.setItem('utm', JSON.stringify(q))
  }, [])

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading'); setError('')
    try {
      const utm = JSON.parse(localStorage.getItem('utm') || 'null') || {}
      const body = { email, utm }
      const res = await fetch(`${cfg.apiBase}/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (!res.ok) {
        const msg = await res.text().catch(()=>'')
        throw new Error(msg || 'Failed to submit')
      }
      setEmail(''); setStatus('ok')
    } catch (err) {
      console.error(err)
      setStatus('err')
      setError(err?.message || 'Could not submit.')
    }
  }

  return (
    <div className="card p-4 mt-4">
      <form onSubmit={submit} className={compact ? '' : 'space-y-3'}>
        <div className="flex gap-2">
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            id="email"
            className="input flex-1"
            placeholder="Enter your email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            required
            autoComplete="email"
          />
          <button className="btn btn-primary" disabled={status==='loading'}>
            {status==='loading' ? 'Submitting…' : 'Join Waitlist'}
          </button>
        </div>
      </form>
      {status==='ok' && (
        <div className="mt-3">
          <p className="text-sm text-emerald-400">You’re in! Nominate 3 relatives:</p>
          <ShareButtons className="mt-2" />
        </div>
      )}
      {status==='err' && <p className="text-sm mt-2 text-red-400">{error}</p>}
    </div>
  )
}
