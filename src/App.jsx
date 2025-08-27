import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { cfg } from './config.js';
import Footer from './components/Footer.jsx';

function Header() {
  return (
    <header className="section py-6 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-3">
        <img src="/logo.svg" alt={cfg.siteName} className="w-10 h-10" />
        <div className="font-extrabold tracking-tight text-xl">{cfg.siteName}</div>
      </Link>
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
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
