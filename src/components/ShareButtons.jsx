import React from 'react'
import { cfg } from '../config.js'

export default function ShareButtons({ className = '', text }) {
  const url =
    cfg.shareUrl ||
    (typeof window !== 'undefined' ? window.location.origin : 'https://foreverdocs.org')
  const message =
    text ||
    `I just secured our family documents with ${cfg.siteName}. Join me: ${url} #ProtectOurLegacy`

  const wa = `https://wa.me/?text=${encodeURIComponent(message)}`
  const sms = `sms:?&body=${encodeURIComponent(message)}`
  const tw = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`
  const canWebShare = typeof navigator !== 'undefined' && navigator.share
  const doShare = async () => {
    try { await navigator.share({ title: cfg.siteName, text: message, url }) } catch {}
  }

  return (
    <div className={`flex gap-2 ${className}`}>
      {canWebShare && <button onClick={doShare} className="btn btn-secondary text-sm">Share</button>}
      <a className="btn btn-secondary text-sm" href={wa} target="_blank" rel="noreferrer">WhatsApp</a>
      <a className="btn btn-secondary text-sm" href={sms}>Text</a>
      <a className="btn btn-secondary text-sm" href={tw} target="_blank" rel="noreferrer">Twitter</a>
    </div>
  )
}
