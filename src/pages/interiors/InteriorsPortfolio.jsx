import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/interiors/Navbar";
import { portfolio } from "../../data/interiors";

import "./Portfolio.css";

const categories = [
  "All",
  "Living Room",
  "Kitchen",
  "Bedroom",
  "Residential",
  "Dining",
  "Office",
];

function InteriorsPortfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? portfolio
      : portfolio.filter(
          (project) =>
            project.category === activeCategory
        );

  return (
    <main className="portfolio-page">

      <Navbar />

      {/* =========================
          HERO
      ========================== */}

      <section className="portfolio-hero">

        <div className="portfolio-hero-content">

          <p className="portfolio-kicker">
            JP WINGS · INTERIORS
          </p>

          <h1>
            Spaces made
            <br />
            <em>to be lived in.</em>
          </h1>

          <p>
            Explore thoughtfully designed interiors created
            around comfort, functionality, personality and
            timeless style.
          </p>

        </div>

        <div className="portfolio-hero-number">
          <span>02</span>
          PROJECTS
        </div>

      </section>

      {/* =========================
          INTRO
      ========================== */}

      <section className="portfolio-intro">

        <div className="portfolio-intro-label">
          <span>01</span>
          SELECTED WORK
        </div>

        <div className="portfolio-intro-content">

          <h2>
            Every space has
            <span> a story.</span>
          </h2>

          <p>
            Explore our collection of interior concepts across
            living spaces, kitchens, bedrooms, dining areas,
            residences and workspaces.
          </p>

        </div>

      </section>

      {/* =========================
          PROJECTS
      ========================== */}

      <section className="portfolio-projects">

        <div className="portfolio-projects-heading">

          <div>

            <p>
              OUR PROJECTS
            </p>

            <h2>
              Designed with
              <em> intention.</em>
            </h2>

          </div>

          <span>
            {filteredProjects.length} PROJECT
            {filteredProjects.length !== 1 ? "S" : ""}
          </span>

        </div>

        {/* =========================
            FILTERS
        ========================== */}

        <div className="portfolio-filters">

          {categories.map((category) => (

            <button
              key={category}
              type="button"
              className={
                activeCategory === category
                  ? "portfolio-filter active"
                  : "portfolio-filter"
              }
              onClick={() =>
                setActiveCategory(category)
              }
            >
              {category}
            </button>

          ))}

        </div>

        {/* =========================
            PROJECT GRID
        ========================== */}

        <div className="portfolio-grid">

          {filteredProjects.map(
            (project, index) => (

              <article
                className={`portfolio-project-card ${
                  index === 0
                    ? "portfolio-project-large"
                    : ""
                }`}
                key={project.id}
              >

                <div className="portfolio-image-wrap">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="portfolio-image"
                  />

                  <div className="portfolio-image-overlay">

                    <span>
                      VIEW PROJECT
                    </span>

                    <div>
                      <ArrowUpRight size={19} />
                    </div>

                  </div>

                </div>

                <div className="portfolio-project-info">

                  <div>

                    <p>
                      {project.category}
                    </p>

                    <h3>
                      {project.title}
                    </h3>

                  </div>

                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

              </article>

            )
          )}

        </div>

        {filteredProjects.length === 0 && (

          <div className="portfolio-empty">

            <p>
              NO PROJECTS IN THIS CATEGORY YET
            </p>

            <h3>
              More projects
              <em> coming soon.</em>
            </h3>

            <button
              type="button"
              onClick={() =>
                setActiveCategory("All")
              }
            >
              View All Projects
            </button>

          </div>

        )}

      </section>

      {/* =========================
          APPROACH
      ========================== */}

      <section className="portfolio-approach">

        <div className="approach-label">

          <span>02</span>
          OUR APPROACH

        </div>

        <div className="approach-content">

          <p className="approach-small">
            MORE THAN JUST BEAUTIFUL
          </p>

          <h2>
            Design that works
            <br />
            beautifully <em>for you.</em>
          </h2>

          <p className="approach-description">
            We believe a beautiful interior should also make
            everyday life easier. Our designs bring together
            thoughtful planning, practical details and a
            distinctive visual identity.
          </p>

          <div className="approach-points">

            <div>

              <span>01</span>

              <div>

                <strong>
                  Understand
                </strong>

                <p>
                  We begin by understanding your lifestyle,
                  requirements, taste and space.
                </p>

              </div>

            </div>

            <div>

              <span>02</span>

              <div>

                <strong>
                  Design
                </strong>

                <p>
                  We develop a design direction that balances
                  aesthetics, functionality and comfort.
                </p>

              </div>

            </div>

            <div>

              <span>03</span>

              <div>

                <strong>
                  Transform
                </strong>

                <p>
                  The final design comes together through
                  carefully selected materials, finishes and details.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          SPACES
      ========================== */}

      <section className="portfolio-types">

        <div className="portfolio-types-heading">

          <p>
            SPACES WE DESIGN
          </p>

          <h2>
            From one room
            <br />
            to an <em>entire home.</em>
          </h2>

        </div>

        <div className="portfolio-types-list">

          <div>
            <span>01</span>
            <strong>Living Spaces</strong>
            <ArrowRight size={18} />
          </div>

          <div>
            <span>02</span>
            <strong>Modular Kitchens</strong>
            <ArrowRight size={18} />
          </div>

          <div>
            <span>03</span>
            <strong>Bedrooms</strong>
            <ArrowRight size={18} />
          </div>

          <div>
            <span>04</span>
            <strong>Dining Spaces</strong>
            <ArrowRight size={18} />
          </div>

          <div>
            <span>05</span>
            <strong>Workspaces</strong>
            <ArrowRight size={18} />
          </div>

        </div>

      </section>

      {/* =========================
          CTA
      ========================== */}

      <section className="portfolio-cta">

        <div>

          <p>
            HAVE A SPACE IN MIND?
          </p>

          <h2>
            Let's design
            <br />
            something <em>personal.</em>
          </h2>

          <Link
            to="/interiors/contact"
            className="portfolio-cta-button"
          >
            Start Your Project
            <ArrowRight size={17} />
          </Link>

        </div>

        <div className="portfolio-cta-brand">

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

      <footer className="portfolio-footer">

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

export default InteriorsPortfolio;