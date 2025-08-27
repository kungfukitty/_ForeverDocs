import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section py-24 text-center">
      <h1 className="text-4xl font-extrabold">404</h1>
      <p className="text-muted mt-2">We couldn’t find that page.</p>
      <Link to="/" className="btn btn-primary mt-6">Go Home</Link>
    </section>
  )
}
