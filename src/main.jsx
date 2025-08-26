import Waitlist from './pages/Waitlist.jsx'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import Landing from './pages/Landing.jsx'
import Press from './pages/Press.jsx'
import Impact from './pages/Impact.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import Ambassador from './pages/Ambassador.jsx'
import Sponsor from './pages/Sponsor.jsx'
import Guides from './pages/Guides.jsx'
import GuideJoin from './pages/guides/GuideJoin.jsx'
import GuideSecurity from './pages/guides/GuideSecurity.jsx'
import GuideGrants from './pages/guides/GuideGrants.jsx'
import DemoCrest from './pages/DemoCrest.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Landing/>} />
          <Route path="press" element={<Press/>} />
          <Route path="impact" element={<Impact/>} />
          <Route path="privacy" element={<Privacy/>} />
          <Route path="terms" element={<Terms/>} />
          <Route path="ambassador" element={<Ambassador/>} />
          <Route path="sponsor" element={<Sponsor/>} />
          <Route path="guides" element={<Guides/>} />
          <Route path="guides/join" element={<GuideJoin/>} />
          <Route path="guides/security" element={<GuideSecurity/>} />
          <Route path="guides/grants" element={<GuideGrants/>} />
          <Route path="demo-crest" element={<DemoCrest/>} />
        </Route>
        <Route path="waitlist" element={<Waitlist/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
