import React from 'react'
import WaitlistForm from '../components/WaitlistForm'
import { cfg } from '../config'
import { ArrowRight, Shield, Crown, Users, Upload, Lock, Share2 } from '../icons'

function Hero(){
  return (
    <section className="gradient-ring py-16">
      <div className="card p-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{cfg.tagline}</h1>
        <p className="mt-3 text-muted max-w-2xl">ForeverDocs is your family’s secure vault for vital docs, emergency info, and legacy—portable, private, and easy to share with the right people at the right time.</p>
        <div className="mt-6">
          <WaitlistForm />
        </div>
      </div>
    </section>
  )
}

function Feature({icon:Icon, title, desc}){
  return (
    <div className="card p-6">
      <div className="flex items-center gap-3 mb-2">
        <Icon className="w-5 h-5 text-gold" />
        <h4 className="font-semibold">{title}</h4>
      </div>
      <p className="text-sm text-muted">{desc}</p>
    </div>
  )
}

function Features(){
  return (
    <section id="features" className="py-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Feature icon={Shield} title="Private by Default" desc="Zero‑knowledge mindset. You choose who sees what." />
        <Feature icon={Upload} title="One‑Tap Sharing" desc="Share a read‑only pack with trusted contacts or providers." />
        <Feature icon={Lock} title="Secure Storage" desc="Strong encryption, modern auth, and device‑friendly backups." />
        <Feature icon={Users} title="Family‑Ready" desc="Roles for parents, kids, caregivers, and advisors." />
        <Feature icon={Crown} title="Legacy Tools" desc="Heirs kits, emergency cards, and digital assets guidance." />
        <Feature icon={Share2} title="On‑Chain Ready" desc="Optional on‑chain proofs for integrity and timestamping." />
      </div>
    </section>
  )
}

function Problem(){
  return (
    <section id="problem" className="py-12">
      <div className="card p-8">
        <h2 className="text-2xl font-bold mb-2">The problem</h2>
        <p className="text-muted">Families keep critical information scattered across emails, screenshots, and folders. When it matters—medical, travel, emergencies—nobody can find the latest copy, who can access it, or how to verify it.</p>
      </div>
    </section>
  )
}

function Solution(){
  return (
    <section id="solution" className="py-12">
      <div className="card p-8">
        <h2 className="text-2xl font-bold mb-2">Our solution</h2>
        <p className="text-muted">A secure, human‑centric doc pack with roles, checklists, and verified timestamps. Invite family and advisors, lock sensitive items, and ship a shareable “need‑to‑know” view in seconds.</p>
      </div>
    </section>
  )
}

function CTA(){
  return (
    <section className="py-16">
      <div className="card p-8 text-center">
        <h3 className="text-xl font-semibold">Be the first to try {cfg.siteName}</h3>
        <p className="text-muted mt-2">Waitlist members get early access and perks.</p>
        <div className="mt-6 flex justify-center">
          <WaitlistForm />
        </div>
      </div>
    </section>
  )
}

export default function Landing(){
  return (
    <div>
      <Hero/>
      <Problem/>
      <Solution/>
      <Features/>
      <CTA/>
    </div>
  )
}
