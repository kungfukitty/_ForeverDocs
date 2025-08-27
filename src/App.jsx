import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// keep these paths/casing exactly as they are in your repo
import { ArrowRight, Shield, Crown, Users, Upload } from './icons.jsx'
import { cfg } from './config.js'

import Press from './pages/Press.jsx'
import Impact from './pages/Impact.jsx'
import Sponsor from './pages/Sponsor.jsx'
import Ambassador from './pages/Ambassador.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import DemoCrest from './pages/DemoCrest.jsx'

/** ---------- Inline components (so no external imports required) ---------- */

function ShareButtonsInline({ className = '', text }) {
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
  const doShare = async () => { try { await navigator.share({ title: cfg.siteName, text: message, url }) } catch {} }

  return (
    <div className={`flex gap-2 ${className}`}>
      {canWebShare && <button onClick={doShare} className="btn btn-secondary text-sm">Share</button>}
      <a className="btn btn-secondary text-sm" href={wa} target="_blank" rel="noreferrer">WhatsApp</a>
      <a className="btn btn-secondary text-sm" href={sms}>Text</a>
      <a className="btn btn-secondary text-sm" href={tw} target="_blank" rel="noreferrer">Twitter</a>
    </div>
  )
}

function WaitlistInline() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const utm = JSON.parse(localStorage.getItem('utm') || 'null') || {}
      const body = { email, utm }
      const res = await fetch(`${(import.meta.env.VITE_API_URL || '/api').replace(/\/+$/,'')}/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (!res.ok) throw new Error(await res.text())
      setEmail('')
      setStatus('ok')
    } catch (err) {
      console.error(err)
      setStatus('err')
    }
  }

  return (
    <div className="card p-4 mt-4">
      <form onSubmit={submit}>
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
      </form>
      {status==='ok' && (
        <div className="mt-3">
          <p className="text-sm text-green-400">You’re in! Nominate 3 relatives:</p>
          <ShareButtonsInline className="mt-2" />
        </div>
      )}
      {status==='err' && <p className="text-sm mt-2 text-red-400">Couldn’t submit. Try again.</p>}
    </div>
  )
}

/** ----------------------------------------------------------------------- */

function Header() {
  return (
    <header className="section py-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src="/logo.svg" alt={cfg.siteName} className="w-10 h-10" />
        <div className="font-extrabold tracking-tight text-xl">{cfg.siteName}</div>
      </div>
      <nav className="hidden sm:flex gap-6 text-sm text-muted">
        <a href="/#problem" className="hover:text-ink">Problem</a>
        <a href="/#solution" className="hover:text-ink">Solution</a>
        <a href="/#blockchain" className="hover:text-ink">Why Blockchain</a>
        <Link to="/press" className="hover:text-ink">Press</Link>
        <Link to="/impact" className="hover:text-ink">Impact</Link>
        <Link to="/sponsor" className="hover:text-ink">Sponsor</Link>
      </nav>
      <Link to="/ambassador" className="btn btn-primary text-sm">Ambassador</Link>
    </header>
  )
}

function MockupImage({ className = '' }) {
  const [ok, setOk] = useState(true)
  return (
    <>
      <img
        src="/mockup.png"
        alt={`${cfg.siteName} app mockup`}
        loading="lazy"
        decoding="async"
        onError={() => setOk(false)}
        className={`rounded-2xl border border-white/10 shadow-glow ${ok ? '' : 'hidden'} ${className}`}
      />
      {!ok && (
        <div
          className={`rounded-2xl border border-white/10 shadow-glow p-10 text-center text-muted ${className}`}
          role="img"
          aria-label="App mockup placeholder"
        >
          Preview coming soon
        </div>
      )}
    </>
  )
}

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden gradient-ring">
        <div className="section py-18 sm:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                Protect Your Family. <span className="text-gold">Preserve Your Legacy.</span>
              </h1>
              <p className="mt-4 text-lg text-muted max-w-xl">
                {cfg.siteName} is a free nonprofit vault for Black families to secure the documents that decide futures:
                the will, the deed, the insurance policy — and to make sure heirs can find them when it matters.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#cta" className="btn btn-primary">
                  Secure My Vault <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <Link to="/demo" className="btn btn-secondary">See Crest Demo</Link>
              </div>
              <div className="mt-6 text-xs text-muted">
                Powered by community partners{cfg.sponsor ? ` • Sponsored by ${cfg.sponsor}` : ''}.
              </div>
              <div id="cta" className="max-w-xl">
                <WaitlistInline />
                <ShareButtonsInline className="mt-3" />
              </div>
            </div>

            <div className="relative">
              <div className="card p-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center">
                    <Crown className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold">Hello, Diana</div>
                    <div className="text-sm text-muted">Your {cfg.siteName} Vault</div>
                  </div>
                </div>
                <div className="mt-6 grid gap-3">
                  {['Will', 'Insurance Policy', 'Birth Certificate', 'Deed'].map((d, i) => (
                    <div key={i} className="card px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-gold" /><span>{d}</span>
                      </div>
                      <span className="text-xs text-muted">encrypted</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid sm:grid-cols-3 gap-3">
                  <button className="btn btn-secondary text-sm"><Upload className="w-4 h-4 mr-2" />Upload</button>
                  <button className="btn btn-secondary text-sm"><Users className="w-4 h-4 mr-2" />Designate Heirs</button>
                  <button className="btn btn-secondary text-sm">Share Access</button>
                </div>
              </div>
              <div className="absolute -right-6 -bottom-6 w-40 h-40 bg-gold/10 rounded-full blur-2xl pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="section py-16">
        <h2 className="text-3xl font-extrabold">The Problem: The Paper Cut That Bleeds for Generations</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <div className="card p-6">
            <p className="text-ink/90">
              In the American South, there are over <span className="font-semibold">1.6 million acres</span> of land known as
              heirs' property. It’s land owned by Black families, often passed down since Reconstruction, but without a clear,
              legal title. When the owner dies, if just one of the dozens of descendants can't be found or is pressured to sell,
              the entire property can be forcibly sold at a fraction of its value.
            </p>
            <p className="text-muted mt-4">
              This isn't a rare loophole; it's a primary driver of involuntary Black land loss, costing families billions in
              generational wealth. The root cause? A missing will. A misplaced deed. A system that preys on disorganized paper
              records. This is how wealth is systematically erased — not with a bang, but with a lost document.
            </p>
          </div>
          <div className="card p-6">
            <ul className="text-muted list-disc pl-5">
              <li>Missing or unknown wills block probate and delay claims.</li>
              <li>Misplaced deeds create vulnerability to partition sales.</li>
              <li>Disorganized records invite predatory legal outcomes.</li>
            </ul>
            <div className="mt-6 text-sm text-muted">
              {cfg.siteName} exists to stop that bleed — with organization, encryption, and a clear handoff to heirs.
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solution" className="section py-16">
        <h2 className="text-3xl font-extrabold">The Solution: A Digital Safe Deposit Box, Built on Community Trust</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <div className="card p-6">
            <p className="text-ink/90">
              {cfg.siteName} is a free digital vault designed to stop this bleeding. We give families a simple, secure place to
              store their most important documents — the will, the deed, the insurance policy.
            </p>
            <p className="text-muted mt-4">
              But technology alone is not enough. Trust is everything. That's why our distribution isn't an app store link; it’s
              a QR code in the hands of a pastor, a barber, or a funeral home director. We go where our community already is,
              providing a tool that’s as easy to use as taking a picture. You can designate your heirs with a tap, ensuring the
              right people get the right information at the right time.
            </p>
            <p className="text-muted mt-4">
              This isn't just about storing files; it's about creating a clear, simple plan to protect a family's legacy.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              { title: 'End-to-End Encryption', desc: 'Documents are encrypted in your browser before upload.' },
              { title: 'Heir Designation', desc: 'Name 1–3 heirs and set simple release rules.' },
              { title: 'Community Distribution', desc: 'Onboard via trusted partners with QR kits.' },
            ].map((it, i) => (
              <div key={i} className="card p-5">
                <div className="font-semibold">{it.title}</div>
                <div className="text-muted mt-1">{it.desc}</div>
              </div>
            ))}
            <div className="card p-5">
              <div className="font-semibold">Get Started</div>
              <div className="text-muted mt-1">Join the waitlist and we’ll invite you to the pilot.</div>
              <a href="#cta" className="btn btn-primary mt-3">Join the Waitlist</a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BLOCKCHAIN */}
      <section id="blockchain" className="section py-16">
        <h2 className="text-3xl font-extrabold">Why Blockchain? The Unbreakable Promise.</h2>
        <p className="text-muted mt-4 max-w-3xl">
          So, how do we make this promise permanent and trustworthy? How do we build a system that our community can own, and
          that no corporation or entity can ever take away? That is the only reason we use the blockchain.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="card p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center">
                <Crown className="w-5 h-5 text-gold" />
              </div>
              <div className="font-semibold">The Digital Family Crest: A Permanent, Public Proof.</div>
            </div>
            <p className="text-muted mt-3">
              When a family secures their vault, they can mint a Digital Family Crest on the blockchain. Think of it as a digital
              flag planted on a specific date, creating a public, tamper-proof timestamp. It says to the world, “On this day, the
              Carter family secured their legacy.” It contains no private data, but it serves as an unforgettable, un-erasable
              proof of preparedness that can be a powerful tool against any future claim or dispute.
            </p>
            <Link to="/demo" className="btn btn-secondary mt-4">View the Crest Demo</Link>
          </div>

          <div className="card p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center">
                <Shield className="w-5 h-5 text-gold" />
              </div>
              <div className="font-semibold">Transparent Funding: An “Each One, Fund One” Model.</div>
            </div>
            <p className="text-muted mt-3">
              Our nonprofit runs on a revolutionary funding model. A sponsor — be it a foundation, a church, or a Web3 protocol —
              doesn't just donate to us. They can publicly “Sponsor 1,000 Family Crests in Tennessee.” Because it happens on a
              public blockchain, everyone can see the funds were used to help 1,000 specific families get protected. It’s radical
              transparency. It keeps us accountable to the community we serve, not just to our donors.
            </p>
            <Link to="/sponsor" className="btn btn-secondary mt-4">Sponsor Crests</Link>
          </div>
        </div>
      </section>
    </>
  )
}

function Footer() {
  return (
    <footer className="section py-10 text-sm text-muted">
      <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" className="w-6 h-6" alt="ForeverDocs logo" />
          <span>© {new Date().getFullYear()} ForeverDocs Foundation</span>
        </div>
        <div className="flex gap-4">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/press">Press</Link>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/press" element={<Press />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/ambassador" element={<Ambassador />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/demo" element={<DemoCrest />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
