import React from 'react'
export default function Privacy(){
  return (
    <article className="space-y-4">
      <h1 className="text-2xl font-bold">Privacy Policy</h1>
      <div className="card p-6 space-y-3 text-sm text-muted">
        <p>We collect minimal data (e.g., waitlist email) and never sell it. You can request a copy or deletion at any time.</p>
        <p>Analytics (GA4) is optional and disabled unless configured.</p>
        <p>Contact: <a className="underline" href="mailto:privacy@foreverdocs.org">privacy@foreverdocs.org</a></p>
      </div>
    </article>
  )
}
