import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react'

function Navbar() {
  const location = useLocation()

  const [mobileOpen, setMobileOpen] = useState(false)
  const [constructionOpen, setConstructionOpen] = useState(false)
  const [interiorsOpen, setInteriorsOpen] = useState(false)

  const isConstructionActive = location.pathname.startsWith('/construction')
  const isInteriorsActive = location.pathname.startsWith('/interiors')

  const closeMobileMenu = () => {
    setMobileOpen(false)
    setConstructionOpen(false)
    setInteriorsOpen(false)
  }

  const constructionLinks = [
    {
      label: 'Overview',
      path: '/construction',
    },
    {
      label: 'Projects',
      path: '/construction/projects',
    },
    {
      label: 'Packages',
      path: '/construction/packages',
    },
  ]

  const interiorsLinks = [
    {
      label: 'Home',
      path: '/interiors',
    },
    {
      label: 'Projects',
      path: '/interiors/portfolio',
    },
    {
      label: 'About',
      path: '/interiors/about',
    },
    {
      label: 'Services',
      path: '/interiors/services',
    },
    {
      label: 'Contact',
      path: '/interiors/contact',
    },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-[#f7f6f2]/95 backdrop-blur-xl">
      <div className="jp-container">
        <div className="flex h-[72px] items-center justify-between lg:h-[78px]">

          {/* ================================
              LOGO
          ================================= */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="group flex shrink-0 items-center"
            aria-label="JP Wings Group Home"
          >
            <img
              src="/images/branding/jp-wings-logo.png"
              alt="JP Wings Group"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:h-11"
            />
          </Link>

          {/* ================================
              DESKTOP NAVIGATION
          ================================= */}
          <nav className="hidden items-center gap-1 lg:flex">

            {/* HOME */}
            <Link
              to="/"
              className={`relative rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-300 ${
                location.pathname === '/'
                  ? 'text-neutral-950'
                  : 'text-neutral-500 hover:text-neutral-950'
              }`}
            >
              Home

              {location.pathname === '/' && (
                <span className="absolute bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#a47d48]" />
              )}
            </Link>

            {/* =================================
                CONSTRUCTION DROPDOWN
            ================================== */}
            <div className="group relative">
              <button
                type="button"
                className={`flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-300 ${
                  isConstructionActive
                    ? 'text-neutral-950'
                    : 'text-neutral-500 hover:text-neutral-950'
                }`}
              >
                Construction

                <ChevronDown
                  size={14}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />

                {isConstructionActive && (
                  <span className="absolute bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#a47d48]" />
                )}
              </button>

              {/* Dropdown */}
              <div className="pointer-events-none invisible absolute left-1/2 top-full w-56 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white p-2 shadow-[0_20px_60px_rgba(0,0,0,0.10)]">

                  {constructionLinks.map((item) => {
                    const active = location.pathname === item.path

                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-colors duration-200 ${
                          active
                            ? 'bg-neutral-950 text-white'
                            : 'text-neutral-600 hover:bg-[#f7f6f2] hover:text-neutral-950'
                        }`}
                      >
                        <span>{item.label}</span>

                        {active && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#d3b27c]" />
                        )}
                      </Link>
                    )
                  })}

                </div>
              </div>
            </div>

            {/* =================================
                INTERIORS DROPDOWN
            ================================== */}
            <div className="group relative">
              <button
                type="button"
                className={`flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-300 ${
                  isInteriorsActive
                    ? 'text-neutral-950'
                    : 'text-neutral-500 hover:text-neutral-950'
                }`}
              >
                Interiors

                <ChevronDown
                  size={14}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />

                {isInteriorsActive && (
                  <span className="absolute bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#a47d48]" />
                )}
              </button>

              {/* Dropdown */}
              <div className="pointer-events-none invisible absolute left-1/2 top-full w-56 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white p-2 shadow-[0_20px_60px_rgba(0,0,0,0.10)]">

                  {interiorsLinks.map((item) => {
                    const active = location.pathname === item.path

                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-colors duration-200 ${
                          active
                            ? 'bg-neutral-950 text-white'
                            : 'text-neutral-600 hover:bg-[#f7f6f2] hover:text-neutral-950'
                        }`}
                      >
                        <span>{item.label}</span>

                        {active && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#d3b27c]" />
                        )}
                      </Link>
                    )
                  })}

                </div>
              </div>
            </div>

          </nav>

          {/* ================================
              DESKTOP CTA
          ================================= */}
          <div className="hidden lg:block">
            <Link
              to="/construction/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800"
            >
              Discuss a project

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* ================================
              MOBILE MENU BUTTON
          ================================= */}
          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-950 lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={20} strokeWidth={1.8} />
            ) : (
              <Menu size={20} strokeWidth={1.8} />
            )}
          </button>
        </div>

        {/* =====================================
            MOBILE NAVIGATION
        ====================================== */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            mobileOpen
              ? 'max-h-[700px] pb-5 opacity-100'
              : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="border-t border-neutral-200 pt-4">

            {/* HOME */}
            <Link
              to="/"
              onClick={closeMobileMenu}
              className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium ${
                location.pathname === '/'
                  ? 'bg-neutral-950 text-white'
                  : 'text-neutral-700 hover:bg-white'
              }`}
            >
              Home
            </Link>

            {/* =================================
                MOBILE CONSTRUCTION
            ================================== */}
            <div className="mt-1">

              <button
                type="button"
                onClick={() =>
                  setConstructionOpen((value) => !value)
                }
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium ${
                  isConstructionActive
                    ? 'text-neutral-950'
                    : 'text-neutral-700'
                }`}
              >
                <span>Construction</span>

                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    constructionOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  constructionOpen
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden pl-3">

                  {constructionLinks.map((item) => {
                    const active = location.pathname === item.path

                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={closeMobileMenu}
                        className={`mb-1 flex items-center justify-between rounded-xl px-4 py-3 text-sm ${
                          active
                            ? 'bg-neutral-950 text-white'
                            : 'text-neutral-500 hover:bg-white hover:text-neutral-950'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )
                  })}

                </div>
              </div>
            </div>

            {/* =================================
                MOBILE INTERIORS
            ================================== */}
            <div className="mt-1">

              <button
                type="button"
                onClick={() =>
                  setInteriorsOpen((value) => !value)
                }
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium ${
                  isInteriorsActive
                    ? 'text-neutral-950'
                    : 'text-neutral-700'
                }`}
              >
                <span>Interiors</span>

                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    interiorsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  interiorsOpen
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden pl-3">

                  {interiorsLinks.map((item) => {
                    const active = location.pathname === item.path

                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={closeMobileMenu}
                        className={`mb-1 flex items-center justify-between rounded-xl px-4 py-3 text-sm ${
                          active
                            ? 'bg-neutral-950 text-white'
                            : 'text-neutral-500 hover:bg-white hover:text-neutral-950'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )
                  })}

                </div>
              </div>
            </div>

            {/* =================================
                MOBILE CTA
            ================================== */}
            <Link
              to="/construction/contact"
              onClick={closeMobileMenu}
              className="group mt-4 flex items-center justify-center gap-2 rounded-xl bg-neutral-950 px-5 py-3.5 text-sm font-semibold text-white"
            >
              Discuss a project

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar