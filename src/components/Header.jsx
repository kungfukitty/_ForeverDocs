import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu } from '../icons.jsx'
import { cfg } from '../config.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const nav = (
    <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-muted">
      <a href="/#problem">Problem</a>
      <a href="/#solution">Solution</a>
      <a href="/#blockchain">Why Blockchain</a>
      <NavLink to="/press">Press</NavLink>
      <NavLink to="/impact">Impact</NavLink>
      <NavLink to="/sponsor">Sponsor</NavLink>
      <NavLink to="/ambassador">Ambassador</NavLink>
      <NavLink to="/waitlist">Waitlist</NavLink>
    </nav>
  )
  return (
    <header className="section py-4 sm:py-6">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt={cfg.siteName} className="w-10 h-10" />
          <div className="font-extrabold tracking-tight text-xl">{cfg.siteName}</div>
        </Link>
        <div className="hidden sm:block">{nav}</div>
        <div className="sm:hidden">
          <button className="btn btn-secondary" onClick={() => setOpen(v => !v)} aria-label="Toggle navigation">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
      {open && <div className="mt-4 sm:hidden">{nav}</div>}
    </header>
  )
}
