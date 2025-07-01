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
                  <button className="header__cta-button">                
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