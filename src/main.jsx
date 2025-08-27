import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Press from './pages/Press.jsx'
import Impact from './pages/Impact.jsx'
import Sponsor from './pages/Sponsor.jsx'
import Ambassador from './pages/Ambassador.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import DemoCrest from './pages/DemoCrest.jsx'
import Waitlist from './pages/Waitlist.jsx'
import NotFound from './pages/NotFound.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/press" element={<Press />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/ambassador" element={<Ambassador />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/demo-crest" element={<DemoCrest />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
