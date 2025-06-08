import React from 'react';

import './Header.css'
import Logo from '../../assets/Logo.png';
import HeaderImg from '../../assets/header_img.png'

const Header = () => {
  return (
      <div className="header">
          <div className="header_logo">
              <img src={Logo} alt="Logo"/>
              <p>JP WEB</p>
          </div>
          <div className="header_content section__padding">
              <div className="header_content-text">
                  <h2>Building Smart, Stunning, & Scalable Websites</h2>
                  <p>At JP WEB, we craft modern digital experiences with cutting-edge technology,
                      sleek design, and performance in mind. Let’s take your online presence to the next level.</p>
                  <button className="button">
                      Explore Our Services
                  </button>
              </div>
              <div className="header_content-image">
                  <img src={HeaderImg} alt="Header" className="floating"/>
              </div>
          </div>
      </div>
  );
};

export default Header;