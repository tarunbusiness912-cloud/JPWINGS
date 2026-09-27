import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import ConstructionHome from './pages/construction/ConstructionHome'
import ConstructionPackages from './pages/construction/ConstructionPackages'
import ConstructionProjects from './pages/construction/ConstructionProjects'
import ConstructionContact from './pages/construction/ConstructionContact'

import InteriorsHome from './pages/interiors/InteriorsHome'
import InteriorsServices from './pages/interiors/InteriorsServices'
import InteriorsPortfolio from './pages/interiors/InteriorsPortfolio'
import InteriorsContact from './pages/interiors/InteriorsContact'
import InteriorsAbout from './pages/interiors/InteriorsAbout'
import ServiceDetail from './pages/interiors/ServiceDetail'

import NotFound from './pages/NotFound'
import ScrollToTop from './components/shared/ScrollToTop'

// Member 2's Interiors styles are kept intact and loaded with the
// integrated Interiors implementation.
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* JP Wings Group */}
        <Route path="/" element={<Home />} />

        {/* Construction */}
        <Route path="/construction" element={<ConstructionHome />} />
        <Route
          path="/construction/packages"
          element={<ConstructionPackages />}
        />
        <Route
          path="/construction/projects"
          element={<ConstructionProjects />}
        />
        <Route
          path="/construction/contact"
          element={<ConstructionContact />}
        />

        {/* Member 2 — Interiors */}
        <Route path="/interiors" element={<InteriorsHome />} />
        <Route
          path="/interiors/services"
          element={<InteriorsServices />}
        />
        <Route
          path="/interiors/services/:serviceSlug"
          element={<ServiceDetail />}
        />
        <Route
          path="/interiors/portfolio"
          element={<InteriorsPortfolio />}
        />
        <Route
          path="/interiors/about"
          element={<InteriorsAbout />}
        />
        <Route
          path="/interiors/contact"
          element={<InteriorsContact />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
