import { useState } from "react";
import "./Header.css";
import Logo from "../../assets/Logo.png";
import HeaderImg from "../../assets/header_img.png";

const Header = () => {
  const [loading, setLoading] = useState(true); // Track video load state

  return (
    <div className="header">
      <div className="header__logo">
        <img
          src={Logo}
          alt="JP WEB Logo"
          width={60}
          height={60}
          className="header__logo-image"
        />
        <span className="header__logo-text">JP WEB</span>
      </div>

      <div className="header__content section__padding">
        <div className="header__content-text">
          <p className="header__trust-badge">
            Trusted by 30+ Nigerian businesses in tech, finance & e-commerce
          </p>
          <h1 className="header__title">
            Your Business Deserves Software That
            <br />
            Actually Works — Not Just Looks Good
          </h1>
          <p className="header__description">
            Stop wasting money on websites and apps that can't deliver.
          </p>
          <p className="header__description">
            At JP WEB, we use our Digital Ecosystem Blueprint™ to connect your
            website, payments, CRM, and tools — into one seamless system that
            helps you sell more, scale faster, and stay secure.
          </p>
          <div className="header__buttons">
            <a
              href="https://tally.so/r/w2G5Qj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="header__cta-button header__cta-button--primary">
                <span>Book A Call Now</span>
                <svg
                  className="header__cta-arrow"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M4.16667 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </a>

            <a
              href="https://wa.me/2349023843604?text=Hi%20JPWeb%2C%20I'm%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="header__cta-button header__cta-button--secondary">
                <span>Reach Out Now</span>
                <svg
                  className="header__cta-arrow"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M4.16667 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </a>
          </div>
          <ul className="header__benefits">
            <li>No more ghost developers or endless delays</li>
            <li>Transparent process with guaranteed milestones</li>
            <li>Your business stays in control — fast, secure, and scalable</li>
          </ul>
        </div>

        <div className="header__content-image">
          <div className="header__image-container">
            {loading && (
              <div className="header__video-loader">
                <div className="spinner"></div>
                <p>Loading video...</p>
              </div>
            )}

            <div className="video-responsive">
              <iframe
                src="https://drive.google.com/file/d/1EHmiFVjiyBUeRx6VNX5SPTaSeWEYPu39/preview"
                allow="autoplay"
                style={{ border: "none", display: loading ? "none" : "block" }}
                onLoad={() => setLoading(false)} // Hide loader when iframe loads
                className="header__video-iframe"
              ></iframe>
            </div>

            <div className="header__image-glow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
