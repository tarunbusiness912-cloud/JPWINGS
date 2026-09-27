import { ArrowDown, ArrowRight } from "lucide-react";

function InteriorHero() {
  return (
    <section className="hero">

      {/* =====================================================
          CLIENT HERO BACKGROUND IMAGE
      ===================================================== */}
      <div
        className="hero-image"
        style={{
          backgroundImage:
            "url('/images/interiors/living-01.jpg')",
        }}
      />

      {/* Dark / glass gradient over image */}
      <div className="hero-gradient" />

      {/* Decorative glass elements */}
      <div className="hero-glass-orb hero-orb-one" />
      <div className="hero-glass-orb hero-orb-two" />

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}
      <div className="hero-content">

        <div className="hero-eyebrow">
          <span />
          INTERIOR DESIGN STUDIO
        </div>

        <h1>
          Designing spaces
          <br />
          <em>that feel like you.</em>
        </h1>

        <p>
          Thoughtful interiors designed around your lifestyle,
          personality, and the way you want to experience your space.
        </p>

        <div className="hero-buttons">

          <a
            href="/interiors/contact"
            className="hero-primary"
          >
            Start Your Project
            <ArrowRight size={18} />
          </a>

          <a
            href="/interiors/portfolio"
            className="hero-secondary"
          >
            Explore Projects
          </a>

        </div>

      </div>

      {/* =====================================================
          COMPANY INFORMATION
      ===================================================== */}
      <div className="hero-info">

        <div>
          <strong>JP</strong>
          <span>WINGS GROUP</span>
        </div>

        <div>
          <strong>DVG</strong>
          <span>DAVANGERE</span>
        </div>

        <div>
          <strong>01</strong>
          <span>INTERIOR DIVISION</span>
        </div>

      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}
      <div className="hero-scroll">
        <ArrowDown size={16} />
        <span>SCROLL TO EXPLORE</span>
      </div>

    </section>
  );
}

export default InteriorHero;