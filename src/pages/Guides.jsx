import React from 'react'
import { Link } from 'react-router-dom'
export default function Guides(){
  return (
    <article className="space-y-4">
      <h1 className="text-2xl font-bold">Guides</h1>
      <div className="card p-6 space-y-2">
        <p><Link className="underline" to="/guides/join">Join & Onboarding</Link></p>
        <p><Link className="underline" to="/guides/security">Safety & Privacy Basics</Link></p>
        <p><Link className="underline" to="/guides/grants">Grant & Sponsor Readiness</Link></p>
      </div>
    </article>
  )
}
