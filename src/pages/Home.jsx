import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Crown, Users, Upload } from '../icons.jsx'
import { cfg } from '../config.js'
import WaitlistForm from '../components/WaitlistForm.jsx'
import ShareButtons from '../components/ShareButtons.jsx'

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden gradient-ring">
        <div className="section py-16 sm:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                Protect Your Family. <span className="text-gold">Preserve Your Legacy.</span>
              </h1>
              <p className="mt-4 text-lg text-muted max-w-xl">
                {cfg.siteName} is a nonprofit vault for families to secure the documents that decide futures:
                the will, the deed, the insurance policy — and to make sure heirs can find them when it matters.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#cta" className="btn btn-primary">
                  Secure My Vault <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <Link to="/demo-crest" className="btn btn-secondary">See Crest Demo</Link>
              </div>
              <div className="mt-6 text-xs text-muted">
                Powered by community partners{cfg.sponsor ? ` • Sponsored by ${cfg.sponsor}` : ''}.
              </div>
              <div id="cta" className="max-w-xl">
                <WaitlistForm />
                <ShareButtons className="mt-3" />
              </div>
            </div>

            <div className="card p-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center">
                  <Crown className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <div className="font-semibold">Example Vault</div>
                  <div className="text-sm text-muted">Private, encrypted, organized</div>
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
                <Link to="/demo-crest" className="btn btn-secondary text-sm">Share Access</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="section py-16">
        <h2 className="text-3xl font-extrabold">The Problem: Paper Loss → Wealth Loss</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <div className="card p-6">
            <p className="text-ink/90">
              Missing wills and misplaced deeds break probate, invite partition sales, and erase generational wealth.
              Families need a simple, permanent plan to keep vital records organized and accessible to the right people.
            </p>
            <p className="text-muted mt-4">
              {cfg.siteName} focuses on what matters: store documents securely, designate heirs, make the handoff clear.
            </p>
          </div>
          <div className="card p-6">
            <ul className="text-muted list-disc pl-5">
              <li>Encrypted storage for wills, deeds, policies, and IDs.</li>
              <li>Named heirs with simple release rules.</li>
              <li>Community-first onboarding via trusted partners.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="solution" className="section py-16">
        <h2 className="text-3xl font-extrabold">The Solution: A Digital Safe Deposit Box</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <div className="card p-6">
            <p className="text-ink/90">
              We combine organization and end‑to‑end encryption. You control who sees what, and when.
            </p>
            <p className="text-muted mt-4">
              Distribution happens through community channels—churches, barbers, funeral homes—so families actually adopt it.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              { title: 'End‑to‑End Encryption', desc: 'Files are encrypted in the browser before upload.' },
              { title: 'Heir Designation', desc: 'Name 1–3 heirs and set release rules.' },
              { title: 'Community Distribution', desc: 'Onboard via trusted partners with QR kits.' },
            ].map((it, i) => (
              <div key={i} className="card p-5">
                <div className="font-semibold">{it.title}</div>
                <div className="text-muted mt-1">{it.desc}</div>
              </div>
            ))}
            <div className="card p-5">
              <div className="font-semibold">Get Started</div>
              <div className="text-muted mt-1">Join the waitlist—pilot invites roll out soon.</div>
              <a href="#cta" className="btn btn-primary mt-3">Join the Waitlist</a>
            </div>
          </div>
        </div>
      </section>

      <section id="blockchain" className="section py-16">
        <h2 className="text-3xl font-extrabold">Why Blockchain? A Public Timestamp, Not Your Data</h2>
        <p className="text-muted mt-4 max-w-3xl">
          Families can mint a Digital Family Crest—public proof that a vault was secured on a given date.
          No private data on‑chain. Just a timestamped signal that strengthens your position in disputes.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="card p-6">
            <div className="font-semibold">Digital Family Crest</div>
            <p className="text-muted mt-3">
              A tamper‑proof marker of preparedness—useful in future claims.
            </p>
            <Link to="/demo-crest" className="btn btn-secondary mt-4">View the Crest Demo</Link>
          </div>

          <div className="card p-6">
            <div className="font-semibold">Transparent Funding</div>
            <p className="text-muted mt-3">
              Sponsors publicly fund crests for families, creating radical transparency in how support is used.
            </p>
            <Link to="/sponsor" className="btn btn-secondary mt-4">Sponsor Crests</Link>
          </div>
        </div>
      </section>
    </>
  )
}
