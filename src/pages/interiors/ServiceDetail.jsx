import {
  ArrowLeft,
  ArrowRight,
  Check,
  MessageCircle,
} from "lucide-react";

import { Link, useParams } from "react-router-dom";

import Navbar from "../../components/interiors/Navbar";

import "./ServiceDetail.css";

const serviceDetails = {
  residential: {
    number: "01",
    category: "COMPLETE HOME INTERIORS",
    title: "Residential",
    accent: "Interiors",
    description:
      "Thoughtfully planned interiors for apartments, villas and independent homes, designed around the way you live.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85",

    overview:
      "Your home should feel personal, comfortable and effortless. JP Wings Interiors creates complete residential interiors by combining smart space planning, furniture, lighting, colours and materials into one cohesive design.",

    features: [
      "Complete home space planning",
      "Furniture and storage planning",
      "Living room design",
      "Bedroom interiors",
      "Kitchen planning",
      "Lighting and colour planning",
    ],

    process: [
      "Understanding your lifestyle and requirements",
      "Planning the layout and design direction",
      "Selecting materials, colours and finishes",
      "Creating a complete and practical interior",
    ],
  },

  kitchen: {
    number: "02",
    category: "MODULAR KITCHENS",
    title: "Modular",
    accent: "Kitchens",
    description:
      "Functional and elegant kitchens designed around your cooking habits, storage requirements and available space.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=85",

    overview:
      "A well-designed kitchen should make everyday cooking and storage easier. We create modular kitchens with practical layouts, smart storage and carefully selected finishes.",

    features: [
      "Kitchen layout planning",
      "Modular cabinet design",
      "Smart storage solutions",
      "Countertop selection",
      "Material and finish selection",
      "Lighting planning",
    ],

    process: [
      "Understanding your cooking and storage needs",
      "Planning the kitchen layout",
      "Selecting cabinets, materials and finishes",
      "Creating a functional and elegant kitchen",
    ],
  },

  "living-room": {
    number: "03",
    category: "LIVING ROOM DESIGN",
    title: "Living Room",
    accent: "Design",
    description:
      "Elegant living spaces designed for everyday comfort, conversations, entertainment and memorable moments.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85",

    overview:
      "The living room is often the heart of the home. We design balanced spaces where furniture, lighting, colours, textures and storage work together beautifully.",

    features: [
      "Furniture layout planning",
      "TV and media units",
      "Feature walls",
      "Lighting design",
      "Colour and material planning",
      "Decorative detailing",
    ],

    process: [
      "Understanding the way you use the space",
      "Creating the furniture and circulation plan",
      "Developing the visual design",
      "Finalizing materials, lighting and details",
    ],
  },

  bedroom: {
    number: "04",
    category: "BEDROOM INTERIORS",
    title: "Bedroom",
    accent: "Interiors",
    description:
      "Calm and personalized bedrooms designed for comfort, relaxation, storage and everyday living.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=85",

    overview:
      "A bedroom should feel like your own private space. Our bedroom interiors combine comfortable layouts, thoughtful storage, lighting and personalized design details.",

    features: [
      "Wardrobe and storage planning",
      "Bed-back designs",
      "Bedside furniture",
      "Ambient lighting",
      "Colour and material selection",
      "Personalized design details",
    ],

    process: [
      "Understanding your lifestyle and storage needs",
      "Planning furniture and circulation",
      "Creating the bedroom design",
      "Finalizing finishes, lighting and details",
    ],
  },

  office: {
    number: "05",
    category: "OFFICE INTERIORS",
    title: "Office",
    accent: "Interiors",
    description:
      "Professional workspaces designed to support productivity, collaboration and a strong visual identity.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85",

    overview:
      "A good workspace should be functional while representing the identity of the business. We create professional interiors with thoughtful layouts, furniture and lighting.",

    features: [
      "Workstation planning",
      "Reception areas",
      "Meeting room planning",
      "Storage solutions",
      "Lighting planning",
      "Professional finishes",
    ],

    process: [
      "Understanding the business requirements",
      "Planning workstations and circulation",
      "Developing the workspace design",
      "Finalizing furniture, materials and lighting",
    ],
  },

  commercial: {
    number: "06",
    category: "COMMERCIAL INTERIORS",
    title: "Commercial",
    accent: "Interiors",
    description:
      "Purposeful commercial spaces for retail stores, studios, cafes, businesses and customer-facing environments.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",

    overview:
      "Commercial interiors need to look distinctive while working efficiently for customers and staff. We design spaces that balance functionality, brand identity and experience.",

    features: [
      "Commercial space planning",
      "Customer flow planning",
      "Brand-focused interiors",
      "Furniture and display planning",
      "Lighting design",
      "Material and finish selection",
    ],

    process: [
      "Understanding the business and space",
      "Planning customer and staff movement",
      "Developing the interior concept",
      "Finalizing materials, furniture and details",
    ],
  },
};

