import {
  ArrowRight,
  ArrowUpRight,
  BedDouble,
  Building2,
  ChefHat,
  Home,
  Layers3,
  Ruler,
  Sofa,
  Sparkles,
  Store,
} from "lucide-react";

import { Link } from "react-router-dom";

import Navbar from "../../components/interiors/Navbar";
import { services } from "../../data/interiors";

import "./Services.css";

const iconMap = {
  Home,
  ChefHat,
  Sofa,
  BedDouble,
  Building2,
  Store,
};

const serviceDetails = {
  "Residential Interiors": {
    idealFor: "Apartments, villas & independent homes",
    highlights: [
      "Complete home planning",
      "Furniture & storage",
      "Lighting & colour planning",
    ],
  },

  "Modular Kitchens": {
    idealFor: "Modern homes & compact kitchens",
    highlights: [
      "Smart storage solutions",
      "Modular cabinets",
      "Countertop & finish selection",
    ],
  },

  "Living Room Design": {
    idealFor: "Family spaces & entertainment areas",
    highlights: [
      "Furniture layout",
      "TV & media units",
      "Lighting & feature walls",
    ],
  },

  "Bedroom Interiors": {
    idealFor: "Master bedrooms & personal spaces",
    highlights: [
      "Wardrobes & storage",
      "Bed-back designs",
      "Ambient lighting",
    ],
  },

  "Office Interiors": {
    idealFor: "Corporate & professional workspaces",
    highlights: [
      "Workstation planning",
      "Reception & meeting areas",
      "Functional storage",
    ],
  },

  "Commercial Interiors": {
    idealFor: "Retail, studios, cafes & businesses",
    highlights: [
      "Space planning",
      "Brand-focused interiors",
      "Customer experience design",
    ],
  },
};

