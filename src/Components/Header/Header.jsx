import React from 'react';

import './Header.css'
import Logo from '../../assets/Logo.png';
import HeaderImg from '../../assets/header_img.png'

const Header = () => {
  return (
      <div className="header">
          <div className="header__logo">
              <img src={Logo} 
              alt="JP WEB Logo"
              width={60}
              height={60}
              className='header__logo-image'/>
              <span className='header__logo-text'>JP WEB</span>
          </div>

          <div className="header__content section__padding">
              <div className="header__content-text">
                  <h1 className='header__title'>Building Smart, Stunning, & Scalable Websites</h1>
                  <p className='header__description'>At JP WEB, we craft modern digital experiences with cutting-edge technology,
                      sleek design, and performance in mind. Let’s take your online presence to the next level.</p>
                  <div className="header__buttons">
                    <a href="https://tally.so/r/w2G5Qj" target="_blank" rel="noopener noreferrer">
                      <button className="header__cta-button header__cta-button--primary">
                        <span>Book A Call Now</span>
                        <svg className="header__cta-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
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
                        <svg className="header__cta-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
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
              </div>

              <div className="header__content-image">
                <div className="header__image-container">
                  <img src={HeaderImg} alt="Header" className="header__image floating"/>
                  <div className="header__image-glow"></div>
                </div>
              </div>
          </div>
      </div>
  );
};

export default Header;