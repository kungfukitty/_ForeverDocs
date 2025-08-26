import React, { useState } from 'react'
import { api } from '../lib/api'

export default function WaitlistForm(){
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await api('/waitlist', { method: 'POST', body: JSON.stringify({ email }) })
      setStatus('ok'); setEmail('')
    } catch (e) {
      console.error(e); setStatus('err')
    }
  }

  return (
    <form onSubmit={submit} className="card p-4 mt-4">
      <div className="flex gap-2">
        <input
          className="input flex-1"
          placeholder="Enter your email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          type="email"
          required
        />
        <button className="btn btn-primary" disabled={status==='loading'}>
          {status==='loading' ? 'Submitting…' : 'Join Waitlist'}
        </button>
      </div>
      {status==='ok' && <p className="text-sm mt-2 text-green-400">You’re in! Check your inbox.</p>}
      {status==='err' && <p className="text-sm mt-2 text-red-400">Couldn’t submit. Try again.</p>}
    </form>
  )
}