function ServiceDetail() {
  const { serviceSlug } = useParams();

  const service = serviceDetails[serviceSlug];

  if (!service) {
    return (
      <main>
        <Navbar />

        <section className="service-not-found">
          <p>SERVICE NOT FOUND</p>

          <h1>
            We couldn't find
            <br />
            this <em>service.</em>
          </h1>

          <Link to="/interiors/services" className="service-back-button">
            <ArrowLeft size={17} />
            Back to Services
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="service-detail-page">
      <Navbar />

      {/* HERO */}

      <section className="service-detail-hero">
        <img
          src={service.image}
          alt={service.title}
          className="service-detail-hero-image"
        />

        <div className="service-detail-hero-overlay" />

        <div className="service-detail-hero-content">
          <Link
            to="/interiors/services"
            className="service-detail-back"
          >
            <ArrowLeft size={16} />
            All Services
          </Link>

          <p className="service-detail-kicker">
            JP WINGS · {service.category}
          </p>

          <div className="service-detail-title-row">
            <div>
              <h1>
                {service.title}
                <br />
                <em>{service.accent}.</em>
              </h1>

              <p>{service.description}</p>
            </div>

            <span className="service-detail-number">
              {service.number}
            </span>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}

      <section className="service-detail-overview">
        <div className="service-detail-label">
          <span>01</span>
          OVERVIEW
        </div>

        <div className="service-detail-overview-content">
          <h2>
            Designed around
            <br />
            <em>the way you live.</em>
          </h2>

          <p>{service.overview}</p>

          <Link
            to="/interiors/contact"
            className="service-detail-primary-button"
          >
            Discuss Your Project
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* WHAT WE PROVIDE */}

      <section className="service-detail-features">
        <div className="service-detail-section-heading">
          <p>WHAT WE PROVIDE</p>

          <h2>
            Everything your
            <br />
            space <em>needs.</em>
          </h2>
        </div>

        <div className="service-feature-list">
          {service.features.map((feature, index) => (
            <div
              className="service-feature-item"
              key={feature}
            >
              <span>
                0{index + 1}
              </span>

              <div>
                <Check size={19} />
                <strong>{feature}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}

      <section className="service-detail-process">
        <div className="service-detail-label">
          <span>02</span>
          HOW WE WORK
        </div>

        <div className="service-process-content">
          <p>OUR APPROACH</p>

          <h2>
            From your idea
            <br />
            to your <em>space.</em>
          </h2>

          <div className="service-process-list">
            {service.process.map((step, index) => (
              <div
                className="service-process-item"
                key={step}
              >
                <span>
                  0{index + 1}
                </span>

                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="service-detail-cta">
        <div>
          <p>READY TO START?</p>

          <h2>
            Let's create
            <br />
            something <em>beautiful.</em>
          </h2>

          <div className="service-detail-cta-buttons">
            <Link
              to="/interiors/contact"
              className="service-detail-cta-primary"
            >
              Start Your Project
              <ArrowRight size={17} />
            </Link>

            <a
              href="https://wa.me/918073118587?text=Hello%20JP%20Wings%2C%20I%20would%20like%20to%20discuss%20an%20interior%20project."
              target="_blank"
              rel="noreferrer"
              className="service-detail-cta-whatsapp"
            >
              WhatsApp Us
              <MessageCircle size={17} />
            </a>
          </div>
        </div>

        <div className="service-detail-brand">
          <span>JW</span>
          <strong>JP WINGS</strong>
          <small>INTERIORS</small>
        </div>
      </section>

      <footer className="service-detail-footer">
        <div>
          <strong>JP WINGS</strong>
          <span>INTERIORS</span>
        </div>

        <p>
          © 2026 JP Wings Interiors · Davangere
        </p>

        <Link to="/interiors/services">
          <ArrowLeft size={15} />
          Back to Services
        </Link>
      </footer>
    </main>
  );
}

export default ServiceDetail;