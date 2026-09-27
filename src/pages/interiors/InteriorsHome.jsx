import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  Layers3,
  Ruler,
  Sparkles,
} from "lucide-react";

import Navbar from "../../components/interiors/Navbar";
import InteriorHero from "../../components/interiors/InteriorHero";

import "./Home.css";

function InteriorsHome() {
  return (
    <main className="interiors-home">
      <Navbar />

      {/* =====================================================
          HERO
      ====================================================== */}
      <InteriorHero />

      {/* =====================================================
          STUDIO INTRO
      ====================================================== */}
      <section className="studio-intro">
        <div className="studio-intro-label">
          <span>01</span>
          THE STUDIO
        </div>

        <div className="studio-intro-main">
          <p className="home-kicker">
            JP WINGS INTERIORS · DAVANGERE
          </p>

          <h2>
            Interiors with
            <span> intention.</span>
          </h2>

          <p className="studio-intro-text">
            We design thoughtful spaces where architecture, furniture,
            materials and light come together naturally. Every project is
            shaped around the people who experience it.
          </p>

          <a href="/interiors/services" className="text-arrow-link">
            Discover our studio
            <ArrowRight size={17} />
          </a>
        </div>

        <div className="studio-intro-side">
          <div className="studio-number">01</div>

          <p>
            From the first conversation to the final detail, we create
            interiors that feel refined, functional and deeply personal.
          </p>
        </div>
      </section>

      {/* =====================================================
          FEATURED PROJECTS
      ====================================================== */}
      <section className="featured-projects">
        <div className="section-heading-row">
          <div>
            <p className="home-kicker">SELECTED WORK</p>

            <h2>
              Spaces made to
              <span> be lived in.</span>
            </h2>
          </div>

          <a href="/interiors/portfolio" className="outline-link">
            View all projects
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="project-showcase">

          {/* =================================================
              PROJECT 01
              CLIENT LIVING IMAGE
              NO OVERLAY INFORMATION
          ================================================== */}
          <article className="project-card project-large">
            <div
              className="project-image"
              style={{
                backgroundImage:
                  "url('/images/interiors/living-01.jpg')",
              }}
            />
          </article>


          <div className="project-column">

            {/* =================================================
                PROJECT 02
                CLIENT KITCHEN IMAGE
            ================================================== */}
            <article className="project-card project-small">
              <div
                className="project-image"
                style={{
                  backgroundImage:
                    "url('/images/interiors/kitchen-01.jpg')",
                }}
              />

              <div className="project-overlay">
                <div>
                  <p>MODULAR · KITCHEN</p>
                  <h3>Contemporary Kitchen</h3>
                </div>

                <span>
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </article>


            {/* =================================================
                PROJECT 03
                DIFFERENT TYPE — RELAXING SPACE
            ================================================== */}
            <article className="project-card project-small">
              <div
                className="project-image"
                style={{
                  backgroundImage:
                    "url('/images/interiors/relaxingspace-01.jpg')",
                }}
              />

              <div className="project-overlay">
                <div>
                  <p>RELAXING · SPACE</p>
                  <h3>Serene Living Retreat</h3>
                </div>

                <span>
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </article>

          </div>
        </div>
      </section>


      {/* =====================================================
          JP WINGS COMPANY + SERVICES
      ====================================================== */}
      <section className="jp-company-section">

        {/* =================================================
            COMPANY INTRO
        ================================================== */}
        <div className="jp-company-header">

          <div className="jp-company-label">
            <span>02</span>
            JP WINGS GROUP
          </div>

          <div className="jp-company-heading">

            <p className="home-kicker">
              JP WINGS · CONSTRUCTION · INTERIORS
            </p>

            <h2>
              Spaces designed
              <span> around you.</span>
            </h2>

            <p className="jp-company-description">
              JP Wings Interiors is part of JP WINGS GROUP, bringing
              together thoughtful interior design, practical planning
              and refined detailing to create spaces that feel personal,
              functional and timeless.
            </p>

          </div>

        </div>


        {/* =================================================
            COMPANY INFORMATION
        ================================================== */}
        <div className="jp-company-info">

          <div className="jp-company-main">

            <div className="jp-company-mark">
              JW
            </div>

            <div>

              <p className="jp-company-small">
                JP WINGS GROUP
              </p>

              <h3>
                JP Construction &amp;
                <br />
                Developers and Interior
              </h3>

              <p>
                A design-focused approach to creating residential and
                commercial spaces with attention to comfort, functionality,
                materials and finishing details.
              </p>

            </div>

          </div>


          <div className="jp-company-details">

            <div>
              <span>LOCATION</span>
              <strong>Davangere, Karnataka</strong>
            </div>

            <div>
              <span>DIVISION</span>
              <strong>Interiors</strong>
            </div>

            <div>
              <span>FOCUS</span>
              <strong>Residential &amp; Commercial</strong>
            </div>

          </div>

        </div>


        {/* =================================================
            SERVICES HEADER
        ================================================== */}
        <div className="jp-services-header">

          <div>

            <p className="home-kicker">
              WHAT WE DO
            </p>

            <h3>
              Interior solutions
              <span> for every space.</span>
            </h3>

          </div>

          <a
            href="/interiors/services"
            className="jp-services-link"
          >
            Explore all services
            <ArrowUpRight size={17} />
          </a>

        </div>


        {/* =================================================
            SERVICES GRID
        ================================================== */}
        <div className="jp-services-grid">

          <a
            href="/interiors/services/residential-interiors"
            className="jp-service-card"
          >
            <span>01</span>

            <div>
              <h4>Residential Interiors</h4>

              <p>
                Thoughtful homes designed around your lifestyle,
                comfort and everyday needs.
              </p>
            </div>

            <ArrowUpRight size={18} />
          </a>


          <a
            href="/interiors/services/modular-kitchens"
            className="jp-service-card"
          >
            <span>02</span>

            <div>
              <h4>Modular Kitchens</h4>

              <p>
                Functional kitchens combining elegant finishes,
                smart storage and practical planning.
              </p>
            </div>

            <ArrowUpRight size={18} />
          </a>


          <a
            href="/interiors/services/bedroom-interiors"
            className="jp-service-card"
          >
            <span>03</span>

            <div>
              <h4>Bedroom Interiors</h4>

              <p>
                Calm and personalized private spaces designed
                for comfort and relaxation.
              </p>
            </div>

            <ArrowUpRight size={18} />
          </a>


          <a
            href="/interiors/services/commercial-interiors"
            className="jp-service-card"
          >
            <span>04</span>

            <div>
              <h4>Commercial Interiors</h4>

              <p>
                Professional spaces designed around functionality,
                identity and everyday performance.
              </p>
            </div>

            <ArrowUpRight size={18} />
          </a>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ====================================================== */}
      <section className="design-process">

        <div className="process-heading">

          <p className="home-kicker">
            OUR APPROACH
          </p>

          <h2>
            A thoughtful process.
            <span> Beautiful results.</span>
          </h2>

          <p>
            Every project moves through a clear design journey so that
            creativity and execution stay connected.
          </p>

        </div>


        <div className="process-grid">

          <div className="process-item">
            <span>01</span>

            <h3>Discover</h3>

            <p>
              We understand your space, lifestyle, requirements and
              aspirations.
            </p>
          </div>

          <div className="process-line" />

          <div className="process-item">
            <span>02</span>

            <h3>Design</h3>

            <p>
              Concepts, layouts, materials and visual direction are
              developed together.
            </p>
          </div>

          <div className="process-line" />

          <div className="process-item">
            <span>03</span>

            <h3>Develop</h3>

            <p>
              Details are refined through drawings, selections and
              project planning.
            </p>
          </div>

          <div className="process-line" />

          <div className="process-item">
            <span>04</span>

            <h3>Deliver</h3>

            <p>
              The final vision comes together with careful execution and
              attention to detail.
            </p>
          </div>

        </div>

      </section>


      {/* =====================================================
          WHY JP WINGS
      ====================================================== */}
      <section className="why-section">

        <div
          className="why-image"
          style={{
            backgroundImage:
              "url('/images/interiors/relaxingspace-02.jpg')",
          }}
        >

          <div className="why-image-overlay">
            <span>JP WINGS</span>
            <small>INTERIORS</small>
          </div>

        </div>


        <div className="why-content">

          <p className="home-kicker">
            WHY JP WINGS
          </p>

          <h2>
            Designed around
            <span> your life.</span>
          </h2>

          <p className="why-description">
            We believe a beautiful interior should also make everyday
            living easier. Our approach combines visual character,
            functionality and carefully considered details.
          </p>


          <div className="why-list">

            <div>
              <Check size={17} />
              <span>
                Personalized design direction
              </span>
            </div>

            <div>
              <Check size={17} />
              <span>
                Thoughtful material selection
              </span>
            </div>

            <div>
              <Check size={17} />
              <span>
                Functional spatial planning
              </span>
            </div>

            <div>
              <Check size={17} />
              <span>
                Attention to finishing details
              </span>
            </div>

          </div>


          <a
            href="/interiors/contact"
            className="dark-arrow-link"
          >
            Start a conversation
            <ArrowRight size={17} />
          </a>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="home-cta">

        <div className="cta-glow cta-glow-one" />
        <div className="cta-glow cta-glow-two" />

        <div className="cta-content">

          <p className="home-kicker">
            LET'S CREATE TOGETHER
          </p>

          <h2>
            Your next space
            <br />
            should feel <em>like you.</em>
          </h2>

          <p>
            Tell us about your space, your ideas and what you want it to
            become.
          </p>

          <a
            href="/interiors/contact"
            className="cta-button"
          >
            Start Your Project
            <ArrowRight size={18} />
          </a>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer className="home-footer">

        <div className="footer-brand">

          <div className="footer-logo">
            JW
          </div>

          <div>
            <h3>JP WINGS</h3>
            <span>INTERIORS</span>
          </div>

        </div>


        <p>
          Thoughtful interiors for modern living.
        </p>


        <div className="footer-links">

          <a href="/interiors">
            Home
          </a>

          <a href="/interiors/portfolio">
            Projects
          </a>

          <a href="/interiors/services">
            Services
          </a>

          <a href="/interiors/contact">
            Contact
          </a>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 JP Wings Interiors
          </span>

          <span>
            Davangere · Karnataka
          </span>

        </div>

      </footer>

    </main>
  );
}

export default InteriorsHome;