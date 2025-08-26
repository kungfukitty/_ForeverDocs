import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { cfg } from './config'
import Footer from './components/Footer.jsx'

function Header() {
  return (
    <header className="section py-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src="/logo.svg" alt={cfg.siteName} className="w-10 h-10" />
        <Link to="/" className="font-extrabold tracking-tight text-xl">{cfg.siteName}</Link>
      </div>
      <nav className="hidden sm:flex gap-6 text-sm text-muted flex flex-wrap gap-3">
        <a href="/#problem" className="hover:text-ink">Problem</a>
        <a href="/#solution" className="hover:text-ink">Solution</a>
        <a href="/#features" className="hover:text-ink">Features</a>
        <Link to="/press" className="hover:text-ink">Press</Link>
        <Link to="/impact" className="hover:text-ink">Impact</Link>
        <Link to="/guides" className="hover:text-ink">Guides</Link>
        <Link to="/demo-crest" className="hover:text-ink">Demo</Link>
        <Link to="/waitlist" className="hover:text-ink">Waitlist</Link>
        <Link to="/ambassador" className="hover:text-ink">Ambassador</Link>
        <Link to="/sponsor" className="hover:text-ink">Sponsor</Link>
      </nav>
    </header>
  )
}

export default function App(){
  return (
    <div className="min-h-screen">
      <Header/>
      <main className="section py-8">
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}
