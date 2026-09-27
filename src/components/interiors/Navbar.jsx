import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* JP WINGS GROUP BRAND */}
        <Link
          to="/"
          className="brand"
          aria-label="JP Wings Group"
          onClick={() => setOpen(false)}
        >
          <img
            src="/images/branding/jp-wings-logo.png"
            alt="JP Wings"
            className="brand-logo-image"
          />

          <span className="brand-text">
            <span>JP WINGS</span>
            <small>INTERIORS</small>
          </span>
        </Link>

        {/* NAVIGATION */}
        <nav className={`nav-links ${open ? "open" : ""}`}>

          <Link to="/interiors" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link to="/interiors/portfolio" onClick={() => setOpen(false)}>
            Projects
          </Link>

          <Link to="/interiors/about" onClick={() => setOpen(false)}>
            About
          </Link>

          <Link to="/interiors/services" onClick={() => setOpen(false)}>
            Services
          </Link>

          <Link to="/interiors/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>

        </nav>

        {/* START A PROJECT */}
        <Link
          to="/interiors/contact"
          className="nav-cta"
          onClick={() => setOpen(false)}
        >
          Start a Project
          <ArrowRight size={16} />
        </Link>

        {/* MOBILE MENU */}
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? (
            <X size={23} />
          ) : (
            <Menu size={23} />
          )}
        </button>

      </div>
    </header>
  );
}

export default Navbar;
