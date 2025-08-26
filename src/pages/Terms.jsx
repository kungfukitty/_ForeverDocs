import React from 'react'
export default function Terms(){
  return (
    <article className="space-y-4">
      <h1 className="text-2xl font-bold">Terms of Service</h1>
      <div className="card p-6 space-y-3 text-sm text-muted">
        <p>By using this site you agree to provide accurate info and follow applicable law. Services are provided “as‑is” without warranty.</p>
        <p>We may update these terms; changes are effective when posted.</p>
        <p>Contact: <a className="underline" href="mailto:legal@foreverdocs.org">legal@foreverdocs.org</a></p>
      </div>
    </article>
  )
}
