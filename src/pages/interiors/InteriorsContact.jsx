import {
  ArrowLeft,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";

import Navbar from "../../components/interiors/Navbar";
import { companyInfo } from "../../data/interiors";

import "./Contact.css";

function InteriorsContact() {
  return (
    <main className="contact-page">
      <Navbar />

      {/* =========================
          CONTACT HERO
      ========================== */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <p className="contact-kicker">JP WINGS · INTERIORS</p>

          <h1>
            Let's create
            <br />
            something <em>beautiful.</em>
          </h1>

          <p>
            Have a home, office or commercial space in mind?
            Tell us what you are imagining and let's start the conversation.
          </p>
        </div>

        <div className="contact-hero-number">
          <span>04</span>
          CONTACT
        </div>
      </section>

      {/* =========================
          CONTACT INFORMATION
      ========================== */}
      <section className="contact-main">

        <div className="contact-info">

          <p className="contact-label">
            GET IN TOUCH
          </p>

          <h2>
            We'd love to hear
            <span> from you.</span>
          </h2>

          <p className="contact-description">
            Whether you are planning a new home, renovating an existing
            space or creating a commercial environment, our team is ready
            to understand your requirements.
          </p>

          {/* PHONE */}
          <a
            href={`tel:+91${companyInfo.phone}`}
            className="contact-detail"
          >
            <div className="contact-detail-icon">
              <Phone size={19} />
            </div>

            <div>
              <small>CALL US</small>
              <strong>+91 {companyInfo.phone}</strong>
            </div>

            <ArrowUpRight size={17} />
          </a>

          {/* WHATSAPP */}
          <a
            href={`https://wa.me/91${companyInfo.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="contact-detail"
          >
            <div className="contact-detail-icon">
              <MessageCircle size={19} />
            </div>

            <div>
              <small>WHATSAPP</small>
              <strong>+91 {companyInfo.whatsapp}</strong>
            </div>

            <ArrowUpRight size={17} />
          </a>

          {/* EMAIL */}
          <a
            href={`mailto:${companyInfo.email}`}
            className="contact-detail"
          >
            <div className="contact-detail-icon">
              <Mail size={19} />
            </div>

            <div>
              <small>EMAIL</small>
              <strong>{companyInfo.email}</strong>
            </div>

            <ArrowUpRight size={17} />
          </a>

        {/* INSTAGRAM */}
<a
  href={companyInfo.instagram}
  target="_blank"
  rel="noreferrer"
  className="contact-detail"
>
  <div className="contact-detail-icon">
    <ArrowUpRight size={19} />
  </div>

  <div>
    <small>INSTAGRAM</small>
    <strong>@jpwings_24_dvg</strong>
  </div>

  <ArrowUpRight size={17} />
</a>

        </div>


        {/* =========================
            ADDRESS CARD
        ========================== */}
        <div className="contact-location">

          <div className="location-card">

            <div className="location-top">
              <div className="location-icon">
                <MapPin size={21} />
              </div>

              <span>OUR LOCATION</span>
            </div>

            <h3>
              {companyInfo.address.company}
            </h3>

            <p className="location-division">
              {companyInfo.address.division}
            </p>

            <p className="location-address">
              {companyInfo.address.area}
              <br />
              {companyInfo.address.city}
              <br />
              {companyInfo.address.pincode}
            </p>

            <a
              href={companyInfo.googleMaps}
              target="_blank"
              rel="noreferrer"
              className="map-button"
            >
              Open in Google Maps
              <ArrowUpRight size={17} />
            </a>

          </div>

          <div className="contact-note">
            <span>JP WINGS</span>

            <p>
              Designing spaces with intention,
              detail and personality.
            </p>
          </div>

        </div>

      </section>


      {/* =========================
          CONTACT CTA
      ========================== */}
      <section className="contact-bottom">

        <p>READY TO BEGIN?</p>

        <h2>
          Tell us about
          <br />
          your <em>space.</em>
        </h2>

        <a
          href={`https://wa.me/91${companyInfo.whatsapp}?text=Hello%20JP%20Wings%2C%20I%20would%20like%20to%20discuss%20an%20interior%20project.`}
          target="_blank"
          rel="noreferrer"
          className="contact-whatsapp-button"
        >
          Start on WhatsApp
          <MessageCircle size={18} />
        </a>

      </section>


      {/* =========================
          FOOTER
      ========================== */}
      <footer className="contact-footer">

        <div>
          <strong>JP WINGS</strong>
          <span>INTERIORS</span>
        </div>

        <p>
          © 2026 JP Wings Interiors · Davangere
        </p>

        <a href="/">
          <ArrowLeft size={15} />
          Back to Home
        </a>

      </footer>

    </main>
  );
}

export default InteriorsContact;