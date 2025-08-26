import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="section py-10 border-t border-neutral-800 mt-12 text-sm text-neutral-400">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>&copy; {new Date().getFullYear()} ForeverDocs</div>
        <nav className="flex flex-wrap gap-4">
          <Link to="/waitlist" className="hover:text-ink">Waitlist</Link>
          <Link to="/ambassador" className="hover:text-ink">Ambassador</Link>
          <Link to="/sponsor" className="hover:text-ink">Sponsor</Link>
          <Link to="/press" className="hover:text-ink">Press</Link>
          <Link to="/privacy" className="hover:text-ink">Privacy</Link>
          <Link to="/terms" className="hover:text-ink">Terms</Link>
        </nav>
      </div>
    </footer>
  )
}
