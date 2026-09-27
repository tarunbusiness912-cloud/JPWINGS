import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  MapPin,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import Navbar from '../../components/interiors/Navbar'

import './About.css'

function InteriorsAbout() {
  return (
    <main className="about-page">

      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <Navbar />


      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="about-hero">

        <div className="about-hero-content">

          <p className="about-kicker">
            JP WINGS · INTERIORS
          </p>

          <h1>
            Spaces designed
            <br />
            <em>with purpose.</em>
          </h1>

          <p className="about-hero-description">
            Thoughtful interior spaces designed around the way
            you live, work and experience your environment.
          </p>

        </div>


        <div className="about-hero-number">
          <span>03</span>
          ABOUT
        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <section className="about-intro">

        <div className="about-section-label">
          <span>01</span>
          WHO WE ARE
        </div>


        <div className="about-intro-content">

          <h2>
            Creating spaces
            <br />
            <em>around you.</em>
          </h2>

          <p>
            JP Wings Interiors focuses on creating thoughtful
            interior spaces that balance aesthetics,
            functionality and everyday comfort.
          </p>

          <p>
            From residential homes to professional and commercial
            environments, every space is approached with attention
            to layout, atmosphere and the way people experience it.
          </p>

        </div>

      </section>


      {/* =====================================================
          JP WINGS GROUP
      ====================================================== */}
      <section className="about-company">

        {/* =================================================
            LEFT — COMPANY LOGO
        ================================================== */}
        <div className="about-company-visual">

          <div className="about-company-logo-frame">

            <img
              src="/images/branding/jp-wings-logo.png"
              alt="JP Wings Group logo"
              className="about-company-logo-image"
            />

          </div>


          <div className="about-company-caption">

            <span>
              JP WINGS
            </span>

            <small>
              GROUP
            </small>

          </div>

        </div>


        {/* =================================================
            RIGHT — COMPANY INFORMATION
        ================================================== */}
        <div className="about-company-content">

          <p className="about-small-label">
            THE COMPANY
          </p>

          <h2>
            JP WINGS GROUP
          </h2>

          <p className="about-company-description">
            JP Wings operates as a business group with
            <strong> JP Wings Construction & Developers</strong>
            {" "}and
            <strong> JP Wings Interiors</strong>
            {" "}as its two business divisions.
          </p>


          {/* BUSINESS DIVISIONS */}
          <div className="about-company-detail">

            <div className="about-company-detail-icon">
              <Building2 size={19} strokeWidth={1.8} />
            </div>

            <div className="about-company-detail-text">

              <span>
                BUSINESS DIVISIONS
              </span>

              <strong>
                Construction &amp; Developers · Interiors
              </strong>

            </div>

          </div>


          {/* DIVISION LINKS */}
          <div className="about-company-links">

            <Link
              to="/construction"
              className="about-company-link"
            >

              <span>
                Construction &amp; Developers
              </span>

              <ArrowUpRight size={16} />

            </Link>


            <Link
              to="/interiors"
              className="about-company-link"
            >

              <span>
                JP Wings Interiors
              </span>

              <ArrowUpRight size={16} />

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT WE DO
      ====================================================== */}
      <section className="about-work">

        <div className="about-work-heading">

          <p>
            WHAT WE DO
          </p>

          <h2>
            From ideas
            <br />
            to <em>beautiful spaces.</em>
          </h2>

        </div>


        <div className="about-work-grid">

          {/* CARD 01 */}
          <article className="about-work-card">

            <span className="about-work-number">
              01
            </span>

            <div className="about-work-icon">
              <Sparkles size={21} strokeWidth={1.7} />
            </div>

            <h3>
              Thoughtful Design
            </h3>

            <p>
              We focus on creating interiors that balance
              visual appeal with everyday functionality.
            </p>

          </article>


          {/* CARD 02 */}
          <article className="about-work-card">

            <span className="about-work-number">
              02
            </span>

            <div className="about-work-icon">
              <Building2 size={21} strokeWidth={1.7} />
            </div>

            <h3>
              Residential &amp; Commercial
            </h3>

            <p>
              Interior solutions can be tailored for homes,
              offices and commercial environments.
            </p>

          </article>


          {/* CARD 03 */}
          <article className="about-work-card">

            <span className="about-work-number">
              03
            </span>

            <div className="about-work-icon">
              <Check size={21} strokeWidth={1.7} />
            </div>

            <h3>
              Practical Planning
            </h3>

            <p>
              Space planning, furniture, materials and lighting
              are considered as part of the overall design.
            </p>

          </article>

        </div>

      </section>


      {/* =====================================================
          APPROACH
      ====================================================== */}
      <section className="about-approach">

        <div className="about-section-label">

          <span>
            02
          </span>

          OUR APPROACH

        </div>


        <div className="about-approach-content">

          <p className="about-small-label">
            BEAUTY + FUNCTIONALITY
          </p>

          <h2>
            Design should look
            <br />
            beautiful and <em>work beautifully.</em>
          </h2>

          <p className="about-approach-description">
            We believe a good interior is more than attractive
            decoration. It should support the way people live,
            work and experience their space.
          </p>


          <div className="about-approach-points">

            {/* 01 */}
            <div className="about-approach-point">

              <span>
                01
              </span>

              <strong>
                Understand
              </strong>

              <p>
                We begin by understanding the space,
                requirements and preferences.
              </p>

            </div>


            {/* 02 */}
            <div className="about-approach-point">

              <span>
                02
              </span>

              <strong>
                Plan
              </strong>

              <p>
                Layouts, furniture, materials and lighting
                are carefully considered.
              </p>

            </div>


            {/* 03 */}
            <div className="about-approach-point">

              <span>
                03
              </span>

              <strong>
                Design
              </strong>

              <p>
                The elements come together into a cohesive
                and personalized interior.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          LOCATION
      ====================================================== */}
      <section className="about-location">

        <div className="about-location-card">

          <div className="about-location-icon">
            <MapPin size={22} strokeWidth={1.7} />
          </div>

          <p>
            WHERE WE ARE
          </p>

          <h2>
            Jayanagar B Block
          </h2>

          <span>
            Kalidasa Circle,
            <br />
            Davanagere, Karnataka — 577004
          </span>


          <a
            href="https://maps.app.goo.gl/DwhNiBMPWiaDhMQi8?g_st=ac"
            target="_blank"
            rel="noreferrer"
            className="about-map-button"
          >
            Open in Google Maps

            <ArrowUpRight size={17} />

          </a>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="about-cta">

        <div className="about-cta-content">

          <p>
            HAVE A SPACE IN MIND?
          </p>

          <h2>
            Let's create
            <br />
            something <em>beautiful.</em>
          </h2>

          <Link
            to="/interiors/contact"
            className="about-cta-button"
          >
            Start Your Project

            <ArrowRight size={17} />

          </Link>

        </div>


        {/* CTA BRAND */}
        <div className="about-cta-brand">

          <img
            src="/images/branding/jp-wings-logo.png"
            alt="JP Wings Group"
          />

          <strong>
            JP WINGS
          </strong>

          <small>
            INTERIORS
          </small>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer className="about-footer">

        <div className="about-footer-brand">

          <strong>
            JP WINGS
          </strong>

          <span>
            INTERIORS
          </span>

        </div>


        <p>
          © 2026 JP Wings Interiors · Davanagere
        </p>


        <Link to="/interiors/contact">

          Start a Project

          <ArrowUpRight size={15} />

        </Link>

      </footer>

    </main>
  )
}

export default InteriorsAbout