function InteriorsServices() {
  return (
    <main className="services-page">

      <Navbar />

      {/* =========================
          HERO
      ========================== */}

      <section className="services-hero">

        <div className="services-hero-content">

          <p className="services-kicker">
            JP WINGS · INTERIORS
          </p>

          <h1>
            Spaces designed
            <br />
            <em>around you.</em>
          </h1>

          <p className="services-hero-description">
            From individual rooms to complete homes and commercial
            environments, we create interiors that combine beauty,
            comfort and everyday functionality.
          </p>

        </div>

        <div className="services-hero-number">
          <span>02</span>
          SERVICES
        </div>

      </section>

      {/* =========================
          INTRO
      ========================== */}

      <section className="services-intro">

        <div className="services-intro-label">
          <span>01</span>
          WHAT WE DO
        </div>

        <div className="services-intro-content">

          <h2>
            Interior design
            <span> with purpose.</span>
          </h2>

          <p>
            We design spaces around the people who use them.
            From the first layout to the smallest finishing detail,
            every element is planned to create a space that feels
            beautiful, practical and personal.
          </p>

        </div>

      </section>

      {/* =========================
          SERVICES
      ========================== */}

      <section className="services-list-section">

        <div className="services-section-heading">

          <div>

            <p>
              OUR EXPERTISE
            </p>

            <h2>
              Designed for
              <br />
              <em>every space.</em>
            </h2>

          </div>

          <span>
            {services.length} SERVICES
          </span>

        </div>

        <div className="services-grid">

          {services.map((service, index) => {

            const Icon = iconMap[service.icon];

            const details =
              serviceDetails[service.title];

            const serviceSlug =
              service.title === "Residential Interiors"
                ? "residential"
                : service.title === "Modular Kitchens"
                ? "kitchen"
                : service.title === "Living Room Design"
                ? "living-room"
                : service.title === "Bedroom Interiors"
                ? "bedroom"
                : service.title === "Office Interiors"
                ? "office"
                : "commercial";

            return (
              <article
                className="service-large-card"
                key={service.id}
              >

                {/* TOP */}

                <div className="service-card-top">

                  <span className="service-number">
                    0{index + 1}
                  </span>

                  <div className="service-icon">
                    <Icon
                      size={23}
                      strokeWidth={1.5}
                    />
                  </div>

                </div>

                {/* MAIN CONTENT */}

                <div className="service-card-content">

                  <p className="service-category">
                    {service.title === "Residential Interiors"
                      ? "COMPLETE HOME INTERIORS"
                      : service.title.toUpperCase()}
                  </p>

                  <h3>
                    {service.title}
                  </h3>

                  <p className="service-description">
                    {service.description}
                  </p>

                  <div className="service-ideal">

                    <span>
                      IDEAL FOR
                    </span>

                    <strong>
                      {details.idealFor}
                    </strong>

                  </div>

                  <div className="service-highlights">

                    {details.highlights.map(
                      (item, itemIndex) => (
                        <span key={itemIndex}>
                          {item}
                        </span>
                      )
                    )}

                  </div>

                </div>

                {/* BOTTOM */}

                <Link
                  to={`/interiors/services/${serviceSlug}`}
                  className="service-card-bottom"
                >

                  <span>
                    EXPLORE SERVICE
                  </span>

                  <ArrowUpRight size={18} />

                </Link>

              </article>
            );
          })}

        </div>

      </section>

      {/* =========================
          PROCESS
      ========================== */}

      <section className="services-process">

        <div className="process-label">
          <span>02</span>
          OUR PROCESS
        </div>

        <div className="process-content">

          <p className="process-small">
            FROM IDEA TO REALITY
          </p>

          <h2>
            A simple process.
            <br />
            <em>A thoughtful result.</em>
          </h2>

          <p className="process-description">
            We keep the design journey clear and collaborative,
            so you always know what comes next.
          </p>

          <div className="process-steps">

            <div className="process-step">

              <span>01</span>

              <div className="process-step-icon">
                <Ruler size={21} />
              </div>

              <div>
                <h3>
                  Consultation
                </h3>

                <p>
                  We understand your requirements, lifestyle,
                  preferences, budget and available space.
                </p>
              </div>

            </div>

            <div className="process-step">

              <span>02</span>

              <div className="process-step-icon">
                <Sparkles size={21} />
              </div>

              <div>
                <h3>
                  Design
                </h3>

                <p>
                  We develop a design direction that brings
                  your vision and practical needs together.
                </p>
              </div>

            </div>

            <div className="process-step">

              <span>03</span>

              <div className="process-step-icon">
                <Layers3 size={21} />
              </div>

              <div>
                <h3>
                  Materials & Details
                </h3>

                <p>
                  Colours, finishes, materials, furniture and
                  lighting are carefully selected.
                </p>
              </div>

            </div>

            <div className="process-step">

              <span>04</span>

              <div className="process-step-icon">
                <Building2 size={21} />
              </div>

              <div>
                <h3>
                  Transformation
                </h3>

                <p>
                  The final design comes together into a space
                  that feels personal, practical and complete.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          WHY JP WINGS
      ========================== */}

      <section className="services-why">

        <div className="services-why-heading">

          <p>
            WHY JP WINGS
          </p>

          <h2>
            Beauty meets
            <br />
            <em>functionality.</em>
          </h2>

        </div>

        <div className="services-why-grid">

          <div>
            <span>01</span>

            <h3>
              Personalized Design
            </h3>

            <p>
              Your space should reflect your personality,
              lifestyle and individual requirements.
            </p>
          </div>

          <div>
            <span>02</span>

            <h3>
              Smart Planning
            </h3>

            <p>
              Every layout is planned to make the best use
              of available space.
            </p>
          </div>

          <div>
            <span>03</span>

            <h3>
              Thoughtful Details
            </h3>

            <p>
              Materials, colours, lighting and finishes are
              considered as part of the complete design.
            </p>
          </div>

          <div>
            <span>04</span>

            <h3>
              Timeless Interiors
            </h3>

            <p>
              We aim for interiors that remain elegant,
              comfortable and practical over time.
            </p>
          </div>

        </div>

      </section>

      {/* =========================
          CTA
      ========================== */}

      <section className="services-cta">

        <div>

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
            className="services-cta-button"
          >
            Start Your Project
            <ArrowRight size={17} />
          </Link>

        </div>

        <div className="services-cta-brand">

          <span>
            JW
          </span>

          <strong>
            JP WINGS
          </strong>

          <small>
            INTERIORS
          </small>

        </div>

      </section>

      {/* =========================
          FOOTER
      ========================== */}

      <footer className="services-footer">

        <div>

          <strong>
            JP WINGS
          </strong>

          <span>
            INTERIORS
          </span>

        </div>

        <p>
          © 2026 JP Wings Interiors · Davangere
        </p>

        <Link to="/interiors/contact">
          Start a Project
          <ArrowUpRight size={15} />
        </Link>

      </footer>

    </main>
  );
}

export default InteriorsServices;