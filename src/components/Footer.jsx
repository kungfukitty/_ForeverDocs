import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="section py-10 text-sm text-muted">
      <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" className="w-6 h-6" alt="ForeverDocs logo" />
          <span>© {new Date().getFullYear()} ForeverDocs Foundation</span>
        </div>
        <div className="flex gap-4 flex-wrap items-center">
          <NavLink to="/privacy">Privacy</NavLink>
          <NavLink to="/terms">Terms</NavLink>
          <NavLink to="/press">Press</NavLink>
          <NavLink to="/impact">Impact</NavLink>
          <NavLink to="/sponsor">Sponsor</NavLink>
          <NavLink to="/ambassador">Ambassador</NavLink>
          <NavLink to="/waitlist">Waitlist</NavLink>
        </div>
      </div>
    </footer>
  )
}
